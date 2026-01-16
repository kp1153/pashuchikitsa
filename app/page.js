import HeroSection from "@/components/HeroSection";
// गाय-भैंस
import Thanela from "@/components/maweshi/Thanela";
import MuhpkaKhurpka from "@/components/maweshi/MuhpkaKhurpka";
import Afara from "@/components/maweshi/Afara";
import PrajananSamasya from "@/components/maweshi/PrajananSamasya";
import Langdapan from "@/components/maweshi/Langdapan";
// कुत्ते
import Parvo from "@/components/kutte/Parvo";
import TicksFlea from "@/components/kutte/TicksFlea";
import TwachaRog from "@/components/kutte/TwachaRog";
// बिल्ली
import Hairballs from "@/components/billi/Hairballs";
import KidneyRog from "@/components/billi/KidneyRog";
import SardiJukam from "@/components/billi/SardiJukam";
// भेड़-बकरी
import PPR from "@/components/bhed-bakri/PPR";
import KhurpkaMuhpka from "@/components/bhed-bakri/KhurpkaMuhpka";
import PetKeKeede from "@/components/bhed-bakri/PetKeKeede";
import Pneumonia from "@/components/bhed-bakri/Pneumonia";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <main className="flex-grow">
        <HeroSection />
        
        <section id="gay-bhains" className="scroll-mt-20">
          <Thanela />
          <MuhpkaKhurpka />
          <Afara />
          <PrajananSamasya />
          <Langdapan />
        </section>

        <section id="kutte" className="scroll-mt-20">
          <Parvo />
          <TicksFlea />
          <TwachaRog />
        </section>

        <section id="billi" className="scroll-mt-20">
          <Hairballs />
          <KidneyRog />
          <SardiJukam />
        </section>

        <section id="bhed-bakri" className="scroll-mt-20">
          <PPR />
          <KhurpkaMuhpka />
          <PetKeKeede />
          <Pneumonia />
        </section>
      </main>
    </div>
  );
}