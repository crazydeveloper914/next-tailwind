// Imports
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
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
						>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentOne}
								className={`p-8 flex gap-4 justify-center sm:justify-start text-center sm:text-left text-lg font-extrabold ${
									contentOneOpen
										? "bg-white"
										: "bg-red-default hover:bg-red-Two"
								}`}
							>
								<span className={contentOneOpen ? "text-black" : "text-white"}>
									{valuesBlockOne?.blockTitle}
								</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentTwo}
								className={`p-8 flex gap-4 justify-center sm:justify-start text-center sm:text-left text-lg font-extrabold ${
									contentTwoOpen
										? "bg-white"
										: "bg-red-default hover:bg-red-Two"
								}`}
							>
								<span className={contentTwoOpen ? "text-black" : "text-white"}>
									{valuesBlockTwo?.blockTitle}
								</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentThree}
								className={`p-8 flex gap-4 justify-center sm:justify-start text-center sm:text-left text-lg font-extrabold ${
									contentThreeOpen
										? "bg-white"
										: "bg-red-default hover:bg-red-Two"
								}`}
							>
								<span
									className={contentThreeOpen ? "text-black" : "text-white"}
								>
									{valuesBlockThree?.blockTitle}
								</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentFour}
								className={`p-8 flex gap-4 justify-center sm:justify-start text-center sm:text-left text-lg font-extrabold ${
									contentFourOpen
										? "bg-white"
										: "bg-red-default hover:bg-red-Two"
								}`}
							>
								<span className={contentFourOpen ? "text-black" : "text-white"}>
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
