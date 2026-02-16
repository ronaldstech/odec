import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none';

    const variants = {
        primary: 'bg-[var(--color-primary-800)] text-white hover:bg-[var(--color-primary-700)] shadow-lg hover:shadow-xl',
        secondary: 'bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)] shadow-lg hover:shadow-xl',
        outline: 'border-2 border-[var(--color-primary-800)] text-[var(--color-primary-800)] hover:bg-[var(--color-primary-800)] hover:text-white',
        glass: 'glass text-[var(--color-primary-900)] hover:bg-white/40',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
    };

    const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={styles}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
