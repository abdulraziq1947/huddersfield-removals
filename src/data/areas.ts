export interface AreaEntry {
  slug: string;
  name: string;
  landmark: string;
  latitude: number;
  longitude: number;
}

export const areas: AreaEntry[] = [
  {
    "slug": "huddersfield-town-centre",
    "name": "Huddersfield Town Centre",
    "landmark": "Huddersfield Railway Station",
    "latitude": 53.648,
    "longitude": -1.785
  },
  {
    "slug": "almondbury",
    "name": "Almondbury",
    "landmark": "Almondbury Library",
    "latitude": 53.631,
    "longitude": -1.769
  },
  {
    "slug": "marsh",
    "name": "Marsh",
    "landmark": "Marsh Mills",
    "latitude": 53.655,
    "longitude": -1.778
  },
  {
    "slug": "lockwood",
    "name": "Lockwood",
    "landmark": "Lockwood Viaduct",
    "latitude": 53.638,
    "longitude": -1.799
  },
  {
    "slug": "moldgreen",
    "name": "Moldgreen",
    "landmark": "Moldgreen Community Centre",
    "latitude": 53.644,
    "longitude": -1.776
  },
  {
    "slug": "newsome",
    "name": "Newsome",
    "landmark": "Newsome Junior School",
    "latitude": 53.628,
    "longitude": -1.789
  },
  {
    "slug": "birkby",
    "name": "Birkby",
    "landmark": "Birkby Fartown",
    "latitude": 53.669,
    "longitude": -1.803
  },
  {
    "slug": "farnley-tyas",
    "name": "Farnley Tyas",
    "landmark": "Farnley Tyas Village Hall",
    "latitude": 53.625,
    "longitude": -1.742
  },
  {
    "slug": "linthwaite",
    "name": "Linthwaite",
    "landmark": "Linthwaite Clough",
    "latitude": 53.625,
    "longitude": -1.855
  },
  {
    "slug": "golcar",
    "name": "Golcar",
    "landmark": "Golcar Lily Day",
    "latitude": 53.64,
    "longitude": -1.858
  },
  {
    "slug": "slaithwaite",
    "name": "Slaithwaite",
    "landmark": "Slaithwaite Canal",
    "latitude": 53.623,
    "longitude": -1.881
  },
  {
    "slug": "meltham",
    "name": "Meltham",
    "landmark": "Meltham Mills",
    "latitude": 53.593,
    "longitude": -1.85
  },
  {
    "slug": "honley",
    "name": "Honley",
    "landmark": "Honley Village",
    "latitude": 53.602,
    "longitude": -1.789
  },
  {
    "slug": "holmfirth",
    "name": "Holmfirth",
    "landmark": "Holmfirth Market",
    "latitude": 53.573,
    "longitude": -1.787
  },
  {
    "slug": "denby-dale",
    "name": "Denby Dale",
    "landmark": "Denby Dale Viaduct",
    "latitude": 53.572,
    "longitude": -1.657
  },
  {
    "slug": "skelmanthorpe",
    "name": "Skelmanthorpe",
    "landmark": "Skelmanthorpe Library",
    "latitude": 53.594,
    "longitude": -1.664
  },
  {
    "slug": "brighouse",
    "name": "Brighouse",
    "landmark": "Brighouse Canal Basin",
    "latitude": 53.703,
    "longitude": -1.78
  },
  {
    "slug": "elland",
    "name": "Elland",
    "landmark": "Elland Bridge",
    "latitude": 53.685,
    "longitude": -1.836
  },
  {
    "slug": "fixby",
    "name": "Fixby",
    "landmark": "Fixby Hall",
    "latitude": 53.659,
    "longitude": -1.812
  },
  {
    "slug": "crosland-moor",
    "name": "Crosland Moor",
    "landmark": "Crosland Moor Community Centre",
    "latitude": 53.634,
    "longitude": -1.82
  },
  {
    "slug": "longwood",
    "name": "Longwood",
    "landmark": "Longwood Tower",
    "latitude": 53.645,
    "longitude": -1.835
  },
  {
    "slug": "milnsbridge",
    "name": "Milnsbridge",
    "landmark": "Milnsbridge Canal",
    "latitude": 53.64,
    "longitude": -1.845
  },
  {
    "slug": "rawthorpe",
    "name": "Rawthorpe",
    "landmark": "Rawthorpe Lane",
    "latitude": 53.661,
    "longitude": -1.815
  },
  {
    "slug": "rastrick",
    "name": "Rastrick",
    "landmark": "Rastrick Library",
    "latitude": 53.681,
    "longitude": -1.778
  },
  {
    "slug": "lepton",
    "name": "Lepton",
    "landmark": "Lepton Great Church",
    "latitude": 53.639,
    "longitude": -1.735
  },
  {
    "slug": "shelley",
    "name": "Shelley",
    "landmark": "Shelley College",
    "latitude": 53.606,
    "longitude": -1.71
  },
  {
    "slug": "kirkburton",
    "name": "Kirkburton",
    "landmark": "Kirkburton Village",
    "latitude": 53.598,
    "longitude": -1.704
  },
  {
    "slug": "dalton",
    "name": "Dalton",
    "landmark": "Dalton Bank Road",
    "latitude": 53.652,
    "longitude": -1.755
  },
  {
    "slug": "outlane",
    "name": "Outlane",
    "landmark": "Outlane Golf Club",
    "latitude": 53.655,
    "longitude": -1.865
  },
  {
    "slug": "deighton",
    "name": "Deighton",
    "landmark": "Deighton Sports Arena",
    "latitude": 53.673,
    "longitude": -1.765
  },
  {
    "slug": "lindley",
    "name": "Lindley",
    "landmark": "Lindley Clock Tower",
    "latitude": 53.659,
    "longitude": -1.817
  },
  {
    "slug": "mirfield",
    "name": "Mirfield",
    "landmark": "Mirfield Railway Station",
    "latitude": 53.673,
    "longitude": -1.696
  }
];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
