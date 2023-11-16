// Imports
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {useState, FC, Fragment, useEffect} from "react";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const SubMegaMenuLinks: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="fixed mt-[1.65rem] w-full left-0 flex">
				<div className="w-[30%]" />
				<div className="w-[70%] bg-pureBlack grid grid-cols-3 gap-4 items-center justify-between">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-col items-center justify-center"
					>
						<h4 className="mb-5 text-lg font-semibold tracking-normal text-center text-white uppercase md:text-left">
							Services Links
						</h4>

						<motion.ul
							initial={initialTwo}
							whileInView={stagger}
							viewport={{once: true}}
							className={
								styles.businessServicesSublinks +
								" p-10 w-full flex flex-col z-[999]"
							}
						>
							{/* Menu Link*/}
							{globalContext?.businessServicesSublinks?.length > 0 ? (
								globalContext?.businessServicesSublinks?.map(
									(item: any, keys: any) => (
										<Fragment key={keys}>
											<Link href={item?.node?.url}>
												<li className="w-full hover:bg-red-default border-b-[1px] border-red-default border-opacity-50">
													<Link
														href={item?.node?.url}
														className="block p-4 text-base font-semibold text-white"
													>
														{item?.node?.label}
													</Link>
												</li>
											</Link>
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</motion.ul>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-col"
					>
						<h4 className="mb-5 text-lg font-semibold tracking-normal text-center text-white uppercase">
							Other Links
						</h4>
						<div className="flex flex-col 2xl:flex-row items-center justify-center gap-4">
							<Link href="http://www.bravo.co.tz/" target="_blank">
								<motion.button
									initial={initial}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										styles.borderButton +
										" block group w-full h-full min-w-[200px] min-h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 bg-lightGrey hover:bg-red-Two hover:border-lightGrey transition-all ease-in-out duration-500"
									}
								>
									<span>
										<Image
											width={500}
											height={500}
											alt="Bravo Logo Red"
											src="/img/logos/bravo-red.svg"
											className="block group-hover:hidden object-contain object-center w-full h-[35px] mb-4"
										/>
										<Image
											width={500}
											height={500}
											alt="Bravo Logo White"
											src="/img/logos/bravo-white.svg"
											className="hidden group-hover:block object-contain object-center w-full h-[35px] mb-4"
										/>
									</span>
									<span className="text-pureBlack group-hover:text-white">
										Bravo Logistics
									</span>
								</motion.button>
							</Link>
							<Link href="https://agricom.co.tz/" target="_blank">
								<motion.button
									initial={initial}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										styles.borderButton +
										" block group w-full h-full min-w-[200px] min-h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-lightGrey hover:bg-green-Two hover:border-green-Two transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-pureBlack hover:after:bg-green-Two"
									}
								>
									<span>
										<Image
											width={500}
											height={500}
											alt="Agricom Logo Green"
											src="/img/logos/agricom-logo.png"
											className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
										<Image
											width={500}
											height={500}
											alt="Agricom Logo White"
											src="/img/logos/agricom-logo.png"
											className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
									</span>
									<span>Agricom</span>
								</motion.button>
							</Link>
						</div>
					</motion.div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="px-10 py-16 flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: `linear-gradient(
							    	0deg,
							    	rgba(0, 0, 4, 0.85),
							    	rgba(0, 0, 4, 0.85),
							    	rgba(0, 0, 4, 0.85)
							    ),url("${globalContext?.themesOptionsContent?.megaMenuContent?.backgroundImage?.sourceUrl}")`,
						}}
					>
						<div className="flex flex-col gap-4">
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-1 text-center font-bold lg:text-left text-lg tracking-[0.10rem] text-white"
							>
								{globalContext?.themesOptionsContent?.megaMenuContent?.title}
							</motion.h3>
							<Paragraph
								content={
									globalContext?.themesOptionsContent?.megaMenuContent
										?.paragraph
								}
								tailwindStyling="lg:max-w-3xl mx-auto text-white leading-[1.75rem] text-base text-center lg:text-left"
							/>
						</div>
						<motion.div
							initial={initial}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={
								globalContext?.themesOptionsContent?.megaMenuContent?.buttonLink
									?.url
									? "block"
									: "hidden"
							}
						>
							<Link
								href={
									globalContext?.themesOptionsContent?.megaMenuContent
										?.buttonLink?.url
								}
								target={
									globalContext?.themesOptionsContent?.megaMenuContent
										?.buttonLink?.target
								}
							>
								<ButtonBorderSliced
									fullWidth={true}
									tailwindColor="white"
									title={
										globalContext?.themesOptionsContent?.megaMenuContent
											?.buttonLink?.title
									}
								/>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default SubMegaMenuLinks;
