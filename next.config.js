/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"cmsbravogroup.co.uk",
			"bravo-group.local",
			"mydummysite.co.uk",
			"lh3.googleusercontent.com",
		],
	},
};

module.exports = nextConfig;
