import { motion } from 'framer-motion'
import { RocketIcon, TargetIcon, BuildingIcon, LockIcon } from '../components/icons/IconComponents'

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
    return (
        <div className="bg-white">
            {/* Vision Hero */}
            <section className="py-16 md:py-32 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-10 leading-none">
                            Infrastructure <br /><span className="text-ree-green">Before Innovation.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                            We aren't a tax app. We are the plumbing. Ree-fond is building the standardized data layer that will power every Nigerian payroll, accounting firm, and government digital unit.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Vision Section */}
            <section className="py-16 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <h2 className="text-3xl font-black text-ree-gray mb-8 uppercase tracking-[0.3em]">Our Thesis</h2>
                        <div className="space-y-8 text-xl font-medium text-gray-500 leading-relaxed">
                            <p>
                                Nigeria’s tax-to-GDP ratio is ~11%. The global average is ~20%. This gap isn't just about willingness to pay—it's about the <span className="text-ree-gray font-bold decoration-ree-green/30 decoration-thickness-4 underline underline-offset-8">frictional cost of compliance</span>.
                            </p>
                            <p>
                                The <strong>2026 Tax Regime</strong> will only widen this gap for those without structural data. By building the infrastructure layer now, we earn the trust required to eventually become the official government integration layer.
                            </p>
                            <div className="pt-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-ree-green/10 text-ree-green text-xs font-black uppercase tracking-widest border border-ree-green/20">2026 Vision Ready</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-shadow"
                            >
                                <div className="text-ree-green mb-4">
                                    <item.Icon className="w-12 h-12" />
                                </div>
                                <h4 className="text-xl font-black text-ree-green mb-4">{item.t}</h4>
                                <p className="text-sm font-bold text-gray-500 leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Corporate Values */}
            <section className="py-16 md:py-32 bg-ree-green text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight">Earn Trust. Automate Later.</h2>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-12"
                    >
                        {[
                            { id: '#1', t: 'Infrastructure First', d: 'We focus on the underlying data protocols before building the flashy interfaces.' },
                            { id: '#2', t: 'Zero-Day Audit', d: 'Every filing, every status, every refund is tracked with immutable audit trails.' },
                            { id: '#3', t: 'Inevitable Scale', d: 'Our growth is tied to the inevitable digitization of Nigeria\'s fiscal ecosystem.' }
                        ].map((val, i) => (
                            <motion.div variants={fadeInUp} key={i}>
                                <div className="text-ree-light font-black text-7xl mb-6 opacity-40">{val.id}</div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight">{val.t}</h3>
                                <p className="opacity-70 font-medium leading-relaxed">{val.d}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About
