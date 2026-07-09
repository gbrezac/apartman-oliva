import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Sljedeće sekcije (O apartmanu, Galerija, Lokacija, Kontakt/Booking)
          dodaju se u sljedećoj fazi — dogovoreno u planiranju. */}
    </main>
  );
}
