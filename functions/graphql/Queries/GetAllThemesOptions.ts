import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* THEMES OPTIONS CONTENT
 The ID number refers to the
"Global Content" page ID*/
export async function getThemesOptionsContent() {
	try {
		const content: DocumentNode = gql`
			{
				themeOptions(where: {id: 103, status: PUBLISH}) {
					edges {
						node {
							themeOptions {
								email
								address
								emailTwo
								phoneNumber
								phoneNumberTwo
								copyrightText
								facebookLink
								twitterLink
								telegramLink
								displayNoticeBanner
								noticeBannerTextarea
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.themeOptions?.edges[0]?.node?.themeOptions;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch themes options content"
		);
	}
}
