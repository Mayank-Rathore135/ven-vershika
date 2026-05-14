import React, { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  MapPin,
  PenTool,
  Shovel,
  Leaf,
} from "lucide-react";

const Process = () => {
  const [animatedCards, setAnimatedCards] = useState([]);
  const cardRefs = useRef([]);

  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Free Consultation",
      description:
        "We listen to your ideas, understand your budget, and suggest the right landscaping solution for your outdoor space.",
      points: ["Idea discussion", "Budget planning"],
    },
    {
      number: "02",
      icon: MapPin,
      title: "Site Visit & Analysis",
      description:
        "Our experts inspect soil, sunlight, space layout, drainage, and existing greenery to plan everything correctly.",
      points: ["Site checking", "Space analysis"],
    },
    {
      number: "03",
      icon: PenTool,
      title: "Custom Design Plan",
      description:
        "We create a personalized garden concept with lawn, plants, pathways, lighting, seating, and outdoor features.",
      points: ["Garden layout", "Plant selection"],
    },
    {
      number: "04",
      icon: Shovel,
      title: "Build & Installation",
      description:
        "Our team brings the design to life with quality materials, healthy plants, clean finishing, and skilled execution.",
      points: ["Clean execution", "Premium finish"],
    },
    {
      number: "05",
      icon: Leaf,
      title: "Care & Maintenance",
      description:
        "We provide regular maintenance support to keep your garden fresh, green, healthy, and beautiful in every season.",
      points: ["Plant care", "Garden cleaning"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            setAnimatedCards((prev) => {
              if (prev.includes(index)) return prev;
              return [...prev, index];
            });
          }
        });
      },
      {
        root: null,
        threshold: 0.75,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f4fbf2] px-4 py-14 sm:px-5 md:px-10 md:py-20 lg:px-20"
    >
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-300/30 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-lime-300/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-3xl text-center md:mb-14">
          <span className="inline-flex rounded-full border border-green-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[1.6px] text-green-700 shadow-sm backdrop-blur sm:px-5 sm:text-sm sm:tracking-[2px]">
            Our Working Process
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-black leading-tight text-[#12351c] sm:text-3xl md:mt-6 md:text-5xl">
            From First Idea to a Beautiful Green Space
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:mt-5 md:text-lg md:leading-relaxed">
            We follow a clear and professional process to design, build, and
            maintain outdoor spaces that look natural, premium, and long-lasting.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-20 hidden h-[2px] bg-gradient-to-r from-transparent via-green-300 to-transparent lg:block"></div>

          <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scroll-smooth sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-5 lg:gap-7">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isAnimated = animatedCards.includes(index);

              return (
                <div
                  key={index}
                  data-index={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="group relative flex min-h-[330px] w-[84%] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] border border-white/70 bg-white/85 p-5 shadow-[0_18px_50px_rgba(22,59,31,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-[0_30px_80px_rgba(34,139,34,0.18)] sm:w-auto sm:rounded-[28px] sm:p-6 lg:min-h-[360px]"
                >
                  <div className="absolute inset-x-5 top-0 h-1 rounded-full bg-gradient-to-r from-green-700 via-lime-400 to-green-500 sm:inset-x-6"></div>

                  <div className="relative z-10 mb-5 flex items-center justify-between sm:mb-6">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-700 to-lime-500 text-white shadow-lg shadow-green-700/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-16 sm:w-16 ${
                        isAnimated ? "animate-halfRotateOnce" : ""
                      }`}
                    >
                      <Icon size={26} strokeWidth={2.4} />
                    </div>

                    <span className="text-4xl font-black text-green-100 transition-all duration-500 group-hover:scale-110 group-hover:text-green-800">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-extrabold leading-tight text-[#12351c] sm:mb-4 sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="flex-1 text-sm leading-7 text-gray-600 sm:leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {step.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-center gap-2 text-sm font-semibold text-green-800"
                      >
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-100 text-xs font-black text-green-700">
                          ✓
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-green-200/40 blur-2xl transition-all duration-500 group-hover:bg-lime-300/50"></div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex justify-center gap-2 sm:hidden">
            {steps.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full ${
                  index === 0 ? "w-8 bg-green-700" : "w-2 bg-green-700/25"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          @keyframes halfRotateOnce {
            0% {
              transform: rotate(0deg) scale(1);
            }

            45% {
              transform: rotate(180deg) scale(1.12);
            }

            100% {
              transform: rotate(0deg) scale(1);
            }
          }

          .animate-halfRotateOnce {
            animation: halfRotateOnce 0.75s ease-in-out 1;
          }
        `}
      </style>
    </section>
  );
};

export default Process;