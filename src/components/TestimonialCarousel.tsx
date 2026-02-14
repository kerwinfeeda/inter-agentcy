"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Inter Agentcy gave me the tools and credibility I needed to compete with established agencies. My client portfolio has grown 3x in six months.",
    name: "Carlos Mendes",
    role: "Licensed Agent, Brazil",
  },
  {
    quote: "The compliance suite alone is worth the subscription. No more guessing about FIFA regulations — everything is built in.",
    name: "Amina Okafor",
    role: "Licensed Agent, Nigeria",
  },
  {
    quote: "As a club, having verified agents with proper compliance documentation has streamlined our transfer operations significantly.",
    name: "Thomas Eriksson",
    role: "Sporting Director, Sweden",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Agents <span className="gradient-text">Worldwide</span>
        </h2>
        <div className="relative card rounded-2xl p-8 md:p-12">
          <Quote className="w-10 h-10 text-accent/30 absolute top-6 left-6" />
          <div className="text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-white">{testimonials[current].name}</p>
              <p className="text-sm text-foreground-muted">{testimonials[current].role}</p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="p-2 card rounded-full hover:bg-background-elevated transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-accent w-6" : "bg-white/20"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="p-2 card rounded-full hover:bg-background-elevated transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
