// Imports
import {FC, Fragment} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurPartners} from "@/types/components/index";
import {fadeIn, initial, stagger, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/OurPartners.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const OurPartners: FC<IOurPartners> = ({
	title,
	subtitle,
	paragraph,
	imageGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourPartners + ` py-20 lg:pb-36 2xl:pb-28 px-4 lg:px-0 bg-white`
				}
			>
				<div className="container px-0 mx-auto">
					<motion.h3
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mb-1 uppercase text-center lg:text-center text-lg tracking-[0.10rem] text-yellow-Two"
					>
						{subtitle}
					</motion.h3>
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mb-4 text-center uppercase font-extrabold leading-[2.5rem] lg:leading-[3rem] text-4xl lg:text-5xl text-black"
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="lg:max-w-3xl mx-auto
						mb-10 text-black leading-[1.75rem] text-base sm:text-paragraph text-center lg:text-left"
					/>
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="grid items-center justify-center grid-cols-2 gap-4 lg:grid-cols-6 lg:justify-between"
						>
							{imageGrid?.length > 0 ? (
								imageGrid.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<div>
											<Image
												alt={item?.image?.altText}
												src={item?.image?.sourceUrl}
												width={item?.image?.mediaDetails?.width}
												height={item?.image?.mediaDetails?.height}
												className={
													item?.image?.sourceUrl
														? `block w-[150px] mx-auto h-full sm:w-[150px] lg:w-full lg:h-[125px] object-contain object-center`
														: `hidden`
												}
											/>
										</div>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurPartners;
