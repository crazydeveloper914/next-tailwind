export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};

export type IOperationalInsights = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
			title: string;
			excerpt: string;
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];

export type IContent = [
	{
		content: any;
	}
];

export type IPostTypes = {
	pages: string;
	posts: string;
	previewPage: string;
	previewPost: string;
};

export type INavbarMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];

export type IAboutUsSublinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];

export type IFooterMenuLinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];

export type IBusinessServicesSublinks = [
	{
		node: {
			id: string;
			url: string;
			label: string;
		};
	}
];

export type IThemesOptionsContent = {
	email: string;
	address: string;
	emailTwo: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	copyrightText: string;
	facebookLink: string;
	twitterLink: string;
	telegramLink: string;
	displayNoticeBanner: boolean;
	noticeBannerTextarea: string;
	megaMenuContent: {
		title: string;
		paragraph: string;
		backgroundImage: {
			sourceUrl: string;
		};
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
	};
};

/* CONTEXT PROVIDERS  */
export type IFlexibleContentType = {
	pages: string;
	previewPage: string;
	previewPost: string;
};

export type IGlobalProps = {
	navbarMenuLinks: INavbarMenuLinks;
	aboutUsSublinks: IAboutUsSublinks;
	footerMenuLinks: IFooterMenuLinks;
	operationalInsights: IOperationalInsights;
	themesOptionsContent: IThemesOptionsContent;
	businessServicesSublinks: IBusinessServicesSublinks;
	operationalInsightsThreeCards: IOperationalInsights;
};

export type IGlobalContext = {
	navbarMenuLinks: INavbarMenuLinks;
	aboutUsSublinks: IAboutUsSublinks;
	footerMenuLinks: IFooterMenuLinks;
	operationalInsights: IOperationalInsights;
	themesOptionsContent: IThemesOptionsContent;
	businessServicesSublinks: IBusinessServicesSublinks;
	operationalInsightsThreeCards: IOperationalInsights;
};

export type IGlobalContextProvider = {
	globalProps: IGlobalContext;
	children: React.ReactNode;
};

export type IPageContext = {
	seo: ISeo;
	content: IContent;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};

export type IPostTypeFlexibleContent = {
	postTypeFlexibleContent: string;
};

export type IPageContextProvider = {
	seo: ISeo;
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: IPostTypeFlexibleContent;
};
