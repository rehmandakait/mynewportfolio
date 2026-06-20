"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#A3E635]"
        >
          <a href="#" aria-label="Home" className="relative w-10 h-10 block">
            <Image 
              src="https://cdn-icons-png.flaticon.com/128/270/270780.png" 
              alt="Logo" 
              fill 
              className="object-contain" 
              referrerPolicy="no-referrer"
              sizes="40px"
            />
          </a>
        </motion.div>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-[#888] hover:text-[#A3E635] font-mono text-sm transition-colors"
            >
              <span className="text-[#A3E635] mr-1">0{i + 1}.</span> {link.name}
            </motion.a>
          ))}
          <motion.a
            href="mailto:contact@aerpula.app"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
            className="px-4 py-2 text-[#A3E635] font-mono text-sm border border-[#A3E635] rounded hover:bg-[#A3E635]/10 transition-colors uppercase tracking-widest"
          >
            Connect
          </motion.a>

          <div className="flex items-center gap-4 ml-4 border-l border-[#333] pl-6 hidden lg:flex">
            <motion.a 
              href="https://github.com/charanaerpula23-boop" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#888] hover:text-[#A3E635] transition-colors" 
              aria-label="GitHub"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (navLinks.length + 1) * 0.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/charantejayadav-aerpula" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#888] hover:text-[#A3E635] transition-colors" 
              aria-label="LinkedIn"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (navLinks.length + 2) * 0.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/charanvikramadhitya" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#888] hover:text-[#A3E635] transition-colors" 
              aria-label="Instagram"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (navLinks.length + 3) * 0.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </motion.a>
          </div>
        </nav>
      </div>
    </header>
  );
}
