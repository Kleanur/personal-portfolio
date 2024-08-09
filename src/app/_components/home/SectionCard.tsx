'use client';

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { popInVariants, useParallax, useRotation } from "@/app/_lib/motion";

export default function SectionCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const bottomRef = useRef(null);
    const midRef = useRef(null);
    const bottomScrollYProgress = useScroll({ target: bottomRef }).scrollYProgress;
    const midScrollYProgress = useScroll({ target: midRef }).scrollYProgress;
    const rotate = useRotation(bottomScrollYProgress, 10);
    const y = useSpring(useParallax(midScrollYProgress, 10))

    return (
      <div className="relative flex lg:h-[90vh] h-[95vh] w-screen justify-center items-center snap-center">
        <div className="absolute" ref={midRef}></div>
        <motion.section 
          className="flex h-full w-full flex-col justify-center items-center absolute origin-bottom-left" 
          style={{ rotate }}
        >
          <motion.div 
            className="flex lg:h-5/6 lg:w-4/6 h-[95%] w-[90%] flex-col justify-center items-center rounded-3xl shadow-2xl card-border p-2" 
            initial="hidden" 
            animate="visible" 
            variants={popInVariants}
            style={{ y }}
          >
            <div className="h-full w-full rounded-3xl bg-slate-100">
              { children }
            </div>
          </motion.div>
        </motion.section>
        <div className="absolute bottom-0" ref={bottomRef}></div>
      </div>
    )
  }
  