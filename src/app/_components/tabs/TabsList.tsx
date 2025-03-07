
import React from "react";
import "@/app/_ui/tabs.css";

export default function TabsList({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <ul className="flex flex-row lg:flex-col gap-4 lg:gap-0 overflow-x-scroll lg:overflow-x-auto lg:overflow-y-auto w-full lg:min-w-fit lg:w-auto lg:max-h-full tablist items-center">{children}</ul>;
}
