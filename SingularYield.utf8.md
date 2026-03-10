<p align="center">
  <img src="https://img.shields.io/badge/⚡-SingularYield-10B981?style=for-the-badge&labelColor=0B0E14" alt="SingularYield"/>
</p>

<h1 align="center">SingularYield 🌌</h1>

<p align="center">
  <strong>The Self-Driving Yield Engine — Autonomous DeFi Yield Optimization on BNB Chain</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Solidity-0.8.24-363636?style=flat-square&logo=solidity&logoColor=white" alt="Solidity"/>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Hardhat-2.22-FFF100?style=flat-square&logo=hardhat&logoColor=black" alt="Hardhat"/>
  <img src="https://img.shields.io/badge/BNB_Chain-F0B90B?style=flat-square&logo=binance&logoColor=white" alt="BNB Chain"/>
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-10B981?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/badge/Tests-20%2F20_Passing-10B981?style=flat-square" alt="Tests"/>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License"/>
  <img src="https://img.shields.io/badge/Version-2.0.0-purple?style=flat-square" alt="Version"/>
</p>

---

## 📖 Overview

**SingularYield** is a next-generation **autonomous yield optimization protocol** built on BNB Chain. It functions as a "Self-Driving Yield Engine" — users deposit assets into non-custodial vaults, and the protocol automatically deploys capital, harvests rewards, compounds earnings through an intelligent zap-and-stake mechanism, and incentivizes a decentralized keeper network to maintain peak performance.

> 💡 **Core Philosophy**: *"Set and forget"* — Users deposit once, and the protocol autonomously maximizes their yield through intelligent strategy execution, transparent on-chain logic, and decentralized keeper incentives.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🏦 **Non-Custodial Vaults** | Users retain full control via ERC-20 vault share tokens (`svTokens`). No admin can access user funds. |
| ⚙️ **Strategy Engine** | `AsterEngine` autonomously deploys and manages capital on AsterDEX Earn. |
| 🔄 **Auto-Compounding** | `StackingRouter` harvests yield → zaps 50% to paired token → adds LP → stakes in MasterChef. |
| 🤖 **Decentralized Keepers** | External keepers trigger harvests and earn configurable bounties (1-5% of harvested yield). |
| 🛡️ **Emergency Safeguards** | One-click `emergencyUnwind()` recovers all capital from strategy back to vault. |
| 🌐 **Web3 Integration** | Wagmi + RainbowKit for seamless wallet connection across BSC networks. |
| 📊 **Premium Dashboard** | Real-time analytics with glassmorphism UI showing TVL, APY, system health, and keeper activity. |
| ✅ **Fully Tested** | 20/20 unit tests passing with comprehensive coverage across all core contracts. |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER (Frontend)                         │
│              React + Wagmi + RainbowKit + Viem                 │
└──────────────────────────┬──────────────────────────────────────┘
                           │ deposit() / withdraw()
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SingularityVault.sol                         │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  • Accepts USDT/BNB deposits                              │ │
│  │  • Mints svToken shares (ERC-20)                          │ │
│  │  • Calculates share price: TotalAssets / TotalSupply      │ │
│  │  • Forwards capital to AsterEngine                        │ │
│  │  • Emergency unwind capability                            │ │
│  └────────────────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────────┘
                           │ deployCapital() / withdrawCapital()
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      AsterEngine.sol                            │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  • Stakes capital on AsterDEX Earn                        │ │
│  │  • Harvest: Claims rewards → Pays keeper bounty           │ │
│  │  • Sends remaining yield to StackingRouter                │ │
│  │  • Configurable bountyBps (1-5%, default 1%)              │ │
│  │  • Emergency unwind: Recovers all from AsterDEX           │ │
│  └────────────────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────────┘
                           │ processYield()
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    StackingRouter.sol                           │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Step 1: Receive yield tokens                             │ │
│  │  Step 2: Zap 50% → Swap to WBNB via PancakeSwap Router   │ │
│  │  Step 3: Add liquidity (Token + WBNB → LP)                │ │
│  │  Step 4: Stake LP in PancakeSwap MasterChef               │ │
│  └────────────────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────────┘
                           │
          ┌────────────────┴────────────────┐
          ▼                                 ▼
