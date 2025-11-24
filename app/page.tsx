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
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-[#FCFF52]/30 p-4 sm:p-8">
      <div className="max-w-md mx-auto space-y-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border-2 border-gray-700 text-center space-y-1"
          style={{ boxShadow: '0 0 0 6px #FCFF52, 0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
        >
          <h1 className="text-4xl font-black text-gray-900">
            Tic Tac Toe
          </h1>
          <p className="text-sm text-gray-600">Play on Celo Blockchain</p>
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
              whileHover={{ scale: 1.05 }}
              onClick={startGame}
              disabled={isProcessing || (mode === "onchain" && !isConnected)}
              className="px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border-2 border-[#FCFF52] rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? "Starting..." : "Start Game"}
            </motion.button>
          ) : (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              onClick={resetGame}
              disabled={isProcessing}
              className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white border-2 border-gray-600 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
          className="text-center text-xs text-gray-500 pt-2"
        >
          <p>
            Built on{" "}
            <span className="font-semibold text-gray-700">Celo</span> •
            Powered by{" "}
            <span className="font-semibold text-gray-700">Farcaster</span>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
