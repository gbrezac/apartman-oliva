import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Section } from "@/components/layout/Section";
import { Eyebrow, SectionHeading, Paragraph } from "@/components/ui/Typography";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />

      <Section background="sand">
        <Eyebrow className="mb-4">Uskoro</Eyebrow>
        <SectionHeading className="mb-4">Ostale sekcije stižu uskoro</SectionHeading>
        <Paragraph className="max-w-xl">
          Ovo je privremeni blok koji postoji samo da stranica ima dovoljno
          visine za scroll test. Zamijenit će ga prava sekcija "O apartmanu"
          u sljedećoj fazi.
        </Paragraph>
      </Section>
    </PageWrapper>
  );
}