// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {IGoogleReviewsCard} from "@/types/components";
import {stagger, initial} from "../../animations/animations";

// Styling
import styles from "../../styles/components/GoogleReviews.module.scss";

const GoogleReviewsCard: FC<IGoogleReviewsCard> = ({
	name,
	date,
	rating,
	textarea,
	profilePhoto,
}) => {
	const ratingArray = Array.from({length: rating}, (_, index) => index);
	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className={
					styles.googleReviews +
					" flex flex-col justify-start gap-4 p-8 border-2 border-solid rounded-lg shadow-2xl border-yellow-default min-h-[400px] sm:min-h-[300px]"
				}
			>
				<div className="flex flex-row justify-between item-center">
					<div className="flex flex-col gap-4 mx-auto sm:mx-0 sm:flex-row">
						<Image
							width={500}
							height={500}
							alt={`${name} profile image`}
							src={
								profilePhoto
									? `${profilePhoto}`
									: `/img/Logos/default-avatar-profile.jpg`
							}
							className="object-cover object-center mx-auto sm:mx-0 w-16 h-16 transition-all duration-200 ease-in-out rounded-full cursor-pointer ring-[3px] ring-yellow-default"
						/>
						<div className="flex flex-col gap-1">
							<span className="font-semibold tracking-normal text-center text-black lg:text-left text-medium">
								{name}
							</span>
							<span className="text-base font-semibold tracking-normal text-center text-black lg:text-left">
								{dateFormat(date, "mmmm d, yyyy")}
							</span>
						</div>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						width="96px"
						height="96px"
						className="hidden w-8 h-8 fill-current lg:block"
					>
						<path
							fill="#FFC107"
							d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
						/>
						<path
							fill="#FF3D00"
							d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
						/>
						<path
							fill="#4CAF50"
							d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
						/>
						<path
							fill="#1976D2"
							d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
						/>
					</svg>
				</div>
				<div className="flex flex-col gap-4">
					<span className="flex flex-row items-center justify-center gap-1 text-lg font-semibold tracking-normal text-center text-black">
						{ratingArray?.length > 0 ? (
							ratingArray?.map((index: any) => (
								<>
									<Fragment key={index}>
										<svg
											width="800px"
											height="800px"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="object-contain object-center w-[30px] h-[30px]"
										>
											<path
												d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838"
												stroke="#f6ad37"
												stroke-width="1.5"
												stroke-linecap="round"
											/>
										</svg>
									</Fragment>
								</>
							))
						) : (
							<></>
						)}
					</span>
					<span className="max-w-lg text-base tracking-normal text-center text-black lg:text-left sm:text-paragraph">
						{textarea}
					</span>
				</div>
			</motion.div>
		</>
	);
};

export default GoogleReviewsCard;
