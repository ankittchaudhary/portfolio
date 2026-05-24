import { Monitor, PenTool, Code2, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-800">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-zinc-800 mb-3">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto pt-4">
        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 hover:text-zinc-600 transition-colors">
          Learn more <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default function WhatIDo() {
  const services = [
    {
      title: "Web Development",
      description: "I build fast, responsive and scalable websites using modern technologies and best practices.",
      icon: <Monitor className="w-5 h-5" />,
    },
    {
      title: "UI/UX Design",
      description: "I design intuitive interfaces that enhance user experience and bring ideas to life.",
      icon: <PenTool className="w-5 h-5" />,
    },
    {
      title: "Frontend Development",
      description: "I convert designs into clean, efficient and pixel-perfect code with attention to detail.",
      icon: <Code2 className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]" id="what-i-do">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-8 items-start">
        {/* Left Content */}
        <div className="space-y-6 lg:sticky lg:top-24">
          <p className="uppercase tracking-[3px] text-sm font-semibold text-zinc-500">
            WHAT I DO
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-zinc-800">
            Turning ideas into <span className="italic font-normal font-serif">seamless digital experiences.</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-md">
            I help businesses and individuals build clean, modern and user-centric websites that not only look great but deliver real impact.
          </p>
          <div className="pt-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-zinc-800 font-semibold border-b border-zinc-800 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors"
            >
              More About Me <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Content - Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
