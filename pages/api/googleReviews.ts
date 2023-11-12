/* GOOGLE REVIEWS */
/* Fetch all Google Reviews from google */
import {IReviewsArray, IReviewsRating} from "@/types/api/api";
import {NextApiResponse, NextApiRequest} from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		const apiKey = `${process.env.GOOGLE_REVIEWS_API_KEY}`; // Replace with your actual Google Cloud API Key
		const placeId = `${process.env.GOOGLE_REVIEWS_PLACE_ID}`; // Replace with your actual Place ID

		try {
			const response = await fetch(
				`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
			);

			if (!response?.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();

			if (data?.result?.reviews) {
				const reviewsRating: IReviewsRating = data?.result?.rating;
				const reviewsArray: IReviewsArray = data?.result?.reviews;
				res.status(200).json({reviewsRating, reviewsArray});
			} else {
				throw new Error("No reviews found");
			}
		} catch (error) {
			console.error("Error fetching Google Reviews:", error);
			res.status(500).json({error: "Error fetching Google Reviews"});
		}
	} else {
		res.status(405).end();
	}
}
