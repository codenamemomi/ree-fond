import { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { UserIcon, DocumentIcon, CurrencyIcon, ClockIcon, ShieldIcon, FolderIcon, RefreshIcon, BadgeIcon, ChartIcon, LightningIcon, OfficeIcon, ClipboardIcon, LockIcon, RocketIcon } from '../components/icons/IconComponents'
import BackgroundDecorations from "../components/BackgroundDecorations"

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2
        }
    }
}

const hoverScale = {
    hover: {
        scale: 1.02,
        y: -10,
        transition: { type: "spring", stiffness: 400, damping: 20 }
    }
}

const CodeSnippet = ({ title, code, desc }) => (
    <motion.div
        variants={hoverScale}
        whileHover="hover"
        className="bg-gray-950 rounded-3xl p-8 border border-white/10 shadow-2xl h-full flex flex-col cursor-default"
    >
        <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">{title}</span>
        </div>
        <p className="text-gray-400 text-sm font-medium mb-6">{desc}</p>
        <div className="flex-1 bg-black/40 rounded-xl p-6 font-mono text-xs text-ree-light leading-relaxed overflow-x-auto whitespace-pre">
            {code}
        </div>
    </motion.div>
)

const ThreeDCard = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        x.set((clientX - left) / width - 0.5)
        y.set((clientY - top) / height - 0.5)
    }

    return (
        <motion.div
            className="w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-ree-green/5 to-ree-light/5 rounded-[3rem] flex items-center justify-center relative cursor-default"
            onMouseMove={onMouseMove}
            style={{
                rotateX: useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 500, damping: 20 }),
                rotateY: useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 500, damping: 20 }),
            }}
            onMouseLeave={() => {
                x.set(0)
                y.set(0)
            }}
        >
            <div className="absolute inset-4 rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
                <div className="text-[12vw] md:text-9xl font-black text-gray-900/5 select-none tracking-tighter">
                    REE-FOND
                </div>
                {/* Floating Elements */}
                <motion.div
                    style={{ x: useTransform(mouseX, [-0.5, 0.5], [-40, 40]), y: useTransform(mouseY, [-0.5, 0.5], [-40, 40]) }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-ree-green/20 rounded-full blur-2xl mixture-multiply"
                />
                <motion.div
                    style={{ x: useTransform(mouseX, [-0.5, 0.5], [40, -40]), y: useTransform(mouseY, [-0.5, 0.5], [40, -40]) }}
                    className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-ree-light/20 rounded-full blur-3xl mixture-multiply"
                />
            </div>
        </motion.div>
    )
}

