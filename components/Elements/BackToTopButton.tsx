// Imports
import {FC} from "react";
import Link from "next/link";

// Styling
import styles from "../../styles/components/Elements/BackHoverButton.module.scss";

// Components
import {IBackHoverButton} from "@/types/components";

const BackToTopButton: FC<IBackHoverButton> = ({link}) => {
	return (
		<>
			<div className="relative w-fit h-fit xl:block z-[998]">
				<div className="fixed right-6 z-0 bottom-[2.5rem] flex justify-center">
					<Link href={`${link}`} className={styles.backToTopButton}>
						<span className={styles.span}>
							<svg
								fill="none"
								width="800px"
								height="800px"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className="w-[25px] h-[25px] object-center object-contain rotate-[270deg]"
							>
								<path
									d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
									fill="#ffffff"
								/>
							</svg>
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default BackToTopButton;
