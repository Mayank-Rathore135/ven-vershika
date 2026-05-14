import React, { useEffect, useRef } from "react";
import {
  Leaf,
  Sparkles,
  Map,
  Droplets,
  Flower2,
  Trees,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const Gallery = () => {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "Lawn & Tree Garden",
      category: "Open Garden Planning",
      icon: Leaf,
      image: "src/assets/IMG_9929.JPG",
      description:
        "We design spacious open lawns with shade trees, fruit trees, palm plants, flowering shrubs along boundary walls and natural boulder accents — creating a lush, organized green space that feels alive and well planned.",
    },
    {
      title: "Rock Waterfall",
      category: "Natural Water Feature",
      icon: Droplets,
      image: "src/assets/IMG_9963.JPG",
      description:
        "We build layered rock waterfalls using natural boulders and river stones that cascade into a serene pond. Surrounded by aquatic plants and tropical greenery, the waterfall becomes the most premium and calming feature of the garden.",
    },
    {
      title: "Garden Pathway",
      category: "Stone & Pebble Design",
      icon: Map,
      image: "src/assets/IMG_9976.PNG",
      description:
        "We create elegant garden walkways with flat stone stepping slabs, white marble pebble bases and bamboo groves on the side — guiding you naturally through different zones of the garden with style and calm.",
    },
    {
      title: "Terrace Garden",
      category: "Rooftop Green Space",
      icon: Sparkles,
      image: "src/assets/images.jpg",
      description:
        "We design premium terrace and rooftop gardens with vertical plant walls, fire pit corners, outdoor seating zones, flowering plant borders and warm garden lighting — making your terrace beautiful day and night.",
    },
    {
      title: "Entrance Landscaping",
      category: "Boundary & Front Design",
      icon: Trees,
      image: "src/assets/IMG_9926.jpg",
      description:
        "We landscape villa and farmhouse entrances with shade trees along boundary walls, low ornamental plant borders, natural boulder accents and clean lawn strips — making a great first impression from the very front.",
    },
    {
      title: "Thatched Gazebo",
      category: "Outdoor Sitting Area",
      icon: Flower2,
      image: "src/assets/IMG_9937.JPG",
      description:
        "We design and install bamboo thatched-roof gazebos with raised lounge platforms, sunken seating zones and bamboo grove backdrops — creating a natural outdoor retreat for relaxation and entertainment.",
    },
  ];

  const infiniteProjects = [...projects, ...projects];

  const scrollGallery = (direction) => {
    if (scrollRef.current) {
      const slider = scrollRef.current;

      const scrollAmount =
        window.innerWidth < 390
          ? 270
          : window.innerWidth < 640
            ? 310
            : 420;

      slider.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
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
      id="gallery"
      className="relative overflow-hidden bg-[#f4fbf2] px-0 py-14 md:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-green-100/60 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-lime-100/60 blur-[120px]" />

      <div className="relative z-10 mx-auto mb-9 max-w-7xl px-4 text-center sm:px-6 md:mb-14 lg:px-20">
        <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-[1.6px] text-green-700 shadow-sm sm:px-5 sm:text-sm sm:tracking-[2px]">
          Our Services in Action
        </span>

        <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-black leading-tight text-[#12351c] sm:text-3xl md:mt-6 md:text-5xl">
          What We Build For You
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:mt-5 md:text-lg md:leading-relaxed">
          From rock waterfalls and garden pathways to thatched gazebos and
          terrace gardens — here is a closer look at the work we deliver.
        </p>
      </div>

      <div className="relative group/slider">
        <button
          onClick={() => scrollGallery("left")}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 sm:h-12 sm:w-12 md:left-4 md:h-14 md:w-14 md:opacity-0 md:group-hover/slider:opacity-100"
        >
          <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
        </button>

        <button
          onClick={() => scrollGallery("right")}
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 sm:h-12 sm:w-12 md:right-4 md:h-14 md:w-14 md:opacity-0 md:group-hover/slider:opacity-100"
        >
          <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-0 pb-4 sm:gap-5 md:gap-6 md:pb-6 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {infiniteProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="group relative h-[310px] w-[76vw] shrink-0 overflow-hidden rounded-[1.4rem] bg-gray-900 shadow-xl shadow-green-950/15 transition-all duration-500 hover:-translate-y-2 sm:h-[360px] sm:w-[46vw] sm:rounded-[1.8rem] md:h-[420px] md:w-[36vw] lg:h-[460px] lg:w-[28vw] xl:w-[24vw]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

                <div className="absolute left-4 right-4 top-4 z-10 sm:left-5 sm:right-5 sm:top-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md transition-all duration-500 group-hover:bg-white/20 sm:px-4 sm:py-2 sm:text-[11px]">
                    <Icon size={13} />
                    {project.category}
                  </div>
                </div>

                <div className="absolute left-4 right-4 bottom-4 z-10 translate-y-5 transition-all duration-500 group-hover:-translate-y-8 sm:left-5 sm:right-5 sm:bottom-5 md:group-hover:-translate-y-10">
                  <h3 className="text-xl font-black leading-tight text-white drop-shadow-lg transition-all duration-500 sm:text-2xl md:text-[1.65rem]">
                    {project.title}
                  </h3>

                  <p className="mt-2 max-h-0 max-w-[92%] overflow-hidden text-[11px] font-medium leading-5 text-gray-200 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 sm:text-xs md:mt-3 md:text-sm md:leading-6">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;