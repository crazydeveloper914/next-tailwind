// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn, initialTwo, stagger} from "../animations/animations";
import {IAchievementsStatsCTA} from "@/types/components/index";

// Components
import Title from "./Elements/Title";
import Paragraph from "./Elements/Paragraph";

const AchievementsStatsCta: FC<IAchievementsStatsCTA> = ({
	title,
	paragraph,
	buttonLink,
	achievements,
	backgroundImage,
	displayAchievementsContent,
}) => {
	return (
		<>
			<div className="flex flex-col">
				<div
					className={`bg-white relative ${
						displayAchievementsContent ? "block" : "hidden"
					}`}
				>
					<motion.div
						initial={initialTwo}
						whileInView={stagger}
						viewport={{once: true}}
						className="grid-cols-1 grid px-4 py-16 lg:px-0 md:grid-cols-2 gap-8 w-full lg:w-[55%] 2xl:w-[60%] lg:absolute lg:top-[-200px] xl:top-[-150px] right-0 flex-row items-center justify-end"
					>
						{achievements?.length > 0 ? (
							achievements?.map((item: any, keys: any) => (
								<div
									key={keys}
									className="w-full h-[500px] flex flex-col justify-end xl:shadow-2xl relative xl:p-8 bg-center bg-no-repeat bg-cover"
									style={{
										backgroundImage: `linear-gradient(
											0deg,
											rgba(0, 0, 0, 0.05),
											rgba(0, 0, 0, 0.05),
											rgba(0, 0, 0, 0.05)
										),url("${item?.card?.image?.sourceUrl}")`,
									}}
								>
									<motion.div
										initial={initialTwo}
										whileInView={stagger}
										viewport={{once: true}}
										className={`p-6 w-full xl:shadow-2xl xl:w-[50%] xl:bottom-[20px] xl:left-[20px] lg:absolute flex flex-col items-center justify-center w-full sm:mih-[22vh] transition-all ease-in-out duration-500 ${
											keys === 0
												? "bg-green-Three"
												: keys === 1
												? "bg-green-Three"
												: "bg-green-default"
										}`}
									>
										<Image
											alt={item?.card?.icon?.altText}
											src={item?.card?.icon?.sourceUrl}
											width={item?.card?.icon?.mediaDetails?.width}
											height={item?.card?.icon?.mediaDetails?.height}
											className={
												item?.card?.icon?.sourceUrl
													? `block object-contain object-center w-full h-[50px] lg:h-[60px] mb-6`
													: `hidden`
											}
										/>

										<motion.h4
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="text-white font-extrabold text-4xl py-4 2xl:text-5xl leading-[1.5rem] text-center tracking-[0.10rem]"
										>
											{item?.card?.title}
										</motion.h4>
										<Paragraph
											content={item?.card?.paragraph}
											tailwindStyling="w-full lg:max-w-[40rem] mt-4 text-center text-white text-base"
										/>
									</motion.div>
								</div>
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
				<div
					className="px-4 py-20 bg-center bg-no-repeat bg-cover lg:px-0"
					style={{
						backgroundImage: `linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.50),
							rgba(0, 0, 0, 0.85),
							rgba(0, 0, 0, 0.95)
						),url("${backgroundImage}")`,
					}}
				>
					<div className="container p-0 mx-auto">
						<div className="flex flex-col items-center justify-between gap-10 px-0 lg:px-4 lg:flex-row">
							<motion.div
								initial={initialTwo}
								whileInView={stagger}
								viewport={{once: true}}
								className={`w-full flex flex-col items-center justify-between gap-4  ${
									displayAchievementsContent
										? "lg:w-[45%] lg:items-start"
										: "lg:w-full lg:flex-row lg:items-center"
								}`}
							>
								<div>
									<Title
										content={title}
										tailwindStyling="mb-4 max-w-xl text-center font-semibold leading-tight lg:text-left text-4xl lg:text-5xl text-white"
									/>
									<Paragraph
										content={paragraph}
										tailwindStyling="max-w-lg text-white leading-[1.75rem] text-base sm:text-paragraph text-center lg:text-left"
									/>
								</div>
								<Link href={buttonLink?.url} target={buttonLink?.target}>
									<motion.button
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={`px-6 py-3 mt-3 text-base font-semibold tracking-widest text-white transition-all duration-500 ease-in-out bg-red-default hover:bg-yellow-default ${
											displayAchievementsContent
												? "lg:px-6 lg:py-3"
												: "lg:px-12 lg:py-6"
										}`}
									>
										{buttonLink?.title}
									</motion.button>
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AchievementsStatsCta;
