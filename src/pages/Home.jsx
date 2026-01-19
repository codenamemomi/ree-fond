import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion"
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

const ThreeDCard = ({ scrollYProgress }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

    const parallaxY = useTransform(scrollYProgress, [0, 0.5], [0, -150])
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        x.set((clientX - left) / width - 0.5)
        y.set((clientY - top) / height - 0.5)
    }

    return (
        <motion.div
            className="w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] flex items-center justify-center relative cursor-default"
            onMouseMove={onMouseMove}
            style={{
                y: parallaxY,
                opacity,
                scale,
                rotateX: useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 500, damping: 20 }),
                rotateY: useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 500, damping: 20 }),
            }}
            onMouseLeave={() => {
                x.set(0)
                y.set(0)
            }}
        >
            <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-br from-ree-green/10 via-emerald-500/5 to-transparent blur-3xl opacity-50" />
            <div className="absolute inset-4 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-[80px] flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                <div className="text-[12vw] md:text-9xl font-black text-white/5 select-none tracking-tighter filter blur-[1px]">
                    REE-FOND
                </div>
                {/* Floating Elements */}
                <motion.div
                    style={{
                        x: useTransform(mouseX, [-0.5, 0.5], [-50, 50]),
                        y: useTransform(mouseY, [-0.5, 0.5], [-50, 50])
                    }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-ree-green/15 rounded-full blur-3xl"
                />
                <motion.div
                    style={{
                        x: useTransform(mouseX, [-0.5, 0.5], [50, -50]),
                        y: useTransform(mouseY, [-0.5, 0.5], [50, -50])
                    }}
                    className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-ree-light/10 rounded-full blur-[80px]"
                />
            </div>
        </motion.div>
    )
}

