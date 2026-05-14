import React from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-white px-4 py-14 sm:px-5 md:px-10 md:py-20 lg:px-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#12351c] px-4 py-12 text-center shadow-[0_24px_80px_rgba(18,53,28,0.24)] sm:rounded-[34px] sm:px-6 sm:py-14 md:px-12 md:py-16 lg:rounded-[40px] lg:px-20">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-green-400/25 blur-3xl md:h-80 md:w-80"></div>
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-400/25 blur-3xl md:h-80 md:w-80"></div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[1.4px] text-lime-300 backdrop-blur sm:px-5 sm:text-xs sm:tracking-[2px] md:text-sm">
            Start Your Green Project
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-black leading-tight text-white sm:text-3xl md:mt-6 md:text-5xl">
            Ready to Transform Your Outdoor Space?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-100 sm:text-base md:mt-5 md:text-lg md:leading-relaxed">
            Let our landscaping experts design a beautiful, fresh, and peaceful
            green space for your home, villa, office, or commercial property.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:mt-9 md:gap-4">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[1px] text-green-700 transition-all duration-300 hover:bg-lime-400 hover:text-[#12351c] sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[1.5px]"
            >
              Get Free Consultation
              <ArrowRight size={17} className="sm:h-[19px] sm:w-[19px]" />
            </a>

            <a
              href="tel:+919999999999"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-black uppercase tracking-[1px] text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-green-700 sm:w-auto sm:gap-3 sm:px-8 sm:py-4 sm:text-sm sm:tracking-[1.5px]"
            >
              <PhoneCall size={17} className="sm:h-[19px] sm:w-[19px]" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;