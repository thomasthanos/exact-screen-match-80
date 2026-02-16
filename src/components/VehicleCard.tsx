import type { Vehicle } from "@/data/vehicles";
import { categoryImages } from "@/data/categoryImages";
import { vehicleImages } from "@/data/vehicleImages";
import { Plus, Check } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
  isSelected?: boolean;
  onCompareToggle?: (vehicle: Vehicle) => void;
  compareDisabled?: boolean;
}

const categoryLabels: Record<string, string> = {
  cars: "Car",
  helicopters: "Helicopter",
  planes: "Plane",
  special: "Special"
};

const VehicleCard = ({ vehicle, index, isSelected, onCompareToggle, compareDisabled }: VehicleCardProps) => {
  const maxHit = Math.max(
    ...vehicle.stats.map((s) => {
      const num = parseInt(s.hits);
      return isNaN(num) ? 0 : num;
    })
  );

  const image = vehicleImages[vehicle.name] || categoryImages[vehicle.category];

  return (
    <div
      className={`group rounded-xl bg-card border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 will-change-transform backface-hidden ${
      isSelected ?
      "border-primary shadow-[0_0_30px_hsl(var(--primary)/0.3)] ring-1 ring-primary/50" :
      "border-border hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.12)]"}`
      }
      style={{ animationDelay: `${index * 50}ms` }}>

      {/* Image with overlay */}
      <div className="relative h-40 sm:h-44 overflow-hidden rounded-t-xl" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
        <img
          src={image}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy" />

        {/* Multi-layer gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-card/30 rounded-2xl" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {categoryLabels[vehicle.category] ?? vehicle.category}
          </span>
        </div>

        {/* Compare button */}
        {onCompareToggle &&
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCompareToggle(vehicle);
          }}
          disabled={compareDisabled && !isSelected}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border ${
          isSelected ?
          "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_hsl(var(--primary)/0.4)]" :
          compareDisabled ?
          "bg-muted/50 text-muted-foreground border-border cursor-not-allowed opacity-50" :
          "bg-background/60 backdrop-blur-md text-muted-foreground border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary"}`
          }
          title={isSelected ? "Remove from comparison" : "Add to comparison"}>

            {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        }

        {/* Vehicle Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wider uppercase text-foreground group-hover:text-primary transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {vehicle.name}
          </h3>
        </div>
      </div>

      {/* Stats */}
      <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
        {vehicle.stats.map((stat) => {
          const numVal = parseInt(stat.hits);
          const percentage = !isNaN(numVal) && maxHit > 0 ? numVal / maxHit * 100 : 0;

          return (
            <div key={stat.weapon} className="flex items-center gap-2 sm:gap-3">
              <span className="text-muted-foreground w-[110px] sm:w-[140px] shrink-0 truncate text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                {stat.weapon}
              </span>
              <div className="flex-1 h-1.5 sm:h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary/60 transition-all duration-500 group-hover:bg-primary"
                  style={{ width: `${Math.max(percentage, 4)}%` }} />

              </div>
              <span className="text-primary font-bold font-display text-sm sm:text-base w-7 sm:w-8 text-right tabular-nums">
                {stat.hits}
              </span>
            </div>);

        })}
      </div>
    </div>);

};

export default VehicleCard;