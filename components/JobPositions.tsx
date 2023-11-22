// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {IJobPositions} from "@/types/components";
import {useGlobalContext} from "@/context/global";

// Components
import Paragraph from "./Elements/Paragraph";
import JobPositionsCard from "./Cards/JobPositionsCard";

const JobPositions: FC<IJobPositions> = ({title, italic, paragraph}) => {
	const globalContext = useGlobalContext();

	const [allJobsOpen, setAllJobsOpen]: any = useState(true);
	const [bravoLogisticsJobsOpen, setBravoLogisticsJobsOpen]: any =
		useState(false);
	const [agricomsJobsOpen, setAgricomsJobsOpen]: any = useState(false);

	/* Hides or Display
	 All Job Positions */
	function displayAllJobs() {
		setAllJobsOpen(!allJobsOpen);
		setBravoLogisticsJobsOpen(false);
		setAgricomsJobsOpen(false);
	}

	/* Hides or Display Bravo Logistics
	 Taxonomy Job Positions */
	function displayBravoLogisticsJobs() {
		setAllJobsOpen(false);
		setBravoLogisticsJobsOpen(!bravoLogisticsJobsOpen);
		setAgricomsJobsOpen(false);
	}

	/* Hides or Display Agricoms
	 Taxonomy Job Positions */
	function displayAgricomsJobs() {
		setAllJobsOpen(false);
		setBravoLogisticsJobsOpen(false);
		setAgricomsJobsOpen(!agricomsJobsOpen);
	}

	return (
		<>
			<div className="py-24 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="max-w-2xl mx-auto mb-12 text-center lg:max-w-5xl"
				>
					<motion.h2
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="my-2 mb-6 max-w-2xl mx-auto text-center font-semibold text-4xl lg:text-5xl"
					>
						<motion.span
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
						>
							{title}
						</motion.span>
						<motion.span
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="ml-4 font-serif font-bold uppercase italic px-4 py-2 bg-red-Two text-white"
						>
							{italic}
						</motion.span>
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl mx-auto text-black text-base sm:text-paragraph"
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-row py-8 mb-12 items-center justify-center gap-4 lg:gap-12"
				>
					<motion.button
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={displayAllJobs}
						className="flex items-center justify-center group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit sm:mx-0 border-2 border-solid border-red-default hover:bg-red-default hover:border-red-default transition-all ease-in-out duration-500 text-red-default hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-red-default after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-red-default"
					>
						All
					</motion.button>
					<motion.button
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={displayBravoLogisticsJobs}
						className="flex items-center justify-center group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit sm:mx-0 border-2 border-solid border-red-default hover:bg-red-default hover:border-red-default transition-all ease-in-out duration-500 text-red-default hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-red-default after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-red-default"
					>
						Bravo Logistics
					</motion.button>
					<motion.button
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={displayAgricomsJobs}
						className="flex items-center justify-center group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit sm:mx-0 border-2 border-solid border-red-default hover:bg-red-default hover:border-red-default transition-all ease-in-out duration-500 text-red-default hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-red-default after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-red-default"
					>
						Agricoms
					</motion.button>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid mb-32 px-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{allJobsOpen ? (
						<>
							{globalContext?.jobsPositions?.length > 0 ? (
								globalContext?.jobsPositions?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<JobPositionsCard
											uri={item?.node?.uri}
											title={item?.node?.title}
											paragraph={item?.node?.excerpt}
											featuredImage={item?.node?.featuredImage}
										/>
									</Fragment>
								))
							) : (
								<></>
							)}
						</>
					) : bravoLogisticsJobsOpen ? (
						<>
							{globalContext?.jobsPositions?.length > 0 ? (
								globalContext?.jobsPositions?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<JobPositionsCard
											uri={item?.node?.uri}
											title={item?.node?.title}
											paragraph={item?.node?.excerpt}
											featuredImage={item?.node?.featuredImage}
										/>
									</Fragment>
								))
							) : (
								<></>
							)}
						</>
					) : agricomsJobsOpen ? (
						<>
							{globalContext?.jobsPositions?.length > 0 ? (
								globalContext?.jobsPositions?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<JobPositionsCard
											uri={item?.node?.uri}
											title={item?.node?.title}
											paragraph={item?.node?.excerpt}
											featuredImage={item?.node?.featuredImage}
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
