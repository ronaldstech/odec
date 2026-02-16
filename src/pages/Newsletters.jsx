import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Newspaper } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Newsletters = () => {
    const stories = [
        {
            id: 1,
            title: "Empowering Rural Women Through Sustainable Agriculture",
            category: "Community Impact",
            date: "October 15, 2025",
            author: "Sarah Jere",
            image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&q=80",
            excerpt: "How ODEC's latest initiative in Nkhotakota is transforming the lives of 500 women farmers through climate-smart farming techniques."
        },
        {
            id: 2,
            title: "ODEC Launches New Youth Climate Action Program",
            category: "Youth Empowerment",
            date: "September 28, 2025",
            author: "Mike Banda",
            image: "https://images.unsplash.com/photo-1529390003868-6c640a9376c6?auto=format&fit=crop&q=80",
            excerpt: "A new engaging program designed to equip the youth of Salima with the tools and knowledge to combat local environmental challenges."
        },
        {
            id: 3,
            title: "Quarterly Report: Resilience in the Face of Drought",
            category: "Reports",
            date: "September 10, 2025",
            author: "ODEC Admin",
            image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&q=80",
            excerpt: "An in-depth look at how our adaptive strategies have helped communities in Chikwawa maintain food security despite recent weather shocks."
        },
        {
            id: 4,
            title: "Partnering for Change: ODEC x Global Future",
            category: "Partnerships",
            date: "August 22, 2025",
            author: "Chisomo Phiri",
            image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80",
            excerpt: "We are thrilled to announce a strategic partnership with Global Future to expand our clean water initiatives across three districts."
        },
        {
            id: 5,
            title: "The State of Education in Rural Malawi",
            category: "Education",
            date: "August 05, 2025",
            author: "Dr. L. Mwale",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80",
            excerpt: "Analyzing the impact of recent infrastructure projects on school attendance and literacy rates in underserved regions."
        },
        {
            id: 6,
            title: "Community Voices: Stories of Hope",
            category: "Stories",
            date: "July 19, 2025",
            author: "Grace Tembo",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
            excerpt: "Personal accounts from beneficiaries of the 'Green Villages' project, sharing their journeys towards self-reliance."
        }
    ];

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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stories.map((story, i) => (
                            <Card key={story.id} delay={i * 0.1} className="group cursor-pointer !p-0 overflow-hidden h-full flex flex-col">
                                <div className="h-60 overflow-hidden relative">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-[var(--color-primary-800)] shadow-sm">
                                            {story.category}
                                        </span>
                                    </div>
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-900)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {story.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3.5 h-3.5" />
                                            {story.author}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary-600)] transition-colors">
                                        {story.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                                        {story.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <div className="flex items-center text-[var(--color-primary-600)] font-bold text-sm group-hover:gap-2 transition-all">
                                            Read Story <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center">
                        <Button variant="outline" className="border-slate-200 text-slate-600">
                            Load More Stories
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsletters;
