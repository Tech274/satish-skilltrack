export type Article = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  read: string;
  tags: string[];
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "certificate-is-a-product",
    title: "A certificate is a product, not a badge",
    dek: "Upskilling fails when the exam is the curriculum. The lab is the curriculum.",
    date: "2026-08-04",
    read: "6 min",
    tags: ["Upskilling", "Certifications"],
    body: [
      "People ask for a certification the way they ask for a logo. Put it on the profile. The work that should have happened — consoles, bills, broken labs, a role that is too wide — never shows up.",
      "I treat a pathway as a product. It has an exam blueprint, a sequence, a lab that resets, and a reason a cohort would trust it on a Tuesday night. The badge is the receipt. It is not the thing you bought.",
      "Salesforce, AWS, Azure, Microsoft, ServiceNow, Cisco, Oracle: the logos change. The failure is the same. An outline with no lab. A facilitator who never opens the console. A trainer filling an hour instead of getting someone to the exam.",
      "Evangelism, for me, is not a keynote. It is sitting with the pathway until a second person can run the lab without me in the room. If they cannot, I do not have a certification program. I have a playlist.",
    ],
  },
  {
    slug: "show-the-spend",
    title: "Show the spend before you optimise it",
    dek: "FinOps is not a savings percentage. It is an owner, a tag, and a cadence.",
    date: "2026-06-16",
    read: "6 min",
    tags: ["FinOps", "AWS", "Azure", "GCP"],
    body: [
      "The fastest way to lose a FinOps conversation is to open with a percentage. Nobody can audit a percentage. They can audit a tag, an account, and a week of usage.",
      "On AWS I start in Cost Explorer and Budgets. On Azure, Cost Management. On Google Cloud, Cloud Billing. The tools differ. The question does not: who owns this, is it tagged, is it idle, is it growing.",
      "Commitments are a later chapter. Savings Plans, reservations, and committed use discounts are how you pay for usage you already understand. Buying them to hide waste is how the bill gets confident and wrong.",
      "I will not print a savings number that is not in front of me. The practice is the cadence. The credibility is refusing the vanity metric.",
    ],
  },
  {
    slug: "five-clouds-one-habit",
    title: "Five clouds, one identity habit",
    dek: "AWS, Azure, GCP, Oracle, and Salesforce do not get five stories for who is allowed in.",
    date: "2026-04-09",
    read: "5 min",
    tags: ["IAM", "Oracle", "Salesforce"],
    body: [
      "Identity estates rot at the joins. An AWS role is copied because an Azure group already exists. An OCI compartment is flat because ‘it is just Oracle.’ A Salesforce profile is cloned because the last hire had it.",
      "The habit is smaller than the consoles. Request, scope, owner, expiry. Least privilege is not a setting in one vendor. It is the sentence you can say about every cloud you administer.",
      "Oracle compartments and Salesforce permission sets belong in that sentence. Leave them out and you have a hyperscaler practice with a shadow estate attached.",
      "When I teach this, I draw it. If the drawing needs a footnote for each exception, the exception is the architecture. Fix the drawing before the exam outline.",
    ],
  },
  {
    slug: "evangelist-in-the-console",
    title: "Evangelism happens in the console",
    dek: "A tech evangelist who cannot administer the thing is a host. I would rather be the admin.",
    date: "2026-02-11",
    read: "5 min",
    tags: ["Evangelism", "Upskilling"],
    body: [
      "The word evangelist makes people expect a stage. The work I care about is quieter. A pathway. A lab. A bill review. A permission set that a new administrator can explain.",
      "Cloud engineering and FinOps are the subject. Certification is the distribution. Someone should be able to leave a cohort and open Cost Explorer, Entra, Cloud Billing, an OCI compartment, or a Salesforce org and know what ‘good’ looks like.",
      "That is the job I am building in public: solve for upskilling by making the certification path identical to the operating path.",
      "If a talk cannot survive contact with the console, it is not evangelism. It is atmosphere.",
    ],
  },
];

export function articleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
