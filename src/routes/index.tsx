import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { PlatformRail, SkilltrackNext } from "@/components/sections/platforms";
import { About } from "@/components/sections/about";
import { Career } from "@/components/sections/career";
import { Skills } from "@/components/sections/skills";
import { FeaturedWork } from "@/components/sections/work";
import { Topology } from "@/components/sections/topology";
import { OpsDashboard } from "@/components/sections/dashboard";
import { CertsTools } from "@/components/sections/certs-tools";
import { JournalTeaser } from "@/components/sections/journal-teaser";
import { ContactBlock } from "@/components/sections/contact";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Hero />
      <PlatformRail />
      <SkilltrackNext />
      <About />
      <Career />
      <Skills />
      <FeaturedWork />
      <Topology />
      <OpsDashboard />
      <CertsTools />
      <JournalTeaser />
      <ContactBlock />
    </>
  );
}
