import { Input } from "@/components/ui/input";

import { Search } from "lucide-react"; // Import the search icon from Lucide
import { IoNotificationsOutline } from "react-icons/io5";

import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import { useTheme } from "@/shared/services/ThemeProvider";

export const SideHeader = () => {
	// const location = useLocation();

	const { setTheme, theme } = useTheme();

	return (
		<header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex py-4 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
			<div className="container">
				<div className="flex w-full items-center justify-between gap-1 lg:gap-2">
					<div className="relative w-80 py-2">
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
						<Input
							placeholder="Search..."
							className="pl-10" // Add padding to make room for the icon
						/>
					</div>
					<div className="flex items-center gap-8">
						<IoChatboxEllipsesOutline size={20} />
						<IoNotificationsOutline size={20} />
						{theme === "dark" ? (
							<MdOutlineWbSunny
								className="cursor-pointer"
								onClick={() => setTheme("light")}
								size={20}
							/>
						) : (
							<IoMoonOutline
								className="cursor-pointer -translate-y-[1px]"
								onClick={() => setTheme("dark")}
								size={20}
							/>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};
