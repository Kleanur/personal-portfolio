import SectionCard from "../SectionCard"
import { dm_serif_display } from "@/app/_ui/fonts";
import Stamp from "@/app/_components/Stamp";
import { FaPhone, FaRegEnvelope, FaLinkedinIn } from "react-icons/fa6";
import HandWave from "../HandWave";

export default function IntroSection() {
    return (
        <SectionCard>
            <div className="absolute lg:left-2/3 lg:top-[8%] lg:h-5/6 lg:w-0 lg:border-r-2 border-b-2 h-0 w-[350px] top-2/3 left-[25px]"></div>
            <div className="h-full w-full flex flex-col lg:flex-row">
                <div className="basis-2/3 p-4 xl:p-8 flex flex-col justify-center gap-5 text-sm sm:text-base lg:text-lg">
                    <h1 className={`text-4xl lg:text-5xl ${dm_serif_display.className}`}>
                        <HandWave/> Hi, I&apos;m <span className="underline decoration-accent-rgb decoration-8 text-nowrap">Kevin Li</span>
                    </h1>
                    <p>
                        I&apos;m a <b>Software Developer</b> who loves problem solving and programming. I graduated from the <b>University of Waterloo</b> in 2024 with a Bachelor&apos;s in Computer Science.
                    </p>
                    <p>
                        I&apos;m passionate about many fields of technology and am currently interested in:
                    </p>
                    <ul className="list-disc ml-8 -mt-4">
                        <li className="mb-1">
                            Full-stack web and mobile development
                        </li>
                        <li className="mb-1">
                            Big data and distributed computing
                        </li>
                        <li>
                            IoT and connected vehicles
                        </li>
                    </ul>
                    <p>
                        I built this website using <b>Typescript</b>, <b>React</b>, and <b>Next.js</b> to teach myself about modern React development, and to have a hub to showcase my future projects.
                    </p>
                    <p>
                        I hope this site shows you a bit about what makes me tick!
                    </p>
                </div>
                <div className="flex flex-row lg:flex-col basis-1/3 px-2">
                    <div className="m-2 flex flex-row-reverse">
                        <span className="lg:mx-auto lg:mt-16 mr-4 my-auto">
                            <Stamp src={"/gradportrait-zoomed.jpg"} alt={""} className={"w-[140px] h-[180px] lg:w-[200] lg:h-[260] xl:w-[260px] xl:h-[340px]"} />
                        </span>
                    </div>
                    <ul className="lg:mx-auto lg:mt-8 my-auto xl:w-4/5">
                        <li className="border-b-2 my-2 py-1">
                            <FaRegEnvelope className="inline-block lg:size-5 size-4 mr-2"/>
                            <a className="underline lg:text-lg text-sm hover:no-underline" href="mailto:kevin.k348li@gmail.com" target="_blank" rel="noopener noreferrer">
                                kevin.k348li@gmail.com
                            </a>
                        </li>
                        <li className="border-b-2 my-2 py-1">
                            <FaPhone className="inline-block lg:size-5 size-4 mr-2"/>
                            <a className="underline lg:text-lg text-sm hover:no-underline" href="tel:kevin.k348li@gmail.com" target="_blank" rel="noopener noreferrer">
                                +1 (647) 678-1395
                            </a>
                        </li>
                        <li className="border-b-2 my-2 py-1">
                            <FaLinkedinIn className="inline-block lg:size-5 size-4 mr-2"/> 
                            <a className="underline lg:text-lg text-sm hover:no-underline" href="https://www.linkedin.com/in/kevin-li-a376b61a0/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </SectionCard>
    )
}
