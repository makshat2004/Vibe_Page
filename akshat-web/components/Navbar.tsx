'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/50 border-b border-white/5"
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                    A
                </div>
                <span className="text-xl font-bold tracking-tighter text-white/90">Akshat X</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                <Link href="#product" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Product</Link>
                <Link href="#experience" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Experience</Link>
                <Link href="#specs" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Specs</Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <button className="text-white/70 hover:text-white transition-colors" aria-label="Account">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
                <button className="relative text-white/70 hover:text-white transition-colors group" aria-label="Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        0
                    </span>
                </button>
            </div>
        </motion.nav>
    );
}
