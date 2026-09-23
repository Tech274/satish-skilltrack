export type SkillLevel = "production" | "strong" | "working" | "learning";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  items: Skill[];
};

export const levelCopy: Record<SkillLevel, string> = {
  production: "Daily production",
  strong: "Core practice",
  working: "Working",
  learning: "Building",
};

export const skillGroups: SkillGroup[] = [
  {
    id: "aws",
    title: "Amazon Web Services",
    blurb: "Identity, network, compute, and the bill — engineered so the account can be taught.",
    items: [
      { name: "IAM roles, policies, Organizations", level: "strong" },
      { name: "VPC, subnets, route tables, security groups", level: "strong" },
      { name: "EC2 and S3", level: "strong" },
      { name: "Cost Explorer, Budgets, Cost & Usage", level: "strong" },
      { name: "Savings Plans and reservations", level: "working" },
    ],
  },
  {
    id: "azure",
    title: "Microsoft Azure",
    blurb: "The second hyperscaler, held to the same identity and cost bar as AWS.",
    items: [
      { name: "Entra ID and Azure RBAC", level: "strong" },
      { name: "Virtual networks and network security groups", level: "strong" },
      { name: "Virtual machines and storage", level: "strong" },
      { name: "Cost Management + Billing", level: "strong" },
      { name: "Azure Advisor", level: "working" },
    ],
  },
  {
    id: "gcp",
    title: "Google Cloud",
    blurb: "Projects, folders, and billing exports — GCP as part of the estate, not a side account.",
    items: [
      { name: "Cloud IAM", level: "strong" },
      { name: "VPC and firewall rules", level: "strong" },
      { name: "Compute Engine and Cloud Storage", level: "strong" },
      { name: "Cloud Billing and budgets", level: "strong" },
      { name: "Billing export for FinOps", level: "working" },
    ],
  },
  {
    id: "finops",
    title: "FinOps",
    blurb: "Allocation, waste, and commitments. No savings claim without a tagged owner.",
    items: [
      { name: "Tagging and account structure", level: "strong" },
      { name: "Showback and cost allocation", level: "strong" },
      { name: "Idle and rightsizing review", level: "strong" },
      { name: "Anomaly review", level: "working" },
      { name: "Commitment coverage", level: "working" },
    ],
  },
  {
    id: "oracle",
    title: "Oracle Cloud",
    blurb: "OCI administered as a real cloud: compartments, identity, and cost, not a leftover tenancy.",
    items: [
      { name: "OCI IAM and compartments", level: "strong" },
      { name: "Networking and compute", level: "strong" },
      { name: "Cost analysis", level: "working" },
      { name: "Tenancy hygiene", level: "working" },
    ],
  },
  {
    id: "salesforce",
    title: "Salesforce administration",
    blurb: "Users, access, and sandboxes — the CRM cloud run like an identity system.",
    items: [
      { name: "Users, profiles, permission sets", level: "strong" },
      { name: "Security and sharing", level: "strong" },
      { name: "Sandboxes", level: "working" },
      { name: "Org administration", level: "strong" },
    ],
  },
  {
    id: "upskill",
    title: "Certification facilitation",
    blurb: "Not training. Experience targets the approach. Practices he built himself assure 98%.",
    items: [
      { name: "Exam-scope facilitation", level: "strong" },
      { name: "Hands-on lab design", level: "strong" },
      { name: "One-to-one upskilling", level: "strong" },
      { name: "Multi-technology pathways", level: "strong" },
    ],
  },
  {
    id: "servicenow",
    title: "ServiceNow",
    blurb: "The platform people come to certify on — administered, then facilitated.",
    items: [
      { name: "System administration", level: "strong" },
      { name: "Users, groups, and roles", level: "strong" },
      { name: "CSA pathway", level: "strong" },
    ],
  },
  {
    id: "cisco",
    title: "Cisco",
    blurb: "Networking certifications, facilitated the same way as the clouds.",
    items: [
      { name: "CCNA pathway", level: "strong" },
      { name: "Switching and routing fundamentals", level: "working" },
      { name: "Lab-first exam prep", level: "strong" },
    ],
  },
  {
    id: "microsoft",
    title: "Microsoft",
    blurb: "Azure is one door. Microsoft 365 and the wider stack are the others.",
    items: [
      { name: "Microsoft 365 administration", level: "strong" },
      { name: "Azure administration", level: "strong" },
      { name: "MS-900 and AZ pathways", level: "strong" },
    ],
  },
];
