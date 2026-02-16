import { Hero } from "@/components/Hero";
import { TrustValues } from "@/components/TrustValues";
import { Features } from "@/components/Features";
import { TargetAudience } from "@/components/TargetAudience";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent/30">

      <Hero />
      <TrustValues />
      <Features />
      <TargetAudience />
      <FinalCTA />
    </main>
  );
}
