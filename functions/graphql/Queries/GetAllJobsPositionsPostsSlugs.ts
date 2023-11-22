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
export const getAllJobsPositionsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				jobsPositionsContent: jobPositions(
					where: {status: PUBLISH}
					last: 100
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

		return response?.data?.jobsPositionsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions posts"
		);
	}
};

// Latest Three Jobs Positions Content
export const getThreeJobsPositionsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				jobsPositionsContent: jobPositions(where: {status: PUBLISH}, first: 3) {
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

		return response?.data?.jobsPositionsContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the jobs positions posts"
		);
	}
};

/* JOBS POSITIONS TAXONOMIES (CONTENT) */
// Bravo Logistics Taxonomy
export const getAllJobsPositionsBravoLogisticsSlugs = async () => {
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
};
// All Bravo Logistics Taxonomy Jobs Positions Content
export const getAllBravoLogisticsTaxonomyJobs = async () => {
	try {
		const content: DocumentNode = gql`
			{
				bravoLogisticsTaxonomyJobs: bravoLogistics {
					edges {
						node {
							jobPositions(last: 100, where: {status: PUBLISH}) {
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
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		let initialArray: any[] | undefined;
		const finalArray: any = [];

		// Setting the initial Array
		initialArray = response?.data?.bravoLogisticsTaxonomyJobs?.edges;

		// Agricoms Taxonomy Dynamic Links
		initialArray?.forEach((keys: any) => {
			keys?.node?.jobPositions?.edges?.forEach((subKeys: any) => {
				const object = {
					slug: subKeys?.node?.slug,
					title: subKeys?.node?.title,
					excerpt: subKeys?.node?.excerpt,
					featuredImage: subKeys?.node?.featuredImage,
				};

				if (
					object?.slug &&
					object?.excerpt &&
					object?.title &&
					object?.featuredImage
				) {
					finalArray.push(object);
				}
			});
		});

		return finalArray;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all jobs post for Bravo Logistics taxonomy"
		);
	}
};

// Agricoms Taxonomy
export const getAllJobsPositionsAgricomsSlugs = async () => {
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
};
// All Agricoms Taxonomy Jobs Positions Content
export const getAllAgricomsTaxonomyJobs = async () => {
	try {
		const content: DocumentNode = gql`
			{
				agricomsTaxonomyJobs: agricoms {
					edges {
						node {
							jobPositions(last: 100, where: {status: PUBLISH}) {
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
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		let initialArray: any[] | undefined;
		const finalArray: any = [];

		// Setting the initial Array
		initialArray = response?.data?.agricomsTaxonomyJobs?.edges;

		// Agricoms Taxonomy Dynamic Links
		initialArray?.forEach((keys: any) => {
			keys?.node?.jobPositions?.edges?.forEach((subKeys: any) => {
				const object = {
					slug: subKeys?.node?.slug,
					title: subKeys?.node?.title,
					excerpt: subKeys?.node?.excerpt,
					featuredImage: subKeys?.node?.featuredImage,
				};

				if (
					object?.slug &&
					object?.excerpt &&
					object?.title &&
					object?.featuredImage
				) {
					finalArray.push(object);
				}
			});
		});

		return finalArray;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all jobs post for Agricoms taxonomy"
		);
	}
};
