import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { apiData, guides } from '../data/apiData'
import BackgroundDecorations from "../components/BackgroundDecorations"

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
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const MethodBadge = ({ method }) => {
    const colors = {
        GET: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
        POST: 'bg-green-500/10 text-green-500 border-green-500/20',
        PUT: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        DELETE: 'bg-red-500/10 text-red-500 border-red-500/20'
    }
    return (
        <span className={`px-2 py-0.5 rounded text-[10px] font-black tracking-tighter border uppercase ${colors[method] || 'bg-gray-500/10 text-gray-500 border-gray-500/20'}`}>
            {method}
        </span>
    )
}

const CodeBlock = ({ label, code }) => {
    const renderCode = (text) => {
        if (!text) return null;

        // Highlight 2026 specific fields
        const highlights = ['bvn', 'nin', 'residency_status', 'worldwide_income_flag', 'DEV_LEVY'];

        const lines = text.split('\n');
        return lines.map((line, i) => {
            let highlightedLine = line;
            highlights.forEach(h => {
                if (line.includes(h)) {
                    const parts = line.split(h);
                    highlightedLine = (
                        <span key={i} className="block group relative">
                            <span className="text-white/40">{parts[0]}</span>
                            <span className="text-ree-light font-bold bg-ree-light/10 px-1 rounded shadow-sm border border-ree-light/20">{h}</span>
                            <span className="text-white/40">{parts.slice(1).join(h)}</span>
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[8px] font-black bg-ree-green text-white px-1.5 py-0.5 rounded uppercase tracking-tighter scale-0 group-hover:scale-100 transition-all duration-200 origin-right shadow-lg">2026 Ready</span>
                        </span>
                    );
                }
            });

            if (typeof highlightedLine === 'string') {
                return <div key={i} className="text-white/70">{line || ' '}</div>;
            }
            return highlightedLine;
        });
    };

    return (
        <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</div>
                {code.includes('2026') || code.includes('bvn') || code.includes('nin') ? (
                    <div className="text-[8px] font-black text-ree-green bg-ree-green/10 px-2 py-0.5 rounded-full uppercase tracking-widest border border-ree-green/20">Includes 2026 Ready Fields</div>
                ) : null}
            </div>
            <div className="bg-gray-950 rounded-lg p-4 md:p-6 overflow-x-auto border border-white/5 shadow-inner">
                <pre className="text-xs font-mono leading-relaxed text-gray-300">
                    {renderCode(code)}
                </pre>
            </div>
        </div>
    );
}

