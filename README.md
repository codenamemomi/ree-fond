# Ree-fond — Nigeria’s Tax Infrastructure Layer

Ree-fond is an **API‑first tax infrastructure platform** that standardizes tax compliance, filings, and refund workflows in Nigeria — starting with PAYE — long before official government APIs exist.

> Think **"Plaid for Nigerian Taxes"** or **"Stripe before banks had APIs."**

---

## 🚀 The One-Line Pitch
Standardizing Nigeria's tax infrastructure layer through structured systems of record, unified identity, and transparent audit trails.

## ⚖️ The Reality (The Problem)
Nigeria lacks a unified, automated tax API. The current ecosystem is:
- **Federated:** Disparate systems across FIRS, 36 States, and the FCT.
- **Manual:** Most refunds and adjustments are handled offline, with no visibility or tracking.
- **Opaque:** Costs employers and SMEs weeks to resolve basic discrepancies.
- **Fragmented:** Tax-to-GDP ratio remains at ~11% (global average ~20%) due to frictional compliance costs.

## 🏗️ The Opportunity
Instead of waiting for a government mandate, Ree-fond builds the infrastructure layer **around it**. We standardize tax data and workflows so that when governments are ready, integration is inevitable.

---

## 🛠️ Infrastructure Modules (MVP)

### 1. Shadow Tax API
A structured system of record for managing taxpayer profiles, filing history, refunds, and compliance timelines without requiring direct government database access initially.

### 2. Taxpayer Identity API
Unified identity and profile management across states and tax types. 
- *Lookup:* TIN, Status, Profile consistency.

### 3. Filing Tracker API
Visibility into filings even when submissions are manual or semi-digital. 
- *Features:* Status tracking, document attachments, amendment workflows.

### 4. Refund & Adjustment API
Real-time visibility into opaque refund processes. 
- *Metrics:* Status, Claim amounts, assigned Tax Offices, and historical progress.

### 5. Compliance Scoring API
Calculates compliance health, risk exposure, and missing requirements for individuals and SMEs.

---

## 📈 Phased Scaling Strategy

- **Phase 1: Private Infrastructure (MVP):** Manage private databases and human-in-the-loop workflows to prove recurring demand and usage.
- **Phase 2: State-Level Pilots:** Partner with progressive State IRS agencies to offer digitized intake, workflow dashboards, and compliance analytics.
- **Phase 3: Official Integrations:** Full read-only APIs, filing status confirmation, and automated refund progress checks.

---

## 💻 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Icons/Scents:** [React Scroll](https://www.npmjs.com/package/react-scroll)

---

## 🏁 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production
```bash
npm run build
```

---

## 🛡️ Legal & Compliance
- **NDPR Compliant:** Strict adherence to Nigerian Data Protection Regulations.
- **Private Entity:** Ree-fond is a private tax technology infrastructure layer and is not currently affiliated with any government agency or tax authority in Nigeria.

---

© 2026 Ree-fond. Building Nigeria's Tax Future.
