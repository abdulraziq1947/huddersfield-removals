export interface RouteEntry {
  slug: string;
  title: string;
  miles: number;
  driveTime: string;
  destinationPlace: string;
  intro: string[];
  routeNotes: string;
  preparation: string;
  faqs: { q: string; a: string }[];
}

export const routes: RouteEntry[] = [
  {
    slug: "huddersfield-to-leeds",
    title: "Huddersfield to Leeds Removals",
    miles: 24,
    driveTime: "40–55 minutes off-peak",
    destinationPlace: "Leeds, West Yorkshire, UK",
    intro: [
      "Huddersfield Removals runs door-to-door house and office moves from Huddersfield to Leeds, roughly 24 road miles via the M62 or A62 depending on where you are loading in Kirklees and which Leeds suburb you are heading for. The same crew wraps, loads, drives and unloads; nothing goes through a depot or changes hands mid-journey.",
      "Leeds is one of the most common long-distance routes we cover from West Yorkshire: Headingley and Hyde Park student moves, terraced streets in Chapel Allerton and Roundhay, and city-centre apartments near the railway station. We plan an early start from Huddersfield to avoid peak M62 congestion around Brighouse and Chain Bar.",
      "Your belongings travel strapped and blanket-wrapped in our 3.5-tonne Luton vans with £50,000 goods-in-transit cover per vehicle load and £1 million public liability insurance, as covered in our terms. Use the cost calculator for a rough idea, then ask for a written quote after we have seen the job.",
    ],
    routeNotes:
      "The usual route is M62 east from Huddersfield, exiting for Leeds city centre, Headingley or the south Leeds suburbs depending on your postcode. Rush-hour traffic can add thirty minutes; we agree realistic arrival windows and keep you updated on the day. Leeds city-centre and university-area moves often need parking dispensations from Leeds City Council, we factor that into planning at survey stage.",
    preparation:
      "Appliances must be disconnected, defrosted and dry before we arrive. Parking at both ends should be arranged where restricted, in Kirklees we advise on dispensations via Kirklees Council. A video or in-person survey confirms volume so the quote covers the full Leeds move in one trip where possible.",
    faqs: [
      {
        q: "Can a Huddersfield to Leeds move be done in one day?",
        a: "Yes. most home moves complete in a single day with an early load in Huddersfield and afternoon unload in Leeds. Larger properties may need two van loads or a longer day; that is confirmed at survey.",
      },
      {
        q: "How is a Leeds move priced?",
        a: "Volume, access at both addresses and crew time drive the price. We give a fixed written quote after survey, use the calculator first for a guide range only.",
      },
      {
        q: "Do you move students from Huddersfield to Leeds?",
        a: "Yes. End-of-term moves to Leeds student areas are common. Tell us both addresses and tenancy dates when you enquire.",
      },
      {
        q: "Will the same crew handle the whole journey?",
        a: "Always. One crew loads in Huddersfield and unloads in Leeds, no warehouse transfers.",
      },
    ],
  },
  {
    slug: "huddersfield-to-manchester",
    title: "Huddersfield to Manchester Removals",
    miles: 28,
    driveTime: "45–70 minutes off-peak",
    destinationPlace: "Manchester, UK",
    intro: [
      "We move homes and offices from Huddersfield to Manchester and Greater Manchester, about 28 miles via the M62, with the same crew from your Kirklees address to your new door. Whether you are heading to Didsbury, Chorlton, Salford Quays or Manchester city centre, we plan loading, route and parking before moving day.",
      "Manchester moves from Huddersfield are popular with graduates, families upsizing, and professionals relocating between West Yorkshire and the North West. Our crews know both ends: terraced streets in Huddersfield and the canal-side apartments, Victorian semis and student houses common across Manchester postcodes.",
      "We send a written quote after a survey, in person or by video. Goods in transit are covered at £50,000 per vehicle load with £1 million public liability. We are a household and commercial removals company, not a waste clearance service.",
    ],
    routeNotes:
      "The M62 westbound from Huddersfield is the main corridor; junction choice depends on whether you are delivering to south Manchester, the city centre or Trafford. Friday afternoon and Sunday evening traffic can be heavy. Manchester city-centre access often needs building management coordination for lifts and loading bays.",
    preparation:
      "Confirm both postcodes and floor access at survey. If you are leaving a Kirklees terrace with restricted parking, apply for a Kirklees parking dispensation in good time. Manchester destination parking is checked against local restrictions for your new street.",
    faqs: [
      {
        q: "How long does Huddersfield to Manchester take on moving day?",
        a: "Driving is typically 45–70 minutes off-peak. Total job time includes loading and unloading, we quote the full day, not just mileage.",
      },
      {
        q: "Can you move a full house to Manchester in one trip?",
        a: "Most two- and three-bed homes fit in one or two Luton loads. We confirm at survey and quote accordingly.",
      },
      {
        q: "Do you offer packing for Manchester relocations?",
        a: "Yes. full or part packing can be added. Professionally packed fragile items are covered for breakage under our terms.",
      },
      {
        q: "Is Manchester parking sorted on your side?",
        a: "We advise what is needed at both addresses at survey. You may need to arrange dispensations or building access at the Manchester end.",
      },
    ],
  },
  {
    slug: "huddersfield-to-bradford",
    title: "Huddersfield to Bradford Removals",
    miles: 16,
    driveTime: "30–45 minutes",
    destinationPlace: "Bradford, West Yorkshire, UK",
    intro: [
      "Bradford is one of the shortest inter-city routes we run from Huddersfield, roughly 16 miles across Kirklees and Bradford district. Same crew, same van, door to door: ideal for family moves, student relocations and office transfers between the two cities.",
      "We regularly move customers from Huddersfield suburbs to Bradford areas such as Shipley, Bingley, Heaton and the city centre. Housing on both sides includes stone terraces, inter-war semis and hillside properties with steep access, all surveyed before we quote.",
      "You receive a fixed written price after survey, with £50,000 goods-in-transit and £1 million public liability cover. Use the moving cost calculator for a guide estimate first.",
    ],
    routeNotes:
      "Routes typically use the A641 or M606 depending on traffic and exact postcodes. The run is short enough that many moves stay efficient even with two loads. Bradford hill streets and Huddersfield terraced access are both planned at survey.",
    preparation:
      "Book two to three weeks ahead for month-end dates. Arrange parking dispensations if either property has Kirklees or Bradford restrictions. Disconnect and defrost appliances before the crew arrives.",
    faqs: [
      {
        q: "Is Bradford cheaper to move to than longer routes?",
        a: "Shorter drive time usually means less total crew time than a Manchester or London move, but volume and access still matter. The calculator gives a guide; survey confirms.",
      },
      {
        q: "Do you move offices from Huddersfield to Bradford?",
        a: "Yes. evening and weekend office moves are available to minimise downtime.",
      },
      {
        q: "Can you do a same-week Bradford move?",
        a: "Often, especially midweek. Call 01484 212450 and we will check the diary.",
      },
      {
        q: "Do you cover Shipley and Bingley from Huddersfield?",
        a: "Yes. all Bradford district postcodes are within our long-distance service from Huddersfield.",
      },
    ],
  },
  {
    slug: "huddersfield-to-sheffield",
    title: "Huddersfield to Sheffield Removals",
    miles: 35,
    driveTime: "50–75 minutes off-peak",
    destinationPlace: "Sheffield, South Yorkshire, UK",
    intro: [
      "Huddersfield to Sheffield removals cover roughly 35 miles south-east across West Yorkshire and into South Yorkshire. We load at your Kirklees address and deliver to Sheffield suburbs such as Hillsborough, Ecclesall, Nether Edge or the city centre with one dedicated crew.",
      "Sheffield's mix of hillside terraces, park-side semis and city apartments presents similar access challenges to Huddersfield, narrow hallways, steep drives and limited parking. We survey both properties so the quote reflects real carry distances and stair work.",
      "Every route move includes protective wrapping, strapped loading and fixed pricing agreed before booking. Goods in transit: £50,000 per vehicle load. Public liability: £1 million.",
    ],
    routeNotes:
      "The usual route is M1 south from the M62 interchange, exiting for Sheffield inner or outer districts. Peak traffic around Meadowhall and the city centre can affect arrival timing, we build sensible windows into your move plan.",
    preparation:
      "Sheffield hill streets may need smaller van positioning with shuttle carries. Confirm parking at both ends at survey. Packing services are worth considering for longer-distance moves to reduce stress on moving day.",
    faqs: [
      {
        q: "How much does Huddersfield to Sheffield cost?",
        a: "It depends on home size and access. Use the calculator, then get a fixed quote after survey, we do not quote on mileage alone.",
      },
      {
        q: "Can you move me to Sheffield university area?",
        a: "Yes. student and graduate moves to Sheffield are regular work for us.",
      },
      {
        q: "Is one day enough for Sheffield?",
        a: "Most homes yes, with an early start. Larger houses may need two loads quoted separately.",
      },
      {
        q: "Do you return to Huddersfield the same day?",
        a: "Yes. our crew completes the Sheffield delivery and returns to base; your price includes the full round trip and unload.",
      },
    ],
  },
  {
    slug: "huddersfield-to-york",
    title: "Huddersfield to York Removals",
    miles: 48,
    driveTime: "65–90 minutes off-peak",
    destinationPlace: "York, North Yorkshire, UK",
    intro: [
      "York is about 48 miles north-east of Huddersfield, a popular relocation route for families, professionals and retirees leaving Kirklees for North Yorkshire. Huddersfield Removals handles the full journey with one crew from your current home to your York address.",
      "York properties range from city-centre period flats within the walls to newer estates at Clifton Moor and Rawcliffe. Huddersfield sends a mix of terrace, semi and village-origin moves. We plan for longer drive time and agree realistic schedules so you know when to expect the van.",
      "Survey first, fixed quote in writing, £50k goods-in-transit per load. Optional packing and dismantling available for longer moves.",
    ],
    routeNotes:
      "Typically A629/A64 or M62/M1/A64 depending on traffic and postcode. Historic York streets inside the walls need careful van positioning, sometimes a park-and-shuttle from a nearby bay. Rush hours on the A64 can extend journey time.",
    preparation:
      "Longer routes benefit from early packing and clear labelling. York city-centre moves may need council or building management coordination, share details at survey. Kirklees parking dispensations may be needed at the Huddersfield end.",
    faqs: [
      {
        q: "Can you move a four-bed house from Huddersfield to York in one day?",
        a: "Often yes with an early start and efficient loading. Very large homes may need two trips, confirmed at survey.",
      },
      {
        q: "Do you know York access restrictions?",
        a: "We plan from your postcode and survey photos. Narrow streets and pedestrian zones are flagged before move day.",
      },
      {
        q: "Is York more expensive than Leeds from Huddersfield?",
        a: "Extra drive time can increase total crew hours. The calculator gives a guide; survey fixes the price.",
      },
      {
        q: "Can you store items overnight?",
        a: "We do not offer storage. Overnight holds are not part of our service, we move door to door in planned windows.",
      },
    ],
  },
  {
    slug: "huddersfield-to-halifax",
    title: "Huddersfield to Halifax Removals",
    miles: 8,
    driveTime: "20–35 minutes",
    destinationPlace: "Halifax, West Yorkshire, UK",
    intro: [
      "Halifax is Huddersfield's nearest major neighbour, only about 8 miles across the Calder Valley. Short-distance inter-town moves are among our best-value jobs: minimal motorway time, maximum effort on careful loading and placement.",
      "We move families between Huddersfield and Halifax areas such as Sowerby Bridge, Illingworth, Hipperholme and the town centre daily. Both towns share stone terraces, hillside streets and valley-bottom mills converted to flats, access patterns our crews know well.",
      "Fixed written quotes, same crew throughout, £50,000 goods-in-transit and £1 million public liability. Ideal for local relocations without the cost of a long-haul move.",
    ],
    routeNotes:
      "Routes use A629/A646 through the valley or A640 over the hill depending on postcodes and traffic. Steep residential streets on both sides may suit careful van positioning. The short distance makes return trips efficient if a second load is needed.",
    preparation:
      "Even short moves benefit from a survey for parking and stairs. Kirklees and Calderdale parking restrictions may both apply, we advise per street. Declutter before moving day to keep the job to one load where possible.",
    faqs: [
      {
        q: "Is Huddersfield to Halifax a half-day job?",
        a: "Many one- and two-bed moves are. Larger homes can take a full day, survey confirms crew hours.",
      },
      {
        q: "Can you move me from Huddersfield to Sowerby Bridge?",
        a: "Yes. all Halifax borough destinations are covered.",
      },
      {
        q: "Do you charge less for Halifax than for Leeds?",
        a: "Shorter travel usually means lower total time than longer routes. Your fixed quote reflects volume and access, not a per-mile table.",
      },
      {
        q: "Can you do a Halifax move at short notice?",
        a: "Often midweek. Call 01484 212450, local routes are easier to slot than long-distance jobs.",
      },
    ],
  },
];

export function getRoute(slug: string) {
  return routes.find((r) => r.slug === slug);
}
