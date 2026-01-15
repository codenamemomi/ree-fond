import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const apiData = [
    {
        category: 'Authentication',
        endpoints: [
            { method: 'POST', path: '/api/v1/auth/login', desc: 'User authentication and session creation' },
            { method: 'POST', path: '/api/v1/auth/register', desc: 'Create a new primary user account' },
            { method: 'POST', path: '/api/v1/auth/register-with-organization', desc: 'Register a new user tied to an organization entity' },
            { method: 'GET', path: '/api/v1/auth/me', desc: 'Retrieve profile details for the authenticated user' },
            { method: 'PUT', path: '/api/v1/auth/me', desc: 'Update profile information for the current user' },
            { method: 'POST', path: '/api/v1/auth/change-password', desc: 'Securely update account password' },
            { method: 'POST', path: '/api/v1/auth/verify-email/{token}', desc: 'Validate user email via secure token' },
            { method: 'POST', path: '/api/v1/auth/forgot-password', desc: 'Initiate password recovery workflow' }
        ]
    },
    {
        category: 'Taxpayers',
        endpoints: [
            { method: 'POST', path: '/api/v1/taxpayers', desc: 'Create a new taxpayer record' },
            { method: 'GET', path: '/api/v1/taxpayers', desc: 'List all managed taxpayer profiles' },
            { method: 'GET', path: '/api/v1/taxpayers/{id}', desc: 'Retrieve detailed record for a specific taxpayer' },
            { method: 'PUT', path: '/api/v1/taxpayers/{id}', desc: 'Update specific taxpayer metadata' },
            { method: 'DELETE', path: '/api/v1/taxpayers/{id}', desc: 'Remove a taxpayer record from the infrastructure' },
            { method: 'POST', path: '/api/v1/taxpayers/{id}/verify', desc: 'Validate taxpayer identity against shadow records' },
            { method: 'POST', path: '/api/v1/taxpayers/bulk', desc: 'High-speed ingestion of multiple taxpayer records' },
            { method: 'GET', path: '/api/v1/taxpayers/{id}/filings', desc: 'Retrieve historical filing list for a taxpayer' },
            { method: 'GET', path: '/api/v1/taxpayers/stats/summary', desc: 'Global summary of taxpayer demographics and status' },
            { method: 'GET', path: '/api/v1/taxpayers/search/tin/{tin}', desc: 'Direct lookup by Taxpayer Identification Number' }
        ]
    },
    {
        category: 'Filings',
        endpoints: [
            { method: 'POST', path: '/api/v1/filings', desc: 'Initialize a new tax filing entry' },
            { method: 'GET', path: '/api/v1/filings', desc: 'List all filings across the organization' },
            { method: 'GET', path: '/api/v1/filings/{id}', desc: 'Retrieve specific filing data and status' },
            { method: 'PUT', path: '/api/v1/filings/{id}', desc: 'Modify an unsubmitted filing' },
            { method: 'POST', path: '/api/v1/filings/{id}/submit', desc: 'Lock and submit filing to the shadow processing layer' },
            { method: 'POST', path: '/api/v1/filings/{id}/verify', desc: 'Internal verification of submitted filing accuracy' },
            { method: 'POST', path: '/api/v1/filings/{id}/amendments', desc: 'Create a corrective amendment for an existing filing' },
            { method: 'GET', path: '/api/v1/filings/calendar/events', desc: 'Retrieve upcoming tax deadlines and events' },
            { method: 'GET', path: '/api/v1/filings/upcoming/overdue', desc: 'Alert on overdue or high-priority filings' }
        ]
    },
    {
        category: 'Refunds',
        endpoints: [
            { method: 'POST', path: '/api/v1/refunds', desc: 'Initiate a new refund or adjustment case' },
            { method: 'GET', path: '/api/v1/refunds', desc: 'List all active refund cases' },
            { method: 'GET', path: '/api/v1/refunds/{id}', desc: 'Detailed view of a specific refund case status' },
            { method: 'POST', path: '/api/v1/refunds/{id}/submit', desc: 'Formally submit case for tax office review' },
            { method: 'POST', path: '/api/v1/refunds/{id}/approve', desc: 'Mark refund as approved for disbursement' },
            { method: 'GET', path: '/api/v1/refunds/{id}/timeline', desc: 'Retrieve the high-fidelity audit trail for a case' },
            { method: 'GET', path: '/api/v1/refunds/dashboard/metrics', desc: 'Global analytics for refund processing performance' },
            { method: 'GET', path: '/api/v1/refunds/export/csv', desc: 'Batch export of refund data for external auditing' }
        ]
    },
    {
        category: 'Compliance',
        endpoints: [
            { method: 'GET', path: '/api/v1/compliance/rules', desc: 'List active compliance validation rules' },
            { method: 'POST', path: '/api/v1/compliance/scores/calculate', desc: 'Trigger compliance score calculation for a taxpayer' },
            { method: 'GET', path: '/api/v1/compliance/scores/{id}', desc: 'Retrieve health score and risk assessment' },
            { method: 'GET', path: '/api/v1/compliance/alerts', desc: 'List active compliance alerts and risk flags' },
            { method: 'POST', path: '/api/v1/compliance/alerts/{id}/resolve', desc: 'Acknowledge and resolve a specific alert' },
            { method: 'GET', path: '/api/v1/compliance/health', desc: 'Infrastructure-wide compliance system health' }
        ]
    }
]

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

