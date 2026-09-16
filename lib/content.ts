/**
 * MUHAS Review — issue content.
 *
 * Everything the magazine says lives here, so a new issue is a data edit
 * rather than a layout edit. Sourced from muhas.ac.tz and University material.
 */

export const issue = {
  title: "MUHAS Review",
  number: "Issue 01",
  numberAlt: "Toleo la Kwanza",
  date: "September 2026",
  kicker: "The University Magazine",
  motto: ["Elimu", "Tiba", "Utafiti"] as const,
  mottoGloss: "Education · Care · Research",
  university: "Muhimbili University of Health and Allied Sciences",
  tagline:
    "Tanzania’s premier in health training, research and consultancy services",
};

export const coverLines = [
  {
    title: "A house built since 1963",
    blurb: "From a medical school in Dar es Salaam to an autonomous health university",
  },
  {
    title: "650 patients, 83 surgeries",
    blurb: "What the Muhimbili Eye Outreach did in five days in Gairo",
  },
  {
    title: "Five values, one culture",
    blurb: "The standard MUHAS holds itself to",
  },
];

export const sections = [
  { id: "letter", n: "01", title: "From the Vice Chancellor", blurb: "A welcome to the University", nav: "Letter" },
  { id: "identity", n: "02", title: "Who We Are", blurb: "Vision, mission and the year in numbers", nav: "Identity" },
  { id: "story", n: "03", title: "Our Story", blurb: "Six decades, one continuous line", nav: "Story" },
  { id: "leaders", n: "04", title: "The Leaders", blurb: "The four people who carry the office", nav: "Leaders" },
  { id: "culture", n: "05", title: "Our Culture", blurb: "Five values that define the institution", nav: "Culture" },
  { id: "field", n: "06", title: "In the Field", blurb: "Outreach, innovation and partnership", nav: "Field" },
  { id: "campuses", n: "07", title: "The Campuses", blurb: "Muhimbili, Mloganzila, Kigoma, Bagamoyo", nav: "Campuses" },
  { id: "academic", n: "08", title: "Academic Units", blurb: "Where the teaching happens", nav: "Units" },
] as const;

export const identity = {
  vision:
    "A world-class university excelling in health training, research, innovation, and services.",
  mission:
    "To provide transformative health training, conduct high-impact research, and deliver quality services by leveraging technology and innovation.",
};

export const stats = [
  { value: 3723, label: "Undergraduate students" },
  { value: 1690, label: "Postgraduate students" },
  { value: 469, label: "Academic staff" },
  { value: 364, label: "Administrative staff" },
  { value: 21, label: "Undergraduate programmes" },
  { value: 101, label: "Postgraduate programmes" },
];

export const timeline = [
  {
    years: "1963 – 1967",
    title: "Dar es Salaam Medical School",
    body: "The beginning: a medical school for a newly independent nation.",
  },
  {
    years: "1968 – 1969",
    title: "Faculty of Medicine, University of East Africa",
    body: "The school becomes the Faculty of Medicine of Dar es Salaam University College, then part of the University of East Africa.",
  },
  {
    years: "1970 – 1990",
    title: "Faculty of Medicine, University of Dar es Salaam",
    body: "After the dissolution of the University of East Africa, the Faculty joins UDSM. From 1976 it is incorporated within the Muhimbili Medical Centre.",
  },
  {
    years: "1991 – 2006",
    title: "Muhimbili University College of Health Sciences",
    body: "Upgraded to a constituent college of UDSM through Parliament Act No. 9 of 1991. In 1996 MUCHS merges with the Muhimbili Medical Centre, tying education, research and healthcare service together.",
  },
  {
    years: "2007 – Present",
    title: "Muhimbili University of Health and Allied Sciences",
    body: "Following the Universities Act No. 7 of 2005, MUHAS is established in 2007 through its Charter of Incorporation — an autonomous public university, and today a university of three campuses.",
    now: true,
  },
];

