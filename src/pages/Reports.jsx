import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const Reports = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            const response = await fetch('/api/reports.php');
            const data = await response.json();
            if (Array.isArray(data)) {
                setReports(data);
            }
        } catch (error) {
            console.error('Failed to fetch reports', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative bg-[var(--color-primary-900)] py-20 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Transparency & Accountability
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Annual <span className="text-[var(--color-primary-400)]">Reports</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Detailed insights into our financial performance, project outcomes, and strategic direction.
                        </p>
                    </motion.div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-primary-600)] rounded-full blur-[120px] opacity-20 -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent-600)] rounded-full blur-[120px] opacity-10 translate-y-1/2 translate-x-1/2"></div>
            </section>

            <section className="py-20 px-6">
                <div className="container mx-auto">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-12 h-12 border-4 border-[var(--color-primary-200)] border-t-[var(--color-primary-600)] rounded-full animate-spin mb-4"></div>
                            <p className="text-slate-500 font-medium">Loading reports...</p>
                        </div>
                    ) : reports.length === 0 ? (
                        <div className="max-w-md mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 text-center">
                            <div className="w-20 h-20 bg-[var(--color-primary-100)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary-600)]">
                                <FileText size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h2>
                            <p className="text-slate-500 mb-8">
                                We are currently compiling our latest annual reports. Please check back shortly.
                            </p>
                            <Button href="/" variant="primary" className="w-full justify-center">
                                Return Home
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {reports.map((report, index) => (
                                <motion.div
                                    key={report.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 p-6 flex flex-col"
                                >
                                    <div className="relative h-64 bg-slate-50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                                        {report.thumbnail_url ? (
                                            <img
                                                src={report.thumbnail_url}
                                                alt={report.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <FileText size={80} className="text-slate-200 group-hover:text-[var(--color-primary-200)] transition-colors" />
                                        )}
                                        <div className="absolute top-4 right-4 bg-[var(--color-primary-900)] text-white px-3 py-1 rounded-full text-xs font-black shadow-lg">
                                            {report.year}
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 text-[var(--color-primary-600)] text-[10px] font-black uppercase tracking-wider mb-2">
                                            <Calendar size={12} />
                                            <span>Annual Publication</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary-600)] transition-colors">
                                            {report.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                            {report.description || 'Access our comprehensive report covering projects, finances, and impact for the year.'}
                                        </p>
                                        <div className="mt-auto">
                                            <a
                                                href={report.file_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-[var(--color-primary-700)] text-white py-4 rounded-xl font-bold transition-all transform group-hover:translate-y-[-4px] active:scale-95 shadow-lg shadow-slate-900/10 hover:shadow-var(--color-primary-900)/20"
                                            >
                                                <Download size={18} />
                                                Download Report (PDF)
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Reports;

