"use client";

import { motion } from "framer-motion";
import { TicTacToeCell } from "./TicTacToeCell";

interface TicTacToeBoardProps {
  board: (0 | 1 | 2)[];
  onCellClick: (position: number) => void;
  disabled: boolean;
}

export function TicTacToeBoard({
  board,
  onCellClick,
  disabled,
}: TicTacToeBoardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[380px] mx-auto"
    >
      <div className="grid grid-cols-3 gap-3 p-4 bg-celo-green/10 rounded-xl">
        {board.map((value, index) => (
          <TicTacToeCell
            key={index}
            value={value}
            onClick={() => onCellClick(index)}
            disabled={disabled}
          />
        ))}
      </div>
    </motion.div>
  );
}
