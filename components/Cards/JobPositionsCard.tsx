// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IJobPositionsCard} from "@/types/components";

// Styling
import styles from "../../styles/components/JobPositions.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const JobPositionsCard: FC<IJobPositionsCard> = ({
	uri,
	title,
	paragraph,
	featuredImage,
}) => {
	return (
		<>
			<div
				className={
					styles.jobPositionsCard +
					" w-full h-full bg-red-darkerTwo group bg-cover bg-no-repeat bg-center overflow-hidden"
				}
				style={{
					backgroundImage: `linear-gradient(
					0deg,
					rgba(0, 0, 7, 0.75),
					rgba(0, 0, 7, 0.85),
					rgba(0, 0, 7, 0.95),
					rgba(0, 0, 7, 1)
				),url("${featuredImage?.node?.sourceUrl}")`,
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
					clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
				}}
			>
				<Link href={`${uri}`} target="_blank">
					<motion.div
						initial={initial}
						viewport={{once: true}}
						whileInView={stagger}
						className="flex flex-col items-baseline justify-between group-hover:bg-red-dark gap-4 p-10 lg:py-16 "
					>
						<Link href={`${uri}`}>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="mb-2 max-w-sm mx-auto sm:mx-0 text-lg lg:text-xl leading-tight tracking-[0.05rem] uppercase font-extrabold text-white transition-all ease-in-out duration-200 hover:text-white"
							>
								{title}
							</motion.h2>
						</Link>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={fadeInUp}
						>
							<Paragraph
								content={paragraph ? paragraph.substring(0, 150) + "..." : ""}
								tailwindStyling="block px-0 text-base sm:text-paragraph text-white"
							/>
						</motion.div>
						<motion.div
							initial={initialTwo}
							viewport={{once: true}}
							whileInView={fadeIn}
						>
							<Link
								href={`${uri}`}
								target="_blank"
								className={uri ? "block" : "hidden"}
							>
								<ButtonBorderSliced
									fullWidth={true}
									title="Read more"
									tailwindColor="white"
								/>
							</Link>
						</motion.div>
					</motion.div>
				</Link>
			</div>
		</>
	);
};

export default JobPositionsCard;
