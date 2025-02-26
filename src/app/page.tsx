
import { IntroSection, ExperienceSection, WIPSection } from "@/app/_components/home/sections/HomeSections";
import ProgressIndicator from "./_components/ProgressIndicator";
import TableBackground from "./_components/TableBackground";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<TableBackground />

			{/* <div className="fixed origin-center">
				<ProgressIndicator/>
			</div> */}
			<div className="h-[5vh]"></div>
			<IntroSection />
			<ExperienceSection/>
			<WIPSection />
			<div className="h-[5vh]"></div>
		</main>
	);
}
