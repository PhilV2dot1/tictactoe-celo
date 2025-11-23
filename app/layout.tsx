import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Tic Tac Toe on Celo",
  description:
    "Play Tic Tac Toe on-chain! Free mode or compete on the blockchain leaderboard.",
  openGraph: {
    title: "Tic Tac Toe on Celo",
    description: "Play Tic Tac Toe on-chain! Free or On-Chain mode.",
    images: [{ url: `${baseUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  other: {
    "fc:miniapp": JSON.stringify({
      version: "1",
      imageUrl: `${baseUrl}/og-image.png`,
      button: {
        title: "Play Tic Tac Toe",
        action: {
          type: "launch_miniapp",
          name: "Tic Tac Toe on Celo",
          url: baseUrl,
        },
      },
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
