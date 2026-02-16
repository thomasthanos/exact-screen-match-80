import type { Vehicle, CategoryId } from "@/data/vehicles";
import VehicleCard from "./VehicleCard";
import CategoryIcon from "./CategoryIcon";

interface VehicleSectionProps {
  id: string;
  title: string;
  vehicles: Vehicle[];
  compareList: Vehicle[];
  onCompareToggle: (vehicle: Vehicle) => void;
}

const VehicleSection = ({ id, title, vehicles, compareList = [], onCompareToggle }: VehicleSectionProps) => {
  if (vehicles.length === 0) return null;

  return (
    <section id={id} className="py-8 sm:py-12">
      {/* Section header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <CategoryIcon categoryId={id as CategoryId} className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest text-primary">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        <span className="text-muted-foreground text-xs sm:text-sm font-medium shrink-0">
          {vehicles.length} vehicles
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {vehicles.map((vehicle, i) => (
          <VehicleCard
            key={vehicle.name}
            vehicle={vehicle}
            index={i}
            isSelected={compareList.some((v) => v.name === vehicle.name)}
            onCompareToggle={onCompareToggle}
            compareDisabled={compareList.length >= 2}
          />
        ))}
      </div>
    </section>
  );
};

export default VehicleSection;
