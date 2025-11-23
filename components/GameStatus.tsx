"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GameStatusProps {
  message: string;
  result?: "win" | "lose" | "draw" | null;
}

export function GameStatus({ message, result }: GameStatusProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={message}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "px-6 py-3 rounded-lg font-semibold text-center",
          "shadow-md border-2",
          result === "win" && "bg-win/10 border-win text-win",
          result === "lose" && "bg-lose/10 border-lose text-lose",
          result === "draw" && "bg-celo-purple/10 border-celo-purple text-celo-purple",
          !result && "bg-celo-green/10 border-celo-green text-celo-dark"
        )}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
}
