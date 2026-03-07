import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Database, Share2, UserCheck, Bell, Mail } from 'lucide-react'

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Introduction",
            icon: Shield,
            content: "Welcome to Ree-fond. We are committed to protecting your personal data and your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our tax infrastructure services. Our practices align with the Nigeria Data Protection Regulation (NDPR) and international best practices."
        },
        {
            title: "2. Data We Collect",
            icon: Eye,
            content: "We collect information that you provide directly to us, as well as data generated during your use of our services. This includes:",
            list: [
                "Personal Identifiers: Name, email address, phone number, and organization details.",
                "Government Identifiers: Tax Identification Numbers (TIN), BVN, and related identity documents (where applicable).",
                "Operational Data: Tax filing history, refund claims, compliance records, and financial assessment data.",
                "Technical Data: IP addresses, browser type, and usage patterns via cookies and sessions."
            ]
        },
        {
            title: "3. How We Use Your Data",
            icon: UserCheck,
            content: "Your data is used to provide and improve our infrastructure services, including:",
            list: [
                "Processing early access requests and onboarding.",
                "Standardizing and managing tax revenue workflows.",
                "Generating compliance intelligence and risk scoring.",
                "Ensuring an immutable audit trail for regulatory transparency.",
                "Communicating updates and technical notifications."
            ]
        },
        {
            title: "4. Storage & Security",
            icon: Lock,
            content: "We implement robust technical and organizational measures to protect your data. Your information is stored in secured database environments with encryption at rest and in transit. As a 'system of record,' we prioritize data integrity and prevent unauthorized access through strict identity and access management (IAM) protocols."
        },
        {
            title: "5. Third-Party Services",
            icon: Share2,
            content: "We may use trusted third-party services to facilitate our operations. These include Cloud Infrastructure Providers (for hosting and storage) and Analytics Providers (to understand site usage). We do not sell your personal data to third parties.",
            list: [
                "Hosting/Deployment: Vercel",
                "Authentication: Google OAuth (optional)",
                "Database/Infrastructure: Private cloud environments"
            ]
        },
        {
            title: "6. Your Rights",
            icon: Database,
            content: "You have certain rights regarding your personal data, including:",
            list: [
                "The right to access and receive a copy of your data.",
                "The right to request correction of inaccurate data.",
                "The right to request deletion of your data (subject to regulatory retention requirements).",
                "The right to data portability."
            ]
        },
        {
            title: "7. Cookies & Tracking",
            icon: FileText,
            content: "We use cookies to improve your experience and track your consent preferences. You can manage your cookie preferences through our on-site cookie consent banner or your browser settings."
        },
        {
            title: "8. Changes & Contact",
            icon: Bell,
            content: "We may update this policy from time to time. Significant changes will be notified via our platform. If you have any questions about this policy, please contact us at:",
            contact: "hello@ree-fond.com"
        }
    ]

    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 italic">
                            Privacy <span className="text-ree-green">Policy.</span>
                        </h1>
                        <p className="text-lg text-slate-500 font-medium">
                            Last updated: March 7, 2026. <br />
                            How Ree-fond handles, protects, and respects your regulatory data.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {sections.map((section, index) => (
                            <motion.section
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-12 md:pl-20"
                            >
                                <div className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-ree-green border border-slate-100 shadow-sm">
                                    <section.icon className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase text-xs md:text-sm tracking-[0.3em] text-ree-light">
                                    {section.title}
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    {section.content}
                                </p>
                                {section.list && (
                                    <ul className="space-y-4">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 text-slate-600 font-medium">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-ree-green shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {section.contact && (
                                    <div className="mt-8">
                                        <a
                                            href={`mailto:${section.contact}`}
                                            className="inline-flex items-center gap-2 text-ree-green font-black text-lg underline underline-offset-8 decoration-2"
                                        >
                                            <Mail className="w-5 h-5" />
                                            {section.contact}
                                        </a>
                                    </div>
                                )}
                            </motion.section>
                        ))}
                    </div>

                    <div className="mt-24 pt-16 border-t border-slate-100 text-center">
                        <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.4em]">
                            © 2026 Ree-fond Tech. Regulatory & Financial Infrastructure.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
