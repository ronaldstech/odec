import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Mission', path: '/mission' },
        { name: 'Newsletters', path: '/newsletters' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
            <div className={`container px-6 flex justify-between items-center mx-auto transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl py-4 rounded-[2rem] shadow-2xl shadow-[var(--color-primary-900)]/5 border border-white/20' : ''}`}>
                <Link to="/" className="flex items-center gap-3 group">
                    <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <img src="/logo.png" alt="ODEC Logo" className="w-10 h-10 object-contain" />
                    </motion.div>
                    <span className="text-2xl font-bold tracking-tight text-[var(--color-primary-900)]">
                        ODEC
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-2 p-1.5 bg-[var(--color-primary-900)]/5 rounded-full border border-white/20">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 relative group
                                    ${isActive(link.path)
                                        ? 'text-white'
                                        : 'text-[var(--color-text-main)] hover:text-[var(--color-primary-700)]'
                                    }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="navPill"
                                        className="absolute inset-0 bg-[var(--color-primary-800)] rounded-full shadow-lg shadow-[var(--color-primary-800)]/30 z-0"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                {!isActive(link.path) && (
                                    <motion.div
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-white/50 rounded-full opacity-0 z-0"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm" className="hidden lg:flex border-rose-100 text-rose-600 hover:bg-rose-50 hover:border-rose-200">
                            <Heart className="w-4 h-4 mr-2 fill-rose-500 text-rose-500" />
                            Donate
                        </Button>
                        <Button variant="primary" size="sm" className="shadow-lg shadow-[var(--color-primary-500)]/20">Get Involved</Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button className={`p-2 rounded-xl transition-colors ${scrolled ? 'bg-[var(--color-primary-900)]/5' : 'bg-white/10'} md:hidden text-[var(--color-primary-900)]`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-0 w-[calc(100%-3rem)] mx-6 mt-4 bg-slate-900 md:hidden rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden z-50 p-6"
                    >
                        <div className="flex flex-col items-center gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`w-full py-4 px-6 rounded-2xl text-center text-lg font-bold transition-all ${isActive(link.path) ? 'bg-[var(--color-primary-800)] text-white shadow-xl shadow-[var(--color-primary-800)]/20' : 'text-white/70 active:bg-white/10'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 w-full mt-4">
                                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10" onClick={() => setIsOpen(false)}>
                                    <Heart className="w-4 h-4 mr-2" />
                                    Donate
                                </Button>
                                <Button variant="secondary" className="w-full" onClick={() => setIsOpen(false)}>
                                    Get Involved
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