┌──────────────────┐              ┌──────────────────┐
│   AsterDEX Earn  │              │   PancakeSwap    │
│  (Capital Stake) │              │  (Zap + LP Farm) │
└──────────────────┘              └──────────────────┘
```

### 🤖 Keeper Flow

```
┌───────────────┐     harvest()      ┌─────────────────┐
│  Keeper Bot   │ ──────────────────▶ │   AsterEngine   │
│  (External)   │                     │                 │
│               │ ◀─── bounty ─────── │ Claims rewards  │
│  Earns 1-5%   │     (in tokens)     │ from AsterDEX   │
└───────────────┘                     └────────┬────────┘
                                               │
                                    remaining yield
                                               │
                                               ▼
                                    ┌─────────────────┐
                                    │ StackingRouter   │
                                    │ Zap → LP → Farm │
                                    └─────────────────┘
```

---

## 📂 Project Structure

```
SingularYield/
│
├── 📜 contracts/                        # Solidity Smart Contracts (Solidity 0.8.24)
│   ├── SingularityVault.sol             # Core vault — deposit/withdraw/share system
│   ├── AsterEngine.sol                  # Strategy engine — capital deployment & keeper bounty
│   ├── StackingRouter.sol               # Auto-compounding — zap, LP, and farm logic
│   │
│   ├── interfaces/                      # Contract interfaces
│   │   ├── IAsterDEX.sol                # AsterDEX Earn platform interface
│   │   ├── IPancakeSwap.sol             # PancakeSwap Router, Factory, Pair, MasterChef
│   │   └── IStackingRouter.sol          # StackingRouter interface for engine integration
│   │
│   └── mocks/                           # Test mock contracts
│       ├── MockERC20.sol                # ERC-20 token with public mint for testing
│       └── MockAsterDEX.sol             # Simulated AsterDEX for local testing
│
├── 🧪 test/                             # Hardhat Unit Tests (20/20 passing)
│   ├── SingularityVault.test.cjs        # Vault: deposits, withdrawals, access control
│   └── AsterEngine.test.cjs            # Engine: capital, bounty system, emergency
│
├── 🚀 scripts/                          # Automation & Deployment
│   ├── deploy.cjs                       # Full deployment + wiring (Vault → Engine → Router)
│   └── keeper.cjs                       # Automated keeper bot with harvest loop
│
├── 🎨 src/                              # Frontend Application (React + TypeScript)
│   ├── App.tsx                          # Root — Web3 providers + tab navigation
│   ├── main.tsx                         # Entry point — React DOM render
│   ├── index.css                        # Global styles — Tailwind v4 + glassmorphism
│   │
│   ├── components/                      # UI Components
│   │   ├── Header.tsx                   # Navigation bar + RainbowKit ConnectButton
│   │   ├── GlobalDashboard.tsx          # Dashboard — TVL, APY, system health
│   │   ├── VaultInterface.tsx           # Vault — deposit/withdraw interface
│   │   ├── EngineRoom.tsx               # Engine — strategy monitoring & controls
│   │   ├── KeeperHub.tsx                # Keeper — bounty tracker & harvest triggers
│   │   └── TransparencyPanel.tsx        # Transparency — on-chain contract viewer
│   │
│   ├── config/
│   │   └── wagmi.ts                     # Wagmi + RainbowKit chain configuration
│   │
│   ├── context/
│   │   └── ThemeContext.tsx              # Theme management (dark mode)
│   │
│   ├── types/
│   │   └── index.ts                     # TypeScript type definitions
│   │
│   └── utils/
│       └── cn.ts                        # Tailwind class merge utility
│
├── ⚙️ Configuration
│   ├── hardhat.config.cjs               # Hardhat config — BSC mainnet & testnet
│   ├── tsconfig.json                    # TypeScript configuration
│   ├── vite.config.ts                   # Vite build configuration
│   ├── package.json                     # Dependencies & scripts
│   └── .gitignore                       # Git ignore rules
│
└── 📄 README.md                         # Documentation (this file)
```

---

## 🛠️ Tech Stack

### Smart Contracts
| Technology | Purpose |
|------------|---------|
| **Solidity 0.8.24** | Smart contract language with overflow protection |
| **Hardhat** | Development environment, testing, and deployment |
| **OpenZeppelin v5** | Battle-tested contract libraries (ERC-20, Ownable, ReentrancyGuard) |
| **Chai + Mocha** | Testing framework (20/20 tests passing) |

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI library with concurrent features |
| **TypeScript 5.9** | Type-safe development |
| **Vite 7** | Lightning-fast build tooling |
| **Tailwind CSS v4** | Utility-first styling with glassmorphism |
| **Framer Motion** | Smooth animations and page transitions |
| **Lucide React** | Modern icon library |

### Web3 Integration
| Technology | Purpose |
|------------|---------|
| **Wagmi v2** | React hooks for Ethereum/BSC interaction |
| **viem** | TypeScript-first blockchain interface |
| **RainbowKit** | Beautiful wallet connection modal |
| **ethers.js v6** | Contract interaction and testing |

### Infrastructure
| Technology | Purpose |
|------------|---------|
| **BNB Chain** | Target blockchain (BSC mainnet + testnet) |
| **PancakeSwap V2** | DEX integration for zap, LP, and farming |
| **AsterDEX** | Primary yield source for capital deployment |
| **Vercel** | Frontend hosting with auto-deploy |

---

## 📋 Smart Contract Summary

### `SingularityVault.sol` — The Vault
> Non-custodial vault accepting user deposits and minting proportional share tokens.

| Function | Access | Description |
|----------|--------|-------------|
| `deposit(assets, receiver)` | Public | Deposit underlying tokens, mint svTokens, auto-deploy to Engine |
| `withdraw(shares, receiver, owner)` | Public | Burn svTokens, withdraw proportional assets |
| `totalAssets()` | View | Total managed assets (idle + deployed in Engine) |
| `setEngine(engine)` | Owner (once) | Link vault to AsterEngine |
| `emergencyUnwind()` | Owner | Recover all capital from Engine to Vault |

### `AsterEngine.sol` — The Strategy Engine
> Deploys capital on AsterDEX, manages harvesting, and distributes keeper bounties.

| Function | Access | Description |
|----------|--------|-------------|
| `deployCapital(amount)` | Vault only | Stake capital on AsterDEX Earn |
| `withdrawCapital(amount)` | Vault only | Un-stake and return capital to Vault |
| `harvest()` | Public (Keeper) | Claim rewards → pay bounty → send to StackingRouter |
| `setBountyBps(bps)` | Owner | Set keeper bounty (max 500 bps = 5%) |
| `emergencyUnwind()` | Vault only | Emergency withdrawal from AsterDEX |

### `StackingRouter.sol` — The Compounder
> Converts harvested yield into LP tokens and stakes them for additional farming rewards.

| Function | Access | Description |
|----------|--------|-------------|
| `processYield(amount)` | Engine only | Zap 50% → add liquidity → stake LP |
| `recoverStuck(token, amount)` | Owner | Recover any stuck tokens |
| `setEngine(engine)` | Owner | Authorize the AsterEngine address |

---

## 🧪 Testing

All contracts are tested with **20/20 tests passing**:

```
  SingularityVault
    Deployment
      ✓ Should set the correct asset token
      ✓ Should set the correct name and symbol
      ✓ Should set the engine
    Deposits
      ✓ Should accept deposits and mint shares
      ✓ Should revert deposit of zero
      ✓ Should emit Deposit event
    Withdrawals
      ✓ Should allow withdrawal of shares
      ✓ Should revert withdrawal of zero shares
    Access Control
      ✓ Should not allow non-owner to set engine
      ✓ Should not allow setting engine twice

  AsterEngine
    Deployment
      ✓ Should set correct asset
      ✓ Should set correct vault
    Capital Deployment
      ✓ Should deploy capital when called by vault
      ✓ Should revert deploy capital from non-vault
    Bounty System
      ✓ Should have default bounty of 100 bps (1%)
      ✓ Should allow owner to set bounty
      ✓ Should revert if bounty exceeds MAX_BOUNTY
      ✓ Should not allow non-owner to set bounty
    Emergency Unwind
      ✓ Should allow owner to emergency unwind
      ✓ Should revert emergency unwind from non-owner

  20 passing
