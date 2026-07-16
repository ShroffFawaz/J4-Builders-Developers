import { useState } from "react";
import { GoldDivider } from "../components/ui/GoldDivider";

type ProjectCategory = "All" | "Residential" | "Commercial" | "Interiors" | "Services";

const projects = [
  {
    id: 1,
    title: "Bari Khan Residency",
    category: "Residential",
    location: "GM Nagar, Back Side of owaisi hospital, Hyderabad",
    year: "2024",
    area: "22,464 sqft",
    img: "/j4-assets/site-images/Bari-Khan-Residency.png",
    featured: true,
  },
  {
    id: 2,
    title: "Aziz Residency",
    category: "Residential",
    location: "Yakutpura Colony, Rein Bazar, Hyderabad",
    year: "2022",
    area: "9,000 sqft",
    img: "/j4-assets/site-images/Aziz-Residency.jpeg",
    featured: true,
  },
  {
    id: 3,
    title: "Ali Residency",
    category: "Residential",
    location: "Santosh Nagar, Hyderabad",
    year: "2020",
    area: "20,475 sqft",
    img: "/j4-assets/site-images/Ali-Residency.png",
    featured: false,
  },
  {
    id: 4,
    title: "Mariya Residency",
    category: "Residential",
    location: "Santosh Nagar, Hyderabad",
    year: "2019",
    area: "13,200 sqft",
    img: "/j4-assets/site-images/Mariya-Residency.png",
    featured: false,
  },
  {
    id: 5,
    title: "Sana Residency",
    category: "Residential",
    location: "Santosh Nagar, Hyderabad",
    year: "2026",
    area: "15,768 sqft",
    img: "/j4-assets/site-images/Sana-Residency.jpeg",
    featured: false,
  },
  {
    id: 6,
    title: "Taiba Residency",
    category: "Residential",
    location: "Rein Bazar Madannapet, Hyderabad",
    year: "2015",
    area: "19,000 sq ft",
    img: "/j4-assets/site-images/Taiba-Residency.jpeg",
    featured: false,
  },
  {
    id: 8,
    title: "G+2",
    category: "Residential",
    location: "Imam bada Yakutpura, Hyderabad",
    year: "2022",
    area: "3654 sq ft",
    img: "/j4-assets/site-images/G2-Building.png",
    featured: false,
  },
  {
    id: 9,
    title: "Duplex",
    category: "Residential",
    location: "Rein Bazar, Hyderabad",
    year: "2021",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Duplex.png",
    featured: false,
  },
  {
    id: 119,
    title: "Mariyam Enclave",
    category: "Residential",
    location: "Santosh Nagar, Hyderabad",
    year: "2012",
    area: "13,200 sq ft",
    img: "/j4-assets/site-images/Construction12.png",
    featured: false,
  },
  {
    id: 10,
    title: "Commercial complex",
    category: "Commercial",
    location: "Hyderabad",
    year: "2018",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Commercial-1.png",
    featured: false,
  },
  {
    id: 11,
    title: "Commercial shops + Flats",
    category: "Commercial",
    location: "Hyderabad",
    year: "2017",
    area: "2500 sq ft",
    img: "/j4-assets/site-images/Commercial.png",
    featured: false,
  },
  {
    id: 12,
    title: "Commercial Shops + Appartments",
    category: "Commercial",
    location: "Hyderabad",
    year: "2015",
    area: "1500 sq ft",
    img: "/j4-assets/site-images/Commercial-2.png",
    featured: false,
  },
  {
    id: 13,
    title: "Bed Room",
    category: "Interiors",
    location: "Hyderabad",
    year: "2024",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Interiors-1.jpeg",
    featured: false,
  },
  {
    id: 14,
    title: "Bed Room",
    category: "Interiors",
    location: "Hyderabad",
    year: "2024",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Interiors-2.jpeg",
    featured: false,
  },
  {
    id: 15,
    title: "Bed Room",
    category: "Interiors",
    location: "Hyderabad",
    year: "2024",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Interiors-3.jpeg",
    featured: false,
  },
  {
    id: 16,
    title: "Kitchen",
    category: "Interiors",
    location: "Hyderabad",
    year: "2024",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Interiors-4.jpeg",
    featured: false,
  },
  {
    id: 161,
    title: "Kitchen",
    category: "Interiors",
    location: "Hyderabad",
    year: "2024",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Interiors-kitchen.jpeg",
    featured: false,
  },
  {
    id: 17,
    title: "Kitchen",
    category: "Interiors",
    location: "Hyderabad",
    year: "2024",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Interiors-5-kitchen.jpeg",
    featured: false,
  },
  {
    id: 18,
    title: "Living Room",
    category: "Interiors",
    location: "Hyderabad",
    year: "2024",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Interiors-6.jpeg",
    featured: false,
  },
  {
    id: 19,
    title: "Living Room",
    category: "Interiors",
    location: "Hyderabad",
    year: "2024",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Interiors-7.jpeg",
    featured: false,
  },
  {
    id: 20,
    title: "Drawing Room",
    category: "Interiors",
    location: "Hyderabad",
    year: "2024",
    area: "1200 sq ft",
    img: "/j4-assets/site-images/Interiors-8.jpeg",
    featured: false,
  },
  {
    id: 21,
    title: "Designing & Planning Services",
    category: "Services",
    location: "Any location in Telangana",
    img: "/j4-assets/site-images/Design-and-Plannings.png",
    description: "Transforming ideas into practical, buildable plans through detailed design, space planning, and project development.",
    featured: false,
  },
  {
    id: 22,
    title: "Structural & Architectural Design",
    category: "Services",
    location: "Any location in Telangana",
    img: "/j4-assets/site-images/Structual-Design.png",
    description: "Delivering architectural creativity and structural integrity through professionally engineered design solutions.",
    featured: false,
  },
  {
    id: 23,
    title: "Construction and Permission Service",
    category: "Services",
    location: "Any location in Telangana",
    img: "/j4-assets/site-images/Construction-and-Premisson.png",
    description: "Managing approvals, permissions, and construction execution to ensure a smooth project delivery process.",
    featured: false,
  }
];

export function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const categories: ProjectCategory[] = ["All", "Residential", "Commercial", "Interiors", "Services"];

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-background text-foreground pt-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="font-['DM_Mono'] text-xs tracking-[0.4em] text-primary uppercase mb-4">Our Portfolio</p>
            <h1 className="font-['Playfair_Display'] text-5xl lg:text-6xl font-700 text-foreground leading-tight">
              Selected<br />Projects
            </h1>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-['DM_Mono'] text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 ${filter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <GoldDivider />
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {filtered.map(project => (
            <div key={project.id} className="group bg-background overflow-hidden cursor-pointer">
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="font-['DM_Mono'] text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-3 py-1">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 border-t border-border group-hover:bg-card transition-colors duration-300">
                <h3 className="font-['Playfair_Display'] text-xl font-600 text-foreground mb-2">{project.title}</h3>
                {'description' in project && project.description ? (
                  <p className="font-['DM_Sans'] text-sm text-muted-foreground leading-relaxed mt-2">
                    {project.description}
                  </p>
                ) : (
                  <>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="font-['DM_Mono'] text-xs text-muted-foreground tracking-wider">{project.location}</span>
                    </div>
                    <div className="flex justify-between mt-3 pt-3 border-t border-border">
                      <span className="font-['DM_Mono'] text-xs text-muted-foreground">{project.year}</span>
                      <span className="font-['DM_Mono'] text-xs text-primary">{project.area}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-['DM_Sans'] text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
