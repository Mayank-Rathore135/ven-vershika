import { useState } from "react";

import terraceImg from "../assets/House.jpeg";
import farmhouseImg from "../assets/IMG_9936.JPG";
import zenImg from "../assets/10bae2e6-6c6c-467e-a18a-aec949b1e5ee.jpg";
import waterImg from "../assets/IMG_9963.JPG";
import orchardImg from "../assets/IMG_9929.JPG";
import indoorImg from "../assets/IMG_9976.PNG";

const services = [
  {
    title: "Terrace & Indoor Gardens",
    short: "Green spaces for modern living",
    desc: "We create fresh and peaceful green spaces for modern homes, offices, farmhouses and commercial properties. Our terrace and indoor garden solutions include proper plant selection, designer pots, green corners, balcony styling, rooftop layouts and low-maintenance greenery. We focus on making every space feel natural, beautiful and comfortable while improving the overall environment and visual appeal of the property.",
    image: terraceImg,
    icon: "🌿",
    features: [
      "Terrace garden setup",
      "Indoor plant styling",
      "Air quality improvement",
      "Relaxing green corners",
    ],
  },
  {
    title: "Farmhouse & Garden Landscaping",
    short: "Functional and natural outdoor design",
    desc: "We design natural and spacious farmhouse gardens with a clean, professional layout. Our work includes lush lawns, plant zones, pathways, seating corners, flower beds, decorative rocks, shade trees and open green areas. Every landscape is planned according to property size, sunlight, soil and water availability, making the space beautiful, practical, peaceful and easy to maintain.",
    image: farmhouseImg,
    icon: "🌳",
    features: [
      "Farmhouse landscape design",
      "Garden planning",
      "Pathway layout",
      "Outdoor seating areas",
    ],
  },
  {
    title: "Zen Gardens",
    short: "Peaceful and mindful green spaces",
    desc: "We create calm and elegant Zen gardens using natural stones, minimal plants, clean pathways and soft greenery. These spaces are perfect for meditation corners, villas, farmhouses, resorts, courtyards and peaceful outdoor seating areas. Every design is planned with balanced stone placement, simple plant styling and open space, creating a fresh, premium and relaxing garden that feels naturally connected with nature.",
    image: zenImg,
    icon: "🪨",
    features: [
      "Minimal garden layout",
      "Stone arrangement",
      "Peaceful sitting zone",
      "Natural calm design",
    ],
  },
  {
    title: "Boutique Water Features",
    short: "Custom waterfalls and water corners",
    desc: "We design custom water features and natural rock waterfalls that become the main attraction of gardens, entrances, villas, courtyards and farmhouses. Using boulder stones, rock layers, pond corners, plants, pebbles and lighting, we create a fresh and premium outdoor look. Every waterfall is planned according to the space, theme and maintenance needs, adding natural beauty, peaceful water sound and a relaxing feel to the landscape.",
    image: waterImg,
    icon: "💧",
    features: [
      "Custom waterfall setup",
      "Real boulder stones",
      "Water flow planning",
      "Luxury garden feature",
    ],
  },
  {
    title: "Fruit Orchards",
    short: "Edible landscapes for fresh produce",
    desc: "We design beautiful fruit orchards that add greenery, freshness and long-term value to farmhouses, large gardens and open plots. Our planning includes fruit plant selection, proper spacing, soil preparation, sunlight planning, watering guidance and easy maintenance. From mango, lemon and guava to seasonal fruit trees, every orchard is arranged in a clean, natural and practical layout.",
    image: orchardImg,
    icon: "🍊",
    features: [
      "Fruit plant selection",
      "Orchard layout planning",
      "Soil and spacing guidance",
      "Easy maintenance setup",
    ],
  },
  {
    title: "Indoor Landscaping",
    short: "Bring the outdoors inside",
    desc: "We create custom indoor landscaping that brings fresh greenery into homes, offices, cafes, showrooms and commercial spaces. Our work includes decorative plant styling, green walls, designer pots, reception corners, workstation plants and low-light plant selection. Every setup is planned according to the space, theme and lighting, making the interior look clean, premium, peaceful and naturally refreshing.",
    image: indoorImg,
    icon: "🪴",
    features: [
      "Indoor garden design",
      "Green wall setup",
      "Decorative plant styling",
      "Home and office plants",
    ],
  },
];

