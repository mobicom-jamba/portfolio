// components/SimpleSpaceEntrance.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SimpleSpaceEntranceProps {
  onComplete: () => void;
  children: React.ReactNode;
}

export default function SimpleSpaceEntrance({
  onComplete,
  children,
}: SimpleSpaceEntranceProps) {
  const [stage, setStage] = useState<"flying" | "complete">("flying");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Simple sequence: just flying then complete
    const sequence = async () => {
      // Flying through space (5s)
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setStage("complete");
      onComplete();
    };

    sequence();
  }, [onComplete]);

  // Stars and space effects
  useEffect(() => {
    if (stage !== "flying") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Star {
      x: number = 0;
      y: number = 0;
      z: number = 0;
      speed: number = 0;
      size: number = 0;
      opacity: number = 0;
      side: "left" | "right" = "left";

      constructor() {
        this.reset();
      }

      reset() {
        // Create stars only on left and right sides (not center)
        this.side = Math.random() > 0.5 ? "left" : "right";

        if (this.side === "left") {
          this.x = -(Math.random() * 800 + 200); // Left side: -200 to -1000
        } else {
          this.x = Math.random() * 800 + 200; // Right side: 200 to 1000
        }

        this.y = (Math.random() - 0.5) * 1500; // Spread vertically
        this.z = Math.random() * 1500 + 1500; // Distance from viewer
        this.speed = 30; // Fast hyperspeed
        this.size = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.9 + 0.1;
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.reset();
        }
      }

      draw() {
        if (!canvas || !ctx) return;

        const x = (this.x / this.z) * canvas.width + canvas.width / 2;
        const y = (this.y / this.z) * canvas.height + canvas.height / 2;
        const size = Math.max(0.1, (1 - this.z / 1500) * this.size);

        // Only draw if star is visible and on the sides
        if (
          x >= 0 &&
          x <= canvas.width &&
          y >= 0 &&
          y <= canvas.height &&
          size > 0
        ) {
          ctx.save();
          ctx.globalAlpha = this.opacity * Math.max(0, 1 - this.z / 1500);

          // Pure white stars
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = size * 4;
          ctx.shadowColor = "#ffffff";

          // Draw star
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();

          // Draw bright star trails
          if (size > 0.5) {
            const trailLength = this.speed * 3;
            const trailX = x + (this.x / this.z) * trailLength;
            const trailY = y + (this.y / this.z) * trailLength;

            // Create bright white gradient for trail
            const gradient = ctx.createLinearGradient(x, y, trailX, trailY);
            gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.strokeStyle = gradient;
            ctx.lineWidth = size * 1.5;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(trailX, trailY);
            ctx.stroke();
          }

          ctx.restore();
        }
      }
    }

    // Create stars
    const stars: Star[] = [];
    for (let i = 0; i < 400; i++) {
      stars.push(new Star());
    }

    let animationId: number;

    const animate = () => {
      // Clear with strong trail effect for speed
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw tunnel effect - darker center corridor
      const centerWidth = canvas.width * 0.4;
      const centerX = canvas.width / 2 - centerWidth / 2;

      const gradient = ctx.createLinearGradient(
        centerX,
        0,
        centerX + centerWidth,
        0
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.6)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(centerX, 0, centerWidth, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [stage]);

  if (stage === "complete") {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Stars Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Flying Stage - Only stage now */}
      <AnimatePresence>
        {stage === "flying" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {/* Minimal center crosshair */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="relative"
              >
                {/* Simple crosshair */}
                <div className="w-6 h-0.5 bg-white/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="h-6 w-0.5 bg-white/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </motion.div>
            </div>

            {/* Speed indicator */}
            {/* <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            >
              <motion.h2
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255, 255, 255, 0.8)",
                    "0 0 20px rgba(255, 255, 255, 1)",
                    "0 0 10px rgba(255, 255, 255, 0.8)",
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-3xl font-bold text-white mb-2"
              >
                ENTERING PORTFOLIO
              </motion.h2>
              <p className="text-white/70 font-mono text-sm">
                Flying through space...
              </p>
            </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
