// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {IGoogleReviewsCard} from "@/types/components";
import {stagger, initial} from "../../animations/animations";

// Styling
import styles from "../../styles/components/GoogleReviews.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

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
					" flex flex-col justify-start gap-4 p-8 w-full h-full border-[5px] border-lightGrey min-h-fit lg:min-h-[225px]"
				}
				style={{
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
				}}
			>
				<div className="flex justify-between items-center">
					<div className="flex flex-col gap-4 mx-auto sm:mx-0 sm:flex-row">
						<Image
							width={500}
							height={500}
							alt={`${name} profile image`}
							src={
								profilePhoto
									? `${profilePhoto}`
									: `/img/logos/default-avatar-profile.jpg`
							}
							className="object-cover object-center mx-auto sm:mx-0 w-12 h-12 transition-all duration-200 ease-in-out rounded-full cursor-pointer ring-[3px] ring-red-Two"
						/>
						<div className="flex flex-col gap-2">
							<span className="font-semibold tracking-normal text-center text-black lg:text-left text-base">
								{name}
							</span>
							<span className="flex flex-row items-center justify-start gap-1 text-lg font-semibold tracking-normal text-center text-black">
								{ratingArray?.length > 0 ? (
									ratingArray?.map((item: any, keys: any) => (
										<Fragment key={keys}>
											<>
												<svg
													height="200px"
													width="200px"
													version="1.1"
													id="Capa_1"
													fill="#000000"
													viewBox="0 0 47.94 47.94"
													xmlns="http://www.w3.org/2000/svg"
													className="object-contain object-center w-[15px] h-[15px]"
												>
													<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
													<g
														id="SVGRepo_tracerCarrier"
														strokeLinecap="round"
														strokeLinejoin="round"
													></g>
													<g id="SVGRepo_iconCarrier">
														<path
															fill="#fac546"
															d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
														></path>
													</g>
												</svg>
											</>
										</Fragment>
									))
								) : (
									<></>
								)}
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
				<Paragraph
					content={textarea}
					tailwindStyling="block max-w-lg mt-4 text-black text-base text-center lg:text-left overflow-hidden"
				/>
			</motion.div>
		</>
	);
};

export default GoogleReviewsCard;
