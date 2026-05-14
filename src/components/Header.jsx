import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Gallery", path: "#gallery" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-green-600 to-emerald-800 shadow-lg transition-transform duration-500 group-hover:rotate-[360deg]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7 text-white"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a8 8 0 0 1-10 10Z" />
              <path d="M7 21c-4.3-1.47-6-6.47-6-10" />
            </svg>

            <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tighter text-zinc-900 md:text-2xl">
              <span className="text-green-600">VAN</span> VARSHIKA
            </h1>

            <div className="flex items-center gap-1">
              <span className="h-[1px] w-4 bg-green-600"></span>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Landscaping Luxe
              </p>
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-zinc-600 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="relative py-2 transition-colors hover:text-green-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-600 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="rounded-full bg-zinc-900 px-7 py-2.5 text-sm font-bold text-white transition-all hover:bg-green-600 hover:shadow-lg hover:shadow-green-200"
          >
            Book Consult
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg bg-zinc-50 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-zinc-900 transition-all ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>

          <span
            className={`h-0.5 w-5 bg-zinc-900 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`h-0.5 w-5 bg-zinc-900 transition-all ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </nav>

      <div
        className={`absolute left-0 w-full border-b border-zinc-100 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "top-full opacity-100" : "-top-[450px] opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-6 font-bold uppercase tracking-widest text-zinc-600">
          {navLinks.map((link, index) => (
            <a
              key={index}
              onClick={() => setMenuOpen(false)}
              href={link.path}
              className="text-sm transition-colors hover:text-green-600"
            >
              {link.name}
            </a>
          ))}

          <a
            onClick={() => setMenuOpen(false)}
            href="#contact"
            className="mt-2 rounded-xl bg-green-600 py-4 text-center text-sm text-white"
          >
            Book Consult
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;