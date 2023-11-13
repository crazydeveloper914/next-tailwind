// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IOurLocation} from "@/types/components/index";
import {fadeIn, fadeInUp, initial, initialTwo} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const OurLocation: FC<IOurLocation> = ({title, paragraph}) => {
	return (
		<>
			<div className="bg-white">
				<div className="container p-4 mx-auto">
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex flex-col py-6"
					>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-4 text-center uppercase font-extrabold leading-[2.5rem] lg:leading-[3rem] text-4xl lg:text-5xl text-black"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto
						mb-10 text-black leading-[1.75rem] text-base sm:text-paragraph text-center"
						/>
					</motion.div>
				</div>
				<div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9421.542212826269!2d39.28941166589441!3d-6.85814344348959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4a83c48bdd3d%3A0xfd6e4e5d6edb23d1!2sBravo%20Group%20Limited!5e0!3m2!1sen!2suk!4v1699888888327!5m2!1sen!2suk"
						width="100%"
						height="650"
						loading="lazy"
						style={{border: "0"}}
						allowFullScreen={true}
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</>
	);
};

export default OurLocation;
