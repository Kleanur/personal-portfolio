
import { SiFord } from "react-icons/si";
import SectionCard from "../SectionCard"
import { dm_serif_display } from "@/app/_ui/fonts";
import Image from "next/image";

export default function ExperienceSection() {
    return (
        <SectionCard>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full">
                <div className="flex flex-col justify-center h-full p-5 basis-1/2">
                    <h1 className={`text-5xl ${dm_serif_display.className}`}>
                        I've done work with...
                    </h1>
                    <ul className="text-lg" role="tablist">
                        <li>
                            <SiFord className="inline-block size-16 border border-black"/>
                        </li>
                        <li>
                            <Image
                                src="/login_ID_logo.png"
                                alt=""
                                width={128}
                                height={128}
                                className="size-16 border border-black"
                            />
                        </li>
                        <li>
                            <Image
                                src="/telus-t-logo.svg"
                                alt=""
                                width={128}
                                height={128}
                                className="size-16 rounded-xl bg-accent-rgb border border-black"
                            />
                        </li>
                    </ul>
                </div>
                <div className="basis-1/2">

                </div>
            </div>
            
        </SectionCard>
    )
}
