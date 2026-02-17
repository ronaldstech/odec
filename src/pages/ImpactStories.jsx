import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Calendar, User, X } from 'lucide-react';
import Button from '../components/Button';

const ImpactStories = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStory, setSelectedStory] = useState(null);

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        try {
            const response = await fetch('/api/stories.php');
            const data = await response.json();
            if (Array.isArray(data)) {
                // Filter only Impact Stories
                const filtered = data.filter(s => s.category === 'Impact Story');
                setStories(filtered);
            }
        } catch (error) {
            console.error('Failed to fetch stories', error);
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
                            Real Lives, Real Change
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Impact <span className="text-[var(--color-primary-400)]">Stories</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Discover the personal journeys of individuals and communities transformed by our partnership.
                        </p>
                    </motion.div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary-600)] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent-600)] rounded-full blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
            </section>

            <section className="py-20 px-6">
                <div className="container mx-auto">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-12 h-12 border-4 border-[var(--color-primary-200)] border-t-[var(--color-primary-600)] rounded-full animate-spin mb-4"></div>
                            <p className="text-slate-500 font-medium">Loading stories...</p>
                        </div>
                    ) : stories.length === 0 ? (
                        <div className="max-w-md mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 text-center">
                            <div className="w-20 h-20 bg-[var(--color-accent-100)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-accent-600)]">
                                <Sparkles size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h2>
                            <p className="text-slate-500 mb-8">
                                We are gathering more inspiring stories from the field. Please check back later.
                            </p>
                            <Button href="/" variant="secondary" className="w-full justify-center">
                                Return Home <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {stories.map((story, index) => (
                                <motion.div
                                    key={story.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={story.image_url || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80'}
                                            alt={story.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[var(--color-primary-700)] shadow-sm">
                                                {story.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{new Date(story.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                            </div>
                                            {story.author && (
                                                <div className="flex items-center gap-1">
                                                    <User size={14} />
                                                    <span>{story.author}</span>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-primary-600)] transition-colors line-clamp-2">
                                            {story.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {story.excerpt}
                                        </p>
                                        <div className="mt-auto pt-6 border-t border-slate-50">
                                            <button
                                                onClick={() => setSelectedStory(story)}
                                                className="flex items-center gap-2 text-[var(--color-primary-600)] font-bold text-sm group/btn"
                                            >
                                                Read Full Story
                                                <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Story Detail Modal */}
            <AnimatePresence>
                {selectedStory && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedStory(null)}
                            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
                        >
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
                            >
                                <X size={24} />
                            </button>

                            <div className="overflow-y-auto no-scrollbar">
                                <div className="h-64 md:h-96 relative">
                                    <img
                                        src={selectedStory.image_url || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80'}
                                        alt={selectedStory.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                                </div>
                                <div className="px-8 md:px-16 pb-16 -mt-20 relative z-10">
                                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100">
                                        <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-6">
                                            <span className="bg-[var(--color-primary-50)] text-[var(--color-primary-700)] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                                                {selectedStory.category}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{new Date(selectedStory.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                            </div>
                                            {selectedStory.author && (
                                                <div className="flex items-center gap-1">
                                                    <User size={14} />
                                                    <span>{selectedStory.author}</span>
                                                </div>
                                            )}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
                                            {selectedStory.title}
                                        </h2>
                                        <div className="prose prose-slate max-w-none">
                                            <p className="text-lg text-slate-600 font-medium mb-8 leading-relaxed italic border-l-4 border-[var(--color-primary-400)] pl-6">
                                                {selectedStory.excerpt}
                                            </p>
                                            <div className="text-slate-600 leading-relaxed space-y-4 whitespace-pre-wrap">
                                                {selectedStory.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ImpactStories;

