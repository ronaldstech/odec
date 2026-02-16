import React from 'react';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-primary-900)] text-white pt-20 pb-10">
            <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mx-auto">
                <div className="col-span-1 md:col-span-1">
                    <Link to="/" className="flex items-center gap-3 mb-6">
                        <img src="/logo.png" alt="ODEC Logo" className="w-10 h-10 object-contain brightness-0 invert" />
                        <span className="text-2xl font-bold tracking-tight text-white">ODEC</span>
                    </Link>
                    <p className="text-[var(--color-primary-200)] mb-6">
                        Organisation for Development and Environmental Care. Committing to a sustainable future for all.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-[var(--color-primary-400)] transition-colors"><Instagram /></a>
                        <a href="#" className="hover:text-[var(--color-primary-400)] transition-colors"><Facebook /></a>
                        <a href="#" className="hover:text-[var(--color-primary-400)] transition-colors"><Twitter /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-6 text-[var(--color-accent-400)]">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link to="/about" className="hover:text-[var(--color-primary-400)]">About Us</Link></li>
                        <li><Link to="/projects" className="hover:text-[var(--color-primary-400)]">Projects</Link></li>
                        <li><Link to="/mission" className="hover:text-[var(--color-primary-400)]">Mission</Link></li>
                        <li><Link to="/contact" className="hover:text-[var(--color-primary-400)]">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-6 text-[var(--color-accent-400)]">Our Focus</h4>
                    <ul className="space-y-4">
                        <li><span className="text-[var(--color-primary-200)]">Climate Smart Enterprises</span></li>
                        <li><span className="text-[var(--color-primary-200)]">Public Health Care</span></li>
                        <li><span className="text-[var(--color-primary-200)]">Sustainable Community Initiatives</span></li>
                        <li><span className="text-[var(--color-primary-200)]">Innovation & Tech Skills</span></li>
                        <li><span className="text-[var(--color-primary-200)]">Smart Agriculture & Value Addition</span></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-6 text-[var(--color-accent-400)]">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[var(--color-primary-400)]" />
                            <span>odec24@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[var(--color-primary-400)]" />
                            <span>+265 993 452 511</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-[var(--color-primary-400)]" />
                            <span>Benga, Nkhotakota, Malawi</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container px-6 mt-16 pt-8 border-t border-white/10 text-center text-[var(--color-primary-300)] mx-auto">
                <p>&copy; {new Date().getFullYear()} ODEC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
