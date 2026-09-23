export type ProjectFilter =
  | "all"
  | "aws"
  | "azure"
  | "gcp"
  | "oracle"
  | "salesforce"
  | "finops"
  | "upskilling";

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  year: string;
  filters: ProjectFilter[];
  tags: string[];
  problem: string;
  challenge: string;
  solution: string;
  impact: string[];
  lessons: string[];
  stack: string[];
  architecture: { id: string; label: string; x: number; y: number }[];
  edges: [string, string][];
};

export const filters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "finops", label: "FinOps" },
  { id: "aws", label: "AWS" },
  { id: "azure", label: "Azure" },
  { id: "gcp", label: "GCP" },
  { id: "oracle", label: "Oracle" },
  { id: "salesforce", label: "Salesforce" },
  { id: "upskilling", label: "Upskilling" },
];

export const projects: Project[] = [
  {
    slug: "finops-cadence",
    title: "A FinOps cadence across three bills",
    kicker: "FinOps",
    summary:
      "One weekly review for AWS, Azure, and GCP: tags, owners, waste, then commitments. No savings story before the bill is legible.",
    image: "/images/cloud-studio.jpg",
    imageAlt: "Bright cloud studio with abstract cost charts",
    featured: true,
    year: "Practice",
    filters: ["finops", "aws", "azure", "gcp"],
    tags: ["Cost Explorer", "Cost Management", "Cloud Billing", "Tagging"],
    problem:
      "Three clouds produce three invoices and zero owners. Teams argue about a number they cannot attribute.",
    challenge:
      "Make spend explainable on AWS, Azure, and GCP without pretending the tools are the same.",
    solution:
      "I run one cadence. Tagging and account structure first. Then a review of idle and oversized resources in Cost Explorer, Azure Cost Management, and Cloud Billing. Commitments come last, and only for usage that is already understood.",
    impact: [
      "A shared language for the bill: owner, tag, service, trend.",
      "Waste visible before anyone buys a commitment.",
      "FinOps that a cohort can practise, not a slide with a percentage.",
    ],
    lessons: [
      "An untagged resource is an unowned resource.",
      "Do not publish a savings number you cannot trace to a tag.",
    ],
    stack: ["AWS", "Azure", "GCP", "Budgets", "Tagging", "Showback"],
    architecture: [
      { id: "aws", label: "AWS bill", x: 12, y: 28 },
      { id: "az", label: "Azure bill", x: 12, y: 50 },
      { id: "gcp", label: "GCP bill", x: 12, y: 74 },
      { id: "tags", label: "Tags", x: 42, y: 50 },
      { id: "review", label: "Weekly review", x: 68, y: 50 },
      { id: "commit", label: "Commitments", x: 90, y: 50 },
    ],
    edges: [
      ["aws", "tags"],
      ["az", "tags"],
      ["gcp", "tags"],
      ["tags", "review"],
      ["review", "commit"],
    ],
  },
  {
    slug: "multi-cloud-identity",
    title: "Multi-cloud identity, one habit",
    kicker: "Cloud engineering",
    summary:
      "IAM on AWS, Azure, and GCP held to one rule: roles, not standing admin, and a path a learner can redraw.",
    image: "/images/identity-access.jpg",
    imageAlt: "Glass corridor suggesting controlled access",
    featured: true,
    year: "Practice",
    filters: ["aws", "azure", "gcp"],
    tags: ["IAM", "Entra", "Cloud IAM", "Least privilege"],
    problem:
      "Each cloud grows its own admin habit. The person who ‘just needs access’ becomes five standing privileges.",
    challenge:
      "Keep three identity models understandable without flattening them into one fictional tool.",
    solution:
      "I administer IAM as a pattern. AWS roles and Organizations, Azure RBAC and Entra, GCP Cloud IAM. Access is requested, scoped, and explainable. The diagram is part of the deliverable — if you cannot draw it, you cannot teach it.",
    impact: [
      "Fewer standing-admin exceptions across the three clouds.",
      "A pattern new engineers and cohorts can copy.",
      "Identity that FinOps can trust when a cost spike needs an owner.",
    ],
    lessons: [
      "Least privilege fails at the seams between clouds.",
      "An identity model you cannot draw will not survive the next project.",
    ],
    stack: ["AWS IAM", "Entra ID", "GCP IAM", "Organizations"],
    architecture: [
      { id: "ask", label: "Request", x: 12, y: 50 },
      { id: "aws", label: "AWS IAM", x: 42, y: 24 },
      { id: "az", label: "Entra / RBAC", x: 42, y: 50 },
      { id: "gcp", label: "Cloud IAM", x: 42, y: 76 },
      { id: "work", label: "Workload", x: 78, y: 50 },
    ],
    edges: [
      ["ask", "aws"],
      ["ask", "az"],
      ["ask", "gcp"],
      ["aws", "work"],
      ["az", "work"],
      ["gcp", "work"],
    ],
  },
  {
    slug: "cert-pathways",
    title: "Getting people to the certification",
    kicker: "Facilitation",
    summary:
      "Not a training room. A path chosen for the person, then his own practices. Those practices assure certification at 98%.",
    image: "/images/cert-lab.jpg",
    imageAlt: "Daylit certification lab with open laptops",
    featured: true,
    year: "Practice",
    filters: ["upskilling", "aws", "azure", "gcp"],
    tags: ["Facilitation", "Labs", "Salesforce", "AWS", "ServiceNow", "Cisco"],
    problem:
      "People collect outlines and stall. A trainer can fill the hour. A facilitator has to get them to the exam, and past it.",
    challenge:
      "Hold one habit across Salesforce, AWS, Azure, Microsoft, ServiceNow, Cisco, and Oracle.",
    solution:
      "I map the exam, sit in the lab with them, and stay through the week they sit it. The approach is chosen. The practices are mine. They assure 98%.",
    impact: [
      "A person at the upskilling juncture, not a slide deck.",
      "The same walkthrough on seven technologies.",
      "A success rate assured by his own practices: 98%.",
    ],
    lessons: [
      "If the lab cannot reset, the cohort is sharing a pet.",
      "Teach the bill in the same week you teach the service.",
    ],
    stack: ["Exam blueprints", "Labs", "AWS", "Azure", "GCP"],
    architecture: [
      { id: "exam", label: "Blueprint", x: 12, y: 50 },
      { id: "path", label: "Pathway", x: 36, y: 50 },
      { id: "lab", label: "Lab", x: 60, y: 50 },
      { id: "cohort", label: "Cohort", x: 84, y: 32 },
      { id: "proof", label: "Proof", x: 84, y: 72 },
    ],
    edges: [
      ["exam", "path"],
      ["path", "lab"],
      ["lab", "cohort"],
      ["cohort", "proof"],
    ],
  },
  {
    slug: "oracle-cloud-admin",
    title: "Oracle Cloud, inside the estate",
    kicker: "Oracle",
    summary:
      "OCI identity, compartments, and cost treated as cloud administration — not a tenancy nobody owns.",
    image: "/images/storage-array.jpg",
    imageAlt: "Enterprise infrastructure in low light",
    featured: true,
    year: "Practice",
    filters: ["oracle", "finops"],
    tags: ["OCI", "Compartments", "IAM", "Cost"],
    problem:
      "Oracle Cloud drifts into a shadow estate: shared admins, flat compartments, a bill nobody reviews.",
    challenge:
      "Administer OCI with the same identity and cost questions used on AWS, Azure, and GCP.",
    solution:
      "I structure compartments, OCI IAM, and networking so a workload has a boundary. Cost analysis sits in the same FinOps cadence. The tenancy is documented the way a pathway would teach it.",
    impact: [
      "Oracle is nameable: who, which compartment, which cost.",
      "Administration a second person can pick up.",
      "A cloud that belongs in the upskilling map, not beside it.",
    ],
    lessons: [
      "A tenancy without compartments is a shared password with extra steps.",
      "If OCI is not in the cost review, it is not in the estate.",
    ],
    stack: ["Oracle Cloud", "OCI IAM", "Compartments", "Cost analysis"],
    architecture: [
      { id: "tenancy", label: "Tenancy", x: 14, y: 50 },
      { id: "comp", label: "Compartments", x: 40, y: 50 },
      { id: "iam", label: "OCI IAM", x: 66, y: 28 },
      { id: "net", label: "Network", x: 66, y: 72 },
      { id: "cost", label: "Cost", x: 90, y: 50 },
    ],
    edges: [
      ["tenancy", "comp"],
      ["comp", "iam"],
      ["comp", "net"],
      ["comp", "cost"],
    ],
  },
  {
    slug: "salesforce-admin",
    title: "Salesforce administration as access",
    kicker: "Salesforce",
    summary:
      "Users, profiles, and permission sets run as an access system — the same least-privilege story as the clouds around it.",
    image: "/images/network-cabling.jpg",
    imageAlt: "Structured cabling, one strand lit",
    featured: false,
    year: "Practice",
    filters: ["salesforce", "upskilling"],
    tags: ["Profiles", "Permission sets", "Sandboxes"],
    problem:
      "CRM admin becomes ‘give them the profile someone else has.’ Access spreads. Sandboxes rot. Nobody can teach the org.",
    challenge:
      "Keep Salesforce explainable: who can see what, and how a new admin learns it.",
    solution:
      "I administer users, profiles, permission sets, and sharing as a model, not a pile of exceptions. Sandboxes are for change and for teaching. The org is part of the certification pathway, not a separate religion.",
    impact: [
      "Access that can be reviewed.",
      "A sandbox habit instead of experiments in production.",
      "Salesforce administration a cohort can practise.",
    ],
    lessons: [
      "A cloned profile is not a permission model.",
      "If offboarding does not touch Salesforce, it is not offboarding.",
    ],
    stack: ["Salesforce", "Permission sets", "Profiles", "Sandboxes"],
    architecture: [
      { id: "user", label: "User", x: 12, y: 50 },
      { id: "perm", label: "Permission set", x: 40, y: 32 },
      { id: "profile", label: "Profile", x: 40, y: 70 },
      { id: "org", label: "Org", x: 68, y: 50 },
      { id: "sbx", label: "Sandbox", x: 90, y: 50 },
    ],
    edges: [
      ["user", "perm"],
      ["user", "profile"],
      ["perm", "org"],
      ["profile", "org"],
      ["org", "sbx"],
    ],
  },
  {
    slug: "hyperscaler-networks",
    title: "Networks you can draw",
    kicker: "Cloud engineering",
    summary:
      "VPC, VNet, and GCP VPC laid out so isolation is obvious — the picture a FinOps and a classroom both need.",
    image: "/images/fiber-cloud.jpg",
    imageAlt: "Fiber carrying cool light through a dark frame",
    featured: false,
    year: "Practice",
    filters: ["aws", "azure", "gcp"],
    tags: ["VPC", "VNet", "Security groups", "Firewalls"],
    problem:
      "Flat networks make every lab, every workload, and every cost spike look the same.",
    challenge:
      "Give each cloud a network a person can sketch in two minutes.",
    solution:
      "I design subnets, routes, and security boundaries per workload. Names match the diagram. The same shape is what a certification lab uses, so practice and production share a vocabulary.",
    impact: [
      "Isolation that is visible.",
      "Fewer ‘open it to the world’ fixes.",
      "A teaching diagram that is also the architecture.",
    ],
    lessons: [
      "A security group named after a person is already a bug.",
      "If the cohort cannot draw the VPC, the lab is trivia.",
    ],
    stack: ["AWS VPC", "Azure VNet", "GCP VPC", "Security groups"],
    architecture: [
      { id: "edge", label: "Edge", x: 12, y: 50 },
      { id: "vpc", label: "VPC / VNet", x: 40, y: 50 },
      { id: "pub", label: "Public", x: 68, y: 28 },
      { id: "priv", label: "Private", x: 68, y: 72 },
      { id: "app", label: "Workload", x: 90, y: 50 },
    ],
    edges: [
      ["edge", "vpc"],
      ["vpc", "pub"],
      ["vpc", "priv"],
      ["priv", "app"],
    ],
  },
];

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects() {
  return projects.filter((p) => p.featured);
}
