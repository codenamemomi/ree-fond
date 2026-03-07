import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Home, Info, AlertCircle, BookOpen, Mail, Zap } from 'lucide-react'
import logo from '../assets/logo.png'
import MegaMenu from './MegaMenu'
import CookieConsent from './CookieConsent'

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeMegaMenu, setActiveMegaMenu] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
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

    // Track window width for mobile detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
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
        { label: 'Pricing', path: '/pricing', hasDropdown: false }
    ]

    const mobilePageLinks = [
        { label: 'Home', path: '/', icon: Home, desc: 'Start here' },
        { label: 'About', path: '/about', icon: Info, desc: 'Our mission & story' },
        { label: 'Problems We Solve', path: '/problems', icon: AlertCircle, desc: 'Tax pain points we fix' },
        { label: 'Docs', path: '/docs', icon: BookOpen, desc: 'API & integration guides' },
        { label: 'Early Access', path: '/early-access', icon: Zap, desc: 'Get priority access' },
        { label: 'Contact', path: '/contact', icon: Mail, desc: 'Reach out to us' },
    ]

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden">
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

                    {/* Desktop Menu — hidden on mobile */}
                    {!isMobile && (
                        <div className="flex items-center space-x-1">
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
                    )}

                    {/* Desktop CTA buttons — hidden on mobile */}
                    {!isMobile && (
                        <div className="flex items-center gap-6">
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
                    )}

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
                    {/* Mobile Hamburger — shown only on mobile */}
                    {isMobile && (
                        <button
                            className="z-[120] relative p-2 flex flex-col justify-center items-center"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={`w-full h-0.5 transform transition-all duration-300 ${isMobileMenuOpen ? 'bg-slate-900 rotate-45 translate-y-[9px]' : 'bg-slate-900'}`} />
                                <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`w-full h-0.5 transform transition-all duration-300 ${isMobileMenuOpen ? 'bg-slate-900 -rotate-45 -translate-y-[9px]' : 'bg-slate-900'}`} />
                            </div>
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 bg-slate-950 z-[100] flex flex-col overflow-y-auto overflow-x-hidden"
                    >
                        {/* Top spacer for navbar height */}
                        <div className="h-20 shrink-0" />

                        <div className="flex flex-col flex-1 px-6 pb-12">
                            {/* Pages section */}
                            <div className="mb-8">
                                <p className="text-[10px] font-black tracking-[0.35em] uppercase text-white/25 mb-5">
                                    Navigate
                                </p>
                                <div className="flex flex-col gap-1">
                                    {mobilePageLinks.map((link) => {
                                        const Icon = link.icon
                                        const isActive = location.pathname === link.path
                                        return (
                                            <Link
                                                key={link.path}
                                                to={link.path}
                                                className={`flex items-center gap-4 py-4 px-4 rounded-2xl transition-all ${isActive
                                                    ? 'bg-ree-green/15 text-ree-green'
                                                    : 'text-white/80 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                <div className={`p-2 rounded-xl ${isActive ? 'bg-ree-green/20' : 'bg-white/8'
                                                    }`}>
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-lg font-black tracking-tight leading-tight">{link.label}</div>
                                                    <div className="text-xs text-white/40 font-medium mt-0.5">{link.desc}</div>
                                                </div>
                                                <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${isActive ? 'text-ree-green' : 'text-white/20'
                                                    }`} />
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-white/10 mb-8" />

                            {/* CTA */}
                            <div className="flex flex-col gap-3">
                                <Link
                                    to="/early-access"
                                    className="w-full text-center bg-ree-green text-white px-8 py-4 rounded-2xl font-bold text-base shadow-2xl shadow-ree-green/20 hover:bg-ree-light transition-colors"
                                >
                                    Get Early Access
                                </Link>
                                <Link
                                    to="/contact"
                                    className="w-full text-center border border-white/15 text-white/70 px-8 py-3.5 rounded-2xl font-semibold text-sm hover:border-white/30 hover:text-white transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            {/* Footer note */}
                            <p className="mt-auto pt-10 text-[10px] text-white/20 font-bold tracking-widest uppercase text-center">
                                © {new Date().getFullYear()} Ree-fond Tech
                            </p>
                        </div>
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

                    <div className="flex flex-col md:flex-row justify-between w-full items-center gap-12 font-bold text-[10px] uppercase tracking-[0.4em]">
                        <div className="opacity-60">© {new Date().getFullYear()} Ree-fond Tech. All rights reserved. <span className="opacity-30 ml-4 hidden md:inline">|</span> <span className="opacity-30 ml-4">Regulatory & Financial Infrastructure</span></div>
                        <div className="flex flex-wrap justify-center gap-12">
                            <a href="#" className="hover:text-ree-green transition-colors">NDPR Compliant</a>
                            <Link to="/privacy" className="hover:text-ree-green transition-colors">Privacy</Link>
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
