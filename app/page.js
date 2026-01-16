// app/page.js
import HeroSection from "@/components/HeroSection";
import Thanela from "@/components/maweshi/Thanela";
import MuhpkaKhurpka from "@/components/maweshi/MuhpkaKhurpka";
import Afara from "@/components/maweshi/Afara";
import PrajananSamasya from "@/components/maweshi/PrajananSamasya";
import Langdapan from "@/components/maweshi/Langdapan";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <main className="flex-grow">
        <HeroSection />
        
        {/* गाय-भैंस रोग सेक्शन */}
        <div id="गाय-भैंस-रोग">
          <Thanela />
          <MuhpkaKhurpka />
          <Afara />
          <PrajananSamasya />
          <Langdapan />
        </div>
        
        {/* बाकी sections यहाँ आएंगे */}
      </main>
    </div>
  );
}