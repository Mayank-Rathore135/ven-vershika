import React from "react";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Amit Sharma",
      role: "Home Owner",
      text: "The team transformed our backyard into a beautiful green space. Their planning, finishing, and plant selection were excellent.",
    },
    {
      name: "Priya Verma",
      role: "Villa Owner",
      text: "Very professional landscaping service. They understood our idea perfectly and created a premium garden within our budget.",
    },
    {
      name: "Rahul Mehta",
      role: "Commercial Client",
      text: "Our office outdoor area looks completely new now. Clean work, timely delivery, and great maintenance support.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f4fbf2] px-4 py-14 sm:px-5 md:px-10 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-300/25 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-lime-300/25 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-3xl text-center md:mb-14">
          <span className="inline-flex rounded-full border border-green-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[1.6px] text-green-700 shadow-sm backdrop-blur sm:px-5 sm:text-sm sm:tracking-[2px]">
            Testimonials
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-black leading-tight text-[#12351c] sm:text-3xl md:mt-6 md:text-5xl">
            What Our Clients Say About Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:mt-5 md:text-lg md:leading-relaxed">
            Real feedback from clients who trusted us to design and maintain
            their outdoor spaces with a clean, natural and premium finish.
          </p>
        </div>

        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scroll-smooth md:grid md:snap-none md:grid-cols-3 md:gap-7 md:overflow-visible md:pb-0">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative flex min-h-[300px] w-[86%] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] border border-green-100 bg-white/90 p-5 shadow-[0_18px_50px_rgba(22,59,31,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-200 hover:shadow-[0_30px_80px_rgba(34,139,34,0.16)] sm:w-[70%] sm:p-6 md:w-auto md:rounded-[30px] md:p-8"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-200/35 blur-2xl transition duration-500 group-hover:bg-lime-300/40"></div>

              <div className="relative z-10 mb-5 flex items-center justify-between md:mb-6">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      className="md:h-[18px] md:w-[18px]"
                    />
                  ))}
                </div>

                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-green-50 text-green-200 transition-all duration-500 group-hover:bg-green-100 group-hover:text-green-700 md:h-auto md:w-auto md:bg-transparent">
                  <Quote size={30} className="md:h-[42px] md:w-[42px]" />
                </div>
              </div>

              <p className="relative z-10 flex-1 text-sm leading-7 text-gray-600 sm:text-base md:mb-8 md:leading-relaxed">
                “{review.text}”
              </p>

              <div className="relative z-10 mt-7 flex items-center gap-3 md:mt-0 md:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-700 to-lime-500 text-base font-black text-white shadow-lg shadow-green-800/20 md:h-13 md:w-13 md:text-lg">
                  {review.name.charAt(0)}
                </div>

                <div className="text-left">
                  <h3 className="text-sm font-black text-[#12351c] sm:text-base">
                    {review.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 sm:text-sm">
                    {review.role}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-5 right-5 h-1 rounded-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100 md:left-8 md:right-8"></div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full ${
                index === 0 ? "w-8 bg-green-700" : "w-2 bg-green-700/25"
              }`}
            ></span>
          ))}
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
        `}
      </style>
    </section>
  );
};

export default Testimonials;