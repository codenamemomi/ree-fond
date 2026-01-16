import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
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
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    return (
        <div className="min-h-screen bg-[#f8fafc] selection:bg-red-500/20 selection:text-red-900 overflow-x-hidden" ref={containerRef}>
            <BackgroundDecorations />

            {/* Problem Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/home/codenamemomi/.gemini/antigravity/brain/9c304481-194a-4b95-b414-3abb02b58d6f/problems_header_bg_1768532963715.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-110 blur-[3px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-[#f8fafc]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-center">
                    <motion.div
                        style={{ y: heroY, opacity: heroOpacity }}
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="max-w-5xl mx-auto"
                        >
                            <motion.h1
                                variants={fadeInUp}
                                className="text-4xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-10 leading-[0.8] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            >
                                Tax Reality is <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 italic">Broken By Design.</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-300 font-medium leading-tight max-w-4xl mx-auto">
                                From siloed state systems to manual refund claims, the cost of compliance is an invisible tax on every business in Nigeria.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Deep Dive Section 1: Fragmentation */}
            <section className="relative py-20 lg:py-64 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-20 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
                        <img src={silosImg} alt="Fragmented Silos" className="relative rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-slate-200" />
                        <div className="absolute -bottom-16 -right-16 bg-white p-12 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] max-w-sm hidden lg:block border border-slate-100">
                            <div className="text-7xl font-black text-red-500 mb-4 tracking-tighter leading-none">37+</div>
                            <div className="text-lg font-black uppercase tracking-widest text-slate-900 leading-tight">Sovereign data silos.</div>
                        </div>
                    </motion.div>

                    <div>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.8]">Federated <br />Fragmentation.</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 opacity-80">
                            Nigeria’s tax system is split across the FIRS, 36 States, and the FCT. Each acts as a sovereign data island with zero interoperability.
                        </p>
                        <ul className="space-y-8">
                            {[
                                'No unified taxpayer identity across states.',
                                'Duplicate filings required for multi-state operations.',
                                'Manual reconciliation of PAYE vs State IRS records.'
                            ].map((item, i) => (
                                <motion.li initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} variants={fadeInUp} key={i} className="flex items-center gap-8 group">
                                    <span className="w-12 h-12 rounded-2xl bg-red-500/5 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all border border-red-500/10">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </span>
                                    <span className="text-slate-900 font-black text-2xl tracking-tighter">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Deep Dive Section 2: Manual Bottlenecks */}
            <section className="relative py-20 lg:py-64 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.8]">The Manual <br />Stranglehold.</h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-16 opacity-80">
                            When a refund is due or an adjustment is needed, the digital journey ends. Processes that should take seconds take months of offline correspondence.
                        </p>
                        <div className="grid grid-cols-2 gap-12">
                            <div className="group">
                                <div className="text-6xl md:text-8xl font-black text-red-500 mb-4 tracking-tighter group-hover:scale-105 transition-transform origin-left">90%</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Manual Claims Process</div>
                                <div className="mt-6 w-24 h-1.5 bg-red-500/10 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-red-500" />
                                </div>
                            </div>
                            <div className="group">
                                <div className="text-6xl md:text-8xl font-black text-red-500 mb-4 tracking-tighter group-hover:scale-105 transition-transform origin-left">0%</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Real-time Visibility</div>
                                <div className="mt-6 w-24 h-1.5 bg-red-500/10 rounded-full" />
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="absolute -inset-20 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
                        <img src={manualImg} alt="Manual Bottleneck" className="relative rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-slate-200" />
                    </motion.div>
                </div>
            </section>

            {/* Deep Dive Section 3: Revenue Leakage */}
            <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
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
            <section className="relative py-20 lg:py-64 overflow-hidden bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16 lg:mb-32">
                        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 mb-10 tracking-tighter leading-none">The <span className="text-ree-green">Delta.</span></motion.h2>
                        <p className="text-xl text-slate-500 font-medium opacity-80">How our infrastructure layer bridges the visibility gap.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-2 gap-12"
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
                                whileHover={{ y: -10 }}
                                className="group flex flex-col p-4"
                            >
                                <div className="text-ree-green mb-10 w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center shadow-lg group-hover:bg-ree-green group-hover:text-white transition-all duration-500 border border-slate-100">
                                    <row.Icon className="w-8 h-8" />
                                </div>
                                <div className="space-y-10">
                                    <div className="relative pl-8 border-l-2 border-red-500/20">
                                        <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4">The Status Quo</div>
                                        <div className="text-slate-900 font-black text-2xl lg:text-3xl tracking-tighter leading-none">{row.p}</div>
                                    </div>
                                    <div className="relative pl-8 border-l-2 border-ree-green">
                                        <div className="text-[10px] font-black text-ree-green uppercase tracking-[0.4em] mb-4">Infrastructure Solution</div>
                                        <div className="text-slate-900 font-black text-2xl lg:text-3xl tracking-tighter leading-none">{row.s}</div>
                                    </div>
                                </div>
                                <div className="mt-12 w-full h-px bg-slate-200" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 2026 Risk Section */}
            <section className="relative py-24 lg:py-64 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-50 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-7xl lg:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.8] mb-12">
                                The 2026 <br />
                                <span className="text-red-500">Complexity Multiplier.</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-xl text-slate-400 font-medium mb-16 leading-relaxed max-w-xl">
                                The status quo is already failing. The 2026 regime introduction will push manual tax operations over the edge with complex disclosures and mandatory enforcement.
                            </motion.p>
                            <div className="space-y-12">
                                {[
                                    { t: 'Multi-State Development Levies', d: 'New filing types that will break manual spreadsheets.' },
                                    { t: 'TIN-BVN-NIN Convergence', d: 'Nowhere to hide for non-compliant entities.' },
                                    { t: 'Automated Penalty Triggers', d: 'Stricter enforcement means zero margin for error.' }
                                ].map((risk, i) => (
                                    <motion.div key={i} variants={fadeInUp} className="flex gap-10 group opacity-60 hover:opacity-100 transition-all">
                                        <div className="text-red-500 text-4xl font-black leading-none">0{i + 1}</div>
                                        <div>
                                            <div className="font-black text-2xl lg:text-3xl text-white mb-4 tracking-tighter">{risk.t}</div>
                                            <div className="text-lg font-medium text-slate-500">{risk.d}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-16 md:p-24 rounded-[4rem] border border-white/10 text-center backdrop-blur-3xl relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-50 pointer-events-none" />
                            <div className="text-9xl mb-16 group-hover:scale-110 transition-transform duration-700 filter grayscale-0">⚠️</div>
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-10 italic tracking-tighter leading-none">"Compliance scoring becomes enforcement readiness."</h3>
                            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-16 leading-relaxed">
                                In 2026, compliance isn't just about filing—it's about surviving an audit-centric fiscal regime.
                            </p>
                            <button className="group relative overflow-hidden bg-red-600 text-white px-16 py-7 rounded-[2.5rem] font-black text-xl transition-all hover:scale-110 active:scale-95 shadow-[0_30px_60px_rgba(220,38,38,0.3)]">
                                <span className="relative z-10 uppercase tracking-widest">Audit My Stack</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 lg:py-64 overflow-hidden bg-white">
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-4xl md:text-[8rem] lg:text-[11rem] font-black text-slate-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap hidden lg:block tracking-tighter">INEVITABLE</h2>
                        <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.8] uppercase italic">Infrastructure <br />is Ready.</h2>
                        <p className="text-xl md:text-2xl text-slate-500 font-medium mb-20 max-w-3xl mx-auto leading-relaxed opacity-80">
                            The transition from manual chaos to API-first tax management is already happening. Don't build on top of fragmented silos.
                        </p>
                        <button className="group relative overflow-hidden bg-ree-green text-white px-16 py-7 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-110 active:scale-95 shadow-[0_30px_60px_rgba(0,104,55,0.2)]">
                            <span className="relative z-10 uppercase tracking-widest">Build With Ree-fond</span>
                            <div className="absolute inset-0 bg-ree-light translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Problems
