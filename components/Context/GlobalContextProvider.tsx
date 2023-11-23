// Imports
import {FC} from "react";
import {GlobalContext} from "@/context/global";
import {IGlobalContextProvider} from "@/types/context";

const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
	globalProps,
}) => {
	return (
		<GlobalContext.Provider
			value={{
				agricomsJobs: globalProps?.agricomsJobs,
				jobsPositions: globalProps?.jobsPositions,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				aboutUsSublinks: globalProps?.aboutUsSublinks,
				footerMenuLinks: globalProps?.footerMenuLinks,
				bravoLogisticsJobs: globalProps?.bravoLogisticsJobs,
				executiveLeadership: globalProps?.executiveLeadership,
				operationalInsights: globalProps?.operationalInsights,
				themesOptionsContent: globalProps?.themesOptionsContent,
				businessServicesSublinks: globalProps?.businessServicesSublinks,
				operationalInsightsThreeCards:
					globalProps?.operationalInsightsThreeCards,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
