import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Landmark, Globe, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const Donate = () => {
    const bankDetails = {
        bankName: 'Standard Bank',
        accountNumber: '9100007599754',
        accountName: 'Organisation for Development and Environmental Care (ODEC)',
        swiftCode: 'SB1CMWMX'
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        // You might want to add a toast notification here in a real app
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            {/* Header Section */}
            <section className="relative bg-[var(--color-primary-900)] py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Support Our Mission
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-[var(--color-primary-400)]">
                            Make a <span className="text-[var(--color-accent-500)]">Difference</span> Today
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Your contribution directly supports our initiatives in climate resilience, public health, and community empowerment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Donation Content */}
            <section className="py-20 px-6 -mt-10">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8 items-start">

                        {/* Bank Details Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-50)] rounded-bl-full -mr-10 -mt-10 z-0" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-[var(--color-primary-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary-600)]">
                                        <Landmark size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900">Bank Transfer</h2>
                                        <p className="text-slate-500 text-sm">Direct deposit to our account</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-[var(--color-primary-200)] transition-colors">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Account Name</p>
                                        <p className="text-slate-800 font-semibold break-words">{bankDetails.accountName}</p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-[var(--color-primary-200)] transition-colors">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Bank Name</p>
                                            <p className="text-slate-800 font-semibold">{bankDetails.bankName}</p>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-[var(--color-primary-200)] transition-colors">
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Account Number</p>
                                            <div className="flex items-center justify-between">
                                                <p className="text-slate-800 font-mono text-lg font-bold">{bankDetails.accountNumber}</p>
                                                {/* <button onClick={() => copyToClipboard(bankDetails.accountNumber)} className="text-[var(--color-primary-500)] opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Copy size={16} />
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 group hover:border-[var(--color-primary-200)] transition-colors">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">SWIFT Code</p>
                                        <div className="flex items-start gap-2">
                                            <Globe size={16} className="text-[var(--color-primary-500)] mt-1" />
                                            <div>
                                                <p className="text-slate-800 font-mono font-bold tracking-widest">{bankDetails.swiftCode}</p>
                                                <p className="text-slate-400 text-xs mt-1">For international transfers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <p className="text-sm text-slate-500 leading-relaxed italic">
                                        * Please reference your name or organization when making a transfer so we can acknowledge your support.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Impact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="space-y-6 md:pt-10"
                        >
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Support ODEC?</h3>

                            {[
                                { title: "Community Driven", text: "We work directly with local communities to identify needs and implement sustainable solutions." },
                                { title: "Transparent & Accountable", text: "We maintain strict financial discipline and regular reporting on all our projects." },
                                { title: "Holistic Approach", text: "From agriculture to health and education, we address the multifaceted nature of poverty." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1 bg-[var(--color-primary-100)] w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                        <CheckCircle2 size={16} className="text-[var(--color-primary-600)]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="pt-8">
                                <div className="bg-[var(--color-accent-500)]/10 rounded-2xl p-6 border border-[var(--color-accent-500)]/20">
                                    <h4 className="flex items-center gap-2 font-bold text-[var(--color-accent-700)] mb-2">
                                        <Heart size={20} className="fill-current" />
                                        Other Ways to Help
                                    </h4>
                                    <p className="text-sm text-slate-700 mb-4">
                                        Interested in volunteering or partnering with us? We'd love to hear from you.
                                    </p>
                                    <Button variant="outline" className="text-sm w-full sm:w-auto border-[var(--color-accent-600)] text-[var(--color-accent-700)] hover:bg-[var(--color-accent-50)]">
                                        Contact Us <ArrowRight size={16} className="ml-1" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;
