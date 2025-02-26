
import React from "react";
import "@/app/_ui/tabs.css";

export default function TabsList({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <ul className="flex flex-row lg:flex-col overflow-x-scroll lg:overflow-x-auto w-full lg:min-w-fit lg:w-auto lg:h-full tablist">{children}</ul>;
}
