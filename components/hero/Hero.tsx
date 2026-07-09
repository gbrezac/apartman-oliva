import { HeroVideo } from "@/components/hero/HeroVideo";
import { HeroContent } from "@/components/hero/HeroContent";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { HeroContentData } from "@/types";

const heroData: HeroContentData = {
  title: "Apartman Oliva",
  subtitle: "Osor • Otok Lošinj",
  primaryCta: "Provjeri dostupnost",
  secondaryCta: "Istraži apartman",
};

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroVideo />
      <HeroContent data={heroData} />
      <ScrollIndicator />
    </section>
  );
}
