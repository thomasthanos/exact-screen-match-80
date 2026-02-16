import { useMemo, useEffect } from "react";
import type { Vehicle } from "@/data/vehicles";
import { vehicleImages } from "@/data/vehicleImages";
import { X, Trophy, Shield, Crosshair, Swords, ChevronUp, ChevronDown, Minus } from "lucide-react";

interface ComparisonPanelProps {
  vehicles: Vehicle[];
  onRemove: (name: string) => void;
  onClose: () => void;
}

const ComparisonPanel = ({ vehicles, onRemove, onClose }: ComparisonPanelProps) => {
  const [v1, v2] = vehicles;

  const allWeapons = useMemo(() => Array.from(
    new Set([
      ...(v1?.stats.map((s) => s.weapon) ?? []),
      ...(v2?.stats.map((s) => s.weapon) ?? []),
    ])
  ), [v1, v2]);

  const getHits = (vehicle: Vehicle | undefined, weapon: string) =>
    vehicle?.stats.find((s) => s.weapon === weapon)?.hits ?? "—";

  const getNum = (hits: string) => {
    const n = parseInt(hits);
    return isNaN(n) ? 0 : n;
  };

  const { winner, score1, score2, totalHits1, totalHits2 } = useMemo(() => {
    if (!v1 || !v2) return { winner: null, score1: 0, score2: 0, totalHits1: 0, totalHits2: 0 };
    let s1 = 0, s2 = 0, th1 = 0, th2 = 0;
    allWeapons.forEach((w) => {
      const n1 = getNum(getHits(v1, w));
      const n2 = getNum(getHits(v2, w));
      th1 += n1; th2 += n2;
      if (n1 > n2) s1++;
      else if (n2 > n1) s2++;
    });
    const w = s1 > s2 ? v1.name : s2 > s1 ? v2.name : "tie";
    return { winner: w, score1: s1, score2: s2, totalHits1: th1, totalHits2: th2 };
  }, [v1, v2, allWeapons]);

  const maxHit = Math.max(
    ...allWeapons.flatMap((w) => [getNum(getHits(v1, w)), getNum(getHits(v2, w))]),
    1
  );

  const hasBoth = !!v1 && !!v2;

  // Lock body scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (vehicles.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={onClose} />

      <div className="relative z-10 w-full sm:max-w-2xl rounded-2xl bg-card border border-border shadow-2xl overflow-hidden animate-fade-in max-h-[92dvh] sm:max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-border shrink-0 bg-secondary/30">
          <div className="flex items-center gap-2">
            <Swords className="w-5 h-5 text-primary" />
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-primary">
              Vehicle Duel
            </h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          {/* Vehicle cards */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 p-3 sm:p-4">
            {[v1, v2].map((v, i) => (
              <div
                key={i}
                className={`relative rounded-xl border overflow-hidden transition-all ${
                  v
                    ? winner === v.name
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                      : winner && winner !== "tie" && winner !== v.name
                        ? "border-destructive/50 bg-destructive/5 ring-1 ring-destructive/20"
                        : "border-border bg-secondary/20"
                    : "border-dashed border-border/50 bg-secondary/10"
                }`}
              >
                {v ? (
                  <>
                    {winner === v.name && (
                      <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shadow-md">
                        <Trophy className="w-3 h-3" /> Winner
                      </div>
                    )}
                    <button
                      onClick={() => onRemove(v.name)}
                      className="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-background/80 text-muted-foreground hover:text-destructive hover:bg-background transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <div className="h-24 sm:h-36 bg-gradient-to-b from-secondary/10 to-secondary/40 flex items-center justify-center p-2 sm:p-3">
                      <img
                        src={vehicleImages[v.name]}
                        alt={v.name}
                        className="max-h-full max-w-full object-contain drop-shadow-lg"
                      />
                    </div>
                    <div className="p-2 sm:p-3 text-center border-t border-border/50">
                      <p className="font-display text-xs sm:text-sm font-bold uppercase tracking-wide text-foreground truncate">
                        {v.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground capitalize">{v.category}</p>
                    </div>
                  </>
                ) : (
                  <div className="h-40 sm:h-48 flex flex-col items-center justify-center gap-2">
                    <Shield className="w-8 h-8 text-muted-foreground/20" />
                    <span className="text-muted-foreground text-xs">Pick a vehicle</span>
                    <span className="text-muted-foreground/50 text-[10px]">Use the + button on any card</span>
                  </div>
                )}
              </div>
            ))}
          </div>



          {/* Stats breakdown */}
          {v1 && (
            <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-1 sm:space-y-1.5">
              {/* Column header - hide vehicle names on mobile since cards above already show them */}
              <div className="flex items-center text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold px-2 py-2 mb-1 rounded-lg bg-secondary/40 border border-border/50 overflow-hidden">
                <span className="flex-1 sm:w-[40%] sm:flex-none">Weapon</span>
                <span className={`hidden sm:block flex-1 text-center truncate min-w-0 font-bold ${hasBoth && winner === v1?.name ? "text-primary" : hasBoth && winner !== "tie" ? "text-destructive" : "text-primary"}`}>{v1.name.split(" ")[0]}</span>
                <span className="hidden sm:block shrink-0 w-6" />
                <span className={`hidden sm:block flex-1 text-center truncate min-w-0 font-bold ${hasBoth && winner === v2?.name ? "text-primary" : hasBoth && winner !== "tie" ? "text-destructive" : "text-primary"}`}>{v2 ? v2.name.split(" ")[0] : "—"}</span>
                <span className="sm:hidden text-right text-muted-foreground/60">Hits to destroy</span>
              </div>

              {allWeapons.map((weapon) => {
                const h1 = getHits(v1, weapon);
                const h2 = getHits(v2, weapon);
                const n1 = getNum(h1);
                const n2 = getNum(h2);
                const bar1 = maxHit > 0 ? (n1 / maxHit) * 100 : 0;
                const bar2 = maxHit > 0 ? (n2 / maxHit) * 100 : 0;

                const icon = hasBoth
                  ? n1 > n2 ? <ChevronUp className="w-3 h-3 text-primary" />
                  : n1 < n2 ? <ChevronDown className="w-3 h-3 text-destructive" />
                  : <Minus className="w-3 h-3 text-muted-foreground/40" />
                  : null;

                return (
                  <div key={weapon} className="rounded-lg bg-secondary/15 hover:bg-secondary/30 transition-colors px-2 py-1 sm:p-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-0">
                      <span className="text-[9px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider sm:flex-1 sm:truncate leading-tight">
                        {weapon}
                      </span>
                      {/* Scores row */}
                      <div className="flex items-center gap-1 sm:gap-2">
                        {/* Bars on mobile - inline with numbers */}
                        {hasBoth && (
                          <div className="flex gap-0.5 h-1.5 flex-1 sm:hidden rounded-full overflow-hidden min-w-[60px]">
                            <div className="flex-1 bg-muted/50 rounded-full overflow-hidden flex justify-end">
                              <div
                                className={`h-full rounded-full transition-all duration-700 ${n1 >= n2 ? "bg-primary" : "bg-destructive/50"}`}
                                style={{ width: `${bar1}%` }}
                              />
                            </div>
                            <div className="flex-1 bg-muted/50 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-700 ${n2 >= n1 ? "bg-primary" : "bg-destructive/50"}`}
                                style={{ width: `${bar2}%` }}
                              />
                            </div>
                          </div>
                        )}
                        <span
                          className={`font-display text-sm sm:text-base font-bold w-8 sm:w-14 text-center transition-colors ${
                            hasBoth && n1 > n2 ? "text-primary" : hasBoth && n1 < n2 ? "text-destructive" : "text-foreground"
                          }`}
                        >
                          {h1}
                        </span>
                        <span className="w-4 sm:w-5 flex justify-center">{icon ?? <span className="text-muted-foreground/30 text-[10px]">vs</span>}</span>
                        <span
                          className={`font-display text-sm sm:text-base font-bold w-8 sm:w-14 text-center transition-colors ${
                            hasBoth && n2 > n1 ? "text-primary" : hasBoth && n2 < n1 ? "text-destructive" : "text-foreground"
                          }`}
                        >
                          {h2}
                        </span>
                      </div>
                    </div>
                    {/* Desktop bars - separate row */}
                    {hasBoth && (
                      <div className="hidden sm:flex gap-1 h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div className="flex-1 bg-muted/50 rounded-full overflow-hidden flex justify-end">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${n1 >= n2 ? "bg-primary" : "bg-destructive/50"}`}
                            style={{ width: `${bar1}%` }}
                          />
                        </div>
                        <div className="flex-1 bg-muted/50 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${n2 >= n1 ? "bg-primary" : "bg-destructive/50"}`}
                            style={{ width: `${bar2}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Legend */}
              <div className="text-center pt-3 pb-1 space-y-1">
                {vehicles.length < 2 ? (
                  <p className="text-muted-foreground text-xs">
                    Pick {2 - vehicles.length} more vehicle{vehicles.length === 0 ? "s" : ""} using the <span className="text-primary font-semibold">+</span> button on any card.
                  </p>
                ) : winner === "tie" ? (
                  <div className="inline-flex items-center gap-2 bg-secondary/40 rounded-full px-4 py-1.5">
                    <span className="text-sm">⚖️</span>
                    <span className="text-xs text-muted-foreground font-medium">It's a tie!</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" /> More durable</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-destructive/60 inline-block" /> Less durable</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPanel;
