import { ArrowRight, ChevronDown } from "lucide-react";
import { Page } from "../types";

export function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "200+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "100+", label: "Expert Professionals" },
  ];

  const services = [
    {
      number: "01",
      title: "Residential Construction",
      desc: "Bespoke homes designed for those who demand nothing less than the finest craftsmanship and enduring quality.",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&auto=format",
    },
    {
      number: "02",
      title: "Commercial Development",
      desc: "Purpose-built commercial spaces that balance architectural ambition with functional excellence.",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop&auto=format",
    },
    {
      number: "03",
      title: "Design-to-Delivery Construction Services",
      desc: "Integrated planning, structural engineering, construction execution, and approval services delivered with precision and seamless coordination.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format",
    },
    {
      number: "04",
      title: "Interiors",
      desc: "Luxury interior solutions that combine aesthetic elegance, spatial functionality, and meticulous execution.",
      img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop&auto=format",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-end">
        <div className="absolute inset-0 bg-[#0C0B09]">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=1000&fit=crop&auto=format"
            alt="J4 Builders construction site at dusk"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B09] via-[#0C0B09]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 w-full">
          <div className="max-w-3xl">
            <p className="font-['DM_Mono'] text-xs tracking-[0.4em] text-primary uppercase mb-6">
              Est. 2001 — Hyderabad, India
            </p>
            <h1 className="font-['Playfair_Display'] text-6xl lg:text-8xl font-900 leading-[0.95] text-foreground mb-8">
              Building<br />
              <em className="text-primary not-italic">Legacies</em><br />
              That Endure
            </h1>
            <p className="font-['DM_Sans'] text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10 font-300">
              J4 Builders and Developers Delivering landmark residences, commercial spaces, and infrastructure projects designed for long-term value and distinction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("projects")}
                className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-['DM_Sans'] text-sm tracking-[0.15em] uppercase hover:bg-primary/90 transition-all duration-300"
              >
                View Our Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => navigate("contact")}
                className="flex items-center gap-3 border border-foreground/30 text-foreground px-8 py-4 font-['DM_Sans'] text-sm tracking-[0.15em] uppercase hover:border-primary hover:text-primary transition-all duration-300"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        <a href="#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={20} className="text-muted-foreground" />
        </a>
      </section>

      {/* Stats */}
      <section id="stats" className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
          {stats.map(({ value, label }) => (
            <div key={label} className="px-8 py-12 text-center">
              <div className="font-['Playfair_Display'] text-5xl font-700 text-primary mb-2">{value}</div>
              <div className="font-['DM_Mono'] text-xs tracking-[0.2em] text-muted-foreground uppercase">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="mb-16">
          <p className="font-['DM_Mono'] text-xs tracking-[0.4em] text-primary uppercase mb-4">What We Build</p>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-600 text-foreground max-w-lg leading-tight">
            Our Areas of Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map(({ number, title, desc, img }) => (
            <div key={number} className="group bg-background hover:bg-card transition-colors duration-500 overflow-hidden">
              <div className="h-56 overflow-hidden bg-secondary">
                <img src={img} alt={title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="p-8">
                <div className="font-['DM_Mono'] text-xs tracking-[0.3em] text-primary mb-3">{number}</div>
                <h3 className="font-['Playfair_Display'] text-2xl font-600 text-foreground mb-3">{title}</h3>
                <p className="font-['DM_Sans'] text-sm text-muted-foreground leading-relaxed font-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 border border-primary-foreground/30 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border border-primary-foreground/20 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-['DM_Mono'] text-xs tracking-[0.4em] uppercase mb-6 text-primary-foreground/70">Ready to Build?</p>
          <h2 className="font-['Playfair_Display'] text-4xl lg:text-6xl font-700 text-primary-foreground mb-8 leading-tight">
            Your Vision.<br />Our Craft.
          </h2>
          <button
            onClick={() => navigate("contact")}
            className="font-['DM_Sans'] text-sm tracking-[0.2em] uppercase bg-primary-foreground text-primary px-10 py-4 hover:bg-primary-foreground/90 transition-colors duration-300"
          >
            Begin the Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
