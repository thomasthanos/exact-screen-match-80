import { useState, useMemo, useCallback } from "react";
import { vehicles, categories, type Vehicle } from "@/data/vehicles";
import SiteHeader from "@/components/SiteHeader";
import VehicleSection from "@/components/VehicleSection";
import SiteFooter from "@/components/SiteFooter";
import ComparisonPanel from "@/components/ComparisonPanel";
import heroImage from "@/assets/gta-hero.jpg";
import { GitCompare } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [compareList, setCompareList] = useState<Vehicle[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return vehicles;
    return vehicles.filter((v) => v.name.toLowerCase().includes(q));
  }, [searchQuery]);

  const handleCompareToggle = useCallback((vehicle: Vehicle) => {
    setCompareList((prev) => {
      const exists = prev.find((v) => v.name === vehicle.name);
      if (exists) return prev.filter((v) => v.name !== vehicle.name);
      if (prev.length >= 2) return prev;
      const next = [...prev, vehicle];
      if (next.length >= 2) setShowComparison(true);
      return next;
    });
  }, []);

  const handleRemoveFromCompare = useCallback((name: string) => {
    setCompareList((prev) => {
      const next = prev.filter((v) => v.name !== name);
      if (next.length === 0) setShowComparison(false);
      return next;
    });
  }, []);

  const handleCloseComparison = useCallback(() => {
    setShowComparison(false);
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <SiteHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Hero */}
      <section id="home" className="pt-12 sm:pt-14">
        <div className="relative h-[32vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={heroImage}
            alt="GTA Vehicles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-widest text-primary drop-shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
              GTA Academy
            </h1>
            <p className="mt-2 sm:mt-3 text-foreground/80 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
              In-game vehicle durability wiki — every stat tested with fully upgraded vehicles across multiple rounds.
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="container mx-auto px-3 sm:px-4 -mt-8 sm:-mt-8 relative z-10">
          <div className="max-w-2xl mx-auto rounded-xl bg-card border border-border p-3 sm:p-4 text-center shadow-lg">
            <p className="text-destructive text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">Note</p>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              All testings were done on fully upgraded vehicles. Results may vary slightly — 
              we've listed the most common outcomes after multiple tests.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle sections */}
      <main className="container mx-auto px-3 sm:px-4 mt-6 sm:mt-8">
        {searchQuery && filtered.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="text-destructive text-base sm:text-lg font-semibold">No vehicles found for "{searchQuery}"</p>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">Try a different search term</p>
          </div>
        )}

        {categories.map((cat) => {
          const catVehicles = filtered.filter((v) => v.category === cat.id);
          return (
            <VehicleSection
              key={cat.id}
              id={cat.id}
              title={cat.label}
              vehicles={catVehicles}
              compareList={compareList}
              onCompareToggle={handleCompareToggle}
            />
          );
        })}
      </main>

      <SiteFooter />

      {/* Floating compare button */}
      {compareList.length > 0 && !showComparison && (
        <button
          onClick={() => setShowComparison(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <GitCompare className="w-4 h-4 sm:w-5 sm:h-5" />
          Compare ({compareList.length}/2)
        </button>
      )}

      {/* Comparison panel */}
      {showComparison && (
        <ComparisonPanel
          vehicles={compareList}
          onRemove={handleRemoveFromCompare}
          onClose={handleCloseComparison}
        />
      )}
    </div>
  );
};

export default Index;
