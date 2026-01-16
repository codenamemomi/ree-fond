import { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

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
    const [regime, setRegime] = useState('2026') // Default to 2026 to show readiness
    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center bg-white overflow-hidden perspective-1000">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
                    <ThreeDCard />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pointer-events-none">
                    {/* Content wrapper to ensure text is above 3D element but allows click-through to it if needed (though it's background) 
                        Actually, ThreeDCard is background, text is foreground. Pointer events on text container should be auto for buttons.
                     */}
                    <div className="pointer-events-auto">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.h1 variants={fadeInUp} className="text-5xl md:text-9xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.9] md:leading-[0.85]">
                                Shadow Tax <br />
                                <span className="text-ree-green">Infrastructure</span>
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-medium">
                                Standardizing Nigeria's tax record-keeping through a resilient system of record.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                                <button className="bg-ree-green text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-ree-green/20 hover:scale-105 transition-transform w-full sm:w-auto">Get Started</button>
                                <button className="bg-white text-ree-gray border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors w-full sm:w-auto">Documentation</button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Shadow Tax API (Infrastructure MVP) */}
            <section className="py-16 md:py-32 bg-slate-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <h2 className="text-4xl md:text-6xl font-black text-ree-gray tracking-tighter mb-10 leading-[0.9]">
                                The API for <br />
                                <span className="text-ree-green italic underline decoration-ree-light">Unstructured Reality</span>
                            </h2>
                            <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">
                                Ree-fond does not wait for government APIs. It becomes the <strong>structured system of record</strong> that removes chaos from tax operations before the first filing reaches the tax office.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: 'Taxpayer Profiles', icon: '👤' },
                                    { title: 'Filing History', icon: '📄' },
                                    { title: 'Refund Records', icon: '💰' },
                                    { title: 'Compliance Timelines', icon: '⏳' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <div className="text-2xl mb-3">{item.icon}</div>
                                        <div className="font-black text-ree-gray tracking-tight">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-ree-gray rounded-[3rem] p-12 text-white relative flex flex-col justify-center min-h-[500px]"
                        >
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-ree-green/20 blur-[100px] rounded-full" />
                            <h3 className="text-3xl font-black mb-8 italic">"Infrastructure wins by being early and trusted."</h3>
                            <p className="text-lg text-gray-400 font-medium mb-10 italic">
                                We've built the data layer that governments and corporations will eventually depend on to verify tax compliance in real-time.
                            </p>
                            <div className="flex items-center gap-6 mt-auto">
                                <div className="w-16 h-16 rounded-full bg-ree-green/20 flex items-center justify-center text-3xl">🛡️</div>
                                <div>
                                    <div className="text-sm font-black uppercase tracking-widest text-ree-light">Audit-Ready</div>
                                    <div className="text-gray-400 font-medium">Immutable tax event logs</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core MVP API Modules */}
            <section className="py-16 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-24">
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-4xl md:text-7xl font-black text-ree-gray tracking-tighter mb-8 leading-none">
                            MVP <span className="text-ree-green">Modules</span>
                        </motion.h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
                            Core engine blocks designed to handle the complexity of Nigerian tax reality.
                        </p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-8"
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
            <section className="py-16 md:py-32 bg-slate-50 border-y border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
                    <div className="grid grid-cols-6 h-full border-x border-ree-gray/10">
                        {[...Array(6)].map((_, i) => <div key={i} className="border-r border-ree-gray/10" />)}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
                        <div className="max-w-3xl">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 rounded-full bg-ree-green/10 text-ree-green text-xs font-black uppercase tracking-[0.2em] mb-8"
                            >
                                The 2026 Paradigm Shift
                            </motion.span>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="text-4xl md:text-7xl font-black text-ree-gray tracking-tighter mb-10 leading-[0.9]"
                            >
                                {regime === 'current' ? 'Navigating the' : 'Architected for'} <br />
                                <span className="text-ree-green italic">{regime === 'current' ? 'Status Quo.' : 'The New Regime.'}</span>
                            </motion.h2>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed">
                                {regime === 'current'
                                    ? "While others wait for government APIs, Ree-fond's infrastructure already standardizes the manual-heavy reality of today's tax workflows."
                                    : "The 2026 Nigerian tax law introduces stricter enforcement and complex disclosures. Ree-fond is architected to absorb this complexity by design."}
                            </p>
                        </div>

                        <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 flex gap-2 self-start lg:self-auto">
                            <button
                                onClick={() => setRegime('current')}
                                className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${regime === 'current' ? 'bg-ree-gray text-white shadow-lg' : 'text-gray-400 hover:text-ree-gray'}`}
                            >
                                Current State
                            </button>
                            <button
                                onClick={() => setRegime('2026')}
                                className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${regime === '2026' ? 'bg-ree-green text-white shadow-lg' : 'text-gray-400 hover:text-ree-green'}`}
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
                        className="grid lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="wait">
                            {[
                                {
                                    title: "Tax Refund Management",
                                    icon: regime === 'current' ? "💰" : "🔄",
                                    status: regime === 'current' ? "Manual Reality" : "Enforcement Ready",
                                    impact: regime === 'current'
                                        ? "Currently manual-heavy and opaque in Nigeria. Ree-fond brings structure to existing filing histories and refund claims."
                                        : "As 2026 brings stricter enforcement, refund pressure and disputes will skyrocket. Our refund_cases table manages this friction.",
                                    id: 'refunds'
                                },
                                {
                                    title: "Adaptive Filing Management",
                                    icon: regime === 'current' ? "📂" : "⚡",
                                    status: regime === 'current' ? "Multi-Type Support" : "New Disclosures",
                                    impact: regime === 'current'
                                        ? "Supports Monthly, Quarterly, and Annual PAYE/WHT/VAT filings out of the box with standardized data schemas."
                                        : "Perfect for new Development Levy filings, worldwide income disclosures, and retroactive corrections required starting 2026.",
                                    id: 'filings'
                                },
                                {
                                    title: "TIN-Centric Identity",
                                    icon: regime === 'current' ? "👤" : "🆔",
                                    status: regime === 'current' ? "Unified Profiles" : "Enforced Linkage",
                                    impact: regime === 'current'
                                        ? "Unified taxpayer identity across multiple tax jurisdictions and states before central government synchronization exists."
                                        : "Direct alignment with TIN + BVN + NIN pressure. Attributes are designed to capture residency and worldwide flags effortlessly.",
                                    id: 'identity'
                                },
                                {
                                    title: "Compliance Intelligence",
                                    icon: regime === 'current' ? "📈" : "🛡️",
                                    status: regime === 'current' ? "Gap Analysis" : "Audit Readiness",
                                    impact: regime === 'current'
                                        ? "Identifies missing filings and late submissions in current workflows using real-time compliance tracking."
                                        : "2026 introduces progressive thresholds and higher penalties. Our scoring evolves into Enforcement Readiness Scoring.",
                                    id: 'compliance'
                                },
                                {
                                    title: "Digital Audit Trails",
                                    icon: regime === 'current' ? "📋" : "🔒",
                                    status: regime === 'current' ? "Record Integrity" : "Trust Multiplier",
                                    impact: regime === 'current'
                                        ? "Every tax event is logged with immutable timestamps, creating a defensible record for current manual audits."
                                        : "Government-adjacent trust through encrypted logs and role-based access. Exactly what the 2026 fiscal regime requires.",
                                    id: 'audit'
                                },
                                {
                                    title: "Scalable Infrastructure",
                                    icon: regime === 'current' ? "🚀" : "🏢",
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
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    whileHover={{ y: -10 }}
                                    className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full"
                                >
                                    <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                                    <div className="mb-6">
                                        <div className={`text-[10px] font-black uppercase tracking-widest mb-2 ${regime === '2026' ? 'text-ree-green' : 'text-ree-gray opacity-40'}`}>{item.status}</div>
                                        <h4 className="text-2xl font-black text-ree-gray tracking-tight leading-none">{item.title}</h4>
                                    </div>
                                    <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8 flex-grow">
                                        {item.impact}
                                    </p>
                                    <div className="flex items-center gap-2 pt-6 border-t border-gray-50">
                                        <div className={`w-2 h-2 rounded-full ${regime === '2026' ? 'bg-ree-green' : 'bg-gray-300'}`} />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-ree-gray">
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
            <section className="py-20 md:py-40 bg-ree-gray text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter leading-none italic">
                            Who the MVP <br />
                            <span className="text-ree-green">Is For</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-medium mb-12">
                            Ree-fond is built for the users who feel the tax pain daily.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'Accounting & Tax Firms',
                                'Payroll Providers',
                                'HR Platforms',
                                'Fintechs',
                                'SME Employers'
                            ].map((customer, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-4 group hover:bg-white/10 transition-all">
                                    <div className="w-8 h-8 rounded-full bg-ree-green flex items-center justify-center text-xs font-black">{i + 1}</div>
                                    <span className="font-bold text-gray-200">{customer}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-12">
                        <div>
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-ree-light mb-8">Business Value</h3>
                            <div className="space-y-8">
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 text-3xl">🚀</div>
                                    <h4 className="text-xl font-black mb-2">Faster Tax Operations</h4>
                                    <p className="text-gray-400 font-medium">Automate document collection and history tracking by 70%.</p>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 text-3xl">🛡️</div>
                                    <h4 className="text-xl font-black mb-2">Zero-Error Audits</h4>
                                    <p className="text-gray-400 font-medium">Maintain immutable centralized tax records ready for any inspection.</p>
                                </div>
                                <div className="relative pl-12 opacity-60">
                                    <div className="absolute left-0 top-0 text-3xl">🏛️</div>
                                    <h4 className="text-xl font-black mb-2 italic">For Governments (Future)</h4>
                                    <p className="text-gray-400 font-medium italic">Higher compliance rates and reduced revenue leakage through digital transparency.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 md:py-32 bg-ree-green text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">Deploy the Infrastructure.</h2>
                    <p className="text-xl text-white/80 font-medium mb-12">
                        Standardize your tax workflows today with Ree-fond's API modules.
                    </p>
                    <button className="bg-white text-ree-green px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-ree-light hover:text-white transition-all scale-110">
                        GET API ACCESS
                    </button>
                </div>
            </section>
        </div >
    )
}

export default Home
