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
		<li>
			<a
				onClick={() => { onClick(tabValue) }}
				className="inline-block"
			>
				{children}
			</a>
		</li>
	);
}
