import { Car, Plane, Star } from "lucide-react";
import type { CategoryId } from "@/data/vehicles";

// Custom helicopter SVG since lucide doesn't have a great one
const HelicopterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3h18M12 3v5M5 14h14l-2-6H7l-2 6zM6 14v3a1 1 0 001 1h3M18 14v3a1 1 0 01-1 1h-3M10 18v2M14 18v2M8 20h8" />
  </svg>
);

const iconMap: Record<CategoryId, React.FC<{ className?: string }>> = {
  cars: ({ className }) => <Car className={className} />,
  helicopters: HelicopterIcon,
  planes: ({ className }) => <Plane className={className} />,
  special: ({ className }) => <Star className={className} />,
};

interface CategoryIconProps {
  categoryId: CategoryId;
  className?: string;
}

const CategoryIcon = ({ categoryId, className = "w-5 h-5" }: CategoryIconProps) => {
  const Icon = iconMap[categoryId];
  return <Icon className={className} />;
};

export default CategoryIcon;
