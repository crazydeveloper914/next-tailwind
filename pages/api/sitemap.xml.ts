// Imports
import {Readable} from "stream";
import {SitemapStream, streamToPromise} from "sitemap";
import {
	getAllJobsPositionsAgricomsSlugs,
	getAllJobsPositionsBravoLogisticsSlugs,
} from "@/functions/graphql/Queries/GetAllJobsPositionsPostsSlugs";
import {getAllPagesSlugs} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {getAllOperationalInsightsPostsSlugs} from "@/functions/graphql/Queries/GetAllOperationalInsightsPostsSlugs";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
	const [
		pagesSlugs,
		operationalInsightsPostsSlugs,
		bravoLogisticsTaxonomySlugs,
		agricomsTaxonomySlugs,
	] = await Promise.all([
		getAllPagesSlugs(),
		getAllOperationalInsightsPostsSlugs(),
		getAllJobsPositionsBravoLogisticsSlugs(),
		getAllJobsPositionsAgricomsSlugs(),
	]);

	/* Pages, Operational Insights Posts Arrays
	& Bravo Logistics & Agricom Taxonomy Arrays */
	const pagesLinks: any = [];
	const agricomTaxonomyPostsLinks: any = [];
	const operationalInsightsPostsLinks: any = [];
	const bravoLogisticsTaxonomyPostsLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${keys?.slug}`,
			changefreq: "monthly",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Operational Insights Dynamic Links
	operationalInsightsPostsSlugs?.map((keys: any) => {
		const object = {
			url: `/operational-insights/${keys?.slug}`,
			changefreq: "daily",
			lastmod: `${keys?.modified}`,
			priority: 0.8,
		};

		operationalInsightsPostsLinks.push(object);
	});

	// Bravo Logistics Taxonomy Dynamic Links
	bravoLogisticsTaxonomySlugs?.map((keys: any) => {
		keys?.node?.jobPositions?.nodes?.map((subKeys: any) => {
			const subSlugs = subKeys?.slug;
			const object = {
				url: `/job-positions/${subSlugs}`,
				changefreq: "daily",
				lastmod: `${subKeys?.modified}`,
				priority: 0.8,
			};

			bravoLogisticsTaxonomyPostsLinks.push(object);
		});
	});

	// Agricom Taxonomy Dynamic Links
	agricomsTaxonomySlugs?.map((keys: any) => {
		keys?.node?.jobPositions?.nodes?.map((subKeys: any) => {
			const subSlugs = subKeys?.slug;

			const object = {
				url: `/job-positions/${subSlugs}`,
				changefreq: "daily",
				lastmod: `${subKeys?.modified}`,
				priority: 0.8,
			};

			agricomTaxonomyPostsLinks.push(object);
		});
	});

	// Arrays with your all dynamic links
	const allLinks: any = [
		...pagesLinks,
		...agricomTaxonomyPostsLinks,
		...operationalInsightsPostsLinks,
		...bravoLogisticsTaxonomyPostsLinks,
	];

	// Create a stream to write to
	const stream = new SitemapStream({hostname: process.env.SITE_URL});

	req;

	res.writeHead(200, {
		"Content-Type": "application/xml",
	});

	const xmlString = await streamToPromise(
		Readable.from(allLinks).pipe(stream)
	).then((data: any) => data.toString());

	res.end(xmlString);
};
