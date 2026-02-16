import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Scale, Users, FileText, Heart, Target, TrendingUp, BarChart3, ChevronRight } from 'lucide-react';
import Card from '../components/Card';

const Mission = () => {
    const coreValues = [
        {
            title: 'Self-Reliance',
            description: 'Delivering development actions that create resilience. People will be movers of their own initiatives that are sustainable.',
            icon: <Zap className="w-6 h-6" />,
            color: 'from-emerald-400 to-emerald-600',
            bg: 'bg-emerald-50'
        },
        {
            title: 'Equality of Opportunity',
            description: 'Encouraging fairness where individuals are treated similarly, unhampered by artificial barriers or preferences.',
            icon: <Scale className="w-6 h-6" />,
            color: 'from-blue-400 to-blue-600',
            bg: 'bg-blue-50'
        },
        {
            title: 'Public Health',
            description: 'Promoting effective public health policies and allocation of resources for health-related programs.',
            icon: <Heart className="w-6 h-6" />,
            color: 'from-rose-400 to-rose-600',
            bg: 'bg-rose-50'
        },
        {
            title: 'Environmental Management',
            description: 'Investing in permaculture, diversified farming, and sustainable ecosystems for food security.',
            icon: <ShieldCheck className="w-6 h-6" />,
            color: 'from-green-400 to-green-600',
            bg: 'bg-green-50'
        },
        {
            title: 'Collective Action',
            description: 'Promoting social action, joint cooperation, and collaboration with communities and stakeholders.',
            icon: <Users className="w-6 h-6" />,
            color: 'from-amber-400 to-amber-600',
            bg: 'bg-amber-50'
        },
        {
            title: 'Accountability',
            description: 'Holding ourselves to the highest ethical behavior and integrity, accountable to members, beneficiaries, and partners.',
            icon: <FileText className="w-6 h-6" />,
            color: 'from-cyan-400 to-cyan-600',
            bg: 'bg-cyan-50'
        },
    ];

    return (
        <div className="bg-white">
            {/* --- Hero: Vision & Mission --- */}
            <section className="relative pt-40 pb-32 bg-[var(--color-primary-900)] overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-primary-500)]/20 rounded-full blur-3xl" />

                <div className="container px-6 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <span className="text-[var(--color-primary-400)] font-black tracking-[0.4em] uppercase text-xs mb-4 block">The ODEC Blueprint</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">Our Purpose & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Direction</span></h1>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                            <Card className="h-full bg-white/5 border-white/10 backdrop-blur-xl p-10 group hover:bg-white/10 transition-colors">
                                <Target className="text-[var(--color-primary-400)] mb-6 w-10 h-10" />
                                <h3 className="text-white text-2xl font-black mb-4">Our Mission</h3>
                                <p className="text-white/70 text-lg leading-relaxed font-light">
                                    To build community resilience by enabling <span className="text-white font-bold underline decoration-[var(--color-primary-500)]">self-reliance</span> through strengthening management structures and institutional capacity for social action and climate adaptation.
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                            <Card className="h-full bg-[var(--color-primary-800)] border-none p-10 shadow-[0_20px_50px_rgba(var(--color-primary-500-rgb),0.3)] relative overflow-hidden">

                                {/* Decorative Background Element to ensure contrast */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />

                                <div className="relative z-10">
                                    <TrendingUp className="text-[var(--color-primary-400)] mb-6 w-10 h-10" />
                                    <h3 className="text-white text-2xl font-black mb-4">Our Vision</h3>
                                    <p className="text-white/80 text-lg leading-relaxed font-light">
                                        To be the <span className="text-white font-bold">leading agency</span> in creating resilient communities against poverty, economic shocks, and environmental degradation, enhancing sustainable livelihoods for all.
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Core Values: Bento Grid --- */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black text-slate-900 mb-6">Fundamental Beliefs</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Our engagement with the world is anchored by these five non-negotiable pillars.</p>
                    </div>

                    <div className="grid md:grid-cols-6 gap-6 max-w-6xl mx-auto">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`
                                    ${index === 0 || index === 1 ? 'md:col-span-3' : 'md:col-span-2'}
                                    group relative overflow-hidden rounded-[2.5rem] p-10 transition-all duration-500
                                    ${value.bg} border border-transparent hover:border-slate-200 hover:shadow-xl
                                `}
                            >
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-8 group-hover:scale-110 transition-transform`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-black mb-4 text-slate-900">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Philosophy Section: The Sustainability Lens --- */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                {/* Visual Representation of the "Sustainability Lens" */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[var(--color-primary-500)]/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-sm border border-slate-100">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-black text-slate-900">The <span className="text-[var(--color-primary-600)]">Sustainability Lens</span></h2>
                                <p className="text-lg text-slate-500 leading-relaxed">
                                    Sustainability isn't a goal; it's our filter. We systematically use scientific and technical knowledge to promote economic and social transformation.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { t: 'Scientific Knowledge', d: 'Using data to drive social transformation.' },
                                        { t: 'Resource Efficiency', d: 'Recognizing planetary and human limits.' },
                                        { t: 'Risk Mitigation', d: 'Safeguarding communities from future shocks.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-5 p-6 rounded-3xl hover:bg-slate-50 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-[var(--color-primary-500)] mt-2" />
                                            <div>
                                                <h4 className="font-black text-slate-900">{item.t}</h4>
                                                <p className="text-sm text-slate-500">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden rotate-3">
                                    <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80" alt="Sustainability" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-[var(--color-primary-900)] p-8 rounded-3xl text-white shadow-2xl">
                                    <ShieldCheck className="w-8 h-8 text-[var(--color-primary-400)] mb-4" />
                                    <p className="font-bold text-sm uppercase tracking-widest">Quality Guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Strategic Goals Section: Impact Tracker --- */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Strategic Plan</h2>
                            <p className="text-lg text-slate-500 font-medium tracking-tight">Cycle 2024 — 2029 Implementation Roadmap</p>
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 rounded-2xl font-black text-sm uppercase tracking-widest">
                            <BarChart3 className="w-4 h-4" /> Active Phase
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {[
                            {
                                obj: 'Increase capacity for climate adaptation',
                                outcome: 'Increased adoption of climate smart agriculture',
                                indicator: 'Number of trainings of Lead Farmers'
                            },
                            {
                                obj: 'Improve health of women and youth',
                                outcome: 'Increased access to quality health services (YFHS)',
                                indicator: 'Number of people accessing health care'
                            },
                            {
                                obj: 'Enhance socio-economic status',
                                outcome: 'Improved livelihood and economic empowerment',
                                indicator: 'Youth/Women supported with start capital'
                            },
                            {
                                obj: 'Resilient food production',
                                outcome: 'Climate-resilient livelihoods',
                                indicator: '% of smallholders with increased production'
                            },
                        ].map((goal, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 10 }}
                                className="group p-8 bg-white border border-slate-100 rounded-3xl flex flex-col lg:flex-row gap-8 items-center justify-between hover:border-[var(--color-primary-300)] hover:shadow-lg transition-all"
                            >
                                <div className="lg:w-1/3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-black">0{i + 1}</div>
                                        <h4 className="text-xs font-black text-[var(--color-primary-500)] uppercase tracking-[0.2em]">Objective</h4>
                                    </div>
                                    <p className="text-xl font-black text-slate-900">{goal.obj}</p>
                                </div>
                                <div className="lg:w-1/4">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Expected Outcome</h4>
                                    <p className="text-slate-600 font-medium text-sm">{goal.outcome}</p>
                                </div>
                                <div className="lg:w-1/4">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Success Indicator</h4>
                                    <p className="text-slate-900 font-bold text-sm italic">{goal.indicator}</p>
                                </div>
                                <div className="lg:w-12 flex justify-center">
                                    <ChevronRight className="text-slate-300 group-hover:text-[var(--color-primary-500)] transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;