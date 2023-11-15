// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
} from "../../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IJumboContentSectionCard} from "@/types/components/index";

// Styling
import styles from "../../styles/components/JumboContentSection.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const JumboContentSectionCard: FC<IJumboContentSectionCard> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
	imageLocation,
	backgroundDisplay,
}) => {
	let titleColor;
	let buttonColor;
	let paragraphColor;
	let backgroundColor;
	let backgroundImage;

	switch (backgroundDisplay) {
		case "White":
			titleColor = "text-black";
			buttonColor = "red-default";
			backgroundColor = "bg-white";
			paragraphColor = "text-black";
			backgroundImage = `none`;
			break;
		case "Red":
			titleColor = "text-white";
			buttonColor = "white";
			paragraphColor = "text-white";
			backgroundColor = "bg-red-darkerTwo";
			backgroundImage = `/svg/background/blob-scene-haikei-red-darkRed.svg`;
			break;
	}

	return (
		<>
			<div
				className={
					styles.jumboContentSectionCard +
					` relative py-10 overflow-hidden bg-center bg-no-repeat bg-cover ${backgroundColor}`
				}
				style={{
					backgroundImage: `url("${backgroundImage}")`,
				}}
			>
				<div className="container relative px-0 mx-auto lg:px-4">
					<div
						className={
							imageLocation === "Left"
								? `flex flex-col-reverse items-center gap-6 lg:flex-row`
								: `flex flex-col items-center gap-6 lg:flex-row`
						}
					>
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={
								imageLocation === "Left"
									? `block relative w-full px-4 lg:w-1/2`
									: `hidden`
							}
						>
							<Image
								priority={true}
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails?.width}
								height={image?.mediaDetails?.height}
								className={
									image?.sourceUrl
										? `block object-cover object-center w-full h-[350px] sm:h-[500px]`
										: `hidden`
								}
								style={{
									clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
								}}
							/>
						</motion.div>
						<div className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0">
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex flex-col justify-center max-w-2xl items-center lg:items-baseline"
							>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-1 uppercase text-center lg:text-center text-lg tracking-[0.15rem] text-yellow-Two"
								>
									{subtitle}
								</motion.h3>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={`mt-2 text-center font-semibold leading-tight lg:text-left text-4xl lg:text-5xl ${titleColor} lg:pr-8`}
								>
									{title}
								</motion.h2>
								<Paragraph
									content={paragraph}
									tailwindStyling={`w-full lg:max-w-2xl mx-auto py-6 ${paragraphColor} text-left text-base sm:text-paragraph`}
								/>
								<div className={buttonLink?.url ? "mx-auto lg:mx-0" : "hidden"}>
									<Link href={`${buttonLink?.url}`} target={buttonLink?.target}>
										<ButtonBorderSliced
											fullWidth={false}
											title={buttonLink?.title}
											tailwindColor={`${buttonColor}`}
										/>
									</Link>
								</div>
							</motion.div>
						</div>
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={
								imageLocation === "Right"
									? `block relative w-full px-4 lg:w-1/2`
									: `hidden`
							}
						>
							<Image
								priority={true}
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails?.width}
								height={image?.mediaDetails?.height}
								className={
									image?.sourceUrl
										? `block object-cover object-center w-full h-[350px] sm:h-[500px]`
										: `hidden`
								}
								style={{
									clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
								}}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default JumboContentSectionCard;
