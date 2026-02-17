import React from 'react';
import { motion } from 'framer-motion';
import {
    Landmark, TrendingUp, Users, ShieldCheck, Globe, Activity, CheckCircle2, Waves, Sprout,
    Building2,
    Globe2,
    Zap,
    Users2,
    GraduationCap,
    Radio
} from 'lucide-react';
import Card from '../components/Card';

const About = () => {
    const enablers = [
        {
            title: 'Financial Sustainability',
            description: 'Resource Mobilization Strategy and robust internal financial controls ensuring prudent management.',
            icon: <TrendingUp className="w-6 h-6" />,
            color: 'bg-blue-50 text-blue-600'
        },
        {
            title: 'Good Governance',
            description: 'Developing operational policy documents and ensuring unity of purpose among all stakeholders.',
            icon: <ShieldCheck className="w-6 h-6" />,
            color: 'bg-emerald-50 text-emerald-600'
        },
        {
            title: 'Human Capital',
            description: 'Professional capacity building and tailor-made work policies across all departments.',
            icon: <Users className="w-6 h-6" />,
            color: 'bg-orange-50 text-orange-600'
        },
    ];

    const stakeholders = [
        { name: 'Farmers', icon: <Sprout className="w-5 h-5" />, color: 'from-emerald-400/20 to-emerald-600/20', text: 'text-emerald-700', border: 'border-emerald-200', size: 'text-xl' },
        { name: 'Government', icon: <Building2 className="w-4 h-4" />, color: 'from-slate-400/10 to-slate-600/10', text: 'text-slate-700', border: 'border-slate-200', size: 'text-base' },
        { name: 'International NGOs', icon: <Globe2 className="w-5 h-5" />, color: 'from-blue-400/20 to-blue-600/20', text: 'text-blue-700', border: 'border-blue-200', size: 'text-lg' },
        { name: 'Youth Activists', icon: <Zap className="w-6 h-6" />, color: 'from-[var(--color-primary-400)]/20 to-[var(--color-primary-600)]/20', text: 'text-[var(--color-primary-800)]', border: 'border-[var(--color-primary-300)]', size: 'text-2xl' },
        { name: 'Traditional Leaders', icon: <Users2 className="w-4 h-4" />, color: 'from-orange-400/20 to-orange-600/20', text: 'text-orange-700', border: 'border-orange-200', size: 'text-base' },
        { name: 'Academic Institutions', icon: <GraduationCap className="w-5 h-5" />, color: 'from-purple-400/20 to-purple-600/20', text: 'text-purple-700', border: 'border-purple-200', size: 'text-lg' },
        { name: 'Media', icon: <Radio className="w-4 h-4" />, color: 'from-rose-400/20 to-rose-600/20', text: 'text-rose-700', border: 'border-rose-200', size: 'text-sm' }
    ];

    return (
        <div className="bg-white">
            {/* --- Premium Header --- */}
            <section className="relative pt-40 pb-32 bg-[var(--color-primary-900)] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Waves className="absolute -bottom-20 -left-20 w-96 h-96 text-white" />
                </div>

                <div className="container px-6 mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[var(--color-primary-400)] font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                        >
                            Our Identity
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-6xl md:text-8xl font-black text-white mb-8 leading-none"
                        >
                            Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Purpose.</span>
                        </motion.h1>
                        <p className="text-xl text-white/70 max-w-2xl leading-relaxed font-light">
                            ODEC is a non-partisan local NGO governed by passionate youths, dedicated to bridging the gap between environmental care and community resilience.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Foundation & Accreditation --- */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6">
                                <motion.div initial={{ y: 40 }} whileInView={{ y: 0 }} className="space-y-6">
                                    <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
                                        <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80" alt="Team" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="p-8 bg-[var(--color-primary-900)] text-white rounded-[2.5rem] shadow-xl">
                                        <h4 className="text-3xl font-black mb-1">2024</h4>
                                        <p className="text-sm opacity-60 uppercase tracking-widest">Established</p>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ y: -40 }} whileInView={{ y: 0 }} className="space-y-6 pt-12">
                                    <div className="p-8 bg-[var(--color-primary-50)] rounded-[2.5rem] border border-[var(--color-primary-100)]">
                                        <CheckCircle2 className="text-[var(--color-primary-600)] mb-4" />
                                        <p className="font-bold text-[var(--color-primary-900)]">CONGOMA</p>
                                        <p className="text-sm text-slate-500">Fully Accredited</p>
                                    </div>
                                    <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
                                        <img src="6.jpeg" alt="Youth" className="w-full h-full object-cover" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Rooted in <br />Formal Excellence</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Registered on <span className="text-[var(--color-primary-600)] font-bold">9th October 2024</span>, we operate with the structural integrity of a world-class institution and the heart of a local movement.
                            </p>
                            <div className="space-y-4">
                                {['Inclusive Community Design', 'Climate Shock Adaptation', 'Holistic Empowerment'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors group">
                                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary-500)] group-hover:scale-150 transition-transform" />
                                        <span className="font-bold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Vision Enablers (Pillars) --- */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-black mb-6">Strategic Enablers</h2>
                        <p className="text-slate-500 text-lg font-medium">The architectural pillars that support our mission for a resilient Malawi.</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {enablers.map((item, idx) => (
                            <Card key={idx} delay={idx * 0.1} className="group border-none">
                                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Leadership & Team --- */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block"
                        >
                            The People
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Meet the <span className="text-emerald-600">Change Makers</span></h2>
                        <p className="text-slate-500 text-lg">
                            ODEC is led by a passionate team of youths and professionals dedicated to driving sustainable development in Malawi.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { role: 'Executive Director', name: "JOSEPH KITHA", icon: <Users2 className="w-6 h-6" /> },
                            { role: 'Program Manager', name: "", icon: <Activity className="w-6 h-6" /> },
                            { role: 'Finance Officer', name: "MWAWI SOPHIE CHIRWA", icon: <TrendingUp className="w-6 h-6" /> },
                            { role: 'SECRETARY GENERAL', name: "", icon: <Globe className="w-6 h-6" /> }
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-100 mb-6 relative">
                                    <div className="absolute inset-0 bg-slate-200 animate-pulse group-hover:animate-none transition-all" />
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                        <Users className="w-12 h-12 opacity-50" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2">
                                            {member.icon}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mt-1">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Malawi Context Analysis --- */}
            <section className="py-32 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="bg-[var(--color-primary-900)] rounded-[4rem] overflow-hidden relative">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 md:p-24 space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black text-white">The Malawi <br /><span className="text-[var(--color-primary-400)]">Landscape</span></h2>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    Malawi faces a critical turning point. With a heavy reliance on weather-sensitive agriculture, our role is to pivot community approaches toward sustainability.
                                </p>

                                {/* Animated Stat Bar */}
                                <div className="space-y-3">
                                    <div className="flex justify-between text-white font-bold text-sm uppercase tracking-widest">
                                        <span>Agricultural Dependency</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '80%' }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-[var(--color-primary-400)]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative min-h-[400px]">
                                <img
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt="Malawi Agriculture"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-900)] to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 relative overflow-hidden bg-white">
                {/* Background Decorative Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary-500)]/5 rounded-full blur-3xl -z-0" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
                        >
                            Collaborative <span className="text-[var(--color-primary-600)]">Ecosystem</span>
                        </motion.h2>
                        <p className="text-slate-500 text-lg">
                            Driving systemic change through a diverse network of dedicated partners and community leaders.
                        </p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto"
                    >
                        {stakeholders.map((s, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.5 },
                                    show: { opacity: 1, scale: 1 }
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -2, 2, 0],
                                    transition: { duration: 0.3 }
                                }}
                                animate={{
                                    y: [0, i % 2 === 0 ? -10 : 10, 0],
                                }}
                                transition={{
                                    y: {
                                        duration: 4 + (i % 3),
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className={`
                                    flex items-center gap-3 px-8 py-4 rounded-full border shadow-sm
                                    bg-gradient-to-br ${s.color} ${s.border} ${s.text}
                                    backdrop-blur-sm cursor-pointer transition-shadow hover:shadow-xl
                                `}
                            >
                                <span className="opacity-80">{s.icon}</span>
                                <span className={`${s.size} font-black tracking-tight whitespace-nowrap`}>
                                    {s.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Subtle Connection Lines (Visual Flair) */}
                    <div className="mt-20 flex justify-center">
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                            <div className="w-12 h-[1px] bg-slate-200" />
                            <span>United for Resilience</span>
                            <div className="w-12 h-[1px] bg-slate-200" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;