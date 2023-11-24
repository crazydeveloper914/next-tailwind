// Imports
import {
	initial,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
	initialTwo,
	fadeIn,
} from "../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IIndividualExecutiveMember} from "@/types/components";

// Styling
import styles from "../styles/components/IndividualExecutiveMember.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";

const IndividualExecutiveMember: FC<IIndividualExecutiveMember> = ({
	logo,
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
}) => {
	return (
		<>
			<div
				className={
					styles.individualExecutiveMember +
					" py-10 bg-pureBlack overflow-hidden bg-center bg-no-repeat bg-cover"
				}
				style={{
					clipPath: `polygon(0 0, 100% 0, 100% 98%, 83% 93%, 0 100%, 0 100%)`,
					backgroundImage: `url("/svg/background/blob-scene-haikei-black-pureblack.svg")`,
				}}
			>
				<div className="container relative px-0 mx-auto lg:px-4">
					<div className="flex flex-col-reverse items-center gap-6 lg:flex-row">
						<motion.div
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							viewport={{once: true}}
							className="relative w-full px-4 lg:w-1/2"
						>
							<Image
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails?.width}
								height={image?.mediaDetails?.height}
								className={
									image?.sourceUrl
										? `block object-cover object-center w-full h-full max-h-[650px]`
										: `hidden`
								}
								style={{
									clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
								}}
							/>
						</motion.div>
						<motion.div
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0"
						>
							<div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 items-center lg:items-baseline">
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
								>
									<Image
										alt={logo?.altText}
										src={logo?.sourceUrl}
										width={logo?.mediaDetails?.width}
										height={logo?.mediaDetails?.height}
										className={
											logo?.sourceUrl
												? `block object-contain object-center w-full h-[30px] mb-4`
												: `hidden`
										}
									/>
								</motion.div>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-2 text-center font-semibold leading-tight lg:text-left text-4xl lg:text-5xl text-white lg:pr-8"
								>
									{title}
								</motion.h2>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="uppercase text-center lg:text-center text-lg tracking-[0.15rem] text-white"
								>
									{subtitle}
								</motion.h3>
								<Paragraph
									content={paragraph}
									tailwindStyling={`w-full lg:max-w-2xl mx-auto py-6 text-white text-center lg:text-left text-base sm:text-paragraph`}
								/>
								<div className={buttonLink?.url ? "mx-auto lg:mx-0" : "hidden"}>
									<Link href={`${buttonLink?.url}`} target={buttonLink?.target}>
										<ButtonBorderSliced
											fullWidth={false}
											title={buttonLink?.title}
											tailwindColor={`white`}
										/>
									</Link>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default IndividualExecutiveMember;
