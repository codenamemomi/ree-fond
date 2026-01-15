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

const Home = () => {
    const [employees, setEmployees] = useState(50)
    const { scrollYProgress } = useScroll()
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200])

    // Calculation for "Growth Possibility" - Time saved vs tax errors avoided
    const timeSaved = employees * 2 // Average 2 hours per employee saved per month
    const potentialSavings = (employees * 15000 * 0.1).toLocaleString() // Estimating 10% reduction in error costs

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
                <motion.div
                    style={{ y: yParallax }}
                    className="absolute inset-0 z-0 opacity-10"
                >
                    <img src={heroBg} alt="" className="w-full h-full object-cover" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                        <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.9]">
                            The Core <br />
                            <span className="text-ree-green">Infrastructure</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 font-medium">
                            Standardizing Nigeria's tax filing workflows before the mandate even begins.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Growth Section */}
            <section className="py-32 bg-ree-gray text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none italic">
                            Scale Your <br />Tax Operations
                        </h2>
                        <p className="text-xl text-gray-400 font-medium mb-12">
                            See the direct impact of switching to Ree-fond's infrastructure based on your organization's size.
                        </p>

                        <div className="bg-white/5 rounded-[40px] p-10 border border-white/10 shadow-2xl">
                            <label className="block text-sm font-bold uppercase tracking-widest text-ree-green mb-6">NUMBER OF EMPLOYEES: {employees}</label>
                            <input
                                type="range"
                                min="10"
                                max="500"
                                value={employees}
                                onChange={(e) => setEmployees(parseInt(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-ree-green mb-12"
                            />

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-5xl font-black text-ree-light mb-2">{timeSaved}h</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Time Saved / Month</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-white mb-2">₦{potentialSavings}</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Estimated Compliance Savings</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-ree-green/20 blur-[100px] rounded-full" />
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative bg-white p-1 rounded-[40px] shadow-4xl overflow-hidden"
                        >
                            <div className="bg-gray-50 p-12 text-ree-gray h-full">
                                <h4 className="text-2xl font-black mb-6">Growth Trajectory</h4>
                                <div className="space-y-4">
                                    {[
                                        { l: 'Filing Accuracy', v: '99.9%' },
                                        { l: 'Workflow Speed', v: '3.5x' },
                                        { l: 'Audit Readiness', v: 'Instant' }
                                    ].map((x, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100">
                                            <span className="font-bold text-gray-400 uppercase tracking-widest text-xs">{x.l}</span>
                                            <span className="font-black text-ree-green">{x.v}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <p className="text-sm font-medium text-gray-500 italic">
                                        "Infrastructure companies win by being early and trusted. We build the data reliability that governments depend on."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
