import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true, delay = 0, onClick }) => {
    const hasBg = className.includes('bg-');
    const hasBorder = className.includes('border-');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={hoverEffect ? {
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                borderColor: "var(--color-primary-300)"
            } : {}}
            onClick={onClick}
            className={`${!hasBg ? 'bg-white' : ''} ${!hasBorder ? 'border border-slate-100' : ''} rounded-[2.5rem] p-8 transition-all duration-500 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;