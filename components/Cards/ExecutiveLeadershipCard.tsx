// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IExecutiveLeadershipCard} from "@/types/components";
import {fadeIn, stagger, initial, initialTwo} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

const ExecutiveLeadershipCard: FC<IExecutiveLeadershipCard> = ({
	slug,
	title,
	paragraph,
	featuredImage,
}) => {
	return (
		<>
			<div
				className="w-full h-full p-0 border-l-[5px] border-b-[5px] border-lightGrey"
				style={{
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
				}}
			>
				<div
					className="relative px-0 h-[400px] border-r-[5px] lg:border-r-[10px] border-t-[5px] border-b-0 border-lightGrey"
					style={{
						clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
					}}
				>
					<Link href={slug ? `/executive-leadership/${slug}` : `/`}>
						<Image
							alt={featuredImage?.node?.altText}
							src={featuredImage?.node?.sourceUrl}
							width={featuredImage?.node?.mediaDetails?.width}
							height={featuredImage?.node?.mediaDetails?.height}
							className="object-cover object-center w-full h-full"
						/>
					</Link>
				</div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="relative flex flex-row items-center justify-between px-8 pt-2 pb-4"
				>
					<div>
						<Link href={slug ? `/executive-leadership/${slug}` : `/`}>
							<motion.h2
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-lg font-semibold text-pureBlack transition-all ease-in-out duration-200 hover:text-red-default"
							>
								{title}
							</motion.h2>
						</Link>
						<Paragraph
							content={paragraph}
							tailwindStyling="block px-0 text-base sm:text-paragraph text-darkGrey"
						/>
					</div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="static right-0 bottom-0 flex justify-center"
					>
						<Link
							href={slug ? `/executive-leadership/${slug}` : `/`}
							className="py-2 px-3"
						>
							<span>
								<svg
									height="35"
									width="30.237"
									viewBox="0 0 30.237 35"
									xmlns="http://www.w3.org/2000/svg"
									className="w-[35px] h-[35px] object-center object-contain rotate-[-45deg] transition-all duration-500 ease-in-out hover:opacity-50"
								>
									<g transform="translate(-4906.763 143)">
										<path
											d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
											transform="translate(4870 -143)"
											fill="#ff0008"
										></path>
										<g transform="translate(4890.311 -1111.861)">
											<path
												d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
												transform="translate(0 0)"
												fill="#a70107"
											></path>
										</g>
									</g>
								</svg>
							</span>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default ExecutiveLeadershipCard;
