import { useEffect, useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#a78bfa] opacity-[0.06] blur-[120px] pointer-events-none" />

      {/* Content */}
      <div
        className="relative z-10 text-center transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {/* Badge */}
        <span className="inline-block mb-8 text-xs tracking-[0.25em] uppercase text-[#a78bfa] border border-[#a78bfa]/20 px-4 py-1.5 rounded-full bg-[#a78bfa]/5">
          Portfolio
        </span>

        {/* Name */}
        <h1
          className="text-5xl sm:text-7xl font-light text-white mb-4 tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Coming<br />
          <span className="italic text-[#a78bfa]">Soon.</span>
        </h1>

        {/* Subtext */}
        <p
          className="mt-6 text-sm text-white/30 tracking-widest uppercase"
          style={{
            transitionDelay: "200ms",
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 300ms",
          }}
        >
          Something thoughtful is on the way
        </p>

        {/* Divider */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-white/10" />
          <span className="text-white/20 text-xs">✦</span>
          <span className="h-px w-10 bg-white/10" />
        </div>

        {/* Links */}
        <div
          className="mt-8 flex items-center justify-center gap-6 text-xs text-white/30 tracking-widest uppercase"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 600ms",
          }}
        >
          <a
            href="https://github.com/AdityaSengar25"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#a78bfa] transition-colors duration-300"
          >
            GitHub
          </a>
          <span className="text-white/10">·</span>
          <a
            href="mailto:pratapaditya071@gmail.com"
            className="hover:text-[#a78bfa] transition-colors duration-300"
          >
            Email
          </a>
          <span className="text-white/10">·</span>
          <a
            href="https://linkedin.com/in/adityasengar-in"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#a78bfa] transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}