const Home = () => {
    const [regime, setRegime] = useState('2026')
    return (
        <div className="min-h-screen bg-[#f8fafc] selection:bg-ree-green/20 selection:text-ree-gray">
            <BackgroundDecorations />

            {/* Hero Section */}
            <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/home/codenamemomi/.gemini/antigravity/brain/9c304481-194a-4b95-b414-3abb02b58d6f/home_header_bg_1768532948855.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-50 mix-blend-luminosity scale-110 blur-[1px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-[#f8fafc]" />
                </div>

                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
                    <ThreeDCard />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ree-green/10 border border-ree-green/20 backdrop-blur-md mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-ree-green animate-pulse" />
                            <span className="text-[10px] font-black text-ree-green uppercase tracking-[0.2em]">The Tax Infrastructure Engine</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.85] md:leading-[0.8]">
                            Shadow Tax <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ree-green via-ree-light to-emerald-400">Infrastructure.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                            Standardizing Nigeria's tax record-keeping through <br className="hidden md:block" /> a resilient, API-first system of record.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-6">
                            <button className="group relative overflow-hidden bg-ree-green text-ree-gray px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-ree-light transition-all">
                                <span className="relative z-10">Get API Access</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                            <button onClick={() => window.location.href = '/docs'} className="bg-white/5 text-white border border-white/10 px-12 py-5 rounded-2xl font-black backdrop-blur-xl hover:bg-white/10 transition-all">
                                Documentation
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Shadow Tax API (Infrastructure MVP) */}
            <section className="relative py-32 md:py-48 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <h2 className="text-4xl md:text-6xl font-black text-ree-gray tracking-tighter mb-10 leading-[0.85]">
                                The API for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ree-green to-emerald-600 italic underline decoration-ree-light">Unstructured Reality.</span>
                            </h2>
                            <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                                Ree-fond doesn't just wait for government APIs. It becomes the <strong>structured system of record</strong> that removes chaos from tax operations before the first filing reaches the tax office.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: 'Taxpayer Profiles', Icon: UserIcon },
                                    { title: 'Filing History', Icon: DocumentIcon },
                                    { title: 'Refund Records', Icon: CurrencyIcon },
                                    { title: 'Compliance Timelines', Icon: ClockIcon }
                                ].map((item, i) => (
                                    <div key={i} className="group bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl border border-white/20 hover:bg-white/80 transition-all hover:-translate-y-2">
                                        <div className="text-ree-green mb-4 group-hover:scale-110 transition-transform">
                                            <item.Icon className="w-8 h-8" />
                                        </div>
                                        <div className="font-black text-lg text-ree-gray tracking-tight">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-[3.5rem] p-16 text-white relative flex flex-col justify-center min-h-[600px] shadow-2xl overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-ree-green/20 to-transparent opacity-50 pointer-events-none" />
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-ree-green/20 blur-[120px] rounded-full group-hover:bg-ree-green/30 transition-all" />

                            <h3 className="text-4xl font-black mb-10 italic leading-tight relative z-10">"Infrastructure wins by being early and trusted."</h3>
                            <p className="text-xl text-slate-400 font-medium mb-12 italic relative z-10">
                                We've built the data layer that governments and corporations will eventually depend on to verify tax compliance in real-time.
                            </p>

                            <div className="flex items-center gap-8 mt-auto relative z-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-20 h-20 rounded-2xl bg-ree-green/20 flex items-center justify-center text-ree-green shadow-inner">
                                    <ShieldIcon className="w-10 h-10" />
                                </div>
                                <div>
                                    <div className="text-sm font-black uppercase tracking-[0.3em] text-ree-green mb-1">Audit-Ready</div>
                                    <div className="text-slate-300 font-medium text-lg italic">Immutable tax event logs.</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core MVP API Modules */}
            <section className="relative py-24 md:py-32 bg-white/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-5xl md:text-7xl font-black text-ree-gray tracking-tighter mb-10 leading-none">
                            MVP <span className="text-ree-green">Modules.</span>
                        </motion.h2>
                        <p className="text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
                            Core engine blocks designed to absorb the complexity of Nigerian tax reality.
                        </p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-10"
                    >
                        <motion.div variants={fadeInUp}>
                            <CodeSnippet
                                title="Taxpayer Identity API"
                                desc="Unified identity management across states and tax types."
                                code={`{
  "taxpayer_id": "txp_001",
  "state": "Lagos",
  "tin": "1234567890",
  "type": "PAYE",
  "status": "active"
}`}
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <CodeSnippet
                                title="Filing Tracker API"
                                desc="Tracks filings even when submissions are manual or semi-digital."
                                code={`{
  "filing_id": "fil_2025_01",
  "tax_type": "PAYE",
  "state": "Lagos",
  "status": "submitted",
  "documents": ["payslip.pdf"]
}`}
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <CodeSnippet
                                title="Refund & Adjustment API"
                                desc="Creates visibility where refunds are currently opaque."
                                code={`{
  "case_id": "ref_004",
  "amount_claimed": 350000,
  "status": "under_review",
  "office": "LIRS Ikeja",
  "assigned_officer": "manual"
}`}
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <CodeSnippet
                                title="Compliance Scoring API"
                                desc="Calculates compliance health and risk exposure in real-time."
                                code={`{
  "compliance_id": "scr_991",
  "score": 85,
  "risk_flags": ["LATE_FILING"],
  "missing_filings": 2,
  "recommendation": "Submit Q3 WHT"
}`}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2026 Regime Resilience Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-slate-100/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
                        <div className="max-w-3xl">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-2 rounded-full bg-ree-green/10 text-ree-green text-xs font-black uppercase tracking-[0.3em] mb-10 border border-ree-green/20"
                            >
                                The 2026 Paradigm Shift
                            </motion.span>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="text-5xl md:text-7xl font-black text-ree-gray tracking-tighter mb-10 leading-[0.85]"
                            >
                                {regime === 'current' ? 'Navigating the' : 'Architected for'} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ree-green to-emerald-600 italic">{regime === 'current' ? 'Status Quo.' : 'The New Regime.'}</span>
                            </motion.h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                                {regime === 'current'
                                    ? "While others wait for government APIs, Ree-fond's infrastructure already standardizes the manual-heavy reality of today's tax workflows."
                                    : "The 2026 Nigerian tax law introduces stricter enforcement and complex disclosures. Ree-fond is architected to absorb this complexity by design."}
                            </p>
                        </div>

                        <div className="bg-white/60 backdrop-blur-xl p-2.5 rounded-3xl shadow-2xl border border-white/40 flex gap-2 self-start lg:self-auto">
                            <button
                                onClick={() => setRegime('current')}
                                className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all ${regime === 'current' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:text-slate-900'}`}
                            >
                                Current State
                            </button>
                            <button
                                onClick={() => setRegime('2026')}
                                className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all ${regime === '2026' ? 'bg-ree-green text-ree-gray shadow-xl shadow-ree-green/20' : 'text-slate-400 hover:text-ree-green'}`}
                            >
                                2026 Regime
                            </button>
                        </div>
                    </div>

                    <motion.div
                        layout
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-3 gap-10"
                    >
                        <AnimatePresence mode="wait">
                            {[
                                {
                                    title: "Tax Refund Management",
                                    CurrentIcon: CurrencyIcon,
                                    FutureIcon: RefreshIcon,
                                    status: regime === 'current' ? "Manual Reality" : "Enforcement Ready",
                                    impact: regime === 'current'
                                        ? "Currently manual-heavy and opaque in Nigeria. Ree-fond brings structure to existing filing histories and refund claims."
                                        : "As 2026 brings stricter enforcement, refund pressure and disputes will skyrocket. Our refund_cases table manages this friction.",
                                    id: 'refunds'
                                },
                                {
                                    title: "Adaptive Filing Management",
                                    CurrentIcon: FolderIcon,
                                    FutureIcon: LightningIcon,
                                    status: regime === 'current' ? "Multi-Type Support" : "New Disclosures",
                                    impact: regime === 'current'
                                        ? "Supports Monthly, Quarterly, and Annual PAYE/WHT/VAT filings out of the box with standardized data schemas."
                                        : "Perfect for new Development Levy filings, worldwide income disclosures, and retroactive corrections required starting 2026.",
                                    id: 'filings'
                                },
                                {
                                    title: "TIN-Centric Identity",
                                    CurrentIcon: UserIcon,
                                    FutureIcon: BadgeIcon,
                                    status: regime === 'current' ? "Unified Profiles" : "Enforced Linkage",
                                    impact: regime === 'current'
                                        ? "Unified taxpayer identity across multiple tax jurisdictions and states before central government synchronization exists."
                                        : "Direct alignment with TIN + BVN + NIN pressure. Attributes are designed to capture residency and worldwide flags effortlessly.",
                                    id: 'identity'
                                },
                                {
                                    title: "Compliance Intelligence",
                                    CurrentIcon: ChartIcon,
                                    FutureIcon: ShieldIcon,
                                    status: regime === 'current' ? "Gap Analysis" : "Audit Readiness",
                                    impact: regime === 'current'
                                        ? "Identifies missing filings and late submissions in current workflows using real-time compliance tracking."
                                        : "2026 introduces progressive thresholds and higher penalties. Our scoring evolves into Enforcement Readiness Scoring.",
                                    id: 'compliance'
                                },
                                {
                                    title: "Digital Audit Trails",
                                    CurrentIcon: ClipboardIcon,
                                    FutureIcon: LockIcon,
                                    status: regime === 'current' ? "Record Integrity" : "Trust Multiplier",
                                    impact: regime === 'current'
                                        ? "Every tax event is logged with immutable timestamps, creating a defensible record for current manual audits."
                                        : "Government-adjacent trust through encrypted logs and role-based access. Exactly what the 2026 fiscal regime requires.",
                                    id: 'audit'
                                },
                                {
                                    title: "Scalable Infrastructure",
                                    CurrentIcon: RocketIcon,
                                    FutureIcon: OfficeIcon,
                                    status: regime === 'current' ? "MVP Layer" : "Strategic Bedrock",
                                    impact: regime === 'current'
                                        ? "Built as a modular API infrastructure that handles today's unstructured reality at scale for accounting firms and payroll providers."
                                        : "Zero structural changes needed. The platform scales naturally as Nigeria's tax laws transition to full digital enforcement.",
                                    id: 'scale'
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={`${regime}-${item.id}`}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="group bg-white/60 backdrop-blur-xl p-8 lg:p-12 rounded-[3rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all flex flex-col h-full hover:-translate-y-2"
                                >
                                    <div className="text-ree-green mb-8 group-hover:scale-110 transition-transform origin-left">
                                        {regime === 'current' ? <item.CurrentIcon className="w-12 h-12" /> : <item.FutureIcon className="w-12 h-12" />}
                                    </div>
                                    <div className="mb-6">
                                        <div className={`text-[10px] font-black uppercase tracking-[0.3em] mb-3 ${regime === '2026' ? 'text-ree-green' : 'text-slate-400'}`}>{item.status}</div>
                                        <h4 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-none">{item.title}</h4>
                                    </div>
                                    <p className="text-slate-500 font-medium text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                                        {item.impact}
                                    </p>
                                    <div className="flex items-center gap-3 pt-8 border-t border-slate-100">
                                        <div className={`w-2.5 h-2.5 rounded-full ${regime === '2026' ? 'bg-ree-green animate-pulse' : 'bg-slate-300'}`} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                                            {regime === '2026' ? 'Ready for 2026' : 'Active Infrastructure'}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Who It's For & Why They Pay */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-ree-green/10 to-transparent opacity-30 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-24">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter leading-none italic">
                            Who the MVP <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ree-green to-emerald-400">Is For.</span>
                        </h2>
                        <p className="text-2xl text-slate-400 font-medium mb-16 leading-relaxed">
                            Ree-fond is built for the users who feel the tax pain daily.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                'Accounting & Tax Firms',
                                'Payroll Providers',
                                'HR Platforms',
                                'Fintechs',
                                'SME Employers'
                            ].map((customer, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex items-center gap-6 group hover:bg-white/10 transition-all backdrop-blur-md">
                                    <div className="w-12 h-12 rounded-full bg-ree-green/20 text-ree-green flex items-center justify-center text-lg font-black border border-ree-green/40">{i + 1}</div>
                                    <span className="font-black text-slate-200 text-lg tracking-tight">{customer}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-16">
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-ree-green mb-12">Business Value</h3>
                            <div className="space-y-12">
                                <div className="relative pl-20 group">
                                    <div className="absolute left-0 top-0 text-5xl group-hover:scale-125 transition-transform duration-500">🚀</div>
                                    <h4 className="text-2xl font-black text-white mb-3 tracking-tight">Faster Tax Operations</h4>
                                    <p className="text-slate-400 text-lg font-medium leading-relaxed">Automate document collection and history tracking by 70%.</p>
                                </div>
                                <div className="relative pl-20 group">
                                    <div className="absolute left-0 top-0 text-5xl group-hover:scale-125 transition-transform duration-500">🛡️</div>
                                    <h4 className="text-2xl font-black text-white mb-3 tracking-tight">Zero-Error Audits</h4>
                                    <p className="text-slate-400 text-lg font-medium leading-relaxed">Maintain immutable centralized tax records ready for any inspection.</p>
                                </div>
                                <div className="relative pl-20 group opacity-60 hover:opacity-100 transition-opacity">
                                    <div className="absolute left-0 top-0 text-5xl group-hover:scale-125 transition-transform duration-500">🏛️</div>
                                    <h4 className="text-2xl font-black text-white mb-3 tracking-tight italic">For Governments (Future)</h4>
                                    <p className="text-slate-400 text-lg font-medium italic leading-relaxed">Higher compliance rates and reduced revenue leakage through digital transparency.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative py-32 md:py-40 overflow-hidden bg-ree-green">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-ree-green opacity-50 pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-8xl font-black text-ree-gray mb-10 tracking-tighter leading-none">Deploy the <br />Infrastructure.</h2>
                        <p className="text-2xl text-ree-gray/80 font-bold mb-16 max-w-3xl mx-auto leading-relaxed">
                            Standardize your tax workflows today with Nigeria's most resilient tax API modules.
                        </p>
                        <button className="group relative overflow-hidden bg-ree-gray text-white px-16 py-6 rounded-[2rem] font-black text-xl shadow-2xl hover:scale-105 transition-all">
                            <span className="relative z-10 uppercase tracking-[0.2em]">Request API Access</span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div >
    )
}
export default Home
