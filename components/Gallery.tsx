// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IGallery} from "@/types/components";
import {initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const Gallery: FC<IGallery> = ({title, highlightText, paragraph, gallery}) => {
	return (
		<>
			<div className="py-16 bg-white container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className={
						title && highlightText
							? "max-w-2xl mx-auto mb-24 text-center flex flex-col items-center lg:max-w-5xl"
							: "hidden"
					}
				>
					<motion.h2
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="max-w-2xl mx-auto text-center font-bold leading-normal text-4xl lg:text-5xl p-4 pl-0 text-black"
					>
						{title}
						<span className="p-2 ml-3 bg-red-default text-white">
							{highlightText}
						</span>
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="max-w-3xl mx-auto text-black text-base sm:text-paragraph"
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid gap-4 grid-cols-2 lg:grid-cols-4"
				>
					{gallery?.length > 0 ? (
						gallery?.map((item: any, keys: any) => (
							<Fragment key={keys}>
								<>
									<Image
										alt={item?.altText}
										src={item?.sourceUrl}
										width={item?.mediaDetails?.width}
										height={item?.mediaDetails?.height}
										className={
											item?.sourceUrl
												? `block object-cover object-center w-full h-[175px] sm:h-[250px]`
												: `hidden`
										}
									/>
								</>
							</Fragment>
						))
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default Gallery;
