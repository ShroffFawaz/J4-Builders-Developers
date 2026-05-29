import { Page, NAV_LINKS } from "../../types";

export function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="font-['Playfair_Display'] text-2xl font-700 text-foreground tracking-widest uppercase mb-1">J4 Builders & Developers</div>
          <div className="font-['DM_Mono'] text-[9px] tracking-[0.3em] text-muted-foreground uppercase mb-6">CONSTRUCTION | INTERIORS | CONSULTATION</div>
          <p className="font-['DM_Sans'] text-xs text-muted-foreground leading-relaxed font-300 max-w-xs">
            Building structures of lasting distinction across South India since 2001.
          </p>
        </div>
        <div>
          <p className="font-['DM_Mono'] text-[10px] tracking-[0.3em] text-primary uppercase mb-6">Navigation</p>
          <div className="grid grid-cols-2 gap-3">
            {NAV_LINKS.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className="font-['DM_Sans'] text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 text-left font-300"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-['DM_Mono'] text-[10px] tracking-[0.3em] text-primary uppercase mb-6">Contact</p>
          <div className="space-y-2 font-['DM_Sans'] text-sm text-muted-foreground font-300">
            <div>enquiries@j4builders.in</div>
            <div>+91 82971 26392</div>
            <div className="text-xs leading-relaxed mt-4">MIG-H-27, Sai Ratna Arcade, New Santoshnagar<br />Santosh Nagar, Hyderabad, Telangana 500059</div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-['DM_Mono'] text-[10px] tracking-[0.2em] text-muted-foreground">
            © 2026 J4 Builders and Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
