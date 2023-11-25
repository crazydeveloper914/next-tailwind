// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {ISideMenu} from "@/types/components";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Navbar.module.scss";

const SideMenu: FC<ISideMenu> = ({menuActive}) => {
	const globalContext = useGlobalContext();

	const [aboutUsSublinksOpen, setAboutUsSublinksOpen]: any = useState(false);
	const [careerSublinksOpen, setCareerSublinksOpen]: any = useState(false);
	const [businessServicesSublinksOpen, setBusinessServicesSublinksOpen]: any =
		useState(false);
	const [revealGoogleTranslateOptions, setRevealGoogleTranslateOptions] =
		useState(false);

	// Hides or Display about us sublinks
	const displayAboutUsSublinks = () => {
		setAboutUsSublinksOpen(!aboutUsSublinksOpen);
		setBusinessServicesSublinksOpen(false);
		setCareerSublinksOpen(false);
		setRevealGoogleTranslateOptions(false);
	};

	// Hides or Display about us sublinks
	const displayBusinessServicesSublinks = () => {
		setAboutUsSublinksOpen(false);
		setBusinessServicesSublinksOpen(!businessServicesSublinksOpen);
		setCareerSublinksOpen(false);
		setRevealGoogleTranslateOptions(false);
	};

	// Hides or Display about us sublinks
	const displayCareerSublinks = () => {
		setAboutUsSublinksOpen(false);
		setBusinessServicesSublinksOpen(false);
		setCareerSublinksOpen(!careerSublinksOpen);
		setRevealGoogleTranslateOptions(false);
	};
	// Hides or Displays Google Translate Options
	const handleRevealGoogleTranslateOptions = () => {
		setCareerSublinksOpen(false);
		setAboutUsSublinksOpen(false);
		setBusinessServicesSublinksOpen(false);
		setRevealGoogleTranslateOptions(!revealGoogleTranslateOptions);
	};

	return (
		<>
			<nav
				className={
					menuActive
						? `${styles.navReveal} ${styles.nav}`
						: `hidden ${styles.nav}`
				}
			>
				<div className="fixed inset-0 opacity-[65%] bg-pureBlack"></div>
				<div className="relative flex flex-col w-full h-full px-6 py-6 overflow-x-hidden overflow-y-auto bg-pureBlack">
					<div className="flex flex-col items-center mb-8">
						<Link className="mr-auto text-3xl font-bold leading-none" href="/">
							<Image
								width={500}
								height={500}
								alt="Bravo Group"
								src="/img/logos/bravo-group-logo-white.png"
								className="object-contain object-center w-full h-[25px]"
							/>
						</Link>
					</div>
					<div className="flex flex-col px-4 mt-12">
						<motion.ul
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
						>
							{globalContext?.navbarMenuLinks.length > 0 ? (
								globalContext?.navbarMenuLinks.map(
									(item: any, keys: number) => (
										<Fragment key={keys}>
											{item?.node?.url === "/about" ? (
												<li
													onClick={displayAboutUsSublinks}
													className="relative border-b-[1px] border-yellow-dark border-opacity-50 cursor-pointer"
												>
													<span className="py-4 flex flex-row justify-between items-center gap-2">
														<Link
															href="/about"
															className="text-white text-base font-semibold text-center tracking-[0.05rem] hover:text-red-Two transition-all ease-in-out duration-500"
														>
															About Us
														</Link>
														<Image
															width={550}
															height={550}
															alt="White Arrow Icon"
															src="/img/navigation-menu-dropdown-arrow-white.png"
															className="w-[25px] h-[25px] object-contain object-center"
														/>
													</span>
													{aboutUsSublinksOpen ? (
														<>
															<motion.ul
																initial={initialTwo}
																whileInView={stagger}
																viewport={{once: true}}
																className={
																	styles.aboutUsSublinks +
																	` flex flex-col my-4 z-[999]`
																}
															>
																{/* Menu Link*/}
																{globalContext?.aboutUsSublinks?.length > 0 ? (
																	globalContext?.aboutUsSublinks?.map(
																		(item: any, keys: any) => (
																			<Fragment key={keys}>
																				<Link href={item?.node?.url}>
																					<li
																						className={`${
																							keys < 1
																								? "border-t-[1px] border-darkGrey border-opacity-50"
																								: "border-t-[0px]"
																						} hover:border-lightGreyTwo hover:bg-lightGreyTwo border-b-[1px] border-darkGrey border-opacity-50 text-white hover:text-pureBlack`}
																					>
																						<Link
																							href={item?.node?.url}
																							className="block p-4 text-base font-semibold"
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
														</>
													) : null}
												</li>
											) : item?.node?.label === "Our Services" ? (
												<li
													onClick={displayBusinessServicesSublinks}
													className="border-b-[1px] border-yellow-dark border-opacity-50 cursor-pointer"
												>
													<div className="py-4 flex flex-row justify-between items-center gap-2">
														<span className="text-white text-base font-semibold text-center tracking-[0.05rem]  hover:text-yellow-Two transition-all ease-in-out duration-500">
															Our Services
														</span>
														<Image
															width={550}
															height={550}
															alt="White Arrow Icon"
															src="/img/navigation-menu-dropdown-arrow-white.png"
															className="w-[25px] h-[25px] object-contain object-center"
														/>
													</div>
													{businessServicesSublinksOpen ? (
														<>
															<motion.ul
																initial={initialTwo}
																whileInView={stagger}
																viewport={{once: true}}
																className={
																	styles.businessServicesSublinks +
																	` flex flex-col my-4 z-[999]`
																}
															>
																{/* Menu Link*/}
																{globalContext?.businessServicesSublinks
																	?.length > 0 ? (
																	globalContext?.businessServicesSublinks?.map(
																		(item: any, keys: any) => (
																			<Fragment key={keys}>
																				<Link href={item?.node?.url}>
																					<li
																						className={`${
																							keys < 1
																								? "border-t-[1px] border-darkGrey border-opacity-50"
																								: "border-t-[0px]"
																						} hover:border-lightGreyTwo hover:bg-lightGreyTwo border-b-[1px] border-darkGrey border-opacity-50 text-white hover:text-pureBlack`}
																					>
																						<Link
																							href={item?.node?.url}
																							className="block p-4 text-base font-semibold"
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
														</>
													) : null}
												</li>
											) : item?.node?.url === "/career" ? (
												<li
													onClick={displayCareerSublinks}
													className="border-b-[1px] border-yellow-dark border-opacity-50 cursor-pointer"
												>
													<div className="py-4 flex flex-row justify-between items-center gap-2">
														<span className="text-white text-base font-semibold text-center tracking-[0.05rem]hover:text-red-Two transition-all ease-in-out duration-500">
															<Link
																href="/career"
																className="text-white text-base font-semibold text-center tracking-[0.05rem] hover:text-red-Two transition-all ease-in-out duration-500"
															>
																Career
															</Link>
														</span>
														<Image
															width={550}
															height={550}
															alt="White Arrow Icon"
															src="/img/navigation-menu-dropdown-arrow-white.png"
															className="w-[25px] h-[25px] object-contain object-center"
														/>
													</div>
													{careerSublinksOpen ? (
														<>
															<ul
																className={
																	styles.careerServicesSublinks +
																	` flex flex-col my-4 z-[999]`
																}
															>
																<li className="hover:border-lightGreyTwo hover:bg-lightGreyTwo border-y-[1px] border-darkGrey border-opacity-50 text-white hover:text-pureBlack">
																	<Link
																		href="/job-positions"
																		className="block p-4 text-base font-semibold"
																	>
																		Job Positions
																	</Link>
																</li>
															</ul>
														</>
													) : null}
												</li>
											) : (
												<li className="border-b-[1px] border-yellow-dark border-opacity-50">
													<Link
														href={item?.node?.url}
														className="block py-4 text-base font-semibold text-white hover:text-red-Two"
													>
														{item?.node?.label}
													</Link>
												</li>
											)}
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</motion.ul>
						{/* <div
							className={
								styles.googleTranslate +
								" relative flex flex-col xl:hidden items-center justify-start gap-4"
							}
						>
							<div className="py-3 w-full flex flex-row justify-between items-center gap-2 border-b-[1px] border-yellow-dark border-opacity-50">
								<span className="flex flex-row items-center justify-start gap-3 w-full">
									<span className="text-white text-base font-semibold text-center tracking-[0.05rem]  hover:text-yellow-Two transition-all ease-in-out duration-500">
										Google Translate
									</span>
								</span>
								<div className="flex flex-row items-center justify-start gap-3">
									<motion.button
										role="button"
										type="button"
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										onClick={handleRevealGoogleTranslateOptions}
										aria-label="Google Translate Options Button"
										className={
											revealGoogleTranslateOptions
												? "hidden"
												: "block px-0 text-white rounded-sm"
										}
									>
										<svg
											id="Layer_1"
											fill="#ffffff"
											data-name="Layer 1"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 122.88 92.91"
											className="block w-full max-w-[35px] h-[35px] object-contain object-center"
										>
											<path d="M20.15,83.63,31.63,73.4a2.89,2.89,0,0,1,1.91-.73h27.8a.92.92,0,0,0,.93-.93V65.9H68v5.84a6.71,6.71,0,0,1-6.68,6.68H34.62L19.3,92.07a2.87,2.87,0,0,1-4.9-2V78.42H6.69A6.71,6.71,0,0,1,0,71.74V28.59a6.76,6.76,0,0,1,6.69-6.68H43.35v5.75H6.69a1,1,0,0,0-.94.93V71.74a.91.91,0,0,0,.28.65,1,1,0,0,0,.66.28H17.27a2.88,2.88,0,0,1,2.88,2.88v8.08Zm.21-19.48L29.6,36.24h8.83l9.24,27.91H40.35L38.8,59.07H29.15l-1.51,5.08ZM30.79,53.24h6.37L34,41.81,30.79,53.24ZM76.63,13.35h8.7V11.11a.69.69,0,0,1,.69-.69h4.65a.68.68,0,0,1,.68.69v2.24h9.76a.68.68,0,0,1,.68.69V18.5a.68.68,0,0,1-.68.68H99.56a26.3,26.3,0,0,1-.91,3.88l0,.06a26.07,26.07,0,0,1-1.74,4.15,32.34,32.34,0,0,1-2.14,3.43c-.67,1-1.41,1.9-2.2,2.83a35.78,35.78,0,0,0,3.68,3.83,41.43,41.43,0,0,0,5.09,3.74.68.68,0,0,1,.21.94l-2.39,3.73a.69.69,0,0,1-1,.2,45.88,45.88,0,0,1-5.58-4.08l0,0a41.42,41.42,0,0,1-4-4.1C87.3,38.93,86.15,40,85,41l0,0c-1.36,1.12-2.79,2.2-4.47,3.36a.69.69,0,0,1-1-.17L77,40.53a.69.69,0,0,1,.17-1c1.66-1.14,3-2.19,4.36-3.28,1.16-1,2.28-2,3.49-3.16a44.82,44.82,0,0,1-2.77-4.45A28.84,28.84,0,0,1,80,22.9a.68.68,0,0,1,.47-.84l4.27-1.19a.68.68,0,0,1,.84.47A22.62,22.62,0,0,0,89,28.7L90.27,27a26.33,26.33,0,0,0,1.51-2.47l0,0A19.43,19.43,0,0,0,93,21.62a24,24,0,0,0,.66-2.44h-17a.69.69,0,0,1-.69-.68V14a.69.69,0,0,1,.69-.69Zm27,56.82L88.26,56.51H61.54a6.73,6.73,0,0,1-6.69-6.68V6.69a6.71,6.71,0,0,1,2-4.72l.2-.18A6.67,6.67,0,0,1,61.54,0h54.65a6.69,6.69,0,0,1,4.71,2l.19.2a6.69,6.69,0,0,1,1.79,4.51V49.83a6.73,6.73,0,0,1-6.69,6.68h-7.7V68.13a2.88,2.88,0,0,1-4.91,2ZM91.26,51.49l11.47,10.23V53.64a2.88,2.88,0,0,1,2.88-2.88h10.58a.92.92,0,0,0,.65-.28.91.91,0,0,0,.29-.65V6.69a1,1,0,0,0-.22-.58L116.84,6a1,1,0,0,0-.65-.29H61.54A.94.94,0,0,0,61,6L60.89,6a.92.92,0,0,0-.28.65V49.83a.92.92,0,0,0,.93.93H89.35a2.86,2.86,0,0,1,1.91.73Z" />
										</svg>
									</motion.button>
									<motion.button
										role="button"
										type="button"
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										onClick={handleRevealGoogleTranslateOptions}
										aria-label="Google Translate Options Button"
										className={
											revealGoogleTranslateOptions ? "block" : "hidden"
										}
									>
										<svg
											width="32"
											height="32"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className={
												styles.closeGoogleTranslateSVG +
												" w-[32px] h-[32px] object-contain object-center"
											}
										>
											<path
												d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
												stroke="#ffffff"
												strokeWidth="1.5"
												strokeLinecap="round"
											/>
											<path
												d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
												stroke="#ffffff"
												strokeWidth="1.5"
												strokeLinecap="round"
											/>
										</svg>
									</motion.button>
								</div>
							</div>
							<motion.button
								role="button"
								type="button"
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								id="google_translate_element"
								aria-label="Google Translate Options Button"
								className={
									revealGoogleTranslateOptions
										? "block px-4 py-6 bg-transparent w-full border-y-[1px] border-darkGrey border-opacity-50"
										: "hidden"
								}
							/>
						</div> */}
					</div>
					<div className="mt-20">
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
							className="flex flex-col items-center justify-between gap-4"
						>
							<h4 className="mb-5 text-lg font-semibold tracking-normal text-center text-white uppercase md:text-left">
								Contact Links
							</h4>
							<div className="flex items-center justify-center gap-4 text-center">
								<Link
									className="inline-block px-1 hover:opacity-70"
									href={`${globalContext?.themesOptionsContent?.facebookLink}`}
								>
									<svg
										height="100%"
										className="w-5 h-5"
										style={{
											fill: "#f6ad37",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
									>
										<path
											d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
								<Link
									className="inline-block px-1 hover:opacity-70"
									href={`${globalContext?.themesOptionsContent?.twitterLink}`}
								>
									<svg
										height="100%"
										className="w-5 h-5"
										style={{
											fill: "#f6ad37",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
									>
										<path
											d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
								<Link
									className="inline-block px-1 hover:opacity-70"
									href={`${globalContext?.themesOptionsContent?.telegramLink}`}
								>
									<svg
										height="100%"
										style={{
											fill: "#f6ad37",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										className="w-5 h-5"
										width="100%"
									>
										<path
											d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
							</div>
							<div className="flex flex-col sm:flex-row items-center justify-center w-auto gap-2 py-6 mb-10">
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.email
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-Two sm:mr-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
									<Link
										className="font-medium tracking-wide text-white hover:text-yellow-Two"
										href={`mailto:${globalContext?.themesOptionsContent?.email}`}
									>
										{globalContext?.themesOptionsContent?.email}
									</Link>
								</motion.div>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.emailTwo
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-Two sm:mr-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
									<Link
										className="font-medium tracking-wide text-white hover:text-yellow-Two"
										href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
									>
										{globalContext?.themesOptionsContent?.emailTwo}
									</Link>
								</motion.div>
							</div>
						</motion.div>
						<motion.div
							initial={initial}
							viewport={{once: true}}
							whileInView={stagger}
							className="flex flex-col items-center justify-center"
						>
							<h4 className="mb-5 text-lg font-semibold tracking-normal text-center text-white uppercase md:text-left">
								Other Links
							</h4>
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
								<Link href="http://www.bravo.co.tz/" target="">
									<motion.button
										initial={initial}
										whileInView={fadeInUp}
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
								<Link href="https://agricom.co.tz/" target="">
									<motion.button
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className={
											styles.borderButton +
											" block group w-full h-full min-w-[200px] min-h-[150px] mt-3 relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-lightGrey hover:bg-green-Two hover:border-green-Two transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-pureBlack after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-pureBlack hover:after:bg-green-Two"
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
					</div>
				</div>
			</nav>
		</>
	);
};

export default SideMenu;
