// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurServices} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const OurServices: FC<IOurServices> = ({
	title,
	subtitle,
	paragraph,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices + " py-40 sm:py-24 px-4 bg-lightGreyTwo relative"
				}
				style={{
					clipPath: `polygon(76% 6%, 100% 3%, 100% 94%, 23% 100%, 0 96%, 0 2%)`,
				}}
			>
				<div className="container relative m-auto flex flex-col items-center">
					<div className="flex flex-col py-8 items-center gap-2">
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-1 uppercase text-center lg:text-center text-lg tracking-[0.15rem] text-yellow-Two"
						>
							{subtitle}
						</motion.h3>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 lg:max-w-3xl text-center font-semibold leading-tight text-4xl lg:text-5xl text-pureBlack"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl text-pureBlack leading-[1.75rem] text-base sm:text-paragraph text-center"
						/>
					</div>
					<div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 gap-4 items-center justify-center">
						{servicesGrid?.length > 0 ? (
							servicesGrid.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<>
										<Link
											href={`${item?.card?.link?.url}`}
											target={item?.card?.link?.target}
											className="group"
										>
											<div
												className="relative z-50 w-full h-[450px] bg-yellow-Two flex flex-col items-baseline justify-start bg-center bg-no-repeat bg-cover"
												style={{
													backgroundImage: `linear-gradient(
														0deg,
														rgba(0, 0, 4, 0.25),
														rgba(0, 0, 4, 0.75),
														rgba(0, 0, 4, 0.95)
													),url("${item?.card?.image?.sourceUrl}")`,
												}}
											>
												<div className="p-6 xl:shadow-2xl lg:absolute flex flex-col items-baseline justify-between w-full h-fit transition-all ease-in-out duration-500">
													<motion.h4
														initial={initialTwo}
														whileInView={fadeIn}
														viewport={{once: true}}
														className="text-white font-extrabold text-4xl lg:text-6xl leading-tight text-left tracking-[0.10rem]"
													>
														{item?.card?.title}
													</motion.h4>
												</div>
												<div className="w-fit h-fit opacity-80 group-hover:opacity-100 z-[998]  transition-all ease-in-out duration-500">
													<div className="absolute left-0 z-0 bottom-0 flex justify-center">
														<span className="flex flex-row items-center justify-center gap-2 bg-pureBlack py-2 px-3 group-hover:bg-red-dark transition-all ease-in-out duration-500">
															<h4 className="text-white">Discover More</h4>
															<svg
																fill="none"
																width="800px"
																height="800px"
																viewBox="0 0 24 24"
																xmlns="http://www.w3.org/2000/svg"
																className="w-[25px] h-[25px] object-center object-contain rotate-[-45deg]"
															>
																<path
																	d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
																	fill="#ffffff"
																/>
															</svg>
														</span>
													</div>
												</div>
											</div>
										</Link>
									</>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default OurServices;
