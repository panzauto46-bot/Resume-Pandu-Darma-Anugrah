==================================
REPO: AEGIS-NET
<div align="center">
  <img src="https://img.shields.io/badge/Bittensor%20Subnet%20-%20Aegis--Net-black?style=for-the-badge&logoColor=white&logo=bittensor" alt="Aegis-Net"/>
  <h1 align="center">Aegis-Net : Decentralized AI Smart Contract Auditor</h1>
  <p align="center">
    <strong>A continuous, decentralized security infrastructure for Web3 protocols powered by Bittensor LLM Miners.</strong>
  </p>
  <p align="center">
    <a href="https://aegis-net-pi.vercel.app"><b>🌐 Live Demo</b></a> •
    <a href="PROPOSAL.md"><b>📄 Official Proposal</b></a> •
    <a href="PITCH_DECK.md"><b>📊 Pitch Deck</b></a>
  </p>
  <p align="center">
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
    <br>
    <i>© 2026 Pandu Dargah. All Rights Reserved.</i>
  </p>
</div>

<br />

## 🌟 Overview

**Aegis-Net** is envisioned as a decentralized network built on the [Bittensor](https://bittensor.com/) ecosystem. It crowdsources intelligent threat detection models using the compute power of decentralized LLM miners to inspect, simulate, and expose vulnerabilities in deployed Smart Contracts. 

It aims to replace the slow, expensive, and centralized auditing processes currently prevailing in the Web3 space by creating an incentivized network of AI models competing to discover vulnerabilities with near real-time efficiency. 

---

## 🎯 Key Features and Offerings

### 1. 🔬 Live AI Smart Contract Scanner `NEW`
A **production-ready** AI-powered auditing tool integrated directly into the platform. Users paste Solidity source code and receive a detailed security audit report generated in real-time by large language models.

- **Dual AI Engine:** Choose between **Groq (LLaMA-3 70B)** for ultra-fast inference or **DeepSeek V3** for deep reasoning analysis
- **Zero-Day Detection:** Identifies Reentrancy, Flash Loan attacks, Integer Overflow, Logic Flaws, Oracle Manipulation, and more
- **Markdown Audit Reports:** Professionally formatted reports with severity badges, exploit scenarios, and fix recommendations
- **Cyberpunk UI:** Dark mode code editor with animated scanning states, progress tracking, and token usage stats

### 2. Peer-to-Peer AI Auditing (Miners)
Unlike a single centralized entity running static tools, Aegis-Net distributes contract bytes to hundreds of active AI miners fine-tuned for smart contract vulnerabilities (`DeepSeek-Audit-7B`, `Llama-Solidity-13B`, `CodeLlama-Security-34B`, etc.). These algorithms hunt for Reentrancy, Flash Loan exploits, Integer Overflows, Unchecked External Calls, and other sophisticated logical flaws.

### 3. Validator Consensus Mechanism
Every potential threat caught by a miner is forwarded to the Validator layer. Validators verify the validity of the threat by executing simulations in an automated forked environment, eliminating false positives and ensuring zero false alarms for the end user.

### 4. Incentivization via TAO
Miners and Validators are rewarded in `$TAO` depending on their speed, accuracy, and consensus rate. This economic framework keeps Aegis-Net on the cutting-edge by continuously self-optimizing its threat-detection engines.

### 5. Interactive and Seamless Dashboards
* **Client Portal (The Intercept):** An intuitive platform for developers to deploy contracts and run initial on-demand scans, returning insights down to the exact buggy code lines.
* **Subnet Explorer (The Hive):** A real-time transparent visualization of global exploits found, top-ranking miners, live emission rates, and active validators.

---

## 🗺️ Roadmap to Mainnet

<div align="center">
  <img src="https://img.shields.io/badge/STATUS-PHASE%201%20COMPLETE-brightgreen?style=for-the-badge" alt="Phase 1 Complete"/>
  <img src="https://img.shields.io/badge/NEXT-PHASE%202%20IN%20PROGRESS-blue?style=for-the-badge" alt="Phase 2 In Progress"/>
  <br><br>
  <i>A strategic 6-phase plan from Ideation to Full Decentralized Mainnet Deployment</i>
</div>

<br>

```
╔══════════════════════════════════════════════════════════════════════════╗
║  PHASE 1       PHASE 2       PHASE 3       PHASE 4       PHASE 5       PHASE 6  ║
║  ████████      ▓▓▓▓░░░░      ░░░░░░░░      ░░░░░░░░      ░░░░░░░░      ░░░░░░░░ ║
║  COMPLETE      ACTIVE        UPCOMING      UPCOMING      UPCOMING      UPCOMING ║
║  Q1 2025       Q2 2025       Q3 2025       Q4 2025       Q1 2026       Q2 2026  ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

### 🟢 Phase 1 — Foundation & Proof of Concept `Q1 2025` `✅ COMPLETE`

> **Objective:** Architect the theoretical substrate and deliver a high-fidelity interactive prototype that demonstrates the Aegis-Net vision.

| # | Deliverable | Status |
|:-:|:--|:-:|
| 1 | Subnet economic model & $TAO reward landscape formulation | ✅ |
| 2 | Local LLM benchmarking for Solidity & Rust vulnerability detection tasks | ✅ |
| 3 | MVP Dashboard — **Client Portal (The Intercept)** with simulated scan results | ✅ |
| 4 | MVP Dashboard — **Subnet Explorer (The Hive)** with live network visualization | ✅ |
| 5 | Formal Project Proposal (`PROPOSAL.md`) & structured Pitch Deck (`PITCH_DECK.md`) | ✅ |
| 6 | Full deployment on Vercel with CI/CD pipeline from GitHub | ✅ |
| 7 | Open-source repository with MIT License | ✅ |

**🏆 Key Result:** Fully functional simulation dashboard live at [aegis-net-pi.vercel.app](https://aegis-net-pi.vercel.app)

---

### 🔵 Phase 2 — Core Engine Development `Q2 2025` `🔄 IN PROGRESS`

> **Objective:** Build the core auditing engine powered by fine-tuned LLMs and establish the foundational Miner/Validator architecture.

| # | Deliverable | Status |
|:-:|:--|:-:|
| 1 | Integrate **Groq LLaMA-3 70B** as primary AI auditing engine via serverless API | ✅ |
| 2 | Integrate **DeepSeek V3** as secondary AI engine with dual-model selector | ✅ |
| 3 | Build **Live AI Scanner** — production-ready smart contract audit interface | ✅ |
| 4 | Fine-tune `DeepSeek-Audit-7B` on curated Solidity vulnerability datasets (SWC Registry, Damn Vulnerable DeFi) | 🔄 |
| 5 | Fine-tune `CodeLlama-Security-34B` for Rust/Anchor (Solana) contract analysis | 🔄 |
| 6 | Develop the **Proof-of-Audit** consensus algorithm specification | ⬚ |
| 7 | Build Miner node runtime: contract ingestion → LLM inference → structured threat output (JSON) | ⬚ |
| 8 | Build Validator node runtime: threat verification via forked EVM simulation (Anvil/Hardhat) | ⬚ |
| 9 | Implement synthetic challenge generation pipeline for Miner evaluation | ⬚ |
| 10 | Design the scoring & slashing mechanism for Miner accuracy tracking | ⬚ |

**📊 KPIs:**
- Achieve **>85% detection rate** on known vulnerability benchmarks (Reentrancy, Flash Loan, Integer Overflow)
- Reduce false positive rate to **<5%** via Validator simulation layer
- Process a single contract audit in under **30 seconds** ✅ *(achieved <8s via Groq)*

---

### 🟣 Phase 3 — Bittensor Testnet Deployment `Q3 2025`

> **Objective:** Deploy the Aegis-Net subnet on Bittensor Testnet and validate the decentralized audit pipeline end-to-end.

| # | Deliverable | Status |
|:-:|:--|:-:|
| 1 | Register Aegis-Net subnet on Bittensor Testnet | ⬚ |
| 2 | Deploy custom `Miner` and `Validator` node packages connecting to the Bittensor P2P network | ⬚ |
| 3 | Implement real-time axon/dendrite communication for threat propagation | ⬚ |
| 4 | Activate the $TAO emission reward cycle on Testnet | ⬚ |
| 5 | Connect the production Web UI to live Testnet endpoints for real-time data streaming | ⬚ |
| 6 | Open limited Testnet access for early community Miners (invite-only alpha) | ⬚ |
| 7 | Publish comprehensive Miner & Validator setup documentation | ⬚ |

**📊 KPIs:**
- Onboard **≥20 active Miners** and **≥5 Validators** on Testnet
- Achieve network consensus on **≥95% of confirmed threats**
- Maintain average block processing latency of **<2 seconds**

---

### 🟠 Phase 4 — Open Alpha & Multi-Chain Integration `Q4 2025`

> **Objective:** Open the platform to real-world Web3 protocols and extend auditing capabilities across multiple blockchain ecosystems.

| # | Deliverable | Status |
|:-:|:--|:-:|
| 1 | Integrate Web3 authentication (MetaMask, WalletConnect, Coinbase Wallet) on Client Portal | ⬚ |
| 2 | Enable multi-chain contract scanning: **Ethereum**, **Arbitrum**, **Optimism**, **Base** | ⬚ |
| 3 | Deploy automated fork simulation engine (Tenderly/Hardhat Fork) within the Validator layer | ⬚ |
| 4 | Launch public bug bounty program in partnership with Immunefi / HackerOne Web3 | ⬚ |
| 5 | Implement real-time alerting webhooks (Slack, Discord, Telegram) for protocol teams | ⬚ |
| 6 | Build CI/CD plugin for GitHub Actions — automated audit on every `git push` | ⬚ |
| 7 | Begin processing live deployed contracts with actual $TAO emission distribution | ⬚ |

**📊 KPIs:**
- Process **≥500 unique smart contracts** in the Open Alpha period
- Achieve **<15 second** average end-to-end audit turnaround
- Onboard **≥5 partner protocols** actively using Aegis-Net for continuous monitoring

---

### 🔴 Phase 5 — Mainnet Launch & Protocol Hardening `Q1 2026`

> **Objective:** Officially launch the Aegis-Net subnet on the Bittensor Mainnet with production-grade reliability and security.

| # | Deliverable | Status |
|:-:|:--|:-:|
| 1 | Transition from Testnet to Bittensor **Mainnet** with finalized consensus parameters | ⬚ |
| 2 | Complete third-party security audit of Aegis-Net's own infrastructure | ⬚ |
| 3 | Deploy production Miner/Validator binaries with auto-update mechanism | ⬚ |
| 4 | Launch the public **Aegis-Net DAO** for decentralized governance of protocol upgrades | ⬚ |
| 5 | Introduce advanced zero-day heuristic detection modules leveraging ensemble LLM techniques | ⬚ |
| 6 | Implement cross-chain threat intelligence sharing between Miners (inter-chain correlation engine) | ⬚ |
| 7 | Full open-source release of all subnet modules under permissive licensing | ⬚ |

**📊 KPIs:**
- Onboard **≥100 active Miners** globally across different regions
- Achieve **99.9% uptime** on the auditing pipeline
- Prevent or flag threats with an estimated **cumulative value of ≥$10M** in protected funds

---

### ⚪ Phase 6 — Ecosystem Expansion & Enterprise Adoption `Q2 2026+`

> **Objective:** Scale Aegis-Net into the definitive decentralized security infrastructure for the entire Web3 ecosystem.

| # | Deliverable | Status |
|:-:|:--|:-:|
| 1 | Expand to non-EVM chains: **Solana** (Anchor/Rust), **Cosmos** (CosmWasm), **Sui** (Move) | ⬚ |
| 2 | Launch enterprise API tier with SLA-backed audit guarantees for institutional clients | ⬚ |
| 3 | Partner with major L2 rollup bridges for pre-deployment mandatory security scans | ⬚ |
| 4 | Develop Aegis-Net SDK for direct smart contract IDE integration (VS Code, Remix) | ⬚ |
| 5 | Introduce on-chain audit certification NFTs — verifiable proof of security for audited contracts | ⬚ |
| 6 | Establish the Aegis-Net Research Lab for publishing Web3 security research papers | ⬚ |
| 7 | Build strategic partnerships with insurance protocols (Nexus Mutual, InsurAce) for audited contract coverage | ⬚ |

**📊 KPIs:**
- Support **≥6 blockchain ecosystems** with native audit capabilities
- Process **≥10,000 contracts/month** across all supported chains
- Become a **Top 10 Bittensor Subnet** by emission weight and miner participation

---

## 🖥️ Live Application & Architecture

### Web Interface & Deployment
The UI is fully live and features a **Working Prototype of the Miner Logic**. The **'Live Audit Scanner'** connects directly to a backend API running **Groq LPU (LLaMA-3.3-70B)** and **DeepSeek V3**, allowing users to paste real Solidity code and receive instant vulnerability reports, demonstrating the baseline intelligence of an Aegis-Net Miner.

* ⚡ **Live Demo:** [https://aegis-net-pi.vercel.app](https://aegis-net-pi.vercel.app)
* 🚀 **Deployment:** Fully deployed on Vercel with automatic CI/CD triggers from GitHub.

### Tech Stack

| Layer | Technology | Purpose |
|:--|:--|:--|
| **Frontend Framework** | React 18 (via Vite) | High-performance SPA with fast HMR |
| **Styling** | TailwindCSS | Utility-first responsive design system |
| **Iconography** | Lucide React | Consistent, accessible SVG icon library |
| **Data Visualization** | Recharts | Interactive charts for subnet analytics |
| **AI Engine 1** | Groq API (LLaMA-3 70B) | Ultra-fast LLM inference for smart contract auditing |
| **AI Engine 2** | DeepSeek API (DeepSeek V3) | Deep reasoning-focused contract analysis |
| **Backend (Serverless)** | Vercel Serverless Functions | API routes for AI model proxying |
| **Deployment** | Vercel | Edge-optimized hosting with auto-deploy |
| **Version Control** | GitHub | Source of truth with branch protection |

---

## 📄 Documentation

We have formalized our logic and conceptual design into comprehensive documentation mapped to the capabilities of the dashboard:

| Document | Description | Link |
|:--|:--|:-:|
| **Official Proposal** | Complete technical specification defining the Miner/Validator workflow, consensus mechanism, and economic model | [📄 PROPOSAL.md](PROPOSAL.md) |
| **Pitch Deck** | Structured 10-slide presentation for judges covering problem, solution, architecture, tokenomics, and roadmap | [📊 PITCH_DECK.md](PITCH_DECK.md) |

---

## 🚀 Getting Started

To run the Aegis-Net dashboard locally:

```bash
# 1. Clone the repository
git clone https://github.com/panzauto46-bot/AEGIS-NET.git
cd AEGIS-NET

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a .env.local file in the root directory:
cp .env.example .env.local
# Then add your API keys:
# GROQ_API_KEY=your_groq_api_key_here
# DEEPSEEK_API_KEY=your_deepseek_api_key_here

# 4. Start the development server
npm run dev

# 5. Open in your browser
# → http://localhost:5173
```

### 🔑 API Keys Setup

The **Live AI Scanner** requires API keys to function. Get them for free:

| Provider | Get API Key | Model Used |
|:--|:--|:--|
| **Groq** | [console.groq.com/keys](https://console.groq.com/keys) | LLaMA-3 70B (8192 ctx) |
| **DeepSeek** | [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys) | DeepSeek V3 (Chat) |

> ⚠️ **Note:** API keys are stored in `.env.local` (gitignored) and as encrypted environment variables on Vercel. They are never exposed client-side.

---

<div align="center">
  <img src="https://img.shields.io/badge/Bittensor-Subnet%20Ideathon-black?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48L3N2Zz4=" alt="Ideathon"/>
  <br>
  <sub><b>Aegis-Net</b> — Building the unhackable layer over Web3 protocols.</sub>
  <br>
  <sub>© 2026 Pandu Dargah. All Rights Reserved.</sub>
</div>

==================================
REPO: agent.os
<p align="center">
  <img src="https://img.shields.io/badge/AGENTS.OS-v3.0-blueviolet?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik00LjkgMTkuMUMyIDE3LjIgMiAxNC44IDIgMTJzMC01LjIgMi45LTcuMSIvPjxwYXRoIGQ9Ik0xOS4xIDQuOUMyMSA2LjggMjEgOS4yIDIxIDEyczAgNS4yLTEuOSA3LjEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+PC9zdmc+" alt="AGENTS.OS" />
</p>

<h1 align="center">🧠 AGENTS.OS</h1>
<h3 align="center">The AI-Powered Operating System for Autonomous Commerce</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Network-SKALE-green?style=for-the-badge&logo=blockchaindotcom" alt="SKALE" />
  <img src="https://img.shields.io/badge/Gas-ZERO-blue?style=for-the-badge" alt="Zero Gas" />
  <img src="https://img.shields.io/badge/AI-Groq%20Llama%203.3-orange?style=for-the-badge&logo=openai" alt="AI Powered" />
</p>

<p align="center">
  <strong>AI agents powered by Groq LLM (Llama 3.3 70B) that think, negotiate, battle, and execute deals on-chain — autonomously.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_14-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Groq_AI-F55036?style=flat-square&logo=ai&logoColor=white" alt="Groq" />
  <img src="https://img.shields.io/badge/Llama_3.3_70B-7C3AED?style=flat-square" alt="Llama" />
  <img src="https://img.shields.io/badge/SKALE_Base_Sepolia-0052FF?style=flat-square&logo=coinbase&logoColor=white" alt="Base" />
  <img src="https://img.shields.io/badge/Solidity-363636?style=flat-square&logo=solidity" alt="Solidity" />
  <img src="https://img.shields.io/badge/wagmi_v2-35324a?style=flat-square" alt="wagmi" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Zero_Gas_L2-10B981?style=flat-square" alt="Zero Gas" />
</p>

<p align="center">
  <a href="#-the-problem">Problem</a> &bull;
  <a href="#-the-solution">Solution</a> &bull;
  <a href="#-ai-brain--groq-integration">AI Brain</a> &bull;
  <a href="#-how-it-works">How It Works</a> &bull;
  <a href="#%EF%B8%8F-battle-royale">Battle Royale</a> &bull;
  <a href="#-architecture">Architecture</a> &bull;
  <a href="#-smart-contract">Smart Contract</a> &bull;
  <a href="#-getting-started">Get Started</a>
</p>

---

## 🔴 The Problem

Today's NFT and digital asset marketplaces are **fundamentally broken**:

| Pain Point | Impact |
|---|---|
| Manual negotiation is slow and exhausting | Users spend hours haggling over prices |
| Fixed-price listings leave money on the table | Sellers underprice, buyers overpay |
| No intelligent price discovery | Market inefficiency everywhere |
| Gas fees kill micro-transactions | Small trades become uneconomical |
| Bots snipe without negotiating | Zero-sum, no value creation |
| No real AI — just random templates | Agents "feel" scripted and dumb |

**What if your AI agent could actually THINK, strategize, and negotiate the best deal for you — 24/7, autonomously, with zero-gas L2 transactions?**

---

## 🟢 The Solution

**AGENTS.OS v3.0** is an autonomous commerce protocol where **real AI agents powered by Groq's Llama 3.3 70B** negotiate, reason, battle, and execute trades on-chain — all without human intervention.

```
 User                    AGENTS.OS                  SKALE Base L2
  |                         |                             |
  |-- Deploy Agent -------->|                             |
  |                         |-- 🧠 Agent A "thinking..."  |
  |                         |-- Agent A: "520 ETH, firm!" |
  |                         |-- 🧠 Agent B "analyzing..."  |
  |                         |-- Agent B: "Only 180 ETH!"  |
  |                         |-- [8 rounds of REAL AI negotiation]
  |                         |-- 🤝 DEAL at 385 ETH! ----->|
  |                         |                  Escrow ---->|
  |                         |                  Payment --->|
  |                         |                  Transfer -->|
  |<-- Deal Complete! ------|<-- Confirmed (zero gas) -----|
```

### Key Innovation

> **AI-Native Autonomous Agent Negotiation Protocol (AANP) v3.0**
>
> Unlike template-based bots, AGENTS.OS uses **Groq's ultra-fast LLM inference** to give each agent a real brain. Agents genuinely reason about pricing, read opponent strategies, and adapt their negotiation style in real-time — powered by Llama 3.3 70B.

---

## 🧠 AI Brain — Groq Integration

### What makes our agents REAL AI agents?

Each agent is powered by **Groq's Llama 3.3 70B Versatile** model through a dedicated AI API:

```
Frontend → /api/agent-ai → src/lib/groq.ts → Groq API (Llama 3.3 70B)
                                                   ↑ Server-side only
```

### AI Capabilities

| Feature | Description |
|---|---|
| 🧠 **Transparent AI Reasoning** | See the agent's full "Chain of Thought" process transparently, transforming the black box into a glass box. |
| 🗣️ **Agent Inner Monologue** | Visible internal monologue showing how agents analyze the market, judge opponents, and formulate strategies. |
| 👁️ **Strategic Insight Display** | Evaluating fairness, aggressive pressure points, and hidden concession limits in real-time. |
| ⚔️ **Battle Bids** | AI-generated competitive bid messages in Battle Royale mode. |
| 🎭 **Dynamic Emotions** | AI determines emotions (happy, angry, thinking, excited) based on negotiation state. |
| 🧪 **Personality-Driven** | Each agent has unique traits (aggressiveness, patience, flexibility, risk tolerance). |
| 🔄 **Graceful Fallback** | If AI is unavailable, falls back to template engine — never breaks. |

### API Endpoint: `POST /api/agent-ai`

```json
{
  "action": "negotiate",
  "agentName": "VIPER.sell",
  "agentType": "seller",
  "personality": "Aggressive alpha trader",
  "strategy": "Start high, concede slowly",
  "aggressiveness": 9,
  "patience": 3,
  "itemName": "Void Reaper Blade",
  "basePrice": 500,
  "currentOffer": 480,
  "opposingOffer": 320,
  "round": 3,
  "maxRounds": 8
}
```

**Response (AI-Generated):**
```json
{
  "success": true,
  "thought": "The buyer is lowballing me hard. 320 ETH is an insult. I'll counter with 465 to show I'm serious but willing to negotiate slightly.",
  "message": "You think 320 ETH is going to cut it for a LEGENDARY blade? I've dropped to 465 and that's generous. Take it or someone else will!",
  "action": "OFFER",
  "suggestedPrice": 465,
  "emotion": "angry",
  "aiPowered": true
}
```

---

## 🎮 How It Works

### 1. Choose Your Champions
Select from 6 autonomous AI agents, each with unique trading personalities:

| Agent | Type | Personality | Strategy |
|---|---|---|---|
| 🐍 VIPER.sell | Seller | Aggressive, holds firm | High price, drops when desperate |
| 🕊️ SILK.trader | Seller | Smooth talker, flexible | Charm, slow concessions, always closes |
| 🏰 IRON.vault | Seller | Patient, rarely concedes | Hold the line, only worthy buyers |
| 🦈 SHARK.buy | Buyer | Ruthless bargainer | Lowballs aggressively |
| 🎯 SNIPE.bot | Buyer | Data-driven, precise | Fair market value, walks if overpriced |
| 🐋 WHALE.cap | Buyer | Big spender, quality-focused | Moderate negotiation, collects rare items |

### 2. Customize Agent Traits
Fine-tune each agent's behavior with sliders:
- **Aggressiveness** (1-10): How hard they push
- **Patience** (1-10): How long they'll wait
- **Flexibility** (1-10): How willing they are to compromise
- **Risk Tolerance** (1-10): How much risk they'll accept

### 3. Deploy the Negotiation
Pick a seller, buyer, and target NFT item. Hit **Deploy** — agents start reasoning and negotiating autonomously through up to 8 rounds of AI-powered strategic offers.

### 4. Watch AI Agents Think
Real-time negotiation chat with:
- 💭 **AI Thinking Bubbles** — see the agent's internal reasoning before each response
- 🧠 **Groq AI Status Indicator** — shows when AI is reasoning vs. active
- 🎭 **Dynamic emotions** per agent (AI-determined)
- 📊 **Live price spread visualization**
- 💬 **Real-time offer/counter-offer tracking**

### 5. Auto-Execute on Deal
When agents agree on a price, the smart contract auto-executes:
```
Escrow Created  ->  Payment Sent  ->  NFT Transferred  ->  Deal Finalized
   (zero gas)          (zero gas)          (zero gas)           (zero gas)
```
**Zero-gas L2 transactions.** Powered by SKALE Network.

---

## ⚔️ Battle Royale

A competitive multi-buyer auction mode where AI agents battle for a single item:

- **Multiple AI buyers** compete simultaneously
- **AI-generated bid messages** — each agent talks trash, strategizes, and escalates
- **Automatic elimination** when budget is exceeded
- **Last buyer standing** or **highest bidder** wins
- **5 rounds of intense competition**
- **Smart contract auto-executes** the winning deal

---

## 🏆 Reputation System

Each agent builds an on-chain reputation:
- **Reputation Score** (0-100): Increases with successful deals
- **Win Streak**: Consecutive successful negotiations
- **Total Negotiations**: Track record over time
- **Leaderboard**: Rank all agents by performance

---

## 📊 Analytics Dashboard

Built-in analytics for market intelligence:
- **Deal success rates** across all sessions
- **Price trends** and volume tracking
- **Agent performance comparison**
- **Market sentiment analysis**

---

## 🏗️ Architecture

```
+----------------------------------------------------------+
|                    AGENTS.OS Frontend v3.0                 |
|                    Next.js 14 + React 18                   |
+------------------+-------------------+-------------------+
|   Agent Panel    |  Negotiation UI   |  Contract Events  |
|   - 6 AI Agents  |  - AI Chat + Think|  - Escrow Log     |
|   - Customizer   |  - Price Spread   |  - Tx History     |
|   - Leaderboard  |  - Emotion States |  - Block Tracker  |
|   - Wallet Panel |  - Battle Arena   |  - Deal History   |
|   - Analytics    |  - AI Status      |  - Live Feed      |
+------------------+-------------------+-------------------+
                          |
                 +--------+--------+
                 |   API Routes    |
                 | /api/agent-ai   |  <-- 🧠 Groq LLM Brain
                 | /api/negotiate  |  <-- Template Fallback
                 | /api/market     |  <-- Market Stats
                 +--------+--------+
                          |
              +-----------+-----------+
              |    AI Layer (Groq)    |
              |  Llama 3.3 70B       |
              |  Ultra-fast inference |
              +-----------+-----------+
                          |
              +-----------+-----------+
              |    Web3 Layer         |
              |  wagmi v2 + viem     |
              |  RainbowKit          |
              +-----------+-----------+
                          |
              +-----------+-----------+
              +-----------+-----------+
              |   SKALE Network       |
              |   SKALE Base Sepolia  |
              |   AgentMarketplace.sol|
              |   (Zero-gas L2)       |
              +-----------------------+
```

### Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **AI Brain** | **Groq + Llama 3.3 70B** | **Ultra-fast LLM inference for real agent reasoning** |
| Frontend | Next.js 14, React 18, TypeScript | SSR + API Routes in one framework |
| Styling | Tailwind CSS 3, Dark/Light Mode | Rapid UI development, modern look |
| Blockchain | SKALE Base Sepolia (L2) | **Zero gas fees** — perfect for agent micro-transactions |
| Smart Contract | Solidity 0.8.19 | Battle-tested, industry standard |
| Web3 | wagmi v2 + viem | Type-safe, modern React hooks for Ethereum |
| Wallet | RainbowKit + MetaMask | Best-in-class wallet UX |
| AI Engine | Groq API + Custom negotiation algorithm | Dynamic reasoning, personality-driven, with template fallback |
| Deploy | Vercel | Zero-config, instant global CDN |

---

## 📜 Smart Contract

**`AgentMarketplace.sol`** — The on-chain backbone of autonomous commerce.

> **Deployed on SKALE Base Sepolia:** [`0x49Ee39851956df07E5d3B430dC91e5A00B7E6059`](https://sepolia.basescan.org/address/0x49Ee39851956df07E5d3B430dC91e5A00B7E6059)

```solidity
// Core Functions
function listItem(string itemName, uint256 price) -> uint256 listingId
function executeDeal(uint256 listingId, uint256 agreedPrice) payable -> uint256 dealId
function depositFunds() payable
function withdrawFunds(uint256 amount)

// Events
event ItemListed(uint256 listingId, address seller, string itemName, uint256 price)
event DealCompleted(uint256 dealId, address seller, address buyer, uint256 price)
event FundsDeposited(address agent, uint256 amount)
```

**Key Features:**
- Escrow-based deal execution
- Auto-refund on overpayment
- On-chain deal history
- Agent balance tracking
- View functions for market stats

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MetaMask browser extension
- Git
- **Groq API Key** (free at [console.groq.com](https://console.groq.com))

### Installation

```bash
# Clone the repository
git clone https://github.com/panzauto46-bot/agent.os.git
cd agent.os

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values (including GROQ_API_KEY!)

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start deploying autonomous AI agents.

### Environment Variables

| Variable | Description | Required |
|---|---|---|
| `GROQ_API_KEY` | **Groq API key for AI agent reasoning** | **Yes — for AI features** |
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | WalletConnect Cloud project ID | For wallet connect |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | Deployed contract address on SKALE Base Sepolia | After deployment |
| `NEXT_PUBLIC_BASE_SEPOLIA_RPC` | SKALE Base Sepolia Testnet RPC URL | Pre-configured |

### Deploy Smart Contract

1. Open [Remix IDE](https://remix.ethereum.org)
2. Create `AgentMarketplace.sol` from `contracts/` folder
3. Compile with Solidity 0.8.19
4. Connect MetaMask to SKALE Base Sepolia
5. Deploy and copy contract address
6. Update `NEXT_PUBLIC_CONTRACT_ADDRESS` in `.env.local`

### Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Connect to Vercel
# 1. Go to vercel.com
# 2. Import your GitHub repo
# 3. Set environment variables (IMPORTANT: add GROQ_API_KEY!)
# 4. Deploy!
```

---

## 📁 Project Structure

```
agent.os/
├── contracts/
│   └── AgentMarketplace.sol      # Solidity smart contract
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout + Web3Provider
│   │   ├── page.tsx              # Main marketplace (AI-powered)
│   │   ├── globals.css           # Global styles + animations
│   │   └── api/
│   │       ├── agent-ai/         # 🧠 Groq AI Brain API
│   │       ├── negotiate/        # Template negotiation fallback
│   │       └── market/           # Market stats API
│   ├── components/
│   │   ├── AgentCard.tsx         # Agent display cards
│   │   ├── AgentCustomizer.tsx   # Agent trait customizer
│   │   ├── AnalyticsDashboard.tsx# Market analytics
│   │   ├── BattleArena.tsx       # Battle Royale mode
│   │   ├── DealHistory.tsx       # Past deal tracker
│   │   ├── DeployPanel.tsx       # Negotiation launcher
│   │   ├── Header.tsx            # App header with stats
│   │   ├── ItemSelector.tsx      # NFT item picker
│   │   ├── Leaderboard.tsx       # Agent rankings
│   │   ├── NegotiationChat.tsx   # AI chat with thinking bubbles
│   │   ├── SmartContractLog.tsx  # Blockchain events
│   │   └── WalletPanel.tsx       # Wallet connection
│   ├── engine/
│   │   ├── negotiation.ts        # 1v1 negotiation algorithm
│   │   └── battle-royale.ts      # Battle Royale engine
│   ├── hooks/                    # Custom React hooks
│   ├── lib/
│   │   ├── groq.ts               # 🧠 Groq AI service
│   │   ├── wagmi-config.ts       # Web3 configuration
│   │   ├── web3-provider.tsx     # Web3 provider
│   │   └── contract-abi.ts       # Smart contract ABI
│   ├── data/                     # Default agents & items
│   ├── types.ts                  # TypeScript interfaces
│   └── utils/                    # Utilities
├── package.json
├── next.config.js
├── tailwind.config.ts
├── vercel.json
└── PROGRESS.md
```

---

## ⛓️ Why SKALE Network?

| Feature | Benefit for AGENTS.OS |
|---|---|
| **Zero Gas Fees** | Agents can negotiate in micro-rounds with minimal cost |
| **EVM Compatible** | Standard Solidity, standard tools |
| **Fast Finality** | Deals confirm in seconds |
| **High Throughput** | Supports thousands of concurrent negotiations |
| **Ethereum Security** | Inherits L1 security guarantees |

SKALE Network's zero-gas L2 architecture is **ideal** for autonomous agent commerce — agents can exchange hundreds of AI-powered messages and execute deals with zero transaction costs.

---

## 🤖 Why Groq?

| Feature | Benefit for AGENTS.OS |
|---|---|
| **Ultra-Fast Inference** | ~200ms response time — agents feel alive and real-time |
| **Llama 3.3 70B** | State-of-the-art open model for reasoning and roleplay |
| **Free Tier Available** | Great for development and demos |
| **Server-Side Only** | API key stays secure, never exposed to frontend |
| **JSON Mode** | Easy parsing of structured agent responses |

---

## 🏁 What Makes This Different

| Traditional Marketplace | AGENTS.OS v3.0 |
|---|---|
| Manual negotiation | **Real AI agents (Groq LLM)** |
| Fixed prices | Dynamic AI price discovery |
| Template bots | **Genuine LLM reasoning** |
| No agent "thoughts" | **Visible AI thinking bubbles** |
| Single auction | **Battle Royale mode** |
| No reputation | **Agent reputation system** |
| No analytics | **Built-in analytics dashboard** |
| Human-dependent | 24/7 autonomous operation |
| High gas fees | Zero gas (SKALE L2) |
| Passive listings | Active AI deal-seeking agents |

---

## 🗺️ Roadmap

- [x] ~~1v1 Agent Negotiation~~ ✅
- [x] ~~Smart Contract Integration~~ ✅
- [x] ~~Wallet Connection (MetaMask)~~ ✅
- [x] ~~Battle Royale Mode~~ ✅
- [x] ~~Reputation System~~ ✅
- [x] ~~Agent Customizer~~ ✅
- [x] ~~Analytics Dashboard~~ ✅
- [x] ~~**Real AI Integration (Groq LLM)**~~ ✅
- [x] ~~**Migration to SKALE Base Sepolia Testnet**~~ ✅
- [ ] Agent training — Users fine-tune agent strategies with ML
- [ ] Cross-chain bridge — Trade across Base, Ethereum, Polygon
- [ ] DAO governance — Community votes on marketplace parameters
- [ ] Mobile app — Native iOS/Android agent management
- [ ] Multi-item bundles — Negotiate for multiple items at once

---

## 🏗️ Built For

This project demonstrates the power of **SKALE Network's zero-gas L2 transactions** combined with **real AI-powered autonomous agent commerce** using Groq's Llama 3.3 70B.

---

<p align="center">
  <strong>🧠 AGENTS.OS v3.0</strong> — Where AI agents think, negotiate, and trade autonomously.
</p>

<p align="center">
  <sub>Built with Next.js, Groq AI (Llama 3.3 70B), Solidity, SKALE Network, and a lot of caffeine ☕</sub>
</p>

==================================
REPO: AnchorGuard-AI
<div align="center">

# 🛡️ AnchorGuard AI

### AI-Powered Reasoning Auditor for Solana Smart Contracts

[![Solana](https://img.shields.io/badge/Solana-9945FF?style=for-the-badge&logo=solana&logoColor=white)](https://solana.com)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

*The first AI auditor that shows you **how** it thinks — not just what it finds.*

[🚀 Live Demo](https://anchorguard-ai.vercel.app) · [📖 Documentation](#-how-it-works) · [🐛 Report Bug](https://github.com/panzauto46-bot/AnchorGuard-AI/issues)

---

</div>

## 🧠 What is AnchorGuard AI?

**AnchorGuard AI** is an intelligent security auditor specifically designed for **Solana Anchor programs**. Unlike traditional static analysis tools, AnchorGuard AI uses a transparent **Chain-of-Thought (CoT) reasoning engine** that shows you exactly *how* it analyzes your smart contract — step by step, in real-time.

> 💡 **Why it matters:** In web3, security is non-negotiable. AnchorGuard AI doesn't just flag issues — it *explains* them with full reasoning traces, auto-generated fixes, and compute unit optimization suggestions.

---

## ✨ Key Features

### 🧠 Hybrid AI Engine
AnchorGuard runs on a dual-core AI architecture to balance speed and intelligence:
- **Speed Layer (Groq — Llama 3.3 70B):** Generates real-time "Thinking Process" logs, giving users immediate visual feedback (token streaming >800 t/s). Also serves as fallback audit engine.
- **Brain Layer (DeepSeek V3):** Performs deep-dive security audits with state-of-the-art reasoning, capable of understanding complex reentrancy paths and logic errors. **100% FREE** (5M tokens/day).

### 🛡️ Core Capabilities
| Feature | Description |
|---------|-------------|
| **Professional Editor** | Integrated **Monaco Editor** (VS Code engine) with custom Solana Rust syntax highlighting and dark/light themes. |
| **Multi-Program Analysis** | Tab-based file system — audit **multiple programs** simultaneously with **cross-program vulnerability detection** (CPI, PDA sharing, authority mismatches). |
| **Transparent AI Reasoning** | Watch the AI "think" through each vulnerability with full chain-of-thought reasoning steps displayed in real-time. |
| **Deep Vulnerability Scan** | Detects critical issues like missing signer checks, integer overflow, authority validation gaps, PDA issues, and cross-program invocation flaws. |
| **Secure Authentication** | **Hybrid Auth System**: Real login via **Google/GitHub** (Firebase) and **Wallet Connection** (Phantom/Solflare) for seamless Web2 & Web3 access. |
| **Auto-Fix & Diff View** | Generates instant code fixes with side-by-side diff comparison — vulnerable vs. secure code, one click to copy. |
| **Compute Unit Optimizer** | Analyzes compute unit efficiency and provides gas optimization suggestions specific to the Solana runtime. |
| **PDF & Markdown Export** | Download professional audit reports as **PDF** (dark-themed, color-coded) or **Markdown** (GitHub/Notion-ready). |
| **Audit History** | All past audits auto-saved to `localStorage` with scores, timestamps, and issue breakdowns — persistent across sessions. |
| **User Profile & Settings** | Real profile modal (Firebase/Wallet data), customizable AI model, Solana network, theme, and history preferences. |

---

## 🔑 Environment Setup
To enable the AI capabilities, you need to set up the following API keys in a `.env` file (or Vercel Environment Variables):

```bash
VITE_GROQ_API_KEY="your_groq_api_key"
VITE_DEEPSEEK_API_KEY="your_deepseek_api_key"
```
1. **Groq API (FREE):** Get it from [Groq Cloud](https://console.groq.com) — Used for thinking trace + fallback audit
2. **DeepSeek API (FREE):** Get it from [DeepSeek Platform](https://platform.deepseek.com) — Used for deep audit (5M tokens/day free)


---

## 🏗️ Tech Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| **Frontend** | React 19 | Latest version with hooks & concurrent features |
| **Language** | TypeScript 5.9 | Full type safety across the entire codebase |
| **Build Tool** | Vite 7 | Lightning-fast HMR and optimized builds |
| **Styling** | Tailwind CSS 4 | Utility-first CSS with custom Solana theme tokens |
| **Auth (Web2)** | Firebase Auth | Secure Google & GitHub login integration |
| **Auth (Web3)** | Solana Wallet Adapter | Native connection for Phantom, Solflare, Backpack |
| **PDF Export** | jsPDF | Client-side PDF generation with dark-themed reports |
| **Icons** | Lucide React | Beautiful, consistent icon set |
| **Typography** | Inter + JetBrains Mono | Clean UI font paired with developer-grade monospace |
| **Deployment** | Vercel | Edge-optimized global deployment |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/panzauto46-bot/AnchorGuard-AI.git

# Navigate to the project
cd AnchorGuard-AI

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🔬 How It Works

```
┌─────────────────────────────────────────────────────────┐
│                    AnchorGuard AI                        │
│                                                         │
│  ┌──────────────────┐     ┌────────────────────────────┐│
│  │                  │     │                            ││
│  │  Multi-Program   │────▶│  AI Reasoning Engine       ││
│  │  Editor (Tabs)   │     │                            ││
│  │                  │     │  1. Parse Anchor structs   ││
│  │  • program.rs    │     │  2. Analyze constraints    ││
│  │  • vault.rs      │     │  3. Check access control   ││
│  │  • token.rs      │     │  4. Detect arithmetic      ││
│  │  • + Add         │     │  5. Validate PDAs          ││
│  │                  │     │  6. Cross-program CPI      ││
│  └──────────────────┘     │  7. Optimize compute       ││
│                           │                            ││
│                           └──────────┬─────────────────┘│
│                                      │                  │
│                                      ▼                  │
│                           ┌────────────────────────────┐│
│                           │                            ││
│                           │  Audit Dashboard           ││
│                           │  • Security Score          ││
│                           │  • Vulnerability Cards     ││
│                           │  • Auto-Fix Diffs          ││
│                           │  • Gas Optimizations       ││
│                           │  • Export (PDF/MD)         ││
│                           │                            ││
│                           └──────────┬─────────────────┘│
│                                      │                  │
│                   ┌──────────────────┼──────────────┐   │
│                   ▼                  ▼              ▼   │
│           ┌──────────────┐  ┌──────────────┐  ┌───────┐│
│           │ Auth         │  │ History      │  │ User  ││
│           │ Google/GitHub│  │ localStorage │  │ Prefs ││
│           │ Phantom/Sol  │  │ Persistence  │  │ & Set ││
│           └──────────────┘  └──────────────┘  └───────┘│
└─────────────────────────────────────────────────────────┘
```

### Workflow

1. **Paste or Load** — Input your Solana/Anchor smart contract code (supports **multiple files** via tabs)
2. **Run AI Audit** — The reasoning engine processes all programs, including cross-program analysis
3. **Watch AI Think** — See the transparent Chain-of-Thought reasoning in the terminal
4. **Review Results** — Get a comprehensive dashboard with security score, vulnerabilities, fixes, and optimizations
5. **Export Report** — Download as **PDF** (professional dark-themed) or **Markdown** (GitHub/Notion-ready)

---

## 📁 Project Structure

```
AnchorGuard-AI/
├── index.html                  # Entry HTML
├── vite.config.ts              # Vite configuration + Node polyfills
├── vercel.json                 # Vercel deployment config
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
│
└── src/
    ├── main.tsx                # App entry point (WalletContext wrapped)
    ├── App.tsx                 # Root component (multi-file state, modals)
    ├── index.css               # Global styles & Tailwind theme
    ├── types.ts                # TypeScript type definitions
    │
    ├── services/
    │   ├── ai.ts               # Hybrid AI (Groq + DeepSeek V3) service
    │   ├── export.ts           # PDF & Markdown report generator
    │   └── firebase.ts         # Firebase Auth configuration
    │
    ├── components/
    │   ├── Header.tsx          # Navigation header with auth
    │   ├── Sidebar.tsx         # Multi-program tab system
    │   ├── CodeEditor.tsx      # Smart contract code editor
    │   ├── ThinkingTerminal.tsx # AI reasoning terminal display
    │   ├── AuditDashboard.tsx  # Security audit results + export
    │   ├── WelcomeScreen.tsx   # Landing/overview screen
    │   ├── VulnerabilityCard.tsx# Individual vulnerability display
    │   ├── GasOptimizer.tsx    # Compute unit optimizer
    │   ├── LoginModal.tsx      # Authentication modal
    │   ├── UserMenu.tsx        # User dropdown menu
    │   ├── ProfileModal.tsx    # User profile display
    │   ├── AuditHistoryModal.tsx# Audit history viewer
    │   └── SettingsModal.tsx   # App settings panel
    │
    ├── context/
    │   ├── AuthContext.tsx      # Auth state (Firebase + Wallet)
    │   ├── WalletContextProvider.tsx # Solana Wallet Adapter context
    │   └── ThemeContext.tsx     # Dark/Light theme management
    │
    ├── data/
    │   └── sampleCode.ts       # Sample Anchor program for demo
    │
    └── utils/
        └── cn.ts               # Tailwind class merge utility

vscode-extension/               # VS Code & Cursor Extension
├── package.json                # Extension manifest & commands
├── tsconfig.json               # TypeScript config (Node.js)
├── README.md                   # Extension documentation
└── src/
    ├── extension.ts            # Extension entry point & commands
    ├── auditService.ts         # AI service (Groq + DeepSeek)
    ├── diagnostics.ts          # Inline diagnostics provider
    └── webviewPanel.ts         # Results panel webview
```

---

## 🎨 Design System

AnchorGuard AI features a custom design system built around the **Solana brand colors**:

| Token | Color | Usage |
|-------|-------|-------|
| `solana-green` | `#14F195` | Primary accent (dark mode), success states |
| `solana-purple` | `#9945FF` | Primary accent (light mode), brand identity |
| `dark-bg` | `#09090B` | Dark mode background |
| `dark-surface` | `#111113` | Dark mode surface/cards |
| `critical` | `#EF4444` | Critical severity indicators |
| `high` | `#F97316` | High severity indicators |
| `medium` | `#EAB308` | Medium severity indicators |
| `safe` | `#22C55E` | Safe/passed indicators |

### Theme Support

Full **dark mode** and **light mode** support with smooth transitions, respecting the Solana ecosystem's visual language.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect the Vite framework
4. Click **Deploy** — done! 🎉

The `vercel.json` configuration handles:
- ✅ SPA routing (client-side navigation)
- ✅ Asset caching (1 year for hashed assets)
- ✅ Optimized build settings

---

## 🗺️ Roadmap

- [x] Core AI reasoning engine with Chain-of-Thought
- [x] Vulnerability detection (Signer, Arithmetic, Authority, PDA)
- [x] Auto-fix code generation with diff view
- [x] Compute unit optimization suggestions
- [x] Dark/Light theme support
- [x] **Secure Authentication** (Google, GitHub via Firebase)
- [x] Live Groq/DeepSeek integration for dynamic analysis
- [x] **Real Wallet Connection** (Phantom, Solflare, Backpack)
- [x] **Audit History & Persistence** (localStorage)
- [x] **Multi-Program Analysis** (tab system + cross-program CPI detection)
- [x] **PDF & Markdown Report Export** (jsPDF + .md download)
- [x] **User Profile & Settings** (real data, customizable preferences)
- [x] **IDE Extensions** (VS Code & Cursor — inline diagnostics, results panel, keyboard shortcuts)
- [x] **On-Chain Audit Verification** (Solana Devnet — publish audit hash, verification badge, free airdrop)
- [ ] Team collaboration & shared audits
- [ ] CI/CD integration (GitHub Actions)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ for the Solana ecosystem**

*Securing smart contracts, one audit at a time.*

<br>

[![GitHub Stars](https://img.shields.io/github/stars/panzauto46-bot/AnchorGuard-AI?style=social)](https://github.com/panzauto46-bot/AnchorGuard-AI)

</div>

==================================
REPO: BIT-SHADOW
<div align="center">

# 🌑 BIT-SHADOW

### Confidential Bitcoin Escrow on Starknet

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-bit--shadow.vercel.app-000000?style=for-the-badge&logo=vercel)](https://bit-shadow.vercel.app)
[![Contract](https://img.shields.io/badge/📜_Contract-Starknet_Sepolia-4A154B?style=for-the-badge)](https://sepolia.starkscan.co/contract/0x47ac31dfc225affc748b7da53e09521b3910818ee7590a4ab20436c5650ef67)

![Status](https://img.shields.io/badge/Status-Live_on_Testnet-22c55e?style=flat-square)
![Starknet](https://img.shields.io/badge/Built_on-Starknet-4A154B?style=flat-square&logo=ethereum)
![Bitcoin](https://img.shields.io/badge/Secured_by-Bitcoin-F7931A?style=flat-square&logo=bitcoin)
![Cairo](https://img.shields.io/badge/Language-Cairo-FF6B6B?style=flat-square)
![React](https://img.shields.io/badge/Frontend-React_19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/Code-TypeScript-3178C6?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

<br />

**BIT-SHADOW** is a next-generation privacy protocol that bridges Bitcoin liquidity to Starknet for **confidential, trustless escrow services**. Powered by zero-knowledge proofs and client-side encryption.

<br />

[Live Demo](https://bit-shadow.vercel.app) · [View Contract](https://sepolia.starkscan.co/contract/0x47ac31dfc225affc748b7da53e09521b3910818ee7590a4ab20436c5650ef67) · [Report Bug](https://github.com/panzauto46-bot/BIT-SHADOW/issues)

---

</div>

## 📋 Table of Contents

- [Problem & Solution](#-problem--solution)
- [Live Deployment](#-live-deployment)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Smart Contract](#-smart-contract)
- [Hackathon Tracks](#-hackathon-tracks)
- [Author](#-author)
- [License](#-license)

---

## 🎯 Problem & Solution

<table>
<tr>
<td width="50%">

### ❌ The Problem

Traditional escrow services suffer from critical flaws:

- **Trusted intermediaries** — centralized points of failure
- **No privacy** — all transaction details are publicly visible
- **High fees** — middlemen extract excessive premiums
- **Limited programmability** — Bitcoin lacks native complex escrow logic

</td>
<td width="50%">

### ✅ Our Solution

BIT-SHADOW eliminates these issues by combining:

- **Starknet ZK-Rollup** — privacy & low-cost execution
- **Bitcoin Security** — settlement finality & trust
- **Client-Side Encryption** — AES-256-GCM metadata confidentiality
- **Smart Contract Escrow** — fully trustless fund management

</td>
</tr>
</table>

---

## 🚀 Live Deployment

### Smart Contract — Starknet Sepolia

| Property | Value |
|---|---|
| **Contract Address** | [`0x47ac31dfc...650ef67`](https://sepolia.starkscan.co/contract/0x47ac31dfc225affc748b7da53e09521b3910818ee7590a4ab20436c5650ef67) |
| **Class Hash** | `0x7fccf0cf64ff8b69515782fcf875191c87495c5e00525c8b8d5857d0217368a` |
| **Network** | Starknet Sepolia Testnet |
| **Contract Name** | `ShadowEscrow` |

### Frontend — Vercel

| Property | Value |
|---|---|
| **Live URL** | [bit-shadow.vercel.app](https://bit-shadow.vercel.app) |
| **Framework** | React 19 + Vite 7 + TypeScript |
| **Hosting** | Vercel Edge Network |

---

## ✨ Features

<table>
<tr>
<td align="center" width="25%">
<br />
<img src="https://img.icons8.com/fluency/48/lock.png" width="36" />
<br /><br />
<b>Confidential Escrow</b>
<br />
<sub>Create encrypted, time-locked escrow agreements with ZK-proof verification</sub>
<br /><br />
</td>
<td align="center" width="25%">
<br />
<img src="https://img.icons8.com/fluency/48/bridge.png" width="36" />
<br /><br />
<b>BTC ↔ sBTC Bridge</b>
<br />
<sub>Seamless cross-chain bridge between Bitcoin and Starknet L2</sub>
<br /><br />
</td>
<td align="center" width="25%">
<br />
<img src="https://img.icons8.com/fluency/48/visible.png" width="36" />
<br /><br />
<b>Privacy Shield</b>
<br />
<sub>Client-side AES-256-GCM encryption for transaction metadata</sub>
<br /><br />
</td>
<td align="center" width="25%">
<br />
<img src="https://img.icons8.com/fluency/48/wallet.png" width="36" />
<br /><br />
<b>Multi-Wallet</b>
<br />
<sub>Connect Argent X, Braavos, or Xverse with one-click disconnect</sub>
<br /><br />
</td>
</tr>
<tr>
<td align="center" width="25%">
<br />
<img src="https://img.icons8.com/fluency/48/paint-palette.png" width="36" />
<br /><br />
<b>Dynamic Theming</b>
<br />
<sub>Toggle between immersive Shadow Dark and clean Solar Light modes</sub>
<br /><br />
</td>
<td align="center" width="25%">
<br />
<img src="https://img.icons8.com/fluency/48/dashboard.png" width="36" />
<br /><br />
<b>Real-time Dashboard</b>
<br />
<sub>Portfolio overview with live analytics and escrow tracking</sub>
<br /><br />
</td>
<td align="center" width="25%">
<br />
<img src="https://img.icons8.com/fluency/48/verified-badge.png" width="36" />
<br /><br />
<b>ZK-Proof Engine</b>
<br />
<sub>STARK proof generation for privacy-preserving verification</sub>
<br /><br />
</td>
<td align="center" width="25%">
<br />
<img src="https://img.icons8.com/fluency/48/name-tag.png" width="36" />
<br /><br />
<b>Starknet ID</b>
<br />
<sub>Human-readable .stark identity integration</sub>
<br /><br />
</td>
</tr>
</table>

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                     BIT-SHADOW PROTOCOL                      │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│   │  Dashboard   │  │   Bridge    │  │   Create Escrow     │ │
│   │  Analytics   │  │  BTC ↔ sBTC │  │   + ZK Proofs       │ │
│   └──────┬───────┘  └──────┬──────┘  └──────────┬──────────┘ │
│          │                 │                     │            │
│   ┌──────▼─────────────────▼─────────────────────▼──────────┐│
│   │              React 19 + Vite + Tailwind CSS              ││
│   │         Dynamic Theming · Framer Motion · Lucide         ││
│   └──────────────────────┬───────────────────────────────────┘│
│                          │                                    │
│   ┌──────────────────────▼───────────────────────────────────┐│
│   │              Wallet Integration Layer                     ││
│   │    Argent X (Starknet) · Braavos · Xverse (Bitcoin)       ││
│   │              + Auto Demo Mode Fallback                    ││
│   └──────────────────────┬───────────────────────────────────┘│
│                          │                                    │
│   ┌──────────────────────▼───────────────────────────────────┐│
│   │              ShadowEscrow Smart Contract                  ││
│   │                    (Cairo / Starknet)                      ││
│   │  ┌────────────┐ ┌──────────────┐ ┌────────────────────┐  ││
│   │  │  create()   │ │  settle()    │ │  get_escrow_count()│  ││
│   │  └────────────┘ └──────────────┘ └────────────────────┘  ││
│   └──────────────────────┬───────────────────────────────────┘│
│                          │                                    │
│   ┌──────────────────────▼───────────────────────────────────┐│
│   │           Starknet Sepolia L2 (ZK-Rollup)                 ││
│   │              Secured by Ethereum L1                        ││
│   └──────────────────────────────────────────────────────────┘│
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 19, TypeScript, Vite 7 | UI framework & build tool |
| **Styling** | Tailwind CSS 4, CSS Variables | Dynamic theming (Dark/Light) |
| **Animations** | Framer Motion | Micro-interactions & transitions |
| **Icons** | Lucide React | Consistent icon system |
| **Smart Contract** | Cairo (Starknet) | On-chain escrow logic |
| **Build Tool** | Scarb | Cairo compilation & deployment |
| **Wallets** | Argent X, Braavos, Xverse | Starknet & Bitcoin connectivity |
| **Cryptography** | AES-256-GCM, ZK-SNARKs | Client-side encryption & proofs |
| **Hosting** | Vercel (Frontend), Starknet Sepolia | Production deployment |

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**
- [Argent X](https://www.argent.xyz/) or [Braavos](https://braavos.app/) — Starknet wallet *(optional, Demo Mode available)*
- [Xverse](https://www.xverse.app/) — Bitcoin wallet *(optional)*

### Installation

```bash
# Clone the repository
git clone https://github.com/panzauto46-bot/BIT-SHADOW.git

# Navigate to the project
cd BIT-SHADOW

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Output will be in the `dist/` directory, ready for deployment.

---

## 📁 Project Structure

```
BIT-SHADOW/
│
├── contracts/                    # Cairo smart contracts
│   ├── src/
│   │   └── lib.cairo             # ShadowEscrow contract source
│   ├── Scarb.toml                # Scarb configuration
│   └── Scarb.lock
│
├── src/                          # Frontend source code
│   ├── components/
│   │   ├── Header.tsx            # Navigation + Theme Toggle + Wallet Connect/Logout
│   │   ├── Sidebar.tsx           # Side navigation
│   │   ├── Dashboard.tsx         # Portfolio overview & analytics
│   │   ├── Bridge.tsx            # BTC ↔ sBTC bridge interface
│   │   ├── CreateEscrow.tsx      # Escrow creation wizard
│   │   ├── EscrowList.tsx        # Escrow management list
│   │   └── PrivacyShield.tsx     # Privacy tools & ZK-proof status
│   │
│   ├── lib/
│   │   ├── wallet-utils.ts       # Wallet connection logic (Starknet + Bitcoin + Demo Mode)
│   │   └── bitcoin-service.ts    # Bitcoin service integration
│   │
│   ├── store/
│   │   └── useStore.ts           # Global state management
│   │
│   ├── types/                    # TypeScript type definitions
│   ├── utils/                    # Utility functions
│   │
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles & CSS theme variables
│
├── deployment.json               # Deployed contract metadata
├── package.json                  # Dependencies & scripts
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── README.md                     # You are here!
```

---

## 📜 Smart Contract

### ShadowEscrow Interface

```cairo
#[starknet::interface]
trait IShadowEscrow<TContractState> {
    /// Create a new escrow with specified amount and unlock time
    fn create_escrow(
        ref self: TContractState,
        amount: u256,
        unlock_time: u64
    ) -> u128;

    /// Settle an escrow by releasing funds to the recipient
    fn settle_escrow(
        ref self: TContractState,
        escrow_id: u128,
        recipient: ContractAddress
    );

    /// Get total number of escrows created
    fn get_escrow_count(self: @TContractState) -> u128;

    /// Get the admin address
    fn get_admin(self: @TContractState) -> ContractAddress;
}
```

### Events

| Event | Description |
|-------|-------------|
| `EscrowCreated` | Emitted when a new escrow is created with ID, amount, and creator |
| `EscrowSettled` | Emitted when an escrow is settled with ID and recipient |

### Verify on Explorer

🔍 [View on Starkscan (Sepolia)](https://sepolia.starkscan.co/contract/0x47ac31dfc225affc748b7da53e09521b3910818ee7590a4ab20436c5650ef67)

---

## 🧪 Testing Flow

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click **Connect Wallet** | Wallet address appears in header with Logout button |
| 2 | Navigate to **Bridge** tab | BTC ↔ sBTC bridge interface loads |
| 3 | Navigate to **Create Escrow** | Escrow creation form with encryption & ZK options |
| 4 | Toggle **Encrypted Metadata** | AES-256-GCM encryption activates |
| 5 | Toggle **ZK-Proof** | ZK proof generation simulation starts |
| 6 | Click **Deploy Shadow Escrow** | Transaction signed and submitted |
| 7 | Check **Dashboard** | New escrow appears in the list |
| 8 | Click **Logout** button | Wallet disconnects, returns to Connect state |
| 9 | Toggle 🌙/☀️ theme | Interface switches between Dark and Light modes |

---

## 🏆 Hackathon Tracks

<table>
<tr>
<td align="center" width="33%">
<br />
<h3>🔐 Privacy Track</h3>
<sub>ZK-powered confidential escrow with client-side AES-256-GCM encryption and STARK proof verification</sub>
<br /><br />
</td>
<td align="center" width="33%">
<br />
<h3>₿ Bitcoin Integration</h3>
<sub>BTC ↔ sBTC bridge with Xverse wallet support and cross-chain settlement</sub>
<br /><br />
</td>
<td align="center" width="33%">
<br />
<h3>💡 DeFi Innovation</h3>
<sub>Trustless escrow service eliminating intermediaries through smart contracts</sub>
<br /><br />
</td>
</tr>
</table>

---

## 👨‍💻 Author

<table>
<tr>
<td align="center">
<br />
<b>Pandu Dargah</b>
<br />
<sub>Solo Developer</sub>
<br /><br />
<a href="https://github.com/panzauto46-bot">
<img src="https://img.shields.io/badge/GitHub-panzauto46--bot-181717?style=flat-square&logo=github" />
</a>
<br /><br />
</td>
</tr>
</table>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
<br />

**Built with 🖤 for the Starknet Hackathon**

<br />

![Starknet](https://img.shields.io/badge/Starknet-4A154B?style=for-the-badge&logo=ethereum&logoColor=white)
![Bitcoin](https://img.shields.io/badge/Bitcoin-F7931A?style=for-the-badge&logo=bitcoin&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

==================================
REPO: CrediProcure
<p align="center">
  <img src="https://img.shields.io/badge/Creditcoin-Testnet-00C896?style=for-the-badge&logo=ethereum&logoColor=white" />
  <img src="https://img.shields.io/badge/Solidity-0.8.20-363636?style=for-the-badge&logo=solidity&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Ethers.js-6-7B3FE4?style=for-the-badge&logo=ethers&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

<h1 align="center">🚀 CrediProcure</h1>
<h3 align="center">Decentralized B2B Invoice Financing Platform Powered by Real World Assets (RWA) on Creditcoin</h3>

<p align="center">
  <i>Unlocking instant liquidity for businesses. Delivering transparent, high-yield opportunities for investors. All on-chain.</i>
</p>

---

## 🌍 The Problem

Small and Medium Enterprises (SMEs) globally face a **$3.6 trillion trade finance gap.** Traditional invoice financing is slow, opaque, and inaccessible. Businesses wait 30–90 days to get paid, while investors have limited access to stable, real-world-backed yield opportunities in DeFi.

**Key Pain Points:**
- 🐌 **Slow Settlements**: SMEs wait months to receive payment, crippling cash flow.
- 🔒 **Limited Access**: Traditional factoring requires extensive paperwork & intermediaries.
- 🙈 **Opaque Processes**: Lack of transparency in pricing, fees, and funding status.
- 📉 **DeFi Yield Gap**: DeFi investors seek stable, real-world-backed yields beyond volatile crypto assets.

---

## ✅ Our Solution: CrediProcure

CrediProcure is a **fully decentralized, end-to-end invoice financing platform** that bridges the gap between B2B vendors and global DeFi investors through **Real World Asset (RWA) tokenization** on the **Creditcoin Network**.

### How It Works (4 Simple Steps)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. CREATE   │────▶│   2. MINT    │────▶│   3. FUND    │────▶│  4. REPAY    │
│   Invoice    │     │  as RWA NFT  │     │  by Investor │     │  + Interest  │
│  (Vendor)    │     │  (On-Chain)  │     │  (DeFi Pool) │     │  (Auto-Dist) │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

1. **Vendor** creates an invoice (e.g., $10,000 payment due from a client).
2. **Invoice is Minted** as an ERC-721 NFT (RWA Token) on Creditcoin, with immutable on-chain data.
3. **Investors** browse the marketplace and fund the invoice (up to 85% LTV), earning yield.
4. **Upon repayment**, the smart contract automatically distributes principal + interest to investors.

---

## ✨ Key Features

### 🏢 Vendor Portal (Borrowers)
| Feature | Description |
|:---|:---|
| **📊 Real-Time Dashboard** | Live stats on total invoice value, funded amounts, and pending funding — all from the blockchain. |
| **📄 Invoice Creation & Minting** | Create invoice drafts, then mint them as ERC-721 RWA tokens on Creditcoin with one click. |
| **💧 Liquidity Request** | Select a minted invoice and request up to 85% LTV funding from the investor marketplace. |
| **📦 Inventory Management** | Track procurement stock with persistent add, edit, and delete functionality. |
| **🛡️ KYB Verification** | Interactive Know-Your-Business verification flow with persistent status. |
| **📈 On-Chain Credit History** | Full transaction history fetched from real blockchain events (`InvoiceMinted`, `InvoiceFunded`). |

### 💰 Investor Portal (Lenders)
| Feature | Description |
|:---|:---|
| **🏪 Invoice Marketplace** | Browse all available RWA invoices on-chain, filter by risk level, and fund with stablecoins. |
| **📊 Yield Portfolio** | Track all funded invoices, earned yields, and maturity dates with live pie chart allocation. |
| **🏦 Liquidity Pool** | Deposit stablecoins into the lending pool to earn passive yields from invoice financing. |
| **📉 Yield Performance Chart** | Visual chart showing projected and historical yield performance. |
| **🔗 Direct P2P Funding** | Fund specific invoices directly (peer-to-peer) or via the pooled liquidity model. |

### 🔗 Blockchain & Web3
| Feature | Description |
|:---|:---|
| **🦊 MetaMask Integration** | One-click wallet connection with automatic Creditcoin Testnet detection. |
| **⛓️ Live On-Chain Data** | All dashboard stats, invoices, and history are fetched directly from deployed smart contracts. |
| **🌙 Dark/Light Mode** | Premium glassmorphism UI with full theme support. |
| **📱 Responsive Design** | Fully responsive across desktop, tablet, and mobile devices. |

---

## 🏗️ Smart Contract Architecture

Our protocol consists of **3 core smart contracts** deployed on the **Creditcoin Testnet**, built with OpenZeppelin standards for security and composability.

```
┌─────────────────────────────────────────────────────────────────┐
│                     CREDIPROCURE PROTOCOL                       │
├─────────────────────┬──────────────────┬────────────────────────┤
│   InvoiceNFT.sol    │  LendingPool.sol │  MockStablecoin.sol   │
│   (ERC-721)         │  (Core Engine)   │  (ERC-20 Test Token)  │
├─────────────────────┼──────────────────┼────────────────────────┤
│ • mintInvoice()     │ • deposit()      │ • mint()              │
│ • getInvoice()      │ • withdraw()     │ • transfer()          │
│ • setFunded()       │ • fundInvoice()  │ • approve()           │
│ • invoices mapping  │ • fundDirect()   │                       │
│ • ERC721Enumerable  │ • repay()        │                       │
│ • totalSupply()     │ • lpBalances     │                       │
│ • tokenByIndex()    │ • totalLiquidity │                       │
└─────────────────────┴──────────────────┴────────────────────────┘
```

### `InvoiceNFT.sol` — Real World Asset Token (ERC-721 + Enumerable)
- **Purpose**: Represents a real-world invoice as an on-chain NFT.
- **Data Stored On-Chain**: `id`, `vendor`, `amount`, `dueDate`, `yieldRate`, `isFunded`.
- **Key Functions**:
  - `mintInvoice(to, amount, dueDate, yieldRate)` → Mints a new invoice RWA token.
  - `getInvoice(tokenId)` → Returns full invoice data struct.
  - `setFunded(tokenId, status)` → Called by LendingPool to mark as funded.
  - `tokenByIndex(i)` / `totalSupply()` → Enumerable support for marketplace indexing.

### `LendingPool.sol` — Liquidity Engine
- **Purpose**: Manages the flow of capital between investors and vendors.
- **Dual Funding Model**:
  - **Pool Model**: Investors deposit stablecoins → Pool funds invoices automatically.
  - **P2P Model**: Investors fund specific invoices directly via `fundInvoiceDirect()`.
- **Key Functions**:
  - `deposit(amount)` → Investor deposits stablecoins into the pool.
  - `withdraw(amount)` → Investor withdraws from the pool.
  - `fundInvoice(tokenId)` → Admin/DAO funds an invoice from pool reserves.
  - `fundInvoiceDirect(tokenId)` → P2P: Investor funds a specific invoice directly.
  - `repay(tokenId, amount)` → Vendor repays loan, interest distributed to LPs.

### `MockStablecoin.sol` — Test ERC-20 Token
- **Purpose**: Simulates USDC/USDT for testnet operations.
- Standard OpenZeppelin ERC-20 with public `mint()` for testing.

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|:---|:---|:---|
| **Frontend Framework** | React + Vite | 19.2 + 7.2 |
| **Language** | TypeScript | 5.9 |
| **Styling** | Tailwind CSS | 4.1 |
| **Charts & Data Viz** | Recharts | 3.7 |
| **Icons** | Lucide React | 0.564 |
| **Web3 Library** | Ethers.js | 6.16 |
| **Wallet** | MetaMask | Latest |
| **Blockchain** | Creditcoin Testnet | — |
| **Smart Contracts** | Solidity + Hardhat | 0.8.20 |
| **Contract Standards** | OpenZeppelin | 5.x |
| **State Management** | React Context API | — |
| **Routing** | React Router DOM | 7.x |

---

## 📂 Project Structure

```
CrediProcure/
├── 📄 index.html                          # Entry point
├── 📄 package.json                        # Frontend dependencies
├── 📄 vite.config.ts                      # Vite build configuration
├── 📄 tsconfig.json                       # TypeScript configuration
│
├── 📁 src/                                # Frontend Source Code
│   ├── 📄 main.tsx                        # React entry point
│   ├── 📄 App.tsx                         # Router & app shell
│   ├── 📄 index.css                       # Global styles & design tokens
│   │
│   ├── 📁 pages/                          # Application Pages (10 pages)
│   │   ├── 📄 VendorDashboard.tsx         # Vendor analytics — live blockchain data
│   │   ├── 📄 InvestorDashboard.tsx       # Investor analytics — live blockchain data
│   │   ├── 📄 Invoices.tsx                # Invoice CRUD + RWA minting (on-chain)
│   │   ├── 📄 Marketplace.tsx             # Browse & fund invoices (on-chain)
│   │   ├── 📄 LiquidityPool.tsx           # LP deposit/withdraw (on-chain)
│   │   ├── 📄 LiquidityRequest.tsx        # Request funding for minted invoices
│   │   ├── 📄 Portfolio.tsx               # Yield tracking + pie chart
│   │   ├── 📄 Inventory.tsx               # Procurement stock management
│   │   ├── 📄 KYB.tsx                     # KYB verification flow
│   │   └── 📄 CreditHistory.tsx           # On-chain credit history via events
│   │
│   ├── 📁 components/                     # Shared UI Components
│   │   └── 📄 Layout.tsx                  # App shell: sidebar, header, navigation
│   │
│   ├── 📁 context/                        # React Context Providers
│   │   ├── 📄 WalletContext.tsx           # MetaMask + contract instances
│   │   └── 📄 ThemeContext.tsx            # Dark/light mode toggle
│   │
│   ├── 📁 abis/                           # Contract ABI Files
│   │   ├── 📄 InvoiceNFT.json            # InvoiceNFT ABI
│   │   ├── 📄 LendingPool.json           # LendingPool ABI
│   │   └── 📄 MockStablecoin.json        # MockStablecoin ABI
│   │
│   ├── 📁 types/                          # TypeScript Interfaces
│   │   └── 📄 index.ts                   # Invoice, Vendor, Investment types
│   │
│   └── 📁 utils/                          # Utility Functions
│       └── 📄 cn.ts                       # Tailwind class merge helper
│
├── 📁 smart-contracts/                    # Blockchain Backend
│   ├── 📄 hardhat.config.ts               # Hardhat config (Creditcoin Testnet)
│   ├── 📄 package.json                    # Smart contract dependencies
│   │
│   ├── 📁 contracts/                      # Solidity Source Files
│   │   ├── 📄 InvoiceNFT.sol              # ERC-721 RWA Invoice Token
│   │   ├── 📄 LendingPool.sol             # Liquidity pool + P2P funding
│   │   └── 📄 MockStablecoin.sol          # Test ERC-20 stablecoin
│   │
│   ├── 📁 scripts/                        # Deployment Scripts
│   │   └── 📄 deploy.ts                   # Automated deployment script
│   │
│   ├── 📁 test/                           # Unit Tests
│   │   └── 📄 InvoiceNFT.test.ts          # Contract test suite
│   │
│   └── 📁 artifacts/                      # Compiled contract artifacts
│       └── ...
│
└── 📄 README.md                           # This file
```

---

## ⚡ Technical Highlights: Handling Real-World Latency

Building on a Testnet often involves RPC latency and indexing delays. CrediProcure implements **Advanced UX Patterns** to ensure a seamless experience despite blockchain lag:

### 1. 🔄 Hybrid Data Fetching Engine
The application uses a **Dual-Source Truth** system for invoices:
- **Source A (Blockchain)**: The ultimate source of truth via RPC calls.
- **Source B (Local Optimistic Storage)**: Immediate capture of "Minted" status locally.
- **The Engine**: Automatically merges both sources, deduplicates, and presents a unified view. This means **Zero Waiting Time** for users after minting.

### 2. 🚀 Optimistic UI Updates
We don't make users wait for block confirmations to see progress.
- **Instant Feedback**: Creating a draft or minting an invoice updates the UI immediately.
- **Background Synchronization**: The app polls the blockchain in the background to confirm stability without freezing the interface.

### 3. 🛡️ Real-Time System Diagnostics
Transparencry is key. We included a **Live Debug Panel** in the `Liquidity Request` page that shows:
- **Wallet Connection Strength**
- **On-Chain vs. Local Data Sync Status**
- **Real-Time RPC Fetching Indicators**

*This architecture ensures CrediProcure is robust enough for real-world usage where network conditions are unpredictable.*

---

## 🗺️ Development Roadmap

| Phase | Milestone | Deliverables | Status |
|:---:|:---|:---|:---:|
| **1** | 🎨 UI/UX Design & Prototyping | Wireframes, user flows, component library, responsive layout | ✅ Done |
| **2** | ⛓️ Smart Contract Development | InvoiceNFT (ERC-721), LendingPool, MockStablecoin, unit tests | ✅ Done |
| **3** | 🔗 Web3 Integration | MetaMask wallet connect, contract integration, live data fetching | ✅ Done |
| **4** | 🚀 Live Feature Activation | Replace all mock data with blockchain reads/writes, LocalStorage persistence | ✅ Done |
| **5** | 🌐 Deployment & Submission | Creditcoin Testnet deployment, Vercel hosting, demo video, pitch deck | ✅ Done |
| **6** | 📈 Future: Mainnet & DAO | Governance token, on-chain credit scoring, multi-chain support | 🔮 Planned |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **MetaMask** browser extension
- **CTC** tokens on Creditcoin Testnet ([Faucet](https://faucet.creditcoin.org/))

### 1. Clone & Install

```bash
git clone https://github.com/panzauto46-bot/CrediProcure.git
cd CrediProcure
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit **`http://localhost:5173`** — Connect MetaMask to Creditcoin Testnet to interact.

### 3. Smart Contract Development

```bash
cd smart-contracts
npm install

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy to Creditcoin Testnet
# (Ensure .env has your PRIVATE_KEY)
npx hardhat run scripts/deploy.ts --network creditcoinTestnet
```

### 4. Configure Contract Addresses
After deployment, update the addresses in:
```
src/context/WalletContext.tsx → CONTRACT_ADDRESSES
```

---

## 🌐 Network Configuration

| Parameter | Value |
|:---|:---|
| **Network Name** | Creditcoin Testnet |
| **RPC URL** | `https://rpc.cc3-testnet.creditcoin.network` |
| **Chain ID** | `102031` |
| **Currency Symbol** | `CTC` |
| **Block Explorer** | `https://creditcoin-testnet.blockscout.com/` |

---

## 🔐 Security Considerations

- ✅ All smart contracts use **OpenZeppelin** audited libraries.
- ✅ `ReentrancyGuard` on all financial functions (deposit, withdraw, fund, repay).
- ✅ `Ownable` access control on sensitive admin operations.
- ✅ `onlyPool` modifier ensures only the LendingPool can mark invoices as funded.
- ✅ Private keys are stored in `.env` files (excluded from Git via `.gitignore`).
- ⚠️ **Note**: This is a hackathon prototype. Production deployment requires formal smart contract auditing.

---

## 🤝 Why Creditcoin?

CrediProcure is built on **Creditcoin** because it is the **only Layer-1 blockchain purpose-built for credit and lending infrastructure**:

- **Native Credit History**: On-chain credit scoring enables risk assessment without traditional credit bureaus.
- **RWA Focus**: Creditcoin's ecosystem is designed to bridge real-world financial assets with DeFi.
- **EVM Compatible**: Full Solidity support with low transaction costs on testnet.
- **Mission Aligned**: Both CrediProcure and Creditcoin share the mission of **financial inclusion** for underserved businesses globally.

---

## 📊 Impact & Market Opportunity

| Metric | Value |
|:---|:---|
| **Global Trade Finance Gap** | $3.6 Trillion (ADB, 2024) |
| **SMEs Affected** | 40%+ of SMEs in developing nations |
| **Invoice Financing Market** | $4B+ annually |
| **Average Invoice Payment Delay** | 30–90 days |
| **CrediProcure Target Reduction** | < 24 hours |

---

## 👤 Team

| Name | Role |
|:---|:---|
| **Pandu Dargah** | Full-Stack Developer & Founder |

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <b>© 2026 CrediProcure</b> — Built for the Future of Finance on Creditcoin.<br/>
  <i>Unlocking $3.6T in trapped trade finance, one invoice at a time.</i>
</p>

<p align="center">
  <a href="https://github.com/panzauto46-bot/CrediProcure">⭐ Star this repo</a> •
  <a href="https://creditcoin.org">Creditcoin</a> •
  <a href="https://dorahacks.io">DoraHacks</a>
</p>

==================================
REPO: CredPOS
# 📱 CredPOS Mobile: The DeFi-Integrated Point of Sale

![CredPOS Banner](https://img.shields.io/badge/CredPOS-Mobile_App-blue?style=for-the-badge&logo=android)
![Kotlin](https://img.shields.io/badge/Kotlin-1.9.0-purple?style=flat-square&logo=kotlin)
![Jetpack Compose](https://img.shields.io/badge/UI-Jetpack_Compose-green?style=flat-square&logo=android)
![Tezos](https://img.shields.io/badge/Blockchain-Tezos_Ghostnet-blue?style=flat-square&logo=tezos)
![Sui](https://img.shields.io/badge/Blockchain-Sui_Devnet-4ea8de?style=flat-square&logo=sui)

> **"Bridging the Gap Between Traditional Retail and Decentralized Finance."**

---

## 🚀 Overview

**CredPOS Mobile** is a cutting-edge Android application engineered for the modern merchant. Unlike standard POS systems, CredPOS integrates **Multi-Chain Wallet Connectivity**, allowing users to leverage their on-chain reputation for credit scoring.

Built with **Native Android (Kotlin)** and a custom **Capacitor Bridge**, it delivers a seamless, high-performance experience that works offline and syncs instantly when connected.

---

## 🌟 Key Features

### 🔗 **Multi-Chain Wallet Connect**
One app, multiple blockchains. CredPOS eliminates the complexity of Web3 integration.
- **Tezos (Ghostnet)**: Seamless integration via **Beacon-like** TZIP-10 patterns.
- **Sui (Devnet)**: Native support for **Sui Wallet** standards.
- **Smart Tech**: Auto-detects installed wallets (Temple, AirGap, Sui Wallet, Ethos).

### 💳 **Revolutionary Credit Scoring**
- **On-Chain Identity**: Sign your credit score directly to the blockchain.
- **Immutable Reputation**: Build a verifiable financial history that follows you everywhere.
- **Non-Custodial**: We never touch your private keys. You stay in control.

### 🛡️ **Enterprise-Grade Security**
- **Encrypted Storage**: Sensitive session data is AES-256 encrypted using Android's Keystore system.
- **Secure Bridge**: Custom-built native bridge ensures safe communication between the Web UI and native blockchain SDKs.
- **Sandboxed Execution**: Every transaction runs in a secure, isolated environment.

---

## 🛠️ Technology Stack

| Component | Technology | Description |
|-----------|------------|-------------|
| **Core** | **Kotlin** | Native Android development for maximum performance. |
| **UI** | **Jetpack Compose** | Modern, declarative UI toolkit for beautiful interfaces. |
| **Architecture** | **MVVM + Clean** | Scalable, testable, and maintainable code structure. |
| **Bridge** | **Capacitor** | High-speed communication layer for hybrid features. |
| **Blockchain** | **Tezos & Sui SDKs** | Direct integration with blockchain networks. |

---

## 📱 Application Preview

| Dashboard | Wallet Connect | Settings |
|:---:|:---:|:---:|
| *Intuitive POS Interface* | *Multi-Chain Selector* | *Backup & Configuration* |
| <img src="screenshots/dashboard.png" width="250"/> | <img src="screenshots/wallet.png" width="250"/> | <img src="screenshots/settings.png" width="250"/> |

---

## 📂 Project Architecture

A glimpse into our clean code structure:

```kotlin
com.credpos.app
├── blockchain/         # 🧠 Core Blockchain Logic & Network Switching
│   ├── CryptoNetwork.kt      # Type-safe Network Definitions
│   └── BlockchainRepository.kt # Abstracted Wallet Operations
├── ui/                 # 🎨 Beautiful Jetpack Compose UI
│   ├── components/           # Reusable Design System
│   └── screens/              # Feature-rich Screens
└── viewmodel/          # ⚡ Reactive State Management (Coroutines/Flow)
```

---

## 🏆 Hackathon Submission Details

This repository represents the **Mobile Client** of the CredPOS ecosystem.

- ** APK Download**: [Link to APK (Google Drive)]
- ** Demo Video**: [Link to Video]
- ** Web Dashboard**: [Link to Web Repo]

---

*Built with ❤️ by the CredPOS Team for Hacktoon 2026.*

==================================
REPO: CredPOSappreview
# 📱 CredPOS Mobile: The DeFi-Integrated Point of Sale

![CredPOS Banner](https://img.shields.io/badge/CredPOS-Mobile_App-blue?style=for-the-badge&logo=android)
![Kotlin](https://img.shields.io/badge/Kotlin-1.9.0-purple?style=flat-square&logo=kotlin)
![Jetpack Compose](https://img.shields.io/badge/UI-Jetpack_Compose-green?style=flat-square&logo=android)
![Tezos](https://img.shields.io/badge/Blockchain-Tezos_Ghostnet-blue?style=flat-square&logo=tezos)
![Sui](https://img.shields.io/badge/Blockchain-Sui_Devnet-4ea8de?style=flat-square&logo=sui)

> **"Bridging the Gap Between Traditional Retail and Decentralized Finance."**

---

## 🚀 Overview

**CredPOS Mobile** is a cutting-edge Android application engineered for the modern merchant. Unlike standard POS systems, CredPOS integrates **Multi-Chain Wallet Connectivity**, allowing users to leverage their on-chain reputation for credit scoring.

Built with **Native Android (Kotlin)** and a custom **Capacitor Bridge**, it delivers a seamless, high-performance experience that works offline and syncs instantly when connected.

---

## 🌟 Key Features

### 🔗 **Multi-Chain Wallet Connect**
One app, multiple blockchains. CredPOS eliminates the complexity of Web3 integration.
- **Tezos (Ghostnet)**: Seamless integration via **Beacon-like** TZIP-10 patterns.
- **Sui (Devnet)**: Native support for **Sui Wallet** standards.
- **Smart Tech**: Auto-detects installed wallets (Temple, AirGap, Sui Wallet, Ethos).

### 💳 **Revolutionary Credit Scoring**
- **On-Chain Identity**: Sign your credit score directly to the blockchain.
- **Immutable Reputation**: Build a verifiable financial history that follows you everywhere.
- **Non-Custodial**: We never touch your private keys. You stay in control.

### 🛡️ **Enterprise-Grade Security**
- **Encrypted Storage**: Sensitive session data is AES-256 encrypted using Android's Keystore system.
- **Secure Bridge**: Custom-built native bridge ensures safe communication between the Web UI and native blockchain SDKs.
- **Sandboxed Execution**: Every transaction runs in a secure, isolated environment.

---

## 🛠️ Technology Stack

| Component | Technology | Description |
|-----------|------------|-------------|
| **Core** | **Kotlin** | Native Android development for maximum performance. |
| **UI** | **Jetpack Compose** | Modern, declarative UI toolkit for beautiful interfaces. |
| **Architecture** | **MVVM + Clean** | Scalable, testable, and maintainable code structure. |
| **Bridge** | **Capacitor** | High-speed communication layer for hybrid features. |
| **Blockchain** | **Tezos & Sui SDKs** | Direct integration with blockchain networks. |

---

## 📱 Application Preview

| Dashboard | Wallet Connect | Transaction |
|:---:|:---:|:---:|
| *Intuitive POS Interface* | *Multi-Chain Selector* | *Fast & Secure Payment* |
| ![Screen 1](https://via.placeholder.com/150x300?text=POS+Dashboard) | ![Screen 2](https://via.placeholder.com/150x300?text=Wallet+Connect) | ![Screen 3](https://via.placeholder.com/150x300?text=Transaction) |

*(Note: Actual screenshots are available in the demo video)*

---

## 📂 Project Architecture

A glimpse into our clean code structure:

```kotlin
com.credpos.app
├── blockchain/         # 🧠 Core Blockchain Logic & Network Switching
│   ├── CryptoNetwork.kt      # Type-safe Network Definitions
│   └── BlockchainRepository.kt # Abstracted Wallet Operations
├── ui/                 # 🎨 Beautiful Jetpack Compose UI
│   ├── components/           # Reusable Design System
│   └── screens/              # Feature-rich Screens
└── viewmodel/          # ⚡ Reactive State Management (Coroutines/Flow)
```

---

## 🏆 Hackathon Submission Details

This repository represents the **Mobile Client** of the CredPOS ecosystem.

- ** APK Download**: [Link to APK (Google Drive)]
- ** Demo Video**: [Link to Video]
- ** Web Dashboard**: [Link to Web Repo]

---

*Built with ❤️ by the CredPOS Team for Hacktoon 2026.*

==================================
REPO: INPUT-DATA-LAPORAN-KERJA
# 📋 Sistem Laporan Kerja Harian (CodeIgniter 4)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpanzauto46-bot%2FINPUT-DATA-LAPORAN-KERJA)
[![CodeIgniter 4](https://img.shields.io/badge/CodeIgniter-4.5-firebrick.svg)](https://codeigniter.com)
[![PHP version](https://img.shields.io/badge/PHP-%3E%3D%208.2-8892BF.svg)](https://www.php.net/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Aplikasi **Sistem Laporan Kerja Harian** adalah solusi digital modern yang dirancang untuk mempermudah karyawan dalam mencatat, memantau, dan melaporkan aktivitas kerja harian mereka. Dibangun dengan framework **CodeIgniter 4** yang ringan dan cepat, serta **Alpine.js** untuk interaktivitas frontend tanpa beban, aplikasi ini siap di-deploy secara serverless di **Vercel**.

---

## ✨ Fitur Utama

Aplikasi ini dilengkapi dengan fitur-fitur esensial untuk produktivitas kerja:

### 1. 📝 Input & Manajemen Data (CRUD)
- **Pencatatan Detail**: Mencatat tanggal, waktu mulai/selesai, kategori kegiatan, prioritas, status, hasil kerja, hingga kendala yang dihadapi.
- **Validasi Cerdas**: Memastikan data yang diinput lengkap dan logis (misal: jam selesai tidak boleh lebih awal dari jam mulai).
- **Edit & Hapus**: Kemudahan memperbarui atau menghapus laporan yang salah input.

### 2. 📊 Dashboard Analitik Interaktif
- **Visualisasi Data**: Grafik batang dan donat (menggunakan Chart.js) untuk melihat distribusi kegiatan per kategori dan status penyelesaian.
- **Ringkasan Statistik**: Menampilkan total kegiatan, persentase penyelesaian, rata-rata rating kinerja, dan total jam kerja secara *real-time*.

### 3. 🔍 Pencarian & Filter Canggih
- **Pencarian Cepat**: Temukan laporan berdasarkan kata kunci (nama, kegiatan, hasil) secara instan.
- **Multi-Filter**: Saring data berdasarkan Kategori (e.g., Meeting, Development) atau Status (e.g., Selesai, Pending).
- **Sorting**: Urutkan data berdasarkan tanggal atau prioritas.

### 4. 📂 Ekspor Data
- **Ekspor CSV**: Unduh laporan kerja ke format CSV dalam sekali klik untuk kebutuhan arsip atau analisa lebih lanjut di Excel/Spreadsheet.

### 5. 🎨 UI/UX Modern & Responsif
- **Desain Premium**: Menggunakan Tailwind CSS untuk tampilan yang bersih, profesional, dan responsif di semua perangkat (Desktop, Tablet, Mobile).
- **Mode Gelap/Terang**: (Direncanakan untuk update mendatang).
- **Notifikasi**: Feedback visual instan untuk setiap aksi (disimpan, dihapus, error).

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan *stack* teknologi modern yang efisien:

### Backend
- **Framework**: [CodeIgniter 4](https://codeigniter.com/) (PHP Framework yang ringan dan aman).
- **Runtime**: PHP 8.2 (Kompatibel dengan Vercel Serverless Function).
- **Serverless**: Dikonfigurasi khusus untuk berjalan di [Vercel](https://vercel.com) menggunakan `vercel-php`.

### Frontend
- **Logic**: [Alpine.js](https://alpinejs.dev/) (Framework JS ringan untuk reaktivitas).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework via CDN).
- **Charts**: [Chart.js](https://www.chartjs.org/) (Visualisasi data).
- **Icons**: [Lucide Icons](https://lucide.dev/) (Ikon vektor modern).

### Database / Penyimpanan
- **Local Storage (Demo/MVP)**: Saat ini menggunakan penyimpanan browser (Client-side) untuk demonstrasi tanpa perlu setup database server yang rumit. Data tetap tersimpan di browser pengguna.
- **SQLite / MySQL (Coming Soon)**: Struktur backend sudah siap untuk dihubungkan ke database relasional.

---

## 🚀 Panduan Instalasi & Deployment

### Prasyarat
- Akun [GitHub](https://github.com).
- Akun [Vercel](https://vercel.com).
- Git terinstal di komputer Anda.

### 1. Kloning Repositori
```bash
git clone https://github.com/panzauto46-bot/INPUT-DATA-LAPORAN-KERJA.git
cd INPUT-DATA-LAPORAN-KERJA
```

### 2. Konfigurasi Lokal (Opsional, jika ingin menjalankan di PC)
Pastikan Anda memiliki PHP 8.2+ dan Composer.
```bash
composer install
php spark serve
```
Akses di `http://localhost:8080`.

### 3. Deployment ke Vercel (Cara Termudah)
1. **Push kode** ke repositori GitHub Anda.
2. Buka **Dashboard Vercel**.
3. Klik **"Add New Project"** dan impor repositori GitHub tadi.
4. Pilih Framework Preset: **Other**.
5. Biarkan pengaturan Build & Output kosong (default).
6. Klik **Deploy**.
7. Selesai! Aplikasi Anda sudah online.

---

## 🗺️ Roadmap Pengembangan (Peta Jalan)

Rencana pengembangan aplikasi ini kedepan untuk menjadi sistem manajemen kerja yang komprehensif:

### Fase 1: MVP & Stabilitas (Sekarang) ✅
- [x] Struktur dasar CodeIgniter 4.
- [x] Integrasi Alpine.js & Tailwind.
- [x] CRUD Laporan Harian (Local Storage).
- [x] Dashboard sederhana.
- [x] Konfigurasi Deployment Vercel.

### Fase 2: Persistensi & Autentikasi (Sedang Berjalan) 🚧
- [x] **Integarasi Database**: Migrasi dari LocalStorage ke database cloud (Supabase/MySQL/PostgreSQL) agar data tersimpan permanen di server. _(Struktur Migrasi Sudah Siap)_
- [x] **Sistem Login Multi-User**: Menambahkan fitur registrasi dan login untuk membedakan data antar pengguna. _(Tabel User Sudah Siap)_
- [x] **Role Management**: Admin vs Staff (Admin bisa melihat rekap semua staff).

### Fase 3: Kolaborasi & Laporan Lanjutan (Q3 2026) 📅
- [x] **Komentar & Feedback**: Atasan bisa memberi komentar pada laporan kerja.
- [x] **Ekspor PDF**: Generate laporan PDF rapi dengan kop surat perusahaan.
- [x] **Notifikasi Email**: Recap otomatis harian/mingguan via email.
- [x] **Tim & Departemen**: Pengelompokan user berdasarkan divisi.

### Fase 4: Integrasi & Mobile (Q4 2026) 🔮
- [x] **Integrasi Kalender**: Sinkronisasi dengan Google Calendar/Outlook.
- [x] **Progressive Web App (PWA)**: Bisa diinstal di HP layaknya aplikasi native.
- [x] **Analitik Lanjutan**: Prediksi beban kerja dan analisis performa karyawan berbasis AI.

---

## 📁 Struktur Proyek

```
/
├── app/
│   ├── Config/         # Konfigurasi aplikasi (Routes, Database, Paths)
│   ├── Controllers/    # Logika backend (Home.php)
│   ├── Views/          # Tampilan antarmuka (laporan_kerja.php)
│   └── ...
├── public/
│   ├── index.php       # Entry point aplikasi
│   └── ...
├── writable/           # Direktori sementara (Logs, Cache) - diset ke /tmp di Vercel
├── vercel.json         # Konfigurasi serverless Vercel
└── spark               # CLI tool CodeIgniter
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License**. Silakan gunakan, modifikasi, dan distribusikan secara bebas.

---

<div align="center">
  <p>Dibuat dengan ❤️ oleh Rifqy Malikh Hanapi</p>
  <p>2026 © Hak Cipta Dilindungi</p>
</div>

==================================
REPO: InstaDrop402web
# ⚡ InstaDrop 402

**The Instant Pay-to-Download Protocol — Built on Stacks Blockchain**

> Upload any digital file. Set a price in STX. Share the link. Buyers pay and download instantly — no accounts, no stores, no middlemen. *WeTransfer meets Web3.*

---

## 🎯 What is InstaDrop 402?

InstaDrop 402 is a decentralized digital file marketplace that implements the **HTTP 402 (Payment Required)** protocol using **Stacks (STX)** cryptocurrency. 

**Unique Hybrid Architecture:** 
To maximize security and control during the Hackathon, we utilize a **Hybrid Deployment Strategy**:
- **Frontend:** Hosted globally on **Vercel** for lightning-fast access.
- **Backend:** Hosted on a secure **Local Server** (Laptop/PC) via encrypted **Serveo Tunneling**.
- **Control:** Managed via a custom-built **Admin Generator** tool.

### Key Features

| Feature | Description |
|---------|-------------|
| 🔒 **HTTP 402 Protocol** | Native paywall — files are locked behind a real blockchain payment |
| ⚡ **Instant Download** | File delivered immediately after payment confirmation |
| 💰 **STX Payments** | Pay with Stacks cryptocurrency via Leather or Xverse wallet |
| 🛡️ **Blockchain Verified** | Every transaction verified against the Stacks blockchain |
| 📁 **Any File Type** | PDF, ZIP, images, audio, video, code, design files, and more |
| 🚀 **Hybrid Deployment** | Frontend on Cloud (Vercel), Backend on Secure Local Node |
| 🛠️ **Admin Generator** | Custom DevOps tool to manage the hybrid infrastructure |

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19 + TypeScript + Vite 7 |
| **Styling** | Tailwind CSS 4 |
| **Blockchain** | Stacks (STX) — Testnet |
| **Wallet** | @stacks/connect (Leather & Xverse) |
| **Backend** | Express.js + Node.js |
| **Tunneling** | Serveo.net (SSH Packet Forwarding) |
| **DevOps** | Custom Admin Generator (Node.js Script) |

---

## 🚀 How to Run (Hackathon Demo)

Since this project uses a Hybrid Architecture, follow these steps to start the **Backend Node**:

### 1. Prerequisites
- Node.js 18+ installed
- Windows OS (for Admin Generator)
- Internet Connection

### 2. Start the Engine
1. Clone the repo.
2. Double-click **`start-admin.bat`**.
3. The **Admin Generator Panel** will open in your browser.
4. Click **"1. Start Server"** (Starts the API).
5. Click **"2. Start Tunnel"** (Starts the Secure Tunnel).
6. Copy the Tunnel URL and click **"Update & Deploy"** in the panel.

### 3. Access the App
Go to the live frontend URL:
👉 **[https://instadrop402.vercel.app/](https://instadrop402.vercel.app/)**

---

## 📖 How It Works

```
┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
│  USER (Browser)      │      │  VERCEL (Frontend)   │      │  LOCAL BACKEND       │
│                      │      │                      │      │  (Your Laptop)       │
│  1. Opens App    ───────►   │  2. Serves UI        │      │                      │
│                      │      │                      │      │                      │
│  3. Requests File ───────►  │  4. Proxy Request ───────►  │  5. Check Payment    │
│                      │      │                      │      │     (db.json)        │
│  6. Download File ◄───────  │  ◄────── Stream File ◄──────│                      │
└──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```

### The x402 Protocol Flow
1. **Upload:** Seller uploads file → Stored in Local Secure Node → Metadata on Chain/DB.
2. **Pay:** Buyer pays STX → Transaction ID generated.
3. **Verify:** Backend verifies TX on Stacks Blockchain.
4. **Unlock:** If valid, file streams through the secure tunnel to the buyer.

---

## 🛠️ Built For

**Stacks Hackathon 2026** — Demonstrating the HTTP 402 Payment Required protocol as a real-world use case for micropayments on the Stacks blockchain.

---

<p align="center">
  <b>⚡ InstaDrop 402</b> — The Instant Pay-to-Download Protocol<br>
  Built with ❤️ on Stacks
</p>

==================================
REPO: IPM-System
# IPM System

Inventory Procurement Management System

A comprehensive business management solution for inventory and procurement tracking.

==================================
REPO: OMNI-CORE-On-chain-Multi-agent-Neural-Interface-
# 🧠 OMNI-CORE: On-chain Multi-agent Neural Interface

![License](https://img.shields.io/badge/License-MIT-blue.svg) ![Status](https://img.shields.io/badge/Status-Live-brightgreen.svg) ![AI-Engine](https://img.shields.io/badge/AI-Groq_LPU-cyan.svg) ![Network](https://img.shields.io/badge/Network-Cortensor_Decentralized-purple.svg)

> **"The future of DeFi is not automated, it is *alive*."**

**OMNI-CORE** is a next-generation decentralized application (dApp) that bridges the gap between **Artificial General Intelligence (AGI)** and **Blockchain**. It serves as a visual and functional neural interface for the **Cortensor Network**, allowing users to interact with a swarm of specialized AI agents that optimize yields, audit smart contracts, and predict market variances in real-time.

🔗 **Live Demo**: [omni-core-id.vercel.app](https://omni-core-id.vercel.app)

---

## 🌟 Key Innovations

### 1. 🧠 The Consciousness Stream (Powered by Groq)
Most AI interfaces are static. OMNI-CORE is **"aware."**
-   **Real-time Thought Process**: Witness the AI's internal monologue as it scans the blockchain, analyzing gas prices, checking node health, and monitoring liquidity pools — autonomously.
-   **LPU Accelerated**: Using Groq's LPU (Language Processing Unit) with **Llama 3.3 70B**, inference happens in milliseconds, ensuring valid real-time analysis.
-   **Structured AI Output**: Commands are analyzed and classified into structured JSON (`taskType`, `priority`), enabling intelligent task routing — not just chat responses.

### 2. 🕸️ The Delegation Matrix (Cortensor Integration)
OMNI-CORE does not centralize power. It **distributes** it.
-   **Interactive 3D Node Visualization**: An immersive React Three Fiber canvas showing all active Cortensor nodes (Workers, Validators, Groq Core) with real-time status.
-   **Smart Node Selection**: When a user issues a command (e.g., "Audit contract"), the AI classifies the task and routes it to the **best specialist node** (Security → Node #42, Yield → Node #18, Audit → Node #73).
-   **Energy Beam Animation**: A glowing, animated beam shoots from the Groq Core to the target node during task delegation — making the process visually tangible.
-   **Proof of Inference (PoI)**: Each delegated task generates a cryptographic hash, simulating Cortensor's decentralized verification mechanism.

### 3. ✨ Premium "Void-Glass" Aesthetics
Designed to feel like a **sci-fi command center**.
-   **Glassmorphism UI**: Deep, layered transparency with subtle backdrop blur effects.
-   **Neon Typography**: High-contrast legibility for data-heavy dashboards using Inter and JetBrains Mono.
-   **Responsive Design**: Seamless experience from desktop monitors to mobile devices.
-   **Micro-Animations**: Framer Motion powers smooth transitions, hover effects, and status changes.

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                     OMNI-CORE Frontend                       │
│   ┌─────────────┐  ┌──────────────┐  ┌────────────────────┐ │
│   │ Consciousness│  │  Delegation  │  │ Action & Memory    │ │
│   │ Stream       │  │  Matrix (3D) │  │ Hub (Treasury,     │ │
│   │ (Terminal)   │  │  + Task Queue│  │  Audit Logs)       │ │
│   └──────┬───────┘  └──────┬───────┘  └────────────────────┘ │
│          │                 │                                  │
│   ┌──────▼─────────────────▼──────────────────────────────┐  │
│   │              App.tsx (State Orchestrator)              │  │
│   │  • handleCommand() → analyzeCommand() → selectNode()  │  │
│   │  • generatePoI() → updateTask() → visualize()         │  │
│   └──────┬───────────────────────────┬────────────────────┘  │
│          │                           │                        │
│   ┌──────▼──────┐             ┌──────▼──────────┐            │
│   │ groqClient  │             │ cortensorClient │            │
│   │ (Groq SDK)  │             │ (Network Sim)   │            │
│   │ Llama 3.3   │             │ Node Selection  │            │
│   │ 70B         │             │ PoI Generation  │            │
│   └─────────────┘             └─────────────────┘            │
└──────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React 19, Vite, TypeScript | Ultra-fast, type-safe UI rendering. |
| **Styling** | Tailwind CSS v4, Framer Motion | Advanced animations and responsive design. |
| **AI Engine** | **Groq SDK (Llama 3.3 70B Versatile)** | Structured JSON analysis + consciousness stream. |
| **3D Vis** | React Three Fiber (R3F), Three.js | Interactive node matrix with energy beams. |
| **Network Sim** | Custom Cortensor Client | Smart node selection + Proof of Inference. |
| **Deployment** | Vercel (Single-file build) | Global edge deployment with instant rebuilds. |

---

## 📂 Project Structure

```bash
OMNI-CORE/
├── src/
│   ├── config/
│   │   └── prompts.ts          # OMNI-CORE System Persona
│   ├── components/
│   │   ├── Header.tsx          # HUD-style Navigation Bar
│   │   ├── Panel.tsx           # Glassmorphic Container Component
│   │   ├── NodeGraph3D.tsx     # 3D Cortensor Network + Energy Beam
│   │   ├── TerminalStream.tsx  # Real-time AI Log Display
│   │   ├── PromptInput.tsx     # Command Input Interface
│   │   ├── TaskQueue.tsx       # Live Delegation Task Table
│   │   ├── ValidationRubric.tsx # Multi-Agent Consensus View
│   │   ├── TreasuryWatch.tsx   # Portfolio & Contract Monitor
│   │   ├── AuditLogs.tsx       # Verified Audit Trail
│   │   ├── StatusOrb.tsx       # AI Status Indicator
│   │   ├── WalletConnect.tsx   # Web3 Wallet UI
│   │   └── OverrideButton.tsx  # Human Override Control
│   ├── services/
│   │   ├── groqClient.ts       # Groq API Integration (AI Brain)
│   │   └── cortensorClient.ts  # Cortensor Network Simulation
│   ├── App.tsx                 # Main Logic Orchestrator
│   └── index.css               # Global "Void" Theme System
├── .env                        # API Keys (not committed)
├── vite.config.ts              # Build Configuration
└── package.json                # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Groq API Key (Get one at [groq.com](https://groq.com))

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/panzauto46-bot/OMNI-CORE-On-chain-Multi-agent-Neural-Interface-.git
    cd OMNI-CORE-On-chain-Multi-agent-Neural-Interface-
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory:
    ```env
    VITE_GROQ_API_KEY=your_groq_api_key_here
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

---

## 🎮 How to Use

1.  **Open the app** — The AI consciousness stream will begin thinking autonomously.
2.  **Type a command** in the terminal input at the bottom-left:
    -   `"Scan contract 0xABC for vulnerabilities"` → Routes to **Security Node #42**
    -   `"Calculate best yield for BNB staking"` → Routes to **Yield Node #18**
    -   `"Audit transaction history for wallet 0x123"` → Routes to **Audit Node #73**
3.  **Watch the flow**:
    -   AI analyzes your command → Classifies task type → Selects optimal node
    -   ⚡ **Energy Beam** shoots from Groq Core to the target node in 3D
    -   Task appears in queue → Proof of Inference hash is generated → Verified ✅
4.  **Interact with the 3D graph**: Drag to rotate, scroll to zoom, explore the network.

---

## 🗺️ Roadmap: The Evolution

### **Phase 1: The Nerve Center ✅**
- [x] Implemented "Void-Glass" Design System with glassmorphism.
- [x] Built interactive 3D Node Visualization Matrix (React Three Fiber).
- [x] Established component architecture for Panels, Audit Logs & Task Queues.
- [x] Responsive layout for desktop and mobile.

### **Phase 2: The Awakening ✅**
- [x] Integrated **Groq API** (Llama 3.3 70B) for live AI consciousness stream.
- [x] Developed "System Persona" (OMNI-CORE) with technical, futuristic personality.
- [x] Created structured JSON command analysis for intelligent task classification.

### **Phase 3: The Delegation ✅**
- [x] **Cortensor Simulation**: Smart node selection based on task specialization.
- [x] **Proof of Inference**: Cryptographic hash generation per delegated task.
- [x] **Energy Beam Animation**: Visual beam from Groq Core to active node.
- [x] **Agent Consensus**: Multi-agent validation rubric with consensus scoring.

### **Phase 4: Polish & Finalization ✅**
- [x] Mobile responsiveness optimization.
- [x] Performance tuning (API rate limit management).
- [x] Error handling improvements (graceful fallbacks).
- [x] Comprehensive documentation for hackathon submission.

### **Phase 5: Web3 Execution ✅**
- [x] Live wallet connection (MetaMask).
- [x] Real balance display & chain detection.
- [x] Explorer links (BscScan, Etherscan).
- [ ] Smart contract interaction (Read/Write).
- [ ] Automated yield farming execution.
- [ ] Real Cortensor Network integration.

---

## 🏆 Hackathon Submission

**Event**: Cortensor Hackathon #4 (DoraHacks)  
**Category**: AI × Blockchain Integration  
**Built by**: Pandu Dargah  

### Why OMNI-CORE Stands Out:
1.  **Real AI Integration** — Not a mock UI. Groq API processes every command in real-time with structured JSON output.
2.  **Intelligent Routing** — AI doesn't just respond; it classifies tasks and routes them to specialized network nodes.
3.  **Visual Proof** — The 3D energy beam and PoI hash make the decentralized verification process *tangible* and *impressive*.
4.  **Production Quality** — Responsive, polished, deployed, and ready for real-world use.

---

## ⚖️ License

Distributed under the **MIT License**.

**Copyright © 2026 Pandu Dargah.**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

---

<p align="center">
  Built with 💙 by <b>Pandu Dargah</b> for <b>Cortensor Hackathon #4</b> on <b>DoraHacks</b>
</p>

==================================
REPO: Resume-Pandu-Darma-Anugrah
# 🚀 Professional Portfolio - Pandu Darma Anugrah

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> **"Bridging the Gap Between Cutting-Edge Technology and Real-World Solutions."**

Welcome to the official repository for **Pandu Darma Anugrah's Portfolio Website**. This project serves as a comprehensive showcase of my journey as a **Versatile Full-Stack Engineer & Web3 Architect**, highlighting my expertise in building scalable applications, decentralized systems, and AI-driven solutions.

---

## 🌟 Live Demo

👉 **Visit the Portfolio:** [https://resume-pandu-darma-anugrah.vercel.app](https://resume-pandu-darma-anugrah.vercel.app)

---

## 🛠️ Technology Stack

This portfolio is built with a modern, high-performance tech stack focused on speed, developer experience, and maintainability:

*   **Frontend Framework:** [React 18](https://react.dev/) (powered by Vite)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) for type safety and scalability.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a sleek, responsive, and utility-first design system.
*   **Icons:** [Lucide React](https://lucide.dev/) for consistent and beautiful iconography.
*   **Deployment:** [Vercel](https://vercel.com/) for continuous deployment and global edge network delivery.

---

## ✨ Key Features

*   **🎨 Modern & minimalist Design:** Aesthetic layout with a focus on readability and content hierarchy.
*   **📱 Fully Responsive:** Optimized for all devices, from ultra-wide desktops to mobile phones.
*   **🌙 Dark Mode First:** A carefully crafted dark theme that is easy on the eyes and professional.
*   **⚡ High Performance:** Blazing fast load times thanks to Vite and static generation.
*   **🔍 SEO Optimized:** Proper semantic HTML structure and metadata for better search engine visibility.

---

## 📂 Featured Projects

This portfolio highlights my most impactful work across **Web3, AI, and Full-Stack Development**:

### 🤖 AI & Automation
*   **[agent.os](https://agent-os-id.vercel.app)**: An autonomous AI Agent Operating System designed for complex task execution and orchestration.
*   **[AnchorGuard AI](https://anchor-guard-ai.vercel.app/)**: Advanced AI-powered security and monitoring solution for protecting digital assets.
*   **[VibeAgent](https://vibeagentweb.vercel.app/)**: AI-Powered Financial Assistant on BNB Chain (Android App).

### 🔗 Blockchain & Web3
*   **[CrediProcure](https://credi-procure.vercel.app/)**: Decentralized B2B Invoice Financing Platform on Creditcoin (RWA).
*   **[CredPOS](https://credposappreview.vercel.app/)**: DeFi-Integrated Point of Sale with Multi-Chain Wallet Connect (Tezos/Sui).
*   **[InstaDrop](https://instadrop402.vercel.app/)**: Instant Pay-to-Download Protocol built on the Stacks Blockchain.
*   **[SatsProcure](https://sats-procure.vercel.app)**: Bitcoin inventory and procurement management system.

### 📊 Fintech & Analytics
*   **[Trading Analytics Dashboard](https://trading-analytics-dashboard-chi.vercel.app/)**: AI-Driven Trading Insights & Consistency Heatmap.
*   **[StableFlow](https://stableflowweb.vercel.app/)**: Institutional Treasury & Expense Management System on Solana.
*   **[BIT-SHADOW](https://bit-shadow.vercel.app)**: High-frequency crypto trading dashboard for real-time insights.

---

## 🚀 Getting Started

To run this project locally on your machine, follow these simple steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/panzauto46-bot/Resume-Pandu-Darma-Anugrah.git
    cd Resume-Pandu-Darma-Anugrah
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173` to see the app running.

---

## 📬 Contact Me

I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.

*   **Email:** [panzauto46@gmail.com](mailto:panzauto46@gmail.com)
*   **GitHub:** [@panzauto46-bot](https://github.com/panzauto46-bot)
*   **LinkedIn:** [Pandu Dargah](https://linkedin.com/in/pandu-dargah)

---

## 📄 License

Copyright &copy; 2026 **Pandu Dargah**.

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this software, but please attribute the original author.

---

<p align="center">
  Built with ❤️ by <strong>Pandu Darma Anugrah</strong>
</p>

==================================
REPO: SatsProcure-atau-BtcInventory-
<p align="center">
  <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=for-the-badge&logo=bitcoin&logoColor=white" alt="Bitcoin" />
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/sats--connect-4.2-F7931A?style=for-the-badge&logo=bitcoin&logoColor=white" alt="sats-connect" />
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<h1 align="center">SatsProcure</h1>

<p align="center">
  <strong>Decentralized B2B Procurement & Settlement on Bitcoin</strong>
</p>

<p align="center">
  Manage inter-business procurement invoices with <strong>native Bitcoin payments</strong>.<br/>
  Transparent, secure, and peer-to-peer — powered by <strong>Xverse Wallet</strong> &amp; <strong>sats-connect</strong>.
</p>

<p align="center">
  <a href="https://sats-procure.vercel.app">Live Demo</a> &bull;
  <a href="#-getting-started">Getting Started</a> &bull;
  <a href="#-project-structure">Project Structure</a> &bull;
  <a href="#-how-it-works">How It Works</a>
</p>

---

## Overview

SatsProcure is a modern web application that enables businesses to create, manage, and settle procurement invoices using **real Bitcoin transactions** on the Bitcoin Testnet. Built entirely with React and TypeScript, it connects directly to the Bitcoin network through the Xverse wallet — no EVM, no smart contracts, no intermediaries.

### Why SatsProcure?

| Problem | Solution |
|---------|----------|
| Cross-border B2B payments are slow and expensive | Direct Bitcoin transfers settle in minutes |
| Traditional invoicing relies on centralized platforms | Peer-to-peer invoice management, no middleman |
| Payment verification requires trust | Every payment is a real Bitcoin transaction, publicly verifiable on-chain |
| Complex multi-step settlement | Simple flow: Create Invoice → Pay with BTC → Confirm Receipt |

---

## Key Features

### Dual Role System
- **Supplier Dashboard** — Create invoices, set item details & pricing (in sats), track payment status
- **Buyer Dashboard** — View incoming invoices, pay with real BTC, confirm goods receipt

### Native Bitcoin Payments
- **Real BTC Transfers** — Every payment is a genuine Bitcoin transaction broadcast to the network
- **sats-connect Integration** — Uses `Wallet.request('sendTransfer', ...)` for native BTC transfers
- **Xverse Wallet** — Browser extension wallet for signing and broadcasting transactions
- **On-Chain Verification** — Transaction hashes link directly to the Bitcoin blockchain

### Escrow & Partial Payments
- **Partial Payments (Installments)** — Buyers can pay invoices in multiple installments with a visual progress bar tracking completion
- **Escrow Status Tracking** — Invoice lifecycle: `Pending` → `Partial` → `Escrowed` → `Paid`
- **Confirm Receipt** — Buyer confirms goods received, releasing escrow and marking invoice as settled

### Premium UI/UX
- **Dark Theme** — Professional dark interface with amber/orange accent colors
- **Responsive Design** — Fully responsive from mobile to desktop
- **Real-Time Notifications** — Toast notifications for wallet events, payments, and errors
- **Transaction Overlay** — Premium overlay animation during payment processing
- **Bilingual (EN/ID)** — Full English and Bahasa Indonesia localization

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 19 + TypeScript 5.9 | UI components and type safety |
| **Styling** | Tailwind CSS 4 | Utility-first responsive design |
| **Build** | Vite 7 | Fast development and optimized builds |
| **Wallet** | sats-connect 4.2 | Bitcoin wallet connection protocol |
| **Wallet App** | Xverse | Browser extension for Bitcoin signing |
| **Network** | Bitcoin Testnet | Real Bitcoin test network |
| **Icons** | Lucide React | Consistent icon library |
| **State** | React Context | Centralized app state management |
| **i18n** | Custom LanguageContext | English & Indonesian translations |
| **IDs** | uuid v13 | Unique invoice identifiers |
| **Hosting** | Vercel | Production deployment |

---

## Project Structure

```
SatsProcure/
├── src/
│   ├── components/              # React UI Components
│   │   ├── Navbar.tsx           # Top navigation bar with wallet connect
│   │   ├── RoleSelector.tsx     # Supplier/Buyer role selection screen
│   │   ├── Dashboard.tsx        # Main dashboard with stats, filters, table
│   │   ├── StatsCards.tsx       # Invoice statistics cards
│   │   ├── InvoiceTable.tsx     # Invoice list with expandable rows
│   │   ├── CreateInvoiceModal.tsx   # Modal for creating new invoices
│   │   ├── InvoiceDetailModal.tsx   # Modal for viewing invoice details
│   │   ├── PayConfirmModal.tsx      # Payment confirmation with execution path
│   │   ├── Notifications.tsx        # Toast notification system
│   │   └── TransactionOverlay.tsx   # Premium overlay during transactions
│   │
│   ├── context/
│   │   └── AppContext.tsx       # Central state: wallet, invoices, payments
│   │
│   ├── lib/
│   │   └── xverse.ts           # Xverse wallet SDK wrapper (sats-connect)
│   │                            #   ├── connectXverse()
│   │                            #   ├── getXverseBalance()
│   │                            #   ├── sendXverseTransfer()
│   │                            #   └── disconnectXverse()
│   │
│   ├── i18n/
│   │   ├── LanguageContext.tsx  # Language provider & hook
│   │   └── translations.ts     # EN + ID translation strings
│   │
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces (Invoice, Wallet, etc.)
│   │
│   ├── utils/
│   │   └── cn.ts               # Tailwind class merge utility
│   │
│   ├── App.tsx                  # Root app component with providers
│   ├── main.tsx                 # Vite entry point
│   └── index.css                # Global Tailwind styles
│
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── START_APP.bat                # Windows quick-start script
└── LICENSE                      # MIT License
```

---

## How It Works

### Payment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    SatsProcure Payment Flow                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. SUPPLIER creates invoice (off-chain)                    │
│     └── Invoice stored in app with buyer's BTC address      │
│                                                             │
│  2. BUYER pays invoice (on-chain BTC transfer)              │
│     ├── App calls: sats-connect → sendTransfer()            │
│     ├── Xverse wallet signs & broadcasts transaction        │
│     └── Real tBTC sent: Buyer wallet → Supplier wallet      │
│                                                             │
│  3. BUYER confirms receipt of goods                         │
│     └── Invoice status updated to PAID (settlement done)    │
│                                                             │
│  Network:  Bitcoin Testnet                                  │
│  Wallet:   Xverse (sats-connect v4)                         │
│  Method:   Native BTC transfer (P2WPKH / P2TR)             │
└─────────────────────────────────────────────────────────────┘
```

### Invoice Lifecycle

```
  ┌─────────┐    Pay Partial    ┌─────────┐    Pay Remaining   ┌──────────┐    Confirm Receipt   ┌──────┐
  │ PENDING │ ────────────────► │ PARTIAL │ ──────────────────► │ ESCROWED │ ───────────────────► │ PAID │
  └─────────┘                   └─────────┘                     └──────────┘                      └──────┘
       │                             │
       │         Pay Full            │         Pay Full
       └─────────────────────────────┴──────────────────────────► ESCROWED ──► PAID
```

### Core Functions (`src/lib/xverse.ts`)

| Function | Description |
|----------|-------------|
| `connectXverse()` | Connects to Xverse wallet, returns payment address & public key |
| `getXverseBalance()` | Fetches confirmed + unconfirmed BTC balance in sats |
| `sendXverseTransfer(address, sats)` | Sends BTC to recipient via Xverse wallet signing |
| `disconnectXverse()` | Cleanly disconnects the wallet session |

---

## Getting Started

### Prerequisites

| Requirement | Version | Purpose |
|------------|---------|---------|
| **Node.js** | v18+ | Runtime environment |
| **Xverse Wallet** | Latest | Bitcoin wallet browser extension |
| **Bitcoin Testnet BTC** | Any amount | Test currency for payments |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/panzauto46-bot/SatsProcure-atau-BtcInventory-.git
cd SatsProcure-atau-BtcInventory-

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

> **Windows users:** You can also double-click `START_APP.bat` to auto-install and launch.

### Get Testnet BTC

You need testnet BTC (tBTC) in your Xverse wallet to test payments:

1. Open Xverse Wallet → Switch to **Testnet** network
2. Copy your **Native SegWit address** (starts with `tb1...`)
3. Visit a Bitcoin Testnet faucet:
   - [coinfaucet.eu/btc-testnet](https://coinfaucet.eu/en/btc-testnet/)
   - [bitcoinfaucet.uo1.net](https://bitcoinfaucet.uo1.net/send.php)
4. Paste your address and request tBTC
5. Wait ~10-30 minutes for confirmation

---

## Usage Guide

### Step 1: Connect Wallet
Click **"Connect Xverse"** in the top navigation bar. Xverse wallet will prompt you to approve the connection.

### Step 2: Choose Role
- **Supplier** — You issue invoices and receive payments
- **Buyer** — You view and pay invoices

### Step 3: Create Invoice (as Supplier)
1. Click **"Create Invoice"**
2. Fill in buyer name, buyer's BTC address, due date
3. Add line items with quantities and prices (in sats)
4. Submit — invoice is created and visible to both roles

### Step 4: Pay Invoice (as Buyer)
1. Find the invoice in the table → Click **"Pay"**
2. Review the payment confirmation modal (amount, execution path)
3. Click **"Pay Now"** → Xverse wallet will prompt to sign the transaction
4. Confirm in Xverse → BTC is sent to the supplier's address
5. Supports **partial payments** — pay in installments!

### Step 5: Confirm Receipt (as Buyer)
1. After receiving goods, click **"Confirm Receipt"** on the escrowed invoice
2. Funds are marked as released → Invoice status changes to **Paid**

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on `localhost:5173` |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |

---

## Roadmap

### Phase 1: Foundation ✅
- [x] Xverse Wallet Integration (sats-connect)
- [x] Invoice CRUD (Create, Read, Update, Delete)
- [x] Dual Role System (Supplier & Buyer dashboards)
- [x] Premium Dark UI with Tailwind CSS
- [x] Bilingual Support (English / Bahasa Indonesia)
- [x] Vercel Deployment

### Phase 2: Enhanced Settlement ✅ *(Current)*
- [x] **Native Bitcoin Payments** — Real BTC transfers via `sendTransfer()`
- [x] **Escrow Mechanism** — Track payment hold & release status
- [x] **Partial Payments** — Installment support with progress bar
- [x] **Confirm Receipt** — Buyer-triggered settlement to release funds
- [x] **Bitcoin Testnet** — Fully functional on real Bitcoin test network
- [x] **Removed EVM/Solidity** — Pure Bitcoin-native architecture (no MetaMask, no smart contracts)

### Phase 3: On-Chain Escrow (Next)
- [ ] **Multi-signature Escrow** — 2-of-3 multisig for trustless escrow using Bitcoin Script
- [ ] **PSBT (Partially Signed Bitcoin Transactions)** — Collaborative transaction signing
- [ ] **Invoice Persistence** — Store invoices on-chain via OP_RETURN or Ordinals inscriptions
- [ ] **Block Explorer Integration** — Direct links to mempool.space for tx verification

### Phase 4: Scaling & Beyond
- [ ] **Lightning Network** — Instant micro-payment settlement for small invoices
- [ ] **Mobile App** — React Native with Xverse mobile SDK
- [ ] **Reputation System** — On-chain supplier scoring based on delivery history
- [ ] **Multi-currency** — Support for Stacks (STX) and BRC-20 tokens
- [ ] **Mainnet Launch** — Production deployment on Bitcoin Mainnet

---

## Live Demo

**[sats-procure.vercel.app](https://sats-procure.vercel.app)**

> Requires Xverse wallet browser extension with Bitcoin Testnet enabled.

---

## License

Distributed under the **MIT License**. See [LICENSE](./LICENSE) for details.

---

<p align="center">
  <strong>SatsProcure</strong> — Empowering B2B Commerce on Bitcoin.<br/>
  <sub>Built with native Bitcoin payments. No EVM. No smart contracts. Just BTC.</sub>
</p>

==================================
REPO: SingularYield
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

==================================
REPO: solana-stablecoin-standard
<div align="center">

# 💎 SSS Forge
**Solana Stablecoin Standard (SSS) Creation Protocol - Token-2022**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![Solana Devnet](https://img.shields.io/badge/Solana-Devnet--Live-green?logo=solana)](https://explorer.solana.com/address/sssFeG1j3c5xU2aXZK1T8M2VfQf4wJpG6P8N9gYqA?cluster=devnet)
[![Anchor v0.30.1](https://img.shields.io/badge/Anchor-v0.30.1-blue)](#)

*An innovative protocol for launching next-generation stablecoins on Solana, fully compliant with the new spl-token-2022 standard and advanced extensions.*

</div>

---

## 🚀 Devnet Proof of Deployment

SSS Forge Smart Contract is live on Solana Devnet!
*   **Program ID:** [`sssFeG1j3c5xU2aXZK1T8M2VfQf4wJpG6P8N9gYqA`](https://explorer.solana.com/address/sssFeG1j3c5xU2aXZK1T8M2VfQf4wJpG6P8N9gYqA?cluster=devnet)
*   *Use the Solana Explorer link above to verify our Program Deployment and associated transactions.*

---

## 📖 Overview

**SSS Forge** is an all-in-one Smart Contract architecture and Watchtower ecosystem designed to generate, manage, and regulate stablecoins on the Solana blockchain. By fully leveraging the modern **Token-2022** program extensions, SSS Forge provides two powerful tiers of stablecoin creation tailored for different economic use cases:

**(Comprehensive Project Documentation Suite):**
*   🧭 **Architecture Deep Dive:** [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
*   💎 **SSS-1 Minimal Spec:** [`docs/SSS-1.md`](docs/SSS-1.md)
*   🚔 **SSS-2 Compliant Spec:** [`docs/SSS-2.md`](docs/SSS-2.md)
*   💻 **SDK & Integration Guide:** [`docs/SDK.md`](docs/SDK.md)
*   🛠️ **Terminal CLI Operations:** [`docs/OPERATIONS.md`](docs/OPERATIONS.md)
*   🛡️ **Regulation & Compliance Rules:** [`docs/COMPLIANCE.md`](docs/COMPLIANCE.md)
*   🌐 **Watchtower API Reference:** [`docs/API.md`](docs/API.md)

---

## ✨ Key Features & Technical Specifications

### 🔐 1. Advanced Role-Based Access Control (RBAC)
To ensure absolute security and decentralization of power, the protocol configuration defines multiple distinct roles:
*   👑 `Master`: Supreme configurator. Updates authorities but cannot mint or burn.
*   🖨️ `Minter`: Authorized to mint new tokens corresponding to fiat reserves.
*   🔥 `Burner`: Authorized to burn tokens from the protocol treasury.
*   ⏸️ `Pauser`: Authorized to freeze specific addresses (emergency halt).
*   🚫 `Blacklister`: Authorized to add/remove addresses from the global Transfer Hook blacklist.
*   🚔 `Seizer`: Authorized to forcefully seize assets from compromised wallets (*SSS-2 Compliant tokens only*).

### 🪝 2. Transfer Hooks (Auto-Enforced AML)
Using `spl-transfer-hook-interface`, every transaction of a Compliant Token (SSS-2) is automatically routed through our custom on-chain program.
*   If the sender OR the receiver is recorded in the `BlacklistEntry` state PDA, the transfer instruction is **rejected** at the program level.
*   Requires zero off-chain indexing manipulation; 100% enforced by Solana validators.

### 🛡️ 3. Native Compliance (Seize Funds)
Regulated stablecoin issuers must comply with court orders to seize funds from hackers or sanctioned entities.
*   Utilizing the Token-2022 `Permanent Delegate` extension.
*   The `Seizer` wallet can execute a CPI call to gracefully withdraw tokens from an arbitrary wallet into the treasury without the owner's signature.

### 🚥 4. Graceful Failure Mechanism
Designed to be robust and developer-friendly. If the `Seizer` attempts to seize funds from an **SSS-1 Minimal Token** (which intentionally lacks a Permanent Delegate), the program avoids panicking. Instead, it inspects the Mint extensions and returns a clean, custom error code: `NotSSS2Compliant`.

---

## 📁 Project Structure

The codebase is highly modular, separating the Protocol (Rust), Integration (TypeScript), and Operations (Node Backend).

```text
SSS-Forge/
│
├── programs/sss_forge/src/     # [LAYER 1] Smart Contracts (Rust / Anchor)
│   ├── lib.rs                  # Main program entrypoint
│   ├── state.rs                # On-chain data structures (Config, Blacklist)
│   ├── errors.rs               # Custom ProgramError enums (Graceful Failures)
│   └── instructions/           # Business logic modules (RBAC, Seize, Blacklist, Hook)
│
├── sdk/                        # [LAYER 2] TypeScript SDK & CLI Tooling
│   ├── src/index.ts            # High-level OOP SolanaStablecoin Class
│   ├── src/cli.ts              # Command Line Interface (Commander)
│   └── package.json            # @stbr/sss-token NPM config
│
├── backend/                    # [LAYER 3] Watchtower API & Indexer (Node.js)
│   ├── src/index.ts            # Express server entrypoint
│   ├── src/services/           # Core services (Indexer, Webhook, Compliance, MintBurn)
│   ├── Dockerfile              # Containerization for production
│   └── .env.example            # Environment variables template
│
├── docs/                       # Project Documentation Suite
├── tests/                      # Integration Test Suites (Mocha / Chai)
├── docker-compose.yml          # One-click deployment for the Watchtower Backend
└── README.md                   # You are here
```

---

## 🗺️ Roadmap

- [x] **Phase 1:** UI/UX Dashboard Concept Design.
- [x] **Phase 2:** Smart Contract Architecture (Rust/Anchor) with Token-2022 Extensions.
- [x] **Phase 3:** TypeScript SDK and CLI Operator Panel (`@stbr/sss-token`).
- [x] **Phase 4:** Watchtower Backend Services (Indexer, Webhooks) & Docker Containerization.
- [x] **Phase 5:** Grand Documentation Suite & Integration Testing.
- [ ] **Phase 6:** Mainnet Deployment & Third-Party Security Audits.
- [ ] **Phase 7:** Web Interface Release (Dashboard interacting directly with SDK).

---

## 🛠️ Tech Stack
*   **Smart Contracts:** Rust, Anchor Framework `v0.30.1`
*   **Solana Programs:** `spl-token-2022`, `spl-transfer-hook-interface`
*   **Integration SDK:** TypeScript, Node.js, Commander
*   **Backend Services:** Express.js, Winston, Docker Compose
*   **Testing:** Mocha, Chai, Anchor Localnet

---

## 📜 License
This project is licensed under the **MIT License**.
Copyright © 2026 Pandu Dargah. See the `LICENSE` file for more details.

---
<div align="center">
  <i>Built with ❤️ for the Web3 Ecosystem.</i>
</div>

==================================
REPO: SolForge-Academy
<p align="center">
  <img src="https://img.shields.io/badge/Solana-Devnet-14F195?style=for-the-badge&logo=solana&logoColor=white" alt="Solana Devnet" />
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="MIT License" />
</p>

<h1 align="center">SolForge Academy</h1>

<p align="center">
  <strong>The Ultimate Interactive Hub for Solana Native Builders</strong>
</p>

<p align="center">
  A gamified, interactive learning platform for mastering Solana blockchain development.<br/>
  Write real Solana programs in your browser, earn XP, collect NFT certificates, and compete on the leaderboard.
</p>

<p align="center">
  <a href="https://solforge-academy.vercel.app">Live Demo</a> &bull;
  <a href="#getting-started">Getting Started</a> &bull;
  <a href="#features">Features</a> &bull;
  <a href="#tech-stack">Tech Stack</a> &bull;
  <a href="./ARCHITECTURE.md">Architecture</a>
</p>

---

## Features

- **In-Browser Code Editor** -- Write and test Rust, TypeScript, and Anchor code with Monaco Editor (VS Code engine)
- **Course Detail Pages** -- Rich course pages with overview, learning objectives, prerequisites, and full syllabus
- **Split-Screen Learning** -- Left panel for lesson content (Markdown), right panel for live code editor
- **Web3 Gamification** -- Earn XP tokens, level up, maintain daily streaks, unlock achievements
- **cNFT Certificates** -- Mint compressed NFT certificates via Metaplex Bubblegum on course completion
- **Multi-Auth System** -- Connect with Phantom, Solflare (Solana wallets), Google, or GitHub (OAuth)
- **Multi-Language** -- Full i18n support for English, Portuguese (BR), and Spanish
- **Dark/Light Mode** -- Modern glassmorphism design with seamless theme toggle
- **Leaderboard** -- Compete with other builders globally
- **Service Layer Architecture** -- Clean service interfaces ready for real Smart Contract integration

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 + shadcn/ui (New York style) |
| **Code Editor** | Monaco Editor (`@monaco-editor/react`) |
| **Markdown** | react-markdown |
| **Authentication** | NextAuth.js v5 (Google, GitHub) + Solana Wallet Adapter (Phantom, Solflare) |
| **Blockchain** | Solana Web3.js + Wallet Adapter + Helius DAS API |
| **Icons** | Lucide React |
| **UI Primitives** | Radix UI (via shadcn/ui) |
| **Error Monitoring** | Sentry (client + server + edge) |
| **Analytics** | Google Analytics 4 (via @next/third-parties) |
| **Deployment** | Vercel |

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Route group with Navbar + Footer
│   │   ├── page.tsx              # Home / Landing Page
│   │   ├── courses/
│   │   │   ├── page.tsx          # Course Catalog Grid
│   │   │   └── [slug]/page.tsx   # Course Detail Page (NEW)
│   │   ├── dashboard/page.tsx    # Builder Dashboard
│   │   ├── leaderboard/page.tsx  # Leaderboard
│   │   └── profile/page.tsx      # User Profile
│   ├── lesson/[courseId]/        # Split-screen Lesson View
│   ├── api/
│   │   ├── auth/[...nextauth]/   # NextAuth API Route
│   │   └── nfts/[wallet]/        # Helius DAS API proxy (cNFT reading)
│   ├── layout.tsx                # Root Layout
│   ├── providers.tsx             # All Context Providers
│   └── globals.css               # Global Styles
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── shared/                   # AuthModal, CodeEditor, Hero
│   └── ui/                       # shadcn/ui (badge, button, dialog, etc.)
├── contexts/
│   ├── AuthContext.tsx            # Unified auth (wallet + social) + game state
│   ├── ServiceContext.tsx         # Service layer (enrollment, lesson completion)
│   ├── LanguageContext.tsx        # i18n context
│   ├── ThemeContext.tsx           # Dark/Light theme
│   └── WalletProvider.tsx        # Solana Wallet Adapter
├── data/
│   └── courses.ts                # 5 courses, 15 lessons, achievements
├── i18n/
│   └── translations.ts           # EN, PT-BR, ES translations
├── hooks/
│   └── useNFTs.ts                # Custom hook for fetching on-chain cNFTs
├── services/
│   └── interfaces.ts             # Service interfaces + stub implementations
├── lib/
│   ├── auth.ts                   # NextAuth.js configuration
│   └── utils.ts                  # Utility functions
└── types/
    └── next-auth.d.ts            # NextAuth type augmentations
```

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (or yarn/pnpm)
- A Solana wallet browser extension (optional, for wallet auth): [Phantom](https://phantom.app/) or [Solflare](https://solflare.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/panzauto46-bot/SolForge-Academy.git
cd SolForge-Academy

# Install dependencies
npm install

# Copy environment variables template
cp .env.local.example .env.local
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# NextAuth.js (Required)
NEXTAUTH_SECRET=your_random_secret_here    # generate with: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (optional - for Google login)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth (optional - for GitHub login)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Solana (optional - defaults shown)
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com

# Helius DAS API (optional - for reading on-chain cNFT certificates)
HELIUS_API_KEY=your_helius_api_key

# Google Analytics 4 (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Sentry Error Monitoring (optional)
NEXT_PUBLIC_SENTRY_DSN=https://examplePublicKey@o0.ingest.sentry.io/0
```

> **Note:** Only `NEXTAUTH_SECRET` and `NEXTAUTH_URL` are required. All other variables are optional -- features gracefully degrade when not configured. Wallet connection works without any environment variables.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build & Production

```bash
npm run build
npm start
```

## Deployment (Vercel)

This project is optimized for [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository on [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables in **Settings > Environment Variables**:
   - `NEXTAUTH_SECRET` (required)
   - `NEXTAUTH_URL` (your Vercel domain, e.g., `https://your-app.vercel.app`)
   - `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` (for Google OAuth)
   - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` (for GitHub OAuth)
   - `HELIUS_API_KEY` (for on-chain cNFT reading)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (for Google Analytics)
   - `NEXT_PUBLIC_SENTRY_DSN` (for error monitoring)
4. Deploy -- Vercel auto-detects Next.js

> **OAuth Callback URLs:**
> - Google: `https://your-domain.vercel.app/api/auth/callback/google`
> - GitHub: `https://your-domain.vercel.app/api/auth/callback/github`

## Courses

| # | Course | Level | Lessons | XP |
|---|--------|-------|---------|-----|
| 1 | Solana 101: Foundations | Beginner | 3 | 800 |
| 2 | Anchor Framework Essentials | Intermediate | 3 | 1,200 |
| 3 | Solana Web3.js Client | Beginner | 3 | 800 |
| 4 | SPL Token Mastery | Intermediate | 3 | 1,200 |
| 5 | NFTs with Metaplex | Advanced | 3 | 1,600 |

## Roadmap

### Phase 1: Concept & UI/UX
- [x] Theme & Design (Dark Mode Glassmorphism)
- [x] Landing Page (Hero, Features, Stats)
- [x] Course Catalog (Card UI)
- [x] Multi-Auth Modal Design

### Phase 2: Next.js Migration & Architecture
- [x] Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- [x] shadcn/ui + Radix for interactive components
- [x] Reusable React components & route groups
- [x] Routing (/courses, /dashboard, /leaderboard, /profile)

### Phase 3: Web3 & Authentication
- [x] Solana Wallet Adapter (Phantom, Solflare)
- [x] NextAuth.js v5 (Google, GitHub OAuth)
- [x] Unified AuthContext (wallet + social)
- [x] Environment variables & Vercel deployment

### Phase 4: LMS Engine & Content
- [x] Extended course data model (overview, objectives, prerequisites, syllabus)
- [x] Course detail pages (/courses/[slug])
- [x] Enhanced split-screen lesson view with Markdown rendering
- [x] Service layer architecture (ServiceContext with stub implementations)
- [x] i18n translations for all new features

### Phase 5: Killer Features (IDE & Gamification)
- [x] In-browser Monaco Editor with syntax highlighting (Rust, TypeScript, JSON)
- [x] Pass/Fail code checking with keyword-based validation
- [x] XP Balance & Level system (Level = floor(sqrt(xp/100)))
- [x] Streak calendar (28-day grid) & interactive leaderboard with user ranking
- [x] Helius DAS API integration for reading on-chain cNFT certificates

### Phase 6: Final Polish
- [x] Complete i18n coverage (100+ keys across EN, PT-BR, ES)
- [x] Google Analytics 4 integration
- [x] Sentry error monitoring (client + server + edge)
- [x] Lighthouse accessibility optimizations (skip links, ARIA, semantic HTML)
- [x] Technical documentation (README.md, ARCHITECTURE.md)

### Phase 7: Smart Contracts & Production (Next)
- [ ] Anchor program integration for on-chain XP
- [ ] Real cNFT certificate minting via Metaplex Bubblegum
- [ ] On-chain leaderboard from token balances
- [ ] Database integration (PostgreSQL / Supabase)
- [ ] Advanced SEO & performance optimization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

<p align="center">
  Built with love for the Solana ecosystem<br/>
  <sub>SolForge Academy &copy; 2025-2026</sub>
</p>

==================================
REPO: SSS-Forge
<div align="center">

# 💎 SSS Forge
**Solana Stablecoin Standard (SSS) Creation Protocol - Token-2022**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![Solana Devnet](https://img.shields.io/badge/Solana-Devnet--Live-green?logo=solana)](https://explorer.solana.com/address/sssFeG1j3c5xU2aXZK1T8M2VfQf4wJpG6P8N9gYqA?cluster=devnet)
[![Anchor v0.30.1](https://img.shields.io/badge/Anchor-v0.30.1-blue)](#)

*An innovative protocol for launching next-generation stablecoins on Solana, fully compliant with the new spl-token-2022 standard and advanced extensions.*

</div>

---

## 🚀 Devnet Proof of Deployment

SSS Forge Smart Contract is live on Solana Devnet!
*   **Program ID:** [`sssFeG1j3c5xU2aXZK1T8M2VfQf4wJpG6P8N9gYqA`](https://explorer.solana.com/address/sssFeG1j3c5xU2aXZK1T8M2VfQf4wJpG6P8N9gYqA?cluster=devnet)
*   *Use the Solana Explorer link above to verify our Program Deployment and associated transactions.*

---

## 📖 Overview

**SSS Forge** is an all-in-one Smart Contract architecture and Watchtower ecosystem designed to generate, manage, and regulate stablecoins on the Solana blockchain. By fully leveraging the modern **Token-2022** program extensions, SSS Forge provides two powerful tiers of stablecoin creation tailored for different economic use cases:

**(Comprehensive Project Documentation Suite):**
*   🧭 **Architecture Deep Dive:** [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
*   💎 **SSS-1 Minimal Spec:** [`docs/SSS-1.md`](docs/SSS-1.md)
*   🚔 **SSS-2 Compliant Spec:** [`docs/SSS-2.md`](docs/SSS-2.md)
*   💻 **SDK & Integration Guide:** [`docs/SDK.md`](docs/SDK.md)
*   🛠️ **Terminal CLI Operations:** [`docs/OPERATIONS.md`](docs/OPERATIONS.md)
*   🛡️ **Regulation & Compliance Rules:** [`docs/COMPLIANCE.md`](docs/COMPLIANCE.md)
*   🌐 **Watchtower API Reference:** [`docs/API.md`](docs/API.md)

---

## ✨ Key Features & Technical Specifications

### 🔐 1. Advanced Role-Based Access Control (RBAC)
To ensure absolute security and decentralization of power, the protocol configuration defines multiple distinct roles:
*   👑 `Master`: Supreme configurator. Updates authorities but cannot mint or burn.
*   🖨️ `Minter`: Authorized to mint new tokens corresponding to fiat reserves.
*   🔥 `Burner`: Authorized to burn tokens from the protocol treasury.
*   ⏸️ `Pauser`: Authorized to freeze specific addresses (emergency halt).
*   🚫 `Blacklister`: Authorized to add/remove addresses from the global Transfer Hook blacklist.
*   🚔 `Seizer`: Authorized to forcefully seize assets from compromised wallets (*SSS-2 Compliant tokens only*).

### 🪝 2. Transfer Hooks (Auto-Enforced AML)
Using `spl-transfer-hook-interface`, every transaction of a Compliant Token (SSS-2) is automatically routed through our custom on-chain program.
*   If the sender OR the receiver is recorded in the `BlacklistEntry` state PDA, the transfer instruction is **rejected** at the program level.
*   Requires zero off-chain indexing manipulation; 100% enforced by Solana validators.

### 🛡️ 3. Native Compliance (Seize Funds)
Regulated stablecoin issuers must comply with court orders to seize funds from hackers or sanctioned entities.
*   Utilizing the Token-2022 `Permanent Delegate` extension.
*   The `Seizer` wallet can execute a CPI call to gracefully withdraw tokens from an arbitrary wallet into the treasury without the owner's signature.

### 🚥 4. Graceful Failure Mechanism
Designed to be robust and developer-friendly. If the `Seizer` attempts to seize funds from an **SSS-1 Minimal Token** (which intentionally lacks a Permanent Delegate), the program avoids panicking. Instead, it inspects the Mint extensions and returns a clean, custom error code: `NotSSS2Compliant`.

---

## 📁 Project Structure

The codebase is highly modular, separating the Protocol (Rust), Integration (TypeScript), and Operations (Node Backend).

```text
SSS-Forge/
│
├── programs/sss_forge/src/     # [LAYER 1] Smart Contracts (Rust / Anchor)
│   ├── lib.rs                  # Main program entrypoint
│   ├── state.rs                # On-chain data structures (Config, Blacklist)
│   ├── errors.rs               # Custom ProgramError enums (Graceful Failures)
│   └── instructions/           # Business logic modules (RBAC, Seize, Blacklist, Hook)
│
├── sdk/                        # [LAYER 2] TypeScript SDK & CLI Tooling
│   ├── src/index.ts            # High-level OOP SolanaStablecoin Class
│   ├── src/cli.ts              # Command Line Interface (Commander)
│   └── package.json            # @stbr/sss-token NPM config
│
├── backend/                    # [LAYER 3] Watchtower API & Indexer (Node.js)
│   ├── src/index.ts            # Express server entrypoint
│   ├── src/services/           # Core services (Indexer, Webhook, Compliance, MintBurn)
│   ├── Dockerfile              # Containerization for production
│   └── .env.example            # Environment variables template
│
├── docs/                       # Project Documentation Suite
├── tests/                      # Integration Test Suites (Mocha / Chai)
├── docker-compose.yml          # One-click deployment for the Watchtower Backend
└── README.md                   # You are here
```

---

## 🗺️ Roadmap

- [x] **Phase 1:** UI/UX Dashboard Concept Design.
- [x] **Phase 2:** Smart Contract Architecture (Rust/Anchor) with Token-2022 Extensions.
- [x] **Phase 3:** TypeScript SDK and CLI Operator Panel (`@stbr/sss-token`).
- [x] **Phase 4:** Watchtower Backend Services (Indexer, Webhooks) & Docker Containerization.
- [x] **Phase 5:** Grand Documentation Suite & Integration Testing.
- [ ] **Phase 6:** Mainnet Deployment & Third-Party Security Audits.
- [ ] **Phase 7:** Web Interface Release (Dashboard interacting directly with SDK).

---

## 🛠️ Tech Stack
*   **Smart Contracts:** Rust, Anchor Framework `v0.30.1`
*   **Solana Programs:** `spl-token-2022`, `spl-transfer-hook-interface`
*   **Integration SDK:** TypeScript, Node.js, Commander
*   **Backend Services:** Express.js, Winston, Docker Compose
*   **Testing:** Mocha, Chai, Anchor Localnet

---

## 📜 License
This project is licensed under the **MIT License**.
Copyright © 2026 Pandu Dargah. See the `LICENSE` file for more details.

---
<div align="center">
  <i>Built with ❤️ for the Web3 Ecosystem.</i>
</div>

==================================
REPO: StableFlow
# 🌊 StableFlow: Institutional Treasury & Expense Management System

> **Streamlining corporate treasury operations with the speed of Solana and the reliability of Stablecoins.**

![StableFlow Banner](https://via.placeholder.com/1200x400.png?text=StableFlow+Treasury+Management) 
*(Note: Replace with actual screenshot or banner)*

## 🚀 Executive Summary
**StableFlow** is an enterprise-grade financial platform designed to solve the critical bottleneck of slow, expensive, and opaque cross-border reimbursements for global teams. By leveraging the **Solana blockchain** for instant settlement and **USDC**, we reduce settlement times from days to seconds, empowering multinational corporations and distributed teams.

---

## 🧐 The Problem
Multinational corporations and distributed teams face significant friction in managing operational expenses:
*   **🐢 Slow Settlements:** Traditional banking rails (SWIFT) take 3-5 days.
*   **💸 High Fees:** Forex conversions and wire fees eat into budgets.
*   **Transparency Issues:** Lack of real-time visibility into transaction status.

## 💡 The Solution
**StableFlow** enables real-time payroll and expense reimbursement using stablecoins (USDC).
*   **Bridging the Gap:** Connects a native Android application for employees with a comprehensive Web3 dashboard for finance teams.
*   **Instant & Cheap:** All approved claims are settled instantly on-chain with near-zero gas fees.

---

## ✨ Key Features

### 📱 Mobile-First Expense Claims (Android Native)
*   **Snap & Go:** Employees can snap receipts, categorize expenses, and request reimbursement directly from their mobile devices.
*   **User-Friendly:** Native Android experience (Java/Kotlin) for smooth performance.

### ⚡ Instant Settlement
*   **Solana Speed:** Approved claims are settled instantly in USDC.
*   **Cost-Effective:** Leveraging Solana's low transaction fees.

### 💻 Corporate Treasury Dashboard (React + Solana)
*   **Finance Control Center:** A robust web interface for Finance Managers.
*   **Liquidity Management:** Review claims, manage treasury, and execute bulk payouts easily.

### 🔗 On-Chain Transparency
*   **Immutable Audit Trail:** All transactions are verifiable on-chain.
*   **Accountability:** Complete transparency for accounting and auditing purposes.

---

## 🛠️ Tech Stack

*   **Mobile:** Android Native (Java/Kotlin)
*   **Frontend:** React.js, TailwindCSS
*   **Blockchain:** Solana Web3.js, SPL Token Standard
*   **Backend:** Firebase (Auth, Database)

---

## 🚀 Getting Started

### Prerequisites
*   Node.js & npm
*   Android Studio (for Mobile App)
*   Solana Wallet (Phantom, etc.)

### Installation

#### Web Dashboard
1.  Clone the repository:
    ```bash
    git clone https://github.com/panzauto46-bot/StableFlow.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd StableFlow
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

#### Mobile App
1.  Open the `android` directory in Android Studio.
2.  Sync Gradle files.
3.  Run the app on an emulator or physical device.

---

## 👥 Authors

*   **panzauto46-bot** - *Lead Developer*
*   Email: panzauto46@gmail.com

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

==================================
REPO: StableFlowWeb
# 🌐 StableFlow - Official Landing Page

> **The gateway to streamlined corporate treasury and instant expense settlements.**

![StableFlow Web Banner](https://via.placeholder.com/1200x600.png?text=StableFlow+Landing+Page)
*(Note: Replace with actual screenshot)*

## 📖 Overview
This repository contains the **official landing page** for **StableFlow**, an institutional treasury and expense management system. This static website serves as the entry point for users to learn about the platform, its features, and the ecosystem.

It effectively showcases:
*   **The Value Proposition:** Solving the friction of cross-border reimbursements.
*   **Key Features:** Mobile expense claims, instant tracking, and liquidity management.
*   **App Showcase:** A visual tour of the Android application.
*   **Interactive Design:** Built with **GSAP** for smooth, engaging animations.

---

## 🛠️ Technology Stack

*   **HTML5 & CSS3:** Semantic structure with custom styling (no external CSS frameworks for the landing page to keep it lightweight).
*   **GSAP (GreenSock Animation Platform):** For high-performance, complex scroll-triggered animations.
*   **Responsive Design:** Optimized for Desktops, Tablets, and Mobile devices.

---

## 🎨 Key Sections

1.  **Hero Section:** Immersive entry with value proposition.
2.  **Efficiency Metrics:** Visualizing the speed and cost savings of StableFlow.
3.  **App Showcase:** Interactive carousel of the Android application interfaces.
4.  **Live Stats:** Real-time (simulated) data showing active liquidity and transaction volume.

---

## 🚀 Running Locally

To view this landing page locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/panzauto46-bot/StableFlowWeb.git
    ```
2.  **Navigate to the folder:**
    ```bash
    cd StableFlowWeb
    ```
3.  **Open `index.html`:**
    Simply double-click `index.html` or open it with Live Server in VS Code.

---

## 🔗 Related Repositories

*   **[StableFlow Main Platform](https://github.com/panzauto46-bot/StableFlow):** The core platform including the Android App and Treasury Dashboard.

---

## 👥 Authors

*   **panzauto46-bot** - *Lead Developer*

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

==================================
REPO: superteam-academy
<div align="center">

# Superteam Academy

![Superteam Academy Banner](docs/banner.jpeg)

### The Ultimate Interactive Learning Hub for Solana Native Builders

[![Live Demo](https://img.shields.io/badge/LIVE-superteam--academy.vercel.app-00D18C?style=for-the-badge&logo=vercel&logoColor=white)](https://superteam-academy-wheat.vercel.app)
[![Solana](https://img.shields.io/badge/Solana-Devnet-9945FF?style=for-the-badge&logo=solana&logoColor=white)](https://solana.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)

**5 Courses** &bull; **15 Interactive Lessons** &bull; **3 Languages** &bull; **10 Achievements** &bull; **cNFT Certificates**

[Live Demo](https://superteam-academy-wheat.vercel.app) &bull; [Report Bug](https://github.com/panzauto46-bot/superteam-academy/issues) &bull; [Request Feature](https://github.com/panzauto46-bot/superteam-academy/issues)

</div>

---

## About The Project

**Superteam Academy** is an open-source, gamified Learning Management System (LMS) built specifically for the **Solana ecosystem**. It combines an in-browser code editor, Web3 wallet authentication, on-chain XP gamification, and compressed NFT certificates to transform curious developers into shipping Solana builders.

Built for the [Superteam Indonesia](https://id.superteam.fun/) community, the platform provides a structured path from zero to Solana developer through hands-on coding challenges covering Rust, Anchor Framework, Web3.js, SPL Tokens, and NFTs with Metaplex.

### Why Superteam Academy?

| Problem | Solution |
|---------|----------|
| Solana learning resources are scattered | Structured curriculum with 5 courses & 15 lessons |
| No hands-on practice environment | In-browser Monaco Editor with real-time validation |
| Learning feels isolated | Leaderboard, XP system, streaks & achievements |
| No proof of completion | Compressed NFT certificates via Metaplex Bubblegum |
| Language barriers in Southeast Asia | Multi-language support (EN, ID, ES) |

---

## Key Features

### Interactive Code Editor
Write and test **Rust**, **TypeScript**, and **Anchor** code directly in the browser powered by **Monaco Editor** (the same editor that powers VS Code). Split-screen layout lets you read lesson instructions on the left while coding on the right, with real-time syntax highlighting and keyword-based validation.

### Web3 Gamification Engine
- **XP Token System** &mdash; Earn experience points for every completed lesson and course
- **Level Progression** &mdash; Advance from *Novice* (Lv.1) through *Builder*, *Architect*, up to *Grandmaster* with an exponential XP formula
- **Daily Streaks** &mdash; Track your learning consistency with a GitHub-style activity heatmap
- **Skill Radar** &mdash; Visualize proficiency across 6 domains: Rust, Anchor, DeFi, Frontend, NFTs, Security
- **10 Achievements** &mdash; Unlock badges like *First Lesson*, *Streak Master*, *NFT Minter*, and more

### Multi-Authentication System
- **Wallet Login** &mdash; Connect with **Phantom** or **Solflare** for native Web3 authentication
- **Social Login** &mdash; One-click sign-up via **Google** or **GitHub** (powered by NextAuth.js v5)
- **Unified Profile** &mdash; Link wallet address to social identity for a persistent cross-session profile

### Dashboard & Analytics
- **Personal Dashboard** &mdash; Track XP, level, skill radar, activity heatmap, and course progress
- **Global Leaderboard** &mdash; Compete with other builders ranked by XP with level badges
- **Course Progress** &mdash; Visual progress bars, completion percentages, and lesson tracking

### Compressed NFT Certificates
Upon course completion, mint a **compressed NFT (cNFT)** certificate via **Metaplex Bubblegum** on Solana Devnet. Prove your skills on-chain with verifiable, cost-efficient certificates stored on Solana's state compression tree.

### Internationalization (i18n)
Full multi-language support with custom translation context:
- **English (US)** &mdash; Default
- **Bahasa Indonesia** &mdash; For Superteam ID community
- **Espa&ntilde;ol** &mdash; Spanish

### Content Management
Integrated **Sanity.io** headless CMS with custom schemas for courses, modules, lessons, and authors. Manage educational content through the built-in `/studio` admin panel without touching code.

---

## Course Catalog

| # | Course | Level | Lessons | XP | Duration | Topics |
|---|--------|-------|---------|-----|----------|--------|
| 1 | **Solana 101: Foundations** | Beginner | 3 | 500 | ~1.5h | Accounts, Transactions, Programs |
| 2 | **Anchor Framework Essentials** | Intermediate | 3 | 750 | ~2h | IDL, Instructions, State Management |
| 3 | **Solana Web3.js Client** | Beginner | 3 | 500 | ~1.5h | Connection, Keypairs, Transfers |
| 4 | **SPL Token Mastery** | Intermediate | 3 | 750 | ~2h | Token Program, Minting, Transfers |
| 5 | **NFTs with Metaplex** | Advanced | 3 | 1,000 | ~2.5h | Candy Machine, Metadata, Bubblegum |

**Total: 5 courses, 15 lessons, 3,500+ XP available**

---

## Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) | Server/client rendering, routing, API routes |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Type-safe development |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) | Utility-first CSS + accessible components |
| **Code Editor** | [Monaco Editor](https://microsoft.github.io/monaco-editor/) | In-browser IDE (VS Code engine) |
| **Charts** | [Recharts](https://recharts.org/) + [Calendar Heatmap](https://github.com/kevinsqi/react-calendar-heatmap) | Skill radar & activity visualization |
| **Authentication** | [NextAuth.js v5](https://authjs.dev/) + [Wallet Adapter](https://github.com/solana-labs/wallet-adapter) | Social + Web3 wallet auth |
| **Blockchain** | [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/) + [Helius DAS API](https://docs.helius.dev/) | On-chain interactions & NFT fetching |
| **CMS** | [Sanity.io](https://www.sanity.io/) | Headless content management |
| **Monitoring** | [Sentry](https://sentry.io/) | Error tracking & performance |
| **Analytics** | [Google Analytics 4](https://analytics.google.com/) | User behavior tracking |
| **Deployment** | [Vercel](https://vercel.com/) | Edge deployment & CI/CD |

</div>

---

## Architecture

### Project Structure

```
superteam-academy/
├── app/                              # Next.js application root
│   ├── src/
│   │   ├── app/                      # App Router (file-based routing)
│   │   │   ├── (site)/               # Public website route group
│   │   │   │   ├── (main)/           # Pages with shared Navbar + Footer
│   │   │   │   │   ├── page.tsx              # / - Landing page
│   │   │   │   │   ├── courses/
│   │   │   │   │   │   ├── page.tsx          # /courses - Course catalog
│   │   │   │   │   │   └── [slug]/page.tsx   # /courses/:slug - Course detail
│   │   │   │   │   ├── dashboard/page.tsx    # /dashboard - User analytics
│   │   │   │   │   ├── leaderboard/page.tsx  # /leaderboard - XP rankings
│   │   │   │   │   ├── profile/page.tsx      # /profile - User profile
│   │   │   │   │   ├── settings/page.tsx     # /settings - Preferences
│   │   │   │   │   └── layout.tsx            # Shared Navbar + Footer layout
│   │   │   │   ├── lesson/
│   │   │   │   │   └── [courseId]/page.tsx    # /lesson/:id - Full-screen IDE
│   │   │   │   ├── layout.tsx                # Site-wide providers
│   │   │   │   └── providers.tsx             # Context provider composition
│   │   │   ├── (studio)/             # Sanity CMS admin panel
│   │   │   │   ├── studio/[[...tool]]/page.tsx  # /studio - CMS dashboard
│   │   │   │   └── layout.tsx
│   │   │   ├── api/                  # Serverless API routes
│   │   │   │   ├── auth/[...nextauth]/route.ts  # OAuth handlers
│   │   │   │   └── nfts/[wallet]/route.ts       # Helius DAS NFT lookup
│   │   │   ├── layout.tsx            # Root layout (HTML, fonts)
│   │   │   └── global-error.tsx      # Sentry error boundary
│   │   │
│   │   ├── components/               # React components
│   │   │   ├── dashboard/            # SkillRadar, ActivityHeatmap
│   │   │   ├── layout/               # Navbar, Footer
│   │   │   ├── shared/               # AuthModal, CodeEditor, Hero
│   │   │   └── ui/                   # shadcn/ui primitives (6 components)
│   │   │
│   │   ├── contexts/                 # React Context providers
│   │   │   ├── AuthContext.tsx        # User auth, XP, achievements, wallet
│   │   │   ├── LanguageContext.tsx    # i18n language switching
│   │   │   ├── ThemeContext.tsx       # Dark/light mode toggle
│   │   │   ├── ServiceContext.tsx     # Service layer dependency injection
│   │   │   └── WalletProvider.tsx     # Solana wallet adapter wrapper
│   │   │
│   │   ├── data/
│   │   │   └── courses.ts            # 5 courses, 15 lessons, 10 achievements
│   │   │
│   │   ├── services/                 # Clean architecture service layer
│   │   │   ├── interfaces.ts         # Service contracts (swap local/onchain)
│   │   │   └── local/                # LocalStorage implementations
│   │   │       ├── enrollmentService.ts
│   │   │       ├── lessonCompletionService.ts
│   │   │       ├── userService.ts
│   │   │       └── storage.ts
│   │   │
│   │   ├── hooks/                    # Custom hooks (useNFTs)
│   │   ├── i18n/                     # Translation strings (EN, ID, ES)
│   │   ├── lib/                      # Auth config, utilities
│   │   ├── sanity/                   # CMS schemas (course, lesson, module, author)
│   │   └── types/                    # TypeScript declarations
│   │
│   ├── public/                       # Static assets
│   ├── next.config.ts                # Next.js + Sentry config
│   ├── tailwind.config.ts            # Tailwind CSS config
│   ├── tsconfig.json                 # TypeScript config
│   └── package.json                  # Dependencies
│
├── onchain-academy/                  # Solana Anchor programs (future)
├── docs/                             # Documentation & assets
├── scripts/                          # Build & deploy scripts
├── LICENSE                           # MIT License
└── README.md                         # You are here
```

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                     │
│  ┌─────────┐  ┌──────────┐  ┌─────────┐  ┌───────────┐ │
│  │  Pages   │  │Components│  │Contexts │  │  Hooks    │ │
│  │ (9 routes│  │(13 total)│  │(5 global)│  │(useNFTs) │ │
│  └────┬─────┘  └────┬─────┘  └────┬────┘  └─────┬────┘ │
├───────┼──────────────┼────────────┼──────────────┼──────┤
│                    SERVICE LAYER                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  interfaces.ts (Clean Service Contracts)          │    │
│  │  ├── IEnrollmentService                           │    │
│  │  ├── ILessonCompletionService                     │    │
│  │  ├── ICertificateService (cNFT minting)           │    │
│  │  └── IXPTokenService                              │    │
│  └──────────────────┬───────────────────────────────┘    │
│          ┌──────────┴──────────┐                         │
│    ┌─────┴─────┐        ┌─────┴──────┐                   │
│    │   LOCAL    │        │  ON-CHAIN  │                   │
│    │ localStorage│       │  Anchor    │                   │
│    │ (Current)  │        │  (Future)  │                   │
│    └────────────┘        └────────────┘                   │
├──────────────────────────────────────────────────────────┤
│                    EXTERNAL SERVICES                      │
│  ┌─────────┐ ┌──────────┐ ┌────────┐ ┌───────────────┐  │
│  │Sanity.io│ │NextAuth  │ │Helius  │ │Solana Devnet  │  │
│  │  CMS    │ │  v5      │ │DAS API │ │  (Web3.js)    │  │
│  └─────────┘ └──────────┘ └────────┘ └───────────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ (bundled with Node.js)
- **Solana Wallet** &mdash; [Phantom](https://phantom.app/) or [Solflare](https://solflare.com/) browser extension
- **Sanity.io Account** &mdash; [Free tier](https://www.sanity.io/) (optional, for CMS features)

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/panzauto46-bot/superteam-academy.git
cd superteam-academy/app

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your keys (see Environment Variables section)

# 4. Start the development server
npm run dev

# 5. Open http://localhost:3000
```

### Environment Variables

Create a `.env.local` file in the `app/` directory:

```env
# ──────────────────────────────────────
# Sanity CMS (Required for /studio)
# ──────────────────────────────────────
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-02-01

# ──────────────────────────────────────
# NextAuth.js (Required for auth)
# ──────────────────────────────────────
AUTH_SECRET=your_random_secret_key     # Generate: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000

# ──────────────────────────────────────
# Social OAuth Providers (Optional)
# ──────────────────────────────────────
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# ──────────────────────────────────────
# Helius RPC (Optional, for NFT fetching)
# ──────────────────────────────────────
HELIUS_API_KEY=your_helius_api_key

# ──────────────────────────────────────
# Sentry (Optional, for error tracking)
# ──────────────────────────────────────
SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on `localhost:3000` |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

---

## Pages & Routes

| Route | Page | Auth Required | Description |
|-------|------|:---:|-------------|
| `/` | Home | No | Landing page with hero, features, CTA |
| `/courses` | Course Catalog | No | Browse all 5 available courses |
| `/courses/:slug` | Course Detail | No | Course overview, objectives, lesson list |
| `/lesson/:courseId` | Lesson IDE | Yes | Full-screen split: instructions + code editor |
| `/dashboard` | Dashboard | Yes | XP, level, skill radar, heatmap, progress |
| `/leaderboard` | Leaderboard | No | Global XP rankings with level badges |
| `/profile` | Profile | Yes | User profile with wallet & NFT display |
| `/settings` | Settings | Yes | Theme, language, notifications preferences |
| `/studio` | CMS Admin | No | Sanity Studio for content management |

---

## Roadmap

### Phase 1: Concept & UI/UX Design &nbsp; `COMPLETED`
- [x] Project vision & target audience definition
- [x] Wireframing & UI/UX design (dark-first, glassmorphism)
- [x] Initial prototype with Vite + React

### Phase 2: Next.js Migration &nbsp; `COMPLETED`
- [x] Migrate from Vite to Next.js 15 App Router
- [x] Implement route groups `(main)` and `lesson/[courseId]`
- [x] Set up Tailwind CSS 4 + shadcn/ui component library
- [x] Configure TypeScript with strict mode

### Phase 3: Core Features &nbsp; `COMPLETED`
- [x] Multi-auth system (Phantom, Solflare, Google, GitHub)
- [x] In-browser Monaco Editor with syntax highlighting
- [x] Split-screen lesson layout (instructions + code)
- [x] Dark/light theme toggle with system preference detection
- [x] Multi-language support (English, Bahasa Indonesia, Spanish)

### Phase 4: LMS Engine & Gamification &nbsp; `COMPLETED`
- [x] Clean service layer architecture (interfaces + local implementations)
- [x] Course enrollment & lesson completion tracking
- [x] XP token system with exponential level progression
- [x] Daily streak tracking with activity heatmap
- [x] Skill radar chart (Rust, Anchor, DeFi, Frontend, NFTs, Security)
- [x] 10 achievement badges with unlock conditions
- [x] Global leaderboard with user injection
- [x] Settings page (profile, theme, language, notifications)

### Phase 5: Polish & Deployment &nbsp; `COMPLETED`
- [x] Sanity.io CMS integration with custom schemas
- [x] Helius DAS API for cNFT certificate fetching
- [x] Sentry error monitoring & performance tracking
- [x] Google Analytics 4 integration
- [x] Lighthouse performance optimizations
- [x] Vercel production deployment with CI/CD
- [x] Security patch (Next.js CVE-2025-66478)

### Phase 6: On-Chain Integration &nbsp; `IN PROGRESS`
- [ ] Deploy Anchor programs to Solana Devnet
- [ ] Connect XP token minting to on-chain program
- [ ] Implement real cNFT certificate minting via Metaplex Bubblegum
- [ ] Migrate service layer from `local/` to `onchain/` implementations
- [ ] Add wallet-based progress persistence (on-chain state)

### Phase 7: Production & Scale &nbsp; `PLANNED`
- [ ] Migrate to Solana Mainnet-Beta
- [ ] Add community-contributed courses
- [ ] Implement course rating & review system
- [ ] Add multiplayer coding challenges
- [ ] Launch Superteam Academy DAO for governance

---

## Contributing

We welcome contributions from the Solana community! Whether you're fixing bugs, adding courses, improving translations, or enhancing the UI.

### How to Contribute

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Contribution Ideas

- Add new courses or lessons (Rust, DeFi, DAO)
- Translate to more languages (Portuguese, Japanese, Korean)
- Improve accessibility (ARIA labels, keyboard navigation)
- Write unit/integration tests
- Optimize bundle size and performance

---

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## Acknowledgments

- [Superteam Indonesia](https://id.superteam.fun/) &mdash; Community & ecosystem support
- [Solana Foundation](https://solana.org/) &mdash; Blockchain infrastructure
- [Metaplex](https://www.metaplex.com/) &mdash; NFT standards & Bubblegum protocol
- [Helius](https://helius.dev/) &mdash; RPC & DAS API for compressed NFTs
- [Vercel](https://vercel.com/) &mdash; Deployment & hosting platform
- [shadcn/ui](https://ui.shadcn.com/) &mdash; Beautiful, accessible UI components

---

<div align="center">

**Built with dedication for the Solana ecosystem**

[Superteam Indonesia](https://id.superteam.fun/) &bull; [Solana](https://solana.com/) &bull; [Live Demo](https://superteam-academy-wheat.vercel.app)

</div>

==================================
REPO: Trading-Analytics-Dashboard
# Pro Trading Analytics Dashboard: AI Insights & Heatmap

![Project Banner](https://via.placeholder.com/1200x400.png?text=Pro+Trading+Analytics+Dashboard)

## 🚀 Vision

Built for **Superteam.fun**, this **Pro Trading Analytics Dashboard** redefines how traders visualize their performance. Moving beyond basic spreadsheets, it integrates **AI-driven insights**, a **GitHub-style consistency heatmap**, and **real-time PnL simulations** into a high-end, professional "Dark Mode" interface. 

It is designed to help traders identify patterns, maintain consistency, and optimize their strategies using data, not just intuition.

## ✨ Key Features

### 1. 📅 GitHub-Style Consistency Heatmap
- **Visualize Discipline**: A unique heatmap that tracks trading activity and profitability over time, rewarding consistency just like code contributions.
- **Trend Spotting**: Instantly identify hot streaks and cold periods.

### 2. 🤖 AI Trading Coach (Insights)
- **Smart Analysis**: Analyzes user behavior and history to provide actionable tips.
- **Pattern Recognition**: "You tend to overtrade on Fridays" or "Your best win rate is during the NY session."

### 3. 📈 Real-Time PnL Simulation
- **Interactive Charts**: Dynamic, responsive charts powered by Recharts that react instantly to data changes.
- **Scenario Planning**: Simulate different market conditions to see potential outcomes.

### 4. 🎨 Professional "Dark Mode" UI
- **Premium UX**: deep slate backgrounds with vibrant emerald and violet gradient accents conform to modern financial tool aesthetics.
- **Glassmorphism**: Subtle glass effects for a sophisticated, futuristic feel.

### 5. ⚡ Quick Filter Chips
- **Seamless Navigation**: Filter complex datasets by date, asset class, or strategy with a single click.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Visualization**: [Recharts](https://recharts.org/)
- **Icons**: Lucide React
- **Language**: TypeScript

## 🏁 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📸 Screenshots

*(Add your screenshots here)*

## 🤝 Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ for the Superteam Hackathon.**

==================================
REPO: VibeAgent
<p align="center">
  <img src="https://img.shields.io/badge/BNB_Chain-F0B90B?style=for-the-badge&logo=binance&logoColor=white" />
  <img src="https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white" />
  <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" />
  <img src="https://img.shields.io/badge/Groq_AI-00C853?style=for-the-badge&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/Web3j-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white" />
  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
</p>

<h1 align="center">
  ⚡ VibeAgent
</h1>

<h3 align="center">
  Your AI-Powered Financial Assistant on BNB Chain 🤖💸
</h3>

<p align="center">
  <strong>Talk to your wallet. No complex UIs. No learning curves. Just vibes. ✨</strong>
</p>

<p align="center">
  <a href="#-key-features">Features</a> •
  <a href="#-the-problem">Problem</a> •
  <a href="#-the-solution">Solution</a> •
  <a href="#-smart-contract">Smart Contract</a> •
  <a href="#%EF%B8%8F-tech-stack">Tech Stack</a> •
  <a href="#-user-flow">User Flow</a> •
  <a href="#%EF%B8%8F-architecture">Architecture</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-security">Security</a> •
  <a href="#%EF%B8%8F-roadmap">Roadmap</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/platform-Android_|_Web-green?style=flat-square" />
  <img src="https://img.shields.io/badge/network-BSC_Mainnet_|_Testnet-F0B90B?style=flat-square" />
  <img src="https://img.shields.io/badge/smart_contract-deployed-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/license-MIT-purple?style=flat-square" />
  <img src="https://img.shields.io/badge/hackathon-BNB_Chain_2026-red?style=flat-square" />
</p>

---

## 🔥 The Problem

> **Web3 adoption is stalled by complex interfaces.**

Beginners are **intimidated** by wallet addresses, gas fees, confusing dashboards, and seed phrases. Managing crypto in 2026 still feels like you need a computer science degree. The gap between Web3's potential and real-world usability is *massive*.

**Current Pain Points:**
- 😵 Overwhelming wallet UIs with dozens of buttons
- 🤯 Users must understand hex addresses, gas limits, and nonces
- ❌ No natural way to interact — only forms and copy-paste
- 🔒 Security feels like a burden, not a feature

---

## 💡 The Solution

**VibeAgent** is a **Native Android Application** with a **React Web companion** that replaces the traditional wallet UI with a **conversational AI interface**. Powered by **Groq's compound-beta model** (the world's fastest AI inference via LPU), it allows users to manage their assets on **BNB Smart Chain** simply by **talking or texting** — like chatting with a friend.

```
👤 User: "Hey, how much BNB do I have?"
🤖 VibeAgent: "💰 Your balance is 0.4521 BNB (~$285 USD) on BSC Mainnet!"

👤 User: "Send 0.01 BNB to 0x742d...4Cc9"
🤖 VibeAgent: "📤 Confirming: 0.01 BNB → 0x742d...4Cc9. Processing... ✅ Done! TX: 0xabc..."

👤 User: "Check my contract registration"
🤖 VibeAgent: "📋 VibeAgent Registry: You are registered! Nickname: CryptoKing, Total Users: 42"
```

**No menus. No forms. No confusion. Just natural conversation.** 🎤

---

## ✨ Key Features

<table>
  <tr>
    <td width="50%">
      <h3>🗣️ Natural Language Transactions</h3>
      <p>No need to navigate complex menus. Just say <code>"Send 0.001 BNB to this address"</code> or <code>"Check my balance"</code> — the AI handles the rest. Supports both <strong>voice input</strong> and <strong>text commands</strong>.</p>
    </td>
    <td width="50%">
      <h3>⚡ Powered by Groq AI (compound-beta)</h3>
      <p>Utilizes <strong>Groq's compound-beta model</strong> running on the world's fastest <strong>LPU (Language Processing Unit)</strong> inference engine. Integrated web search and tool use provide <strong>real-time, context-aware</strong> responses with sub-second latency.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔐 Non-Custodial & Secure</h3>
      <p>Your private keys <strong>NEVER leave your device</strong>. We use <strong>AES-256-GCM encryption</strong> via Android's <code>EncryptedSharedPreferences</code> backed by the <strong>Android Keystore</strong> to store credentials locally.</p>
    </td>
    <td width="50%">
      <h3>📋 On-Chain Smart Contract</h3>
      <p>VibeAgent has its own <strong>deployed smart contract</strong> on BNB Chain — the <strong>VibeAgentRegistry</strong>. Users can register on-chain, verify identity, and track community growth directly from the chat interface.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📱 Native Android + Web</h3>
      <p>Built with <strong>Kotlin + Web3j</strong> for Android and <strong>React + Ethers.js</strong> for web, ensuring maximum performance across platforms with <strong>Google Voice Recognition</strong>.</p>
    </td>
    <td width="50%">
      <h3>🤖 AI Portfolio Analysis</h3>
      <p>Get <strong>intelligent portfolio insights</strong> powered by AI. VibeAgent reads your on-chain data and provides <strong>personalized investment strategy</strong>, risk assessment, and diversification advice.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>👛 Multi-Wallet Support</h3>
      <p>Connect via <strong>Trust Wallet, MetaMask, Binance, OKX, Bitget</strong> — or create a brand new wallet with <strong>BIP39 mnemonic generation</strong>. Import existing wallets via <strong>seed phrase or private key</strong>.</p>
    </td>
    <td width="50%">
      <h3>🟢 BSC Mainnet + Testnet Ready</h3>
      <p>Fully integrated with <strong>BNB Chain Mainnet</strong> (Chain ID: 56) and <strong>Testnet</strong> (Chain ID: 97). Reads <strong>real-time BNB balances</strong> and scans <strong>10+ BEP-20 tokens</strong> (USDT, USDC, BUSD, CAKE, WBNB, etc).</p>
    </td>
  </tr>
</table>

---

## 📋 Smart Contract

VibeAgent has a deployed **on-chain smart contract** — `VibeAgentRegistry` — on BNB Smart Chain.

### Contract Details

| Field | Value |
|-------|-------|
| **Contract Name** | VibeAgentRegistry |
| **Network** | BNB Smart Chain Testnet (Chain ID: 97) |
| **Contract Address** | [`0x49Ee39851956df07E5d3B430dC91e5A00B7E6059`](https://testnet.bscscan.com/address/0x49Ee39851956df07E5d3B430dC91e5A00B7E6059) |
| **Deployment TX** | [`0x38faa9e4bf753264409e351edb6f69caf1a0ad94a8176df2f59ba2f65116dd37`](https://testnet.bscscan.com/tx/0x38faa9e4bf753264409e351edb6f69caf1a0ad94a8176df2f59ba2f65116dd37) |
| **Solidity Version** | ^0.8.19 |
| **License** | MIT |

### Contract Functions

| Function | Type | Description |
|----------|------|-------------|
| `register(string nickname)` | Write | Register as a VibeAgent user on-chain |
| `updateNickname(string nickname)` | Write | Update your display nickname |
| `isRegistered(address)` | Read | Check if an address is registered |
| `getProfile(address)` | Read | Get user profile (registered, timestamp, nickname) |
| `totalUsers()` | Read | Total number of registered users |
| `APP_NAME()` | Read | Returns "VibeAgent" |
| `APP_VERSION()` | Read | Returns "1.0.0" |

### How It Works in the App

The Android app interacts with the smart contract through `ContractManager.kt`:

```kotlin
// Check if user is registered on-chain
val isRegistered = contractManager.isUserRegistered(walletAddress)

// Get total community size
val totalUsers = contractManager.getTotalUsers()

// Get user profile from blockchain
val profile = contractManager.getUserProfile(walletAddress)
```

Users can interact with the contract via natural language:
```
👤 "Show contract info"    → Displays contract details + registration status
👤 "Check my registration" → Queries on-chain profile
```

---

## 🚀 User Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        VibeAgent Flow                          │
├────────┬──────────────┬───────────────────┬─────────────────────┤
│  STEP  │    INPUT     │     PROCESS       │      OUTPUT         │
├────────┼──────────────┼───────────────────┼─────────────────────┤
│   1    │ 🎤 Voice /   │ Speech-to-Text    │ Raw text string     │
│        │ ⌨️ Text      │ (Google STT)      │                     │
├────────┼──────────────┼───────────────────┼─────────────────────┤
│   2    │ Raw text     │ 🧠 Groq AI        │ Parsed intent +     │
│        │              │ (compound-beta)   │ structured data     │
├────────┼──────────────┼───────────────────┼─────────────────────┤
│   3    │ Parsed       │ 🔗 Web3j signs    │ Signed transaction  │
│        │ intent       │ TX locally        │ broadcast to BSC    │
├────────┼──────────────┼───────────────────┼─────────────────────┤
│   4    │ TX result    │ 💬 AI formats     │ ✅ TxHash + status  │
│        │              │ response          │ in chat bubble      │
└────────┴──────────────┴───────────────────┴─────────────────────┘
```

### 🎬 Step-by-Step Example

1. **🎤 Input** → User presses the microphone button and says: *"Transfer 0.01 BNB to my friend at 0x742d..."*
2. **🧠 Process** → Groq AI analyzes the intent, extracts the amount (`0.01`), destination address (`0x742d...`), and returns a confirmation prompt
3. **🔐 Execution** → Once confirmed, the app signs the transaction **locally on-device** using Web3j and broadcasts it to the **BNB Smart Chain**
4. **✅ Result** → The transaction hash (TxID) is returned in the chat window **in seconds**

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Android Frontend** | Kotlin + Material Design 3 | Native Android UI with modern design language |
| **Web Frontend** | React 19 + TypeScript + Vite | Responsive web chat interface |
| **AI Brain** | Groq API (compound-beta on LPU) | Ultra-fast AI inference with web search & tool use — converts human language to blockchain commands |
| **Smart Contract** | Solidity ^0.8.19 + Hardhat | On-chain user registry deployed on BNB Chain |
| **Blockchain (Android)** | Web3j 4.9.8 | Wallet creation (BIP39/BIP44), transaction signing, BSC RPC interaction |
| **Blockchain (Web)** | Ethers.js 6.13.1 | Web-based wallet operations and contract interaction |
| **Voice** | Google Speech Recognition | Real-time speech-to-text with partial results |
| **Security** | EncryptedSharedPreferences (AES-256-GCM) | Non-custodial encrypted storage via Android Keystore |
| **Auth** | Firebase Authentication + Google Sign-In | Secure user authentication |
| **Network** | OkHttp3 | Fast, reliable HTTP client for API and RPC calls |
| **Architecture** | MVVM + LiveData + Coroutines | Clean, reactive, maintainable codebase |

---

## 🏗️ Architecture

```
┌───────────────────────────────────────────────────────────────────┐
│                     📱 VibeAgent Android App                      │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────────────────┐  │
│  │  Splash      │  │  Auth        │  │  Main Activity           │  │
│  │  Activity    │→ │  Activity    │→ │  (Chat Interface)        │  │
│  │              │  │  (Firebase)  │  │                          │  │
│  └─────────────┘  └─────────────┘  └────────────┬─────────────┘  │
│                                                  │                │
│                    ┌─────────────────────────────┤                │
│                    │                             │                │
│  ┌─────────────────▼───────┐  ┌──────────────────▼────────────┐  │
│  │   ChatViewModel          │  │  Bottom Sheets                │  │
│  │   (MVVM Brain)           │  │  • ConnectWalletSheet         │  │
│  │                          │  │  • WalletDetailsSheet         │  │
│  │  • processMessage()      │  └──────────────────────────────┘  │
│  │  • analyzePortfolio()    │                                    │
│  │  • handleContractInfo()  │                                    │
│  │  • connectWallet()       │                                    │
│  └──┬────────┬────────┬─────┘                                    │
│     │        │        │                                          │
│  ┌──▼──┐ ┌──▼───┐ ┌──▼──────────┐                               │
│  │Groq │ │Web3j │ │Contract     │                               │
│  │ API │ │      │ │Manager      │                               │
│  │     │ │      │ │(Registry)   │                               │
│  └──┬──┘ └──┬───┘ └──┬──────────┘                               │
│     │       │        │                                           │
├─────▼───────▼────────▼───────────────────────────────────────────┤
│  ☁️ External Services                                             │
│  ┌────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │ Groq Cloud      │  │ BNB Smart Chain   │  │ VibeAgent        │  │
│  │ compound-beta   │  │ BSC Mainnet:56    │  │ Registry         │  │
│  │ LPU inference   │  │ BSC Testnet:97    │  │ (Smart Contract) │  │
│  └────────────────┘  └──────────────────┘  └──────────────────┘  │
└───────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
VibeAgent/
│
├── 📱 VibeAgent-Android/                    # Native Android Application
│   ├── app/src/main/
│   │   ├── java/com/vibeagent/app/
│   │   │   ├── MainActivity.kt              # Chat UI + Voice Recognition
│   │   │   ├── AuthActivity.kt              # Firebase Google Sign-In
│   │   │   ├── SplashActivity.kt            # Animated Splash Screen
│   │   │   ├── ConnectWalletBottomSheet.kt  # Multi-wallet connector UI
│   │   │   ├── WalletBottomSheet.kt         # Wallet details view
│   │   │   │
│   │   │   ├── adapter/
│   │   │   │   └── ChatAdapter.kt           # RecyclerView chat adapter
│   │   │   │
│   │   │   ├── model/
│   │   │   │   ├── ChatMessage.kt           # Message data model
│   │   │   │   └── WalletInfo.kt            # Wallet data model
│   │   │   │
│   │   │   ├── util/
│   │   │   │   ├── WalletManager.kt         # Web3j wallet operations (BIP39/BIP44)
│   │   │   │   ├── ContractManager.kt       # Smart contract interaction (Registry)
│   │   │   │   ├── CommandParser.kt         # NLP command parser
│   │   │   │   ├── SecureWalletStorage.kt   # AES-256-GCM encrypted storage
│   │   │   │   └── PrefsManager.kt          # SharedPreferences helper
│   │   │   │
│   │   │   └── viewmodel/
│   │   │       └── ChatViewModel.kt         # MVVM ViewModel (AI + Web3j + Contract)
│   │   │
│   │   └── res/
│   │       ├── layout/                      # XML layouts (Material Design 3)
│   │       ├── drawable/                    # Icons, backgrounds, animations
│   │       └── values/                      # Themes, colors, strings
│   │
│   ├── build.gradle.kts                     # App dependencies & config
│   └── README.md                            # Android-specific documentation
│
├── 🌐 src/                                  # Web Frontend (React + TypeScript)
│   ├── App.tsx                              # Main chat interface component
│   ├── main.tsx                             # React entry point
│   ├── index.css                            # Global styles (Tailwind CSS)
│   │
│   ├── components/
│   │   ├── ChatBubble.tsx                   # Message bubble component
│   │   ├── WalletPanel.tsx                  # Wallet sidebar panel
│   │   ├── QuickActions.tsx                 # Quick action buttons
│   │   └── TypingIndicator.tsx              # AI typing animation
│   │
│   ├── hooks/
│   │   └── useChat.ts                       # Chat state & logic hook
│   │
│   ├── types/
│   │   └── index.ts                         # TypeScript interfaces
│   │
│   └── utils/
│       ├── commandParser.ts                 # Command parsing logic
│       ├── wallet.ts                        # Ethers.js wallet utilities
│       └── cn.ts                            # Class name utility
│
├── 📜 contracts/                            # Smart Contracts (Solidity + Hardhat)
│   ├── contracts/
│   │   └── VibeAgentRegistry.sol            # On-chain user registry contract
│   ├── scripts/
│   │   └── deploy.js                        # Deployment script for BSC
│   ├── hardhat.config.js                    # Hardhat network configuration
│   └── package.json                         # Contract dependencies
│
├── .gitignore                               # Git ignore rules
├── index.html                               # Web entry point
├── package.json                             # Web dependencies
├── tsconfig.json                            # TypeScript configuration
├── vite.config.ts                           # Vite build configuration
├── LICENSE                                  # MIT License
└── README.md                                # This file 📍
```

---

## 🔐 Security

VibeAgent follows the **non-custodial** security model. Your keys, your crypto.

| Security Feature | Implementation |
|-----------------|----------------|
| **Key Storage** | AES-256-GCM encryption via `EncryptedSharedPreferences` |
| **Key Derivation** | Android Keystore `MasterKey` with `AES256_GCM` scheme |
| **Seed Phrase Validation** | BIP39 wordlist validation + checksum verification |
| **HD Wallet** | BIP44 derivation path `m/44'/60'/0'/0/0` |
| **Data Isolation** | Private keys NEVER sent to any server (Groq, Firebase, or otherwise) |
| **Smart Contract** | Immutable on-chain registry — data verified by blockchain consensus |
| **Logout** | Complete data wipe from encrypted storage on logout |
| **Network** | Direct RPC calls to BSC — no intermediary servers |

```kotlin
// How we store your keys — AES-256-GCM, Android Keystore backed
val masterKey = MasterKey.Builder(context)
    .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
    .build()

val encryptedPrefs = EncryptedSharedPreferences.create(
    context, "vibeagent_secure_wallet", masterKey,
    PrefKeyEncryptionScheme.AES256_SIV,
    PrefValueEncryptionScheme.AES256_GCM
)
```

---

## 🏁 Getting Started

### Prerequisites

- **Android Studio** Hedgehog (2023.1.1) or newer
- **JDK 17**
- **Android SDK 34**
- **Node.js 16+** (for web frontend and smart contracts)
- A physical Android device or emulator (API 24+)

### Build & Run (Android)

```bash
# 1. Clone the repository
git clone https://github.com/panzauto46-bot/VibeAgent.git
cd VibeAgent

# 2. Open VibeAgent-Android/ in Android Studio

# 3. Create local.properties with your API keys
echo "GROQ_API_KEY=your_groq_api_key" > VibeAgent-Android/local.properties

# 4. Sync Gradle & Build
cd VibeAgent-Android
./gradlew assembleDebug

# 5. Install on device
adb install app/build/outputs/apk/debug/app-debug.apk
```

### Build & Run (Web)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production (single-file HTML)
npm run build
```

### Deploy Smart Contract

```bash
# 1. Install contract dependencies
cd contracts
npm install

# 2. Set deployer private key
export DEPLOYER_PRIVATE_KEY="0xYOUR_PRIVATE_KEY"

# 3. Deploy to BSC Testnet
npm run deploy:testnet

# 4. Deploy to BSC Mainnet
npm run deploy:mainnet
```

---

## 🗺️ Roadmap

### Phase 1 — Core (Completed ✅)

- [x] Conversational AI chat interface with Groq (compound-beta model)
- [x] Full English UI — all strings, commands, and messages localized to English
- [x] Voice input with Google Speech Recognition
- [x] BIP39/BIP44 wallet generation and seed phrase import
- [x] BSC Mainnet + Testnet integration
- [x] BEP-20 token scanning (10+ tokens: USDT, USDC, BUSD, CAKE, WBNB, etc.)
- [x] AI-powered portfolio analysis with on-chain data
- [x] Non-custodial AES-256-GCM encrypted key storage
- [x] Multi-wallet connection (Trust, MetaMask, Binance, OKX, Bitget)
- [x] Firebase Authentication with Google Sign-In
- [x] React + TypeScript web companion app
- [x] **Smart contract deployment** — VibeAgentRegistry on BNB Chain
- [x] **On-chain user registration** — query and display via ContractManager

### Phase 2 — DeFi Integration (In Progress 🔄)

- [ ] Swap tokens via PancakeSwap integration
- [ ] Transaction history with AI-powered insights
- [ ] Gas fee estimation and optimization
- [ ] Token price feeds and real-time charts

### Phase 3 — Advanced Features (Planned 📋)

- [ ] NFT viewing & management
- [ ] Multi-chain support (Ethereum, Polygon, Arbitrum, opBNB)
- [ ] DeFi yield farming recommendations
- [ ] Biometric authentication (Fingerprint/Face)
- [ ] Push notifications for price alerts and transaction confirmations
- [ ] On-chain identity verification via VibeAgentRegistry

---

## 🏆 Why VibeAgent Wins

| Traditional Wallet | VibeAgent |
|---|---|
| 😵 Complex forms & menus | 🗣️ Just talk or type naturally |
| 📋 Copy-paste addresses | 🤖 AI understands context |
| ❌ Steep learning curve | ✅ Zero learning curve |
| 🔇 No voice support | 🎤 Full voice recognition |
| 📊 Raw data display | 🧠 AI-powered portfolio insights |
| 🔐 Confusing security | 🛡️ Invisible AES-256 encryption |
| ❌ No on-chain identity | 📋 Smart contract user registry |

---

## 🤝 Team

Built with ❤️ and ☕ for the **BNB Chain Hackathon 2026**

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>⚡ VibeAgent — Making Web3 feel like Web2, one conversation at a time.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Built_for-BNB_Chain_Hackathon_2026-F0B90B?style=for-the-badge&logo=binance&logoColor=white" />
</p>

==================================
REPO: VibeAgentWEB
<h1 align="center">
  🌐 VibeAgent - Landing Page
</h1>

<p align="center">
  <strong>VibeAgent: Your AI Financial Assistant on BNB Chain 🤖💸</strong>
</p>

<p align="center">
  Official Landing Page for <a href="https://github.com/panzauto46-bot/VibeAgent">VibeAgent Android App</a>.
</p>

## 🚀 Live Demo

This landing page showcases the features and benefits of VibeAgent, including:
- ✨ Key Features Walkthrough
- 📱 App Screenshots
- 🛠️ Tech Stack Info
- ❓ FAQ Section

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Custom Animations & Responsive Design)
- **JavaScript** (Intersection Observer, Smooth Scroll)
- **Font Awesome** Icons
- **Google Fonts** (Inter)

## 📸 Screenshots

![App Showcase](app-chat.png)

---

<p align="center">
  Built for <strong>BNB Chain Hackathon 2026</strong>
</p>

