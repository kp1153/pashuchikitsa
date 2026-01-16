// app/components/HeroSection.js
"use client";

export default function HeroSection() {
  return (
    <section id="होम" className="bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            डॉ. देवराज शुक्ला और डॉ. अश्विनी कुमार शुक्ला
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 font-semibold mb-6">
            पशु चिकित्सक (वेटरनरी डॉक्टर)
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎓 B.V.Sc. & A.H.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📍 कानपुर, उत्तर प्रदेश</span>
            </div>
          </div>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            15+ वर्षों का अनुभव | हजारों पशुओं का सफल इलाज
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9876543210" 
              className="px-8 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-semibold"
            >
              📞 अभी संपर्क करें
            </a>
            <a 
              href="#सेवाएं" 
              className="px-8 py-3 bg-white text-amber-700 border-2 border-amber-700 rounded-lg hover:bg-amber-50 transition-colors font-semibold"
            >
              हमारी सेवाएं देखें
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🐄</div>
              <div className="text-2xl font-bold text-amber-700">गाय-भैंस</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🐕</div>
              <div className="text-2xl font-bold text-amber-700">कुत्ते-बिल्ली</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🐑</div>
              <div className="text-2xl font-bold text-amber-700">भेड़-बकरी</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">💉</div>
              <div className="text-2xl font-bold text-amber-700">टीकाकरण</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}