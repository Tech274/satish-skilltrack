export const profile = {
  name: "Satish Rao N",
  shortName: "Satish",
  initials: "SRN",
  headline: "Certification Facilitator",
  tagline: "Tech-savvy enough to leave the IT desk.\nPresent enough to get people across the line.",
  location: "Multi-cloud",
  email: "Satishraon2026@gmail.com",
  phone: "+91 72592 38044",
  phoneHref: "tel:+917259238044",
  emailHref: "mailto:Satishraon2026@gmail.com",
  resumeHref: "/resume",
  years: "",
  portraits: {
    studio: "/images/satish-office.jpg",
    square: "/images/satish-square.jpg",
    event: "/images/satish-wide.jpg",
    office: "/images/satish-desk.jpg",
    shirt: "/images/satish-study.jpg",
  },
  roles: [
    "Certification Facilitator",
    "AWS",
    "Microsoft Azure",
    "Salesforce",
    "ServiceNow",
    "Cisco",
    "Oracle",
  ],
  summary:
    "I came up inside IT, then turned away from being only the person who keeps the systems running. I facilitate certifications — I am not a trainer. Over time I learned to target the right approach, and I built my own practices from that. Those practices assure certification at 98%. Salesforce, AWS, Azure, Microsoft, ServiceNow, Cisco, and Oracle.",
};

export const skilltrack = {
  name: "Skilltrack-365",
  url: "https://skilltrack.co.in/",
  mark: "/images/skilltrack-365.jpg",
  line: "Learn · Grow · Succeed",
  role: "Co-founder",
};

export const stats = [
  { label: "Success", value: "98%" },
  { label: "Role", value: "Facilitator" },
  { label: "Platforms", value: "7 clouds" },
  { label: "Mission", value: "Upskilling" },
];

export const nav = [
  { href: "/#about", label: "About", to: "/" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export const values = [
  {
    title: "Not a trainer",
    body: "I do not perform a syllabus. I facilitate the certification: the path, the lab, the stall, and the week of the exam.",
  },
  {
    title: "The arrival",
    body: "Upskilling is a juncture, not a playlist. Someone should leave able to do the work the badge names.",
  },
  {
    title: "The right approach",
    body: "Experience, over time, is the ability to target the approach that fits this person and this exam — not the same plan for everyone.",
  },
  {
    title: "Practices I built",
    body: "I did not borrow a syllabus. I built my own practices from that experience. Those practices are what assure certification at 98%.",
  },
];

export const principles = [
  "I am a facilitator. I am not a trainer.",
  "The IT desk was the apprenticeship. People are the work now.",
  "A certificate is the arrival, not the decoration.",
  "The right approach is a judgement earned over time.",
  "My own practices — not a borrowed syllabus — assure 98%.",
];

/** Pathways organised for learners. Not claimed as credentials held. */
export const roadmap = [
  { vendor: "Amazon", name: "AWS Certified Cloud Practitioner", code: "CLF" },
  { vendor: "Amazon", name: "AWS Certified Solutions Architect", code: "SAA" },
  { vendor: "Amazon", name: "AWS Certified SysOps Administrator", code: "SOA" },
  { vendor: "Microsoft", name: "Azure Fundamentals", code: "AZ-900" },
  { vendor: "Microsoft", name: "Azure Administrator", code: "AZ-104" },
  { vendor: "Google", name: "Associate Cloud Engineer", code: "ACE" },
  { vendor: "Microsoft", name: "Microsoft 365 Fundamentals", code: "MS-900" },
  { vendor: "ServiceNow", name: "Certified System Administrator", code: "CSA" },
  { vendor: "Cisco", name: "CCNA", code: "200-301" },
  { vendor: "Oracle", name: "OCI Foundations", code: "1Z0-1085" },
  { vendor: "Oracle", name: "OCI Architect Associate", code: "1Z0-1072" },
  { vendor: "Salesforce", name: "Salesforce Administrator", code: "ADM-201" },
  { vendor: "FinOps", name: "FinOps Certified Practitioner", code: "FOCP" },
];

export const tools = [
  "AWS",
  "Azure",
  "Google Cloud",
  "Oracle Cloud",
  "Salesforce",
  "ServiceNow",
  "Cisco",
  "Microsoft 365",
  "AWS Cost Explorer",
  "AWS Budgets",
  "Azure Cost Management",
  "GCP Cloud Billing",
  "IAM",
  "Organizations",
  "VPC",
  "Entra ID",
  "OCI Compartments",
  "Permission Sets",
  "Tagging",
  "Showback",
];
