import fs from "fs";
import path from "path";
import sharp from "sharp";
import piexif from "piexifjs";

// Business pin: Flat, 18b Belmont Cl, Huddersfield HD1 5DA
const business = { lat: 53.6503102, lng: -1.7884584 };
const MAX_WIDTH = 1600;

function toDms(dec) {
  const abs = Math.abs(dec);
  const d = Math.floor(abs);
  const mFloat = (abs - d) * 60;
  const m = Math.floor(mFloat);
  const s = Math.round((mFloat - m) * 60 * 100);
  return [[d, 1], [m, 1], [s, 100]];
}

async function processImage(filePath, lat, lng) {
  const input = fs.readFileSync(filePath); // buffer in, so no open handle when we overwrite
  const img = sharp(input).rotate(); // respect EXIF orientation before stripping
  const meta = await img.metadata();
  const pipeline =
    (meta.width ?? 0) > MAX_WIDTH ? img.resize({ width: MAX_WIDTH }) : img;
  const buf = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  const data = buf.toString("binary");
  const exifObj = {
    "0th": {
      [piexif.ImageIFD.ImageDescription]: "Huddersfield Removals, Huddersfield, West Yorkshire, United Kingdom",
    },
    GPS: {
      [piexif.GPSIFD.GPSLatitudeRef]: lat >= 0 ? "N" : "S",
      [piexif.GPSIFD.GPSLatitude]: toDms(lat),
      [piexif.GPSIFD.GPSLongitudeRef]: lng >= 0 ? "E" : "W",
      [piexif.GPSIFD.GPSLongitude]: toDms(lng),
    },
  };
  const exifBytes = piexif.dump(exifObj);
  const out = Buffer.from(piexif.insert(exifBytes, data), "binary");
  // Always write as .jpg
  const outPath = filePath.replace(/\.(jpeg|png)$/i, ".jpg");
  fs.writeFileSync(outPath, out);
  if (outPath !== filePath) fs.unlinkSync(filePath);
  console.log("Processed:", outPath, `(${(out.length / 1024).toFixed(0)} KB)`);
}

async function walk(dir, lat, lng) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) await walk(p, lat, lng);
    else if (/\.(jpg|jpeg|png)$/i.test(f)) await processImage(p, lat, lng);
  }
}

await walk(path.join(process.cwd(), "public/images"), business.lat, business.lng);
console.log("Done");
