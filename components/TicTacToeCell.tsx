"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TicTacToeCellProps {
  value: 0 | 1 | 2; // 0 = empty, 1 = X, 2 = O
  onClick: () => void;
  disabled: boolean;
}

export function TicTacToeCell({ value, onClick, disabled }: TicTacToeCellProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || value !== 0}
      whileHover={!disabled && value === 0 ? { scale: 1.05 } : {}}
      whileTap={!disabled && value === 0 ? { scale: 0.95 } : {}}
      className={cn(
        "aspect-square flex items-center justify-center",
        "bg-white/90 rounded-lg shadow-md",
        "text-4xl sm:text-5xl font-bold",
        "transition-all duration-200",
        "border-2",
        value === 0 && !disabled
          ? "border-celo-green/30 hover:border-celo-green hover:shadow-lg cursor-pointer"
          : "border-transparent cursor-not-allowed",
        value === 1 && "text-celo-purple",
        value === 2 && "text-celo-green"
      )}
    >
      {value === 1 && (
        <motion.span
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          X
        </motion.span>
      )}
      {value === 2 && (
        <motion.span
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          O
        </motion.span>
      )}
    </motion.button>
  );
}
