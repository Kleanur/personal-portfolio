// 'use client';

import { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import { useParallax } from "@/app/_lib/motion";
import SectionCard from "./SectionCard"
import { dm_serif_display } from "@/app/_ui/fonts";
import Stamp from "../Stamp";

export const IntroSection = () => {
    return (
        <SectionCard>
            <div className="absolute lg:left-1/2 lg:top-[8%] lg:h-5/6 lg:w-0 lg:border-r-2 border-accent-rgb border-b-2 h-0 w-5/6 top-1/2"></div>
            <div className="h-full w-full max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-2 lg:grid-rows-5">
                <div className="max-lg:basis-1/2 lg:col-span-1 lg:row-span-5 m-2 flex flex-col justify-center items-center">
                    <h1 className={`text-4xl lg:text-5xl ${dm_serif_display.className}`}>
                        👋 Hi, I&apos;m <span className="underline decoration-accent-rgb decoration-8 text-nowrap">Kevin Li</span>
                    </h1>
                </div>
                <div className="lg:col-span-1 lg:row-span-3 lg:flex lg:flex-row-reverse m-2">
                    <span className="lg:mr-16 lg:mt-4">
                        <Stamp width={300} height={400} src={"/gradportrait-zoomed.jpg"} alt={""} />
                    </span>
                </div>
                <div className="lg:col-span-1 lg:row-span-2 m-2">

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

export const WIPSection = () => {
    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({ target: ref });
    // const y = useParallax(scrollYProgress, 300);
    return (
        <SectionCard>
            <div className="h-full w-full flex flex-col justify-center items-center gap-5 p-2">
                <h1 className={`text-5xl text-center ${dm_serif_display.className} lg:underline decoration-accent-rgb decoration-8`}>
                    This site is still under construction.
                </h1>
                <p className="text-lg text-center">
                    The site is actively evolving as I work on it!
                    <br/>
                    Check out my source code on GitHub to see my activity and what I have planned:
                </p>
            </div>
        </SectionCard>
    )
}