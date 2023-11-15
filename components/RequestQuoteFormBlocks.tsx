// Imports
import Image from "next/image";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {IRequestQuoteFormBlocks} from "@/types/components/index";
import {fadeIn, initial, stagger, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/RequestQuoteFormBlocks.module.scss";

// Components
import EnquiryRequestForm from "./Forms/EnquiryRequestForm";
import ValuesBlocksImageCard from "./Cards/ValuesBlocksImageCard";

const RequestQuoteFormBlocks: FC<IRequestQuoteFormBlocks> = ({
	valuesBlockOne,
	valuesBlockTwo,
	backgroundImage,
	valuesBlockThree,
}) => {
	const [contentOneOpen, setContentOneOpen]: any = useState(true);
	const [contentTwoOpen, setContentTwoOpen]: any = useState(false);
	const [contentThreeOpen, setContentThreeOpen]: any = useState(false);

	// Hides or Display Value Block One
	function displayContentOne() {
		setContentOneOpen(!contentOneOpen);
		setContentTwoOpen(false);
		setContentThreeOpen(false);
	}
	// Hides or Display Value Block Two
	function displayContentTwo() {
		setContentOneOpen(false);
		setContentTwoOpen(!contentTwoOpen);
		setContentThreeOpen(false);
	}
	// Hides or Display Value Block Three
	function displayContentThree() {
		setContentOneOpen(false);
		setContentTwoOpen(false);
		setContentThreeOpen(!contentThreeOpen);
	}

	return (
		<>
			<div
				className={
					styles.requestQuoteFormBlocks +
					" bg-white px-4 py-6 md:py-36 lg:py-20 bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.5),
							rgba(0, 0, 0, 0.85),
							rgba(0, 0, 0, 0.95)
					 ),url("${backgroundImage}")`,
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
							className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2"
						>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentOne}
								className={`p-8 flex flex-col gap-2 items-center justify-between text-center sm:text-left text-lg font-extrabold ${
									contentOneOpen ? "bg-white" : "bg-pureBlack hover:bg-red-dark"
								}`}
							>
								<span>
									<Image
										width={500}
										height={500}
										alt="Bravo Group Logo Red"
										src="/img/logos/bravo-group-logo-red.png"
										className={`group-hover:hidden object-contain object-center w-full h-[30px] ${
											contentOneOpen ? "block" : "hidden"
										}`}
									/>
									<Image
										width={500}
										height={500}
										alt="Bravo Group Logo White"
										src="/img/logos/bravo-group-logo-white.png"
										className={`group-hover:block object-contain object-center w-full h-[30px] ${
											contentOneOpen ? "hidden" : "block"
										}`}
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
								className={`p-8 flex flex-col group gap-2 items-center justify-between text-center sm:text-left text-lg font-extrabold ${
									contentTwoOpen
										? "bg-red-Two"
										: "bg-pureBlack hover:bg-red-Two"
								}`}
							>
								<span>
									<Image
										width={500}
										height={500}
										alt="Bravo Logo Red"
										src="/img/logos/bravo-red.svg"
										className={`group-hover:hidden object-contain object-center w-full h-[40px] ${
											contentTwoOpen ? "hidden" : "block"
										}`}
									/>
									<Image
										width={500}
										height={500}
										alt="Bravo Logo White"
										src="/img/logos/bravo-white.svg"
										className={`group-hover:block object-contain object-center w-full h-[40px] ${
											contentTwoOpen ? "block" : "hidden"
										}`}
									/>
								</span>
								<span className="text-white">{valuesBlockTwo?.blockTitle}</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentThree}
								className={`p-8 flex flex-col gap-2 items-center justify-between text-center sm:text-left text-lg font-extrabold ${
									contentThreeOpen
										? "bg-green-Two"
										: "bg-pureBlack hover:bg-green-Two"
								}`}
							>
								<span>
									<Image
										width={500}
										height={500}
										alt="Agricom Logo Green"
										src="/img/logos/agricom-logo.png"
										className={`group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[55px] ${
											contentThreeOpen ? "hidden" : "block"
										}`}
									/>
									<Image
										width={500}
										height={500}
										alt="Agricom Logo White"
										src="/img/logos/agricom-logo.png"
										className={`group-hover:block object-contain object-center w-full h-[40px] lg:h-[55px] ${
											contentThreeOpen ? "block" : "hidden"
										}`}
									/>
								</span>
								<span className="text-white">
									{valuesBlockThree?.blockTitle}
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
										<EnquiryRequestForm
											title={valuesBlockOne?.title}
											contentOneOpen={contentOneOpen}
											contentTwoOpen={contentTwoOpen}
											contentThreeOpen={contentThreeOpen}
										/>
									</>
								) : contentTwoOpen ? (
									<>
										<EnquiryRequestForm
											title={valuesBlockTwo?.title}
											contentOneOpen={contentOneOpen}
											contentTwoOpen={contentTwoOpen}
											contentThreeOpen={contentThreeOpen}
										/>
									</>
								) : contentThreeOpen ? (
									<>
										<EnquiryRequestForm
											title={valuesBlockThree?.title}
											contentOneOpen={contentOneOpen}
											contentTwoOpen={contentTwoOpen}
											contentThreeOpen={contentThreeOpen}
										/>
									</>
								) : (
									<>
										<EnquiryRequestForm
											title={valuesBlockOne?.title}
											contentOneOpen={contentOneOpen}
											contentTwoOpen={contentTwoOpen}
											contentThreeOpen={contentThreeOpen}
										/>
									</>
								)}
							</motion.div>
							<div className="w-full lg:w-1/3">
								{contentOneOpen ? (
									<>
										<ValuesBlocksImageCard
											image={valuesBlockOne?.backgroundImage}
										/>
									</>
								) : contentTwoOpen ? (
									<>
										<ValuesBlocksImageCard
											image={valuesBlockTwo?.backgroundImage}
										/>
									</>
								) : contentThreeOpen ? (
									<>
										<ValuesBlocksImageCard
											image={valuesBlockThree?.backgroundImage}
										/>
									</>
								) : (
									<>
										<ValuesBlocksImageCard
											image={valuesBlockOne?.backgroundImage}
										/>
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

export default RequestQuoteFormBlocks;
