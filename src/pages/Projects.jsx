import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Wheat, HeartPulse, GraduationCap, Users, CloudRain, CheckCircle2, Target } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Agriculture', 'Health', 'Education', 'Empowerment', 'Climate'];
    const districts = ['Nkhotakota', 'Salima', 'Nkhatabay', 'Chikwawa', 'Dedza'];

    const programs = [
        {
            title: 'Smart Agriculture & Nutrition',
            category: 'Agriculture',
            icon: <Wheat className="w-6 h-6" />,
            description: 'Promoting irrigation, pass-on livestock, and soft loans for youth and women startup-inputs for farming.',
            details: ['Irrigation & Water Harvesting', 'Apiculture & Aquaculture', 'Village Savings Groups', 'Manure Production'],
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
            stats: '1.2k+ Farmers'
        },
        {
            title: 'Health & Safeguarding',
            category: 'Health',
            icon: <HeartPulse className="w-6 h-6" />,
            description: 'Comprehensive health services, HIV/AIDS awareness, and safe maternity transport for communities.',
            details: ['Sports for Good Health', 'HIV/AIDS Care', 'Safe Maternity Transport', 'Safeguarding Awareness'],
            image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80',
            stats: '24/7 Support'
        },
        {
            title: 'Inclusive Quality Education',
            category: 'Education',
            icon: <GraduationCap className="w-6 h-6" />,
            description: 'Building and renovating school blocks, providing scholarships, and promoting adult literacy.',
            details: ['School Block Renovation', 'Scholarships & Mentorship', 'Vocational Training', 'Gender-Sensitive Sanitation'],
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
            stats: '15 Schools'
        },
        {
            title: 'Youth & Women Empowerment',
            category: 'Empowerment',
            icon: <Users className="w-6 h-6" />,
            description: 'Facilitating social entrepreneurship, menstrual hygiene, and leadership skills for girls and youths.',
            details: ['Social Entrepreneurship', 'Menstrual Hygiene', 'Health Committees', 'Skill Pass-on'],
            image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80',
            stats: '50+ Groups'
        },
        {
            title: 'Climate Change & Restoration',
            category: 'Climate',
            icon: <CloudRain className="w-6 h-6" />,
            description: 'Disaster risk management, reforestation, and promotion of energy saving equipment.',
            details: ['Forest-based Enterprise', 'Boreholes for Clean Water', 'Afforestation & Reforestation', 'Agro-forestry Actions'],
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80',
            stats: '10k Trees'
        }
    ];

    const filteredPrograms = activeTab === 'All'
        ? programs
        : programs.filter(p => p.category === activeTab);

    return (
        <div className="bg-white min-h-screen">
            {/* --- Premium Header --- */}
            <section className="relative pt-40 pb-24 bg-[var(--color-primary-900)] overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-primary-800)] to-transparent opacity-50" />
                <div className="container px-6 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[var(--color-primary-300)] text-xs font-black uppercase tracking-widest mb-6">
                            <Target className="w-4 h-4" /> Strategic Impact
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none">
                            Our Key <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-400)] to-emerald-400">Programs</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl font-light leading-relaxed">
                            Creating resilient communities through community-led sustainable development across five strategic thematic areas.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Interactive Filter Bar --- */}
            <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100">
                <div className="container px-6 mx-auto py-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === cat
                                    ? 'text-white'
                                    : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                {activeTab === cat && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-[var(--color-primary-800)] rounded-full -z-10 shadow-lg shadow-[var(--color-primary-800)]/20"
                                    />
                                )}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Projects Grid --- */}
            <section className="py-24 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="grid grid-cols-1 gap-12">
                        <AnimatePresence mode="popLayout">
                            {filteredPrograms.map((program, index) => (
                                <motion.div
                                    key={program.title}
                                    layout
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="p-0 overflow-hidden group border-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] bg-white rounded-[3rem]">
                                        <div className="flex flex-col lg:flex-row min-h-[450px]">
                                            {/* Image Side */}
                                            <div className="lg:w-2/5 relative overflow-hidden">
                                                <img
                                                    src={program.image}
                                                    alt={program.title}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="absolute bottom-8 left-8">
                                                    <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                                                        <p className="text-[var(--color-primary-900)] font-black text-lg">{program.stats}</p>
                                                        <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Current Impact</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content Side */}
                                            <div className="lg:w-3/5 p-8 md:p-16 flex flex-col justify-center">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="p-3 bg-[var(--color-primary-50)] text-[var(--color-primary-600)] rounded-xl">
                                                        {program.icon}
                                                    </div>
                                                    <span className="text-[var(--color-primary-600)] font-black tracking-widest text-xs uppercase">
                                                        {program.category}
                                                    </span>
                                                </div>

                                                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 group-hover:text-[var(--color-primary-700)] transition-colors">
                                                    {program.title}
                                                </h3>

                                                <p className="text-lg text-slate-500 leading-relaxed mb-10">
                                                    {program.description}
                                                </p>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                                    {program.details.map((detail, dIdx) => (
                                                        <div key={dIdx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-[var(--color-primary-200)]">
                                                            <CheckCircle2 className="w-5 h-5 text-[var(--color-primary-500)] shrink-0" />
                                                            <span className="text-sm font-bold text-slate-700">{detail}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <button className="flex items-center gap-3 font-black text-[var(--color-primary-900)] hover:gap-5 transition-all group/btn">
                                                    View Strategic Roadmap <ArrowRight className="w-5 h-5 text-[var(--color-primary-500)]" />
                                                </button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* --- Geolocation Section --- */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="bg-[var(--color-primary-900)] rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-5xl font-black text-white mb-8">Where We <br /><span className="text-[var(--color-primary-400)]">Operate</span></h2>
                                <p className="text-xl text-white/60 mb-12 leading-relaxed">
                                    Our footprint spans across Malawi's most vital districts. We align our presence with the greatest need for community-led climate adaptation.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {districts.map((district) => (
                                        <div key={district} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
                                            <MapPin className="w-5 h-5 text-[var(--color-primary-400)] group-hover:scale-125 transition-transform" />
                                            <span className="text-white font-bold">{district}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-white/5 rounded-full absolute -top-20 -right-20 w-96 h-96 blur-3xl" />
                                <div className="relative bg-white/10 border border-white/20 p-8 rounded-[3rem] backdrop-blur-sm shadow-2xl">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-white font-black uppercase tracking-widest text-xs">National Reach</span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-400)] animate-pulse" />)}
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <p className="text-white text-2xl font-black">5 Districts of <br />Strategic Implementation</p>
                                        <div className="h-1 w-20 bg-[var(--color-primary-400)]" />
                                        <p className="text-white/50 text-sm">Focusing on high-vulnerability rural livelihoods and flood-prone zones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;