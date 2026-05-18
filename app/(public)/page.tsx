import Image from "next/image";
import { DownloadIcon, ArrowUpRight, MailIcon } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="flex flex-col">
            <section className="min-h-[700px] flex items-center bg-[#F1E9DF] pt-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-center ">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <p className="uppercase tracking-[3px] text-sm font-medium text-zinc-500">
                            ANKIT CHAUDHARY
                        </p>
                        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.01] text-zinc-800">
                            Building digital
                            experiences that<span className="italic font-normal font-serif"> make
                                an impact. </span>
                        </h1>

                        <p className="text-lg text-zinc-600 max-w-md">
                            I&apos;m a creative developer focused on crafting clean, modern and user-centric websites.
                        </p>

                        {/* Buttons & Socials... */}
                        <div className="flex items-center gap-5 mt-3 flex-wrap">
                            <a
                                href="#work"
                                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-[#f5f0eb] text-[13.5px] font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:bg-[#333] hover:scale-[1.03] active:scale-[0.97]"
                            >
                                View My Work
                                <ArrowUpRight />
                            </a>

                            <a
                                href="/cv.pdf"
                                download
                                className="inline-flex items-center gap-2 text-[#1a1a1a] text-[13.5px] font-medium border-b border-[#1a1a1a]/40 pb-0.5 transition-all duration-200 hover:border-[#1a1a1a] group"
                            >
                                Download CV
                                <span className="transition-transform duration-200 group-hover:translate-y-0.5">
                                    <DownloadIcon />
                                </span>
                            </a>
                        </div>
                        {/* Bottom: Social links */}
                        <div className="mt-16 md:mt-24">
                            <p className="text-[10px] font-semibold tracking-[0.22em] text-[#1a1a1a]/40 uppercase mb-3">
                                Let's Connect
                            </p>
                            <div className="flex items-center gap-4">
                                {[
                                    { icon: <FaLinkedin size={28} />, href: "https://linkedin.com", label: "LinkedIn" },
                                    { icon: <FaGithub size={28} />, href: "https://github.com", label: "GitHub" },
                                    { icon: <FaInstagram size={28} />, href: "https://linkedin.com", label: "Instagram" },
                                    { icon: <FaRegEnvelope size={28} />, href: "mailto:hello@ankitchaudhary.com", label: "Email" },
                                ].map(({ icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        target={href.startsWith("http") ? "_blank" : undefined}
                                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="w-9 h-9 flex text-zinc-800 items-center justify-center transition-all duration-300  hover:-translate-y-1"
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="flex justify-center md:min-h-[700px] min-h-[620px] relative md:justify-end ">
                        <div className="absolute bottom-0 pointer-events-none select-none">
                            <Image
                                src="/ankit_chaudhary_hero_image.png"
                                alt="Ankit Chaudhary"
                                width={450}
                                height={550}
                                className="width:auto height:auto"
                                priority
                            />

                        </div>
                    </div>

                </div>

            </section>

            <section className="min-h-screen bg-red-950"></section>
        </div>
    );
}   