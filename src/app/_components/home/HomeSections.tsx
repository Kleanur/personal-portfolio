// 'use client';

import { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import { useParallax } from "@/app/_lib/motion";
import SectionCard from "./SectionCard"
import { dm_serif_display } from "@/app/_ui/fonts";

export const WhoSection = () => {
    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({ target: ref });
    // const y = useParallax(scrollYProgress, 300);
    return (
        <SectionCard>
            <div className="my-auto"></div>
            {/* <div className="my-auto" ref={ref}></div>
            <motion.h1 className={`text-5xl text-center absolute ${dm_serif_display.className}`} style={{ y }}>
                {`Section`}
            </motion.h1> */}
            <h1 className={`text-5xl text-center absolute ${dm_serif_display.className}`}>
                Section
            </h1>
        </SectionCard>
    )
}