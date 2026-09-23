import { createFileRoute } from "@tanstack/react-router";
import { ContactBlock } from "@/components/sections/contact";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return <ContactBlock standalone />;
}
