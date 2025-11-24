"use client";

import { motion } from "framer-motion";
import { shareGameResult } from "@/lib/farcaster";

interface FarcasterShareProps {
  result: "win" | "lose" | "draw";
  stats: {
    wins: number;
    losses: number;
    draws: number;
  };
}

export function FarcasterShare({ result, stats }: FarcasterShareProps) {
  const handleShare = async () => {
    const appUrl = typeof window !== "undefined" ? window.location.href : "";
    await shareGameResult(result, stats, appUrl);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <button
        onClick={handleShare}
        className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-[#FCFF52] border-2 border-[#FCFF52] rounded-xl font-bold shadow-md hover:shadow-lg transition-all"
      >
        Share on Farcaster
      </button>
    </motion.div>
  );
}
