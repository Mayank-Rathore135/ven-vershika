import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Star,
  Users,
  Home,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    customerAddress: "",
    projectType: "",
    message: "",
  });

  const phoneNumber = "919876543210";

  const studioAddress = "Shop No. 12, Main Market, Karnal, Haryana, India";

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    studioAddress
  )}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `*New Garden Inquiry* 🌿\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Customer Address:* ${formData.customerAddress}\n*Project Type:* ${formData.projectType}\n*Studio Address:* ${studioAddress}\n\n*Project Details:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@vanvarshika.com",
      href: "mailto:hello@vanvarshika.com",
    },
    {
      icon: MapPin,
      title: "Visit Studio",
      detail: studioAddress,
      href: mapLink,
    },
  ];

  const benefits = [
    "Free Consultation",
    "Expert Architects",
    "Lifetime Support",
  ];

  return (
    <section
      id="contact"
      className="relative mx-2 my-4 min-h-screen overflow-hidden rounded-[1.4rem] border border-green-500/20 bg-[#0a1a14] px-3 py-12 text-white shadow-[0_0_35px_rgba(34,197,94,0.13)] sm:mx-4 sm:px-5 sm:py-16 md:mx-8 md:rounded-[3rem] md:px-6 md:py-24 lg:rounded-[4rem]"
    >
      <div className="absolute -left-28 -top-28 h-[260px] w-[260px] rounded-full bg-green-900/25 blur-[80px] sm:h-[420px] sm:w-[420px] sm:blur-[110px]" />
      <div className="absolute -bottom-24 -right-24 h-[240px] w-[240px] rounded-full bg-emerald-900/20 blur-[80px] sm:h-[380px] sm:w-[380px] sm:blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="absolute right-0 top-0 hidden flex-col items-end gap-4 animate-bounce-slow lg:flex">
          <div className="flex items-center gap-3 rounded-[1.7rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500">
              <Star size={20} fill="currentColor" />
            </div>

            <div>
              <p className="text-sm font-black text-white">4.9/5 Rating</p>
              <p className="text-[10px] uppercase tracking-tighter text-gray-400">
                Trusted by Clients
              </p>
            </div>
          </div>

          <div className="mr-8 flex items-center gap-3 rounded-[1.7rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-500">
              <Users size={20} />
            </div>

            <div>
              <p className="text-sm font-black text-white">500+ Projects</p>
              <p className="text-[10px] uppercase tracking-tighter text-gray-400">
                Completed in Haryana
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 text-center sm:mb-12 lg:mb-16 lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-green-400 sm:text-xs">
            <Sparkles size={12} className="sm:h-[14px] sm:w-[14px]" />
            Connect with Nature
          </div>

          <h2 className="mx-auto mt-5 max-w-2xl text-[1.85rem] font-black leading-[1.08] tracking-tight text-white min-[380px]:text-[2.1rem] sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
            Let's build your{" "}
            <span className="block bg-gradient-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent">
              Green Masterpiece.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base lg:mx-0">
            Share your location, garden type and project details. Our team will
            connect with you for a free consultation.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 lg:col-span-5 lg:space-y-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md sm:rounded-[2.2rem] sm:p-6 md:rounded-[3rem] md:p-8">
              <p className="mb-5 text-sm leading-7 text-gray-400 sm:mb-8 sm:text-base md:text-lg">
                Transforming urban spaces into living ecosystems. Fill out the
                form with your address and project details, and our design
                experts will reach out to you within 24 hours.
              </p>

              <div className="space-y-3.5 sm:space-y-5 md:space-y-6">
                {contactInfo.map((item, idx) => (
                  <a
                    href={item.href}
                    key={idx}
                    target={item.title === "Visit Studio" ? "_blank" : undefined}
                    rel={item.title === "Visit Studio" ? "noreferrer" : undefined}
                    className="group flex items-start gap-3 rounded-[1.15rem] border border-white/5 bg-white/[0.03] p-3 transition-all hover:border-green-500/30 hover:bg-green-500/10 sm:items-center sm:gap-5 sm:rounded-[1.5rem] sm:p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-all group-hover:scale-110 group-hover:bg-green-600 sm:h-12 sm:w-12 sm:rounded-2xl">
                      <item.icon size={18} className="text-white" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500 sm:text-xs">
                        {item.title}
                      </p>
                      <p className="mt-0.5 break-words text-[13px] font-medium leading-5 text-white sm:text-base sm:leading-6 md:text-lg">
                        {item.detail}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-2.5 px-1 min-[420px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-4 sm:px-4">
              {benefits.map((text) => (
                <div
                  key={text}
                  className={`flex items-center gap-2 rounded-full border border-green-500/10 bg-green-500/10 px-3 py-2 text-[12px] font-medium text-green-400/90 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-sm ${
                    text === "Lifetime Support"
                      ? "min-[420px]:col-span-2 sm:order-last"
                      : ""
                  }`}
                >
                  <CheckCircle2 size={14} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4 shadow-2xl backdrop-blur-xl sm:rounded-[2.2rem] sm:p-6 md:rounded-[3rem] md:p-12"
            >
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-transparent focus:border-green-500 focus:bg-white/10 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                    placeholder=" "
                  />

                  <label className="absolute left-4 top-3.5 origin-left -translate-y-7 scale-75 text-xs font-bold tracking-wider text-green-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-green-500 sm:left-5 sm:top-4 sm:text-sm sm:peer-focus:-translate-y-8">
                    YOUR NAME
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-transparent focus:border-green-500 focus:bg-white/10 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                    placeholder=" "
                  />

                  <label className="absolute left-4 top-3.5 origin-left -translate-y-7 scale-75 text-xs font-bold tracking-wider text-green-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-green-500 sm:left-5 sm:top-4 sm:text-sm sm:peer-focus:-translate-y-8">
                    EMAIL ADDRESS
                  </label>
                </div>
              </div>

              <div className="relative mt-6 sm:mt-8">
                <input
                  type="text"
                  name="customerAddress"
                  required
                  value={formData.customerAddress}
                  onChange={handleChange}
                  className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 pr-12 text-sm text-white outline-none transition-all placeholder:text-transparent focus:border-green-500 focus:bg-white/10 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                  placeholder=" "
                />

                <label className="absolute left-4 top-3.5 origin-left -translate-y-7 scale-75 text-xs font-bold tracking-wider text-green-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-green-500 sm:left-5 sm:top-4 sm:text-sm sm:peer-focus:-translate-y-8">
                  CUSTOMER ADDRESS
                </label>

                <Home
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400/70"
                />
              </div>

              <div className="relative mt-6 sm:mt-8">
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-gray-300 outline-none transition-all focus:border-green-500 focus:bg-white/10 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                >
                  <option value="" className="bg-[#0a1a14] text-white">
                    What are we building?
                  </option>
                  <option
                    value="Terrace Garden"
                    className="bg-[#0a1a14] text-white"
                  >
                    Terrace Garden
                  </option>
                  <option
                    value="Vertical Garden"
                    className="bg-[#0a1a14] text-white"
                  >
                    Vertical Garden
                  </option>
                  <option
                    value="Luxury Landscape"
                    className="bg-[#0a1a14] text-white"
                  >
                    Luxury Landscape
                  </option>
                  <option
                    value="Maintenance"
                    className="bg-[#0a1a14] text-white"
                  >
                    Garden Maintenance
                  </option>
                </select>
              </div>

              <div className="relative mt-6 sm:mt-8">
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-transparent focus:border-green-500 focus:bg-white/10 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base"
                  placeholder=" "
                ></textarea>

                <label className="absolute left-4 top-3.5 origin-left -translate-y-7 scale-75 text-xs font-bold tracking-wider text-green-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-green-500 sm:left-5 sm:top-4 sm:text-sm sm:peer-focus:-translate-y-8">
                  PROJECT DETAILS
                </label>
              </div>

              <button
                type="submit"
                className="group mt-7 flex w-full items-center justify-center gap-3 overflow-hidden rounded-[1.15rem] bg-green-600 px-5 py-4 text-[12px] font-black uppercase tracking-[0.14em] text-[#0a1a14] transition-all hover:bg-green-400 hover:shadow-[0_0_40px_8px_rgba(34,197,94,0.3)] active:scale-95 min-[380px]:text-sm sm:mt-10 sm:gap-4 sm:rounded-[1.7rem] sm:px-8 sm:py-5 sm:text-base"
              >
                <span>Send Message</span>

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a1a14]/20 transition-transform group-hover:translate-x-2 group-hover:rotate-12">
                  <Send size={14} />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes bounce-slow {
              0%, 100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-10px);
              }
            }

            .animate-bounce-slow {
              animation: bounce-slow 4s ease-in-out infinite;
            }
          `,
        }}
      />
    </section>
  );
}

export default Contact;