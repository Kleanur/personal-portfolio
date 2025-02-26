'use client'

import { SiFord } from "react-icons/si";
import { useState } from "react";
import SectionCard from "../SectionCard"
import Image from "next/image";
import Tab from "../../tabs/Tab";
import TabsList from "../../tabs/TabsList";
import TabContent from "../../tabs/TabContent";
import { Header } from "../../typography/Header";
import { Text } from "../../typography/Text";
import Stamp from "../../Stamp";
import WorkExperienceItem from "../WorkExperienceItem";

export default function ExperienceSection() {
	const [openTab, setOpenTab] = useState<string>("Orkin");
	return (
		<SectionCard>
			<div className="flex flex-col w-full h-full p-2 lg:p-6">
				<Header className="ml-2 mt-2">My Experience</Header>
				<div className="flex flex-col lg:flex-row w-full px-2 py-4 flex-grow">
					<TabsList>
						<Tab tabValue="Orkin" onClick={setOpenTab}>
							<WorkExperienceItem 
								src="/orkin-logo.png"
								alt=""
								width={276}
								height={179}
								title="Full-stack developer, freelance"
								company="Orkin Canada"
							/>
						</Tab>
						<Tab tabValue="Ford" onClick={setOpenTab}>
							<div>Work</div>
						</Tab>
					</TabsList>
					<div className="flex-grow w-full">
						<TabContent tabValue="Orkin" openTab={openTab}>
							<div>Orkin Content</div>
						</TabContent>
						<TabContent tabValue="Ford" openTab={openTab}>
							<div>Ford Content</div>
						</TabContent>
					</div>
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