export const leaders = [
  {
    role: "Vice Chancellor",
    name: "Prof. Appolinary A. R. Kamuhabwa",
    cred: "Professor of Pharmacology · Department of Clinical Pharmacy and Pharmacology",
    bio: "Holds a Bachelor of Pharmacy from the University of Dar es Salaam (1994), and Masters, PhD and postdoctoral fellowship in Pharmacology from the Catholic University of Leuven, Belgium. He has published over 110 peer-reviewed research articles, with more than twenty years of research experience in cancer, HIV, malaria and cardiovascular disease — including bladder cancer, malaria in pregnancy, hypertension and rheumatic heart disease. Since 2019 he has served as an advisor to the Sickle Cell Programme at MUHAS.",
    lead: true,
  },
  {
    role: "Deputy Vice Chancellor — Academic",
    name: "Prof. Emmanuel Balandya",
    cred: "Physician-scientist · Biomedical sciences",
    bio: "Medical degree, University of Dar es Salaam (2005); doctorate, Dartmouth College (2012); postdoctoral fellowship, Harvard Medical School (2014). He is Principal Investigator of the NIH/NHLBI-funded Sickle Pan-African Research Consortium (SPARCO) — Tanzania, and Co-PI of the SPARCO Clinical Coordinating Centre within the wider SickleInAfrica consortium spanning eight African countries. He also serves on the board of Young Scientists Tanzania.",
  },
  {
    role: "Deputy Vice Chancellor — Planning, Finance and Administration",
    name: "Prof. Erasto V. Mbugi",
    cred: "Professor of Applied Biomedical Sciences · Biochemistry and Molecular Biology",
    bio: "Teaches biochemistry, molecular biology and the genetics of human disease. He holds a Bachelor of Veterinary Medicine, a masters with a biomedical research background, and a PhD in Nutritional Immunology, with 25 years of teaching and research in tropical diseases — particularly tuberculosis and malaria — and over 70 publications. He coordinates the Higher Education for Economic Transformation (HEET) project, supported by the World Bank under the Ministry of Education, Science and Technology.",
  },
  {
    role: "Deputy Vice Chancellor — Research and Consultancy",
    name: "Prof. Bruno Sunguya",
    cred: "Professor of Public Health Nutrition · School of Public Health and Social Sciences",
    bio: "Liaison Professor at Kumamoto University, Japan; Honorary Senior Fellow at Oxford University; and International Scholar at the Center for Global Health, University of Pennsylvania. At MUHAS he established the PhD and MSc programmes in Nutrition Epidemiology and co-leads a PhD programme in Bioethics. He has disseminated over 120 peer-reviewed articles and authored four book chapters, and previously served as a clinician at Muhimbili National Hospital and at the Department of Nutrition for Health and Development at WHO headquarters in Geneva.",
  },
];

export const values = [
  {
    n: "i",
    title: "Excellence and Professionalism",
    body: "Pursuit of the highest standards in training, research, service delivery and conduct, with a strong commitment to continuous improvement and academic rigour.",
  },
  {
    n: "ii",
    title: "Integrity and Accountability",
    body: "Upholding ethical behaviour, transparency and responsibility in all institutional activities, ensuring trust and credibility in the eyes of stakeholders.",
  },
  {
    n: "iii",
    title: "Innovation and Sustainability",
    body: "Embracing creative solutions, digital transformation, climate-smart practices and diversified revenue strategies that ensure institutional resilience and long-term financial sustainability.",
  },
  {
    n: "iv",
    title: "Diversity, Equity and Inclusiveness",
    body: "Ensuring fairness, respect for diversity, gender equity, and meaningful inclusion of marginalised and disadvantaged populations.",
  },
  {
    n: "v",
    title: "Linkages, Collaborations and Partnerships",
    body: "Fostering mutually beneficial partnerships and engaging stakeholders through responsive research, service and outreach that address national and global health challenges.",
  },
];

export const lead = {
  tag: "Outreach",
  title: "650 patients in five days, and 83 people who can see again",
  body: [
    "Through its Department of Ophthalmology, and in collaboration with Focus Foundation and Charity Vision Tanzania, MUHAS provided specialised eye care to 650 patients during a five-day outreach programme at Gairo District Hospital.",
    "The team diagnosed glaucoma, cataracts and refractive errors, and performed 83 sight-restoring surgeries — expanding access to quality eye care and preventing avoidable blindness in underserved communities.",
  ],
  meta: "Morogoro Region · August 2026",
  image: "/assets/eye-outreach.jpg",
  alt: "Patients with surgical eye patches seated on benches with the MUHAS outreach team standing behind them, beneath a banner reading The Muhimbili Eye Outreach Program.",
};

