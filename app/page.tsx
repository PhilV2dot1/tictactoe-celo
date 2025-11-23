"use client";

import { useGame } from "@/hooks/useGame";
import { TicTacToeBoard } from "@/components/TicTacToeBoard";
import { GameStatus } from "@/components/GameStatus";
import { ModeToggle } from "@/components/ModeToggle";
import { WalletConnect } from "@/components/WalletConnect";
import { PlayerStats } from "@/components/PlayerStats";
import { FarcasterShare } from "@/components/FarcasterShare";
import { motion } from "framer-motion";

export default function Home() {
  const {
    board,
    mode,
    status,
    result,
    stats,
    message,
    isConnected,
    startGame,
    handleMove,
    resetGame,
    switchMode,
  } = useGame();

  const canPlay = status === "playing";
  const isProcessing = status === "processing";
  const isFinished = status === "finished";

  return (
    <main className="min-h-screen bg-celo-yellow p-4 sm:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-celo-dark">
            Tic Tac Toe
          </h1>
          <p className="text-lg text-celo-dark/70">Play on Celo Blockchain</p>
        </motion.div>

        {/* Mode Toggle */}
        <div className="flex justify-center">
          <ModeToggle mode={mode} onModeChange={switchMode} />
        </div>

        {/* Wallet Connect (On-Chain Mode) */}
        {mode === "onchain" && <WalletConnect />}

        {/* Game Status */}
        <GameStatus message={message} result={result} />

        {/* Game Board */}
        <TicTacToeBoard
          board={board}
          onCellClick={handleMove}
          disabled={!canPlay || isProcessing}
        />

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          {status === "idle" || isFinished ? (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={startGame}
              disabled={isProcessing || (mode === "onchain" && !isConnected)}
              className="px-8 py-3 bg-celo-green text-white rounded-lg font-semibold hover:bg-celo-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isProcessing ? "Starting..." : "Start Game"}
            </motion.button>
          ) : (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={resetGame}
              disabled={isProcessing}
              className="px-8 py-3 bg-lose/10 text-lose border-2 border-lose rounded-lg font-semibold hover:bg-lose/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              Reset
            </motion.button>
          )}
        </div>

        {/* Share Button (Finished State) */}
        {isFinished && result && (
          <FarcasterShare result={result} stats={stats} />
        )}

        {/* Player Stats */}
        <PlayerStats stats={stats} />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-celo-dark/60 pt-4"
        >
          <p>
            Built on{" "}
            <span className="font-semibold text-celo-green">Celo</span> •
            Powered by{" "}
            <span className="font-semibold text-celo-purple">Farcaster</span>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
