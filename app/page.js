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
        {/* सेवाएं */}
<section id="seva" className="scroll-mt-20">
  <div className="py-12 px-4 bg-zinc-50">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#006680] text-center mb-8">
        हमारी सेवाएं
      </h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold text-[#006680] mb-4">प्रजनन सेवाएं</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>कृत्रिम गर्भाधान (बछिया होने की गारंटी के साथ)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>बच्चा निकलना (प्रसव में सहायता)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>जेर निकालना</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold text-[#006680] mb-4">शल्य चिकित्सा सेवाएं</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>सींग रोधन</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>टनक का सफल ऑपरेशन</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>झनक का सफल ऑपरेशन</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-bold text-[#006680] mb-4">रोग निरोधी सेवाएं (टीकाकरण)</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>मुंह और खुर की बीमारी (एफएमडी)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>हेमोरेजिक सेप्टिसीमिया (एचएस)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>ब्लैक क्वार्टर (बीक्यू)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>पेस्ट डेस पेटिट्स रूमिनेंट्स (पीपीआर)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>दाद और अन्य संक्रामक रोगों का टीकाकरण</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#006680] mb-4">अन्य सेवाएं</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>संक्रामक बीमारियों का इलाज</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>पशुओं की सामान्य चिकित्सा और उपचार</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#006680] mr-2">•</span>
              <span>जीवाणु और वायरल बीमारियों का उपचार</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* संपर्क करें */}
        <section id="sampark" className="scroll-mt-20">
          <div className="py-12 px-4 bg-white text-gray-800">
            <div className="max-w-2xl mx-auto border-t-2 border-[#006680] pt-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-[#006680]">संपर्क विवरण</h2>
              
              <div className="space-y-4 text-lg">
                <p className="font-bold text-xl text-gray-900">अश्विनी कुमार शुक्ला</p>
                <p className="text-[#006680] font-semibold">पशु चिकित्सक</p>
                <p className="leading-relaxed">
                  शुक्ला सदन, ग्रामः बैदौला-272189, सिद्धार्थनगर, उत्तर प्रदेश, भारत।
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}