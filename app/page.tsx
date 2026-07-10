import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      {/* Sljedeće sekcije (O apartmanu, Galerija, Lokacija, Kontakt/Booking)
          dodaju se u sljedećoj fazi — dogovoreno u planiranju. */}
    </PageWrapper>
  );
}
