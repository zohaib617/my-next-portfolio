"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#482E2E] text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-400 text-sm md:text-base">
          <Link href="/hero" className="hover:text-[#CA5900] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#CA5900] transition-colors">About</Link>
          <Link href="/skills" className="hover:text-[#CA5900] transition-colors">Skills</Link>
          <Link href="/services" className="hover:text-[#CA5900] transition-colors">Services</Link>
          <Link href="/project" className="hover:text-[#CA5900] transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-[#CA5900] transition-colors">Contact</Link>
        </nav>
        <p className="text-gray-500 mt-4 text-xs md:text-sm text-center">
          &copy; 2025 Zohansoft Technologies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
