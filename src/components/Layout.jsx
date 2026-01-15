import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans selection:bg-ree-green selection:text-white">
            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center group">
                        <motion.img
                            src={logo}
                            alt="Ree-fond"
                            className="h-10 w-auto group-hover:rotate-12 transition-transform"
                        />
                        <span className="ml-3 text-2xl font-black text-ree-green tracking-tight">Ree-fond</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-10">
                        {[
                            { label: 'Infrastructure', path: '/' },
                            { label: 'Tax Reality', path: '/problems' },
                            { label: 'API Docs', path: '/docs' },
                            { label: 'About Us', path: '/about' }
                        ].map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-[15px] font-bold tracking-widest uppercase transition-all ${location.pathname === link.path ? 'text-ree-green underline decoration-2 underline-offset-8' : 'text-gray-500 hover:text-ree-green'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-ree-green text-white px-8 py-3 rounded-full font-bold hover:bg-ree-light transition-all shadow-xl hover:shadow-ree-green/20 hover:-translate-y-0.5"
                        >
                            Early Access
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="flex-grow pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-3xl font-black text-white mb-8">Ree-fond</div>
                    <p className="text-center text-lg max-w-xl mb-12 font-medium opacity-60">
                        Building Nigeria's tax future through private infrastructure layer — Earn trust, automate later.
                    </p>
                    <div className="w-full h-px bg-white/5 mb-12" />
                    <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6 text-sm font-bold tracking-widest uppercase">
                        <div>© {new Date().getFullYear()} Ree-fond Tech. Private API Layer.</div>
                        <div className="flex gap-10">
                            <span>NDPR Compliant</span>
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                        </div>
                    </div>
                    <p className="mt-12 text-xs opacity-30 text-center max-w-2xl font-medium italic">
                        Disclaimer: Ree-fond is a private tax technology infrastructure layer and is not currently affiliated with any government agency or tax authority in Nigeria.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
