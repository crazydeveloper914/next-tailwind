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
				blogs: globalProps?.blogs,
				navbarMenuLinks: globalProps?.navbarMenuLinks,
				aboutUsSublinks: globalProps?.aboutUsSublinks,
				footerMenuLinks: globalProps?.footerMenuLinks,
				themesOptionsContent: globalProps?.themesOptionsContent,
				businessServicesSublinks: globalProps?.businessServicesSublinks,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
