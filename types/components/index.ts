// Components
export type ICTA = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IEnquiryRequestForm = {
	title: string;
	contentOneOpen: boolean;
	contentTwoOpen: boolean;
	contentThreeOpen: boolean;
};
export type IOurPartners = {
	title: string;
	subtitle: string;
	paragraph: string;
	imageGrid: [
		{
			link: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IFeaturedProjects = {
	title: string;
	subtitle: string;
};
export type IAchievementsStatsCTA = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	displayAchievementsContent: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	achievements: [
		{
			card: {
				title: string;
				paragraph: string;
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type ITitleContentValuesBlocks = {
	backgroundImage: string;
	valuesBlockOne: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	valuesBlockTwo: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	valuesBlockThree: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	valuesBlockFour: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IRequestQuoteFormBlocks = {
	backgroundImage: {
		sourceUrl: string;
	};
	valuesBlockOne: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	valuesBlockTwo: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		businessIcon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	valuesBlockThree: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		businessIcon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IHero = {
	title: string;
	paragraph: string;
	displayVideo: boolean;
	backgroundImage: string;
	backgroundVideoUrl: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	servicesLinks: [
		{
			icon: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
		}
	];
};
export type IHeroTwo = {
	title: string;
	paragraph: string;
	backgroundImage: string;
};
export type ITwoColumnButtonContent = {
	title: string;
	subtitle: string;
	paragraph: string;
	backgroundColor: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	columnTwoContent: {
		buttonText: string;
		buttonTextTwo: string;
		buttonTextThree: string;
		paragraph: string;
		paragraphTwo: string;
		paragraphThree: string;
	};
};
export type IOurServices = {
	title: string;
	paragraph: string;
	servicesGrid: [
		{
			card: {
				title: string;
				Link: {
					url: string;
					title: string;
					target: string;
				};
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type IJumboContentImage = {
	title: string;
	subtitle: string;
	paragraph: string;
	contentBox: {
		text: string;
		subtext: string;
		icon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	quality: {
		title: string;
		paragraph: string;
	};
	reliability: {
		title: string;
		paragraph: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	bottomContent: {
		text: string;
		textTwo: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		displayTextarea: string;
		displayButtonOrImage: string;
	};
};
export type IMaintenance = {
	title: string;
	paragraph: string;
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IGoogleReviews = {
	title: string;
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
};
export type IOurLocation = {
	title: string;
	paragraph: string;
};
export type IOperationalInsights = {
	title: string;
	italic: string;
	paragraph: string;
};

// Global
export type ILayout = {
	children: React.ReactNode;
};
export type IErrorPage = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};

// Cards
export type IBlogsCard = {
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
export type IGoogleReviewsCard = {
	date: any;
	rating: any;
	name: string;
	textarea: string;
	profilePhoto: string;
};
export type IValuesBlocksTextCard = {
	title: string;
	paragraph: string;
	displayButton: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IValuesBlocksImageCard = {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IOperationalInsightsCard = {
	uri: string;
	title: string;
	paragraph: string;
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
// Elements
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type IButtonBorderSliced = {
	title: string;
	tailwindColor: string;
};
