// 'use client';

import { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import { FaSquareGithub } from "react-icons/fa6";
import { useParallax } from "@/app/_lib/motion";
import SectionCard from "./SectionCard"
import { dm_serif_display } from "@/app/_ui/fonts";
import Stamp from "../Stamp";

export const IntroSection = () => {
    return (
        <SectionCard>
            <div className="absolute lg:left-1/2 lg:top-[8%] lg:h-5/6 lg:w-0 lg:border-r-2 border-accent-rgb border-b-2 h-0 w-[350px] top-2/3 left-[25px]"></div>
            <div className="h-full w-full flex flex-col lg:flex-row">
                <div className="basis-2/3 lg:basis-1/2 m-2 p-5 flex flex-col justify-center gap-5">
                    <h1 className={`text-4xl lg:text-5xl ${dm_serif_display.className}`}>
                        👋 Hi, I&apos;m <span className="underline decoration-accent-rgb decoration-8 text-nowrap">Kevin Li</span>
                    </h1>
                    <p className="text-lg">
                        I&apos;m a <b>Software Developer</b> who enjoys 
                    </p>
                </div>
                <div className="flex flex-row-reverse lg:flex-col basis-1/3 lg:basis-1/2 m-2">
                    <div className="m-2 flex flex-row-reverse">
                        <span className="lg:mr-16 mr-4 mt-4">
                            <Stamp src={"/gradportrait-zoomed.jpg"} alt={""} className={"w-[140px] h-[180px] lg:w-[320px] lg:h-[420px]"} />
                        </span>
                    </div>
                    <div className="m-2">

                    </div>
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
                <a className="w-[80px] h-[80px] hover:-rotate-6" href="https://github.com/Kleanur/personal-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaSquareGithub className="w-[80px] h-[80px] fill-highlight-rgb hover:w-[82px] hover:h-[82px] hover:fill-highlight2-rgb" />
                </a>
            </div>
        </SectionCard>
    )
}