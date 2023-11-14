// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFAQ} from "@/types/components/index";

// Styling
import styles from "../styles/components/FAQ.module.scss";

// Components
import FAQCard from "./Cards/FAQCard";
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";
import DownloadButtonLinks from "./Elements/DownloadButtonLinks";

const FAQ: FC<IFAQ> = ({
	cta,
	title,
	subtitle,
	paragraph,
	faqContent,
	displayCtaBlock,
	downloadLinksTitle,
	downloadButtonLinks,
	displayDownloadButtonLinks,
}) => {
	return (
		<>
			<div
				className={
					styles.faq + ` py-20 lg:pb-36 2xl:pb-28 px-4 lg:px-0 bg-white`
				}
			>
				<div className="container px-0 mx-auto">
					<motion.h3
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mb-1 uppercase text-center lg:text-center text-lg tracking-[0.10rem] text-yellow-Two"
					>
						{subtitle}
					</motion.h3>
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="mb-4 text-center uppercase font-extrabold leading-[2.5rem] lg:leading-[3rem] text-4xl lg:text-5xl text-black"
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-base sm:text-paragraph text-center"
					/>
					<div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-8 py-12">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="w-full lg:w-1/4 flex flex-col gap-4"
						>
							<div
								className={
									displayCtaBlock
										? "p-10 flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat"
										: "hidden"
								}
								style={{
									backgroundImage: `linear-gradient(
                                        0deg,
                                        rgba(114, 0, 4, 0.85),
                                        rgba(114, 0, 4, 0.85),
                                        rgba(114, 0, 4, 0.85)
                                    ),url("${cta?.backgroundImage?.sourceUrl}")`,
								}}
							>
								<div className="flex flex-col gap-4">
									<motion.h3
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="mb-1 text-center font-bold lg:text-left text-lg tracking-[0.10rem] text-white"
									>
										{cta?.title}
									</motion.h3>
									<Paragraph
										content={cta?.paragraph}
										tailwindStyling="lg:max-w-3xl mx-auto text-white leading-[1.75rem] text-base text-center lg:text-left"
									/>
								</div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={cta?.buttonLink?.url ? "block" : "hidden"}
								>
									<Link
										href={cta?.buttonLink?.url}
										target={cta?.buttonLink?.target}
									>
										<ButtonBorderSliced
											title="Schedule An Appointment"
											tailwindColor="white"
										/>
									</Link>
								</motion.div>
							</div>
							<div
								className={
									displayDownloadButtonLinks
										? "p-10 flex flex-col items-center justify-between bg-lightGrey gap-4"
										: "hidden"
								}
							>
								<motion.h3
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mb-2 text-center font-bold lg:text-left text-lg tracking-[0.10rem] text-black"
								>
									{downloadLinksTitle}
								</motion.h3>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={cta?.buttonLink?.url ? "block" : "hidden"}
								>
									{downloadButtonLinks?.length > 0 ? (
										downloadButtonLinks?.map((item: any, keys: any) => (
											<Fragment key={keys}>
												<Link
													href={item?.buttonLink?.url}
													target={item?.buttonLink?.target}
												>
													<DownloadButtonLinks
														pdfLink={item?.pdfLink}
														title={item?.buttonLink?.title}
														buttonColor={item?.buttonColor}
													/>
												</Link>
											</Fragment>
										))
									) : (
										<></>
									)}
								</motion.div>
							</div>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="w-full lg:w-3/4 flex flex-col items-center justify-center gap-4"
						>
							{faqContent?.length > 0 ? (
								faqContent.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<FAQCard
											index={keys}
											title={item?.card?.title}
											paragraph={item?.card?.paragraph}
										/>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQ;