const Docs = () => {
    const [activeTab, setActiveTab] = useState('Authentication')
    const [search, setSearch] = useState('')

    const filteredData = apiData.map(cat => ({
        ...cat,
        endpoints: cat.endpoints.filter(e =>
            e.path.toLowerCase().includes(search.toLowerCase()) ||
            e.desc.toLowerCase().includes(search.toLowerCase())
        )
    })).filter(cat => cat.endpoints.length > 0)

    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-white pt-32 pb-16 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6">API <span className="text-ree-green">Documentation</span></h1>
                        <p className="text-xl text-gray-500 font-medium max-w-2xl mb-12 italic">
                            Explore the endpoints powering Nigeria's next-gen tax infrastructure layer.
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

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Tabs */}
                    <aside className="lg:w-64 shrink-0">
                        <div className="sticky top-32 space-y-2">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6 px-4">Categories</h3>
                            {apiData.map((cat) => (
                                <button
                                    key={cat.category}
                                    onClick={() => setActiveTab(cat.category)}
                                    className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all text-sm flex items-center justify-between ${activeTab === cat.category
                                            ? 'bg-ree-green text-white shadow-lg shadow-ree-green/20 translate-x-1'
                                            : 'text-gray-500 hover:bg-white hover:text-ree-gray'
                                        }`}
                                >
                                    {cat.category}
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeTab === cat.category ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                        {cat.endpoints.length}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Docs Content */}
                    <div className="flex-1 space-y-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab + search}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                {filteredData.filter(c => search ? true : c.category === activeTab).map((categorySection) => (
                                    <div key={categorySection.category} className="space-y-6">
                                        {search && (
                                            <h2 className="text-2xl font-black text-ree-gray pb-4 border-b border-gray-100">{categorySection.category}</h2>
                                        )}
                                        <div className="grid gap-4">
                                            {categorySection.endpoints.map((endpoint, i) => (
                                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <MethodBadge method={endpoint.method} />
                                                            <code className="text-sm font-black text-gray-800 tracking-tight group-hover:text-ree-green transition-colors">
                                                                {endpoint.path}
                                                            </code>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-ree-light animate-pulse" />
                                                            Beta Access
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                                                        {endpoint.desc}
                                                    </p>
                                                    <div className="mt-6 pt-4 border-t border-gray-50 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-2">
                                                        <div className="flex gap-4">
                                                            <button className="text-[10px] uppercase font-black tracking-widest text-ree-green hover:underline">Get Schema</button>
                                                            <button className="text-[10px] uppercase font-black tracking-widest text-gray-400 hover:underline">Download SDK</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
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
