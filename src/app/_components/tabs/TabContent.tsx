import React from "react";

export default function TabContent({
	tabValue,
	openTab,
	children,
}: Readonly<{
	tabValue: string,
	openTab: string,
	children: React.ReactNode;
}>) {
	return (
		<div className={tabValue === openTab ? "block" : "hidden"}>{children}</div>
	);
}
