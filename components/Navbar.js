"use client";
import Link from 'next/link';

export default function Navbar() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-amber-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-zinc-900">
              पशु चिकित्सक शुक्ला
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-md hover:bg-amber-800 transition-colors"
            >
              होम
            </Link>
            <button
              onClick={(e) => handleClick(e, 'gay-bhains')}
              className="px-4 py-2 rounded-md hover:bg-amber-800 transition-colors"
            >
              गाय-भैंस रोग
            </button>
            <button
              onClick={(e) => handleClick(e, 'kutte')}
              className="px-4 py-2 rounded-md hover:bg-amber-800 transition-colors"
            >
              कुत्ते रोग
            </button>
            <button
              onClick={(e) => handleClick(e, 'billi')}
              className="px-4 py-2 rounded-md hover:bg-amber-800 transition-colors"
            >
              बिल्ली रोग
            </button>
            <Link 
              href="#seva" 
              className="px-4 py-2 rounded-md hover:bg-amber-800 transition-colors"
            >
              सेवाएं
            </Link>
            <Link 
              href="#sampark" 
              className="px-4 py-2 rounded-md bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              संपर्क करें
            </Link>
          </div>

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