// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import fadeInUp, {fadeIn, initial, initialTwo} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";
import {IValuesBlocksTextCard} from "@/types/components";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const ValuesBlocksTextCard: FC<IValuesBlocksTextCard> = ({
	title,
	paragraph,
	buttonLink,
	displayButton,
}) => {
	return (
		<>
			<div>
				<motion.h2
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className="mb-4 text-center font-semibold leading-tight lg:text-left text-2xl text-black"
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling="text-darkGrey leading-[1.75rem] text-base sm:text-paragraph text-center lg:text-left"
				/>
			</div>
			<Link
				href={buttonLink?.url}
				target={buttonLink?.target}
				className={displayButton ? "block" : "hidden"}
			>
				<ButtonBorderSliced
					title={buttonLink?.title}
					tailwindColor="red-default"
				/>
			</Link>
		</>
	);
};

export default ValuesBlocksTextCard;
