// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {IOperationalInsights} from "@/types/components";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import OperationalInsightsCard from "./Cards/OperationalInsightsCard";

const OperationalInsightsThreeCards: FC<IOperationalInsights> = ({
	title,
	italic,
	paragraph,
}) => {
	const globalContext = useGlobalContext();

	return (
		<div className="py-24 bg-white">
			<div className="container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="max-w-2xl mx-auto mb-24 text-center lg:max-w-5xl"
				>
					<motion.h2
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="max-w-3xl mx-auto mb-4 text-center uppercase font-extrabold leading-[2.5rem] lg:leading-[3rem] text-4xl lg:text-5xl text-black"
					>
						<motion.span
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="font-bold"
						>
							{title}
						</motion.span>
						<motion.span
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
							className="ml-4 font-serif italic"
						>
							{italic}
						</motion.span>
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl mx-auto mt-10 text-black text-base sm:text-paragraph"
					/>
				</motion.div>

				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid gap-4 -m-4 sm:gap-y-2 sm:gap-x-0 lg:gap-4 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{globalContext?.operationalInsightsThreeCards?.length > 0 ? (
						globalContext?.operationalInsightsThreeCards?.map(
							(item: any, keys: any) => (
								<Fragment key={keys}>
									<OperationalInsightsCard
										key={keys}
										uri={item?.node?.uri}
										title={item?.node?.title}
										paragraph={item?.node?.excerpt}
										featuredImage={item?.node?.featuredImage}
									/>
								</Fragment>
							)
						)
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default OperationalInsightsThreeCards;
