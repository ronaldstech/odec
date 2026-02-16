import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact = () => {
    return (
        <div className="pb-20">
            {/* Header */}
            <section className="bg-[var(--color-primary-900)] pt-32 pb-20 text-white">
                <div className="container px-6 mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6"
                    >
                        Get In Touch
                    </motion.h1>
                    <p className="text-xl text-[var(--color-primary-200)] max-w-2xl mx-auto">
                        Whether you want to volunteer, partner with us, or just say hello, we'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-[var(--color-bg-main)]">
                <div className="container px-6 mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <h2 className="text-3xl font-bold text-[var(--color-primary-900)] mb-8">Contact Information</h2>

                            <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Email Us</h4>
                                    <p className="text-[var(--color-text-muted)]">odecmw@gmail.com</p>
                                    <p className="text-[var(--color-text-muted)]">odec24@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Call Us</h4>
                                    <p className="text-[var(--color-text-muted)]">+265 (0) 993 452 511</p>
                                    <p className="text-[var(--color-text-muted)]">+265 (0) 998 523 213</p>
                                </div>
                            </div>

                            <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary-100)] text-[var(--color-primary-700)] flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Visit Us</h4>
                                    <p className="text-[var(--color-text-muted)]">Benga Community Development Centre</p>
                                    <p className="text-[var(--color-text-muted)]">P/B 5 Benga, Nkhotakota, Malawi</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <Card className="p-10 bg-white border-none shadow-xl">
                                <div className="flex items-center gap-3 mb-8">
                                    <MessageSquare className="w-8 h-8 text-[var(--color-primary-600)]" />
                                    <h3 className="text-3xl font-bold">Send us a Message</h3>
                                </div>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[var(--color-text-main)] ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-6 py-4 rounded-2xl bg-[var(--color-bg-main)] border-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[var(--color-text-main)] ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full px-6 py-4 rounded-2xl bg-[var(--color-bg-main)] border-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[var(--color-text-main)] ml-1">Subject</label>
                                        <select className="w-full px-6 py-4 rounded-2xl bg-[var(--color-bg-main)] border-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all appearance-none cursor-pointer">
                                            <option>General Inquiry</option>
                                            <option>Volunteering</option>
                                            <option>Partnership</option>
                                            <option>Donation</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[var(--color-text-main)] ml-1">Message</label>
                                        <textarea
                                            rows="6"
                                            placeholder="How can we help you?"
                                            className="w-full px-6 py-4 rounded-2xl bg-[var(--color-bg-main)] border-none focus:ring-2 focus:ring-[var(--color-primary-500)] transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <Button variant="primary" size="lg" className="w-full md:w-auto">
                                        Send Message <Send className="ml-2 w-5 h-5" />
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="section pb-40">
                <div className="container mx-auto">
                    <div className="w-full h-[500px] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.2125358946732!2d34.25924717514127!3d-13.370786586982462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x191fc59af8d5f183%3A0xf08cd9b724602232!2sBenga%20trading%20centre!5e1!3m2!1sen!2smw!4v1771230866740!5m2!1sen!2smw"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
