
import { dm_serif_display } from "@/app/_ui/fonts";
import SectionCard from "../SectionCard"
import { FaSquareGithub } from "react-icons/fa6";

export default function WIPSection() {
    return (
        <SectionCard>
            <div className="h-full w-full flex flex-col justify-center items-center gap-5 p-2">
                <h1 className={`text-5xl text-center ${dm_serif_display.className} lg:underline decoration-accent-rgb decoration-8`}>
                    This site is still under construction.
                </h1>
                <p className="text-lg text-center">
                    The site is a brand new project and actively evolving as I work on it!
                    <br/>
                    Check out my source code on GitHub to see my activity and what I have planned:
                </p>
                <a className="w-[80px] h-[80px] hover:-rotate-6 transform ease-out duration-300" href="https://github.com/Kleanur/personal-portfolio" target="_blank" rel="noopener noreferrer">
                    <FaSquareGithub className="w-[80px] h-[80px] fill-highlight-rgb hover:w-[82px] hover:h-[82px] hover:fill-highlight2-rgb transform ease-out duration-300 origin-center" />
                </a>
            </div>
        </SectionCard>
    )
}
