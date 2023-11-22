import {gql} from "@apollo/client";
import {client} from "@/config/apollo";

// Navbar Menu Links
export const getNavbarMenuLinks = async () => {
	try {
		const content: any = gql`
			{
				navbarMenuLinks: menuItems(where: {location: PRIMARY}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.navbarMenuLinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch main menu links content"
		);
	}
};

// Navbar About Us Sublinks
export const getAboutUsSublinks = async () => {
	try {
		const content: any = gql`
			{
				aboutUsSublinks: menuItems(where: {location: ABOUT_US}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.aboutUsSublinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch main menu links content"
		);
	}
};

// Navbar Our Business Services Sublinks
export const getBusinessServicesSublinks = async () => {
	try {
		const content: any = gql`
			{
				businessServicesSublinks: menuItems(
					where: {location: OUR_BUSINESS_SERVICES}
					first: 10
				) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.businessServicesSublinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch business services sublinks content"
		);
	}
};

// Footer Menu Links
export const getFooterMenuLinks = async () => {
	try {
		const content: any = gql`
			{
				footerMenuLinks: menuItems(where: {location: FOOTER}) {
					edges {
						node {
							id
							url
							label
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.footerMenuLinks?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch footer menu links content"
		);
	}
};
