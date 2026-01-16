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
import PneumoniaBakri from "@/components/bhed-bakri/Pneumonia";

// घोड़ा
import Colic from "@/components/ghoda/Colic";
import Galghotoo from "@/components/ghoda/Galghotoo";
import GhodaKaFlu from "@/components/ghoda/GhodaKaFlu";
import KhurKiSujan from "@/components/ghoda/KhurKiSujan";
import Tetanus from "@/components/ghoda/Tetanus";

// ऊँट
import Chechak from "@/components/oont/Chechak";
import Khujli from "@/components/oont/Khujli";
import Surra from "@/components/oont/Surra";
import PneumoniaOont from "@/components/oont/Pneumonia";
import Aantravishaktta from "@/components/oont/Aantravishaktta";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <main className="flex-grow">
        <HeroSection />

        {/* गाय-भैंस */}
        <section id="gay-bhains" className="scroll-mt-20">
          <Thanela />
          <MuhpkaKhurpka />
          <Afara />
          <PrajananSamasya />
          <Langdapan />
        </section>

        {/* कुत्ते */}
        <section id="kutte" className="scroll-mt-20">
          <Parvo />
          <TicksFlea />
          <TwachaRog />
        </section>

        {/* बिल्ली */}
        <section id="billi" className="scroll-mt-20">
          <Hairballs />
          <KidneyRog />
          <SardiJukam />
        </section>

        {/* भेड़-बकरी */}
        <section id="bhed-bakri" className="scroll-mt-20">
          <PPR />
          <KhurpkaMuhpka />
          <PetKeKeede />
          <PneumoniaBakri />
        </section>

        {/* घोड़ा */}
        <section id="ghoda" className="scroll-mt-20">
          <Colic />
          <Galghotoo />
          <GhodaKaFlu />
          <KhurKiSujan />
          <Tetanus />
        </section>

        {/* ऊँट */}
        <section id="oont" className="scroll-mt-20">
          <Chechak />
          <Khujli />
          <Surra />
          <PneumoniaOont />
          <Aantravishaktta />
        </section>
      </main>
    </div>
  );
}
