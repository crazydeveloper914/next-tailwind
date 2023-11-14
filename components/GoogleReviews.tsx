// Imports
import Image from "next/image";
import {IGoogleReviews} from "@/types/components";
import useWindowSize from "@/Hooks/useWindowSize";
import {LazyMotion, domMax, motion} from "framer-motion";
import {fadeInUp, initial} from "../animations/animations";
import {FC, Fragment, useEffect, useRef, useState} from "react";
import {getGoogleReviews} from "@/functions/googleReviews/googleReviews";

// Components
import GoogleReviewsCard from "./Cards/GoogleReviewsCard";

const GoogleReviews: FC<IGoogleReviews> = ({title}) => {
	const {width} = useWindowSize();
	const [activeSlide, setActiveSlide] = useState(0);
	const [reviewsArray, setReviewsArray] = useState([]);
	const [largeTranslate, setLargeTranslate] = useState(0);
	const largeSlideRef = useRef<HTMLDivElement | null>(null);
	const [activeReview, setActiveReview] = useState<any | null>(null);

	useEffect(() => {
		const fetchReviews = async () => {
			const fetchedReviews = await getGoogleReviews();
			setReviewsArray(fetchedReviews?.reviewsArray);
		};

		fetchReviews();
	}, []);

	const arrowHandler = (direction: "prev" | "next") => {
		if (direction === "prev") {
			if (activeSlide === 0) {
				return setActiveSlide(reviewsArray?.length - 1);
			}

			return setActiveSlide(activeSlide - 1);
		}

		if (direction === "next") {
			if (activeSlide === reviewsArray?.length - 1) {
				return setActiveSlide(0);
			}

			return setActiveSlide(activeSlide + 1);
		}
	};

	useEffect(() => {
		if (largeSlideRef.current) {
			setLargeTranslate(-(activeSlide * largeSlideRef.current.offsetWidth));
		}
	}, [activeSlide]);

	useEffect(() => {
		setActiveSlide(0);
	}, [width]);

	console.log(reviewsArray);

	return (
		<>
			<div className="bg-white">
				<div className="container px-4 mx-auto">
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex flex-col py-16"
					>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="mb-4 text-center uppercase font-extrabold leading-[2.5rem] lg:leading-[3rem] text-4xl lg:text-5xl text-black"
						>
							{title}
						</motion.h2>
						<LazyMotion features={domMax}>
							<div className="px-4 overflow-hidden lg:px-6">
								<div className="py-0 lg:py-10 pl-3/20">
									<div className="relative">
										{/* Prev */}
										<motion.button
											initial={{opacity: 0}}
											animate={{opacity: 1}}
											exit={{opacity: 0}}
											className={
												activeReview
													? "hidden"
													: "absolute bottom-[-2.5%] lg:top-0 right-[15%] lg:right-[5%] z-10 w-8 lg:w-12 transform -translate-y-1/2"
											}
											onClick={() => arrowHandler("prev")}
										>
											<Image
												width={500}
												height={500}
												src="/svg/circle-arrow-left.svg"
												alt="White arrow in a gold circle"
												className="transition-opacity duration-200 ease-in-out hover:opacity-70"
											/>
										</motion.button>
										<motion.div
											initial={{translateX: "0px"}}
											animate={{translateX: `${largeTranslate}px`}}
											transition={{duration: 0.5, type: "spring"}}
											className="flex flex-row items-center py-16"
										>
											{reviewsArray?.length > 0 ? (
												reviewsArray?.map((item: any, index: any) => (
													<>
														<Fragment key={index}>
															<div
																ref={largeSlideRef}
																className={`flex-shrink-0 w-4/5 lg:w-2/6 pr-3 sm:pr-4 transition-opacity duration-200 ease-in-out opacity-100`}
															>
																<GoogleReviewsCard
																	name={item?.author_name}
																	date={item?.time}
																	rating={item?.rating}
																	textarea={item?.text}
																	profilePhoto={item?.profile_photo_url}
																/>
															</div>
														</Fragment>
													</>
												))
											) : (
												<></>
											)}
										</motion.div>
										{/* Next */}
										<motion.button
											initial={{opacity: 0}}
											animate={{opacity: 1}}
											exit={{opacity: 0}}
											className={
												activeReview
													? "hidden"
													: "absolute z-10 w-8 transform -translate-y-1/2  bottom-[-2.5%] lg:top-0 right-[2.5%] lg:right-0 lg:w-12"
											}
											onClick={() => arrowHandler("next")}
										>
											<Image
												width={500}
												height={500}
												src="/svg/circle-arrow-right.svg"
												alt="White arrow in a black circle"
												className="transition-opacity duration-200 ease-in-out hover:opacity-70"
											/>
										</motion.button>
									</div>
								</div>
							</div>
						</LazyMotion>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default GoogleReviews;
