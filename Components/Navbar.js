 "use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-amber-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-zinc-900">
              पशु चिकित्सक शुक्ला
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="#होम" 
              className="px-4 py-2 rounded-md hover:bg-amber-800 transition-colors"
            >
              होम
            </Link>
            <Link 
              href="#गाय-भैंस-रोग" 
              className="px-4 py-2 rounded-md hover:bg-amber-800 transition-colors"
            >
              गाय-भैंस रोग
            </Link>
            <Link 
              href="#कुत्ते-बिल्ली-रोग" 
              className="px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
            >
              कुत्ते-बिल्ली रोग
            </Link>
            <Link 
              href="#भेड़-बकरी-रोग" 
              className="px-4 py-2 rounded-md hover:bg-amber-800 transition-colors"
            >
              भेड़-बकरी रोग
            </Link>
            <Link 
              href="#कृत्रिम-गर्भाधान" 
              className="px-4 py-2 rounded-md hover:bg-amber-800 transition-colors"
            >
              कृत्रिम गर्भाधान
            </Link>
            <Link 
              href="#सेवाएं" 
              className="px-4 py-2 rounded-md hover:bg-amber-800 transition-colors"
            >
              सेवाएं
            </Link>
            <Link 
              href="#संपर्क" 
              className="px-4 py-2 rounded-md bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              संपर्क करें
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-md hover:bg-amber-800">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}