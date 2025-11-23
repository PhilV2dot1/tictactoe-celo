# Tic Tac Toe on Celo

A modern Tic Tac Toe game built with Next.js 14, React, TypeScript, and deployed on Celo blockchain. Features both free play mode and on-chain gameplay with Farcaster integration.

## Features

- **Free Play Mode**: Play locally without blockchain transactions
- **On-Chain Mode**: Record games on Celo blockchain with wallet integration
- **AI Opponent**: Smart AI with strategic move priorities
- **Farcaster Integration**: Share your results on Farcaster
- **Wagmi & Viem**: Modern blockchain interaction
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Beautiful Celo-themed design

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: Celo, Wagmi v2, Viem
- **Farcaster**: @farcaster/miniapp-sdk v0.2.1, frame-wagmi-connector
- **Animations**: Framer Motion
- **State Management**: @tanstack/react-query

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Celo wallet (MetaMask, Coinbase Wallet, etc.) for on-chain mode

### Installation

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd tictactoe-celo
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   ```bash
   cp .env.local.example .env.local
   ```
   Update `NEXT_PUBLIC_URL` with your deployment URL

4. Run development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Setup OG Image

Create an OG image for Farcaster previews:

1. Create an image at `public/og-image.png`
2. Recommended size: 1200x630px
3. Format: PNG or JPG
4. Should showcase the Tic Tac Toe game with Celo branding

You can use design tools like Figma, Canva, or generate one programmatically.

## Smart Contract

The game uses a deployed smart contract on Celo Mainnet:

- **Address**: `0xa9596b4a5A7F0E10A5666a3a5106c4F2C3838881`
- **Network**: Celo Mainnet (Chain ID: 42220)
- **Functions**: `startGame()`, `endGame(uint8)`, `getPlayerStats(address)`

## Project Structure

```
tictactoe-celo/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main game page
│   └── globals.css         # Global styles
├── components/
│   ├── providers.tsx       # Wagmi & React Query providers
│   ├── TicTacToeBoard.tsx  # Game board component
│   ├── TicTacToeCell.tsx   # Individual cell component
│   ├── GameStatus.tsx      # Status display
│   ├── ModeToggle.tsx      # Free/On-Chain toggle
│   ├── WalletConnect.tsx   # Wallet connection UI
│   ├── PlayerStats.tsx     # Stats display
│   └── FarcasterShare.tsx  # Share button
├── hooks/
│   └── useGame.ts          # Game logic hook
├── lib/
│   ├── wagmi.ts            # Wagmi configuration
│   ├── farcaster.ts        # Farcaster SDK helpers
│   ├── contract-abi.ts     # Smart contract ABI
│   └── utils.ts            # Utility functions
└── public/
    └── og-image.png        # OG image (to be created)
```

## Game Logic

### AI Strategy

The AI uses a priority-based decision system:
1. **Win**: Try to complete a winning line
2. **Block**: Block player's winning move
3. **Center**: Take the center cell if available
4. **Corner**: Take a corner cell
5. **Any**: Take any available cell

### Win Detection

Checks 8 possible winning lines:
- 3 horizontal rows
- 3 vertical columns
- 2 diagonals

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Set environment variable `NEXT_PUBLIC_URL` to your deployment URL
4. Deploy!

### Farcaster Manifest

The app uses a hosted Farcaster manifest. Update `next.config.js` redirect if you need a custom manifest.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Acknowledgments

- Built on [Celo](https://celo.org)
- Integrated with [Farcaster](https://farcaster.xyz)
- Migrated from vanilla JS version to modern Next.js stack
