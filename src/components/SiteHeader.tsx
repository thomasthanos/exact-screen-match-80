import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { categories } from "@/data/vehicles";
import ThemeToggle from "./ThemeToggle";

interface SiteHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SiteHeader = ({ searchQuery, onSearchChange }: SiteHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-3 sm:px-4 flex items-center justify-between h-12 sm:h-14">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="font-display text-lg sm:text-xl font-bold tracking-widest uppercase text-primary shrink-0">
          GTA Academy
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Desktop: Search + Theme */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 pr-4 py-1.5 w-48 focus:w-64 rounded-full bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
            />
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile: Theme + Menu */}
        <div className="flex md:hidden items-center gap-1.5">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-foreground hover:bg-secondary transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4 pt-2 space-y-1 animate-fade-in-up">
          {/* Mobile search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          {/* Nav links */}
          <div className="grid grid-cols-2 gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className="flex items-center gap-2 px-3 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
