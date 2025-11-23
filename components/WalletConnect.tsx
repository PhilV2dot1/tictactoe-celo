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
        className="bg-white/90 rounded-lg p-4 shadow-md border-2 border-celo-green"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 font-medium">Connected</p>
            <p className="font-mono text-sm text-celo-dark">
              {address.slice(0, 6)}...{address.slice(-4)}
            </p>
          </div>
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 bg-lose/10 text-lose rounded-md font-semibold hover:bg-lose/20 transition-colors"
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
      className="bg-white/90 rounded-lg p-4 shadow-md border-2 border-celo-purple/30"
    >
      <p className="text-sm text-gray-600 font-medium mb-3">
        Connect wallet to play on-chain
      </p>
      <div className="flex flex-col gap-2">
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            disabled={isPending}
            className={cn(
              "px-4 py-2 rounded-md font-semibold transition-colors",
              "bg-celo-green text-white hover:bg-celo-green/90",
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
