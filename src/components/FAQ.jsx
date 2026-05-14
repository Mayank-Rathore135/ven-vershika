import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Leaf,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do you provide complete garden design services?",
      answer:
        "Yes, we provide complete garden design services including layout planning, plant selection, lawn setup, pathways, lighting, decorative pots, and outdoor styling according to your space.",
    },
    {
      question: "Do you design terrace and balcony gardens?",
      answer:
        "Yes, we design terrace gardens, balcony gardens, indoor plant corners, and small outdoor green spaces with proper plant placement, pots, seating ideas, and decoration.",
    },
    {
      question: "Do you create rock waterfalls for gardens?",
      answer:
        "Yes, we create natural-looking rock waterfalls for gardens, farmhouses, villas, and outdoor areas. These waterfalls add a calm, fresh, and premium look to the landscape.",
    },
    {
      question: "Do you provide designer pots and garden decoration?",
      answer:
        "Yes, we provide designer pots and garden decoration services including stones, lights, pathways, plants, pots, and creative elements to make your space look complete.",
    },
    {
      question: "How much does landscaping cost?",
      answer:
        "The cost depends on the size of the area, design style, plants, materials, waterfall work, pots, lighting, and maintenance needs. We provide a custom quote after understanding your space.",
    },
    {
      question: "Do you offer regular garden maintenance?",
      answer:
        "Yes, we provide maintenance services to keep your garden clean, fresh, healthy, and well-managed. Maintenance can be planned weekly, monthly, or according to the project requirement.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f3f7ec] px-4 py-14 font-sans sm:px-6 md:px-10 md:py-20 lg:px-16"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-green-300/35 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-lime-300/35 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-3xl text-center md:mb-14">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-green-700/15 bg-white/75 px-4 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-green-800 shadow-[0_12px_35px_rgba(21,83,45,0.08)] backdrop-blur-md sm:mb-5 sm:px-5 sm:text-xs sm:tracking-[0.24em]">
            <HelpCircle size={14} className="sm:h-[15px] sm:w-[15px]" />
            Frequently Asked Questions
          </div>

          <h2 className="mx-auto max-w-2xl text-2xl font-black leading-tight tracking-tight text-green-950 sm:text-4xl md:text-5xl">
            Have Questions About Landscaping?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-green-900/70 sm:mt-5 sm:text-base md:text-lg md:leading-8">
            Find quick answers about our garden design, terrace garden, rock
            waterfall, designer pots, decoration, and maintenance services.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.35fr] lg:items-start lg:gap-8">
          <div className="rounded-[1.5rem] border border-green-800/10 bg-white/75 p-5 shadow-[0_24px_70px_rgba(21,83,45,0.12)] backdrop-blur-md sm:rounded-[2rem] sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-800 sm:h-14 sm:w-14">
              <Leaf size={23} className="sm:h-[26px] sm:w-[26px]" />
            </div>

            <h3 className="mt-5 text-xl font-black leading-tight text-green-950 sm:mt-6 sm:text-2xl">
              Clear answers before you start your green space.
            </h3>

            <p className="mt-3 text-sm font-medium leading-7 text-green-900/65 sm:mt-4 sm:text-base">
              Every landscape project is different. These FAQs help you
              understand our services, process, pricing idea, and maintenance
              options before contacting us.
            </p>

            <div className="mt-6 space-y-3 sm:mt-7 sm:space-y-4">
              {[
                "Garden and terrace design",
                "Rock waterfall and decor work",
                "Designer pots and maintenance",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    className="shrink-0 text-green-700"
                    size={18}
                  />
                  <span className="text-sm font-bold leading-5 text-green-900/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-700 px-5 py-3.5 text-xs font-black uppercase tracking-[1.2px] text-white shadow-[0_15px_35px_rgba(22,101,52,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-950 sm:mt-8 sm:w-auto sm:px-7 sm:py-4 sm:text-sm sm:tracking-[1.5px]"
            >
              <MessageCircle size={17} className="sm:h-[18px] sm:w-[18px]" />
              Ask Your Question
            </a>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[1.25rem] border bg-white/85 shadow-[0_18px_55px_rgba(21,83,45,0.09)] backdrop-blur-md transition-all duration-300 sm:rounded-[1.7rem] ${
                    isOpen
                      ? "border-green-700/25"
                      : "border-green-800/10 hover:border-green-700/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-3 p-4 text-left sm:gap-5 sm:p-6"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-black transition-all duration-300 sm:h-9 sm:w-9 sm:text-xs ${
                          isOpen
                            ? "bg-green-700 text-white"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span className="pt-0.5 text-sm font-black leading-5 text-green-950 sm:pt-1 sm:text-lg sm:leading-6">
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown
                      className={`mt-1 shrink-0 text-green-700 transition-all duration-300 sm:mt-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={21}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-5 pl-[3.7rem] text-[13px] font-medium leading-6 text-green-900/65 sm:px-6 sm:pb-7 sm:pl-[5.2rem] sm:text-base sm:leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;