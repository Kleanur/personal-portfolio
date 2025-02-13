import React from "react";

export const Text = ({
    children,
    className = "",
}: Readonly<{
    children: React.ReactNode,
    className?: string
}>) => {
    return <p className={`text-sm sm:text-base lg:text-lg ${className}`}>{children}</p>
}
