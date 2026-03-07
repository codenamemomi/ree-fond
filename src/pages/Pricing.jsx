import { motion } from 'framer-motion'
import { Check, Zap, Shield, Crown, Building2, Rocket, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "Free",
            target: "Small startups, developers testing API",
            icon: Rocket,
            color: "text-slate-500",
            bg: "bg-slate-50",
            border: "border-slate-100",
            buttonText: "Get Started Free",
            includes: [
                "1 organization",
                "2 users",
                "50 taxpayers",
                "50 filings / month",
                "1 active refund case",
                "Basic compliance score",
                "API sandbox access"
            ],
            usage: "Free tier = distribution engine. Not for revenue."
        },
        {
            name: "Compliance Starter",
            price: "₦25k-40k",
            period: "per month",
            target: "Small businesses, payroll startups",
            icon: Zap,
            color: "text-emerald-500",
            bg: "bg-emerald-50/50",
            border: "border-emerald-100",
            buttonText: "Start Basic Plan",
            includes: [
                "1 organization",
                "5 users",
                "1,000 taxpayers",
                "Unlimited filings",
                "Refund case tracking",
                "Compliance scoring",
                "Document storage & Audit trail",
                "Limited API access"
            ],
            usage: [
                "Extra taxpayers: ₦10 / record",
                "Extra storage: ₦3,000 / month"
            ]
        },
        {
            name: "Compliance Pro",
            price: "₦120k-200k",
            period: "per month",
            target: "Accounting firms, payroll platforms",
            highlight: true,
            icon: Shield,
            color: "text-white",
            bg: "bg-slate-900",
            border: "border-slate-800",
            buttonText: "Scale with Pro",
            includes: [
                "3 organizations",
                "20 users",
                "10,000 taxpayers",
                "Unlimited filings & Refund cases",
                "Compliance analytics dashboard",
                "Automated compliance alerts",
                "Advanced document vault",
                "Full API integration"
            ],
            usage: [
                "API requests: ₦2 – ₦5 / request",
                "Bulk ingestion: ₦2,000 / upload"
            ]
        },
        {
            name: "Platform",
            price: "₦500k-1.2M",
            period: "per month",
            target: "Fintechs, large payroll providers",
            icon: Crown,
            color: "text-amber-500",
            bg: "bg-amber-50/50",
            border: "border-amber-100",
            buttonText: "Enter the Platform",
            includes: [
                "Unlimited organizations",
                "Unlimited users",
                "Unlimited taxpayers",
                "Full API access & Webhooks",
                "White-label compliance modules",
                "Advanced compliance engine",
                "Priority 24/7 support"
            ],
            usage: [
                "API usage: ₦1 – ₦3 / request",
                "Refund case processing: ₦500 – ₦1,000",
                "Compliance execution: ₦100 / calc"
            ]
        },
        {
            name: "Government",
            price: "Custom",
            period: "yearly contracts",
            target: "Large enterprises, agencies",
            icon: Building2,
            color: "text-blue-500",
            bg: "bg-blue-50/50",
            border: "border-blue-100",
            buttonText: "Contact Infrastructure",
            includes: [
                "Dedicated infrastructure",
                "Custom integrations",
                "State revenue dashboards",
                "Compliance intelligence (National)",
                "Regulatory analytics",
                "SLA uptime guarantees",
                "Dedicated account manager"
            ],
            usage: "Custom contracts range from ₦5M – ₦50M yearly."
        }
    ]

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 px-6 overflow-hidden">
            <div className="max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 italic">
                        Infrastructure <span className="text-ree-green">Pricing.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto">
                        Tiered access to Nigeria's tax infrastructure layer. Built for developers, startups, <br className="hidden md:block" /> and national institutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-[2.5rem] border ${plan.border} ${plan.bg} transition-all hover:shadow-2xl hover:-translate-y-2 h-full`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-ree-green text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-ree-green/20">
                                    Most Scalable
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-white/10 text-white' : 'bg-white shadow-sm ' + plan.color}`}>
                                    <plan.icon className="w-8 h-8" />
                                </div>
                                <h3 className={`text-2xl font-black tracking-tight mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-xs font-bold leading-relaxed mb-6 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                                    {plan.target}
                                </p>
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-3xl font-black tracking-tighter ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                                    {plan.period && <span className={`text-xs font-bold opacity-40 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.period}</span>}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.includes.map((feature, i) => (
                                    <li key={i} className={`flex items-start gap-3 text-[13px] font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-ree-green' : 'text-emerald-500'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/early-access"
                                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all text-center
                                    ${plan.highlight
                                        ? 'bg-ree-green text-white hover:bg-ree-light shadow-xl shadow-ree-green/20'
                                        : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm'
                                    }`}
                            >
                                {plan.buttonText}
                            </Link>

                            <div className={`mt-8 pt-8 border-t border-dashed ${plan.highlight ? 'border-white/10' : 'border-slate-200'}`}>
                                <h4 className={`text-[10px] font-black uppercase tracking-widest mb-4 ${plan.highlight ? 'text-ree-green' : 'text-slate-400'}`}>
                                    Usage Pricing
                                </h4>
                                {Array.isArray(plan.usage) ? (
                                    <ul className="space-y-2">
                                        {plan.usage.map((u, i) => (
                                            <li key={i} className={`text-[11px] font-bold ${plan.highlight ? 'text-white/60' : 'text-slate-500'}`}>
                                                {u}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className={`text-[11px] font-bold italic ${plan.highlight ? 'text-white/40' : 'text-slate-400'}`}>
                                        {plan.usage}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 p-12 md:p-20 bg-slate-50 rounded-[4rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">Need custom <span className="text-blue-500">infrastructure?</span></h2>
                        <p className="text-lg text-slate-500 font-medium">For national payroll platforms, state government agencies, and organizations requiring dedicated environments and custom regulatory dashboard integrations.</p>
                    </div>
                    <Link
                        to="/contact"
                        className="group flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-[2.5rem] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl"
                    >
                        Contact Enterprise
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default Pricing
