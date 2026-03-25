// ============================================================
//  PROJECTS DATA — Edit this file to update your portfolio
//
//  Each project has:
//   - title:       Bold heading shown on the card
//   - subtitle:    Short description line
//   - category:    Filter label (must match a value in CATEGORIES below)
//   - subject:     Bewerking filter (must match a value in SUBJECTS below)
//   - region:      Region filter (must match a value in REGIONS below)
//   - company:     Which CVV company did the work — used for the coloured label
//                  Options: "Verzinkerij Meerveldhoven" | "De Run Metaalcoating" | "Dameco Plating"
//   - image:       Path to image file, e.g. "images/mijn-foto.jpg"
//   - link:        URL to a detail page, or "#" to disable
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
    title: "BIJNA 50 JAAR PARTNERS IN PRECISIE",
    subtitle: "Coppens Metaal-techniek — buisdelen voor interieur, machinebouw en defensie",
    category: "Industrie",
    subject: "Thermisch verzinken",
    region: "Zuid-Nederland",
    company: "Verzinkerij Meerveldhoven",
    image: "images/project-coppens.jpg",
    link: "#",
  },
  {
    title: "EEN KEMPISCH PARTNERSCHAP OP KWALITEIT",
    subtitle: "Theuws Groep — dagelijkse samenwerking met verzinken en beitsen",
    category: "Industrie",
    subject: "Elektrolytisch verzinken",
    region: "Zuid-Nederland",
    company: "Dameco Plating",
    image: "images/project-theuws.jpg",
    link: "#",
  },

  // ── VOORBEELDPROJECTEN (vervang door eigen projecten) ────

  {
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
