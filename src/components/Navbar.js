'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-10">
      <div className="flex space-x-4">
        <Link href="#home" className="hover:text-gray-600">Home</Link>
        <Link href="#projects" className="hover:text-gray-600">Projects</Link>
        <Link href="#skills" className="hover:text-gray-600">Skills</Link>
        <Link href="#contact" className="hover:text-gray-600">Contact</Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2 text-xl">
          <a href="https://instagram.com/SadiaShahid" aria-label="Instagram">📷</a>
          <a href="https://twitter.com/SadiaShahid" aria-label="Twitter">🐦</a>
          <a href="https://www.linkedin.com/in/SadiaShahid" aria-label="LinkedIn">💼</a>
        </div>
        <span className="font-bold">Sadia Shahid</span>
      </div>
    </nav>
  );
}
