import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'
import MegaMenu from './MegaMenu'
import CookieConsent from './CookieConsent'

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeMegaMenu, setActiveMegaMenu] = useState(null)
    const timeoutRef = useRef(null)
    const location = useLocation()
    const [showCookieConsent, setShowCookieConsent] = useState(false)

    useEffect(() => {
        const hasAccepted = sessionStorage.getItem('cookie_consent_accepted')
        if (!hasAccepted) {
            // Delay showing to make it feel more premium
            const timer = setTimeout(() => setShowCookieConsent(true), 2000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAcceptCookies = () => {
        sessionStorage.setItem('cookie_consent_accepted', 'true')
        setShowCookieConsent(false)
    }

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        window.scrollTo(0, 0)
        setActiveMegaMenu(null)
    }, [location.pathname])

    useEffect(() => {
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

    const handleMouseEnter = (item) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        if (item !== 'Pricing') {
            setActiveMegaMenu(item)
        } else {
            setActiveMegaMenu(null)
        }
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMegaMenu(null)
        }, 150)
    }

    const links = [
        { label: 'Products', path: '#', hasDropdown: true },
        { label: 'Solutions', path: '#', hasDropdown: true },
        { label: 'Developers', path: '#', hasDropdown: true },
        { label: 'Resources', path: '#', hasDropdown: true },
        { label: 'Pricing', path: '/early-access', hasDropdown: false }
    ]

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-emerald-500 selection:text-white">
            {/* Navbar */}
            <nav
                className={`fixed w-full transition-all duration-500 ${isMobileMenuOpen
                    ? 'z-[130] bg-white py-6'
                    : isScrolled
                        ? 'z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm'
                        : 'z-50 bg-white py-6 border-b border-transparent'
                    }`}
                onMouseLeave={handleMouseLeave}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative">
                    <Link to="/" className="flex items-center group z-[120] relative">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <img
                                src={logo}
                                alt="Ree-fond"
                                className="h-10 w-auto"
                            />
                        </motion.div>
                        <span className="ml-3 text-xl font-bold tracking-tight text-slate-900">Ree-fond</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {links.map((link) => (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(link.label)}
                            >
                                <Link
                                    to={link.path}
                                    className={`flex items-center gap-1 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${(activeMegaMenu === link.label || location.pathname === link.path)
                                        ? 'text-emerald-600 bg-emerald-50/50'
                                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                                        }`}
                                >
                                    {link.label}
                                    {link.hasDropdown && (
                                        <ChevronDown className={`h-4 w-4 transition-transform ${activeMegaMenu === link.label ? 'rotate-180' : ''}`} />
                                    )}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            to="/early-access"
                            className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/early-access"
                            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* MegaMenu Dropdown */}
                    <AnimatePresence>
                        {activeMegaMenu && (
                            <MegaMenu
                                activeItem={activeMegaMenu}
                                onMouseEnter={() => handleMouseEnter(activeMegaMenu)}
                                onMouseLeave={handleMouseLeave}
                            />
                        )}
                    </AnimatePresence>

                    {/* Mobile Hamburger icon remains similar but adapted to white theme */}
                    <button
                        className="md:hidden z-[120] relative p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between pointer-events-none">
                            <span className={`w-full h-0.5 transform transition-all duration-300 ${isMobileMenuOpen ? 'bg-slate-900 rotate-45 translate-y-[9px]' : 'bg-slate-900'}`} />
                            <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`w-full h-0.5 transform transition-all duration-300 ${isMobileMenuOpen ? 'bg-slate-900 -rotate-45 -translate-y-[9px]' : 'bg-slate-900'}`} />
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
                            to="/early-access"
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
                        <div className="opacity-40 italic">© {new Date().getFullYear()} Ree-fond Tech. Regulatory & Financial Infrastructure.</div>
                        <div className="flex flex-wrap justify-center gap-12">
                            <a href="#" className="hover:text-ree-green transition-colors">NDPR Compliant</a>
                            <a href="#" className="hover:text-ree-green transition-colors">Privacy</a>
                            <a href="#" className="hover:text-ree-green transition-colors">Terms</a>
                            <a href="#" className="hover:text-ree-green transition-colors">Lagos, NG</a>
                        </div>
                    </div>

                    <p className="mt-20 text-[10px] opacity-20 max-w-3xl font-bold tracking-widest leading-loose">
                        DISCLAIMER: REE-FOND IS A PRIVATE INFRASTRUCTURE LAYER FOR REGULATORY AND FINANCIAL OPERATIONS AND IS NOT CURRENTLY AFFILIATED WITH ANY GOVERNMENT AGENCY.
                    </p>
                </div>
            </footer>

            <AnimatePresence>
                {showCookieConsent && (
                    <CookieConsent
                        onAccept={handleAcceptCookies}
                        onDismiss={() => setShowCookieConsent(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}

export default Layout
