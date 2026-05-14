import { useEffect, useRef } from "react";

import projectImg1 from "../assets/IMG_9940.JPG";
import projectImg2 from "../assets/images.jpg";
import projectImg3 from "../assets/fcf0e8a7-295b-4607-b7f0-6cb7d1e172e5.jpg";
import projectImg4 from "../assets/IMG_9975.PNG";
import projectImg5 from "../assets/IMG_9963.JPG";
import projectImg6 from "../assets/IMG_9937.JPG";
import projectImg7 from "../assets/10bae2e6-6c6c-467e-a18a-aec949b1e5ee.jpg";
import projectImg8 from "../assets/88856569-789c-4f2c-b6be-115892db58e7.jpg";
import projectImg9 from "../assets/House.jpeg";
import projectImg10 from "../assets/IMG_9926.jpg";
import projectImg11 from "../assets/IMG_9929.JPG";
import projectImg12 from "../assets/IMG_9936.JPG";
import projectImg13 from "../assets/IMG_9944.JPG";
import projectImg14 from "../assets/IMG_9955.JPG";
import projectImg15 from "../assets/WhatsApp Image 2026-05-13 at 21.55.32.jpeg";

const projects = [
  {
    name: "Modern Backyard Villa",
    category: "Landscape Design",
    image: projectImg1,
  },
  {
    name: "Luxury Terrace Garden",
    category: "Terrace Styling",
    image: projectImg2,
  },
  {
    name: "Indoor Plant Lounge",
    category: "Interior Green Space",
    image: projectImg3,
  },
  {
    name: "Zen Garden Corner",
    category: "Peaceful Garden",
    image: projectImg4,
  },
  {
    name: "Water Feature Design",
    category: "Luxury Waterfall",
    image: projectImg5,
  },
  {
    name: "Green Outdoor Sitting",
    category: "Outdoor Decor",
    image: projectImg6,
  },
  {
    name: "Modern Courtyard Landscape",
    category: "Garden Landscaping",
    image: projectImg7,
  },
  {
    name: "Rock Waterfall Garden",
    category: "Boutique Water Feature",
    image: projectImg8,
  },
  {
    name: "Villa Courtyard Landscape",
    category: "Garden Landscaping",
    image: projectImg9,
  },
  {
    name: "Villa Entrance Landscape",
    category: "Entrance Landscaping",
    image: projectImg10,
  },
  {
    name: "Green Lawn Landscape",
    category: "Lawn Landscaping",
    image: projectImg11,
  },
  {
    name: "White Gravel Garden",
    category: "Garden Landscaping",
    image: projectImg12,
  },
  {
    name: "Modern Courtyard Landscape",
    category: "Courtyard Landscaping",
    image: projectImg1,
  },
  {
    name: "Tropical Lawn Landscape",
    category: "Lawn Landscaping",
    image: projectImg13,
  },
  {
    name: "Tree Corner Garden",
    category: "Garden Landscaping",
    image: projectImg14,
  },
  {
    name: "Modern Villa Lawn",
    category: "Villa Landscaping",
    image: projectImg15,
  },
];

function Portfolio() {
  const portfolioRef = useRef(null);

  const fallbackImage = projectImg5;
  const loopProjects = [...projects, ...projects];

  useEffect(() => {
    const slider = portfolioRef.current;
    if (!slider) return;

    let animationFrame;
    const speed = 2.2;

    const autoScroll = () => {
      slider.scrollLeft += speed;

      const halfScrollWidth = slider.scrollWidth / 2;

      if (slider.scrollLeft >= halfScrollWidth) {
        slider.scrollLeft = slider.scrollLeft - halfScrollWidth;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      id="portfolio"
      className="overflow-hidden bg-[#f4fbf2] px-0 py-14 font-sans sm:py-16 md:py-24 lg:py-28"
    >
      <div className="w-full max-w-none">
        <div className="mx-auto mb-9 max-w-2xl px-4 text-center sm:mb-12 md:mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-600 sm:text-xs md:text-sm">
            Portfolio
          </span>

          <h2 className="mt-3 text-[2rem] font-black leading-tight tracking-tight text-gray-900 min-[390px]:text-4xl md:text-5xl lg:text-6xl">
            Our <span className="text-green-700">Work</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[13px] font-medium leading-6 text-gray-600 min-[390px]:text-sm sm:text-base md:mt-5 md:text-lg md:leading-8">
            A collection of real landscape projects — waterfalls, terrace
            gardens, gazebos, decking and complete outdoor transformations.
          </p>
        </div>

        <div className="relative">
          <div
            ref={portfolioRef}
            className="flex gap-4 overflow-x-auto px-0 pb-10 min-[390px]:gap-5 md:gap-6 md:pb-12 [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {loopProjects.map((project, index) => (
              <div
                key={index}
                className="group relative h-[330px] w-[255px] shrink-0 overflow-hidden rounded-[1.35rem] bg-gray-900 shadow-lg transition-all duration-500 hover:-translate-y-2 min-[360px]:w-[275px] min-[390px]:h-[350px] min-[390px]:w-[300px] sm:h-[390px] sm:w-[330px] sm:rounded-[1.8rem] md:h-[440px] md:w-[360px] lg:w-[390px] xl:w-[410px]"
              >
                <img
                  src={project.image || fallbackImage}
                  alt={project.name}
                  className="h-full w-full object-cover object-center opacity-100 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImage;
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

                <div className="absolute left-3 top-3 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md min-[390px]:left-4 min-[390px]:top-4 min-[390px]:text-[9px] sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-[11px]">
                  {project.category}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 text-white min-[390px]:p-5 md:p-7">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.16em] text-green-400 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                    GreenAura Project
                  </p>

                  <h3 className="text-[1.35rem] font-black leading-tight min-[390px]:text-2xl md:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-[92%] text-[12px] font-medium leading-5 text-gray-200 opacity-100 sm:mt-4 sm:text-sm sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    {project.category} project with a clean, natural and
                    premium landscaping finish.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;