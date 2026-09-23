export type TopoNode = {
  id: string;
  label: string;
  group: "cloud" | "finops" | "platforms" | "upskill";
  x: number;
  y: number;
  detail: string;
};

export const topoNodes: TopoNode[] = [
  {
    id: "aws",
    label: "AWS",
    group: "cloud",
    x: 16,
    y: 22,
    detail: "IAM, VPC, EC2, S3, and the AWS bill. The reference pattern for the other clouds.",
  },
  {
    id: "azure",
    label: "Azure",
    group: "cloud",
    x: 16,
    y: 50,
    detail: "Entra, RBAC, VNets, and Cost Management — same questions, different console.",
  },
  {
    id: "gcp",
    label: "GCP",
    group: "cloud",
    x: 16,
    y: 78,
    detail: "Projects, Cloud IAM, VPC, and Cloud Billing. Not a side account.",
  },
  {
    id: "tags",
    label: "Tagging",
    group: "finops",
    x: 40,
    y: 28,
    detail: "The allocation key. If it is not tagged, it cannot be taught or shown back.",
  },
  {
    id: "cost",
    label: "Cost review",
    group: "finops",
    x: 40,
    y: 55,
    detail: "Explorer, Cost Management, and Cloud Billing on one cadence.",
  },
  {
    id: "commit",
    label: "Commitments",
    group: "finops",
    x: 40,
    y: 80,
    detail: "Savings Plans, reservations, CUDs — only after waste is visible.",
  },
  {
    id: "oci",
    label: "Oracle Cloud",
    group: "platforms",
    x: 64,
    y: 32,
    detail: "Compartments, OCI IAM, and cost analysis so Oracle stays inside the estate.",
  },
  {
    id: "sfdc",
    label: "Salesforce",
    group: "platforms",
    x: 64,
    y: 68,
    detail: "Users, profiles, permission sets, sandboxes. Access with an owner.",
  },
  {
    id: "path",
    label: "Pathways",
    group: "upskill",
    x: 88,
    y: 28,
    detail: "Exam scopes for AWS, Azure, GCP, Oracle, Salesforce, and FinOps. Not claimed as held.",
  },
  {
    id: "labs",
    label: "Labs",
    group: "upskill",
    x: 88,
    y: 55,
    detail: "Resettable environments. The certificate is practised here, not memorised.",
  },
  {
    id: "cohort",
    label: "Cohorts",
    group: "upskill",
    x: 88,
    y: 80,
    detail: "People moving through the path. Evangelism is a cohort, not a keynote.",
  },
];

export const topoEdges: [string, string][] = [
  ["aws", "tags"],
  ["azure", "tags"],
  ["gcp", "tags"],
  ["tags", "cost"],
  ["cost", "commit"],
  ["aws", "oci"],
  ["azure", "sfdc"],
  ["cost", "path"],
  ["oci", "labs"],
  ["sfdc", "labs"],
  ["path", "labs"],
  ["labs", "cohort"],
];
