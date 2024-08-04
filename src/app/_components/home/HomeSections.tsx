// 'use client';

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import { useParallax } from "@/app/_lib/motion";
import SectionCard from "./SectionCard"
import { dm_serif_display } from "@/app/_ui/fonts";
import "@/app/_ui/stamp.css"

export const IntroSection = () => {
    return (
        <SectionCard>
            <div className="absolute left-1/2 top-[16%] h-4/6 border-l-4 border-accent-rgb"></div>
            <div className="h-full w-full grid grid-cols-2 grid-rows-5">
                <div className="col-span-1 row-span-5 m-2 border border-black">
                    <h1 className={`text-5xl ${dm_serif_display.className}`}>
                        Hello World!
                    </h1>
                </div>
                <div className="col-span-1 row-span-2 m-2 border border-black">
                    <div className="stamp">
                    {/* <Image 
                        src="/tabletop-cropped-2.png"
                        alt=""
                        fill
                    /> */}
                    </div>
                </div>
                <div className="col-span-1 row-span-3 m-2 border border-black">

                </div>
            </div>
        </SectionCard>
    )
}

export const WhoSection = () => {
    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({ target: ref });
    // const y = useParallax(scrollYProgress, 300);
    return (
        <SectionCard>
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