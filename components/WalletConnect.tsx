"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[#FCFF52]/30 to-gray-100 rounded-xl p-4 shadow-lg border-2 border-[#FCFF52]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-600 font-semibold">Connected</p>
            <p className="font-mono text-sm font-bold text-gray-900">
              {address.slice(0, 6)}...{address.slice(-4)}
            </p>
          </div>
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors"
          >
            Disconnect
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-4 shadow-lg border-2 border-[#FCFF52]"
    >
      <p className="text-sm text-gray-200 font-semibold mb-3">
        Connect wallet to play on-chain
      </p>
      <div className="flex flex-col gap-2">
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            disabled={isPending}
            className={cn(
              "px-4 py-2 rounded-lg font-bold transition-all",
              "bg-gradient-to-r from-[#FCFF52] to-yellow-300 text-gray-900",
              "hover:from-yellow-300 hover:to-[#FCFF52]",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {isPending ? "Connecting..." : `Connect ${connector.name}`}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
