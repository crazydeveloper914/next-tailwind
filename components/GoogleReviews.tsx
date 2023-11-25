// Imports
import Image from "next/image";
import {IGoogleReviews} from "@/types/components";
import useWindowSize from "@/Hooks/useWindowSize";
import {LazyMotion, domMax, motion} from "framer-motion";
import {FC, Fragment, useEffect, useRef, useState} from "react";
import {fadeInUp, initial, stagger} from "../animations/animations";
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

	return (
		<>
			<motion.div
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className="flex flex-col py-10 items-center bg-white container px-4 mx-auto"
			>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className={
						title
							? "max-w-2xl mx-auto mb-24 text-center flex flex-col items-center lg:max-w-5xl"
							: "hidden"
					}
				>
					<motion.h2
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="my-2 max-w-2xl mx-auto mb-6 text-center font-semibold leading-tight text-4xl lg:text-5xl"
					>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							{title}
						</motion.span>
					</motion.h2>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between"
				>
					{reviewsArray?.length > 0 ? (
						reviewsArray?.map((item: any, keys: any) => (
							<Fragment key={keys}>
								<>
									<GoogleReviewsCard
										name={item?.author_name}
										date={item?.time}
										rating={item?.rating}
										textarea={item?.text}
										profilePhoto={item?.profile_photo_url}
									/>
								</>
							</Fragment>
						))
					) : (
						<></>
					)}
				</motion.div>
			</motion.div>
		</>
	);
};

export default GoogleReviews;
