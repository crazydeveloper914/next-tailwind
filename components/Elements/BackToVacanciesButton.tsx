// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IBackToVacanciesButton} from "@/types/components";
import {initialTwo, fadeIn} from "@/animations/animations";

const BackToVacanciesButton: FC<IBackToVacanciesButton> = ({
	link,
	title,
	fullWidth,
}) => {
	return (
		<>
			<div className="absolute items-center justify-center hidden w-full h-full xl:flex">
				<div className="fixed left-10 z-20 top-[7.5rem] flex justify-center">
					<Link href={`${link}`}>
						<motion.button
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={
								title
									? `flex items-center justify-center group mt-3 relative gap-3 px-6 py-3 font-semibold tracking-widest text-base ${
											fullWidth ? "w-full" : "w-fit"
									  } sm:mx-0 border-2 border-solid border-red-default hover:bg-red-default hover:border-red-default transition-all ease-in-out duration-500 text-red-default hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-red-default after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-red-default`
									: `hidden`
							}
						>
							<span className="hidden group-hover:block">
								<svg
									fill="none"
									width="800px"
									height="800px"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-[25px] h-[25px] object-center object-contain rotate-180"
								>
									<path
										d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
										fill="#ffffff"
									/>
								</svg>
							</span>
							<span className="block group-hover:hidden">
								<svg
									fill="none"
									width="800px"
									height="800px"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-[25px] h-[25px] object-center object-contain rotate-180"
								>
									<path
										d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
										fill="#cb0007"
									/>
								</svg>
							</span>
							<span>{title}</span>
						</motion.button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default BackToVacanciesButton;
