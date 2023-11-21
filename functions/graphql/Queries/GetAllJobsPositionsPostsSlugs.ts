import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

type SlugResponse = {
	slug: string;
	modified: string;
};

interface ISlug extends Array<SlugResponse> {}

/* JOBS POSITIONS SLUGS (URLS) */
export const getAllJobsPositionsPostsSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				jobsPositionsSlugs: jobPositions(where: {status: PUBLISH}, last: 100) {
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

		return response?.data?.jobsPositionsSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch the jobs positions slugs"
		);
	}
};

// All Jobs Positions Content
export async function getAllJobsPositionsContent() {
	try {
		const content: DocumentNode = gql`
			{
				jobsPositionsContent: jobPositions(
					where: {status: PUBLISH}
					last: 100
				) {
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

		return response?.data?.jobsPositionsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions posts"
		);
	}
}

// Latest Three Jobs Positions Content
export async function getThreeJobsPositionsContent() {
	try {
		const content: DocumentNode = gql`
			{
				operationalInsightsContent: jobPositions(
					where: {status: PUBLISH}
					first: 3
				) {
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

		return response?.data?.jobsPositionsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions posts"
		);
	}
}

/* JOBS POSITIONS TAXONOMIES (CONTENT) */
// Bravo Logistics Taxonomy
export async function getAllJobsPositionsBravoLogisticsSlugs() {
	try {
		const content: DocumentNode = gql`
			{
				bravoLogisticsTaxonomySlugs: bravoLogistics(last: 100) {
					edges {
						node {
							jobPositions(where: {status: PUBLISH}) {
								nodes {
									slug
									modified
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

		return response?.data?.bravoLogisticsTaxonomySlugs?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions slugs for bravo logistics taxonomy"
		);
	}
}
// All Bravo Logistics Taxonomy Jobs Positions Content
export async function getAllJobsPositionsBravoLogisticsContent() {
	try {
		const content: DocumentNode = gql`
			{
				bravoLogisticsTaxonomyContent: jobPositions(
					where: {status: PUBLISH}
					last: 100
				) {
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

		return response?.data?.bravoLogisticsTaxonomyContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions slugs content for bravo logistics taxonomy"
		);
	}
}

// Agricoms Taxonomy
export async function getAllJobsPositionsAgricomsSlugs() {
	try {
		const content: DocumentNode = gql`
			{
				agricomsTaxonomySlugs: agricoms(last: 100) {
					edges {
						node {
							jobPositions(where: {status: PUBLISH}) {
								nodes {
									slug
									modified
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

		return response?.data?.agricomsTaxonomySlugs?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions slugs for Agricoms taxonomy"
		);
	}
}
// All Agricoms Taxonomy Jobs Positions Content
export async function getAllJobsPositionsAgricomsContent() {
	try {
		const content: DocumentNode = gql`
			{
				agricomsTaxonomyContent: jobPositions(
					where: {status: PUBLISH}
					last: 100
				) {
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

		return response?.data?.agricomsTaxonomyContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions slugs content for Agricoms taxonomy"
		);
	}
}
