"use client";
import { motion, useReducedMotion } from "framer-motion";
export function FadeIn({ children, className, delay = 0 }) {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
        return <div className={className}>{children}</div>;
    }
    return (<motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-64px" }} transition={{ duration: 0.45, delay, ease: "easeOut" }}>
      {children}
    </motion.div>);
}
