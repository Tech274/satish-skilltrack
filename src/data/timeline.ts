export type Role = {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

/** Practice lines. No employer or dates are listed — none were supplied. */
export const timeline: Role[] = [
  {
    id: "cloud",
    title: "The turn away from the IT desk",
    company: "Systems, then people",
    location: "IT to facilitation",
    start: "",
    end: "",
    period: "Practice",
    summary:
      "Tech-savvy enough to live in the console. I turned away from being only the person who keeps IT running, and toward the people who need to arrive at a certification.",
    highlights: [
      "The apprenticeship was the systems: identity, network, the ticket, the tenancy.",
      "The work now is someone else’s upskilling juncture — not another shift on the desk.",
      "Still hands-on. A facilitator who cannot open the console is just a scheduler.",
    ],
    stack: ["IT", "Cloud", "Facilitation"],
  },
  {
    id: "finops",
    title: "FinOps",
    company: "Cost, usage, and accountability",
    location: "AWS · Azure · GCP",
    start: "",
    end: "",
    period: "Practice",
    summary:
      "Make the bill legible. Tagging, allocation, anomaly review, and commitment strategy — before anyone talks about a savings number.",
    highlights: [
      "Tagging and account structure that can support showback, not a spreadsheet after the invoice.",
      "Rightsizing and idle-resource review as a cadence, not a one-off cleanup.",
      "Commitments (Savings Plans, reservations, CUDs) only after coverage and waste are visible.",
      "The same questions on Azure Cost Management and GCP Cloud Billing as on AWS Cost Explorer.",
    ],
    stack: ["Cost Explorer", "Budgets", "Azure Cost Management", "Cloud Billing", "Tagging"],
  },
  {
    id: "platforms",
    title: "Oracle & Salesforce administration",
    company: "OCI · Salesforce",
    location: "Platform cloud",
    start: "",
    end: "",
    period: "Practice",
    summary:
      "Oracle Cloud and Salesforce are administered with the same seriousness as the hyperscalers — compartments, identity, users, and permission sets that do not drift.",
    highlights: [
      "OCI identity, compartments, and cost visibility so Oracle is not a shadow estate.",
      "Salesforce users, profiles, permission sets, and sandboxes treated as an access system.",
      "Administration written so the next admin — or the next cohort — can follow it.",
    ],
    stack: ["Oracle Cloud", "OCI IAM", "Salesforce", "Permission Sets"],
  },
  {
    id: "evangelist",
    title: "Certification facilitator",
    company: "Not a trainer",
    location: "Upskilling",
    start: "",
    end: "",
    period: "Practice",
    summary:
      "I facilitate the certification. I am not a trainer. Over time I learned to target the right approach, then built my own practices from that experience. Those practices assure certification at 98%.",
    highlights: [
      "The approach is chosen for the person and the exam, not pulled off a generic plan.",
      "The practices are mine. They were built by doing the work, not by licensing someone else’s method.",
      "Salesforce, AWS, Azure, Microsoft, ServiceNow, Cisco, and Oracle — the same assurance, 98%.",
    ],
    stack: ["Salesforce", "AWS", "Azure", "ServiceNow", "Cisco", "Oracle", "Microsoft"],
  },
];

export const education: { title: string; school: string; year: string }[] = [];