export const stories = [
  {
    tag: "Innovation",
    title: "Tanga applauds student and researcher innovation",
    body: "At the National Education, Skills and Innovation Week at Usagara Secondary School, Tanga Regional Commissioner Amb. Dr. Batilda Buriani praised the innovations developed by MUHAS students and researchers — technologies aimed squarely at real problems in the health sector.",
    meta: "20 August 2026",
    image: "/assets/itm-innovation.jpg",
    alt: "MUHAS staff at an exhibition stand presenting bottled and jarred herbal products from the Institute of Traditional Medicine to a visiting guest.",
  },
  {
    tag: "Partnership",
    title: "MUHAS and Cape Town open a framework",
    body: "Deputy Vice Chancellor for Academic Prof. Emmanuel Balandya met University of Cape Town Deputy Vice Chancellor for Teaching and Learning Prof. Brandon Collier-Reed. Both institutions agreed to begin developing a Memorandum of Understanding for joint academic, research and innovation initiatives.",
    meta: "7 July 2026",
    image: "/assets/capetown.jpg",
    alt: "Prof. Emmanuel Balandya shaking hands with Prof. Brandon Collier-Reed and exchanging a gift bag bearing the MUHAS crest at the University of Cape Town.",
  },
  {
    tag: "Clinical training",
    title: "Mloganzila prepares to teach",
    body: "Led by the Principal of the College of Medicine, Prof. Enica Richard, MUHAS management held discussions with the management of Muhimbili National Hospital Mloganzila on operationalizing the College of Medicine at the Mloganzila Campus, and on strengthening clinical training opportunities for students.",
    meta: "8 July 2026",
    image: "/assets/leadership.jpg",
    alt: "Seven members of MUHAS leadership and hospital management standing together for a group photograph outside a building.",
  },
  {
    tag: "Milestone",
    title: "A sedation unit, and a first for paramedic education",
    body: "MUHAS launched its Dental Sedation Unit alongside a Memorandum of Understanding with Ankara University and TİKA for the inaugural Paramedic Education initiative in Tanzania — officiated by Vice Chancellor Prof. Appolinary R. Kamuhabwa and Prof. Dr. Necdet Ünüvar, with the Ambassador of the Republic of Türkiye to Tanzania in attendance.",
    meta: "17 August 2026",
    flat: true,
  },
];

export const campuses = [
  {
    name: "Muhimbili",
    where: "Upanga, Ilala District, Dar es Salaam",
    body: "The historic heart of the University, beside Muhimbili National Hospital.",
  },
  {
    name: "Mloganzila",
    where: "Ubungo District, Dar es Salaam",
    body: "Roughly 3,800 acres, now preparing to host the College of Medicine.",
  },
  {
    name: "Kigoma",
    where: "Ujiji District, Kigoma Region",
    body: "101 acres under development, supporting the University’s future expansion.",
  },
  {
    name: "Bagamoyo Teaching Unit",
    where: "Bagamoyo District, Coast Region",
    body: "46,085.7 m² of classrooms, laboratories, hostels, residences and a canteen for field training and community-based learning.",
  },
];

export const units = [
  "College of Medicine",
  "School of Nursing",
  "School of Dentistry",
  "School of Pharmacy",
  "School of Public Health and Social Sciences",
  "School of Biomedical Sciences",
  "School of Clinical Medicine",
  "School of Diagnostic Medicine",
  "Institute of Traditional Medicine",
];

export const contact = {
  postal: ["P.O. Box 65001", "Muhimbili University of Health and Allied Sciences", "Dar es Salaam, Tanzania"],
  phones: [
    { label: "0752 360 543", href: "tel:+255752360543" },
    { label: "0756 265 177", href: "tel:+255756265177" },
  ],
  email: { label: "vc@muhas.ac.tz", href: "mailto:vc@muhas.ac.tz" },
  web: { label: "muhas.ac.tz", href: "https://muhas.ac.tz" },
};
