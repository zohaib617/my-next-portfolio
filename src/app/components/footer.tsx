"use client";

import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#482E2E] text-white py-6 mt-12">
      <div className="flex flex-col justify-center items-center">
        <nav className="flex space-x-6 text-gray-400">
          <Link href="/hero" className="hover:text-[#CA5900] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#CA5900] transition-colors">About</Link>
          <Link href="/services" className="hover:text-[#CA5900] transition-colors">Services</Link>
          <Link href="/project" className="hover:text-[#CA5900] transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-[#CA5900] transition-colors">Contact</Link>
        </nav>
        <p className="text-gray-500 mt-4 md:mt-0 text-sm">
          &copy; 2025 Zohansoft Technologies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
