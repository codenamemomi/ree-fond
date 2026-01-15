import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
}

const About = () => {
    return (
        <div className="bg-white">
            {/* Vision Hero */}
            <section className="py-32 bg-gray-50 border-b border-gray-100">
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
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-3xl font-black text-ree-gray mb-8 uppercase tracking-widest">Our Thesis</h2>
                        <div className="space-y-8 text-lg font-medium text-gray-500 leading-relaxed">
                            <p>
                                Nigeria’s tax-to-GDP ratio is ~11%. The global average is ~20%. This gap isn't just about willingness to pay—it's about the <span className="text-ree-gray font-bold">frictional cost of compliance</span>.
                            </p>
                            <p>
                                Governments care about revenue visibility, not buzzwords. By building the infrastructure layer now, we earn the trust required to eventually become the official government integration layer.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { t: 'Be Early', d: 'Earn trust long before official automation is mandated.' },
                            { t: 'Be Precise', d: 'Standardize filing history and compliance timelines.' },
                            { t: 'Be Resilient', d: 'Private infrastructure today, government partner tomorrow.' },
                            { t: 'Be Trusted', d: 'Secure, NDPR-compliant data handling at every layer.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <h4 className="text-xl font-bold text-ree-green mb-4">{item.t}</h4>
                                <p className="text-sm font-medium text-gray-500">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Values */}
            <section className="py-32 bg-ree-green text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight">Earn Trust. Automate Later.</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <div className="text-ree-light font-black text-6xl mb-6">#1</div>
                            <h3 className="text-2xl font-bold mb-4">Infrastructure First</h3>
                            <p className="opacity-70 font-medium">We focus on the underlying data protocols before building the flashy interfaces.</p>
                        </div>
                        <div>
                            <div className="text-ree-light font-black text-6xl mb-6">#2</div>
                            <h3 className="text-2xl font-bold mb-4">Zero-Day Audit</h3>
                            <p className="opacity-70 font-medium">Every filing, every status, every refund is tracked with immutable audit trails.</p>
                        </div>
                        <div>
                            <div className="text-ree-light font-black text-6xl mb-6">#3</div>
                            <h3 className="text-2xl font-bold mb-4">Inevitable Scale</h3>
                            <p className="opacity-70 font-medium">Our growth is tied to the inevitable digitization of Nigeria's fiscal ecosystem.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
