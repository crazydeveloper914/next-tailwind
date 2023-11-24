// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IVideoBlock} from "@/types/components";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

// Styling
import styles from "../styles/components/VideoBlock.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import VideoWrapper from "./Elements/VideoWrapper";
import YoutubeButtonBorderSliced from "./Elements/YoutubeButtonBorderSliced";

const VideoBlock: FC<IVideoBlock> = ({
	title,
	video,
	subtitle,
	paragraph,
	buttonLink,
	highlightText,
	displayYoutubeIcon,
	videoBackgroundImage,
}) => {
	return (
		<>
			<div
				id="VideoBlock"
				className={styles.videoBlock + " py-12 px-4 bg-lightGreyTwo"}
			>
				<div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-x-16">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className={
							title && highlightText && paragraph
								? "max-w-2xl mx-auto text-center lg:max-w-5xl w-full lg:w-[35%]"
								: "hidden"
						}
					>
						<div className="max-w-2xl mx-auto">
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="uppercase text-center lg:text-left text-lg tracking-[0.15rem] text-yellow-Two"
							>
								{subtitle}
							</motion.h3>
							<motion.h2
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="text-center lg:text-left font-bold leading-normal text-4xl lg:text-5xl p-4 pl-0 text-black"
							>
								{title}
								<span className="p-2 ml-3 bg-red-Two text-white">
									{highlightText}
								</span>
							</motion.h2>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="text-center lg:text-left text-black text-base sm:text-paragraph"
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={
								buttonLink?.url
									? "flex items-center justify-center lg:justify-start"
									: "hidden"
							}
						>
							<YoutubeButtonBorderSliced
								fullWidth={true}
								title={buttonLink?.title}
								displayYoutubeIcon={displayYoutubeIcon}
							/>
						</Link>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="h-fit bg-center bg-no-repeat bg-cover w-full lg:w-[65%]"
						style={{
							backgroundImage: `url("${
								video ? "none" : videoBackgroundImage
							}")`,
						}}
					>
						<VideoWrapper>{video}</VideoWrapper>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default VideoBlock;
