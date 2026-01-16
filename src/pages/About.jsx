import { motion, useScroll, useTransform } from 'framer-motion'
import { RocketIcon, TargetIcon, BuildingIcon, LockIcon } from '../components/icons/IconComponents'
import { useRef } from 'react'
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
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const About = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    return (
        <div className="bg-[#f8fafc] overflow-x-hidden" ref={containerRef}>
            <BackgroundDecorations />

            {/* Vision Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ree-green/10 via-transparent to-transparent opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ree-green/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <motion.div
                        style={{ y: heroY, opacity: heroOpacity }}
                    >
                        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-5xl mx-auto">
                            <h1 className="text-4xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-10 leading-[0.8] italic">
                                Infrastructure <br /><span className="text-ree-green">Before Innovation.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 font-medium leading-tight max-w-3xl mx-auto">
                                We aren't a tax app. We are the plumbing. Standardizing the data layer that powers Nigerian fiscal operations.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* The Vision Section */}
            <section className="relative py-20 lg:py-48 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.8] italic">Our Thesis.</h2>
                        <div className="space-y-8 text-xl font-medium text-slate-500 leading-relaxed">
                            <p>
                                Nigeria’s tax-to-GDP ratio is ~11%. The global average is ~20%. This gap isn't just about willingness to pay—it's about the <span className="text-slate-900 font-black decoration-ree-green/30 decoration-thickness-4 underline underline-offset-[12px]">frictional cost of compliance.</span>
                            </p>
                            <p>
                                The <strong className="text-slate-900">2026 Tax Regime</strong> will only widen this gap for those without structural data. By building the infrastructure layer now, we earn the trust required to power the digital transition.
                            </p>
                            <div className="pt-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-block px-6 py-2 rounded-full bg-ree-green/10 text-ree-green text-[10px] font-black uppercase tracking-[0.4em] border border-ree-green/20"
                                >
                                    2026 Paradigm Ready
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {[
                            { t: 'Be Early', d: 'Earn trust long before official automation is mandated.', Icon: RocketIcon },
                            { t: 'Be Precise', d: 'Standardize filing history and compliance timelines.', Icon: TargetIcon },
                            { t: 'Be Resilient', d: 'Private infrastructure today, government partner tomorrow.', Icon: BuildingIcon },
                            { t: 'Be Trusted', d: 'Secure, NDPR-compliant data handling at every layer.', Icon: LockIcon }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(0,104,55,0.08)] transition-all group"
                            >
                                <div className="text-ree-green mb-6 group-hover:scale-110 transition-transform origin-center">
                                    <item.Icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tighter leading-none">{item.t}</h4>
                                <p className="text-base font-medium text-slate-500 leading-relaxed opacity-80">{item.d}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="relative py-20 lg:py-48 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-end mb-16 lg:mb-24">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex-1">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.8] mb-8 italic">The Minds <br />Behind.</h2>
                            <p className="text-lg text-slate-500 font-medium max-w-xl">
                                Built by engineers and fiscal strategists who believe that the future of African economy begins with stable data protocols.
                            </p>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-12">
                            {[
                                { name: "Omomijolaoluwa Akinrogunde", role: "Founder & CEO" },
                                { name: "Ojonta Chiagoziem", role: "Founder & CTO" }
                            ].map((founder, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="group"
                                >
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-1">{founder.name}</h3>
                                    <p className="text-ree-green text-xs font-black uppercase tracking-[0.3em]">{founder.role}</p>
                                    <div className="mt-6 w-12 h-1 bg-ree-green group-hover:w-full transition-all duration-700" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The Road Ahead */}
            <section className="relative py-20 lg:py-48 overflow-hidden bg-slate-900">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-ree-green/5 blur-[120px] rounded-full" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-[0.8] italic">The Road <br /><span className="text-ree-green">Ahead.</span></h2>
                            <div className="space-y-8 text-lg font-medium text-slate-400 leading-relaxed">
                                <p>
                                    We are architecting more than just a tracking system. Ree-fond is evolving into a <span className="text-white italic">nation-wide liquidity engine.</span> Our good news is simple: the friction that once cost billions is being engineered out of existence.
                                </p>
                                <p>
                                    Our future integration plan includes direct API hooks for Tier-1 banks, automated VAT reconciliation, and a scalable nodal architecture that can handle 100M+ transactions per day without latency.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { t: "Hyper-Scalability", d: "Built on horizontally scalable infrastructure ready for 2026 demands." },
                                { t: "Bank-Grade Hooks", d: "Upcoming direct integrations with Nigeria's financial backbone." },
                                { t: "Fiscal Liquidity", d: "Turning compliance into a capital advantage for every participant." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group"
                                >
                                    <h4 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-ree-green transition-colors">{item.t}</h4>
                                    <p className="text-base text-slate-500 font-medium leading-normal">{item.d}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Values */}
            <section className="relative py-24 lg:py-64 overflow-hidden bg-ree-green">
                <div className="absolute inset-0 bg-gradient-to-br from-ree-green to-emerald-700 opacity-50 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16 lg:mb-24">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-6 py-2 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.5em] mb-10 border border-white/20"
                        >
                            The Bedrock
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none uppercase italic">Earn Trust. <br />Automate Later.</h2>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-16"
                    >
                        {[
                            { id: '01', t: 'Infrastructure First', d: 'We focus on the underlying data protocols before building flashy interfaces.' },
                            { id: '02', t: 'Zero-Day Audit', d: 'Every filing, every status, every refund is tracked with immutable audit trails.' },
                            { id: '03', t: 'Inevitable Scale', d: 'Our growth is tied to the digitization of Nigeria\'s fiscal ecosystem.' }
                        ].map((val, i) => (
                            <motion.div variants={fadeInUp} key={i} className="group">
                                <div className="text-ree-light font-black text-8xl mb-8 opacity-20 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 origin-left tracking-tighter leading-none">{val.id}</div>
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tight leading-none italic">{val.t}</h3>
                                <p className="text-lg text-white/70 font-medium leading-relaxed max-w-sm">{val.d}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About
