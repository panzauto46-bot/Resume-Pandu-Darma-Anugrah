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

