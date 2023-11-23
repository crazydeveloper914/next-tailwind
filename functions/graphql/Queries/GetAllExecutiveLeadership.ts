import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* EXECUTIVE LEADERSHIP SLUGS (URLS) */
export const getAllExecutiveLeadershipSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				executiveLeadershipSlugs: executiveLeaderships(
					where: {status: PUBLISH}
					last: 100
				) {
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

		return response?.data?.executiveLeadershipSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the executive leadership slugs"
		);
	}
};

// All Executive Leadership Content
export const getAllExecutiveLeadershipContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				executiveLeadershipContent: executiveLeaderships(
					where: {status: PUBLISH, orderby: {field: DATE, order: ASC}}
					first: 100
				) {
					edges {
						node {
							slug
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

		return response?.data?.executiveLeadershipContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the executive leadership members content"
		);
	}
};
