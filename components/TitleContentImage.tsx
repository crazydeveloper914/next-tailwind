// Imports
import {
	initial,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITitleContentImage} from "@/types/components";

// Components
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";
import Paragraph from "./Elements/Paragraph";

const TitleContentImage: FC<ITitleContentImage> = ({
	title,
	image,
	paragraph,
	buttonLink,
	imageLocation,
}) => {
	return (
		<>
			<div className="py-24 lg:py-32 bg-white overflow-hidden">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap -m-5">
						<div className="w-full md:w-7/12 p-5">
							<div className="p-12 bg-indigo-500 h-full rounded-2xl">
								<div className="md:max-w-lg h-full">
									<div className="flex flex-col justify-between h-full">
										<div className="mb-12">
											<motion.h2
												initial={initial}
												whileInView={fadeInUp}
												viewport={{once: true}}
												className="font-heading text-6xl text-white tracking-tighter"
											>
												{title}
											</motion.h2>
										</div>
										<div className="inline-block">
											<Paragraph
												content={paragraph}
												tailwindStyling={`mb-8 w-full lg:max-w-2xl mx-auto py-6 text-black text-center lg:text-left text-base sm:text-paragraph`}
											/>
											<div
												className={
													buttonLink?.url ? "mx-auto lg:mx-0" : "hidden"
												}
											>
												<Link
													href={`${buttonLink?.url}`}
													target={buttonLink?.target}
												>
													<ButtonBorderSliced
														fullWidth={false}
														title={buttonLink?.title}
														tailwindColor={`red-default`}
													/>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full md:w-5/12 p-5">
							<div className="h-full max-w-max mx-auto overflow-hidden rounded-2xl">
								{/* <img className="object-cover h-full transform hover:scale-105 transition duration-500" src="basko-assets/images/cta/work.jpg" alt=""> */}
								<motion.div
									initial={slideInLeftInitial}
									whileInView={slideInRightFinish}
									viewport={{once: true}}
									className={
										imageLocation === "Left"
											? `block relative w-full px-4 lg:w-1/2`
											: `hidden`
									}
								>
									<Image
										priority={true}
										alt={image?.altText}
										src={image?.sourceUrl}
										width={image?.mediaDetails?.width}
										height={image?.mediaDetails?.height}
										className={
											image?.sourceUrl
												? `block object-cover object-center w-full h-[350px] sm:h-[400px]`
												: `hidden`
										}
										style={{
											clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
										}}
									/>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TitleContentImage;
