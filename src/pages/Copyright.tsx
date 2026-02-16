import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ped1 from "@/assets/copyright/ped1.png";
import ped2 from "@/assets/copyright/ped2.png";
import together from "@/assets/copyright/together.png";

const Copyright = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Neon grid background */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg, hsl(var(--primary) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          animation: "cr-grid-pulse 4s infinite alternate",
        }}
      />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Main container with snake border */}
        <div className="relative rounded-3xl p-8 md:p-10 overflow-hidden cr-container">
          {/* Snake animated borders */}
          <div className="cr-snake-border" />
          <div className="cr-snake-border-2" />

          {/* Title */}
          <h1 className="cr-title">GTA ACADEMY</h1>

          <p className="text-center text-muted-foreground text-sm mb-2">
            © 2024–2025 | All rights reserved
          </p>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Worked on this project by:{" "}
            <span className="text-primary font-semibold">Thomas_2873</span> &{" "}
            <span className="text-primary font-semibold">tony_greek</span>
          </p>

          {/* Postcard images */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <div className="text-center group">
              <div className="w-44 h-56 rounded-2xl border-2 border-primary/50 overflow-hidden bg-secondary/30 shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={ped1}
                  alt="Thomas_2873"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-primary tracking-wide">
                Thomas_2873
              </p>
            </div>
            <div className="text-center group">
              <div className="w-44 h-56 rounded-2xl border-2 border-primary/50 overflow-hidden bg-secondary/30 shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={ped2}
                  alt="tony_greek"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-primary tracking-wide">
                tony_greek
              </p>
            </div>
          </div>

          {/* Cyber card – together image */}
          <div className="cr-cyber-card mb-8">
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={together}
                alt="Together"
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                style={{ filter: "contrast(110%)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6 text-center">
              <p
                className="text-lg font-bold text-primary mb-2"
                style={{ textShadow: "0 0 10px hsl(var(--primary) / 0.6)" }}
              >
                Our Ambitions
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We put in a lot of effort to make this project stand out. With
                passion and teamwork, we created something truly special.
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Go back
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cr-grid-pulse {
          0% { opacity: 0.15; }
          100% { opacity: 0.25; }
        }

        @keyframes cr-spin {
          0% { --cr-angle: 0deg; }
          100% { --cr-angle: 360deg; }
        }

        @keyframes cr-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @property --cr-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .cr-container {
          background: rgba(0, 32, 36, 0.4);
          backdrop-filter: blur(12px);
          box-shadow:
            0 0 50px hsl(var(--primary) / 0.35),
            0 0 100px hsl(var(--primary) / 0.15) inset;
        }

        /* Primary snake line */
        .cr-snake-border,
        .cr-snake-border-2 {
          position: absolute;
          inset: -2px;
          border-radius: 1.5rem;
          pointer-events: none;
          z-index: 1;
          background: conic-gradient(
            from var(--cr-angle),
            transparent 0%,
            transparent 25%,
            hsl(185 100% 50%) 30%,
            hsl(185 100% 70%) 33%,
            transparent 38%,
            transparent 100%
          );
          animation: cr-spin 3s linear infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 2px;
          filter: drop-shadow(0 0 6px hsl(185 100% 50% / 0.8)) drop-shadow(0 0 15px hsl(185 100% 50% / 0.4));
        }

        /* Second trailing snake (offset by 180°) */
        .cr-snake-border-2 {
          background: conic-gradient(
            from calc(var(--cr-angle) + 180deg),
            transparent 0%,
            transparent 25%,
            hsl(185 100% 45%) 30%,
            hsl(185 100% 60%) 33%,
            transparent 38%,
            transparent 100%
          );
          filter: drop-shadow(0 0 4px hsl(185 100% 50% / 0.6)) drop-shadow(0 0 10px hsl(185 100% 50% / 0.3));
        }

        .cr-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
          letter-spacing: 3px;
          font-family: 'Oswald', sans-serif;
          background: linear-gradient(45deg, hsl(var(--primary)), hsl(0 80% 60%));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cr-cyber-card {
          border-radius: 1rem;
          border: 2px solid hsl(var(--primary) / 0.5);
          overflow: hidden;
          background: rgba(0, 0, 0, 0.7);
          box-shadow: 0 0 30px hsl(var(--primary) / 0.3);
          animation: cr-float 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Copyright;
