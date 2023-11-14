// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../animations/animations";
import Link from "next/link";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {ITwoColumnButtonContent} from "@/types/components/index";

// Styling
import styles from "../styles/components/TwoColumnButtonContent.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const TwoColumnButtonContent: FC<ITwoColumnButtonContent> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
	backgroundColor,
	columnTwoContent,
}) => {
	const columnTwoContentTailwindStyling =
		"text-darkGrey leading-[1.75rem] text-base sm:text-paragraph text-center lg:text-left";
	const [contentOneOpen, setContentOneOpen]: any = useState(true);
	const [contentTwoOpen, setContentTwoOpen]: any = useState(false);
	const [contentThreeOpen, setContentThreeOpen]: any = useState(false);

	// Hides or Display about us sublinks
	function displayContentOne() {
		setContentOneOpen(!contentOneOpen);
		setContentTwoOpen(false);
		setContentThreeOpen(false);
	}
	// Hides or Display about us sublinks
	function displayContentTwo() {
		setContentOneOpen(false);
		setContentTwoOpen(!contentTwoOpen);
		setContentThreeOpen(false);
	}
	// Hides or Display about us sublinks
	function displayContentThree() {
		setContentOneOpen(false);
		setContentTwoOpen(false);
		setContentThreeOpen(!contentThreeOpen);
	}

	switch (backgroundColor) {
		case "White":
			backgroundColor = "bg-white";
			break;
		case "Grey":
			backgroundColor = "bg-lightGrey";
			break;
	}

	return (
		<>
			<div
				className={
					styles.twoColumnButtonContent +
					` py-20 lg:py-36 px-4 ${backgroundColor}`
				}
			>
				<div className="container m-auto xl:px-16 flex flex-col lg:flex-row gap-16 lg:gap-x-16">
					<motion.div
						initial={initialTwo}
						whileInView={stagger}
						viewport={{once: true}}
						className="w-full lg:w-[55%] flex flex-col items-center lg:items-baseline justify-center"
					>
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
							className="mb-4 text-center uppercase font-extrabold leading-[2rem] lg:leading-[4rem] lg:text-left text-4xl lg:text-5xl text-black"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-xl text-black leading-[1.75rem] text-base sm:text-paragraph text-center lg:text-left"
						/>
						<Link href={`${buttonLink?.url}`} target={buttonLink?.target}>
							<motion.button
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className={
									buttonLink?.url
										? styles.borderButton +
										  ` block mt-3 relative px-6 py-3 font-semibold tracking-widest text-base w-fit sm:mx-0 border-2 border-solid border-red-default hover:bg-red-default hover:border-red-default transition-all ease-in-out duration-500 text-red-default hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-red-default ${
												backgroundColor === "White"
													? "before:bg-white hover:before:bg-red-default"
													: "before:bg-lightGrey hover:before:bg-red-default"
										  } after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] ${
												backgroundColor === "White"
													? "after:bg-white hover:after:bg-red-default"
													: "after:bg-lightGrey hover:after:bg-red-default"
										  }`
										: `hidden `
								}
							>
								{buttonLink?.title}
							</motion.button>
						</Link>
					</motion.div>
					<motion.div
						initial={initialTwo}
						whileInView={stagger}
						viewport={{once: true}}
						className="w-full flex flex-col lg:flex-row gap-12 lg:gap-0 pt-0 lg:pt-10"
					>
						<div className="w-full lg:w-[65%] flex flex-col">
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentOne}
								className={`py-4 px-6 flex flex-row gap-4 text-left text-lg font-extrabold border-l-[4px] border-solid ${
									contentOneOpen ? "border-red-default" : "border-black"
								}`}
							>
								<span
									className={contentOneOpen ? "text-red-default" : "text-black"}
								>
									{columnTwoContent?.buttonText}
								</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentTwo}
								className={`py-4 px-6 flex flex-row gap-4 text-left text-lg font-extrabold border-l-[4px] border-solid ${
									contentTwoOpen ? "border-red-default" : "border-black"
								}`}
							>
								<span
									className={contentTwoOpen ? "text-red-default" : "text-black"}
								>
									{columnTwoContent?.buttonTextTwo}
								</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentThree}
								className={`py-4 px-6 flex flex-row gap-4 text-left text-lg font-extrabold border-l-[4px] border-solid ${
									contentThreeOpen ? "border-red-default" : "border-black"
								}`}
							>
								<span
									className={
										contentThreeOpen ? "text-red-default" : "text-black"
									}
								>
									{columnTwoContent?.buttonTextThree}
								</span>
							</motion.button>
						</div>
						<div className="w-full">
							{contentOneOpen ? (
								<Paragraph
									content={columnTwoContent?.paragraph}
									tailwindStyling={columnTwoContentTailwindStyling}
								/>
							) : contentTwoOpen ? (
								<Paragraph
									content={columnTwoContent?.paragraphTwo}
									tailwindStyling={columnTwoContentTailwindStyling}
								/>
							) : contentThreeOpen ? (
								<Paragraph
									content={columnTwoContent?.paragraphThree}
									tailwindStyling={columnTwoContentTailwindStyling}
								/>
							) : (
								<Paragraph
									content={columnTwoContent?.paragraph}
									tailwindStyling={columnTwoContentTailwindStyling}
								/>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TwoColumnButtonContent;
