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
	const [menuActive, setMenuActive] = useState(true);
	const [aboutUsSublinksOpen, setAboutUsSublinksOpen]: any = useState(false);
	const [businessServicesSublinksOpen, setBusinessServicesSublinksOpen]: any =
		useState(false);

	/* Hides or Displays the Full Nav Menu */

	function toggleMenu() {
		setMenuActive(!menuActive);
	}

	// Hides or Display about us sublinks
	function displayAboutUsSublinks() {
		setBusinessServicesSublinksOpen(false);
		setAboutUsSublinksOpen(!aboutUsSublinksOpen);
	}

	// Hides or Display about us sublinks
	function displayBusinessServicesSublinks() {
		setAboutUsSublinksOpen(false);
		setBusinessServicesSublinksOpen(!businessServicesSublinksOpen);
	}

	return (
		<>
			<nav
				className={
					styles.navbar +
					` z-[999] w-full fixed transition-all ease-in-out hover:bg-pureBlack duration-500 ${
						scrollPosition > 50 ? "bg-pureBlack" : "bg-transparent"
					}`
				}
			>
				<div className="container mx-auto flex flex-row items-center justify-between py-5 xl:py-6 px-4">
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
								className="object-contain object-center w-full h-[25px] lg:h-[30px]"
							/>
						</Link>
					</motion.div>
					<motion.ul
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="hidden xl:flex lg:items-center lg:gap-x-6"
					>
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
							{aboutUsSublinksOpen ? (
								<>
									<motion.ul
										initial={initialTwo}
										whileInView={stagger}
										viewport={{once: true}}
										className={
											styles.aboutUsSublinks +
											"flex flex-col justify-center items-center absolute mt-4 ml-[-25px] z-[999]"
										}
									>
										{/* Menu Link*/}
										{globalContext?.aboutUsSublinks?.length > 0 ? (
											globalContext?.aboutUsSublinks?.map(
												(item: any, keys: any) => (
													<Fragment key={keys}>
														<Link href={item?.node?.url}>
															<li className="text-base font-semibold px-4 py-2 bg-white hover:bg-red-dark text-black hover:text-white transition-all ease-in-out duration-500 border-b-[1px] border-b-solid border-grey lg:min-w-[13rem] cursor-pointer">
																{item?.node?.label}
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
						<li className="relative">
							<div className="flex flex-row justify-center items-center gap-2 cursor-default">
								<span className="text-white text-base text-center tracking-[0.05rem] transition-all ease-in-out duration-500">
									Our Services
								</span>
								<Image
									width={550}
									height={550}
									alt="White Arrow Icon"
									onClick={displayBusinessServicesSublinks}
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
											"flex flex-col justify-center items-center absolute mt-4 ml-[-25px] z-[999]"
										}
									>
										{/* Menu Link*/}
										{globalContext?.businessServicesSublinks?.length > 0 ? (
											globalContext?.businessServicesSublinks?.map(
												(item: any, keys: any) => (
													<Fragment key={keys}>
														<Link href={item?.node?.url}>
															<li className="text-base font-semibold px-4 py-2 bg-white hover:bg-red-dark text-black hover:text-white transition-all ease-in-out duration-500 border-b-[1px] border-b-solid border-grey lg:min-w-[13rem] cursor-pointer">
																{item?.node?.label}
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
						{globalContext?.navbarMenuLinks?.length > 0 ? (
							globalContext?.navbarMenuLinks?.map((item: any, keys: any) => (
								<li key={keys} className="hidden xl:block">
									<Link
										href={item?.node?.url}
										className="text-white text-base text-center tracking-[0.05rem] hover:text-yellow-default transition-all ease-in-out duration-500"
									>
										{item?.node?.label}
									</Link>
								</li>
							))
						) : (
							<></>
						)}
					</motion.ul>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="block xl:hidden"
					>
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
