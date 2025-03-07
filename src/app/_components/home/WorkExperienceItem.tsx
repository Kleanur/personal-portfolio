import Image from "next/image";
import { Text } from "../typography/Text"
import { FaChevronRight } from "react-icons/fa6";

export default function WorkExperienceItem({ 
    src, 
    alt = "", 
    width, 
    height, 
    title, 
    company,
    iconColor = "white",
}: Readonly<{ 
    src: string, 
    alt?: string, 
    width: number,
    height: number,
    title: string,
    company: string,
    iconColor?: string
}>) {
    return (
        <div className="flex flex-row items-center gap-4 pl-2 lg:pr-3">
            <div className={`flex items-center justify-center w-[64px] h-[64px] p-[4px] bg-${iconColor} shadow-lg rounded-xl`}>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full"
                />
            </div>
            <div className="flex flex-col flex-grow">
                <Text className="text-wrap"><b>{title}</b></Text>
                <Text>{company}</Text>
            </div>
            <FaChevronRight className="hidden lg:block"/>
        </div>
    )
}
