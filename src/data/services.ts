export interface ServiceEntry {
  slug: string;
  title: string;
  h1: string;
  short: string;
  icon: string;
  intro: string[];
  features: string[];
  sections?: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
}

export const services: ServiceEntry[] = [
  {
    slug: "house-removals-huddersfield",
    title: "House Removals Huddersfield",
    h1: "House Removals in Huddersfield",
    icon: "home",
    short:
      "Full domestic house removals across Huddersfield and Kirklees, from one-bed flats to five-bed family homes. Trained crews, protective wrapping, loading and unloading, optional packing services, and fixed removal quotes after a free survey.",
    intro: [
      "Huddersfield Removals provides full house removals across Huddersfield, Kirklees and West Yorkshire, from one-bedroom flats to five-bedroom family homes. We handle domestic removals end to end: packing services, furniture dismantling and reassembly, careful loading and unloading, and room-by-room placement at your new address. Use our moving cost calculator for a guide estimate, then receive a fixed written removal quote after a free in-person or video survey.",
      "Moving house is one of life's bigger jobs, and doing it well comes down to planning. Our house removal teams survey access, parking and loading at both addresses before moving day, so there are no surprises with terraced streets, steep drives or narrow Victorian hallways, all common across Huddersfield's housing stock. We work through a practical moving checklist with you so nothing important is missed before the van arrives.",
      "Every home move includes protective blankets and stretch wrap for furniture, careful loading in our 3.5-tonne Luton vans, and placement of every item in the right room at your new address. Optional packing, dismantling and reassembly services turn it into a genuinely full-service move. Our crews are trained in domestic removals techniques, not general labour, so your belongings are handled with consistent care from the front door to the final room.",
      "Whether you are moving within HD1–HD9 or relocating further afield, we treat every house removal as a structured project. We confirm volume, crew size and timing at survey stage, label boxes by room where we pack, and coordinate loading so fragile items travel on top and heavy furniture is secured with straps. Goods in transit are covered at £50,000 per vehicle load, with £1 million public liability insurance, as set out in our terms and conditions.",
      "We are a removals company, not a waste clearance service. We move your household belongings, furniture, boxes, appliances and personal items, from one home to another. We do not take rubbish, unwanted items for disposal, or general waste as part of a house removal. If you need to declutter before moving day, that should be arranged separately so the van is loaded only with what you are taking to your new home.",
      "You get a clear written quote before we start, with no hidden extras for standard access and agreed services. Our removal quotes reflect bedrooms, distance, packing requirements and any dismantling needed, confirmed after survey, not guessed on the day. Book two to three weeks ahead where possible, though we can often help with shorter notice across Huddersfield and Kirklees.",
    ],
    features: [
      "Free pre-move survey, in person or by video",
      "Trained two- and three-person domestic removal crews",
      "Furniture blankets, straps and stretch wrap included",
      "Beds, wardrobes and flat-pack dismantled and rebuilt on request",
      "Room-by-room placement at the new address",
      "Optional full or part packing services available",
      "£50,000 goods-in-transit cover per vehicle load",
      "Seven-day availability, 7am–9pm across Kirklees",
    ],
    sections: [
      {
        heading: "How a house removal works",
        paragraphs: [
          "Every house removal in Huddersfield starts with a survey, in person or by video, so we understand bedrooms, volume, parking, stairs and any access challenges at both addresses. From that, we build a fixed written removal quote covering crew size, van loads, packing, and dismantling and reassembly where agreed. Use our moving cost calculator beforehand for a guide estimate; the survey confirms the final price.",
          "On moving day, the crew arrives within the agreed window, protects furniture with blankets and wrap, and works room by room through loading and unloading. Boxes and furniture are secured in the Luton van with straps so nothing shifts in transit. At your new home, everything is placed in the correct room, not left in the hallway, so you can unpack in an organised way.",
          "If you have booked packing services, those usually happen the day before the move so the property is ready to load efficiently. Dismantling and reassembly of beds and wardrobes is coordinated as part of the same crew visit where quoted. Your goods travel under £50,000 goods-in-transit insurance per vehicle load, with £1 million public liability cover throughout.",
        ],
      },
      {
        heading: "Preparing for moving day",
        paragraphs: [
          "A practical moving checklist makes house removals smoother. Confirm your completion or handover times with your solicitor or landlord, arrange parking or a Kirklees dispensation where needed, and disconnect appliances in advance as set out in our terms. Pack personal documents, jewellery and high-value items yourself, we do not transport those.",
          "Label boxes by room and mark anything fragile clearly. If you are self-packing, start with rooms you use least and leave kitchen and day-to-day essentials until last. Declutter before we arrive: we move belongings you are taking to the new house, not waste or rubbish for disposal. That keeps loading time realistic and your removal quote accurate.",
          "On the day, clear access routes, strip beds if dismantling was not booked, and have someone available at both addresses for questions. We will walk through the property with you before leaving to confirm nothing has been missed. If plans change, contact us as early as possible so we can adjust timing within our terms.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much do house removals in Huddersfield cost?",
        a: "Cost depends on bedrooms, distance, packing and access. As a guide, a local two-bed domestic removal typically sits in the mid-hundreds. Use our moving cost calculator for an instant estimate, then we confirm a fixed written removal quote after a free in-person or video survey, no hourly rate surprises on the day.",
      },
      {
        q: "How far in advance should I book a house removal?",
        a: "Two to three weeks is ideal, especially for end-of-month Fridays which book up first across Huddersfield and Kirklees. We can often cover short-notice moves, call 01484 212450 and we will check availability. Early booking also gives time to work through a moving checklist and arrange packing services if needed.",
      },
      {
        q: "Do you move houses on weekends?",
        a: "Yes. We work seven days a week, 7am to 9pm, for house removals across Huddersfield. Weekend moves are priced the same as weekday moves, your fixed quote after survey reflects the full job, not the day of the week.",
      },
      {
        q: "What insurance cover do you provide for house removals?",
        a: "Every house removal includes £50,000 goods-in-transit insurance per vehicle load and £1 million public liability insurance. Cover details, exclusions and claims procedures are set out in our terms and conditions. Fragile items packed by our team qualify for breakage cover under GIT; self-packed boxes are moved carefully but breakages inside them are not claimable.",
      },
      {
        q: "Do you offer packing as part of a house removal?",
        a: "Yes. choose full packing, part packing (typically kitchen and fragiles), or pack yourself with our materials. Professional packing is usually done the day before moving day. Packing can be included in your removal quote after survey, and it affects insurance eligibility for fragile contents as described in our terms.",
      },
      {
        q: "What won't you move on a house removal?",
        a: "We do not move gas bottles, paints and other hazardous items, perishable food, plants, pets, or high-value items like jewellery and important documents, full details are in our terms and conditions. We are also not a waste clearance company, so we do not take rubbish or unwanted items for disposal. The van is for belongings going to your new home.",
      },
      {
        q: "Can I get a removal quote without a survey?",
        a: "Our moving cost calculator gives a useful guide estimate online. A fixed written removal quote is confirmed after a quick survey, in person or by video, so we can assess volume, access and services accurately. That way the price you agree is the price on moving day, subject to our terms.",
      },
    ],
  },
  {
    slug: "office-removals-huddersfield",
    title: "Office Removals Huddersfield",
    h1: "Office & Commercial Removals in Huddersfield",
    icon: "building",
    short:
      "Planned office and commercial removals for Kirklees businesses, desks, IT, files and furniture relocated with minimal downtime. Evening and weekend moves, labelling to floor plans, and fixed quotes after a site survey.",
    intro: [
      "Huddersfield Removals plans and delivers office removals across Huddersfield, Kirklees and West Yorkshire for businesses that need desks, IT equipment, files and furniture moved with minimal downtime. We coordinate loading and unloading around your working hours, provide dismantling and reassembly of office furniture, and supply fixed written removal quotes after a site survey. Use our calculator for a guide estimate; the survey confirms scope and price.",
      "An office move is a project, not just a van booking. We plan your relocation around business hours so your team loses as little working time as possible, that usually means evening or weekend moves, sequenced so departments come back online in the right order. Our project approach includes a moving checklist tailored to commercial relocations: IT labelling, crate plans, access permits and landlord requirements.",
      "Our crews dismantle and rebuild desks and meeting tables, crate files and equipment, and wrap monitors and IT hardware in anti-static bubble wrap. Everything is labelled to a floor plan so it lands at the right desk in the new office. Loading and unloading are staged to protect sensitive equipment, with goods in transit covered at £50,000 per vehicle load under our terms.",
      "From single-room studios to multi-floor offices in Huddersfield town centre and Kirklees business parks, we scale crew size and van loads to the job. Packing services are available for archive boxes, kitchen areas and personal staff belongings. We are a commercial removals specialist, not a waste clearance or office strip-out contractor, so we move what you are relocating, not rubbish for disposal.",
      "Every commercial move carries £50,000 goods-in-transit cover per vehicle load and £1 million public liability insurance, and we provide documentation your landlord or facilities manager may need. Removal quotes are fixed after survey, covering crew, loads, dismantling and timing, so there are no open-ended hourly charges on relocation day.",
      "Whether you are moving within the same building, across Huddersfield, or to another town, we assign a consistent crew who understand your floor plan and labelling system. That continuity reduces confusion during loading and unloading and helps your team return to work faster on Monday morning.",
    ],
    features: [
      "Move planning around your business hours",
      "Desk and furniture dismantling and reassembly",
      "IT equipment wrapped and transported carefully",
      "Crate hire and labelling to a floor plan",
      "Evening and weekend moves available",
      "£50,000 goods-in-transit cover per vehicle load",
      "£1 million public liability for building requirements",
      "Fixed written quotes after site survey",
    ],
    sections: [
      {
        heading: "How an office removal works",
        paragraphs: [
          "We start with a site survey, in person or by video for smaller offices, to map desks, storage, IT points and access. You receive a fixed written removal quote covering crew size, van loads, crate requirements, dismantling and reassembly, and the agreed move window. Our moving cost calculator can give a rough guide beforehand; the survey locks in the commercial removal price.",
          "Before moving day, we agree a floor-plan labelling system so every desk, crate and monitor lands in the correct position. Loading typically runs outside core hours: Friday evening through Sunday is common, with careful loading and unloading sequences so servers and workstations are not stacked under heavy furniture. Goods travel under £50,000 goods-in-transit insurance per load.",
          "At the new premises, crews rebuild furniture, place items according to the plan, and remove empty crates and packaging. We do not handle IT disconnection or reconnection of live server racks, your IT provider should manage that, but we transport equipment safely once it is ready to move, as set out in our terms.",
        ],
      },
      {
        heading: "Planning a commercial relocation",
        paragraphs: [
          "Build your office moving checklist early: notify landlords at both ends, confirm lift bookings and parking dispensations, and brief staff on personal desk packing. Decide what is moving versus what is being disposed of separately, we are not a waste clearance service and do not remove rubbish or unwanted furniture for disposal as part of an office removal.",
          "Archive files and confidential paperwork should be boxed and labelled by department. IT hardware needs anti-static wrapping; we supply materials where quoted. Agree who holds keys and alarm codes at both sites, and confirm £1 million public liability documentation if your building management requires it before our crew arrives.",
          "Book the survey as soon as your lease dates are firm. Fixed removal quotes after survey protect your budget, mileage, crew hours and load count are calculated up front. If your headcount or desk count changes materially before moving day, contact us so we can adjust the quote within our terms.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you move our office over a weekend?",
        a: "Yes. most office removals we handle run Friday evening to Sunday so the team walks into a working office on Monday. We work 7am–9pm all week across Huddersfield and Kirklees. Your fixed quote after survey covers the agreed window, not an open hourly rate.",
      },
      {
        q: "Do you move IT equipment and servers?",
        a: "We move workstations, monitors, printers and networking gear, wrapped and boxed appropriately. For live server racks we recommend your IT provider handles disconnection and reconnection; we handle the physical transport once equipment is ready. All items travel under £50,000 goods-in-transit cover per vehicle load, subject to our terms.",
      },
      {
        q: "How is an office removal priced?",
        a: "After a site survey we quote on crew size, van loads, dismantling, crate hire and timing. You receive a fixed written removal quote, use our calculator for a guide estimate first. We do not quote customers on an hourly rate; the survey confirms the total price for the agreed scope.",
      },
      {
        q: "What insurance do you carry for commercial moves?",
        a: "Office removals include £50,000 goods-in-transit insurance per vehicle load and £1 million public liability insurance. We can provide certificates for landlords and facilities managers. Full exclusions and claims procedures are in our terms and conditions.",
      },
      {
        q: "Do you provide crates and labelling?",
        a: "Yes. Crate hire and labelling to your floor plan are standard on larger office removals. Each crate is numbered and mapped to a desk or department so loading and unloading stay organised. Crate quantities are confirmed at survey and included in your fixed quote.",
      },
      {
        q: "Can you help with office strip-out or waste disposal?",
        a: "No. We relocate office furniture, equipment and boxed contents, we are not a waste clearance or strip-out contractor. Unwanted furniture and rubbish should be disposed of separately before moving day so the removal crew loads only what is going to the new premises.",
      },
      {
        q: "How far ahead should we book an office move?",
        a: "Four to six weeks is sensible for multi-desk offices, especially for month-end lease changeovers in Huddersfield and Kirklees. Short-notice moves may be possible, contact us with your dates and we will confirm availability and arrange a survey for a fixed quote.",
      },
    ],
  },
  {
    slug: "student-removals-huddersfield",
    title: "Student Removals Huddersfield",
    h1: "Student Removals in Huddersfield",
    icon: "academic",
    short:
      "Affordable student removals for University of Huddersfield students, halls, HMOs and studio flats across Kirklees. Same-day local moves, end-of-term timing, and UK-wide relocations with fixed quotes after a quick survey.",
    intro: [
      "Huddersfield Removals offers affordable student removals for University of Huddersfield students, halls, shared houses and studio flats across Kirklees and HD postcodes. We handle loading and unloading from upper-floor HMOs, same-day local moves around Queensgate and Springwood, and longer domestic removals home at end of term. Use our moving cost calculator for a guide price, then get a fixed removal quote after a quick video or in-person survey.",
      "Huddersfield is a university town, and every June and September thousands of students move between halls, shared houses and studios around Queensgate, Springwood and Aspley. We run compact, efficient student moves priced fairly for student budgets, typically one van load of boxes, a bike, a desk and a mattress, completed in a single visit.",
      "A typical student move means carrying from narrow staircases in shared houses, something our crews handle daily across Kirklees. We load safely, strap everything in the van, and deliver to your new address the same day. Optional packing services and boxes are available if you prefer not to pack yourself.",
      "Moving home at the end of the academic year? Our long-distance domestic removals cover moves to anywhere on the UK mainland, with your belongings protected by £50,000 goods-in-transit insurance per vehicle load and £1 million public liability cover. Fixed written quotes after survey mean you know the cost before term ends.",
      "We are a removals company, not a waste clearance service. We move your belongings to your next address, we do not take rubbish, broken furniture for disposal, or clear-out waste from halls or houses. Sort unwanted items separately before moving day so loading stays quick and your quote remains accurate.",
      "Book early for June and September changeover weeks, they are the busiest student removal periods in Huddersfield. Share a van with housemates moving nearby if you want to split costs; tell us when you enquire and we will plan an efficient route and a single fixed quote for the group where possible.",
    ],
    features: [
      "Student-friendly fixed quotes after survey",
      "Same-day local moves around the university",
      "Help carrying from upper-floor rooms and HMOs",
      "End-of-tenancy timing coordinated with landlords",
      "UK-wide domestic removals home at end of term",
      "Boxes and packing services available",
      "£50,000 goods-in-transit cover per vehicle load",
      "Video survey for quick removal quotes",
    ],
    sections: [
      {
        heading: "How student removals work",
        paragraphs: [
          "Tell us your term dates, both addresses and a rough list of what you are moving, boxes, furniture, bike and so on. We offer a quick video survey or short visit, then send a fixed written removal quote. Our calculator gives a guide estimate for local student moves; the survey confirms the final price for loading, transport and unloading.",
          "On moving day, the crew helps carry items from your room or flat, wraps furniture where needed, and loads the van securely. For local moves within Huddersfield and Kirklees, delivery is usually same-day. For moves home to other cities, we plan route and timing so you have a realistic arrival window, with goods covered under £50,000 goods-in-transit insurance per load.",
          "If several housemates are moving between nearby addresses, we can sometimes combine loads into one van visit, ask when booking. We do not remove rubbish or unwanted items; everything loaded should be going to your new home or storage, not to a tip.",
        ],
      },
      {
        heading: "Preparing for end-of-term moves",
        paragraphs: [
          "Use a simple moving checklist: confirm your checkout time with your landlord, return keys as agreed, and pack room by room. Label boxes with your name and new address if you are sharing a van. Disconnect any small appliances and defrost a mini-fridge before we arrive, as set out in our terms.",
          "June and September book up quickly around the University of Huddersfield, reserve your date as soon as exam timetables allow. A video survey takes minutes and locks in your fixed quote without you needing to visit an office. Keep personal documents, laptops and valuables with you rather than in the van.",
          "Declutter before we arrive: donate or dispose of waste separately, we are not a clearance company. That keeps student removals affordable and fast. If you need packing materials, order boxes ahead of moving day or add packing services to your quote after survey.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a student move cost in Huddersfield?",
        a: "Most single-room student moves within Huddersfield are our most affordable job type, usually a small van load completed in one visit. Use our moving cost calculator for a guide estimate, then we confirm a fixed written removal quote after a quick video survey. We do not quote students on an hourly rate.",
      },
      {
        q: "Can you move me out of university halls?",
        a: "Yes. We regularly collect from halls and student developments around Huddersfield town centre and Kirklees. Book ahead for end-of-term weeks in June, they are our busiest. We coordinate loading and unloading with your checkout time where possible.",
      },
      {
        q: "Can two or three of us share a van?",
        a: "If you are moving from and to nearby addresses, sharing a load is a sensible way to split the cost. Tell us when you enquire and we will plan the route and provide one fixed quote for the combined move, subject to survey.",
      },
      {
        q: "Do you offer packing for student moves?",
        a: "Yes. we supply boxes and materials, or our crew can pack for you if booked in advance. Professional packing is useful for kitchen items and fragiles. Packing can be included in your removal quote after survey and affects insurance for fragile contents under our terms.",
      },
      {
        q: "What insurance cover applies to student removals?",
        a: "Student moves include £50,000 goods-in-transit insurance per vehicle load and £1 million public liability insurance, as set out in our terms and conditions. Keep high-value items like laptops and jewellery with you, we do not transport those.",
      },
      {
        q: "Can you move me home to another city?",
        a: "Yes. We handle long-distance domestic removals from Huddersfield to anywhere on the UK mainland. You receive a fixed written quote after survey covering distance, load size and access at both ends, use the calculator first for a rough guide.",
      },
      {
        q: "Will you take rubbish or old furniture to the tip?",
        a: "No. We are a student removals service, not waste clearance. We move belongings you are taking to your next address. Dispose of unwanted items separately before moving day so the crew can focus on loading and unloading your possessions efficiently.",
      },
    ],
  },
  {
    slug: "piano-removals",
    title: "Piano Removals Huddersfield",
    h1: "Piano Removals in Huddersfield",
    icon: "music",
    short:
      "Specialist piano removals for upright, digital and baby grand pianos across Huddersfield and Kirklees. Proper dollies, skids and padding, stair access planning, and fixed quotes after a pre-move survey.",
    intro: [
      "Huddersfield Removals provides specialist piano removals for upright, digital and baby grand pianos across Huddersfield, Kirklees and West Yorkshire. We use piano dollies, skids, straps and padding, plan routes through tight hallways and stairs before lifting, and deliver fixed written removal quotes after a pre-move survey. Use our calculator for a guide estimate; piano moves are always confirmed after assessing access at both addresses.",
      "Pianos are heavy, unbalanced and unforgiving of shortcuts, an upright typically weighs 200–300kg. Moving one safely needs a piano dolly or skid, straps, padding, and a crew who has done it before. That is exactly how we approach every piano removal, structured loading and unloading, never improvised carrying.",
      "Before the move we ask about the piano type, access at both addresses, and any stairs or tight turns. Steep steps and narrow doorways are common in Huddersfield's stone terraces, so we plan the route through the property before lifting anything. Where needed, we request photos or a brief visit as part of the survey for an accurate removal quote.",
      "The piano travels padded and strapped in the van, covered by our £50,000 goods-in-transit insurance per vehicle load, and is positioned exactly where you want it at the destination. Piano removals can be booked standalone or combined with a house removal, tell us when you enquire so dismantling of other furniture and piano timing are coordinated.",
      "We move pianos as household instruments, not as waste or scrap. If you are disposing of an unwanted piano, that is not a service we offer; we specialise in relocating pianos you want to keep, safely and carefully, in line with our terms and conditions and £1 million public liability cover.",
      "After any piano move, slight tuning drift is normal due to vibration and humidity changes, most tuners recommend waiting a couple of weeks before retuning. Our job is safe transport and placement; we will advise on access limitations honestly if we judge a staircase unsafe rather than risk damage to your instrument or property.",
    ],
    features: [
      "Upright, digital and baby grand pianos",
      "Piano dollies, skids, straps and padding",
      "Stair and access planning before moving day",
      "Positioning in the destination room",
      "Standalone piano moves or part of a house removal",
      "£50,000 goods-in-transit cover per vehicle load",
      "£1 million public liability insurance",
      "Fixed written quotes after access survey",
    ],
    sections: [
      {
        heading: "How a piano removal works",
        paragraphs: [
          "We start with a survey, photos, video or a visit, to confirm piano type, weight class, ground floor or stair access, and door widths at both addresses. From that we provide a fixed written removal quote covering crew size, equipment and any additional handling for stairs. Guide estimates from our calculator are a starting point; piano removals are always confirmed after access assessment.",
          "On moving day, the crew pads the piano, secures it to a dolly or skid, and moves it along the pre-planned route. Loading and unloading use controlled lifting and strapping in the van so the instrument cannot shift in transit. At the destination, the piano is placed in your chosen room, not left in a hallway, under £50,000 goods-in-transit cover.",
          "If a piano move is part of a wider house removal, we sequence it so the instrument is loaded securely among other furniture without pressure or weight on the case. Our terms set out what we can and cannot move alongside hazardous or excluded items.",
        ],
      },
      {
        heading: "Preparing for your piano move",
        paragraphs: [
          "Clear the path from the piano to the front door, remove rugs that slip, secure pets elsewhere, and ensure we have parking as close as possible. Tell us about any steps, narrow turns or low ceilings when booking so the survey is accurate and your removal quote stays fixed on the day.",
          "Close and lock the keyboard lid if your piano has one; remove loose music stands and accessories yourself unless agreed otherwise. We do not tune pianos or dispose of unwanted instruments, we relocate pianos you intend to keep. Declutter the route; we are not a waste clearance service.",
          "Book ahead where you can, especially if you are moving on the same day as a house completion in Huddersfield or Kirklees. Confirm your fixed quote in writing before moving day and keep our contact number handy for access questions on the day.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to move a piano in Huddersfield?",
        a: "A ground-floor to ground-floor upright move locally is the baseline; stairs, distance and piano size add to it. Use our moving cost calculator for a guide estimate, then tell us the piano type and access at both ends for a fixed written removal quote after survey. We do not quote piano moves on an hourly rate.",
      },
      {
        q: "Can you move a piano upstairs?",
        a: "Usually yes, subject to a safety assessment of the staircase at survey stage. We will ask for photos or do a quick visit first, if we judge it unsafe for the crew or your piano, we will say so honestly rather than proceed. Your fixed quote reflects agreed access only.",
      },
      {
        q: "Will the piano need retuning after the move?",
        a: "Pianos often drift slightly out of tune after any move due to vibration and humidity changes. It is normal, most tuners recommend waiting a couple of weeks before retuning. Our service covers safe relocation under £50,000 goods-in-transit insurance, not tuning.",
      },
      {
        q: "What types of piano do you move?",
        a: "Upright, digital and baby grand pianos across Huddersfield and Kirklees. Full concert grands may need additional assessment, contact us with make, model and access details. Each piano removal is quoted individually after survey.",
      },
      {
        q: "What insurance covers my piano during the move?",
        a: "Piano removals include £50,000 goods-in-transit insurance per vehicle load and £1 million public liability insurance, as detailed in our terms and conditions. Report any concerns immediately on delivery so issues can be documented in line with our claims procedure.",
      },
      {
        q: "Can you move a piano as part of a house removal?",
        a: "Yes. Tell us when booking a house removal so we allocate the right crew and equipment and sequence loading correctly. The piano move can be included in your overall fixed quote after survey, or booked as a standalone job.",
      },
      {
        q: "Do you dispose of old pianos or take them to the tip?",
        a: "No. We relocate pianos you want to keep at a new address. We are not a waste clearance service and do not remove scrap or unwanted instruments for disposal.",
      },
    ],
  },
  {
    slug: "furniture-removals",
    title: "Furniture Removals Huddersfield",
    h1: "Furniture Removals in Huddersfield",
    icon: "sofa",
    short:
      "Furniture removals across Huddersfield and Kirklees, sofas, wardrobes, beds and appliances blanket-wrapped, safely loaded and placed in your chosen room. Dismantling and reassembly available; fixed quotes after survey.",
    intro: [
      "Huddersfield Removals provides furniture removals across Huddersfield, Kirklees and West Yorkshire, from a single sofa to a full home of furniture. We blanket-wrap items, handle loading and unloading with two-person crews, offer dismantling and reassembly where needed, and place everything in the room you choose. Use our moving cost calculator for a guide estimate, then receive a fixed removal quote after a quick survey.",
      "Sometimes you do not need a full house removal, just furniture shifted safely between addresses, into storage, or from a shop to your home. We move sofas, wardrobes, beds, dining sets, appliances and awkward items daily, wrapped and strapped properly for transport with £50,000 goods-in-transit cover per vehicle load.",
      "Large items through small spaces is the core skill here. Our crews measure, remove doors from hinges where needed, and dismantle furniture that will not go through in one piece, then rebuild it at the destination. This is standard on many Huddersfield terraces where narrow hallways and tight stairwells are the norm.",
      "Buying furniture second-hand or from a store without delivery? We collect from shops, auction houses and private sellers across Kirklees and the wider region. Tell us collection and delivery addresses at survey stage so your removal quote covers both legs, including any stairs or parking restrictions.",
      "We move household furniture you are keeping, not waste clearance or rubbish disposal. If you are replacing a sofa and need the old one taken to the tip, that is outside our furniture removals service. Load the van only with items going to your new address or storage so timing and pricing stay as quoted.",
      "Every furniture removal includes £1 million public liability insurance and goods-in-transit cover as set out in our terms. Fixed written quotes after survey mean you know the cost before we arrive, no open-ended hourly pricing for customers.",
    ],
    features: [
      "Sofas, wardrobes, beds, tables and appliances",
      "Blanket wrapping and strapping as standard",
      "Dismantling and reassembly where needed",
      "Collection from stores and private sellers",
      "Two-person crews for heavy items",
      "Careful placement in the destination room",
      "£50,000 goods-in-transit cover per vehicle load",
      "Fixed quotes after in-person or video survey",
    ],
    sections: [
      {
        heading: "How furniture removals work",
        paragraphs: [
          "Describe what you need moved, number of items, sizes, and access at both addresses. We survey in person or by video, then send a fixed written removal quote covering crew, wrapping, dismantling and reassembly if required. The calculator gives a guide for typical loads; the survey confirms the price for your specific furniture removal.",
          "On the day, the crew wraps furniture in blankets, protects corners, and uses straps and trollies for loading and unloading. Items are secured in the van so nothing slides in transit. At delivery, furniture is placed in the room you specify, we do not leave heavy items blocking doorways unless you ask us to.",
          "Where dismantling and reassembly is quoted, fixings are bagged and labelled so rebuild at the destination is straightforward. Reassembled furniture may not be exactly factory-tight on aged flat-pack, our terms explain this honestly, but we always rebuild what we take apart.",
        ],
      },
      {
        heading: "Preparing furniture for transport",
        paragraphs: [
          "Clear a path from each item to the exit. Remove loose cushions, shelves and glass tops where practical, and tell us about any damage before we wrap so we can pad accordingly. Appliances must be disconnected, defrosted and dry before we move them, as set out in our terms.",
          "If you are buying from a seller, confirm collection times and that items are ready to load. For deliveries into upper floors, ensure stairwells are clear, we are not a waste clearance company, so remove any rubbish or old items from stairways beforehand.",
          "Check door measurements if you are unsure an item will fit; we can often dismantle or route through windows in rare cases, but survey is the right time to flag tight access so your removal quote is accurate and fixed.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you move just one or two items of furniture?",
        a: "Our minimum job is a small furniture load, typically two or more items or a part-load. We do not operate as a single-item courier, but a sofa plus a couple of boxes is exactly the kind of furniture removal we do daily across Huddersfield. Use the calculator for a guide, then survey for a fixed quote.",
      },
      {
        q: "My sofa won't fit through the door, can you help?",
        a: "Usually. We remove feet, cushions and internal doors where needed, and can dismantle some sofa types. If it genuinely will not go safely, we will tell you before forcing anything. Access is assessed at survey so your removal quote reflects the work required.",
      },
      {
        q: "Do you disconnect washing machines and appliances?",
        a: "Appliances need to be disconnected, defrosted and dry before we arrive, as set out in our terms. Once ready, we move them safely with proper equipment and cover under £50,000 goods-in-transit insurance per load. We do not perform plumbing or electrical disconnection.",
      },
      {
        q: "Can you collect furniture from a shop or private seller?",
        a: "Yes. We collect from retailers, auction houses and private addresses across Kirklees and beyond. Provide both postcodes at enquiry so we survey access at collection and delivery points and include both in your fixed written removal quote.",
      },
      {
        q: "How much do furniture removals cost?",
        a: "Price depends on item count, weight, stairs and distance. Local two-item loads are typically lower than multi-room part-loads. Our moving cost calculator gives a guide estimate; a fixed removal quote is confirmed after survey, we do not quote customers on an hourly rate.",
      },
      {
        q: "What insurance applies to furniture moves?",
        a: "Furniture removals include £50,000 goods-in-transit insurance per vehicle load and £1 million public liability insurance. Claims procedures and exclusions are in our terms and conditions. Let us know about existing damage before loading.",
      },
      {
        q: "Will you take my old sofa to the tip?",
        a: "No. We move furniture you are keeping to a new address or storage. We are not a waste clearance service and do not remove rubbish or unwanted items for disposal as part of a furniture removal.",
      },
    ],
  },
  {
    slug: "packing-services",
    title: "Packing Services Huddersfield",
    h1: "Professional Packing Services in Huddersfield",
    icon: "box",
    short:
      "Professional packing services in Huddersfield and Kirklees, full, part or fragile-only packing by trained crews using quality materials. Boxes labelled by room, usually completed the day before your move.",
    intro: [
      "Huddersfield Removals provides professional packing services across Huddersfield, Kirklees and West Yorkshire, full packing, part packing or fragile-only options for house removals and domestic relocations. Trained packers use double-wall boxes, paper, bubble wrap and wardrobe cartons, label everything by room, and prepare your home for efficient loading and unloading on moving day. Fixed quotes after survey; use our calculator for a guide estimate.",
      "Packing is the part of moving people underestimate most. A three-bed house takes a family a week of evenings; our packing team does it in a day, properly, labelled by room and packed so nothing rattles. Professional packing integrates with your wider removal quote and moving checklist so moving day is about transport, not last-minute boxing.",
      "Choose full packing (we do everything portable), part packing (typically kitchen and fragiles while you handle clothes and books), or fragile-only packing for china, glassware and artwork. All materials, double-wall boxes, packing paper, bubble wrap, wardrobe cartons, are included in the quoted packing service price after survey.",
      "There is an insurance advantage too: under our terms, breakage claims on fragile items are covered when items were professionally packed by our team, which is not the case for self-packed boxes. Goods in transit cover is £50,000 per vehicle load on the subsequent removal, with £1 million public liability across our operations.",
      "Packing is usually scheduled the day before your house removal so the property is ready to load first thing. We work room by room, mark fragile boxes clearly, and leave walkways safe for you overnight. We pack belongings for relocation, we do not provide waste clearance or sort rubbish for disposal.",
      "Whether you are moving within Huddersfield or further afield, packing services are quoted alongside your removal after survey so you have one fixed written price for pack and move. Video survey works well for estimating box counts and scope before moving day.",
    ],
    features: [
      "Full, part or fragile-only packing options",
      "All packing materials included in the price",
      "Boxes labelled by room and contents",
      "Wardrobe cartons keep clothes on hangers",
      "China, glass and artwork packed to survive transit",
      "Packing usually done the day before the move",
      "Improved GIT cover for professionally packed fragiles",
      "Fixed quotes after in-person or video survey",
    ],
    sections: [
      {
        heading: "How our packing service works",
        paragraphs: [
          "At survey we walk through your home, or use video, to estimate box counts, identify fragile areas, and agree full, part or fragile-only packing. You receive a fixed written quote covering materials, labour and time, either standalone or as part of a house removal. The calculator helps with guide pricing; survey confirms the packing scope.",
          "On packing day, our team arrives with all materials and works room by room. Kitchenware is wrapped individually, books are boxed in small cartons, and clothes go into wardrobe boxes on hangers where quoted. Each box is labelled for its destination room to speed up loading and unloading on moving day.",
          "The following day, the removal crew loads pre-packed boxes and furniture without delay. Because our packers followed a consistent method, stacks are stable in the van and fragiles are identifiable. Professional packing meets the conditions for fragile breakage claims under £50,000 goods-in-transit cover per load, as set out in our terms.",
        ],
      },
      {
        heading: "Choosing the right packing option",
        paragraphs: [
          "Full packing suits busy households and long-distance domestic removals where you want zero packing stress. Part packing is popular, we handle kitchen, ornaments and fragiles; you pack clothes and linens. Fragile-only works if you are confident with general boxing but want experts on glass, china and artwork.",
          "Use your moving checklist to decide what to declutter before packers arrive. We pack items moving to your new address, not rubbish or donations for disposal, we are not a clearance service. Clear access to cupboards and loft hatches if those areas are included in the quote.",
          "If you prefer to self-pack, see our packing materials service for boxes and wrap delivered locally. Remember self-packed fragile boxes are moved carefully but breakages inside them are not claimable under GIT, another reason many Huddersfield customers add professional packing after comparing options at survey.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is included in a full packing service?",
        a: "Everything portable in the house: kitchen, fragiles, books, clothes, garage and loft contents where safe access is agreed. We bring all boxes and materials, label each box with its destination room, and prepare the home for loading and unloading on moving day. Scope is confirmed at survey and fixed in your removal quote.",
      },
      {
        q: "Why does professional packing matter for insurance?",
        a: "Our £50,000 goods-in-transit cover applies to fragile items when we packed them. Self-packed boxes are moved carefully, but breakages inside them are not claimable, it is an industry-standard condition set out in our terms and conditions. Professional packing is the reliable way to protect claimable fragiles.",
      },
      {
        q: "Can I just buy boxes from you instead?",
        a: "Yes. see our packing materials service for double-wall boxes, tape, paper and bubble wrap delivered across Huddersfield and Kirklees. Many customers combine materials-only with a part packing service for kitchens and fragiles.",
      },
      {
        q: "When does packing happen relative to moving day?",
        a: "Usually the day before your house removal so everything is ready to load efficiently. Timing is agreed at survey and included in your fixed quote. Same-day pack-and-move is sometimes possible on smaller jobs, ask when you enquire.",
      },
      {
        q: "How much do packing services cost?",
        a: "Price depends on home size, box count and whether you choose full, part or fragile-only packing. Use our moving cost calculator for a guide estimate, then confirm a fixed written quote after survey. Packing is quoted as part of the overall removal price, not an hourly rate.",
      },
      {
        q: "Do you pack loft, garage and shed contents?",
        a: "Loft and garage contents can be included where there is safe access and it is agreed at survey. Garden sheds and outdoor structures are not standard, they need separate quoting per our terms. We pack belongings for relocation, not waste for disposal.",
      },
      {
        q: "Can I add packing after booking a removal?",
        a: "Yes, if schedule allows. Contact us as soon as you can so we allocate packers and materials. We may need to update your fixed quote after a brief re-survey or video call to confirm scope.",
      },
    ],
  },
  {
    slug: "packing-materials",
    title: "Packing Materials Huddersfield",
    h1: "Packing Materials & Moving Boxes in Huddersfield",
    icon: "box",
    short:
      "Quality packing materials delivered across Huddersfield and Kirklees, double-wall moving boxes, tape, bubble wrap, paper and wardrobe cartons. Same professional supplies our packing teams use; advice on quantities included.",
    intro: [
      "Huddersfield Removals supplies professional packing materials across Huddersfield, Kirklees and West Yorkshire, double-wall moving boxes, packing tape, bubble wrap, paper, wardrobe cartons and furniture covers. These are the same materials our packing teams use on house removals and domestic relocations, delivered locally ahead of moving day. Order alongside your move for a guide price via our calculator; material kits are confirmed when you book.",
      "Supermarket boxes fail at the worst moment. Proper double-wall moving boxes stack safely in the van, protect what is inside them, and survive loading and unloading without collapsing. Investing in the right packing materials makes self-packing faster and reduces damage risk during transport under £50,000 goods-in-transit cover on your removal.",
      "Typical starter kits cover a one-bed flat or a family house: a mix of small (books), medium (general) and large (light, bulky) boxes plus tape, packing paper and bubble wrap. Wardrobe cartons with hanging rails keep clothes clean and creaseless, ideal for Huddersfield house removals where you want bedroom contents ready to hang at the new address.",
      "Order alongside your move booking and we will deliver ahead of moving day across Kirklees, so you can pack at your own pace using a sensible moving checklist. We advise on quantities for your home size when you order, one-bed, two-bed and three-bed guides help you avoid under- or over-buying.",
      "Packing materials are for belongings you are moving to a new home, not for waste clearance or rubbish bags. Dispose of unwanted items before you pack; we supply boxes for relocations, not for general decluttering waste. Combine with our packing services if you want professionals to handle fragiles and kitchens.",
      "If you are booking a full house removal with us, materials can be included with professional packing in your fixed written quote after survey. Materials-only orders are priced clearly at order stage, use our calculator and enquiry form for guide estimates on standard kits delivered in the Huddersfield area.",
    ],
    features: [
      "Double-wall boxes in small, medium and large",
      "Wardrobe cartons with hanging rails",
      "Packing tape, paper and bubble wrap",
      "Mattress and sofa covers available",
      "Local delivery across Huddersfield and Kirklees",
      "Advice on quantities for your home size",
      "Same materials used by our packing crews",
      "Order alongside your removal booking",
    ],
    sections: [
      {
        heading: "Choosing the right packing materials",
        paragraphs: [
          "Start with box sizes: small for heavy items like books, medium for kitchen and general goods, large only for light bulky items such as bedding and lampshades. Double-wall construction roughly doubles crush strength, essential when boxes are stacked in a Luton van during loading and unloading on domestic removals.",
          "Add wardrobe cartons if you want clothes on hangers, bubble wrap and paper for fragiles, and mattress or sofa covers for upholstered items. We advise quantities based on bedrooms when you order, typical ranges are 20–30 boxes for a one-bed flat up to 60–90 for a three-bed family home in Kirklees.",
          "Tape, labels and marker pens are easy to forget, include enough tape rolls for sealing and reinforcing box bottoms. Label by room to match our professional packing approach and speed up placement after transport.",
        ],
      },
      {
        heading: "Delivery and using your moving checklist",
        paragraphs: [
          "We deliver packing materials locally across Huddersfield and Kirklees, usually when confirming your move date. Order a few days before you plan to pack so you are not rushing the night before. If you run short, contact us for a top-up delivery where schedule allows.",
          "Follow a moving checklist: pack room by room, keep a essentials box for first night, and set aside documents and valuables to travel with you, not in the van. Remember self-packed fragile boxes are moved carefully on removal day but breakages inside them are not claimable under £50,000 goods-in-transit cover; consider our packing services for china and glass.",
          "Packing materials are for items going to your new address. We do not supply materials for waste clearance or rubbish disposal. Recycle or dispose of unwanted goods before you fill boxes so you are not paying to move things you no longer want.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many boxes do I need for a house move?",
        a: "Rough guide: 20–30 boxes for a one-bed flat, 40–60 for a two-bed house, 60–90 for a three-bed family home in Huddersfield. We advise when you order and you can top up if you run short. A survey for your removal also helps refine counts if you book packing services.",
      },
      {
        q: "Do you deliver packing materials in Huddersfield?",
        a: "Yes, we deliver locally across Huddersfield and Kirklees, usually alongside confirming your move date. Delivery timing is agreed when you order, allow time to pack before loading and unloading day.",
      },
      {
        q: "Why double-wall boxes instead of free supermarket boxes?",
        a: "Two layers of corrugated card roughly doubles crush strength, it lets boxes stack safely in a van without the bottom layer collapsing during domestic removals. Free boxes often fail under weight, risking damage to contents and delays on moving day.",
      },
      {
        q: "Can I buy materials without booking a removal?",
        a: "Yes. Contact us with your postcode and home size for a materials quote and delivery. Many customers in Kirklees order kits for self-packing while arranging their own transport; others add a removal quote after survey for a full pack-and-move service.",
      },
      {
        q: "Do wardrobe cartons fit all hangers?",
        a: "Standard wardrobe cartons suit most household hangers. Tell us if you have unusually wide or heavy garments and we will advise quantities. They keep clothes ready to hang at the new address without folding.",
      },
      {
        q: "Are packing materials included in professional packing?",
        a: "Yes. when you book our packing services, all materials are included in the fixed written quote after survey. Materials-only orders are priced separately for customers who prefer to self-pack.",
      },
      {
        q: "Does self-packing affect insurance on moving day?",
        a: "Goods in transit cover is £50,000 per vehicle load on your removal, with terms set out in our documentation. Fragile items must be professionally packed by us for breakage claims inside boxes. Pack sturdily, label fragiles, and consider part packing for kitchens if insurance peace of matter matters.",
      },
    ],
  },
  {
    slug: "furniture-dismantling-and-reassembly",
    title: "Furniture Dismantling & Reassembly Huddersfield",
    h1: "Furniture Dismantling & Reassembly",
    icon: "wrench",
    short:
      "Furniture dismantling and reassembly across Huddersfield and Kirklees, beds, wardrobes, flat-pack and office desks taken apart for safe transport and rebuilt in your chosen room. Fixings bagged and labelled.",
    intro: [
      "Huddersfield Removals provides furniture dismantling and reassembly across Huddersfield, Kirklees and West Yorkshire, beds, wardrobes, flat-pack furniture and office desks taken apart for safe transport and rebuilt at your new address. Fixings are bagged and labelled, complex items are photographed before disassembly, and work is included in many house removal quotes after survey. Use our calculator for a guide estimate on full moves.",
      "Some furniture simply does not move in one piece: wardrobes that were built in the room, bed frames wider than the stairwell, flat-pack that flexes if carried assembled. Dismantling for transport, done carefully, is the safe answer and a standard part of domestic removals in older Huddersfield terraces with narrow access.",
      "Our crews carry the right tools, bag and label every fixing, and photograph anything complex before disassembly. At the destination, the same crew rebuilds each item in the room you choose as part of loading and unloading, not left as a flat-pack puzzle in the hallway.",
      "One honest note from our terms: reassembled furniture, particularly aged flat-pack, can never be guaranteed to be exactly as factory-built, and we may reinforce a joint where needed for safety. We will always tell you what we have done. This transparency is part of our fixed quote approach after survey, no surprise extras for standard bed and wardrobe dismantling agreed in advance.",
      "Dismantling and reassembly integrates with packing services and house removals under £50,000 goods-in-transit cover per vehicle load and £1 million public liability insurance. Standalone dismantling for furniture deliveries can also be quoted after a brief survey or video call.",
      "We dismantle furniture for relocation, not for disposal or waste clearance. If you are taking a wardrobe to the new house, we take it apart and rebuild it there. We do not strip kitchens or remove fitted units for rubbish removal; those jobs fall outside our dismantling service as defined in our terms.",
    ],
    features: [
      "Beds, wardrobes, tables and flat-pack furniture",
      "Office desks and workstations",
      "Fixings bagged, labelled and taped to the item",
      "Photos taken before complex disassembly",
      "Rebuilt in the correct room at the destination",
      "Often included in full house removal quotes",
      "£50,000 goods-in-transit cover on combined removals",
      "Fixed quotes after survey for standalone work",
    ],
    sections: [
      {
        heading: "How dismantling and reassembly works",
        paragraphs: [
          "At survey we identify which items need dismantling, beds, wardrobes, dining tables, office desks, and include that in your fixed written removal quote. On moving day, the crew disassembles in a logical order, bags fixings clearly, and loads panels flat or edge-up to protect surfaces during transport.",
          "At the new address, the same crew rebuilds each piece in the room you specify before moving on to the next item. This continuity matters: they know which bag belongs to which wardrobe and how your bed frame came apart. Goods travel under £50,000 goods-in-transit insurance per load as part of your removal.",
          "Extra or unplanned dismantling discovered on the day may carry a reasonable additional charge under our terms, another reason the pre-move survey and moving checklist matter. Tell us about IKEA wardrobes, custom beds and anything built in tight spaces when you enquire.",
        ],
      },
      {
        heading: "What to expect on moving day",
        paragraphs: [
          "Clear access around large furniture before the crew arrives. Remove clothes from wardrobes if quoted that way, and empty drawers in desks unless our terms allow transport with contents secured. We do not dismantle garden sheds, greenhouses or outdoor structures as standard, ask for a separate quote.",
          "After reassembly, check doors and drawers align and tell us immediately if something feels loose, we can often adjust on site. Aged flat-pack may have worn cam locks; we reinforce where safety requires it and explain limits honestly per our terms.",
          "Dismantling is for items moving to your new home, not for clearance. Dispose of unwanted furniture before moving day, we are not a waste removal service and will not load rubbish or items you intend to throw away.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is dismantling included in a house removal quote?",
        a: "Standard bed and wardrobe dismantling and reassembly is usually included when agreed at survey and reflected in your fixed written removal quote. Extra or unplanned dismantling on the day may carry a reasonable additional charge, as set out in our terms. Use our calculator for the overall move guide price.",
      },
      {
        q: "Do you reassemble everything at the new house?",
        a: "Yes. whatever we take apart for transport, we rebuild in the room you choose. We do not leave you with a pile of panels and a bag of bolts. Reassembly is part of the same crew visit for loading and unloading.",
      },
      {
        q: "Can you dismantle garden furniture and sheds?",
        a: "Outdoor furniture, sheds and garden structures are not included in a standard house removal quote, they need quoting separately, per our terms. Ask when you enquire with dimensions and photos for a fixed price after assessment.",
      },
      {
        q: "Will my flat-pack furniture be as sturdy after reassembly?",
        a: "Reassembled furniture, especially aged flat-pack, may not be exactly as factory-new. We rebuild correctly and reinforce joints where safety requires it. Limits are explained in our terms, we prefer honesty over promises we cannot keep.",
      },
      {
        q: "Can I book dismantling without a full removal?",
        a: "Yes, for example when delivering new furniture that must come apart to fit through doors. Contact us with photos for a fixed quote after a brief survey or video call. Public liability cover applies to our work on site.",
      },
      {
        q: "What tools and fixings do you handle?",
        a: "Our crews carry standard tools for beds, wardrobes and flat-pack. Fixings are bagged, labelled and taped to the relevant panel. If hardware is missing or stripped, we will tell you before forcing anything, replacement parts are your responsibility.",
      },
      {
        q: "Does dismantling affect insurance during the move?",
        a: "Disassembled furniture is padded and loaded like any other goods under £50,000 goods-in-transit cover per vehicle load on your removal. Damage from pre-existing wear or missing parts is excluded, see our terms. Survey documentation helps record condition before disassembly.",
      },
    ],
  },
  {
    slug: "short-distance-moves",
    title: "Short Distance Moves Huddersfield",
    h1: "Short Distance & Local Moves in Huddersfield",
    icon: "truck",
    short:
      "Short-distance and local moves within Huddersfield and Kirklees, same-day options, efficient multi-trip planning, and crews who know HD1–HD9 streets. Full wrapping and fixed quotes after survey.",
    intro: [
      "Huddersfield Removals specialises in short-distance moves within Huddersfield, Kirklees and all HD postcodes, same-day and next-day domestic relocations across town with efficient loading and unloading, multi-trip planning where it saves time, and crews who know local streets. Use our moving cost calculator for a guide estimate; fixed removal quotes are confirmed after a free in-person or video survey.",
      "Moving two streets over or across town? Short-distance moves have their own logic: sometimes two quick trips with a 3.5-tonne Luton beats one slow load, and knowing where to park on a narrow terraced street saves half an hour per trip. Local knowledge across Kirklees means realistic timings and no wasted mileage on your removal quote.",
      "We move people between Huddersfield's neighbourhoods every week: Marsh to Lindley, town centre flats to Golcar terraces, Almondbury to Holmfirth. Short-distance domestic removals get the same care as long hauls: blankets, stretch wrap, straps, optional packing services, and dismantling and reassembly where quoted.",
      "Local moves are priced fairly for what they are: shorter drive time typically means a lower overall price than a long-distance move of the same size, though loading and unloading effort is similar. Your fixed written quote after survey reflects volume and access, not an open-ended hourly rate charged to customers.",
      "Evening slots suit tenancy handovers and completion days when you only have a short window between keys. We coordinate with your moving checklist, parking dispensations, elevator bookings in flats, and clear labelling, so short moves do not become stressful simply because the distance is small.",
      "Goods in transit are covered at £50,000 per vehicle load with £1 million public liability on every local move. We relocate household belongings within Kirklees, we are not a waste clearance service and do not make tip runs or remove rubbish as part of a short-distance removal.",
    ],
    features: [
      "Moves within and between all HD postcodes",
      "Same-day and next-day availability subject to schedule",
      "Multi-trip planning where it saves money",
      "Crews with genuine local street knowledge",
      "Full wrapping and protection on every local move",
      "Evening slots for tenancy handovers",
      "£50,000 goods-in-transit cover per vehicle load",
      "Fixed written quotes after survey",
    ],
    sections: [
      {
        heading: "How short-distance moves work",
        paragraphs: [
          "Survey confirms volume, parking, stairs and whether one load or two trips is best value for your local move. You receive a fixed written removal quote, calculator first for a guide, survey for the confirmed price. On moving day, the crew works efficiently through loading and unloading because drive time between addresses is minimal.",
          "Multi-trip planning suits terraced streets where parking one Luton for a full house load is impossible, we shuttle boxes and furniture in planned waves rather than blocking a road all day. Each trip is secured and covered under £50,000 goods-in-transit insurance per load.",
          "Optional packing the day before keeps short moves fast on the day itself. Dismantling and reassembly of beds and wardrobes is quoted at survey so there are no delays at narrow Huddersfield stairwells.",
        ],
      },
      {
        heading: "Making local moves run smoothly",
        paragraphs: [
          "Book Kirklees parking dispensations where residents' bays apply, we advise at survey. Clear pathways in both properties and agree which rooms receive furniture first at the new address. A short move still deserves a moving checklist: meters read, keys arranged, essentials box packed.",
          "Same-day local moves are often possible midweek, call in the morning and we will check the schedule honestly. End-of-month Fridays fill quickly across Huddersfield; book early for fixed quotes and your preferred slot.",
          "Declutter before we arrive so we move belongings you want at the new address, not waste for disposal. We are domestic removals specialists, not clearance contractors, keeping loads focused keeps local moves affordable.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a short move charged differently from a long-distance removal?",
        a: "Yes. with minimal driving time, more of the job is loading and unloading, so local moves within Huddersfield and Kirklees are typically our best-value domestic removals. You still receive a fixed written quote after survey. Use the calculator for a guide; we do not quote on an hourly rate.",
      },
      {
        q: "Can you do a same-day move in Huddersfield?",
        a: "Often, especially midweek. Call in the morning and we will tell you honestly whether we can fit you in that day. Same-day jobs still need a brief survey or video call so volume and access are clear and the quote is fixed.",
      },
      {
        q: "Do you help with council parking restrictions?",
        a: "Where parking is restricted, Kirklees Council offers parking dispensations for removal vans. We advise what is needed for your street when we survey the move. Apply in advance so loading and unloading are not delayed on the day.",
      },
      {
        q: "Are two trips cheaper than one big van for a local move?",
        a: "Sometimes. Narrow terraces may make shuttling two smaller loads faster than one long park. We recommend the most efficient approach at survey and reflect it in your fixed removal quote, not as a surprise on the day.",
      },
      {
        q: "What insurance applies to short-distance moves?",
        a: "Every local move includes £50,000 goods-in-transit insurance per vehicle load and £1 million public liability insurance, as set out in our terms and conditions. Multi-trip moves are covered per loaded journey.",
      },
      {
        q: "Can you move me just across Huddersfield on a completion day?",
        a: "Yes. completion-day local moves are common. Book early, confirm key times with your solicitor, and consider an evening slot if legal completion runs late. Fixed quotes after survey help you budget alongside other moving costs.",
      },
      {
        q: "Do you take rubbish on a local move?",
        a: "No. Short-distance moves are for household belongings relocating to your new address. We do not provide waste clearance or tip runs, arrange disposal separately before moving day.",
      },
    ],
  },
  {
    slug: "long-distance-removals",
    title: "Long Distance Removals Huddersfield",
    h1: "Long Distance Removals from Huddersfield",
    icon: "arrow",
    short:
      "Long-distance domestic removals from Huddersfield to anywhere on the UK mainland: London, Scotland, Cornwall and everywhere between. One crew door to door, fixed written quotes after survey.",
    intro: [
      "Huddersfield Removals handles long-distance domestic removals from Huddersfield and Kirklees to anywhere on the UK mainland: London, Manchester, Scotland, Cornwall and everywhere between. One crew loads at your old home and unloads at your new door with no depot transfers, goods protected by £50,000 goods-in-transit cover per vehicle load, and fixed written removal quotes after survey. Use our calculator for a guide estimate first.",
      "Moving beyond West Yorkshire? We handle long-distance house removals with the same standards as local work: protective wrapping, careful loading and unloading, optional packing services, and dismantling and reassembly where quoted. Your belongings are never warehoused or transferred to a third-party carrier mid-journey.",
      "Long moves are planned properly: route and timing agreed in advance, an early start to beat motorway traffic where helpful, and realistic arrival windows communicated on the day. Your goods travel strapped and padded in our Luton vans with £50,000 goods-in-transit insurance per load and £1 million public liability throughout.",
      "We quote fixed prices for long-distance work, mileage, crew, van loads and access calculated up front in writing after survey. That protects you from open-ended pricing and lets you compare against other domestic removals options clearly. Popular routes from Huddersfield include Leeds, Manchester, Sheffield, Birmingham and London.",
      "Packing services are strongly recommended for long-distance removals, professionally packed fragiles meet GIT claim conditions in our terms, and secure stacking matters more when transit time is longer. We can pack the day before loading so the crew starts transport promptly.",
      "We focus on UK mainland house removals, not international shipping or waste clearance. We move your household to a new home; we do not take rubbish for disposal or offer overseas container logistics. If your move stays within Britain, we provide one team and one fixed quote door to door.",
    ],
    features: [
      "Anywhere on the UK mainland",
      "Same crew door to door, no depot transfers",
      "Fixed written quotes after survey",
      "Early starts and planned arrival windows",
      "£50,000 goods-in-transit cover per vehicle load",
      "£1 million public liability insurance",
      "Packing services available for long moves",
      "Dismantling and reassembly included where quoted",
    ],
    sections: [
      {
        heading: "How long-distance removals work",
        paragraphs: [
          "Survey, in person or video, establishes volume, packing needs, dismantling and both addresses' access. You receive a fixed written removal quote covering distance, crew size, loads and timing. The calculator gives a guide; cross-country quotes are always confirmed after survey so mileage and hours are accurate.",
          "Loading day starts early on long routes. Furniture and boxes are secured for motorway driving, with fragiles loaded last and unloaded first where possible. The same crew travels with your goods and unloads at destination, no handoff to unknown subcontractors.",
          "Arrival windows depend on distance and traffic; we stay in contact on the day. Unloading follows the same room-by-room placement as local house removals. Combined pack-and-move jobs are sequenced so packing finishes before the truck leaves Huddersfield or Kirklees.",
        ],
      },
      {
        heading: "Planning a long-distance house move",
        paragraphs: [
          "Use a thorough moving checklist: redirect mail, confirm completion chains, book parking at both ends, and arrange childcare or pets away from loading areas. Declutter before packing, we move belongings you want at the new home, not waste for disposal. We are not a clearance company.",
          "Consider professional packing for kitchens and fragiles given longer transit under £50,000 GIT cover conditions in our terms. Label boxes by room clearly to speed unloading after a long drive. Keep documents, jewellery and small valuables with you.",
          "Book four to six weeks ahead for popular routes and month-end dates. Fixed quotes after survey lock pricing before completion day uncertainty. If your completion slips, contact us early to reschedule within our terms.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a long-distance removal from Huddersfield cost?",
        a: "Distance, volume and access drive the price. A one-bed flat to London costs much less than a four-bed house to Cornwall. Tell us both postcodes, use our moving cost calculator for a guide estimate, and we will provide a fixed written removal quote after survey, usually the same day. We do not quote on an hourly rate.",
      },
      {
        q: "Can you move me in one day over long distances?",
        a: "Most UK mainland moves complete in a single long day with an early start. For distances over roughly 250 miles or large houses we may plan loading the evening before. Timing is agreed at survey and reflected in your fixed quote.",
      },
      {
        q: "Do you do international removals?",
        a: "No. we focus on UK mainland domestic removals only. We do not offer international shipping, and we would rather say that clearly than hand your move to a third party without transparency.",
      },
      {
        q: "Is my furniture transferred to another company mid-route?",
        a: "No. The same Huddersfield Removals crew loads and unloads door to door. There are no depot transfers or subcontractor handoffs on standard long-distance jobs quoted through us.",
      },
      {
        q: "What insurance covers long-distance moves?",
        a: "Long-distance removals include £50,000 goods-in-transit insurance per vehicle load and £1 million public liability insurance. Terms, exclusions and claims steps are in our documentation. Professional packing improves fragile claim eligibility under GIT.",
      },
      {
        q: "Should I use your packing service for a long move?",
        a: "We recommend at least part packing for kitchens and fragiles on long-distance house removals. Transit vibration affects self-packed boxes more over hours on the road. Packing can be included in your fixed quote after survey.",
      },
      {
        q: "Can you store my belongings between addresses?",
        a: "Our standard service is direct door-to-door domestic removals without storage. If completion chains misalign, contact us to discuss options, ad hoc storage is not our core service and may need separate arrangement outside a standard fixed quote.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
