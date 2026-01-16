import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const EarlyAccess = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        type: 'individual',
        painPoint: ''
    })
    const [status, setStatus] = useState('idle') // idle, submitting, success

    const userTypes = [
        { id: 'individual', label: 'Individual Taxpayer' },
        { id: 'business', label: 'Business / Employer' },
        { id: 'professional', label: 'Tax Professional / Firm' },
        { id: 'partner', label: 'Developer / Partner' }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('submitting')

        // Simulate API call
        setTimeout(() => {
            console.log('Form Submitted:', formData)
            setStatus('success')
        }, 1500)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    if (status === 'success') {
        return (
            <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center bg-gray-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl w-full text-center space-y-8"
                >
                    <div className="mx-auto w-20 h-20 bg-ree-green/10 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-ree-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                        You're on the list.
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Thank you for your interest in Ree-fond. We are building the infrastructure layer for Nigeria's tax future. You will be among the first to know when Phase 1 pilots begin.
                    </p>
                    <div className="pt-8">
                        <Link
                            to="/"
                            className="inline-block bg-ree-green text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-ree-green/20"
                        >
                            Return Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-gray-50">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                            Get Early Access
                        </h1>
                        <p className="text-xl text-gray-600">
                            Ree-fond is currently in private development. <br className="hidden md:block" />
                            Join the waitlist for <span className="font-bold text-ree-green">Phase 1 infrastructure pilots</span>.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ree-green/50 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ree-green/50 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                    placeholder="jane@company.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ree-green/50 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                    placeholder="+234..."
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="organization" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Organization / Business</label>
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    required
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ree-green/50 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                    placeholder="Company Ltd."
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">I am a...</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {userTypes.map(type => (
                                    <label
                                        key={type.id}
                                        className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.type === type.id
                                            ? 'border-ree-green bg-ree-green/5'
                                            : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="type"
                                            value={type.id}
                                            checked={formData.type === type.id}
                                            onChange={handleChange}
                                            className="sr-only"
                                        />
                                        <span className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${formData.type === type.id ? 'border-ree-green' : 'border-gray-300'
                                            }`}>
                                            {formData.type === type.id && <div className="w-2.5 h-2.5 rounded-full bg-ree-green" />}
                                        </span>
                                        <span className={`font-semibold ${formData.type === type.id ? 'text-ree-green' : 'text-gray-600'
                                            }`}>
                                            {type.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="painPoint" className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                                Biggest Tax Challenge <span className="text-gray-400 font-normal lowercase ml-1">(Optional)</span>
                            </label>
                            <textarea
                                id="painPoint"
                                name="painPoint"
                                rows={4}
                                value={formData.painPoint}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ree-green/50 outline-none transition-all font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                                placeholder="E.g. Delayed refunds, manual filing process..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-ree-green text-white py-4 rounded-xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-ree-green/20 disabled:opacity-70 disabled:hover:scale-100"
                        >
                            {status === 'submitting' ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : 'Join the Waiting Queue'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default EarlyAccess
