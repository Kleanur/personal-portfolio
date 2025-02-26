import React from "react";

export default function Tab({
	tabValue,
	onClick,
	children,
}: Readonly<{
	tabValue: string,
	onClick: (value: string) => void,
	children: React.ReactNode,
}>) {
	return (
		<li className="snap-start lg:snap-none">
			<a
				onClick={() => { onClick(tabValue) }}
				className="inline-block w-[300px] lg:w-[400px] py-4 lg:border-b-slate-200 lg:border-b-2 hover:bg-slate-200 hover:cursor-pointer"
			>
				{children}
			</a>
		</li>
	);
}