function Services() {
  const [activeService, setActiveService] = useState(0);
  const selectedService = services[activeService];

  const fallbackImage = services[1]?.image || services[0]?.image;

  const handleImageError = (e) => {
    if (e.currentTarget.src !== fallbackImage) {
      e.currentTarget.src = fallbackImage;
    }
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f4fbf2] px-3 py-12 font-sans min-[390px]:px-4 sm:px-6 sm:py-14 md:px-8 md:py-[72px] lg:px-10 lg:py-20"
    >
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-green-300/25 blur-3xl sm:h-80 sm:w-80"></div>
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-lime-300/25 blur-3xl sm:h-96 sm:w-96"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-7 text-center sm:mb-8 md:mb-10">
          <span className="inline-block rounded-full bg-white px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-green-700 shadow-sm min-[390px]:text-[10px] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em] md:px-5 md:text-sm md:tracking-[0.22em]">
            Landscaping Services
          </span>

          <h2 className="mx-auto mt-4 max-w-4xl text-[1.55rem] font-black leading-[1.16] text-green-950 min-[390px]:text-[1.75rem] sm:text-3xl sm:leading-tight md:mt-5 md:text-4xl lg:text-5xl">
            Professional Landscape Designs For Natural And Premium Spaces
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[13px] font-medium leading-6 text-gray-600 min-[390px]:text-sm min-[390px]:leading-7 sm:text-base md:mt-5 md:text-[17px] md:leading-8 lg:text-lg lg:leading-relaxed">
            We design terrace gardens, farmhouse landscapes, Zen gardens,
            boutique water features, fruit orchards and indoor landscapes with a
            clean, natural and premium finish. From plants and pathways to rock
            waterfalls, designer pots and garden decoration, every detail is
            planned beautifully.
          </p>
        </div>

        <div className="mx-auto mb-7 flex max-w-6xl gap-2 overflow-x-auto pb-2 sm:gap-3 md:mb-10 md:flex-wrap md:justify-center md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          {services.map((service, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveService(index)}
              className={`shrink-0 rounded-full px-3.5 py-2.5 text-[11px] font-black leading-none transition duration-300 min-[390px]:px-4 min-[390px]:text-xs sm:px-5 sm:py-3 sm:text-sm md:text-[15px] ${
                activeService === index
                  ? "bg-green-900 text-white shadow-lg shadow-green-900/25"
                  : "bg-white text-green-900 shadow-sm hover:-translate-y-1 hover:bg-green-100 hover:shadow-md"
              }`}
            >
              <span className="mr-1.5 sm:mr-2">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-6xl rounded-[1.25rem] border border-white bg-white/75 p-2.5 shadow-2xl shadow-green-950/10 backdrop-blur sm:rounded-[1.5rem] sm:p-3 md:rounded-[2rem] md:p-4">
          <div className="grid overflow-hidden rounded-[1.1rem] border border-green-100 bg-white sm:rounded-[1.3rem] lg:min-h-[460px] lg:grid-cols-2 lg:rounded-[1.6rem]">
            <div className="flex h-full flex-col justify-center p-4 min-[390px]:p-5 sm:p-6 md:p-8 lg:p-10">
              <span className="w-fit rounded-full bg-green-100 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-green-800 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.15em]">
                Service Detail
              </span>

              <h3 className="mt-4 text-[1.45rem] font-black leading-[1.15] text-green-950 min-[390px]:text-2xl sm:text-3xl md:mt-5 md:text-4xl">
                {selectedService.title}
              </h3>

              <p className="mt-3 text-[13px] font-medium leading-6 text-gray-600 min-[390px]:text-sm min-[390px]:leading-7 sm:mt-4 sm:text-base sm:leading-8 md:text-[17px]">
                {selectedService.desc}
              </p>

              <div className="relative mt-5 h-[190px] overflow-hidden rounded-[1.1rem] min-[390px]:h-[210px] sm:mt-6 sm:rounded-[1.3rem] md:h-[260px] lg:hidden">
                <img
                  key={selectedService.title}
                  src={selectedService.image}
                  alt={selectedService.title}
                  onError={handleImageError}
                  className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                <div className="absolute left-3 top-3 rounded-full bg-white/20 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[0.1em] text-white backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.12em]">
                  {selectedService.icon} Landscape Service
                </div>

                <div className="absolute bottom-0 left-0 w-full p-3 text-white sm:p-4">
                  <p className="text-[8px] font-black uppercase tracking-[0.13em] text-green-300 sm:text-[10px] sm:tracking-[0.16em]">
                    Selected Service
                  </p>

                  <h3 className="mt-1.5 text-[1.35rem] font-black leading-tight min-[390px]:text-2xl">
                    {selectedService.title}
                  </h3>

                  <p className="mt-2 max-w-md text-[11px] font-medium leading-5 text-green-50 sm:text-xs">
                    {selectedService.short}
                  </p>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 md:mt-7">
                <h4 className="text-base font-black text-green-950 sm:text-lg md:text-xl">
                  What We Include
                </h4>

                <div className="mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3">
                  {selectedService.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 rounded-xl bg-[#eef5e8] px-3 py-2.5 text-[12px] font-bold leading-5 text-gray-700 transition duration-300 hover:bg-green-100 min-[390px]:text-[13px] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm md:text-[15px]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-800 text-[10px] text-white sm:h-7 sm:w-7 sm:text-xs">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-8">
                <a
                  href="#contact"
                  className="rounded-full bg-green-900 px-5 py-3 text-center text-[12px] font-black text-white shadow-lg shadow-green-900/20 transition duration-300 hover:-translate-y-1 hover:bg-green-800 min-[390px]:text-[13px] sm:px-7 sm:text-sm md:text-base"
                >
                  Book Consultation
                </a>

                <a
                  href="#portfolio"
                  className="rounded-full border border-green-900 bg-white px-5 py-3 text-center text-[12px] font-black text-green-950 transition duration-300 hover:-translate-y-1 hover:bg-green-50 min-[390px]:text-[13px] sm:px-7 sm:text-sm md:text-base"
                >
                  View Landscape Work
                </a>
              </div>
            </div>

            <div className="relative m-5 hidden min-h-[330px] overflow-hidden rounded-[1.6rem] lg:block">
              <img
                key={`${selectedService.title}-desktop`}
                src={selectedService.image}
                alt={selectedService.title}
                onError={handleImageError}
                className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>

              <div className="absolute left-5 top-5 rounded-full bg-white/20 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-md">
                {selectedService.icon} Landscape Service
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">
                  Selected Service
                </p>

                <h3 className="mt-2 text-3xl font-black leading-tight xl:text-4xl">
                  {selectedService.title}
                </h3>

                <p className="mt-3 max-w-md text-sm font-medium leading-6 text-green-50 xl:text-[15px]">
                  {selectedService.short}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;