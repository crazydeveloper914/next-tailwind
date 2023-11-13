import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* OPERATIONAL INSIGHTS SLUGS (URLS) */
export const getAllOperationalInsightsPostsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				operationalInsightsSlugs: posts(where: {status: PUBLISH}) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.operationalInsightsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the operational insight slugs"
		);
	}
};

// All Operational Insights Content
export async function getAllOperationalInsightsContent() {
	try {
		const content: DocumentNode = gql`
			{
				operationalInsightsContent: posts(where: {status: PUBLISH}, last: 100) {
					edges {
						node {
							id
							uri
							date
							excerpt
							title(format: RENDERED)
							featuredImage {
								node {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.operationalInsightsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the operational insight posts"
		);
	}
}

// Latest Three Operational Insights Content
export async function getThreeOperationalInsightsContent() {
	try {
		const content: DocumentNode = gql`
			{
				operationalInsightsContent: posts(where: {status: PUBLISH}, first: 3) {
					edges {
						node {
							id
							uri
							date
							excerpt
							title(format: RENDERED)
							featuredImage {
								node {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.operationalInsightsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the operational insight posts"
		);
	}
}
