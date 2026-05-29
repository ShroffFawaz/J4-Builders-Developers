import { useState } from "react";
import { Page } from "./types";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  function navigate(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-['DM_Sans']" style={{ scrollbarWidth: "thin", scrollbarColor: "#3A3530 transparent" }}>
      <Navbar current={page} navigate={navigate} />
      <main>
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "about" && <AboutPage />}
        {page === "projects" && <ProjectsPage />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