const ResourceTable = ({ fields }) => (
    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/40 backdrop-blur-xl shadow-2xl transition-all hover:bg-white/60 group/table">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-900/5 border-b border-black/5">
                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Field</th>
                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Type</th>
                        <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Description</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black/5 font-medium">
                    {fields.map((field, i) => (
                        <tr key={i} className="hover:bg-ree-green/[0.02] transition-colors group">
                            <td className="px-6 py-5">
                                <code className="text-sm font-black text-gray-800 bg-white/50 px-2.5 py-1 rounded-lg border border-black/5 group-hover:border-ree-green/20 group-hover:text-ree-green transition-all shadow-sm">{field.field}</code>
                            </td>
                            <td className="px-6 py-5">
                                <span className="text-xs font-black text-ree-light uppercase tracking-tight bg-ree-light/5 px-2 py-0.5 rounded-full border border-ree-light/10">{field.type}</span>
                            </td>
                            <td className="px-6 py-5 text-sm text-slate-600 leading-relaxed italic group-hover:text-slate-900 transition-colors">
                                {field.desc}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)

const GuideView = ({ guide }) => (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="space-y-12 max-w-4xl"
    >
        <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-4">{guide.title}</h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">{guide.description}</p>
        </motion.div>

        {guide.sections.map((section, i) => (
            <motion.div key={i} variants={fadeInUp} className="space-y-6">
                <h3 className="text-xl font-black text-ree-gray border-l-4 border-ree-green pl-4">{section.heading}</h3>

                {section.content && (
                    <p className="text-gray-600 leading-relaxed font-medium">
                        {section.content.split('`').map((part, j) =>
                            j % 2 === 1 ? <code key={j} className="bg-gray-100 text-ree-gray px-1.5 py-0.5 rounded text-sm font-black">{part}</code> : part
                        )}
                    </p>
                )}

                {section.badges && (
                    <div className="flex gap-2">
                        {section.badges.map(badge => (
                            <span key={badge} className="bg-ree-green/10 text-ree-green px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                                {badge}
                            </span>
                        ))}
                    </div>
                )}

                {section.roles && (
                    <div className="grid sm:grid-cols-2 gap-4">
                        {section.roles.map(role => (
                            <div key={role.name} className="bg-white border border-gray-200 p-4 rounded-xl">
                                <div className="font-black text-xs uppercase tracking-widest text-ree-green mb-2">{role.name}</div>
                                <div className="text-sm text-gray-500 font-medium">{role.desc}</div>
                            </div>
                        ))}
                    </div>
                )}

                {section.list && (
                    <ul className="space-y-3">
                        {section.list.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                                <span className="text-ree-green mt-1">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {section.table && (
                    <ResourceTable fields={section.table} />
                )}

                {section.code && (
                    <CodeBlock label={section.code.label} code={section.code.snippet} />
                )}
            </motion.div>
        ))}
    </motion.div>
)

const Docs = () => {
    const [activeTab, setActiveTab] = useState('overview')
    const [search, setSearch] = useState('')
    const [expandedEndpoints, setExpandedEndpoints] = useState({})

    const toggleEndpoint = (method, path) => {
        const key = `${method}:${path}`
        setExpandedEndpoints(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }

    const filteredData = apiData.map(cat => ({
        ...cat,
        endpoints: cat.endpoints.filter(e =>
            e.path.toLowerCase().includes(search.toLowerCase()) ||
            e.desc.toLowerCase().includes(search.toLowerCase())
        )
    })).filter(cat => cat.endpoints.length > 0)

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <section className="relative min-h-[40vh] flex items-center pt-20 lg:pt-24 pb-12 lg:pb-16 overflow-hidden bg-slate-950">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/home/codenamemomi/.gemini/antigravity/brain/9c304481-194a-4b95-b414-3abb02b58d6f/api_docs_header_bg_1768532446734.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-[#f8fafc]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                        </motion.div>

                        <h1 className="text-4xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-10 leading-[0.8] italic">
                            Unleash the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ree-green via-ree-light to-emerald-400">Power of Tax.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mb-12 leading-tight">
                            Integrate Nigeria's most advanced tax infrastructure.
                            <span className="block mt-4 text-xs font-mono opacity-50">Base URL: <code className="text-ree-green">/api/v1</code></span>
                        </p>

                        <div className="relative max-w-2xl group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-ree-green to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search endpoints, models, or guides..."
                                    className="w-full pl-8 pr-16 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 backdrop-blur-2xl focus:ring-2 focus:ring-ree-green/30 focus:border-ree-green/50 outline-none transition-all shadow-2xl font-medium text-lg lg:text-xl"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-ree-green transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="relative z-10 -mt-8 lg:-mt-12 pb-20 lg:pb-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Sidebar Tabs */}
                    <aside className="w-full lg:w-72 shrink-0">
                        <div className="flex flex-col gap-1 lg:gap-1.5 lg:sticky lg:top-32 p-1.5 rounded-[2.5rem] bg-white/10 backdrop-blur-3xl border border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] lg:overflow-visible no-scrollbar">
                            {/* Guides Section */}
                            <h3 className="hidden lg:block text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-1 px-6 mt-4 opacity-50 italic">Guides</h3>
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`relative w-full text-left px-6 py-2.5 rounded-[2rem] font-black transition-all text-xs lg:text-[10px] uppercase tracking-widest flex items-center justify-between group whitespace-nowrap ${activeTab === 'overview'
                                    ? 'text-white'
                                    : 'text-slate-600 hover:text-ree-green'
                                    }`}
                            >
                                {activeTab === 'overview' && (
                                    <motion.div
                                        layoutId="activeTabDoc"
                                        className="absolute inset-0 bg-ree-green rounded-[2rem] shadow-lg shadow-ree-green/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">Overview</span>
                            </button>

                            <button
                                onClick={() => setActiveTab('authentication')}
                                className={`relative w-full text-left px-6 py-2.5 rounded-[2rem] font-black transition-all text-xs lg:text-[10px] uppercase tracking-widest flex items-center justify-between group whitespace-nowrap ${activeTab === 'authentication'
                                    ? 'text-white'
                                    : 'text-slate-600 hover:text-ree-green'
                                    }`}
                            >
                                {activeTab === 'authentication' && (
                                    <motion.div
                                        layoutId="activeTabDoc"
                                        className="absolute inset-0 bg-gradient-to-r from-ree-green to-emerald-500 rounded-[2rem] shadow-lg shadow-ree-green/30"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">Authentication</span>
                            </button>

                            <button
                                onClick={() => setActiveTab('schematics')}
                                className={`relative w-full text-left px-6 py-2.5 rounded-[2rem] font-black transition-all text-xs lg:text-[10px] uppercase tracking-widest flex items-center justify-between group whitespace-nowrap ${activeTab === 'schematics'
                                    ? 'text-white'
                                    : 'text-slate-600 hover:text-ree-green'
                                    }`}
                            >
                                {activeTab === 'schematics' && (
                                    <motion.div
                                        layoutId="activeTabDoc"
                                        className="absolute inset-0 bg-gradient-to-r from-ree-green to-emerald-500 rounded-[2rem] shadow-lg shadow-ree-green/30"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">Schematics</span>
                                <span className={`relative z-10 text-[8px] px-2 py-0.5 rounded-full border transition-colors ${activeTab === 'schematics' ? 'bg-white/20 text-white border-white/20' : 'bg-slate-100 text-slate-400 border-slate-200'}`}>CORE</span>
                            </button>

                            <h3 className="hidden lg:block text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-1 px-6 mt-8 opacity-50 italic">References</h3>
                            {apiData.map((cat) => (
                                <button
                                    key={cat.category}
                                    onClick={() => setActiveTab(cat.category)}
                                    className={`relative w-full text-left px-6 py-2.5 rounded-[2rem] font-black transition-all text-xs lg:text-[10px] uppercase tracking-widest flex items-center justify-between group whitespace-nowrap ${activeTab === cat.category
                                        ? 'text-white'
                                        : 'text-slate-600 hover:text-ree-green'
                                        }`}
                                >
                                    {activeTab === cat.category && (
                                        <motion.div
                                            layoutId="activeTabDoc"
                                            className="absolute inset-0 bg-gradient-to-r from-ree-green to-emerald-500 rounded-[2rem] shadow-lg shadow-ree-green/30"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat.category}</span>
                                    <span className={`relative z-10 text-[8px] px-2 py-0.5 rounded-full border transition-colors ${activeTab === cat.category ? 'bg-white/20 text-white border-white/20' : 'bg-slate-100 text-slate-400 border-slate-200'}`}>
                                        {cat.endpoints.length}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Docs Content */}
                    <div className="flex-1 space-y-10 lg:space-y-16">
                        <AnimatePresence mode="wait">
                            {guides[activeTab] ? (
                                <GuideView key={activeTab} guide={guides[activeTab]} />
                            ) : (
                                <motion.div
                                    key={activeTab + search}
                                    initial="hidden"
                                    animate="visible"
                                    variants={staggerContainer}
                                    className="space-y-8"
                                >
                                    {filteredData.filter(c => search ? true : c.category === activeTab).map((categorySection) => (
                                        <div key={categorySection.category} className="space-y-6">
                                            {search && (
                                                <motion.h2 variants={fadeInUp} className="text-2xl font-black text-ree-gray pb-4 border-b border-gray-100">{categorySection.category}</motion.h2>
                                            )}
                                            <div className="grid gap-6">
                                                {categorySection.endpoints.map((endpoint, i) => (
                                                    <motion.div
                                                        key={i}
                                                        variants={fadeInUp}
                                                        className={`bg-white/60 backdrop-blur-xl rounded-3xl border transition-all overflow-hidden group/card ${expandedEndpoints[`${endpoint.method}:${endpoint.path}`] ? 'shadow-2xl border-ree-green/30 ring-1 ring-ree-green/20 -translate-y-1' : 'border-black/5 shadow-sm hover:shadow-xl hover:border-black/10'
                                                            }`}
                                                    >
                                                        <div
                                                            className="p-6 lg:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                                                            onClick={() => toggleEndpoint(endpoint.method, endpoint.path)}
                                                        >
                                                            <div className="flex flex-col gap-3">
                                                                <div className="flex items-center gap-4">
                                                                    <MethodBadge method={endpoint.method} />
                                                                    <code className="text-base font-black text-gray-900 tracking-tight group-hover/card:text-ree-green transition-colors">
                                                                        {endpoint.path}
                                                                    </code>
                                                                </div>
                                                                <div className="text-slate-500 font-semibold text-sm pl-0 md:pl-16">
                                                                    {endpoint.desc}
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-4">
                                                                <div className={`p-2 rounded-full bg-slate-50 border border-slate-100 text-slate-400 transition-all group-hover/card:bg-ree-green group-hover/card:text-white group-hover/card:border-ree-green ${expandedEndpoints[`${endpoint.method}:${endpoint.path}`] ? 'rotate-180 bg-ree-green text-white border-ree-green' : ''}`}>
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <AnimatePresence>
                                                            {expandedEndpoints[`${endpoint.method}:${endpoint.path}`] && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="bg-slate-900 px-8 pb-8 border-t border-white/5"
                                                                >
                                                                    {endpoint.req && <CodeBlock label="Request Body" code={endpoint.req} />}
                                                                    {endpoint.res && <CodeBlock label="Response Example" code={endpoint.res} />}
                                                                    {!endpoint.req && !endpoint.res && (
                                                                        <div className="mt-4 text-sm text-gray-400 italic">No detailed schema available for this endpoint.</div>
                                                                    )}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Developer CTA */}
            <section className="relative py-24 lg:py-40 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-ree-green/20 to-transparent opacity-30 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">Ready to <span className="text-ree-green">Build?</span></h2>
                        <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
                            Join our fleet of early adopters and start integrating Nigeria's tax infrastructure into your platform today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-black">
                            <button className="relative group overflow-hidden bg-ree-green px-12 py-5 rounded-2xl hover:bg-ree-light transition-all shadow-2xl shadow-ree-green/20">
                                <span className="relative z-10 text-ree-gray">Request Sandbox Keys</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                            <button className="text-slate-300 hover:text-white transition-all underline decoration-2 underline-offset-8 tracking-[0.1em] uppercase text-xs">Join Developer Discord</button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Docs
