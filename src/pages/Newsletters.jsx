import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, Newspaper, X } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Newsletters = () => {
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
                // Filter Newsletter and News categories
                const filtered = data.filter(s => s.category === 'Newsletter' || s.category === 'News');
                setStories(filtered);
            }
        } catch (error) {
            console.error('Failed to fetch stories', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* --- Hero Section --- */}
            <section className="relative pt-40 pb-20 bg-[var(--color-primary-900)] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80" alt="News Background" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

                <div className="container px-6 mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6"
                    >
                        <Newspaper className="w-4 h-4 text-[var(--color-primary-400)]" />
                        <span className="text-sm font-bold tracking-wide uppercase">Latest Updates</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6"
                    >
                        News & <span className="text-[var(--color-primary-400)]">Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/70 max-w-2xl mx-auto"
                    >
                        Stay informed about our impact, upcoming events, and stories from the communities we serve.
                    </motion.p>
                </div>
            </section>

            {/* --- News Grid --- */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-12 h-12 border-4 border-[var(--color-primary-200)] border-t-[var(--color-primary-600)] rounded-full animate-spin mb-4"></div>
                            <p className="text-slate-500 font-medium">Loading newsletters...</p>
                        </div>
                    ) : stories.length === 0 ? (
                        <div className="max-w-md mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 text-center">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                                <Newspaper size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Coming Soon</h2>
                            <p className="text-slate-500 mb-8">
                                We are preparing our latest newsletters. Stay tuned!
                            </p>
                            <Button href="/" variant="secondary" className="w-full justify-center">
                                Return Home
                            </Button>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {stories.map((story, i) => (
                                <Card
                                    key={story.id}
                                    delay={i * 0.1}
                                    className="group cursor-pointer !p-0 overflow-hidden h-full flex flex-col"
                                    onClick={() => setSelectedStory(story)}
                                >
                                    <div className="h-60 overflow-hidden relative">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-[var(--color-primary-800)] shadow-sm">
                                                {story.category}
                                            </span>
                                        </div>
                                        <img
                                            src={story.image_url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80'}
                                            alt={story.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-900)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {new Date(story.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </div>
                                            {story.author && (
                                                <div className="flex items-center gap-1">
                                                    <User className="w-3.5 h-3.5" />
                                                    {story.author}
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary-600)] transition-colors line-clamp-2">
                                            {story.title}
                                        </h3>

                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                            {story.excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-slate-100">
                                            <div className="flex items-center text-[var(--color-primary-600)] font-bold text-sm group-hover:gap-2 transition-all">
                                                Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* --- Story Modal --- */}
            <AnimatePresence>
                {selectedStory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedStory(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header with Image */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={selectedStory.image_url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80'}
                                    alt={selectedStory.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedStory(null)}
                                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Category Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-[var(--color-primary-800)] shadow-sm">
                                        {selectedStory.category}
                                    </span>
                                </div>

                                {/* Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                                        {selectedStory.title}
                                    </h2>
                                    <div className="flex items-center gap-6 text-sm font-medium text-white/80">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(selectedStory.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        {selectedStory.author && (
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4" />
                                                {selectedStory.author}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="overflow-y-auto max-h-[calc(90vh-20rem)] p-8 md:p-12">
                                <div
                                    className="prose prose-lg max-w-none
                                        prose-headings:font-black prose-headings:text-slate-900
                                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                                        prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                                        prose-ul:my-6 prose-li:text-slate-600
                                        prose-strong:text-[var(--color-primary-700)] prose-strong:font-bold whitespace-pre-wrap"
                                >
                                    {selectedStory.content}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Newsletters;
