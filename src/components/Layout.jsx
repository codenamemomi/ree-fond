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

    // Close mobile menu on route change and prevent scroll when open
    useEffect(() => {
        window.scrollTo(0, 0)
        setIsMobileMenuOpen(false)
    }, [location])

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
            <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center group z-50 relative">
                        <motion.img
                            src={logo}
                            alt="Ree-fond"
                            className="h-10 w-auto group-hover:rotate-12 transition-transform"
                        />
                        <span className={`ml-3 text-2xl font-black tracking-tight transition-colors ${isMobileMenuOpen ? 'text-white md:text-ree-green' : 'text-ree-green'}`}>Ree-fond</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {links.map((link) => (
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

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden z-[110] relative p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`w-full h-0.5 transform transition-all duration-300 ${isMobileMenuOpen ? 'bg-white rotate-45 translate-y-2' : 'bg-gray-800'}`} />
                            <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`w-full h-0.5 transform transition-all duration-300 ${isMobileMenuOpen ? 'bg-white -rotate-45 -translate-y-2' : 'bg-gray-800'}`} />
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
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-white hover:text-ree-green transition-colors z-[110]"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

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
