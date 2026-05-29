import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Page, NAV_LINKS } from "../../types";

function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrollY;
}

export function Navbar({ current, navigate }: { current: Page; navigate: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollY();
  const scrolled = scrollY > 40;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0C0B09]/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <button
          onClick={() => navigate("home")}
          className="flex flex-col leading-none group"
        >
          <span className="font-['Playfair_Display'] text-xl font-700 text-foreground tracking-widest uppercase group-hover:text-primary transition-colors duration-300">
            J4 BUILDERS & DEVELOPERS
          </span>
          <span className="font-['DM_Mono'] text-[9px] tracking-[0.25em] text-muted-foreground uppercase">
            <div>CONSTRUCTION | INTERIORS | CONSULTATION</div>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`font-['DM_Sans'] text-sm tracking-[0.15em] uppercase transition-colors duration-300 relative group ${current === page ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${current === page ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
            </button>
          ))}
          <button
            onClick={() => navigate("contact")}
            className="font-['DM_Sans'] text-xs tracking-[0.2em] uppercase border border-primary text-primary px-6 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get a Quote
          </button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => { navigate(page); setOpen(false); }}
              className={`font-['DM_Sans'] text-sm tracking-[0.2em] uppercase text-left ${current === page ? "text-primary" : "text-muted-foreground"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
