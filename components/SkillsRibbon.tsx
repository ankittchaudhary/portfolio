"use client";

const skills = [
    { icon: "⚛️", label: "React" },
    { icon: "▲", label: "Next.js" },
    { icon: "🟦", label: "TypeScript" },
    { icon: "🍃", label: "Node.js" },
    { icon: "🐘", label: "PostgreSQL" },
    { icon: "🔥", label: "Firebase" },
    { icon: "🐳", label: "Docker" },
    { icon: "🎨", label: "Tailwind CSS" },
    { icon: "🌐", label: "REST APIs" },
    { icon: "🔷", label: "MongoDB" },
];

const doubled = [...skills, ...skills];

export default function SkillsRibbon() {
    return (
        <div
            className="absolute inset-x-0 z-10 overflow-hidden pointer-events-none"
            style={{ top: "50%", transform: "translateY(-50%)" }}
        >
            {/* Outer rotated wrapper — goes edge to edge */}
            <div
                className="relative w-full"
                style={{ transform: "rotate(-6deg)", margin: "0 -5%" }}
            >
                {/* Top thin accent line */}
                <div className="w-full h-[2px] bg-[#d4a060] mb-[2px]" />

                {/* Main ribbon */}
                <div className="w-full bg-[#1a1a1a] py-3 overflow-hidden">
                    <div
                        className="flex whitespace-nowrap"
                        style={{
                            animation: "ribbonScroll 22s linear infinite",
                        }}
                    >
                        {doubled.map((skill, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-2 px-6 text-[#f5f0eb] text-[13px] font-medium tracking-widest uppercase font-mono"
                            >
                                <span className="w-[4px] h-[4px] rounded-full bg-[#d4a060] flex-shrink-0" />
                                <span className="text-base leading-none">{skill.icon}</span>
                                {skill.label}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom thin accent line */}
                <div className="w-full h-[2px] bg-[#d4a060] mt-[2px]" />
            </div>

            <style jsx>{`
        @keyframes ribbonScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}