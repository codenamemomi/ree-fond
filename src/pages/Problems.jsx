import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
}

const Problems = () => {
    return (
        <div className="bg-slate-50">
            {/* Problem Hero */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-red-500/5 blur-[120px] rounded-full" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-10 leading-[0.9]">
                            The Tax Reality: <br />
                            <span className="text-red-500 underline decoration-red-100 decoration-8 underline-offset-8">Manual & Opaque.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                            Nigeria's tax ecosystem is federated across FIRS, 36 States, and the FCT. Without a unified API, employers and SMEs spend <span className="text-gray-900 font-bold italic">weeks</span> resolving basic discrepancies.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Fragmenation Section */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-black text-ree-gray mb-6 uppercase tracking-widest">The Pain Points</h2>
                            <p className="text-lg font-medium text-gray-500 leading-relaxed">
                                We've identified the four core bottlenecks that cripple Nigerian tax operations today.
                            </p>
                        </div>

                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                            {[
                                { t: 'Federated Fragmentation', d: 'FIRS and State IRS systems operate in silos, requiring duplicate filings and manual reconciliation.' },
                                { t: 'Revenue Leakage', d: 'Manual oversight leads to massive gaps in compliant reporting and collection.' },
                                { t: 'Zero Refund Visibility', d: 'Refunds and adjustments are handled offline with no tracking or status updates for taxpayers.' },
                                { t: 'Manual Workflows', d: 'Reliance on paper-based or semi-digital systems that don’t support API integration.' }
                            ].map((p, i) => (
                                <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 ring-1 ring-gray-900/5 group hover:ring-ree-green/50 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-6 group-hover:bg-ree-green group-hover:text-white transition-all">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{p.t}</h3>
                                    <p className="text-sm font-medium text-gray-500 leading-relaxed">{p.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem vs Solution Interactive Table */}
            <section className="py-32 bg-gray-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">The Ree-fond Delta</h2>
                        <p className="text-xl text-gray-400 font-medium">How we bridge the infrastructure gap.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { p: 'Offline Filing History', s: 'Standardized Digital System of Record' },
                            { p: 'Opaque Refund Status', s: 'Real-time Refund Tracking API' },
                            { p: 'Fragmented Identities', s: 'Unified Taxpayer Identity (TIN) Layer' },
                            { p: 'High Audit Difficulty', s: 'Automated Audit Trails & Profiles' }
                        ].map((row, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="grid md:grid-cols-2 gap-4"
                            >
                                <div className="bg-white/5 p-8 rounded-2xl border border-white/5 flex items-center gap-6">
                                    <span className="text-red-500/50 font-black text-xl italic">OLD</span>
                                    <span className="font-bold text-gray-300">{row.p}</span>
                                </div>
                                <div className="bg-ree-green/20 p-8 rounded-2xl border border-ree-green/20 flex items-center gap-6">
                                    <span className="text-ree-light font-black text-xl italic">REE-FOND</span>
                                    <span className="font-bold text-white">{row.s}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Problems