```

Run tests:
```bash
npx hardhat test
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** v18+ (recommended v20+)
- **npm** or **yarn**
- **MetaMask** or any Web3 wallet

### 1. Clone & Install

```bash
git clone https://github.com/panzauto46-bot/SingularYield.git
cd SingularYield
npm install --legacy-peer-deps
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# Required for deployment & keeper bot
PRIVATE_KEY=0xyour_private_key_here
BNB_RPC_URL=https://bsc-dataseed.binance.org/

# Optional: Contract addresses (after deployment)
ENGINE_ADDRESS=0x...
USDT_ADDRESS=0x55d398326f99059fF775485246999027B3197955
```

### 3. Compile Contracts

```bash
npx hardhat compile
```

### 4. Run Tests

```bash
npx hardhat test
```

### 5. Start Frontend

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 6. Deploy Contracts (Testnet)

```bash
npx hardhat run scripts/deploy.cjs --network bnb_testnet
```

### 7. Start Keeper Bot

```bash
PRIVATE_KEY=0x... ENGINE_ADDRESS=0x... node scripts/keeper.cjs
```

---

## 🚀 Deployment

### Smart Contracts → BNB Chain

The deployment script (`scripts/deploy.cjs`) handles the full flow:

1. **Deploys** `SingularityVault` → `AsterEngine` → `StackingRouter`
2. **Wires** Vault ↔ Engine ↔ Router connections
3. **Outputs** all contract addresses for configuration

