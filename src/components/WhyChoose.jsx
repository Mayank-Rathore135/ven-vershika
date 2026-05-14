import { useEffect, useRef, useState } from "react";

const whyChooseItems = [
  {
    icon: "🌿",
    title: "Custom Plans",
    text: "Designs made according to space, sunlight, usage and property style.",
  },
  {
    icon: "🪴",
    title: "Premium Plants",
    text: "Suitable indoor and outdoor plants for a clean natural look.",
  },
  {
    icon: "💧",
    title: "Smart Watering",
    text: "Water planning that keeps the garden fresh with less effort.",
  },
  {
    icon: "🪨",
    title: "Natural Styling",
    text: "Stones, pathways, pots and lights for a complete premium finish.",
  },
];

function WhyChoose() {
  const landscapeImages = [
    "src/assets/88856569-789c-4f2c-b6be-115892db58e7.jpg",
    "src/assets/IMG_9936.JPG",
    "src/assets/IMG_9963.JPG",
    "src/assets/10bae2e6-6c6c-467e-a18a-aec949b1e5ee.jpg",
  ];

  const sliderItems = whyChooseItems.map((item, index) => ({
    ...item,
    image: landscapeImages[index % landscapeImages.length],
  }));

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = sliderItems[selectedIndex];

  const cardsSliderRef = useRef(null);
  const scrollFrameRef = useRef(null);

  const scrollToCard = (index) => {
    const slider = cardsSliderRef.current;
    const activeCard = slider?.children[index];

    if (activeCard) {
      activeCard.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const changeSlide = (index) => {
    setSelectedIndex(index);
    scrollToCard(index);
  };

  const handleCardsScroll = () => {
    const slider = cardsSliderRef.current;

    if (!slider) return;

    if (scrollFrameRef.current) {
      cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = requestAnimationFrame(() => {
      const sliderRect = slider.getBoundingClientRect();
      const sliderCenter = sliderRect.left + sliderRect.width / 2;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      Array.from(slider.children).forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(sliderCenter - cardCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      setSelectedIndex((prev) =>
        prev === closestIndex ? prev : closestIndex
      );
    });
  };

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const nextSlide = () => {
    const nextIndex = (selectedIndex + 1) % sliderItems.length;
    changeSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      (selectedIndex - 1 + sliderItems.length) % sliderItems.length;
    changeSlide(prevIndex);
  };

  return (
    <section className="relative overflow-hidden bg-[#f4fbf2] px-4 py-14 sm:px-5 md:px-10 md:py-20 lg:px-20">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-200/50 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-200/50 blur-[110px]"></div>

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.6rem] border border-white/60 bg-[#062515] px-4 py-8 text-white shadow-[0_35px_90px_rgba(4,35,19,0.28)] sm:px-6 md:rounded-[2rem] md:px-8 md:py-14 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(134,239,172,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.16),transparent_36%)]"></div>

        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-300/25 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-green-200 backdrop-blur-md sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-green-300 shadow-[0_0_18px_rgba(134,239,172,0.9)]"></span>
              Why Clients Choose Us
            </span>

            <h2 className="mx-auto mt-5 max-w-xl text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl lg:mx-0 lg:mt-6 lg:text-5xl">
              Professional landscape design for elegant, natural and lasting
              outdoor spaces.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8 lg:mx-0 lg:mt-5">
              We are chosen for our thoughtful landscape planning, natural
              design style and clean premium finishing. Whether it is a terrace
              garden, farmhouse landscape, Zen garden, boutique water feature,
              fruit orchard or indoor landscaping, we design every space with
              purpose, comfort and beauty. Our work focuses on peaceful
              greenery, functional layouts, real stone details, fresh plantation
              and designs that make homes, farmhouses and indoor spaces feel
              naturally elegant.
            </p>

            <div className="mx-auto mt-7 w-full max-w-[430px] lg:hidden">
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/15 bg-white/10 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-md">
                <img
                  key={selectedItem.title}
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="h-[265px] w-full rounded-[1.1rem] object-cover transition-all duration-700"
                />

                <div className="absolute inset-2 rounded-[1.1rem] bg-gradient-to-t from-[#031b0f]/95 via-[#031b0f]/45 to-transparent"></div>

                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-[58%] z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-xl font-black text-white backdrop-blur-md transition hover:bg-white hover:text-green-950"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-[58%] z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-xl font-black text-white backdrop-blur-md transition hover:bg-white hover:text-green-950"
                >
                  ›
                </button>

                <div className="absolute bottom-8 left-4 right-4">
                  <div className="mb-3 grid h-11 w-11 place-items-center rounded-[1rem] bg-green-300 text-2xl text-green-950 shadow-xl shadow-black/30">
                    {selectedItem.icon}
                  </div>

                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-green-300">
                    Selected Detail
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-tight">
                    {selectedItem.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-green-50/80">
                    {selectedItem.text}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex justify-center gap-2">
                {sliderItems.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => changeSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      selectedIndex === index
                        ? "w-8 bg-green-300"
                        : "w-2 bg-white/30"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:order-2 lg:block">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-white/10 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-md">
              <img
                key={selectedItem.title}
                src={selectedItem.image}
                alt={selectedItem.title}
                className="h-[470px] w-full rounded-[1.4rem] object-cover transition-all duration-700"
              />

              <div className="absolute inset-3 rounded-[1.4rem] bg-gradient-to-t from-[#031b0f]/95 via-[#031b0f]/45 to-transparent"></div>

              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-6 top-[58%] z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-2xl font-black text-white backdrop-blur-md transition hover:bg-white hover:text-green-950"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-6 top-[58%] z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-2xl font-black text-white backdrop-blur-md transition hover:bg-white hover:text-green-950"
              >
                ›
              </button>

              <div className="absolute bottom-8 left-6 right-6">
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-[1.2rem] bg-green-300 text-3xl text-green-950 shadow-xl shadow-black/30">
                  {selectedItem.icon}
                </div>

                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-green-300">
                  Selected Detail
                </p>

                <h3 className="mt-2 max-w-md text-3xl font-black leading-tight">
                  {selectedItem.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-green-50/80">
                  {selectedItem.text}
                </p>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {sliderItems.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => changeSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? "w-8 bg-green-300"
                      : "w-2 bg-white/30"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-9 lg:mt-12">
          <div
            ref={cardsSliderRef}
            onScroll={handleCardsScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 scroll-smooth sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4"
          >
            {sliderItems.map((item, index) => {
              const active = selectedIndex === index;

              return (
                <button
                  type="button"
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`group relative flex min-h-[190px] w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-[1.3rem] border p-5 text-left shadow-xl backdrop-blur-md transition duration-500 hover:-translate-y-2 sm:min-h-[230px] sm:w-auto sm:rounded-[1.6rem] sm:p-6 lg:min-h-[245px] ${
                    active
                      ? "scale-[1.02] border-green-300/80 bg-green-300/25 shadow-green-300/10"
                      : "border-white/10 bg-white/[0.08] hover:border-green-300/40 hover:bg-white/[0.13]"
                  }`}
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-300/10 blur-2xl transition duration-500 group-hover:bg-green-300/25"></div>

                  <div
                    className={`relative mb-4 grid h-12 w-12 place-items-center rounded-[1rem] text-2xl shadow-lg transition duration-500 group-hover:scale-105 sm:mb-5 sm:h-14 sm:w-14 sm:rounded-[1.2rem] sm:text-3xl ${
                      active
                        ? "bg-white text-green-950"
                        : "bg-green-300 text-green-950"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="relative text-base font-black text-white sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 flex-1 text-sm leading-6 text-green-50/70 sm:leading-7">
                    {item.text}
                  </p>

                  <div
                    className={`relative mt-4 h-[2px] rounded-full bg-green-300 transition-all duration-500 sm:mt-5 ${
                      active ? "w-24" : "w-12"
                    }`}
                  ></div>

                  <p className="relative mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-green-300/80 sm:mt-4 sm:text-xs sm:tracking-[0.16em]">
                    Tap to preview here
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:mt-10">
          <button
            type="button"
            onClick={() => scrollToSection("portfolio")}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-300 px-6 py-4 text-sm font-black text-green-950 shadow-[0_18px_45px_rgba(134,239,172,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-green-200 sm:w-auto sm:px-7"
          >
            View Our Work
            <span className="transition duration-300 group-hover:translate-x-1">
              ↓
            </span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-green-950 sm:w-auto sm:px-7"
          >
            Design Your Dream Garden
          </button>
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
}

export default WhyChoose;