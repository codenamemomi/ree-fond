import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import silosImg from '../assets/silos.png'
import manualImg from '../assets/manual.png'
import leakageImg from '../assets/leakage.png'

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const Problems = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    return (
        <div className="bg-white overflow-hidden" ref={containerRef}>
            {/* Problem Hero */}
            <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 md:pt-24 md:pb-32">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.05 }}
                        transition={{ duration: 2 }}
                        className="w-full h-full"
                    >
                        <img src={silosImg} alt="" className="w-full h-full object-cover grayscale" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="max-w-4xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-black uppercase tracking-widest mb-8 border border-red-100">
                            The Critical Gap
                        </span>
                        <h1 className="text-4xl md:text-8xl font-black text-gray-900 tracking-tighter mb-10 leading-[0.9] md:leading-[0.85]">
                            Nigeria's Tax Reality is <br />
                            <span className="text-red-500 italic">Broken By Design.</span>
                        </h1>
                        <p className="text-lg md:text-3xl text-gray-500 font-medium leading-relaxed md:leading-tight max-w-3xl">
                            From siloed state systems to manual refund claims, the cost of compliance is an invisible tax on every business in Nigeria.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Deep Dive Section 1: Fragmentation */}
            <section className="py-16 md:py-32 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-red-500/10 blur-3xl rounded-full" />
                        <img src={silosImg} alt="Fragmented Silos" className="relative rounded-[40px] shadow-2xl border border-white" />
                        <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                            <div className="text-4xl font-black text-red-500 mb-2">37+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Independent Revenue Authorities working in silos.</div>
                        </div>
                    </motion.div>

                    <div>
                        <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Federated <br />Fragmentation</h2>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                            Nigeria’s tax system is split across the FIRS, 36 States, and the FCT. Each acts as a sovereign data island with zero interoperability.
                        </p>
                        <ul className="space-y-6">
                            {[
                                'No unified taxpayer identity across states.',
                                'Duplicate filings required for multi-state operations.',
                                'Manual reconciliation of PAYE vs State IRS records.'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 mt-1">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </span>
                                    <span className="text-gray-700 font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Deep Dive Section 2: Manual Bottlenecks */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">The Manual <br />Stranglehold</h2>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                            When a refund is due or an adjustment is needed, the digital journey ends. Processes that should take seconds take months of offline correspondence.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <div className="text-3xl font-black text-red-600 mb-1">90%</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-red-400">Manual Claims</div>
                            </div>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <div className="text-3xl font-black text-red-600 mb-1">0%</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-red-400">Status Visibility</div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <img src={manualImg} alt="Manual Bottleneck" className="rounded-[40px] shadow-2xl border border-gray-100" />
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
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">The Ree-fond Delta</h2>
                        <p className="text-xl text-gray-500 font-medium">How our infrastructure layer bridges the gap.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {[
                            {
                                p: 'Offline Filing History',
                                s: 'Standardized Digital System of Record',
                                icon: '📁'
                            },
                            {
                                p: 'Opaque Refund Status',
                                s: 'Real-time Refund Tracking API',
                                icon: '🔄'
                            },
                            {
                                p: 'Fragmented Identities',
                                s: 'Unified Taxpayer Identity (TIN) Layer',
                                icon: '🆔'
                            },
                            {
                                p: 'High Audit Difficulty',
                                s: 'Automated Audit Trails & Profiles',
                                icon: '🛡️'
                            }
                        ].map((row, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                                className="group p-1 bg-gray-50 rounded-[32px] hover:bg-ree-green/5 transition-colors cursor-default"
                            >
                                <div className="bg-white p-10 rounded-[31px] border border-gray-100 shadow-sm flex flex-col h-full group-hover:shadow-xl transition-shadow">
                                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{row.icon}</div>
                                    <div className="space-y-6 flex-grow">
                                        <div className="relative pl-6 border-l-2 border-red-500/20">
                                            <span className="absolute left-0 top-0 text-[10px] font-black text-red-500/40 uppercase -translate-x-full -rotate-90 origin-top-right mt-2 mr-2">Status Quo</span>
                                            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Problem</div>
                                            <div className="text-gray-900 font-black text-lg leading-tight">{row.p}</div>
                                        </div>
                                        <div className="relative pl-6 border-l-2 border-ree-green">
                                            <span className="absolute left-0 top-0 text-[10px] font-black text-ree-green uppercase -translate-x-full -rotate-90 origin-top-right mt-2 mr-2">The Future</span>
                                            <div className="text-sm font-bold text-ree-green uppercase tracking-widest mb-1">Infrastructure Solution</div>
                                            <div className="text-gray-1000 font-black text-lg leading-tight">{row.s}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 2026 Risk Section */}
            <section className="py-32 bg-red-950 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ef4444_0%,transparent_50%)]" />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none">
                                The 2026 <br />
                                <span className="text-red-500">Complexity Multiplier.</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-medium mb-12 leading-relaxed">
                                The status quo is already failing. The 2026 regime introduction will push manual tax operations over the edge with more disputes, stricter penalties, and mandatory worldwide income disclosures.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { t: 'Multi-State Development Levies', d: 'New filing types that will break manual spreadsheets.' },
                                    { t: 'TIN-BVN-NIN Convergence', d: 'Nowhere to hide for non-compliant entities.' },
                                    { t: 'Automated Penalty Triggers', d: 'Stricter enforcement means zero margin for error.' }
                                ].map((risk, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                        <div className="w-1.5 h-full bg-red-500 rounded-full" />
                                        <div>
                                            <div className="font-black text-lg mb-1">{risk.t}</div>
                                            <div className="text-sm font-medium text-gray-400">{risk.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 text-center"
                        >
                            <div className="text-8xl mb-8">⚠️</div>
                            <h3 className="text-3xl font-black mb-6 italic">"Compliance scoring becomes enforcement readiness scoring."</h3>
                            <p className="text-lg text-gray-400 font-medium mb-10">
                                In 2026, compliance isn't just about filing—it's about surviving an audit-centric fiscal regime.
                            </p>
                            <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-black hover:bg-red-500 transition-all">Audit My Stack</button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-black mb-8">Infrastructure is Inevitable.</h2>
                    <p className="text-xl text-gray-500 font-medium mb-12">
                        The transition from manual chaos to API-first tax management is already happening. Don't build on top of fragmented silos.
                    </p>
                    <button className="bg-ree-green text-white px-12 py-5 rounded-full font-black text-lg hover:bg-ree-light transition-all shadow-2xl hover:shadow-ree-green/40 hover:-translate-y-1">
                        Build With Ree-fond
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Problems
