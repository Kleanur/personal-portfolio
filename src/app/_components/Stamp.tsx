
import Image from "next/image";
import "@/app/_ui/stamp.css"

export default function Stamp({ width, height, src, alt }: Readonly<{ width: number, height: number, src: string, alt: string}>) {
    return (
        <div className={`stamp p-[10px] bg-white rotate-3`} style={{ width: width + 20, height: height + 20 }}>
            <Image 
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ width, height }}
            />
        </div>
    )
}