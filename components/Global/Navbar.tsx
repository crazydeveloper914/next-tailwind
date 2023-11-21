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
	const [navBackgroundSublinksOpen, setNavBackgroundSublinksOpen]: any =
		useState(false);
	const [aboutUsSublinksOpen, setAboutUsSublinksOpen]: any = useState(false);
	const [careerSublinksOpen, setCareerSublinksOpen]: any = useState(false);
	const [businessServicesSublinksOpen, setBusinessServicesSublinksOpen]: any =
		useState(false);

	/* Hides or Displays the Full Nav Menu */

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	/* Display's Navbar background Color
	when Mega sublinks are hovered*/
	function displayNavBackgroundColor() {
		setNavBackgroundSublinksOpen(!navBackgroundSublinksOpen);
	}

	// Hides or Display about us sublinks
	function displayCareerSublinks() {
		setAboutUsSublinksOpen(false);
		setBusinessServicesSublinksOpen(false);
		setCareerSublinksOpen(!careerSublinksOpen);
	}

	// Hides or Display about us sublinks
	function displayAboutUsSublinks() {
		setCareerSublinksOpen(false);
		setBusinessServicesSublinksOpen(false);
		setAboutUsSublinksOpen(!aboutUsSublinksOpen);
	}

	// Hides or Display about us sublinks
	function displayBusinessServicesSublinks() {
		setCareerSublinksOpen(false);
		setAboutUsSublinksOpen(false);
		setBusinessServicesSublinksOpen(!businessServicesSublinksOpen);
	}

	function resetNavbarStyling() {
		setCareerSublinksOpen(false);
		setAboutUsSublinksOpen(false);
		setNavBackgroundSublinksOpen(false);
		setBusinessServicesSublinksOpen(false);
	}

	return (
		<>
			<nav
				className={
					styles.navbar +
					` z-[999] w-full fixed transition-all ease-in-out hover:bg-pureBlack duration-500 ${
						scrollPosition > 50 || navBackgroundSublinksOpen
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
																styles.businessServicesSublinks +
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
