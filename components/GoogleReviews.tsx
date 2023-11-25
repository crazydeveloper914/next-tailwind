// Imports
import {motion} from "framer-motion";
import {IGoogleReviews} from "@/types/components";
import {FC, Fragment, useEffect, useState} from "react";
import {fadeInUp, initial, stagger} from "../animations/animations";
import {getGoogleReviews} from "@/functions/googleReviews/googleReviews";

// Components
import Paragraph from "./Elements/Paragraph";
import GoogleReviewsCard from "./Cards/GoogleReviewsCard";

const GoogleReviews: FC<IGoogleReviews> = ({
	title,
	paragraph,
	highlightText,
}) => {
	const [reviewsArray, setReviewsArray] = useState([]);

	useEffect(() => {
		const fetchReviews = async () => {
			const fetchedReviews = await getGoogleReviews();
			setReviewsArray(fetchedReviews?.reviewsArray);
		};

		fetchReviews();
	}, []);

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
					className="max-w-2xl mx-auto mb-12 text-center lg:max-w-5xl"
				>
					<div className="max-w-2xl mx-auto text-left">
						<motion.h2
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="text-center font-bold leading-normal text-4xl lg:text-5xl p-4 pl-0 text-black"
						>
							{title}
							<span className="p-2 ml-3 bg-red-Two text-white">
								{highlightText}
							</span>
						</motion.h2>
					</div>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl mx-auto text-black text-base sm:text-paragraph"
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid h-fit py-10 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between"
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
