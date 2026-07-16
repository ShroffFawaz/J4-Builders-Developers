import { Award, Users, Building2, Clock } from "lucide-react";
import { GoldDivider } from "../components/ui/GoldDivider";

export function AboutPage() {
  const values = [
    { icon: Award, title: "Uncompromising Quality", desc: "Every joint, surface, and system is held to standards that outlast industry benchmarks." },
    { icon: Users, title: "Collaborative Approach", desc: "We work alongside architects, engineers, and clients as one unified team toward a shared vision." },
    { icon: Building2, title: "Design Integrity", desc: "Structural decisions are never made at the expense of architectural intent or lasting beauty." },
    { icon: Clock, title: "Reliable Delivery", desc: "Twenty-five years of on-time project completions. Our word is the strongest material we use." },
  ];

  const team = [
    { name: "Mohammed Abdul Jawad", role: "Founder & Managing Director", img: "/j4-assets/jawad.png" },
    { name: "Shaik Mushtaq Ahmed", role: "Chief Architect and Interior Designer", img: "/j4-assets/ahmed.jpeg" },
    { name: "Sayed Abdul Qadeer", role: "Head of Engineering and Structural Design Engineer", img: "/j4-assets/qadeer.jpeg" },
  ];

  return (
    <div className="bg-background text-foreground pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-end overflow-hidden bg-card">
        <img
          src="/j4-assets/site-images/aboutpageMain.png"
          alt="J4 Builders team at work"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
          <p className="font-['DM_Mono'] text-xs tracking-[0.4em] text-primary uppercase mb-3">Our Story</p>
          <h1 className="font-['Playfair_Display'] text-5xl lg:text-6xl font-700 text-foreground">About J4</h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-['DM_Mono'] text-xs tracking-[0.4em] text-primary uppercase mb-6">Since 2001</p>
          <h2 className="font-['Playfair_Display'] text-4xl font-600 text-foreground mb-6 leading-tight">
            Crafted from<br />the Ground Up
          </h2>
          <GoldDivider />
          <p className="font-['DM_Sans'] text-base text-muted-foreground leading-relaxed mb-6 font-300">
            J4 Builders and Developers was founded in Hyderabad with a single conviction: that the built environment deserves the same reverence as any fine art. From our first residential project in 2001, we have grown into one of Hyderabad's most trusted construction firms.
          </p>
          <p className="font-['DM_Sans'] text-base text-muted-foreground leading-relaxed font-300">
            Our portfolio spans private residences of quiet distinction, commercial complexes of civic presence, and infrastructure works of regional significance — all unified by an insistence on materials, methods, and people who refuse to accept the ordinary.
          </p>
        </div>
        <div className="relative">
          <img
            src="/j4-assets/site-images/aboutpage-subimage.png"
            alt="J4 Builders construction quality"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary px-8 py-6 hidden lg:block">
            <div className="font-['Playfair_Display'] text-4xl font-700 text-primary-foreground">25+</div>
            <div className="font-['DM_Mono'] text-[10px] tracking-[0.25em] text-primary-foreground/80 uppercase mt-1">Years Building Trust</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-['DM_Mono'] text-xs tracking-[0.4em] text-primary uppercase mb-4">Our Principles</p>
            <h2 className="font-['Playfair_Display'] text-4xl font-600 text-foreground">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-8 hover:bg-secondary transition-colors duration-300">
                <Icon size={28} className="text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-['Playfair_Display'] text-xl font-600 text-foreground mb-3">{title}</h3>
                <p className="font-['DM_Sans'] text-sm text-muted-foreground leading-relaxed font-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="mb-16">
          <p className="font-['DM_Mono'] text-xs tracking-[0.4em] text-primary uppercase mb-4">The People</p>
          <h2 className="font-['Playfair_Display'] text-4xl font-600 text-foreground">Leadership Team</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(({ name, role, img }) => (
            <div key={name} className="group">
              <div className="overflow-hidden bg-secondary mb-5 aspect-[4/5]">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="font-['Playfair_Display'] text-lg font-600 text-foreground">{name}</div>
              <div className="font-['DM_Mono'] text-xs tracking-[0.15em] text-primary uppercase mt-1">{role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
