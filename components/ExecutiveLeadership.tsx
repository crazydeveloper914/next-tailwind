// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {IExecutiveLeadership} from "@/types/components";
import {initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import ExecutiveLeadershipCard from "./Cards/ExecutiveLeadershipCard";

const ExecutiveLeadership: FC<IExecutiveLeadership> = ({
	title,
	paragraph,
	highlightText,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-24 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="max-w-2xl mx-auto mb-24 text-center lg:max-w-5xl"
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
					className="grid mb-32 px-4 lg:px-16 lg:-m-4 gap-y-12 sm:gap-8 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{globalContext?.executiveLeadership?.length > 0 ? (
						globalContext?.executiveLeadership?.map((item: any, keys: any) => (
							<Fragment key={keys}>
								<ExecutiveLeadershipCard
									slug={item?.node?.slug}
									title={item?.node?.title}
									paragraph={item?.node?.excerpt}
									featuredImage={item?.node?.featuredImage}
								/>
							</Fragment>
						))
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default ExecutiveLeadership;
