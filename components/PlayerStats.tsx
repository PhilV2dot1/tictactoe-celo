"use client";

import { motion } from "framer-motion";

interface PlayerStatsProps {
  stats: {
    games: number;
    wins: number;
    losses: number;
    draws: number;
  };
}

export function PlayerStats({ stats }: PlayerStatsProps) {
  const statItems = [
    { label: "Games", value: stats.games, color: "text-celo-dark" },
    { label: "Wins", value: stats.wins, color: "text-win" },
    { label: "Losses", value: stats.losses, color: "text-lose" },
    { label: "Draws", value: stats.draws, color: "text-celo-purple" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white/90 rounded-lg p-4 shadow-md"
    >
      <h3 className="text-sm font-semibold text-gray-600 mb-3">Your Stats</h3>
      <div className="grid grid-cols-4 gap-3">
        {statItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="text-center"
          >
            <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
            <p className="text-xs text-gray-500 mt-1">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
