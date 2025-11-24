"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  mode: "free" | "onchain";
  onModeChange: (mode: "free" | "onchain") => void;
}

export function ModeToggle({ mode, onModeChange }: ModeToggleProps) {
  return (
    <div className="flex gap-1 p-1 bg-white/95 backdrop-blur-lg rounded-full border-2 border-[#FCFF52]">
      <button
        onClick={() => onModeChange("free")}
        className={cn(
          "px-6 py-2 rounded-full font-bold transition-all duration-200",
          "focus:outline-none",
          mode === "free"
            ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-[#FCFF52]"
            : "text-gray-700 hover:text-gray-900"
        )}
      >
        Free Play
      </button>

      <button
        onClick={() => onModeChange("onchain")}
        className={cn(
          "px-6 py-2 rounded-full font-bold transition-all duration-200",
          "focus:outline-none",
          mode === "onchain"
            ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-[#FCFF52]"
            : "text-gray-700 hover:text-gray-900"
        )}
      >
        On-Chain
      </button>
    </div>
  );
}
