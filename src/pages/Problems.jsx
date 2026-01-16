import { motion, AnimatePresence } from 'framer-motion'
import { FolderIcon, RefreshIcon, BadgeIcon, ShieldIcon } from '../components/icons/IconComponents'
import { useRef } from 'react'
import BackgroundDecorations from "../components/BackgroundDecorations"
import silosImg from '../assets/silos.png'
import manualImg from '../assets/manual.png'
import leakageImg from '../assets/leakage.png'

const fadeInUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
}

const Problems = () => {
    const containerRef = useRef(null)

    return (
        <div className="min-h-screen bg-[#f8fafc] selection:bg-red-500/20 selection:text-red-900" ref={containerRef}>
            <BackgroundDecorations />

            {/* Problem Hero */}
            <section className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden bg-slate-950">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/home/codenamemomi/.gemini/antigravity/brain/9c304481-194a-4b95-b414-3abb02b58d6f/problems_header_bg_1768532963715.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-[#f8fafc]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">The Critical Gap</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white tracking-tighter mb-10 leading-[0.85] md:leading-[0.8]">
                            Tax Reality is <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 italic">Broken By Design.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-slate-300 font-medium leading-relaxed max-w-3xl">
                            From siloed state systems to manual refund claims, the cost of compliance is an invisible tax on every business in Nigeria.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Deep Dive Section 1: Fragmentation */}
            <section className="relative py-32 md:py-48 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-10 bg-red-500/10 blur-[100px] rounded-full animate-pulse" />
                        <img src={silosImg} alt="Fragmented Silos" className="relative rounded-[3rem] shadow-2xl border border-white/40 backdrop-blur-3xl" />
                        <div className="absolute -bottom-12 -right-12 bg-white/60 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-white/20 max-w-sm hidden md:block">
                            <div className="text-5xl font-black text-red-500 mb-3 tracking-tighter">37+</div>
                            <div className="text-sm font-black uppercase tracking-widest text-slate-500 leading-tight">Independent Revenue Authorities working in total data isolation.</div>
                        </div>
                    </motion.div>

                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">Federated <br />Fragmentation.</h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                            Nigeria’s tax system is split across the FIRS, 36 States, and the FCT. Each acts as a sovereign data island with zero interoperability.
                        </p>
                        <ul className="space-y-6">
                            {[
                                'No unified taxpayer identity across states.',
                                'Duplicate filings required for multi-state operations.',
                                'Manual reconciliation of PAYE vs State IRS records.'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-6 group">
                                    <span className="w-10 h-10 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner border border-red-500/20">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </span>
                                    <span className="text-slate-800 font-black text-lg tracking-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Deep Dive Section 2: Manual Bottlenecks */}
            <section className="relative py-32 md:py-48 overflow-hidden bg-white/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-32 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">The Manual <br />Stranglehold.</h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                            When a refund is due or an adjustment is needed, the digital journey ends. Processes that should take seconds take months of offline correspondence.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="bg-red-500/5 backdrop-blur-xl p-8 rounded-[2rem] border border-red-500/10 group hover:bg-red-500/10 transition-all">
                                <div className="text-4xl font-black text-red-600 mb-2 tracking-tighter group-hover:scale-110 transition-transform">90%</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">Manual Claims</div>
                            </div>
                            <div className="bg-red-500/5 backdrop-blur-xl p-8 rounded-[2rem] border border-red-500/10 group hover:bg-red-500/10 transition-all">
                                <div className="text-4xl font-black text-red-600 mb-2 tracking-tighter group-hover:scale-110 transition-transform">0%</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">Status Visibility</div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="absolute inset-0 bg-red-500/5 blur-[80px] rounded-full scale-110" />
                        <img src={manualImg} alt="Manual Bottleneck" className="relative rounded-[3rem] shadow-2xl border border-white/40" />
                    </motion.div>
                </div>
            </section>

            {/* Deep Dive Section 3: Revenue Leakage */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute left-0 top-0 w-full h-full opacity-20">
                    <img src={leakageImg} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-none text-red-400">Massive Revenue <br />Leakage</h2>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed mb-12">
                            Fragmented data isn't just a headache for businesses—it's catastrophic for the economy. Inaccurate reporting and manual oversight lead to billions in lost tax revenue annually.
                        </p>
                        <div className="inline-flex items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                            <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-500">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                            <div>
                                <div className="text-2xl font-black">₦ Billions Lost</div>
                                <div className="text-sm font-bold opacity-50 uppercase tracking-widest">Due to inefficient collection infrastructure.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Grid (The Ree-fond Delta) */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-none">The <span className="text-ree-green">Delta.</span></motion.h2>
                        <p className="text-xl text-slate-500 font-medium">How our infrastructure layer bridges the visibility gap.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-10"
                    >
                        {[
                            {
                                p: 'Offline Filing History',
                                s: 'Standardized Digital System of Record',
                                Icon: FolderIcon
                            },
                            {
                                p: 'Opaque Refund Status',
                                s: 'Real-time Refund Tracking API',
                                Icon: RefreshIcon
                            },
                            {
                                p: 'Fragmented Identities',
                                s: 'Unified Taxpayer Identity (TIN) Layer',
                                Icon: BadgeIcon
                            },
                            {
                                p: 'High Audit Difficulty',
                                s: 'Automated Audit Trails & Profiles',
                                Icon: ShieldIcon
                            }
                        ].map((row, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="group bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-default"
                            >
                                <div className="text-ree-green mb-8 group-hover:scale-110 transition-transform origin-left">
                                    <row.Icon className="w-10 h-10" />
                                </div>
                                <div className="space-y-6">
                                    <div className="relative pl-6 border-l-4 border-red-500/20">
                                        <div className="text-[10px] font-black text-red-500/40 uppercase tracking-[0.3em] mb-4">The Status Quo</div>
                                        <div className="text-slate-900 font-black text-lg tracking-tight leading-tight">{row.p}</div>
                                    </div>
                                    <div className="relative pl-6 border-l-4 border-ree-green">
                                        <div className="text-[10px] font-black text-ree-green uppercase tracking-[0.3em] mb-4">Infrastructure Solution</div>
                                        <div className="text-slate-900 font-black text-lg tracking-tight leading-tight">{row.s}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 2026 Risk Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-50 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                                The 2026 <br />
                                <span className="text-red-500">Complexity Multiplier.</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 font-medium mb-12 leading-relaxed">
                                The status quo is already failing. The 2026 regime introduction will push manual tax operations over the edge with complex disclosures and mandatory enforcement.
                            </motion.p>
                            <div className="space-y-6">
                                {[
                                    { t: 'Multi-State Development Levies', d: 'New filing types that will break manual spreadsheets.' },
                                    { t: 'TIN-BVN-NIN Convergence', d: 'Nowhere to hide for non-compliant entities.' },
                                    { t: 'Automated Penalty Triggers', d: 'Stricter enforcement means zero margin for error.' }
                                ].map((risk, i) => (
                                    <motion.div key={i} variants={fadeInUp} className="flex gap-6 p-6 md:p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all">
                                        <div className="w-1.5 h-auto bg-gradient-to-b from-red-500 to-transparent rounded-full group-hover:scale-y-110 transition-transform" />
                                        <div>
                                            <div className="font-black text-lg text-white mb-2 tracking-tight">{risk.t}</div>
                                            <div className="text-sm font-medium text-slate-400">{risk.d}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-12 md:p-20 rounded-[3rem] border border-white/10 text-center backdrop-blur-xl relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent opacity-50 pointer-events-none" />
                            <div className="text-7xl md:text-9xl mb-12 group-hover:scale-110 transition-transform duration-500">⚠️</div>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-8 italic tracking-tight leading-tight">"Compliance scoring becomes enforcement readiness scoring."</h3>
                            <p className="text-lg text-slate-300 font-medium mb-12 leading-relaxed">
                                In 2026, compliance isn't just about filing—it's about surviving an audit-centric fiscal regime.
                            </p>
                            <button className="bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-red-50 transition-all shadow-2xl shadow-red-600/20 uppercase tracking-widest hover:text-red-600">Audit My Stack</button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-white/20 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">Infrastructure <br />is Inevitable.</h2>
                        <p className="text-lg md:text-xl text-slate-500 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
                            The transition from manual chaos to API-first tax management is already happening. Don't build on top of fragmented silos.
                        </p>
                        <button className="group relative overflow-hidden bg-ree-green text-ree-gray px-12 py-5 rounded-[2rem] font-black text-lg shadow-2xl hover:scale-105 transition-all">
                            <span className="relative z-10 uppercase tracking-[0.2em]">Build With Ree-fond</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Problems
