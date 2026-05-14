import React, { useState } from "react";
import { Check, Leaf } from "lucide-react";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState(1);

  const plans = [
    {
      name: "Basic Care",
      price: "₹4,999",
      desc: "Best for small gardens and regular lawn care.",
      popular: false,
      features: [
        "Lawn trimming",
        "Basic plant care",
        "Weed removal",
        "Monthly garden checkup",
      ],
    },
    {
      name: "Premium Design",
      price: "₹14,999",
      desc: "Perfect for complete garden design and setup.",
      popular: true,
      features: [
        "Custom garden design",
        "Plant selection",
        "Pathway planning",
        "Lighting suggestions",
        "Professional installation",
      ],
    },
    {
      name: "Full Maintenance",
      price: "₹9,999",
      desc: "Ideal for keeping your garden fresh every month.",
      popular: false,
      features: [
        "Weekly maintenance",
        "Soil and plant health check",
        "Seasonal plant care",
        "Lawn and hedge cutting",
      ],
    },
  ];

  const scrollToContact = (e) => {
    e.preventDefault();

    const contactSection = document.querySelector("#contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const PricingCard = ({ plan }) => {
    return (
      <div
        className={`relative flex h-full flex-col rounded-[32px] border p-7 transition-all duration-500 lg:p-8 lg:hover:-translate-y-3 ${
          plan.popular
            ? "border-green-600 bg-[#12351c] text-white shadow-[0_30px_90px_rgba(18,53,28,0.28)]"
            : "border-green-100 bg-white text-[#12351c] shadow-[0_20px_60px_rgba(22,59,31,0.08)]"
        }`}
      >
        {plan.popular && (
          <span className="absolute right-7 top-7 rounded-full bg-lime-400 px-4 py-1.5 text-xs font-black uppercase tracking-[1.5px] text-[#12351c]">
            Popular
          </span>
        )}

        <div
          className={`mb-7 flex h-16 w-16 items-center justify-center rounded-2xl ${
            plan.popular
              ? "bg-white text-green-700"
              : "bg-green-50 text-green-700"
          }`}
        >
          <Leaf size={30} />
        </div>

        <h3 className="text-2xl font-black">{plan.name}</h3>

        <p
          className={`mt-3 min-h-[56px] leading-relaxed ${
            plan.popular ? "text-green-100" : "text-gray-600"
          }`}
        >
          {plan.desc}
        </p>

        <div className="my-8">
          <span className="text-4xl font-black">{plan.price}</span>
          <span
            className={`ml-2 text-sm ${
              plan.popular ? "text-green-100" : "text-gray-500"
            }`}
          >
            starting from
          </span>
        </div>

        <ul className="space-y-4">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  plan.popular
                    ? "bg-lime-400 text-[#12351c]"
                    : "bg-green-100 text-green-700"
                }`}
              >
                <Check size={15} strokeWidth={3} />
              </span>

              <span
                className={`text-sm font-medium leading-6 ${
                  plan.popular ? "text-green-50" : "text-gray-600"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={scrollToContact}
          className={`mt-9 flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-black uppercase tracking-[1.5px] transition-all duration-300 ${
            plan.popular
              ? "bg-white text-green-700 hover:bg-lime-400 hover:text-[#12351c]"
              : "bg-green-700 text-white hover:bg-[#12351c]"
          }`}
        >
          Get Started
        </a>
      </div>
    );
  };

  return (
    <section id="pricing" className="bg-white px-5 py-20 md:px-10 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="rounded-full bg-green-50 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-green-700 md:text-sm">
            Pricing Plans
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-[#12351c] md:text-5xl">
            Choose the Right Plan for Your Garden
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
            Simple landscaping packages for garden care, full design, and
            monthly maintenance.
          </p>
        </div>

        <div className="mb-7 grid grid-cols-3 gap-2 rounded-full bg-green-50 p-2 lg:hidden">
          {plans.map((plan, index) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setActivePlan(index)}
              className={`rounded-full px-3 py-3 text-[11px] font-black uppercase tracking-[0.08em] transition ${
                activePlan === index
                  ? "bg-green-800 text-white shadow-lg shadow-green-900/15"
                  : "text-green-900 hover:bg-white"
              }`}
            >
              {plan.name.split(" ")[0]}
            </button>
          ))}
        </div>

        <div className="lg:hidden">
          <PricingCard plan={plans[activePlan]} />
        </div>

        <div className="hidden gap-7 lg:grid lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;