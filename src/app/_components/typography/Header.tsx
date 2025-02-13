
import React from "react";
import { dm_serif_display } from "@/app/_ui/fonts";

export const Header = ({
    children,
    className = "",
}: Readonly<{
    children: React.ReactNode,
    className?: string
}>) => {
    return <h1 className={`text-4xl lg:text-5xl ${dm_serif_display.className} ${className}`}>{children}</h1>
}

export const HeaderUnderline = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <span className="underline decoration-accent-rgb decoration-8 text-nowrap">{children}</span>
}
