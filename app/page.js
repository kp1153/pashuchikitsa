// app/page.js
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <main className="flex-grow">
        <HeroSection />
        {/* बाकी sections यहाँ आएंगे */}
      </main>
    </div>
  );
}