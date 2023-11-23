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
									height="35"
									width="30.237"
									viewBox="0 0 30.237 35"
									xmlns="http://www.w3.org/2000/svg"
									className="w-[35px] h-[35px] object-center object-contain rotate-180"
								>
									<g transform="translate(-4906.763 143)">
										<path
											d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
											transform="translate(4870 -143)"
											fill="#e4a002"
										></path>
										<g transform="translate(4890.311 -1111.861)">
											<path
												d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
												transform="translate(0 0)"
												fill="#ffffff"
											></path>
										</g>
									</g>
								</svg>
							</span>
							<span className="block group-hover:hidden">
								<svg
									height="35"
									width="30.237"
									viewBox="0 0 30.237 35"
									xmlns="http://www.w3.org/2000/svg"
									className="w-[35px] h-[35px] object-center object-contain rotate-180"
								>
									<g transform="translate(-4906.763 143)">
										<path
											d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
											transform="translate(4870 -143)"
											fill="#e4a002"
										></path>
										<g transform="translate(4890.311 -1111.861)">
											<path
												d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
												transform="translate(0 0)"
												fill="#ff0008"
											></path>
										</g>
									</g>
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
