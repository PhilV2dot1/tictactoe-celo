"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  mode: "free" | "onchain";
  onModeChange: (mode: "free" | "onchain") => void;
}

export function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  return (
    <div className="flex gap-2 p-1 bg-white/50 rounded-lg backdrop-blur-sm">
      <button
        onClick={() => onModeChange("free")}
        className={cn(
          "relative px-6 py-2 rounded-md font-semibold transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-celo-green/50",
          mode === "free"
            ? "text-white"
            : "text-celo-dark hover:text-celo-green"
        )}
      >
        {mode === "free" && (
          <motion.div
            layoutId="mode-background"
            className="absolute inset-0 bg-celo-purple rounded-md"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">Free Play</span>
      </button>

      <button
        onClick={() => onModeChange("onchain")}
        className={cn(
          "relative px-6 py-2 rounded-md font-semibold transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-celo-green/50",
          mode === "onchain"
            ? "text-white"
            : "text-celo-dark hover:text-celo-green"
        )}
      >
        {mode === "onchain" && (
          <motion.div
            layoutId="mode-background"
            className="absolute inset-0 bg-celo-green rounded-md"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">On-Chain</span>
      </button>
    </div>
  );
}
