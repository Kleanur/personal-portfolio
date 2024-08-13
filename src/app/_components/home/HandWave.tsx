'use client';
import { motion } from "framer-motion";
import { waveVariants } from "@/app/_lib/motion";

export default function HandWave() {
    return (
        <motion.div
            className="inline-block origin-bottom-right cursor-default"
            initial={{ scale: 1 }}
            animate="loadIn"
            whileHover="wave"
            variants={waveVariants}
        >
            👋
        </motion.div> 
    )
}