const Home = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50])
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const [regime, setRegime] = useState('2026')

    const [textIndex, setTextIndex] = useState(0)
    const navigate = useNavigate()
    const heroTexts = [
        { prefix: "Revenue", suffix: "Infrastructure." },
        { prefix: "Regulatory", suffix: "Operating System." },
        { prefix: "Automated", suffix: "Compliance Layer." }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % heroTexts.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [selectedProduct])

    // Official Product Data
    const productDetails = {
        'Ree-fond Revenue': {
            Icon: ChartIcon,
            category: 'Revenue & Tax Infrastructure',
            role: 'Core system of record',
            definition: 'Ree-fond Revenue is the infrastructure layer that standardizes, tracks, and manages statutory revenue obligations across fragmented tax systems. It provides a structured system of record for taxpayer identities, filings, payments, refunds, and adjustments — independent of how or where submissions occur.',
            solves: [
                'Fragmented tax workflows across states and agencies',
                'Manual, opaque refund and adjustment processes',
                'Lack of visibility into filing status and obligations',
                'Inconsistent record-keeping across organizations'
            ],
            capabilities: [
                'Taxpayer identity and jurisdiction mapping',
                'Filing lifecycle management (manual, portal, API-assisted)',
                'Refund and adjustment case tracking',
                'Compliance timelines and SLA monitoring',
                'Revenue exposure and obligation summaries'
            ],
            users: [
                'Employers managing PAYE',
                'Accounting and tax firms',
                'Payroll providers',
                'Fintechs operating in regulated environments'
            ],
            positioning: 'Ree-fond Revenue provides a neutral, auditable system for managing statutory revenue workflows where no unified infrastructure exists.'
        },
        'Ree-fond Compliance': {
            Icon: ShieldIcon,
            category: 'Risk & Regulatory Infrastructure',
            role: 'Compliance intelligence and evaluation layer',
            definition: 'Ree-fond Compliance evaluates statutory behavior, risk exposure, and compliance posture across taxpayers, organizations, and filings. It transforms raw operational data into structured compliance signals — enabling early detection of risk, gaps, and regulatory exposure.',
            solves: [
                'Inability to measure compliance health',
                'Reactive audits instead of proactive risk detection',
                'Fragmented compliance logic across firms',
                'Manual compliance checks and guesswork'
            ],
            capabilities: [
                'Rule-based compliance scoring engines',
                'Risk classification and severity modeling',
                'Missing obligation and document detection',
                'Filing timeliness and consistency analysis',
                'Configurable compliance rules by jurisdiction'
            ],
            users: [
                'Accounting and advisory firms',
                'Employers and finance teams',
                'Compliance officers'
            ],
            positioning: 'Ree-fond Compliance turns regulatory operations into measurable, actionable compliance intelligence.'
        },
        'Ree-fond Evidence': {
            Icon: FolderIcon,
            category: 'Institutional Records & Audit Infrastructure',
            role: 'Verifiable source of truth',
            definition: 'Ree-fond Evidence is the structured evidence and audit-trail layer that preserves the full history of regulatory actions, documents, and decisions. It creates institutional memory where none exists — ensuring accountability, traceability, and defensibility across time.',
            solves: [
                'Lost or fragmented tax documents',
                'Unverifiable filings and refund claims',
                'Audit disputes without supporting evidence',
                'Staff turnover erasing institutional knowledge'
            ],
            capabilities: [
                'Document versioning and metadata tracking',
                'Immutable activity timelines',
                'Filing, refund, and compliance audit trails',
                'Evidence-to-case linkage',
                'Controlled access and permissioning'
            ],
            users: [
                'Accounting firms',
                'Employers',
                'Compliance teams'
            ],
            positioning: 'Ree-fond Evidence ensures every regulatory action is traceable, verifiable, and defensible.'
        }
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] selection:bg-ree-green/20 selection:text-ree-gray overflow-x-hidden" ref={containerRef}>
            <BackgroundDecorations />

            {/* Product Detail Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
                    >
                        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
                        <motion.div
                            layoutId={`product-card-${selectedProduct}`}
                            className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-slate-50 p-8 md:p-12 md:w-1/3 border-r border-slate-100 flex flex-col">
                                <div className="mb-8">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-ree-green mb-2">{productDetails[selectedProduct].category}</div>
                                    <h3 className="text-3xl font-black text-slate-900 leading-none tracking-tight mb-4">{selectedProduct}</h3>
                                    <div className="inline-block px-3 py-1 rounded-lg bg-slate-200/50 text-slate-600 text-xs font-bold uppercase tracking-wider">
                                        {productDetails[selectedProduct].role}
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center justify-center opacity-40 mix-blend-multiply pointer-events-none select-none">
                                    {(() => {
                                        const Icon = productDetails[selectedProduct].Icon
                                        return <Icon className="w-48 h-48 text-ree-green" />
                                    })()}
                                </div>
                                <div className="mt-auto">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Who Use It</div>
                                    <ul className="space-y-2">
                                        {productDetails[selectedProduct].users.map((user, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-ree-green" />
                                                {user}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-8 md:p-12 md:w-2/3 bg-white">
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>

                                <div className="mb-10">
                                    <h4 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-ree-green rounded-full" />
                                        Official Definition
                                    </h4>
                                    <p className="text-slate-600 text-lg leading-relaxed">{productDetails[selectedProduct].definition}</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">What It Solves</h4>
                                        <ul className="space-y-3">
                                            {productDetails[selectedProduct].solves.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                                                    <span className="text-red-400 mt-0.5">✕</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Core Capabilities</h4>
                                        <ul className="space-y-3">
                                            {productDetails[selectedProduct].capabilities.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                                                    <span className="text-ree-green mt-0.5">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-ree-green/5 p-6 rounded-2xl border border-ree-green/10">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-ree-green mb-2">Positioning</div>
                                    <p className="text-slate-700 font-bold italic">"{productDetails[selectedProduct].positioning}"</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/home/codenamemomi/.gemini/antigravity/brain/9c304481-194a-4b95-b414-3abb02b58d6f/home_header_bg_1768532948855.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-110 blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-[#f8fafc]" />
                </div>

                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <ThreeDCard scrollYProgress={scrollYProgress} />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        style={{ y: titleY, opacity: titleOpacity }}
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <div className="min-h-[180px] md:min-h-[250px] mb-8 flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.h1
                                        key={textIndex}
                                        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="text-4xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.8] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    >
                                        {heroTexts[textIndex].prefix} <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-ree-green via-ree-light to-emerald-400">
                                            {heroTexts[textIndex].suffix}
                                        </span>
                                    </motion.h1>
                                </AnimatePresence>
                            </div>

                            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                                Ree-fond builds neutral infrastructure that standardizes regulatory workflows, preserves institutional memory, and enables trust in fragmented systems.
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
                    </motion.div>
                </div>
            </section>

            {/* Shadow Tax API (Infrastructure MVP) */}
            <section className="relative py-20 lg:py-48 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                            <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-ree-gray tracking-tighter mb-10 leading-[0.85]">
                                The API for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ree-green to-emerald-600 italic underline decoration-ree-light">Unstructured Reality.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-16 max-w-xl">
                                Ree-fond doesn't just wait for government APIs. It becomes the <strong>structured system of record</strong> that removes chaos from tax operations before the first filing reaches the tax office.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { title: 'Taxpayer Profiles', Icon: UserIcon },
                                    { title: 'Filing History', Icon: DocumentIcon },
                                    { title: 'Refund Records', Icon: CurrencyIcon },
                                    { title: 'Compliance Timelines', Icon: ClockIcon }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all flex flex-col items-center text-center"
                                    >
                                        <div className="text-ree-green mb-4 group-hover:scale-110 transition-transform">
                                            <item.Icon className="w-10 h-10" />
                                        </div>
                                        <div className="font-black text-lg text-ree-gray tracking-tight">{item.title}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="bg-slate-900 rounded-[4rem] p-16 text-white relative flex flex-col justify-center min-h-[600px] shadow-2xl overflow-hidden group"
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

            {/* Product Family Section */}
            <section className="relative py-20 lg:py-48 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-ree-green/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16 lg:mb-32">
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-4xl md:text-7xl lg:text-8xl font-black text-ree-gray tracking-tighter mb-10 leading-none">
                            The <span className="text-ree-light">Infrastructure.</span>
                        </motion.h2>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
                            Domain-specific operating systems for the entire revenue lifecycle.
                        </p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-3 gap-8 lg:gap-12"
                    >
                        {[
                            {
                                title: 'Ree-fond Revenue',
                                desc: 'The compliance and revenue-operations layer powering structured tax workflows. Covers PAYE, VAT, CIT, WHT, and refunds.',
                                Icon: ChartIcon,
                                tag: 'Operations'
                            },
                            {
                                title: 'Ree-fond Compliance',
                                desc: 'Cross-agency obligations, risk scoring, and audit readiness. The standard for regulatory resilience.',
                                Icon: ShieldIcon,
                                tag: 'Resilience'
                            },
                            {
                                title: 'Ree-fond Evidence',
                                desc: 'Immutable document trails, filings, and institutional memory for bulletproof audit defense.',
                                Icon: FolderIcon,
                                tag: 'Memory'
                            }
                        ].map((module, i) => (
                            <motion.div
                                key={i}
                                layoutId={`product-card-${module.title}`}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                onClick={() => setSelectedProduct(module.title)}
                                className="group flex flex-col p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-ree-green/10 transition-all cursor-pointer"
                            >
                                <div className="text-ree-green mb-8 w-16 h-16 bg-ree-green/5 rounded-2xl flex items-center justify-center group-hover:bg-ree-green group-hover:text-white transition-all duration-500">
                                    <module.Icon className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ree-light mb-4 block">{module.tag}</span>
                                    <h3 className="text-2xl font-black text-ree-gray tracking-tight leading-none mb-6">{module.title}</h3>
                                    <p className="text-slate-500 font-medium text-lg leading-relaxed">{module.desc}</p>
                                </div>
                                <div className="mt-8 flex items-center gap-2 text-ree-green font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 2026 Regime Resilience Section */}
            <section className="relative py-20 lg:py-48 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 lg:mb-32">
                        <div className="max-w-3xl">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-2 rounded-full bg-ree-green/10 text-ree-green text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-ree-green/20"
                            >
                                The 2026 Paradigm Shift
                            </motion.span>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="text-4xl md:text-7xl font-black text-ree-gray tracking-tighter mb-10 leading-[0.85]"
                            >
                                {regime === 'current' ? 'Navigating the' : 'Architected for'} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ree-green to-emerald-600 italic underline decoration-ree-light decoration-4 underline-offset-8 decoration-ree-green/20">{regime === 'current' ? 'Status Quo.' : 'The New Regime.'}</span>
                            </motion.h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl opacity-80">
                                {regime === 'current'
                                    ? "While others wait for government APIs, Ree-fond's infrastructure already standardizes the manual-heavy reality of today's tax workflows."
                                    : "The 2026 Nigerian tax law introduces stricter enforcement and complex disclosures. Ree-fond is architected to absorb this complexity by design."}
                            </p>
                        </div>

                        <div className="bg-slate-50 p-2 rounded-[2rem] flex gap-2 self-start lg:self-auto border border-slate-100">
                            <button
                                onClick={() => setRegime('current')}
                                className={`px-8 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all ${regime === 'current' ? 'bg-white text-slate-900 shadow-xl' : 'text-slate-400 hover:text-slate-900'}`}
                            >
                                Current State
                            </button>
                            <button
                                onClick={() => setRegime('2026')}
                                className={`px-8 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all ${regime === '2026' ? 'bg-ree-green text-white shadow-xl shadow-ree-green/20' : 'text-slate-400 hover:text-ree-green'}`}
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
                        className="grid lg:grid-cols-2 gap-16"
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
                                }
                            ].map((item) => (
                                <motion.div
                                    key={`${regime}-${item.id}`}
                                    layout
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.4 }}
                                    className="group flex gap-10 items-start p-2"
                                >
                                    <div className="text-ree-green shrink-0 group-hover:scale-110 transition-transform origin-center">
                                        <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:shadow-xl transition-all">
                                            {regime === 'current' ? <item.CurrentIcon className="w-10 h-10" /> : <item.FutureIcon className="w-10 h-10" />}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${regime === '2026' ? 'text-ree-green' : 'text-slate-400'}`}>{item.status}</div>
                                        <h4 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-6">{item.title}</h4>
                                        <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                                            {item.impact}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${regime === '2026' ? 'bg-ree-green animate-pulse' : 'bg-slate-300'}`} />
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                                {regime === '2026' ? 'Ready for 2026' : 'Active Infrastructure'}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Who It's For & Why They Pay */}
            <section className="relative py-20 lg:py-48 overflow-hidden bg-slate-950">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent opacity-10" />
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-32">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none italic">
                            Who the MVP <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ree-green to-emerald-400">Is For.</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-medium mb-16 leading-relaxed">
                            Ree-fond is built for the users who feel the tax pain daily.
                        </p>
                        <div className="space-y-6">
                            {[
                                'Accounting & Tax Firms',
                                'Payroll Providers',
                                'HR Platforms',
                                'Fintechs',
                                'SME Employers'
                            ].map((customer, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 20 }}
                                    className="flex items-center gap-8 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-ree-green/10 text-ree-green flex items-center justify-center text-lg font-black border border-ree-green/20 group-hover:bg-ree-green group-hover:text-white transition-all">
                                        {i + 1}
                                    </div>
                                    <span className="font-black text-slate-200 text-2xl tracking-tight group-hover:text-ree-light transition-colors">{customer}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-24">
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-ree-green mb-16">Business Value</h3>
                            <div className="space-y-20">
                                <div className="relative pl-24 group">
                                    <div className="absolute left-0 top-0 text-6xl group-hover:scale-125 transition-transform duration-500 filter grayscale group-hover:grayscale-0">🚀</div>
                                    <h4 className="text-3xl font-black text-white mb-4 tracking-tight">Faster Tax Operations</h4>
                                    <p className="text-slate-400 text-xl font-medium leading-relaxed">Automate document collection and history tracking by 70%.</p>
                                </div>
                                <div className="relative pl-24 group">
                                    <div className="absolute left-0 top-0 text-6xl group-hover:scale-125 transition-transform duration-500 filter grayscale group-hover:grayscale-0">🛡️</div>
                                    <h4 className="text-3xl font-black text-white mb-4 tracking-tight">Zero-Error Audits</h4>
                                    <p className="text-slate-400 text-xl font-medium leading-relaxed">Maintain immutable centralized tax records ready for any inspection.</p>
                                </div>
                                <div className="relative pl-24 group opacity-40 hover:opacity-100 transition-opacity">
                                    <div className="absolute left-0 top-0 text-6xl group-hover:scale-125 transition-transform duration-500 filter grayscale group-hover:grayscale-0">🏛️</div>
                                    <h4 className="text-3xl font-black text-white mb-4 tracking-tight italic">For Governments (Future)</h4>
                                    <p className="text-slate-400 text-xl font-medium italic leading-relaxed">Higher compliance rates and reduced revenue leakage through digital transparency.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative py-24 lg:py-64 overflow-hidden bg-ree-green">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-ree-green opacity-90 pointer-events-none" />
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl md:text-[8rem] lg:text-[11rem] font-black text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap hidden lg:block tracking-tighter">INFRASTRUCTURE</h2>
                        <h2 className="text-4xl md:text-[6.5rem] font-black text-white mb-10 tracking-[0.05em] leading-none uppercase italic">Deploy the <br />Future.</h2>
                        <p className="text-xl md:text-2xl text-white/80 font-medium mb-20 max-w-3xl mx-auto leading-relaxed">
                            Standardize your tax workflows today with Nigeria's most resilient tax API modules.
                        </p>
                        <button onClick={() => navigate('/docs')} className="group relative overflow-hidden bg-white text-ree-green px-16 py-7 rounded-[2.5rem] font-black text-2xl transition-all hover:scale-110 active:scale-95 shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
                            <span className="relative z-10 tracking-widest uppercase">Start Building</span>
                            <div className="absolute inset-0 bg-ree-light translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div >
    )
}
export default Home
