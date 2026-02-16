import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Globe, Users, Wheat, HeartPulse, GraduationCap, CloudRain, Quote } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const priorities = [
        { title: 'Climate Smart Enterprises', icon: <Wheat className="w-8 h-8" />, desc: 'Building sustainable businesses that adapt to climate change and create resilient livelihoods.' },
        { title: 'Public Health Care', icon: <HeartPulse className="w-8 h-8" />, desc: 'Ensuring accessible, quality healthcare services for all community members.' },
        { title: 'Sustainable Community Initiatives', icon: <Users className="w-8 h-8" />, desc: 'Empowering communities through collaborative, long-term development projects.' },
        { title: 'Innovation & Tech Skills', icon: <GraduationCap className="w-8 h-8" />, desc: 'Equipping youth with cutting-edge technological and entrepreneurial capabilities.' },
        { title: 'Smart Agriculture & Value Addition', icon: <CloudRain className="w-8 h-8" />, desc: 'Transforming farming through technology and adding value to agricultural products.' },
    ];

    return (
        <div className="overflow-hidden bg-[var(--color-bg-main)]">
            {/* --- Hero Section --- */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[var(--color-primary-900)]/80 to-[var(--color-primary-900)] z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"
                        className="w-full h-full object-cover"
                        alt="Nature Background"
                    />
                </motion.div>

                <div className="container relative z-20 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-8 shadow-xl">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-primary-400)] animate-pulse" />
                            Build Community Resilience
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
                            Sustaining <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-300)] to-[var(--color-primary-500)]">Livelihoods</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            A leading agency creating resilient communities against poverty and climate change through <strong>inclusive innovation</strong>.
                        </p>
                        <div className="flex flex-col sm:row items-center justify-center gap-5">
                            <Button variant="primary" size="lg" className="px-10 py-6 rounded-2xl text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--color-primary-500-rgb),0.3)]">
                                Get Involved Now
                            </Button>
                            <button className="flex items-center gap-2 text-white font-semibold hover:text-[var(--color-primary-400)] transition-colors group">
                                Learn Our Mission <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Strategic Mission --- */}
            <section className="relative py-32 bg-white overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
                    <Quote size={400} />
                </div>
                <div className="container px-6 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h2 className="text-[var(--color-primary-600)] font-bold text-sm tracking-[0.4em] uppercase mb-10">Our Calling</h2>
                        <blockquote className="text-3xl md:text-5xl font-bold text-[var(--color-primary-900)] leading-snug">
                            “To build community resilience by enabling <span className="text-[var(--color-primary-500)]">self-reliance</span> through strengthening institutional capacity for social action.”
                        </blockquote>
                    </motion.div>
                </div>
            </section>

            {/* --- Priority Areas --- */}
            <section className="py-32 relative bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm font-bold mb-4">
                                    What We Do
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-[var(--color-primary-900)] mb-6">Core Priorities</h2>
                                <p className="text-lg text-slate-500">Transformative development projects that uncover local wealth and build sustainable futures.</p>
                            </motion.div>
                        </div>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] hidden md:block mb-4 rounded-full" />
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
                    >
                        {priorities.map((item, index) => {
                            const gradients = [
                                'from-emerald-500/10 to-teal-500/10',
                                'from-blue-500/10 to-cyan-500/10',
                                'from-purple-500/10 to-pink-500/10',
                                'from-orange-500/10 to-red-500/10',
                                'from-green-500/10 to-lime-500/10'
                            ];
                            const iconColors = [
                                'text-emerald-600',
                                'text-blue-600',
                                'text-purple-600',
                                'text-orange-600',
                                'text-green-600'
                            ];
                            const hoverGradients = [
                                'group-hover:from-emerald-500 group-hover:to-teal-500',
                                'group-hover:from-blue-500 group-hover:to-cyan-500',
                                'group-hover:from-purple-500 group-hover:to-pink-500',
                                'group-hover:from-orange-500 group-hover:to-red-500',
                                'group-hover:from-green-500 group-hover:to-lime-500'
                            ];

                            return (
                                <motion.div key={index} variants={itemVariants}>
                                    <div className="group relative h-full bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                        {/* Gradient Background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        {/* Animated Border */}
                                        <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${hoverGradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                                            <div className="w-full h-full bg-white rounded-[2rem]" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Icon Container */}
                                            <div className="mb-6">
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center ${iconColors[index]} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md`}>
                                                    {item.icon}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-black mb-4 text-slate-900 group-hover:text-[var(--color-primary-700)] transition-colors duration-300">
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-slate-600 leading-relaxed text-sm">
                                                {item.desc}
                                            </p>

                                            {/* Decorative Element */}
                                            <div className="mt-6 pt-6 border-t border-slate-100 group-hover:border-transparent transition-colors duration-300">
                                                <div className="flex items-center gap-2 text-[var(--color-primary-600)] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span>Learn More</span>
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--color-primary-400)]/10 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* --- Accountability --- */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                                Radical <span className="text-[var(--color-primary-600)]">Transparency</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We maintain discipline in ODEC operations, ensuring every resource—from time to funding—is directed toward community impact.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['MRA & CONGOMA Registered', 'Youth Led Governance', 'Inclusive Approach', 'Ethical Reporting'].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <Shield className="w-5 h-5 text-[var(--color-primary-500)]" />
                                        <span className="font-bold text-slate-700 text-sm uppercase tracking-wide">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Team" className="w-full h-full object-cover" />
                            </div>
                            {/* Floating Stats Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-10 -left-10 bg-[var(--color-primary-900)] text-white p-8 rounded-3xl shadow-2xl hidden md:block"
                            >
                                <p className="text-4xl font-black mb-1">100%</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">Accountable Leadership</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    <div className="bg-[var(--color-primary-900)] rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center shadow-3xl">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/2" />
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">
                            Ready to make a <br />lasting impact?
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 relative z-10">
                            <Button variant="secondary" size="lg" className="px-12 rounded-full py-6 text-xl">
                                Partner With Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;