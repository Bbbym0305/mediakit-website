// ============================================================
//  PROJECTS DATA — Edit this file to update your portfolio
//
//  Each project has:
//   - slug:       Short unique ID used in the URL, no spaces (e.g. "coppens")
//   - title:      Bold heading shown on the card
//   - subtitle:   Short description line
//   - category:   Filter label (must match a value in CATEGORIES below)
//   - subject:    Bewerking filter (must match a value in SUBJECTS below)
//   - region:     Region filter (must match a value in REGIONS below)
//   - company:    Which CVV company did the work
//                 Options: "Verzinkerij Meerveldhoven" | "De Run Metaalcoating" | "Dameco Plating"
//   - image:      Path to image file, e.g. "images/mijn-foto.jpg"
//   - link:       Leave as "project.html" — do not change this
//
//   - detail:     The full story shown on the detail page
//       - customer:   Name + function of the contact person at the customer
//       - intro:      Opening paragraph (1–2 sentences)
//       - quote:      Large pull quote shown prominently
//       - body:       Array of paragraphs telling the full story
//       - quote2:     (optional) Second quote at the bottom
//       - facts:      Array of { label, value } shown as key facts
// ============================================================

const CATEGORIES = [
  "Industrie",
  "Infrastructuur",
  "Agrarisch",
  "Recreatie & Sport",
  "Energie",
  "Defensie",
];

const SUBJECTS = [
  "Thermisch verzinken",
  "Centrifugaal verzinken",
  "Elektrolytisch verzinken",
  "Poedercoaten",
  "Natlakken",
  "Stralen",
  "Beitsen / Passiveren",
];

const REGIONS = [
  "Noord-Nederland",
  "Zuid-Nederland",
  "West-Nederland",
  "Oost-Nederland",
  "België",
];

