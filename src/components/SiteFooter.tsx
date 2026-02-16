import { memo } from "react";
import { Link } from "react-router-dom";

const SiteFooter = memo(() => {
  return (
    <footer className="relative overflow-hidden mt-16 border-t border-border bg-secondary/50 backdrop-blur-sm">
      {/* Starfield background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground) / 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "starfieldMove 90s linear infinite",
        }}
      />

      <div className="relative z-10 text-center py-6 px-4">
        <p className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
          © 2024–2025 GTA 5 Academy | Created by{" "}
          <span className="text-primary">Thomas_2873</span> &{" "}
          <span className="text-primary">Tony_greek</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          All data tested in-game. Results may vary due to GTA's physics engine.
        </p>
        <Link
          to="/copyright"
          className="inline-block mt-3 text-xs text-primary hover:text-primary/80 transition-colors font-medium border border-primary/40 rounded-full px-4 py-1.5 hover:bg-primary/10"
        >
          Copyright & Credits
        </Link>
      </div>
    </footer>
  );
});

SiteFooter.displayName = "SiteFooter";

export default SiteFooter;
