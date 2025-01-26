'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const WorksLayout = ({ children, className }) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={clsx(
                'bg-stone-100/20 border border-stone-200/20 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8',
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export default WorksLayout;
