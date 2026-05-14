import React from "react";
import {
  ArrowRight,
  Leaf,
  PhoneCall,
  Star,
  TreePine,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative mx-4 mt-24 overflow-hidden rounded-[34px] bg-cover bg-center px-5 py-12 md:mx-8 md:px-10 md:py-16 lg:px-16"
      style={{
        backgroundImage:
          "url('src/assets/10bae2e6-6c6c-467e-a18a-aec949b1e5ee.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2718] via-[#062b16]/90 to-[#062b16]/35"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(132,204,22,0.22),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(34,197,94,0.18),transparent_30%)]"></div>

      <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-green-400/20 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="order-1 text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-green-50 shadow-lg backdrop-blur-md sm:text-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-green-950">
              <Leaf size={16} />
            </span>
            Garden Design • Waterfalls • Designer Pots
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
            Transform Your Space With{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-lime-300 via-green-300 to-emerald-200 bg-clip-text text-transparent">
                Beautiful Landscaping.
              </span>
              <span className="absolute -bottom-2 left-1 h-2 w-[95%] rounded-full bg-lime-400/35"></span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-green-50/90 md:text-lg lg:mx-0">
            We design and decorate gardens, terrace spaces, balconies and
            outdoor areas with natural plants, rock waterfalls, premium designer
            pots and elegant garden decoration. Our work focuses on creating
            fresh, peaceful and attractive green spaces for homes, offices and
            commercial properties.
          </p>
        </div>

        <div className="order-2 relative mx-auto w-full max-w-[430px] lg:order-2 lg:max-w-none">
          <div className="absolute -left-5 top-8 z-20 hidden rounded-3xl border border-white/20 bg-white/15 p-4 text-white shadow-2xl backdrop-blur-xl md:block">
            <div className="flex items-center gap-1 text-lime-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <p className="mt-2 text-sm font-bold">Premium Landscape Work</p>
          </div>

          <div className="absolute -right-4 -top-5 z-20 hidden rounded-full bg-lime-400 px-5 py-3 text-sm font-black text-green-950 shadow-xl lg:block">
            Custom Design
          </div>

          <div className="rounded-[30px] border border-white/20 bg-white/10 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-4 lg:rounded-[34px]">
            <div className="relative overflow-hidden rounded-[24px] lg:rounded-[26px]">
              <img
                src="src/assets/IMG_9963.JPG"
                alt="Luxury landscape garden"
                className="h-[300px] w-full object-cover object-center transition-all duration-700 hover:scale-105 sm:h-[360px] md:h-[470px] lg:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5">
                <div className="rounded-3xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[1.8px] text-lime-300">
                    Featured Service
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-black sm:text-xl">
                      Garden Design & Waterfall Decor
                    </h3>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime-400 text-green-950">
                      <TreePine size={22} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-3 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime-400 px-8 py-4 font-black text-green-950 shadow-[0_18px_45px_rgba(132,204,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            View Our Work
            <ArrowRight
              size={19}
              className="transition duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-black text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-green-950"
          >
            <PhoneCall size={18} />
            Contact for Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;