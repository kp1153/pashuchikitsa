"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { name: "होम", href: "/", type: "link" },
    { name: "गाय-भैंस रोग", targetId: "gay-bhains", type: "scroll" },
    { name: "कुत्ते रोग", targetId: "kutte", type: "scroll" },
    { name: "बिल्ली रोग", targetId: "billi", type: "scroll" },
    { name: "भेड़-बकरी रोग", targetId: "bhed-bakri", type: "scroll" },
    { name: "घोड़ा रोग", targetId: "ghoda", type: "scroll" },
    { name: "ऊँट रोग", targetId: "oont", type: "scroll" },
    { name: "सेवाएं", href: "#seva", type: "link" },
    { name: "संपर्क करें", href: "#sampark", type: "link" },
  ];

  return (
    <nav className="bg-[#006680] py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* DESKTOP VIEW */}
        <div className="hidden md:block text-center">
          <div className="flex justify-center mb-4">
            <Link href="/">
              <h1 className="text-3xl font-bold text-white">
                पशु चिकित्सक शुक्ला
              </h1>
            </Link>
          </div>

          {/* मेनू आइटम्स - यहाँ से एक्स्ट्रा बैकग्राउंड हटा दिया गया है */}
          <div className="flex justify-center gap-2 flex-wrap pt-2 border-t border-white/10">
            {menuItems.map((item) => (
              item.type === "scroll" ? (
                <button
                  key={item.targetId}
                  onClick={(e) => handleClick(e, item.targetId)}
                  className="text-white font-bold px-4 py-2 hover:bg-white hover:text-[#006680] transition rounded-md"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white font-bold px-4 py-2 hover:bg-white hover:text-[#006680] transition rounded-md"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-xl font-bold text-white">
                पशु चिकित्सक शुक्ला
              </h1>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white border border-white/30 p-2 rounded"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

          {isOpen && (
            <ul className="mt-4 space-y-1">
              {menuItems.map((item) => (
                <li key={item.targetId || item.href}>
                  {item.type === "scroll" ? (
                    <button
                      onClick={(e) => handleClick(e, item.targetId)}
                      className="block w-full text-white text-center py-3 font-bold hover:bg-white hover:text-[#006680] transition rounded"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white text-center py-3 font-bold hover:bg-white hover:text-[#006680] transition rounded"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}