const PROJECTS = [

  // ── KLANTPROJECTEN ───────────────────────────────────────

  {
    slug: "coppens",
    title: "BIJNA 50 JAAR PARTNERS IN PRECISIE",
    subtitle: "Coppens Metaal-techniek — buisdelen voor interieur, machinebouw en defensie",
    category: "Industrie",
    subject: "Thermisch verzinken",
    region: "Zuid-Nederland",
    company: "Verzinkerij Meerveldhoven",
    image: "images/project-coppens.jpg",
    link: "project.html",
    detail: {
      customer: "Bas Coppens — Directeur, Coppens Metaal-techniek",
      intro: "Vanuit Westerhoven, midden in de Brainportregio, produceert Coppens Metaal-techniek al bijna vijftig jaar hoogwaardige buisdelen. Een precisiespecialist die zijn oppervlaktebehandeling al even lang toevertrouwt aan het Centrum voor Verduurzamen.",
      quote: "Het Centrum voor Verduurzamen staat altijd klaar wanneer het nodig is. Dat maakt het voor ons tot een partner waar je op kunt bouwen.",
      body: [
        "Het begon met een handdruk. In 1978 ontmoetten oprichter Jan Coppens en Henk Sweegers van Verzinkerij Meerveldhoven elkaar voor het eerst. Wat volgde was het begin van een samenwerking die inmiddels bijna een halve eeuw omspant — en nog steeds dagelijks tot uiting komt.",
        "Coppens Metaal-techniek is gespecialiseerd in de productie van hoogwaardige buisdelen met gaten, tot op de millimeter nauwkeurig. Het bedrijf levert zowel losse onderdelen als complete eindproducten aan klanten in de interieurbranche, de machinebouw en de defensie-industrie. De gecombineerde techniek voor gebogen buizen — mét of zonder gaten — maakt Coppens uniek in zijn soort.",
        "Voor de oppervlaktebehandeling van die producten maakt Coppens gebruik van vrijwel het volledige aanbod van het Centrum voor Verduurzamen: thermisch verzinken, elektrolytisch verzinken, poedercoaten en natlakken. Dat alles op één locatie — en dat is precies wat de samenwerking zo waardevol maakt.",
        "\"Door alles op één locatie te laten uitvoeren, besparen we enorm op transport\", vertelt Bas Coppens. \"Voor series waarbij meerdere oppervlaktebehandelingen nodig zijn, scheelt dat niet alleen tijd en geld — het verkleint ook de kans op fouten aanzienlijk.\"",
        "De korte lijnen, heldere afspraken en de mogelijkheid om spoedorders altijd in overleg op te pakken maken het Centrum voor Verduurzamen tot een vanzelfsprekende keuze. Ook op het gebied van duurzaamheid vinden beide bedrijven elkaar: Coppens werkt uitsluitend samen met leveranciers die dezelfde normen hanteren. \"Het Centrum voor Verduurzamen past perfect in die visie\", aldus Bas Coppens.",
      ],
      quote2: "Door alles op één locatie te laten uitvoeren, besparen we enorm op transport. Voor series met verschillende oppervlaktebehandelingen scheelt dat tijd, geld én de kans op fouten.",
      facts: [
        { label: "Samenwerking sinds", value: "1978" },
        { label: "Locatie klant",      value: "Westerhoven, Brainportregio" },
        { label: "Sectoren",           value: "Interieur, Machinebouw, Defensie" },
        { label: "Bewerkingen",        value: "Thermisch verzinken, Elektrolytisch verzinken, Poedercoaten, Natlakken" },
        { label: "CVV-contact",        value: "Tom van Casteren — Manager Operations" },
      ],
    },
  },

  {
    slug: "theuws",
    title: "EEN KEMPISCH PARTNERSCHAP OP KWALITEIT",
    subtitle: "Theuws Groep — dagelijkse samenwerking met verzinken en beitsen",
    category: "Industrie",
    subject: "Elektrolytisch verzinken",
    region: "Zuid-Nederland",
    company: "Dameco Plating",
    image: "images/project-theuws.jpg",
    link: "project.html",
    detail: {
      customer: "Teun Martens — Hoofd bedrijfsbureau, Theuws Metaal (Theuws Groep)",
      intro: "Theuws Groep en het Centrum voor Verduurzamen kennen elkaar al langer dan de administratie bijhoudt. Een partnerschap dat dagelijks zichtbaar is op de werkvloer — en dat gedijt op vertrouwen, kwaliteit en wederzijds respect.",
      quote: "Een gemoedelijk Kempisch partnerschap waar kwaliteit hoog in het vaandel staat.",
      body: [
        "De eerste geregistreerde order in het ERP-systeem van het Centrum voor Verduurzamen dateert uit 2003. Maar de samenwerking met Verzinkerij Meerveldhoven en Dameco Plating gaat nog verder terug. Teun Martens, Hoofd bedrijfsbureau bij Theuws Metaal, spreekt dan ook niet voor niets over een duurzame relatie.",
        "\"We komen dagelijks over de vloer\", vertelt Martens. Dat dagelijkse contact is geen toeval — het is het resultaat van een werkwijze die draait om korte lijnen, directe communicatie en een gedeeld gevoel voor kwaliteit en vakmanschap. De sfeer omschrijft hij als 'we helpen elkaar vooruit': een cultuur van geven en nemen, waarbij beide partijen investeren in een goede samenwerking.",
        "Theuws Groep maakt gebruik van meerdere bewerkingen die het Centrum voor Verduurzamen aanbiedt: elektrolytisch verzinken, beitsen, passiveren en thermisch verzinken — waarbij thermisch verzinken het meest voorkomt. Dat alles onder één dak is voor Theuws een groot voordeel. Producten die eerst worden verzinkt en daarna worden gepoedercoat, hoeven slechts naar één adres.",
        "\"Alles op één locatie laten behandelen is efficiënt in kosten én in organisatie\", aldus Martens. Producten bewegen door de drie bedrijven als waren het afdelingen van één onderneming. Dat vergt coördinatie, maar het resultaat is een soepel proces zonder onnodige logistieke complexiteit.",
        "Wat Theuws Groep ook waardeert: het Centrum voor Verduurzamen blijft investeren in uitbreiding en optimalisatie. Die voortdurende verbetering — van installaties tot processen — geeft Theuws het vertrouwen dat de kwaliteit ook in de toekomst gewaarborgd blijft.",
      ],
      quote2: "Alles op één locatie behandelen is efficiënt in kosten én in organisatie. Producten bewegen door de bedrijven als waren het afdelingen van één onderneming.",
      facts: [
        { label: "Samenwerking sinds", value: "Begin jaren 2000 (geregistreerd 2003)" },
        { label: "Bezoekfrequentie",   value: "Dagelijks" },
        { label: "Bewerkingen",        value: "Elektrolytisch verzinken, Thermisch verzinken, Beitsen, Passiveren" },
        { label: "Kenmerk",            value: "Combinatietrajecten: verzinken + poedercoaten" },
        { label: "CVV-bedrijven",      value: "Verzinkerij Meerveldhoven & Dameco Plating" },
      ],
    },
  },

  // ── VOORBEELDPROJECTEN (vervang door eigen projecten) ────

  {
    slug: "bruggendek-veldhoven",
    title: "STALEN BRUGGENDEK VELDHOVEN DE RUN",
    subtitle: "Langdurige bescherming voor stedelijke infrastructuur",
    category: "Infrastructuur",
    subject: "Thermisch verzinken",
    region: "Zuid-Nederland",
    company: "Verzinkerij Meerveldhoven",
    image: "images/project-bridge.jpg",
    link: "#",
  },
  {
    slug: "industrieel-staalframe",
    title: "INDUSTRIEEL STAALFRAME",
    subtitle: "Verzinkte draagconstructie voor productiemagazijn",
    category: "Industrie",
    subject: "Thermisch verzinken",
    region: "West-Nederland",
    company: "Verzinkerij Meerveldhoven",
    image: "images/project-industrial.jpg",
    link: "#",
  },
  {
    slug: "landbouwmachines",
    title: "LANDBOUWMACHINES",
    subtitle: "Corrosiebescherming voor agrarische apparatuur",
    category: "Agrarisch",
    subject: "Centrifugaal verzinken",
    region: "Noord-Nederland",
    company: "Verzinkerij Meerveldhoven",
    image: "images/project-agriculture.jpg",
    link: "#",
  },
  {
    slug: "speeltoestellen",
    title: "SPEELTOESTELLEN",
    subtitle: "Veilig en duurzaam verzinkt speelterrein",
    category: "Recreatie & Sport",
    subject: "Poedercoaten",
    region: "Zuid-Nederland",
    company: "De Run Metaalcoating",
    image: "images/project-playground.jpg",
    link: "#",
  },
  {
    slug: "vangrails-a2",
    title: "RIJKSWEGVANGRAILS A2",
    subtitle: "Grootschalige verzinking voor rijksinfrastructuur",
    category: "Infrastructuur",
    subject: "Thermisch verzinken",
    region: "Zuid-Nederland",
    company: "Verzinkerij Meerveldhoven",
    image: "images/project-guardrail.jpg",
    link: "#",
  },
  {
    slug: "windturbine",
    title: "WINDTURBINE ONDERDELEN",
    subtitle: "Duurzame bescherming voor hernieuwbare energie",
    category: "Energie",
    subject: "Thermisch verzinken",
    region: "Noord-Nederland",
    company: "Verzinkerij Meerveldhoven",
    image: "images/project-windturbine.jpg",
    link: "#",
  },
  {
    slug: "stellingen",
    title: "INDUSTRIËLE STELLINGEN",
    subtitle: "Magazijnstelling volledig thermisch verzinkt",
    category: "Industrie",
    subject: "Thermisch verzinken",
    region: "België",
    company: "Verzinkerij Meerveldhoven",
    image: "images/project-shelving.jpg",
    link: "#",
  },
];

// ── Bedrijf → kleurklasse (niet aanpassen) ───────────────────
const COMPANY_CLASS = {
  "Verzinkerij Meerveldhoven": "yellow",
  "De Run Metaalcoating":      "green",
  "Dameco Plating":            "red",
};
