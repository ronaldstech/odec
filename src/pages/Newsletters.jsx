import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, Newspaper, X } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Newsletters = () => {
    const [selectedStory, setSelectedStory] = useState(null);

    const stories = [
        {
            id: 1,
            title: "Empowering Rural Women Through Sustainable Agriculture",
            category: "Community Impact",
            date: "October 15, 2025",
            author: "Sarah Jere",
            image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&q=80",
            excerpt: "How ODEC's latest initiative in Nkhotakota is transforming the lives of 500 women farmers through climate-smart farming techniques.",
            fullStory: `
                <p>In the heart of Nkhotakota, a quiet revolution is taking place. ODEC's latest initiative is transforming the lives of 500 rural women farmers through innovative climate-smart farming techniques that are reshaping agricultural practices in the region.</p>
                
                <h3>The Challenge</h3>
                <p>For decades, women farmers in Nkhotakota have faced numerous challenges: unpredictable weather patterns, limited access to modern farming techniques, and a lack of financial resources. These obstacles have kept many families trapped in cycles of poverty and food insecurity.</p>
                
                <h3>Our Approach</h3>
                <p>ODEC's program focuses on three key pillars:</p>
                <ul>
                    <li><strong>Climate-Smart Agriculture Training:</strong> Women receive comprehensive training in drought-resistant crops, water conservation techniques, and sustainable soil management.</li>
                    <li><strong>Access to Resources:</strong> Participants are provided with quality seeds, farming tools, and micro-loans to invest in their farms.</li>
                    <li><strong>Community Support Networks:</strong> We've established farmer cooperatives where women can share knowledge, resources, and market their produce collectively.</li>
                </ul>
                
                <h3>Impact Stories</h3>
                <p>Meet Grace Banda, a 42-year-old mother of four who has seen her farm's productivity triple since joining the program. "Before ODEC, I struggled to feed my family. Now, I not only have enough food, but I'm also selling surplus at the market and saving money for my children's education," she shares with pride.</p>
                
                <p>The program has already shown remarkable results: average crop yields have increased by 65%, household incomes have risen by 40%, and food security has improved significantly across participating communities.</p>
                
                <h3>Looking Forward</h3>
                <p>As we expand this initiative to neighboring districts, we remain committed to empowering women as agents of change in their communities. This is just the beginning of a larger movement toward sustainable, resilient agriculture in Malawi.</p>
            `
        },
        {
            id: 2,
            title: "ODEC Launches New Youth Climate Action Program",
            category: "Youth Empowerment",
            date: "September 28, 2025",
            author: "Mike Banda",
            image: "https://images.unsplash.com/photo-1529390003868-6c640a9376c6?auto=format&fit=crop&q=80",
            excerpt: "A new engaging program designed to equip the youth of Salima with the tools and knowledge to combat local environmental challenges.",
            fullStory: `
                <p>ODEC is proud to announce the launch of our Youth Climate Action Program in Salima District, a groundbreaking initiative that puts young people at the forefront of environmental conservation and climate change adaptation.</p>
                
                <h3>Why Youth?</h3>
                <p>Young people represent 60% of Malawi's population and will bear the brunt of climate change impacts. By empowering them today, we're investing in a sustainable future for all.</p>
                
                <h3>Program Components</h3>
                <p>The program includes:</p>
                <ul>
                    <li><strong>Environmental Education:</strong> Interactive workshops on climate science, biodiversity, and ecosystem management.</li>
                    <li><strong>Practical Skills Training:</strong> Hands-on experience in tree planting, waste management, and renewable energy technologies.</li>
                    <li><strong>Leadership Development:</strong> Training in project management, community mobilization, and advocacy.</li>
                    <li><strong>Innovation Challenges:</strong> Youth-led competitions to develop creative solutions to local environmental problems.</li>
                </ul>
                
                <h3>Early Success</h3>
                <p>In just the first month, 150 young people have enrolled, and they've already planted 2,000 trees and organized three community clean-up campaigns. The enthusiasm is contagious!</p>
                
                <p>"This program has opened my eyes to the power we have as young people to create change," says Chisomo, a 19-year-old participant. "I'm not just learning about climate change—I'm doing something about it."</p>
                
                <h3>Join the Movement</h3>
                <p>We're calling on all young people in Salima to join this movement. Together, we can build a greener, more resilient future for our communities.</p>
            `
        },
        {
            id: 3,
            title: "Quarterly Report: Resilience in the Face of Drought",
            category: "Reports",
            date: "September 10, 2025",
            author: "ODEC Admin",
            image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&q=80",
            excerpt: "An in-depth look at how our adaptive strategies have helped communities in Chikwawa maintain food security despite recent weather shocks.",
            fullStory: `
                <p>This quarter has tested the resilience of communities across Malawi, with Chikwawa experiencing one of the most severe droughts in recent years. This report examines how ODEC's adaptive strategies have helped maintain food security in the face of these challenges.</p>
                
                <h3>The Situation</h3>
                <p>Between June and August 2025, Chikwawa received only 30% of expected rainfall, threatening the livelihoods of thousands of smallholder farmers. Traditional farming methods proved inadequate in these conditions.</p>
                
                <h3>Our Response</h3>
                <p>ODEC implemented a multi-faceted response strategy:</p>
                <ul>
                    <li><strong>Emergency Seed Distribution:</strong> 1,200 households received drought-resistant seed varieties.</li>
                    <li><strong>Water Harvesting Systems:</strong> Installation of 45 rainwater harvesting systems in strategic locations.</li>
                    <li><strong>Irrigation Support:</strong> Training and equipment for small-scale irrigation techniques.</li>
                    <li><strong>Nutrition Support:</strong> Temporary food assistance for the most vulnerable families.</li>
                </ul>
                
                <h3>Results</h3>
                <p>Despite the harsh conditions, communities showed remarkable resilience:</p>
                <ul>
                    <li>85% of participating households maintained adequate food stocks</li>
                    <li>Malnutrition rates remained stable, avoiding the typical drought-related spike</li>
                    <li>Community cohesion strengthened through cooperative farming initiatives</li>
                </ul>
                
                <h3>Lessons Learned</h3>
                <p>This experience reinforced the importance of proactive climate adaptation. Communities that had previously participated in ODEC's resilience-building programs fared significantly better than those without such preparation.</p>
                
                <h3>Moving Forward</h3>
                <p>We're expanding our drought preparedness programs to reach 5,000 additional households before the next dry season. Prevention and preparation remain our most powerful tools against climate shocks.</p>
            `
        },
        {
            id: 4,
            title: "Partnering for Change: ODEC x Global Future",
            category: "Partnerships",
            date: "August 22, 2025",
            author: "Chisomo Phiri",
            image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80",
            excerpt: "We are thrilled to announce a strategic partnership with Global Future to expand our clean water initiatives across three districts.",
            fullStory: `
                <p>ODEC is excited to announce a transformative partnership with Global Future, a leading international development organization. This collaboration will significantly expand our clean water and sanitation initiatives across Nkhotakota, Salima, and Kasungu districts.</p>
                
                <h3>Partnership Overview</h3>
                <p>This three-year partnership brings together ODEC's deep community connections and local expertise with Global Future's technical resources and funding capacity. Together, we aim to provide clean water access to 50,000 people by 2028.</p>
                
                <h3>Project Components</h3>
                <p>The partnership will focus on:</p>
                <ul>
                    <li><strong>Borehole Drilling:</strong> Installation of 75 new boreholes in water-scarce areas</li>
                    <li><strong>Water Point Rehabilitation:</strong> Repair and upgrade of 100 existing but non-functional water points</li>
                    <li><strong>WASH Education:</strong> Comprehensive hygiene and sanitation training for 200 community health workers</li>
                    <li><strong>Community Management:</strong> Training water point committees to ensure long-term sustainability</li>
                </ul>
                
                <h3>Why This Matters</h3>
                <p>Access to clean water is fundamental to community health, education, and economic development. Currently, many families in our target areas walk over 5 kilometers daily to fetch water, with women and girls bearing the primary burden.</p>
                
                <p>"This partnership represents a major step forward in our mission to build resilient communities," says Josephy Kitha, ODEC's Executive Director. "Clean water is not just about health—it's about dignity, opportunity, and hope."</p>
                
                <h3>Community Involvement</h3>
                <p>Local communities will be active partners throughout the project, from site selection to maintenance. This ensures that solutions are culturally appropriate and sustainable long after the project period ends.</p>
                
                <h3>Timeline</h3>
                <p>Phase 1 begins in October 2025, with the first 25 boreholes scheduled for completion by March 2026. We'll be sharing regular updates on our progress.</p>
            `
        },
        {
            id: 5,
            title: "The State of Education in Rural Malawi",
            category: "Education",
            date: "August 05, 2025",
            author: "Dr. L. Mwale",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80",
            excerpt: "Analyzing the impact of recent infrastructure projects on school attendance and literacy rates in underserved regions.",
            fullStory: `
                <p>Education remains one of the most powerful tools for breaking cycles of poverty and building resilient communities. This report examines the current state of education in rural Malawi and the impact of ODEC's recent infrastructure investments.</p>
                
                <h3>Current Challenges</h3>
                <p>Rural schools in Malawi face numerous obstacles:</p>
                <ul>
                    <li>Overcrowded classrooms with student-teacher ratios exceeding 100:1</li>
                    <li>Lack of basic infrastructure including classrooms, desks, and sanitation facilities</li>
                    <li>Long distances to schools, particularly affecting girls' attendance</li>
                    <li>Limited teaching materials and resources</li>
                    <li>High dropout rates, especially at secondary level</li>
                </ul>
                
                <h3>ODEC's Interventions</h3>
                <p>Over the past two years, ODEC has invested in education infrastructure across five districts:</p>
                <ul>
                    <li>Construction of 12 new classroom blocks</li>
                    <li>Provision of 2,400 desks and chairs</li>
                    <li>Installation of separate toilet facilities for boys and girls at 8 schools</li>
                    <li>Establishment of 3 community libraries</li>
                    <li>Training of 45 teachers in modern pedagogical methods</li>
                </ul>
                
                <h3>Measurable Impact</h3>
                <p>The results have been encouraging:</p>
                <ul>
                    <li><strong>Attendance:</strong> Overall school attendance increased by 23% in project schools</li>
                    <li><strong>Girls' Education:</strong> Female enrollment rose by 31%, with dropout rates falling by 18%</li>
                    <li><strong>Learning Outcomes:</strong> Literacy rates improved by 15% in grades 1-4</li>
                    <li><strong>Community Engagement:</strong> Parent participation in school activities increased significantly</li>
                </ul>
                
                <h3>Success Story: Benga Primary School</h3>
                <p>At Benga Primary School, the transformation has been remarkable. Before ODEC's intervention, 180 students crowded into two dilapidated classrooms. Today, the school has four new classrooms, adequate desks, and proper sanitation facilities. Enrollment has grown to 320 students, and test scores have improved dramatically.</p>
                
                <p>"The new classrooms have changed everything," says Headteacher Mr. Phiri. "Children can actually concentrate on learning instead of being distracted by overcrowding and discomfort."</p>
                
                <h3>The Road Ahead</h3>
                <p>While progress is encouraging, much work remains. ODEC is committed to expanding these interventions to reach more schools and more children. Education is not just about buildings—it's about creating environments where every child can reach their full potential.</p>
                
                <h3>How You Can Help</h3>
                <p>Supporting education infrastructure requires sustained investment. We welcome partnerships with organizations and individuals who share our vision of quality education for all rural children.</p>
            `
        },
        {
            id: 6,
            title: "Community Voices: Stories of Hope",
            category: "Stories",
            date: "July 19, 2025",
            author: "Grace Tembo",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
            excerpt: "Personal accounts from beneficiaries of the 'Green Villages' project, sharing their journeys towards self-reliance.",
            fullStory: `
                <p>The 'Green Villages' project represents more than just environmental conservation—it's about transforming lives and building sustainable futures. Here are the stories of three individuals whose lives have been changed by this initiative.</p>
                
                <h3>Mercy's Story: From Charcoal Seller to Tree Farmer</h3>
                <p>Mercy Phiri, 35, used to make her living selling charcoal—a practice that contributed to deforestation while barely providing enough income to feed her family.</p>
                
                <p>"I knew cutting trees was wrong, but I had no choice," Mercy explains. "It was the only way I could earn money."</p>
                
                <p>Through the Green Villages project, Mercy received training in agroforestry and was provided with seedlings to start a tree nursery. Today, she manages a thriving nursery that supplies fruit and timber trees to her community.</p>
                
                <p>"Now I'm growing trees instead of cutting them down," she says with a smile. "My income has tripled, and I'm proud that my children will inherit a greener village."</p>
                
                <h3>Patrick's Journey: Youth Leader and Environmental Champion</h3>
                <p>At 22, Patrick Banda was unemployed and frustrated, like many young people in his village. The Green Villages project gave him a new purpose.</p>
                
                <p>Patrick became one of the project's youth coordinators, leading tree-planting campaigns and teaching sustainable farming practices to his peers. He's now a respected community leader and environmental advocate.</p>
                
                <p>"This project showed me that young people can be part of the solution," Patrick shares. "We've planted over 5,000 trees in our village, and we're not stopping there."</p>
                
                <p>Patrick's leadership has inspired dozens of other young people to join the environmental movement, creating a ripple effect of positive change.</p>
                
                <h3>Esther's Transformation: Widow Turned Entrepreneur</h3>
                <p>Esther Mkandawire, 58, lost her husband three years ago and struggled to support her five grandchildren. The Green Villages project introduced her to sustainable beekeeping.</p>
                
                <p>"I was afraid of bees at first," Esther laughs. "But the training gave me confidence, and now beekeeping is my main source of income."</p>
                
                <p>Esther now manages 10 beehives and sells honey at local markets. The income has enabled her to send all her grandchildren to school and improve their home.</p>
                
                <p>"The bees need trees, so I protect the forest," she explains. "It's a beautiful cycle—I take care of nature, and nature takes care of me."</p>
                
                <h3>The Bigger Picture</h3>
                <p>These three stories represent hundreds of similar transformations happening across our Green Villages project sites. When we invest in people and environment together, everyone wins.</p>
                
                <p>The project has planted over 50,000 trees, created 300 sustainable livelihoods, and restored 200 hectares of degraded land. But more importantly, it has restored hope and dignity to communities that had been struggling.</p>
                
                <h3>Join Us</h3>
                <p>These stories of hope are just the beginning. With your support, we can expand the Green Villages project to reach more communities and transform more lives. Together, we can build a greener, more prosperous Malawi.</p>
            `
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
                                            Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
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
                                    src={selectedStory.image}
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
                                            {selectedStory.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            {selectedStory.author}
                                        </div>
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
                                        prose-strong:text-[var(--color-primary-700)] prose-strong:font-bold"
                                    dangerouslySetInnerHTML={{ __html: selectedStory.fullStory }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Newsletters;