### Frontend → Vercel

1. Push code to GitHub
2. Import repository into [Vercel](https://vercel.com)
3. Vite is auto-detected — click **Deploy**
4. Add environment variables in Vercel dashboard

---

## 🗺️ Roadmap

### Phase 1: The Command Center ✅
- [x] Project initialization and GitHub setup
- [x] Premium "Space-Theme" UI with Glassmorphism
- [x] React + Vite + Tailwind v4 architecture
- [x] Live deployment on Vercel

### Phase 2: The Core ✅
- [x] Hardhat environment and Solidity 0.8.24 setup
- [x] `SingularityVault.sol` — Non-custodial vault with share system
- [x] `AsterEngine.sol` — Strategy engine for capital deployment
- [x] AsterDEX interface integration

### Phase 3: The Stack (Harvest & Zap) ✅
- [x] `StackingRouter.sol` — Harvest, zap, LP creation, and staking
- [x] PancakeSwap integration (Router, Factory, Pair, MasterChef)
- [x] AsterEngine upgrade for auto-compounding
- [x] Full contract testing suite

### Phase 4: Integration & The Speed ✅
- [x] 20/20 unit tests passing (SingularityVault + AsterEngine)
- [x] Mock contracts for local testing (MockERC20, MockAsterDEX)
- [x] Web3 integration — Wagmi + RainbowKit + viem
- [x] Automated Keeper bot with harvest loop
- [x] Full deployment script with contract wiring
- [x] Configurable bounty system (1-5% BPS)

### Phase 5: Mainnet & Beyond 🚀
- [ ] Third-party security audit
- [ ] BNB Chain mainnet deployment
- [ ] Public keeper network activation
- [ ] DAO governance implementation
- [ ] Multi-chain expansion (Arbitrum, Base)

---

## 🔐 Security Considerations

| Mechanism | Implementation |
|-----------|---------------|
| **Non-Custodial** | Users hold svTokens; admin cannot access deposited funds |
| **Reentrancy Protection** | `ReentrancyGuard` on all deposit/withdraw functions |
| **Access Control** | `Ownable` + vault-only modifiers on sensitive functions |
| **Bounty Cap** | Keeper bounty capped at `MAX_BOUNTY = 500 bps (5%)` |
| **Emergency Unwind** | Owner can instantly recover all capital from strategies |
| **One-Time Engine Set** | Vault engine can only be set once — prevents admin override |
| **SafeERC20** | All token transfers use OpenZeppelin SafeERC20 |
| **Slippage Protection** | Minimum output amounts on PancakeSwap swaps |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Write tests** for your changes
4. **Run** `npx hardhat test` to ensure all tests pass
5. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
6. **Push** to the branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

---

## 📫 Connect with Me

<p align="left">
  <a href="mailto:pandudargah202@gmail.com">
    <img src="https://img.shields.io/badge/Email-pandudargah202%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://www.linkedin.com/in/pandu-darma-195a621b2/">
    <img src="https://img.shields.io/badge/LinkedIn-Pandu_Dargah-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://x.com/BTC_SEANA">
    <img src="https://img.shields.io/badge/X_(Twitter)-@BTC__SEANA-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" />
  </a>
  <a href="https://t.me/BTC_SEANA">
    <img src="https://img.shields.io/badge/Telegram-@BTC__SEANA-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Discord-pandudargah-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
  </a>
</p>

---

## 📄 License

Distributed under the **MIT License**. Copyright (c) 2026 **Pandu Dargah**. See `LICENSE` for more information.

---

<p align="center">
  <br/>
  <strong>⚡ SingularYield — The Self-Driving Yield Engine ⚡</strong>
  <br/>
  <sub>Autonomous Keepers • Trustless Compounding • Non-Custodial Vaults</sub>
  <br/><br/>
  <img src="https://img.shields.io/badge/Built_with-❤️-red?style=flat-square" alt="Built with love"/>
  <img src="https://img.shields.io/badge/Powered_by-BNB_Chain-F0B90B?style=flat-square&logo=binance&logoColor=white" alt="BNB Chain"/>
  <img src="https://img.shields.io/badge/Riquid-Partner-10B981?style=flat-square" alt="Riquid"/>
</p>

