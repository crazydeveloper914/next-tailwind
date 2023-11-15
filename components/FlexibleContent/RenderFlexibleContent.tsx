"use Client";

// Imports
import {FC} from "react";
import {usePageContext} from "@/context/pages";

// Components
import CTA from "../CTA";
import FAQ from "../FAQ";
import Hero from "../Hero";
import HeroTwo from "../HeroTwo";
import OurPartners from "../OurPartners";
import OurServices from "../OurServices";
import Maintenance from "../Maintenance";
import ErrorPage from "../Global/ErrorPage";
import GoogleReviews from "../GoogleReviews";
import TitleParagraph from "../TitleParagraph";
import FeaturedProjects from "../FeaturedProjects";
import JumboContentImage from "../JumboContentImage";
import JumboContentSection from "../JumboContentSection";
import OperationalInsights from "../OperationalInsights";
import AchievementsStatsCTA from "../AchievementsStatsCTA";
import RequestQuoteFormBlocks from "../RequestQuoteFormBlocks";
import TwoColumnButtonContent from "../TwoColumnButtonContent";
import TitleContentValuesBlocks from "../TitleContentValuesBlocks";
import OperationalInsightsThreeCards from "../OperationalInsightsThreeCards";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent = content?.postTypeFlexibleContent;

	return (
		<>
			{content?.content?.length > 0 ? (
				content?.content?.map((item: any, keys: any) => (
					<section key={keys}>
						{item?.fieldGroupName === `${FlexibleContent}_Hero` ? (
							<>
								<Hero
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									displayVideo={item?.displayVideo}
									buttonLinkTwo={item?.buttonLinkTwo}
									servicesLinks={item?.servicesLinks}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_HeroTwo` ? (
							<>
								<HeroTwo
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TwoColumnButtonContent` ? (
							<>
								<TwoColumnButtonContent
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundColor={item?.backgroundColor}
									columnTwoContent={item?.columnTwoContent}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurServices` ? (
							<>
								<OurServices
									title={item?.title}
									paragraph={item?.paragraph}
									servicesGrid={item?.servicesGrid}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_JumboContentSection` ? (
							<>
								<JumboContentSection
									jumboContentSection={item?.contentSection}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_JumboContentImage` ? (
							<>
								<JumboContentImage
									title={item?.title}
									image={item?.image}
									quality={item?.quality}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									contentBox={item?.contentBox}
									reliability={item?.reliability}
									bottomContent={item?.bottomContent}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_AchievementsStatsCta` ? (
							<>
								<AchievementsStatsCTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									achievements={item?.achievements}
									backgroundImage={item?.backgroundImage?.sourceUrl}
									displayAchievementsContent={item?.displayAchievementsContent}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_TitleParagraph` ? (
							<>
								<TitleParagraph
									title={item?.title}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_OurPartners` ? (
							<>
								<OurPartners
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									imageGrid={item?.imageGrid}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_GoogleReviews` ? (
							<>
								<GoogleReviews title={item?.title} />
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Faq` ? (
							<>
								<FAQ
									cta={item?.cta}
									title={item?.title}
									subtitle={item?.subtitle}
									paragraph={item?.paragraph}
									faqContent={item?.faqContent}
									displayCtaBlock={item?.displayCtaBlock}
									downloadLinksTitle={item?.downloadLinksTitle}
									downloadButtonLinks={item?.downloadButtonLinks}
									displayDownloadButtonLinks={item?.displayDownloadButtonLinks}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_FeaturedProjects` ? (
							<>
								<FeaturedProjects
									title={item?.title}
									subtitle={item?.subtitle}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_TitleContentValuesBlocks` ? (
							<>
								<TitleContentValuesBlocks
									valuesBlockOne={item?.valuesBlockOne}
									valuesBlockTwo={item?.valuesBlockTwo}
									valuesBlockThree={item?.valuesBlockThree}
									valuesBlockFour={item?.valuesBlockFour}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_RequestQuoteFormBlocks` ? (
							<>
								<RequestQuoteFormBlocks
									valuesBlockOne={item?.valuesBlockOne}
									valuesBlockTwo={item?.valuesBlockTwo}
									valuesBlockThree={item?.valuesBlockThree}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_OperationalInsightsGrid` ? (
							<>
								<OperationalInsights
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_OperationalInsightsThreeCards` ? (
							<>
								<OperationalInsightsThreeCards
									title={item?.title}
									italic={item?.italic}
									paragraph={item?.paragraph}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_Cta` ? (
							<>
								<CTA
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : item?.fieldGroupName === `${FlexibleContent}_ContactForm` ? (
							<></>
						) : item?.fieldGroupName === `${FlexibleContent}_Maintenance` ? (
							<>
								<Maintenance
									title={item?.title}
									paragraph={item?.paragraph}
									backgroundImage={item?.backgroundImage}
									backgroundVideoUrl={item?.backgroundVideoUrl}
									backgroundImageOrVideo={item?.backgroundImageOrVideo}
								/>
							</>
						) : item?.fieldGroupName ===
						  `${FlexibleContent}_ErrorPageContent` ? (
							<>
								<ErrorPage
									title={item?.title}
									paragraph={item?.paragraph}
									buttonLink={item?.buttonLink}
									backgroundImage={item?.backgroundImage?.sourceUrl}
								/>
							</>
						) : (
							<></>
						)}
					</section>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default RenderFlexibleContent;
