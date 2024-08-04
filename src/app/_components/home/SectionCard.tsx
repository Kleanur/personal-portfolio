'use client';

import { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import { popInVariants, useRotation } from "@/app/_lib/motion";

export default function SectionCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const rotate = useRotation(scrollYProgress, 10);

    return (
      <div className="relative flex h-[90vh] w-screen justify-center items-center">
        <motion.section 
          className="flex h-full w-full flex-col justify-center items-center snap-center absolute origin-bottom-left" 
          style={{ rotate }}
        >
          <motion.div 
            className="flex h-5/6 w-4/6 flex-col justify-center items-center rounded-3xl shadow-2xl card-border p-2" 
            initial="hidden" 
            animate="visible" 
            variants={popInVariants}
          >
            <div className="h-full w-full rounded-3xl bg-slate-100">
              { children }
            </div>
          </motion.div>
        </motion.section>
        <div className="absolute bottom-0" ref={ref}></div>
      </div>
    )
  }
  