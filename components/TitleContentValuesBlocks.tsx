// Imports
import Image from "next/image";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {ITitleContentValuesBlocks} from "@/types/components/index";
import {fadeIn, initial, stagger, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/TitleContentValuesBlocks.module.scss";

// Components
import ValuesBlocksTextCard from "./Cards/ValuesBlocksTextCard";
import ValuesBlocksImageCard from "./Cards/ValuesBlocksImageCard";

const TitleContentValuesBlocks: FC<ITitleContentValuesBlocks> = ({
	backgroundImage,
	valuesBlockOne,
	valuesBlockTwo,
	valuesBlockThree,
	valuesBlockFour,
}) => {
	const [contentOneOpen, setContentOneOpen]: any = useState(true);
	const [contentTwoOpen, setContentTwoOpen]: any = useState(false);
	const [contentThreeOpen, setContentThreeOpen]: any = useState(false);
	const [contentFourOpen, setContentFourOpen]: any = useState(false);

	// Hides or Display Value Block One
	function displayContentOne() {
		setContentOneOpen(!contentOneOpen);
		setContentTwoOpen(false);
		setContentThreeOpen(false);
		setContentFourOpen(false);
	}
	// Hides or Display Value Block Two
	function displayContentTwo() {
		setContentOneOpen(false);
		setContentTwoOpen(!contentTwoOpen);
		setContentThreeOpen(false);
		setContentFourOpen(false);
	}
	// Hides or Display Value Block Three
	function displayContentThree() {
		setContentOneOpen(false);
		setContentTwoOpen(false);
		setContentThreeOpen(!contentThreeOpen);
		setContentFourOpen(false);
	}
	// Hides or Display Value Block Four
	function displayContentFour() {
		setContentOneOpen(false);
		setContentTwoOpen(false);
		setContentThreeOpen(false);
		setContentFourOpen(!contentFourOpen);
	}

	return (
		<>
			<div
				className={
					styles.titleContentValuesBlocks +
					" bg-white px-4 py-6 pb-28 md:py-10 md:pb-20 lg:py-20 bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.50),
							rgba(0, 0, 0, 0.85),
							rgba(0, 0, 0, 0.95)
					 ),url("${backgroundImage}")`,
					clipPath: `polygon(0 0, 69% 0, 100% 0, 100% 98%, 28% 95%, 0 98%)`,
				}}
			>
				<div className="container m-auto flex flex-col gap-16 lg:gap-x-24">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-col gap-2 sm:gap-0"
					>
						<motion.div
							initial={initialTwo}
							whileInView={stagger}
							viewport={{once: true}}
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-center lg:justify-start"
						>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentOne}
								className={`p-8 flex gap-4 justify-center items-center sm:justify-start text-center sm:text-left text-medium font-extrabold ${
									contentOneOpen
										? "bg-white"
										: "bg-red-default hover:bg-red-Two"
								}`}
							>
								<span
									className={
										valuesBlockOne?.icon?.sourceUrl ? "block" : "hidden"
									}
								>
									<Image
										alt={valuesBlockOne?.icon?.altText}
										src={valuesBlockOne?.icon?.sourceUrl}
										width={valuesBlockOne?.icon?.mediaDetails?.width}
										height={valuesBlockOne?.icon?.mediaDetails?.height}
										className={
											contentOneOpen
												? `hidden`
												: `block object-contain object-center w-full h-[35px] lg:h-[40px]`
										}
									/>
									<Image
										alt={valuesBlockOne?.activeIcon?.altText}
										src={valuesBlockOne?.activeIcon?.sourceUrl}
										width={valuesBlockOne?.activeIcon?.mediaDetails?.width}
										height={valuesBlockOne?.activeIcon?.mediaDetails?.height}
										className={
											contentOneOpen
												? `block object-contain object-center w-full h-[35px] lg:h-[40px]`
												: `hidden`
										}
									/>
								</span>
								<span className={contentOneOpen ? "text-black" : "text-white"}>
									{valuesBlockOne?.blockTitle}
								</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentTwo}
								className={`p-8 flex gap-4 justify-center items-center sm:justify-start text-center sm:text-left text-medium font-extrabold ${
									contentTwoOpen ? "bg-white" : "bg-red-dark hover:bg-red-Two"
								}`}
							>
								<span
									className={
										valuesBlockTwo?.icon?.sourceUrl ? "block" : "hidden"
									}
								>
									<Image
										alt={valuesBlockTwo?.icon?.altText}
										src={valuesBlockTwo?.icon?.sourceUrl}
										width={valuesBlockTwo?.icon?.mediaDetails?.width}
										height={valuesBlockTwo?.icon?.mediaDetails?.height}
										className={
											contentTwoOpen
												? `hidden`
												: `block object-contain object-center w-full h-[35px] lg:h-[40px]`
										}
									/>
									<Image
										alt={valuesBlockTwo?.activeIcon?.altText}
										src={valuesBlockTwo?.activeIcon?.sourceUrl}
										width={valuesBlockTwo?.activeIcon?.mediaDetails?.width}
										height={valuesBlockTwo?.activeIcon?.mediaDetails?.height}
										className={
											contentTwoOpen
												? `block object-contain object-center w-full h-[35px] lg:h-[40px]`
												: `hidden`
										}
									/>
								</span>
								<span className={contentTwoOpen ? "text-black" : "text-white"}>
									{valuesBlockTwo?.blockTitle}
								</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentThree}
								className={`p-8 flex gap-4 justify-center items-center sm:justify-start text-center sm:text-left text-medium font-extrabold ${
									contentThreeOpen
										? "bg-white"
										: "bg-red-darker hover:bg-red-Two"
								}`}
							>
								<span
									className={
										valuesBlockThree?.icon?.sourceUrl ? "block w-1/2" : "hidden"
									}
								>
									<Image
										alt={valuesBlockThree?.icon?.altText}
										src={valuesBlockThree?.icon?.sourceUrl}
										width={valuesBlockThree?.icon?.mediaDetails?.width}
										height={valuesBlockThree?.icon?.mediaDetails?.height}
										className={
											contentThreeOpen
												? `hidden`
												: `block object-contain object-center w-full h-[35px] lg:h-[40px]`
										}
									/>
									<Image
										alt={valuesBlockThree?.activeIcon?.altText}
										src={valuesBlockThree?.activeIcon?.sourceUrl}
										width={valuesBlockThree?.activeIcon?.mediaDetails?.width}
										height={valuesBlockThree?.activeIcon?.mediaDetails?.height}
										className={
											contentThreeOpen
												? `block object-contain object-center w-full h-[35px] lg:h-[40px]`
												: `hidden`
										}
									/>
								</span>
								<span
									className={
										contentThreeOpen ? "text-black w-1/2" : "text-white"
									}
								>
									{valuesBlockThree?.blockTitle}
								</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentFour}
								className={`p-8 flex gap-4 justify-center items-center sm:justify-start text-center sm:text-left text-medium font-extrabold ${
									contentFourOpen
										? "bg-white"
										: "bg-red-darkerTwo hover:bg-red-Two"
								}`}
							>
								<span
									className={
										valuesBlockFour?.icon?.sourceUrl ? "block" : "hidden"
									}
								>
									<Image
										alt={valuesBlockFour?.icon?.altText}
										src={valuesBlockFour?.icon?.sourceUrl}
										width={valuesBlockFour?.icon?.mediaDetails?.width}
										height={valuesBlockFour?.icon?.mediaDetails?.height}
										className={
											contentFourOpen
												? `hidden`
												: `block object-contain object-center w-full h-[35px] lg:h-[40px]`
										}
									/>
									<Image
										alt={valuesBlockFour?.activeIcon?.altText}
										src={valuesBlockFour?.activeIcon?.sourceUrl}
										width={valuesBlockFour?.activeIcon?.mediaDetails?.width}
										height={valuesBlockFour?.activeIcon?.mediaDetails?.height}
										className={
											contentFourOpen
												? `block object-contain object-center w-full h-[35px] lg:h-[40px]`
												: `hidden`
										}
									/>
								</span>
								<span
									className={
										contentFourOpen ? "text-black w-full" : "text-white"
									}
								>
									{valuesBlockFour?.blockTitle}
								</span>
							</motion.button>
						</motion.div>
						<motion.div
							initial={initialTwo}
							whileInView={stagger}
							viewport={{once: true}}
							className="bg-white p-6 sm:px-12 flex flex-col lg:flex-row justify-between gap-6 lg:gap-20"
						>
							<motion.div
								initial={initialTwo}
								whileInView={stagger}
								viewport={{once: true}}
								className="w-full py-10 lg:w-2/3 flex flex-col items-center lg:items-baseline justify-between"
							>
								{contentOneOpen ? (
									<>
										<ValuesBlocksTextCard
											title={valuesBlockOne?.title}
											paragraph={valuesBlockOne?.paragraph}
											buttonLink={valuesBlockOne?.buttonLink}
											displayButton={valuesBlockOne?.displayButton}
										/>
									</>
								) : contentTwoOpen ? (
									<>
										<ValuesBlocksTextCard
											title={valuesBlockTwo?.title}
											paragraph={valuesBlockTwo?.paragraph}
											buttonLink={valuesBlockTwo?.buttonLink}
											displayButton={valuesBlockTwo?.displayButton}
										/>
									</>
								) : contentThreeOpen ? (
									<>
										<ValuesBlocksTextCard
											title={valuesBlockThree?.title}
											paragraph={valuesBlockThree?.paragraph}
											buttonLink={valuesBlockThree?.buttonLink}
											displayButton={valuesBlockThree?.displayButton}
										/>
									</>
								) : contentFourOpen ? (
									<>
										<ValuesBlocksTextCard
											title={valuesBlockFour?.title}
											paragraph={valuesBlockFour?.paragraph}
											buttonLink={valuesBlockFour?.buttonLink}
											displayButton={valuesBlockFour?.displayButton}
										/>
									</>
								) : (
									<>
										<ValuesBlocksTextCard
											title={valuesBlockOne?.title}
											paragraph={valuesBlockOne?.paragraph}
											buttonLink={valuesBlockOne?.buttonLink}
											displayButton={valuesBlockOne?.displayButton}
										/>
									</>
								)}
							</motion.div>
							<div className="w-full lg:w-1/3">
								{contentOneOpen ? (
									<>
										<ValuesBlocksImageCard image={valuesBlockOne?.image} />
									</>
								) : contentTwoOpen ? (
									<>
										<ValuesBlocksImageCard image={valuesBlockTwo?.image} />
									</>
								) : contentThreeOpen ? (
									<>
										<ValuesBlocksImageCard image={valuesBlockThree?.image} />
									</>
								) : contentFourOpen ? (
									<>
										<ValuesBlocksImageCard image={valuesBlockFour?.image} />
									</>
								) : (
									<>
										<ValuesBlocksImageCard image={valuesBlockOne?.image} />
									</>
								)}
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TitleContentValuesBlocks;
