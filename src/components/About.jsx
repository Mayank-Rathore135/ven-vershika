import React from "react";
import { Sprout, Flower2, ArrowRight } from "lucide-react";

function About() {
  const images = [
    {
      src: "src/assets/IMG_9926.jpg",
      alt: "Villa entrance landscaping with boundary wall and trees",
      tag: "Entrance Design",
      title: "Front & Boundary Landscaping",
    },
    {
      src: "src/assets/IMG_9936.JPG",
      alt: "Open farmhouse garden with gravel zone and mixed plants",
      tag: "Farmhouse Garden",
      title: "Open Garden Design",
    },
    {
      src: "src/assets/IMG_9976.PNG",
      alt: "Stone stepping pathway with white pebbles and bamboo",
      tag: "Pathway Design",
      title: "Stone & Pebble Walkways",
    },
    {
      src: "src/assets/IMG_9944.jpg",
      alt: "Dense tropical plant border with palms and monstera",
      tag: "Plant Styling",
      title: "Tropical Plant Borders",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4fbf2] px-3 py-12 font-sans min-[390px]:px-4 sm:px-6 md:px-10 md:py-20 lg:px-20"
    >
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-green-200/40 blur-3xl sm:h-72 sm:w-72"></div>
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-lime-200/50 blur-3xl sm:h-80 sm:w-80"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-9 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-2.5 min-[390px]:gap-3 sm:gap-5">
            {images.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-[18px] shadow-[0_14px_36px_rgba(18,53,28,0.14)] sm:rounded-[32px] sm:shadow-[0_18px_50px_rgba(18,53,28,0.14)] ${
                  index === 1 || index === 3
                    ? "translate-y-4 sm:translate-y-10"
                    : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-[145px] w-full object-cover transition-all duration-700 hover:scale-105 min-[390px]:h-[165px] sm:h-[280px] md:h-[320px] lg:h-[340px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-green-950/15 to-transparent"></div>

                <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/15 px-2.5 py-2 text-white backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-auto sm:rounded-2xl sm:px-4 sm:py-3">
                  <p className="text-[7.5px] font-bold uppercase leading-none tracking-[0.12em] text-lime-300 min-[390px]:text-[8.5px] sm:text-xs">
                    {item.tag}
                  </p>

                  <h3 className="mt-1 text-[11px] font-black leading-tight min-[390px]:text-xs sm:text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-white bg-lime-400 p-5 text-green-950 shadow-2xl lg:block">
            <Sprout size={44} />
          </div>
        </div>

        <div className="contents lg:block">
          <div className="order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-green-700 shadow-sm min-[390px]:text-[10px] sm:px-5 sm:py-2 sm:text-sm sm:tracking-[0.18em]">
              <Flower2 size={14} className="sm:h-[17px] sm:w-[17px]" />
              About GreenAura
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-[1.55rem] font-black leading-[1.15] text-green-950 min-[390px]:text-[1.75rem] sm:mt-5 sm:text-3xl md:text-4xl lg:mx-0 lg:text-5xl">
              We design landscapes that feel natural, fresh and beautifully
              planned.
            </h2>

            <div className="mx-auto mt-4 max-w-3xl space-y-3 text-[13px] font-medium leading-6 text-gray-600 min-[390px]:text-sm min-[390px]:leading-7 sm:mt-5 sm:space-y-4 sm:text-base md:text-lg md:leading-relaxed lg:mx-0">
              <p>
                GreenAura is a professional landscaping studio that creates
                complete outdoor environments for homes, villas, farmhouses,
                offices and commercial spaces. Our work includes natural rock
                waterfalls, open farmhouse gardens, thatched bamboo gazebos,
                stone pathways, wooden deck terraces, entrance landscaping and
                dense tropical plant borders — all designed with care and built
                with quality.
              </p>

              <p>
                We work with real natural materials — layered boulders, white
                river pebbles, flat stone slabs, bamboo and a wide range of
                tropical plants including areca palms, monstera, cordyline,
                bamboo and flowering shrubs — to create spaces that look
                genuinely natural, layered and complete.
              </p>

              <p className="hidden md:block">
                Whether you want a serene rock waterfall as your garden's
                centerpiece, a clean stone pathway through bamboo, a premium
                wooden deck terrace, a lush open lawn with shade trees or a
                complete villa landscape from entrance to backyard — GreenAura
                handles every part of your outdoor space with the same focus on
                quality, planning and natural beauty.
              </p>
            </div>
          </div>

          <div className="order-3 mt-0 flex flex-col gap-3 sm:flex-row sm:justify-center lg:mt-8 lg:justify-start">
            <a
              href="#services"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-green-700 px-5 py-3.5 text-[12px] font-black text-white shadow-[0_15px_40px_rgba(22,163,74,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-950 min-[390px]:text-[13px] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Services
              <ArrowRight
                size={17}
                className="transition duration-300 group-hover:translate-x-1 sm:h-[19px] sm:w-[19px]"
              />
            </a>

            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center rounded-full border border-green-200 bg-green-50 px-5 py-3.5 text-[12px] font-black text-green-800 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-100 min-[390px]:text-[13px] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
