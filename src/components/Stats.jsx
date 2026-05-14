import React, { useState, useEffect, useRef } from "react";

const PremiumGardenIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className={className}
  >
    <path d="M12 22V10" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12 10c0 0-4-8-9-5 0 3 9 5 9 5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 10c0 0 5-10 10-6 0 4-10 6-10 6z"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.08"
    />
  </svg>
);

const PremiumClientIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className={className}
  >
    <circle cx="9" cy="8" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21v-2a5 5 0 0 1 9.5-1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="11" r="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    <path d="M13.5 21v-1.5a4.5 4.5 0 0 1 7.5-1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
  </svg>
);

const PremiumExperienceIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className={className}
  >
    <path d="M6 3h12M6 21h12" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M8 3v4.5c0 2 2.5 4.5 4 6 1.5-1.5 4-4 4-6V3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 21v-4.5c0-2 2.5-4.5 4-6 1.5 1.5 4 4 4 6V21"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.08"
    />
  </svg>
);

const PremiumQualityIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className={className}
  >
    <path
      d="M12 2l2.4 5.4 5.6.8-4 4.2 1 5.6-5-2.8-5 2.8 1-5.6-4-4.2 5.6-.8L12 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
  </svg>
);

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  const target = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (!entry.isIntersecting) {
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

const StatCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#F0EBE1] bg-white px-3 py-5 text-center shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-700 ease-out hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] sm:rounded-3xl sm:px-8 sm:py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCFBF8] to-transparent opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"></div>

      <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FCFBF8] shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] ring-1 ring-[#F0EBE1] transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-white group-hover:ring-[#D4AF37]/50 group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] sm:mb-8 sm:h-20 sm:w-20 sm:rounded-2xl">
        <Icon className="h-6 w-6 text-[#B89C50] transition-all duration-700 group-hover:scale-110 group-hover:text-[#D4AF37] sm:h-10 sm:w-10" />
      </div>

      <h3 className="relative z-10 mb-2 text-2xl font-black tracking-tight text-[#112318] transition-all duration-700 ease-out group-hover:text-[#1A3622] group-hover:scale-105 sm:mb-3 sm:text-5xl">
        <Counter value={item.number} />
      </h3>

      <div className="relative z-10 mx-auto inline-block overflow-hidden pb-1 sm:pb-2">
        <p className="text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-[#8C7A5B] transition-colors duration-500 group-hover:text-[#B89C50] sm:text-sm sm:tracking-[0.2em]">
          {item.label}
        </p>
        <div className="absolute bottom-0 left-0 h-[2px] w-full -translate-x-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-0"></div>
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: PremiumGardenIcon,
      number: "500+",
      label: "Gardens Designed",
    },
    {
      icon: PremiumClientIcon,
      number: "1200+",
      label: "Happy Clients",
    },
    {
      icon: PremiumExperienceIcon,
      number: "15+",
      label: "Years Experience",
    },
    {
      icon: PremiumQualityIcon,
      number: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FCFBF8] px-4 py-12 sm:px-6 sm:py-20 lg:px-20 lg:py-24">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03),transparent_50%)]"></div>
      <div className="absolute bottom-0 left-0 h-full w-full bg-[radial-gradient(circle_at_bottom_left,rgba(17,35,24,0.02),transparent_50%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {stats.map((item, index) => (
            <StatCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;