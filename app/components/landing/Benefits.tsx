"use client";
import { useRef } from "react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    title: "Holistic Care Plans",
    description:
      "Personalized movement, nutrition, and wellness routines developed with geriatric specialists.",
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1080&q=80",
  },
  {
    title: "Weekly Progress Reports",
    description:
      "Stay in control with bite-sized recaps, vitals, and recommendations delivered to your inbox.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1080&q=80",
  },
  {
    title: "Family-First Coordination",
    description:
      "Our care concierges align schedules, check-ins, and reminders with your family’s availability.",
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1080&q=80",
  },
  {
    title: "Trusted Local Experts",
    description:
      "Verified physiotherapists, dieticians, and mental wellness coaches work directly with your parents.",
    image:
      "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=1080&q=80",
  },
];

const Benefits = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.firstElementChild?.clientWidth ?? 280;
    const offset = slideWidth + 24; // card width + gap

    slider.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 lg:px-10 max-w-6xl mx-auto py-16 space-y-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/80">
          Benefits
        </p>
        <h2 className="text-3xl md:text-[40px] font-semibold leading-tight mt-3 dark:text-white">
          A concierge layer that keeps parents thriving from anywhere
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 mt-2">
          Give them the care they deserve through guided routines, proactive
          monitoring, and human experts who understand cultural nuances.
        </p>
      </div>

      <div className="space-y-6">
        <div
          ref={sliderRef}
          className={`flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth ${styles.slider}`}
        >
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="relative min-w-[70vw] sm:min-w-[260px] lg:min-w-[300px] h-[420px] rounded-3xl overflow-hidden shrink-0 snap-start bg-gray-900 text-white"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent p-6">
                
                <h3 className="text-2xl font-semibold mt-2">{benefit.title}</h3>
                <p className="text-sm mt-2 text-gray-200">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="h-12 w-12 rounded-full border border-white/20 bg-white text-gray-900 shadow-lg transition hover:-translate-y-[2px] disabled:opacity-50 dark:bg-gray-900 dark:text-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="h-12 w-12 rounded-full border border-white/20 bg-white text-gray-900 shadow-lg transition hover:-translate-y-[2px] disabled:opacity-50 dark:bg-gray-900 dark:text-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;