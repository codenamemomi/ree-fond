import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroBg from '../assets/hero-bg.jpg'

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

const Home = () => {
    const [employees, setEmployees] = useState(50)
    const { scrollYProgress } = useScroll()
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200])

    const timeSaved = employees * 2
    const potentialSavings = (employees * 15000 * 0.1).toLocaleString()

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center bg-white overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -50, 0],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-24 -left-24 w-96 h-96 bg-ree-green/5 blur-[120px] rounded-full"
                    />
                    <motion.div
                        animate={{
                            x: [0, -80, 0],
                            y: [0, 100, 0],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ree-light/5 blur-[150px] rounded-full"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.85]">
                            Shadow Tax <br />
                            <span className="text-ree-green">Infrastructure</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-medium">
                            Standardizing Nigeria's tax record-keeping through a resilient system of record.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex justify-center gap-6">
                            <button className="bg-ree-green text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-ree-green/20 hover:scale-105 transition-transform">Get Started</button>
                            <button className="bg-white text-ree-gray border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">Documentation</button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Shadow Tax API (Infrastructure MVP) */}
            <section className="py-32 bg-slate-50 border-y border-gray-100">
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
                            <div className="grid grid-cols-2 gap-6">
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
            <section className="py-32 bg-white">
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

            {/* Who It's For & Why They Pay */}
            <section className="py-40 bg-ree-gray text-white">
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
            <section className="py-32 bg-ree-green text-white text-center">
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
