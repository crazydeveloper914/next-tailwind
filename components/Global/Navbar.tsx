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
import SideMenu from "../Elements/SideMenu";
import SubMegaMenuLinks from "../Elements/SubMegaMenuLinks";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	// Background color scroll position change
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Display all sublinks & Mobile Links
	const [menuActive, setMenuActive] = useState(false);
	const [careerSublinksOpen, setCareerSublinksOpen]: any = useState(false);
	const [aboutUsSublinksOpen, setAboutUsSublinksOpen]: any = useState(false);
	const [navBackgroundSublinksOpen, setNavBackgroundSublinksOpen]: any =
		useState(false);
	const [businessServicesSublinksOpen, setBusinessServicesSublinksOpen]: any =
		useState(false);
	const [revealGoogleTranslateOptions, setRevealGoogleTranslateOptions] =
		useState(false);

	/* Hides or Displays the Full Nav Menu */
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	// Hides or Displays Google Translate Options
	const handleRevealGoogleTranslateOptions = () => {
		setCareerSublinksOpen(false);
		setAboutUsSublinksOpen(false);
		setNavBackgroundSublinksOpen(false);
		setBusinessServicesSublinksOpen(false);
		setRevealGoogleTranslateOptions(!revealGoogleTranslateOptions);
	};

	/* Display's Navbar background Color
	when Mega sublinks are hovered*/
	const displayNavBackgroundColor = () => {
		setNavBackgroundSublinksOpen(!navBackgroundSublinksOpen);
	};

	// Hides or Display about us sublinks
	const displayCareerSublinks = () => {
		setAboutUsSublinksOpen(false);
		setBusinessServicesSublinksOpen(false);
		setCareerSublinksOpen(!careerSublinksOpen);
		setRevealGoogleTranslateOptions(false);
	};

	// Hides or Display about us sublinks
	const displayAboutUsSublinks = () => {
		setCareerSublinksOpen(false);
		setBusinessServicesSublinksOpen(false);
		setAboutUsSublinksOpen(!aboutUsSublinksOpen);
		setRevealGoogleTranslateOptions(false);
	};

	// Hides or Display about us sublinks
	const displayBusinessServicesSublinks = () => {
		setCareerSublinksOpen(false);
		setAboutUsSublinksOpen(false);
		setBusinessServicesSublinksOpen(!businessServicesSublinksOpen);
		setRevealGoogleTranslateOptions(false);
	};

	const resetNavbarStyling = () => {
		setCareerSublinksOpen(false);
		setAboutUsSublinksOpen(false);
		setNavBackgroundSublinksOpen(false);
		setBusinessServicesSublinksOpen(false);
		setRevealGoogleTranslateOptions(false);
	};

	// This script waits for the document to be fully loaded and then searches for an element with the class "goog-te-gadget". If such an element is found, it iterates through its child nodes to find a text node containing the text "Powered by " and removes that text node.
	useEffect(() => {
		const removePoweredByText = () => {
			// Find the Google Translate element by class
			const translateElement = document.querySelector(".goog-te-gadget");

			// Check if the element is found
			if (translateElement) {
				// Iterate through child nodes to find the text node and remove it
				translateElement.childNodes.forEach((childNode) => {
					// Check if the node is a text node and contains the desired text
					if (
						childNode.nodeType === 3 &&
						childNode.nodeValue &&
						childNode.nodeValue.includes("Powered by ")
					) {
						// Remove the text node
						translateElement.removeChild(childNode);
					}
				});
			}
		};

		// Run the function when the component is mounted
		removePoweredByText();

		// Clean up the effect (optional)
		return () => {
			// Any cleanup code if needed
		};
	}, []);

	return (
		<>
			<nav
				className={
					styles.navbar +
					` z-[999] w-full fixed transition-all ease-in-out hover:bg-pureBlack duration-500 ${
						scrollPosition > 50 ||
						navBackgroundSublinksOpen ||
						revealGoogleTranslateOptions
							? "bg-pureBlack"
							: "bg-transparent"
					}`
				}
			>
				<div className="container mx-auto flex flex-row items-baseline sm:items-center justify-between py-5 xl:py-6 px-4">
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
					>
						<Link href="/">
							<Image
								priority
								width={500}
								height={500}
								alt="Bravo Group"
								src="/img/logos/bravo-group-logo-white.png"
								className="object-contain object-center w-full h-[20px] sm:h-[25px] lg:h-[30px]"
							/>
						</Link>
					</motion.div>
					<div className="flex items-center gap-8">
						<motion.ul
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="hidden xl:flex lg:items-center lg:gap-x-6"
						>
							{globalContext?.navbarMenuLinks?.length > 0 ? (
								globalContext?.navbarMenuLinks?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										{item?.node?.url === "/about" ? (
											<li className="relative">
												<span className="flex flex-row justify-center items-center gap-2 cursor-pointer">
													<Link
														href="/about"
														className="text-white text-base text-center tracking-[0.05rem] hover:text-yellow-default transition-all ease-in-out duration-500"
													>
														About Us
													</Link>
													<Image
														width={550}
														height={550}
														alt="White Arrow Icon"
														onClick={displayAboutUsSublinks}
														src="/img/navigation-menu-dropdown-arrow-white.png"
														className="w-[25px] h-[25px] object-contain object-center"
													/>
												</span>
												<div
													onMouseLeave={resetNavbarStyling}
													className="fixed mt-[1.65rem] w-[20%] bg-white flex flex-col items-center justify-center"
												>
													{aboutUsSublinksOpen ? (
														<>
															<ul
																className={
																	styles.businessServicesSublinks +
																	" p-0 w-full flex flex-col z-[999]"
																}
															>
																{/* Menu Link*/}
																{globalContext?.aboutUsSublinks?.length > 0 ? (
																	globalContext?.aboutUsSublinks?.map(
																		(item: any, keys: any) => (
																			<Fragment key={keys}>
																				<Link href={item?.node?.url}>
																					<li className="w-full group hover:bg-red-default border-b-[2px] border-lightGrey hover:border-red-default">
																						<Link
																							href={item?.node?.url}
																							className="block p-4 text-base font-semibold text-pureBlack group-hover:text-white"
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
															</ul>
														</>
													) : null}
												</div>
											</li>
										) : item?.node?.label === "Our Services" ? (
											<li
												className="relative"
												onClick={displayBusinessServicesSublinks}
											>
												<div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
													<span className="text-white text-base text-center tracking-[0.05rem] transition-all ease-in-out duration-500">
														Our Services
													</span>
													<Image
														width={550}
														height={550}
														alt="White Arrow Icon"
														src="/img/navigation-menu-dropdown-arrow-white.png"
														className=" cursor-pointer w-[25px] h-[25px] object-contain object-center"
													/>
												</div>
												{businessServicesSublinksOpen ? (
													<>
														<div
															onMouseLeave={resetNavbarStyling}
															onMouseEnter={displayNavBackgroundColor}
														>
															<SubMegaMenuLinks />
														</div>
													</>
												) : null}
											</li>
										) : item?.node?.url === "/career" ? (
											<li className="relative">
												<span className="flex flex-row justify-center items-center gap-2 cursor-pointer">
													<Link
														href={item?.node?.url}
														className="text-white text-base text-center tracking-[0.05rem] hover:text-yellow-default transition-all ease-in-out duration-500"
													>
														{item?.node?.label}
													</Link>
													<Image
														width={550}
														height={550}
														alt="White Arrow Icon"
														onClick={displayCareerSublinks}
														src="/img/navigation-menu-dropdown-arrow-white.png"
														className="w-[25px] h-[25px] object-contain object-center"
													/>
												</span>
												<div
													onMouseLeave={resetNavbarStyling}
													className="fixed mt-[1.65rem] w-[20%] bg-white flex flex-col items-center justify-center"
												>
													{careerSublinksOpen ? (
														<>
															<ul
																className={
																	styles.careerServicesSublinks +
																	" p-0 w-full flex flex-col z-[999]"
																}
															>
																<li className="w-full group hover:bg-red-default border-b-[2px] border-lightGrey hover:border-red-default">
																	<Link
																		href="/job-positions"
																		className="block p-4 text-base font-semibold text-pureBlack group-hover:text-white"
																	>
																		Job Positions
																	</Link>
																</li>
															</ul>
														</>
													) : null}
												</div>
											</li>
										) : (
											<li className="hidden xl:block">
												<Link
													href={item?.node?.url}
													className="text-white text-base text-center tracking-[0.05rem] hover:text-yellow-default transition-all ease-in-out duration-500"
												>
													{item?.node?.label}
												</Link>
											</li>
										)}
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.ul>
						<div
							className={
								styles.googleTranslate +
								" relative hidden xl:flex items-center justify-center gap-6 sm:gap-8"
							}
						>
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
										: "p-0 text-white transition duration-200 rounded-sm flex flex-row items-center justify-center gap-3"
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
									revealGoogleTranslateOptions ? "block ml-2" : "hidden"
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
										? "block absolute p-4 pb-0 bg-white w-fit top-[55px] right-[0px]"
										: "hidden"
								}
							/>
						</div>
					</div>
					<motion.div className="block xl:hidden">
						<button
							type="button"
							onClick={toggleMenu}
							aria-label="toggle menu"
							className={menuActive ? styles.navToggleOpen : styles.navToggle}
						>
							<span aria-hidden="true"></span>
						</button>
						{/* Hidden Side Menu */}
						<SideMenu menuActive={menuActive} />
					</motion.div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
