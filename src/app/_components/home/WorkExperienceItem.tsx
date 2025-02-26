import Image from "next/image";
import { Text } from "../typography/Text"

export default function WorkExperienceItem({ 
    src, 
    alt, 
    width, 
    height, 
    title, 
    company 
}: Readonly<{ 
    src: string, 
    alt: string, 
    width: number,
    height: number,
    title: string,
    company: string
}>) {
    return (
        <div className="flex flex-row items-center gap-4">
            <div className="flex items-center justify-center w-[64px] h-[64px] p-[4px] bg-slate-200 rounded-xl">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full"
                />
            </div>
            <div className="flex flex-col">
                <Text className="text-wrap"><b>{title}</b></Text>
                <Text>{company}</Text>
            </div>
        </div>
    )
}
