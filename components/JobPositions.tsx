// Imports
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {IJobPositions} from "@/types/components";
import {useGlobalContext} from "@/context/global";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import JobPositionsCard from "./Cards/JobPositionsCard";
import JobsCategoryButton from "./Elements/JobsCategoryButton";

const JobPositions: FC<IJobPositions> = ({title, highlightText, paragraph}) => {
	const globalContext = useGlobalContext();

	const [allJobsOpen, setAllJobsOpen]: any = useState(true);
	const [agricomsJobsOpen, setAgricomsJobsOpen]: any = useState(false);
	const [bravoLogisticsJobsOpen, setBravoLogisticsJobsOpen]: any =
		useState(false);

	/* Hides or Display
	 All Job Positions */
	const displayAllJobs = () => {
		setAllJobsOpen(!allJobsOpen);
		setBravoLogisticsJobsOpen(false);
		setAgricomsJobsOpen(false);
	};

	/* Hides or Display Bravo Logistics
	 Taxonomy Job Positions */
	const displayBravoLogisticsJobs = () => {
		setAllJobsOpen(false);
		setBravoLogisticsJobsOpen(!bravoLogisticsJobsOpen);
		setAgricomsJobsOpen(false);
	};

	/* Hides or Display Agricoms
	 Taxonomy Job Positions */
	const displayAgricomsJobs = () => {
		setAllJobsOpen(false);
		setBravoLogisticsJobsOpen(false);
		setAgricomsJobsOpen(!agricomsJobsOpen);
	};

	return (
		<>
			<div className="py-24 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="max-w-2xl mx-auto mb-12 text-center lg:max-w-5xl"
				>
					<div className="max-w-2xl mx-auto text-left">
						<motion.h2
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="text-center font-bold leading-loose text-4xl lg:text-5xl p-4 pl-0 text-black"
						>
							{title}
							<span className="p-2 ml-3 bg-red-Two text-white">
								{highlightText}
							</span>
						</motion.h2>
					</div>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl mx-auto text-black text-base sm:text-paragraph"
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-col sm:flex-row py-8 mb-12 items-center justify-center gap-4 lg:gap-12"
				>
					<JobsCategoryButton
						title="All"
						active={allJobsOpen}
						onClick={displayAllJobs}
					/>
					<JobsCategoryButton
						title="Bravo Logistics"
						active={bravoLogisticsJobsOpen}
						onClick={displayBravoLogisticsJobs}
					/>
					<JobsCategoryButton
						title="Agricoms"
						active={agricomsJobsOpen}
						onClick={displayAgricomsJobs}
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid mb-32 px-4 gap-4 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{allJobsOpen ? (
						<>
							{globalContext?.jobsPositions?.length > 0 ? (
								globalContext?.jobsPositions?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<JobPositionsCard
											slug={item?.node?.slug}
											title={item?.node?.title}
											paragraph={item?.node?.excerpt}
											tailwindStyling="bg-red-dark hover:bg-yellow-dark"
										/>
									</Fragment>
								))
							) : (
								<></>
							)}
						</>
					) : bravoLogisticsJobsOpen ? (
						<>
							{globalContext?.bravoLogisticsJobs?.length > 0 ? (
								globalContext?.bravoLogisticsJobs?.map(
									(item: any, keys: any) => (
										<Fragment key={keys}>
											<JobPositionsCard
												slug={item?.slug}
												title={item?.title}
												paragraph={item?.excerpt}
												tailwindStyling="bg-red-Two hover:bg-red-dark"
											/>
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</>
					) : agricomsJobsOpen ? (
						<>
							{globalContext?.agricomsJobs?.length > 0 ? (
								globalContext?.agricomsJobs?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<JobPositionsCard
											slug={item?.slug}
											title={item?.title}
											paragraph={item?.excerpt}
											tailwindStyling="bg-green-Three hover:bg-green-dark"
										/>
									</Fragment>
								))
							) : (
								<></>
							)}
						</>
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default JobPositions;
