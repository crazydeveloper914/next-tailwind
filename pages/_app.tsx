// Imports
import "@/styles/globals.scss";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import type {AppProps} from "next/app";
import {client} from "@/config/apollo";
import {useEffect, useState} from "react";
import {ApolloProvider} from "@apollo/client";

// Styling
import "../styles/globals.scss";

// Global Context Provider
import {IGlobalProps} from "@/types/context";

// Queries Functions
import {
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getAboutUsSublinks,
	getBusinessServicesSublinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {
	getAllOperationalInsightsContent,
	getThreeOperationalInsightsContent,
} from "@/functions/graphql/Queries/GetAllOperationalInsightsPostsSlugs";

// Components
import GlobalContextProvider from "@/components/Context/GlobalContextProvider";
import PostHogContextProvider from "@/components/Context/PostHogProviderContext";

export default function App({
	Component,
	pageProps,
	globalProps,
}: AppProps | any) {
	// COOKIES POLICY //
	// PostHog Cookies Policy
	const router: any = useRouter();

	// PAGE LOADING ANIMATION //
	// Page Animation Loader
	function LoadingSquares() {
		const [loading, setLoading]: any = useState(false);

		useEffect(() => {
			const handleStart = (url: any) =>
				url !== router.asPath && setLoading(true);
			const handleComplete = (url: any) =>
				url === router.asPath &&
				setTimeout(() => {
					setLoading(false);
				}, 7000);

			router.events.on("routeChangeStart", handleStart);
			router.events.on("routeChangeComplete", handleComplete);
			router.events.on("routeChangeError", handleComplete);

			return () => {
				router.events.off("routeChangeStart", handleStart);
				router.events.off("routeChangeComplete", handleComplete);
				router.events.off("routeChangeError", handleComplete);
			};
		});

		return (
			loading && (
				<div className="spinner-wrapper">
					{/* LEGO SPINNER */}
					<div className="loader">
						<div className="box box0">
							<div></div>
						</div>
						<div className="box box1">
							<div></div>
						</div>
						<div className="box box2">
							<div></div>
						</div>
						<div className="box box3">
							<div></div>
						</div>
						<div className="box box4">
							<div></div>
						</div>
						<div className="box box5">
							<div></div>
						</div>
						<div className="box box6">
							<div></div>
						</div>
						<div className="box box7">
							<div></div>
						</div>
						<div className="ground">
							<div></div>
						</div>
					</div>
				</div>
			)
		);
	}

	return (
		<ApolloProvider client={client}>
			<GlobalContextProvider globalProps={globalProps}>
				<motion.div
					exit={{
						opacity: 0,
					}}
					initial="initial"
					animate="animate"
				>
					<LoadingSquares />
					{/* Cookie Policy Pop Up */}
					<PostHogContextProvider />
					<Component {...pageProps} />
				</motion.div>
			</GlobalContextProvider>
		</ApolloProvider>
	);
}

App.getInitialProps = async ({Component, ctx}: any) => {
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const [
		navbarMenuLinks,
		aboutUsSublinks,
		footerMenuLinks,
		themesOptionsContent,
		businessServicesSublinks,
		operationalInsights,
		operationalInsightsThreeCards,
	]: any = await Promise.all([
		getNavbarMenuLinks(),
		getAboutUsSublinks(),
		getFooterMenuLinks(),
		getThemesOptionsContent(),
		getBusinessServicesSublinks(),
		getAllOperationalInsightsContent(),
		getThreeOperationalInsightsContent(),
	]);

	const globalProps: IGlobalProps = {
		navbarMenuLinks: navbarMenuLinks,
		aboutUsSublinks: aboutUsSublinks,
		footerMenuLinks: footerMenuLinks,
		operationalInsights: operationalInsights,
		themesOptionsContent: themesOptionsContent,
		businessServicesSublinks: businessServicesSublinks,
		operationalInsightsThreeCards: operationalInsightsThreeCards,
	};

	return {
		pageProps,
		globalProps,
	};
};
