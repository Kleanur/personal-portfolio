
import React from "react";

export default function TabsList({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <ul className="flex flex-col overflow-scroll w-auto p-2">{children}</ul>;
}
