/* GOOGLE REVIEWS */
/* Fetch all Google Reviews
 form the server api endpoint */
export const getGoogleReviews = async (): Promise<any> => {
	try {
		const response = await fetch("/api/googleReviews");

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await response.json();

		return data;

		// Handle the data as needed
	} catch (error) {
		console.error("Error fetching Google Reviews:", error);
	}
};
