
import SectionCard from "../SectionCard"
import { dm_serif_display } from "@/app/_ui/fonts";

export default function ExperienceSection() {
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
