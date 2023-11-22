// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IJobsCategoryButton} from "@/types/components";
import {fadeIn, initialTwo} from "@/animations/animations";

const JobsCategoryButton: FC<IJobsCategoryButton> = ({
	title,
	active,
	onClick,
}) => {
	const generalStyling: string =
		"flex items-center justify-center group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit sm:mx-0 border-2 border-solid transition-all ease-in-out duration-500 before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-['']";
	return (
		<>
			<motion.button
				initial={initialTwo}
				whileInView={fadeIn}
				viewport={{once: true}}
				onClick={onClick}
				className={
					active
						? ` ${generalStyling} border-red-default bg-red-default text-white before:bg-red-default after:bg-red-default`
						: ` ${generalStyling} border-red-default hover:bg-red-default hover:border-red-default text-red-default hover:text-white before:bg-white hover:before:bg-red-default after:bg-white hover:after:bg-red-default`
				}
			>
				{title}
			</motion.button>
		</>
	);
};

export default JobsCategoryButton;
