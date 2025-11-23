import sdk from "@farcaster/miniapp-sdk";

export async function initializeFarcaster() {
  try {
    await sdk.actions.ready();
    return true;
  } catch (error) {
    console.error("Failed to initialize Farcaster SDK:", error);
    return false;
  }
}

export interface FarcasterUser {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl: string;
}

export async function getFarcasterUser(): Promise<FarcasterUser | null> {
  try {
    const context = await sdk.context;
    if (!context || !context.user) return null;

    return {
      fid: context.user.fid,
      username: context.user.username || "",
      displayName: context.user.displayName || "",
      pfpUrl: context.user.pfpUrl || "",
    };
  } catch (error) {
    console.error("Failed to get Farcaster user:", error);
    return null;
  }
}

export interface GameStats {
  wins: number;
  losses: number;
  draws: number;
}

export async function shareGameResult(
  result: "win" | "lose" | "draw",
  stats: GameStats,
  appUrl: string
) {
  const emojis = {
    win: "🎉",
    lose: "😢",
    draw: "🤝",
  };

  const messages = {
    win: "Victory!",
    lose: "AI Wins",
    draw: "Draw!",
  };

  const text = `I just played Tic Tac Toe on Celo!\n\n${emojis[result]} ${messages[result]}\n\nStats: ${stats.wins}W / ${stats.losses}L / ${stats.draws}D\n\nPlay now:`;

  try {
    // Try to use Farcaster SDK to share
    const context = await sdk.context;
    if (context) {
      // In Farcaster, copy to clipboard so user can paste in composer
      await navigator.clipboard.writeText(`${text}\n${appUrl}`);
      return { success: true, method: "clipboard" };
    }
  } catch (error) {
    console.error("Failed to share via Farcaster:", error);
  }

  // Fallback: Open Warpcast composer
  const warpcastUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(
    text
  )}&embeds[]=${encodeURIComponent(appUrl)}`;
  window.open(warpcastUrl, "_blank");
  return { success: true, method: "warpcast" };
}
