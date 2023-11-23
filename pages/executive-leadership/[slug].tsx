// Imports
import {IPageContext} from "@/types/context";
import type {NextPage, GetStaticProps} from "next";
import {flexibleContentType, postType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import BackToTopButton from "@/components/Elements/BackToTopButton";
import PageContextProvider from "@/components/Context/PageContextProvider";
import BackToVacanciesButton from "@/components/Elements/BackToVacanciesButton";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";
import {getAllExecutiveLeadershipSlugs} from "@/functions/graphql/Queries/GetAllExecutiveLeadership";

const dynamicSinglePosts: NextPage<IPageContext> = ({
	seo,
	content,
	postTypeFlexibleContent,
}) => {
	return (
		<PageContextProvider
			seo={seo}
			content={content}
			postTypeFlexibleContent={postTypeFlexibleContent}
		>
			<Layout>
				<BackToTopButton link={`#`} />
				<BackToVacanciesButton
					fullWidth={false}
					link={`/executive-leadership`}
					title="Executive leadership"
				/>
				<RenderFlexibleContent />
			</Layout>
		</PageContextProvider>
	);
};

export async function getStaticPaths() {
	const data = await getAllExecutiveLeadershipSlugs();
	const paths = data.map((item: any) => ({
		params: {
			slug: item?.slug as String,
		},
	}));
	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(
		params?.slug,
		postType?.executiveLeaderships
	);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug,
		postType?.executiveLeaderships,
		flexibleContentType?.pages
	);

	return {
		props: {
			seo: seoContent,
			content: flexibleContentComponents?.content,
			postTypeFlexibleContent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default dynamicSinglePosts;
