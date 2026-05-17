"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${scrolled
                    ? "bg-[#ede9e3]/90 backdrop-blur-md"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1340px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
                    {/* Logo */}

                    <Image
                        src="/ankit_chaudhary_logo.png"
                        alt="Ankit Chaudhary"
                        width={50}
                        height={50}
                        className="width:auto height:auto rounded-xl"
                        priority
                    />


                    {/* Desktop Nav Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-[#1a1a1a] text-[15px] font-medium tracking-wide relative group transition-colors duration-200 hover:text-black"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    {link.label}
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 bg-[#1a1a1a] text-[#f5f0eb] text-[14px] font-medium px-5 py-2.5 rounded-full md:rounded-xl tracking-wide transition-all duration-300 hover:bg-[#333] hover:scale-[1.03] active:scale-[0.98]"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                            Let's Talk
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-px"
                            >
                                <path
                                    d="M1.5 11.5L11.5 1.5M11.5 1.5H3.5M11.5 1.5V9.5"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-[5px] p-1 z-50"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-[1.5px] bg-[#1a1a1a] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-[1.5px] bg-[#1a1a1a] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-[1.5px] bg-[#1a1a1a] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-[#ede9e3] flex flex-col justify-center items-center gap-10 transition-all duration-500 md:hidden ${menuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                <ul className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <li
                            key={link.label}
                            className={`transition-all duration-500 ${menuOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: menuOpen ? `${i * 70}ms` : "0ms" }}
                        >
                            <a
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-[#1a1a1a] text-4xl font-semibold tracking-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#f5f0eb] text-[15px] font-medium px-6 py-3 rounded-full mt-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    Let's Talk
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path
                            d="M1.5 11.5L11.5 1.5M11.5 1.5H3.5M11.5 1.5V9.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </>
    );
}