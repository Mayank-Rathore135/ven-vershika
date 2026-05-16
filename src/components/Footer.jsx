import React, { useState } from "react";

function Footer() {
  const [modalData, setModalData] = useState({ isOpen: false, type: "" });

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = (e, type) => {
    e.preventDefault();
    setModalData({ isOpen: true, type: type });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, type: "" });
  };

  const navLinks = [
    { name: "Home", path: "#home" },
     { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Gallery", path: "#gallery" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <>
      <footer className="relative overflow-hidden border-t border-emerald-400/10 bg-black px-3 pb-7 pt-12 font-sans text-green-50/70 min-[390px]:px-4 sm:px-6 sm:pt-16 md:px-8 md:pb-10 md:pt-20 lg:px-16">
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[230px] w-[280px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px] sm:h-[400px] sm:w-[600px] sm:blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="border-b border-emerald-400/10 pb-8 sm:pb-12 md:pb-14">
            <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-start md:justify-between md:text-left">
              <div className="space-y-4 sm:space-y-5">
                <div className="flex flex-col items-center gap-3 sm:flex-row md:items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 transition-all hover:bg-emerald-400/20 sm:h-14 sm:w-14">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-current text-emerald-300 sm:h-8 sm:w-8"
                    >
                      <path d="M20 4C14 4 8 7 6 12c2-1 4-2 7-2-3 2-5 5-5 8 5-1 8-3 10-6 2-3 2-6 2-8z" />
                    </svg>
                  </div>

                  <div>
                    <h2 className="text-[1.45rem] font-black uppercase leading-tight tracking-tight text-white min-[390px]:text-2xl sm:text-3xl">
                      Van<span className="text-emerald-300">VRIKSHA</span>
                    </h2>

                    <div className="mx-auto mt-1 h-[1px] w-32 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent sm:w-full sm:from-emerald-400/40 sm:via-emerald-400/40 sm:to-transparent md:mx-0" />
                  </div>
                </div>

                <p className="mx-auto max-w-[300px] text-[12px] font-medium leading-6 text-green-50/70 min-[390px]:max-w-md min-[390px]:text-[13px] sm:text-sm sm:leading-7 md:mx-0">
                  Transforming ordinary spaces into fresh, peaceful and
                  naturally beautiful living ecosystems.
                </p>
              </div>

              <div className="w-full max-w-sm rounded-2xl border border-emerald-400/10 bg-emerald-400/5 px-4 py-3 text-center sm:px-5 sm:py-4 md:text-right">
                <p className="text-[8px] font-black uppercase tracking-[0.18em] text-emerald-300 sm:text-[10px] sm:tracking-[0.24em]">
                  Landscape Studio
                </p>

                <p className="mt-2 text-[12px] font-medium leading-5 text-green-50/65 sm:text-sm sm:leading-6">
                  Garden design, decoration, waterfalls and premium outdoor
                  styling.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 py-8 min-[390px]:gap-3 sm:gap-8 sm:py-12 md:gap-12 md:py-16">
            <div className="space-y-3 text-left sm:space-y-4">
              <h4 className="text-[7.5px] font-black uppercase tracking-[0.12em] text-emerald-300 min-[390px]:text-[8px] sm:text-[10px] sm:tracking-[0.24em]">
                Navigation
              </h4>

              <ul className="space-y-2.5 text-[10px] font-medium leading-4 min-[390px]:text-[11px] sm:space-y-3 sm:text-sm">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.path}
                      className="group flex w-fit items-center gap-1 transition-colors hover:text-emerald-300 sm:gap-2"
                    >
                      <span className="hidden h-[1px] w-0 bg-emerald-300 transition-all group-hover:w-3 sm:block" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 text-left sm:space-y-4">
              <h4 className="text-[7.5px] font-black uppercase tracking-[0.12em] text-emerald-300 min-[390px]:text-[8px] sm:text-[10px] sm:tracking-[0.24em]">
                Contact
              </h4>

              <ul className="space-y-2.5 text-[10px] font-medium leading-4 min-[390px]:text-[11px] sm:space-y-3 sm:text-sm">
                <li className="max-w-[95px] leading-4 min-[390px]:max-w-[115px] sm:max-w-[220px] sm:leading-relaxed">
                  Sector 7, Karnal, Haryana
                </li>

                <li>
                  <a
                    href="tel:+919876543210"
                    className="break-words font-bold tracking-normal text-white transition-colors hover:text-emerald-300 sm:tracking-wider"
                  >
                    +91 98765 43210
                  </a>
                </li>

                <li className="pt-1 text-[6.8px] font-black uppercase leading-3 tracking-[0.08em] text-emerald-300/70 min-[390px]:text-[7.5px] sm:text-[10px] sm:tracking-[0.22em]">
                  Mon — Sat: 09:00AM - 7:00PM
                </li>
              </ul>
            </div>

            <div className="space-y-3 text-left sm:space-y-4">
              <h4 className="text-[7.5px] font-black uppercase tracking-[0.12em] text-emerald-300 min-[390px]:text-[8px] sm:text-[10px] sm:tracking-[0.24em]">
                Social
              </h4>

              <div className="flex max-w-[78px] flex-wrap items-center gap-2 min-[390px]:max-w-[90px] sm:max-w-none sm:gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/10 bg-white/[0.03] text-green-50/50 transition-all hover:-translate-y-1 hover:border-emerald-400/30 hover:text-emerald-300 min-[390px]:h-8 min-[390px]:w-8 sm:h-11 sm:w-11"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-current sm:h-5 sm:w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/10 bg-white/[0.03] text-green-50/50 transition-all hover:-translate-y-1 hover:border-emerald-400/30 hover:text-emerald-300 min-[390px]:h-8 min-[390px]:w-8 sm:h-11 sm:w-11"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-current sm:h-5 sm:w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/10 bg-white/[0.03] text-green-50/50 transition-all hover:-translate-y-1 hover:border-emerald-400/30 hover:text-emerald-300 min-[390px]:h-8 min-[390px]:w-8 sm:h-11 sm:w-11"
                >
                  <svg
                    className="h-4 w-4 fill-current sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 border-t border-emerald-400/10 pt-6 text-center md:flex-row md:text-left">
            <div>
              <p className="mb-1 text-[8px] font-black uppercase tracking-[0.18em] text-white sm:text-[10px] sm:tracking-[0.24em]">
                VanVarshika Studio
              </p>

              <p className="text-[8px] font-medium uppercase tracking-[0.12em] text-green-50/45 sm:text-[10px] sm:tracking-wider">
                © 2026 All Rights Reserved
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[8px] font-black tracking-[0.16em] sm:gap-8 sm:text-[10px] sm:tracking-[0.22em]">
              <button
                onClick={(e) => openModal(e, "Privacy")}
                className="uppercase transition-colors hover:text-emerald-300"
              >
                Privacy
              </button>

              <button
                onClick={(e) => openModal(e, "Terms")}
                className="uppercase transition-colors hover:text-emerald-300"
              >
                Terms
              </button>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-emerald-300 transition-colors hover:text-white sm:gap-2"
              >
                TOP <span className="text-xs leading-none sm:text-sm">↑</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {modalData.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-emerald-400/20 bg-[#02110a] p-5 shadow-[0_0_40px_rgba(16,185,129,0.1)] sm:p-8">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-xl text-green-50/50 hover:text-white"
            >
              ✕
            </button>

            <h3 className="mb-4 pr-8 text-lg font-black uppercase tracking-tight text-white sm:text-2xl">
              {modalData.type} <span className="text-emerald-300">Policy</span>
            </h3>

            <div className="mb-5 h-[1px] w-12 bg-emerald-300 sm:mb-6" />

            <p className="text-[13px] font-medium leading-6 text-green-50/70 sm:text-sm sm:leading-relaxed">
              {modalData.type === "Privacy"
                ? "We are committed to protecting your privacy and personal information. Our website collects basic analytics and uses cookies to enhance your browsing experience. We never sell, rent, or share your personal data with unauthorized third parties. Any information submitted through our forms is strictly used for communication and service delivery purposes only."
                : "By accessing and using this website, you agree to be bound by our terms of service. All content, including portfolio images, designs, and text, is the exclusive intellectual property of VanVarshika Studio. Unauthorized reproduction or commercial use is strictly prohibited. We reserve the right to update these terms at any time without prior notice."}
            </p>

            <button
              onClick={closeModal}
              className="mt-7 w-full rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-emerald-300 transition-all hover:bg-emerald-500/20 sm:mt-8 sm:text-[10px] sm:tracking-[0.24em]"
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
