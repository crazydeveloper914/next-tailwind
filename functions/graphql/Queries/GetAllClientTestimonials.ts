import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* CLIENTS TESTIMONIALS */
// Client Testimonials Content
export const getAllClientTestimonialsContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				clientTestimonials(where: {status: PUBLISH}, last: 10) {
					edges {
						node {
							testimonials {
								name
								positionCertification
								textarea
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.clientTestimonials?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch client Testimonials content"
		);
	}
};
