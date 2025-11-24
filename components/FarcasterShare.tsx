"use client";

import { useState } from "react";
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
  const [isSharing, setIsSharing] = useState(false);
  const [shareStatus, setShareStatus] = useState<string | null>(null);

  const handleShare = async () => {
    setIsSharing(true);
    setShareStatus(null);

    try {
      const appUrl =
        process.env.NEXT_PUBLIC_URL || window.location.origin;
      const shareResult = await shareGameResult(result, stats, appUrl);

      if (shareResult.method === "clipboard") {
        setShareStatus("Copied to clipboard! Paste in Farcaster composer.");
      } else {
        setShareStatus("Opened Warpcast composer");
      }
    } catch (error) {
      console.error("Share error:", error);
      setShareStatus("Failed to share");
    } finally {
      setIsSharing(false);
      setTimeout(() => setShareStatus(null), 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col items-center gap-2"
    >
      <button
        onClick={handleShare}
        disabled={isSharing}
        className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-[#FCFF52] border-2 border-[#FCFF52] rounded-xl font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSharing ? "Sharing..." : "Share on Farcaster"}
      </button>
      {shareStatus && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-gray-600"
        >
          {shareStatus}
        </motion.p>
      )}
    </motion.div>
  );
}
