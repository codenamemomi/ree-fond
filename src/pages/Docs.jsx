import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { apiData, guides } from '../data/apiData'

const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
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
                    highlightedLine = (
                        <span key={i} className="block group relative">
                            <span className="opacity-40">{line.substring(0, line.indexOf(h))}</span>
                            <span className="text-ree-light font-bold bg-ree-light/10 px-1 rounded">{h}</span>
                            <span className="opacity-40">{line.substring(line.indexOf(h) + h.length)}</span>
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[8px] font-black bg-ree-green text-white px-1.5 py-0.5 rounded uppercase tracking-tighter scale-0 group-hover:scale-100 transition-transform origin-right">2026 Ready</span>
                        </span>
                    );
                }
            });

            if (typeof highlightedLine === 'string') {
                return <div key={i} className="opacity-70">{line}</div>;
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
                <pre className="text-xs font-mono leading-relaxed">
                    {renderCode(code)}
                </pre>
            </div>
        </div>
    );
}

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

                {section.code && (
                    <CodeBlock label={section.code.label} code={section.code.snippet} />
                )}
            </motion.div>
        ))}
    </motion.div>
)

const Docs = () => {
    const [activeTab, setActiveTab] = useState('Authentication')
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
            <section className="bg-white pt-32 pb-16 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6">API <span className="text-ree-green">Documentation</span></h1>
                        <p className="text-xl text-gray-500 font-medium max-w-2xl mb-12 italic">
                            Base URL: <code className="bg-gray-100 px-2 py-1 rounded text-ree-green">/api/v1</code>
                        </p>

                        <div className="relative max-w-xl">
                            <input
                                type="text"
                                placeholder="Search endpoints, paths, or actions..."
                                className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-ree-green/20 focus:border-ree-green outline-none transition-all shadow-sm font-medium"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Tabs */}
                    <aside className="w-full lg:w-64 shrink-0 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-6 lg:mx-0 px-6 lg:px-0">
                        <div className="flex lg:block gap-4 lg:gap-2 lg:sticky lg:top-32 min-w-max lg:min-w-0">
                            {/* Guides Section */}
                            <h3 className="hidden lg:block text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 px-4">Guides</h3>
                            <button
                                onClick={() => setActiveTab('authentication')}
                                className={`relative w-auto lg:w-full text-left px-6 lg:px-4 py-2 lg:py-3 rounded-full lg:rounded-xl font-bold transition-all text-sm flex items-center justify-between gap-3 lg:gap-0 group whitespace-nowrap ${activeTab === 'authentication'
                                    ? 'text-white'
                                    : 'text-gray-500 hover:bg-white hover:text-ree-gray'
                                    }`}
                            >
                                {activeTab === 'authentication' && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-ree-green rounded-full lg:rounded-xl shadow-lg shadow-ree-green/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">Authentication</span>
                                <span className="relative z-10 text-[10px] bg-ree-light/10 text-ree-light px-1.5 py-0.5 rounded">NEW</span>
                            </button>

                            <div className="hidden lg:block h-8" /> {/* Spacer */}

                            <h3 className="hidden lg:block text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 px-4">References</h3>
                            {apiData.map((cat) => (
                                <button
                                    key={cat.category}
                                    onClick={() => setActiveTab(cat.category)}
                                    className={`relative w-auto lg:w-full text-left px-6 lg:px-4 py-2 lg:py-3 rounded-full lg:rounded-xl font-bold transition-all text-sm flex items-center justify-between gap-3 lg:gap-0 group whitespace-nowrap ${activeTab === cat.category
                                        ? 'text-white'
                                        : 'text-gray-500 hover:bg-white hover:text-ree-gray'
                                        }`}
                                >
                                    {activeTab === cat.category && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-ree-green rounded-full lg:rounded-xl shadow-lg shadow-ree-green/20"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat.category}</span>
                                    <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded ${activeTab === cat.category ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                                        {cat.endpoints.length}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Docs Content */}
                    <div className="flex-1 space-y-16">
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
                                                        className={`bg-white rounded-2xl border transition-all overflow-hidden ${expandedEndpoints[`${endpoint.method}:${endpoint.path}`] ? 'shadow-lg border-ree-green/30 ring-1 ring-ree-green/20' : 'border-gray-100 shadow-sm hover:shadow-md'
                                                            }`}
                                                    >
                                                        <div
                                                            className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                                                            onClick={() => toggleEndpoint(endpoint.method, endpoint.path)}
                                                        >
                                                            <div className="flex items-center gap-4">
                                                                <MethodBadge method={endpoint.method} />
                                                                <code className="text-sm font-black text-gray-800 tracking-tight">
                                                                    {endpoint.path}
                                                                </code>
                                                            </div>
                                                            <div className="text-gray-500 font-medium text-sm">
                                                                {endpoint.desc}
                                                            </div>
                                                            <div className={`text-gray-400 transition-transform ${expandedEndpoints[`${endpoint.method}:${endpoint.path}`] ? 'rotate-180' : ''}`}>
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                            </div>
                                                        </div>

                                                        <AnimatePresence>
                                                            {expandedEndpoints[`${endpoint.method}:${endpoint.path}`] && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="bg-gray-50 px-6 pb-6 border-t border-gray-100"
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
            <section className="py-32 bg-ree-gray text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to Build?</h2>
                    <p className="text-lg text-gray-400 mb-12 font-medium">
                        Join our early adopter fleet and start integrating Nigeria's tax infrastructure into your platform today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-bold">
                        <button className="bg-ree-green px-10 py-4 rounded-xl hover:bg-ree-light transition-all shadow-xl">Request Sandbox Keys</button>
                        <button className="text-gray-400 hover:text-white transition-all underline decoration-2 underline-offset-4 tracking-[0.1em] uppercase text-sm">Join Developer Discord</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Docs
