import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu, X, Heart, Home, Info, LayoutGrid, Target,
    Newspaper, PhoneCall, Megaphone, FileText, Star
} from 'lucide-react';
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
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: '/about', icon: Info },
        { name: 'Projects', path: '/projects', icon: LayoutGrid },
        { name: 'Mission', path: '/mission', icon: Target },
        {
            name: 'Newsletters',
            path: '/newsletters',
            icon: Newspaper,
            dropdown: [
                { name: 'Latest News', path: '/newsletters', icon: Megaphone },
                { name: 'Annual Reports', path: '/reports', icon: FileText },
                { name: 'Impact Stories', path: '/impact-stories', icon: Star }
            ]
        },
        { name: 'Contact', path: '/contact', icon: PhoneCall },
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
                            <div key={link.name} className="relative group">
                                <Link
                                    to={link.path}
                                    className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 relative block
                                        ${isActive(link.path)
                                            ? 'text-white'
                                            : 'text-[var(--color-text-main)] hover:text-[var(--color-primary-700)]'
                                        }`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <link.icon className="w-4 h-4" />
                                        {link.name}
                                        {link.dropdown && (
                                            <svg className="w-3 h-3 transition-transform group-hover:rotate-180 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </span>
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

                                {/* Dropdown Menu */}
                                {link.dropdown && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                                        <div className="bg-white rounded-2xl shadow-xl w-56 overflow-hidden border border-slate-100 p-2">
                                            {link.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className={`block px-4 py-3 rounded-xl text-sm font-bold transition-colors ${location.pathname === subItem.path
                                                        ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)]'
                                                        : 'text-slate-600 hover:bg-slate-50 hover:text-[var(--color-primary-600)]'
                                                        }`}
                                                >
                                                    <span className="flex items-center gap-3">
                                                        <subItem.icon className="w-4 h-4" />
                                                        {subItem.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link to="/donate">
                            <Button variant="outline" size="sm" className="hidden lg:flex border-rose-100 text-rose-600 hover:bg-rose-50 hover:border-rose-200">
                                <Heart className="w-4 h-4 mr-2 fill-rose-500 text-rose-500" />
                                Donate
                            </Button>
                        </Link>
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
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-full left-0 w-[calc(100%-3rem)] mx-6 mt-4 bg-slate-900 md:hidden rounded-[2rem] border border-white/10 shadow-2xl z-50 p-6 max-h-[80vh] overflow-y-auto no-scrollbar"
                        >
                            <div className="flex flex-col items-center gap-4">
                                {navLinks.map((link) => (
                                    <React.Fragment key={link.name}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`w-full py-4 px-6 rounded-2xl text-center text-lg font-bold transition-all ${isActive(link.path) && !link.dropdown ? 'bg-[var(--color-primary-800)] text-white shadow-xl shadow-[var(--color-primary-800)]/20' : 'text-white/70 active:bg-white/10'}`}
                                        >
                                            <span className="flex items-center justify-center gap-3">
                                                <link.icon className="w-5 h-5" />
                                                {link.name}
                                            </span>
                                        </Link>
                                        {/* Mobile Submenu */}
                                        {link.dropdown && (
                                            <div className="w-full flex flex-col gap-2 -mt-2 mb-2 bg-white/5 rounded-2xl p-2">
                                                {link.dropdown.map(subItem => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`py-3 px-4 rounded-xl text-center text-sm font-medium transition-colors ${location.pathname === subItem.path
                                                            ? 'bg-white/10 text-white'
                                                            : 'text-white/60 hover:text-white'
                                                            }`}
                                                    >
                                                        <span className="flex items-center justify-center gap-2">
                                                            <subItem.icon className="w-4 h-4" />
                                                            {subItem.name}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                                <div className="flex flex-col gap-4 w-full mt-4">
                                    <Link to="/donate" onClick={() => setIsOpen(false)}>
                                        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                                            <Heart className="w-4 h-4 mr-2" />
                                            Donate
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
