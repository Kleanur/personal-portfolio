'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { slideUpVariants } from "@/app/_lib/motion";

export default function TableBackground() {
    return (
        <motion.div 
        className="fixed bottom-0 -z-10 w-full h-1/6" 
        initial="hidden"
        animate="visible"
        variants={slideUpVariants}
      >
        <Image 
          src="/tabletop-cropped-2.png"
          alt=""
          fill
        />
      </motion.div>
    )
}