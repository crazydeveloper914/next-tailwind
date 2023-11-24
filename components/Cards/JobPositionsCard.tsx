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
	slug,
	title,
	paragraph,
	tailwindStyling,
}) => {
	return (
		<>
			<div
				className={styles.jobPositionsCard + ` ${tailwindStyling}`}
				style={{
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
				}}
			>
				<Link href={`/job-positions/${slug}`} target="">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-col items-baseline justify-between gap-4 p-10"
					>
						<Link href={`${slug}`}>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="mb-2 max-w-xs mx-auto sm:mx-0 text-lg leading-tight tracking-[0.05rem] uppercase font-extrabold text-white transition-all ease-in-out duration-200 hover:text-white"
							>
								{title}
							</motion.h2>
						</Link>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							<Paragraph
								content={paragraph ? paragraph.substring(0, 200) + "..." : ""}
								tailwindStyling="block px-0 text-base text-white"
							/>
						</motion.div>
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
						>
							<Link
								href={`/job-positions/${slug}`}
								target=""
								className={slug ? "block" : "hidden"}
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
