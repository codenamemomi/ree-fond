import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        window.scrollTo(0, 0)
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false)
        }
    }, [location.pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const links = [
        { label: 'Infrastructure', path: '/' },
        { label: 'Tax Reality', path: '/problems' },
        { label: 'API Docs', path: '/docs' },
        { label: 'About Us', path: '/about' }
    ]

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans selection:bg-ree-green selection:text-white">
            {/* Navbar */}
            <nav className={`fixed w-full transition-all duration-700 ${isMobileMenuOpen ? 'z-[130] bg-transparent py-8' : isScrolled ? 'z-50 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] py-4' : 'z-50 bg-transparent py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <Link to="/" className="flex items-center group z-[120] relative">
                        <motion.div whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                            <img
                                src={logo}
                                alt="Ree-fond"
                                className="h-12 w-auto"
                            />
                        </motion.div>
                        <span className={`ml-4 text-2xl font-black tracking-tighter transition-colors ${isMobileMenuOpen ? 'text-white' : 'text-ree-green'}`}>Ree-fond</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-12">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative group py-2"
                            >
                                <span className={`text-[11px] font-black tracking-[0.3em] uppercase transition-all ${location.pathname === link.path ? 'text-ree-green' : 'text-slate-500 group-hover:text-ree-green'}`}>
                                    {link.label}
                                </span>
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-1 bg-ree-green rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="group relative overflow-hidden bg-ree-green text-white px-10 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-ree-green/20"
                        >
                            <span className="relative z-10">Early Access</span>
                            <div className="absolute inset-0 bg-ree-light translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className={`md:hidden z-[120] relative w-14 h-12 flex items-center justify-center rounded-2xl border transition-all ${isMobileMenuOpen ? 'bg-transparent border-white/20' : 'bg-slate-50 border-slate-100 shadow-sm'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 h-4 flex flex-col justify-between pointer-events-none">
                            <span className={`w-full h-0.5 transform transition-all duration-300 ${isMobileMenuOpen ? 'bg-white rotate-45 translate-y-[7px]' : 'bg-slate-900'}`} />
                            <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`w-full h-0.5 transform transition-all duration-300 ${isMobileMenuOpen ? 'bg-white -rotate-45 -translate-y-[7px]' : 'bg-slate-900'}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Overlay - Moved outside nav for proper z-index stacking */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-gray-900 z-[100] flex flex-col items-center justify-center space-y-6"
                    >

                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-xl font-black tracking-widest uppercase ${location.pathname === link.path ? 'text-ree-green' : 'text-white/60'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-ree-green text-white px-8 py-3 rounded-full font-bold shadow-2xl text-base mt-4"
                        >
                            Get Early Access
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-grow pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative bg-slate-950 text-slate-400 py-32 md:py-48 px-6 overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-ree-green/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter italic">Ree-fond.</div>
                        <p className="text-lg md:text-2xl max-w-2xl mb-20 font-medium opacity-60 leading-relaxed">
                            Building Nigeria's tax future through private infrastructure layer — Earn trust, <br /><span className="text-ree-green italic">automate later.</span>
                        </p>
                    </motion.div>

                    <div className="w-full h-px bg-white/5 mb-16" />

                    <div className="flex flex-col md:flex-row justify-between w-full items-center gap-12 font-black text-[10px] uppercase tracking-[0.4em]">
                        <div className="opacity-40 italic">© {new Date().getFullYear()} Ree-fond Tech. Global Infrastructure Layer.</div>
                        <div className="flex flex-wrap justify-center gap-12">
                            <a href="#" className="hover:text-ree-green transition-colors">NDPR Compliant</a>
                            <a href="#" className="hover:text-ree-green transition-colors">Privacy</a>
                            <a href="#" className="hover:text-ree-green transition-colors">Terms</a>
                            <a href="#" className="hover:text-ree-green transition-colors">Lagos, NG</a>
                        </div>
                    </div>

                    <p className="mt-20 text-[10px] opacity-20 max-w-3xl font-bold tracking-widest leading-loose">
                        DISCLAIMER: REE-FOND IS A PRIVATE TAX TECHNOLOGY INFRASTRUCTURE LAYER AND IS NOT CURRENTLY AFFILIATED WITH ANY GOVERNMENT AGENCY OR TAX AUTHORITY IN NIGERIA.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
