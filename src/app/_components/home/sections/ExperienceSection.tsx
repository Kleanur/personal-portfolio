'use client'

import { SiFord } from "react-icons/si";
import { useState } from "react";
import SectionCard from "../SectionCard"
import Image from "next/image";
import Tab from "../../tabs/Tab";
import TabsList from "../../tabs/TabsList";
import TabContent from "../../tabs/TabContent";

export default function ExperienceSection() {
	const [openTab, setOpenTab] = useState<string>("Home");
	return (
		<SectionCard>
			<div>

			</div>
			<div className="flex flex-row w-full h-full items-center">
				<TabsList>
					<Tab tabValue="Home" onClick={setOpenTab}>
						<div>Home</div>
					</Tab>
					<Tab tabValue="Work" onClick={setOpenTab}>
						<div>Work</div>
					</Tab>
				</TabsList>
				<div>
					
					<TabContent tabValue="Home" openTab={openTab}>
						<div>Home Content</div>
					</TabContent>
					<TabContent tabValue="Work" openTab={openTab}>
						<div>Work Content</div>
					</TabContent>
				</div>
			</div>
			{/* <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full">
				<div className="flex flex-col justify-center h-full p-5 basis-1/2">
					<h1 className={`text-5xl ${dm_serif_display.className}`}>
						I&apos;ve done work with...
					</h1>
					<ul className="text-lg" role="tablist">
						<li>
							<SiFord className="inline-block size-16 border border-black"/>
						</li>
						<li>
							<Image
								src="/login_ID_logo.png"
								alt=""
								width={128}
								height={128}
								className="size-16 border border-black"
							/>
						</li>
						<li>
							<Image
								src="/telus-t-logo.svg"
								alt=""
								width={128}
								height={128}
								className="size-16 rounded-xl bg-accent-rgb border border-black"
							/>
						</li>
					</ul>
				</div>
				<div className="basis-1/2">
				</div>
			</div> */}
			
		</SectionCard>
	)
}
