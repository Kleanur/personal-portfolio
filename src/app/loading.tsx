import { dm_serif_display } from "@/app/_ui/fonts";

export default function Loading() {
    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center">
            <h1 className={`text-3xl text-center ${dm_serif_display.className}`}>Loading...</h1>
        </div>
    )
  }