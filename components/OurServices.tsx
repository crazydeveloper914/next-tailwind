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
				className={styles.ourServices + " py-24 px-4 bg-lightGreyTwo relative"}
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
												className="relative z-50 w-full h-[450px] bg-yellow-Two flex flex-col justify-center bg-center bg-no-repeat bg-cover"
												style={{
													backgroundImage: `linear-gradient(
														0deg,
														rgba(0, 0, 4, 0.85),
														rgba(0, 0, 4, 0.85),
														rgba(0, 0, 4, 0.85)
													),url("${item?.card?.image?.sourceUrl}")`,
												}}
											>
												<div className="p-6 xl:shadow-2xl lg:absolute flex flex-col items-center justify-center w-full h-fit transition-all ease-in-out duration-500 bg-pureBlack">
													<Image
														alt={item?.card?.icon?.altText}
														src={item?.card?.icon?.sourceUrl}
														width={item?.card?.icon?.mediaDetails?.width}
														height={item?.card?.icon?.mediaDetails?.height}
														className={
															item?.card?.icon?.sourceUrl
																? `block object-contain object-center w-full h-[50px] mb-6`
																: `hidden`
														}
													/>
													<motion.h3
														initial={initialTwo}
														whileInView={fadeIn}
														viewport={{once: true}}
														className="text-white font-extrabold text-xl lg:text-xl leading-tight text-center tracking-[0.10rem]"
													>
														{item?.card?.title}
													</motion.h3>
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
