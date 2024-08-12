
import Image from "next/image";
import "@/app/_ui/stamp.css"

export default function Stamp({ src, alt, className }: Readonly<{ src: string, alt: string, className: string}>) {
    return (
        <div className={`stamp p-[10px] bg-white rotate-3 ${className}`}>
            <Image 
                src={src}
                alt={alt}
                fill
                className={"p-[10px]"}
            />
        </div>
    )
}