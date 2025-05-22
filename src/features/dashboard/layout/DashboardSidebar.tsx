import { useSidebarLinks } from "../data/SidebarLinks";
import { AvatarCard } from "../components/AvatarCard";
import { LogoSwitcher } from "@/components/common/LogoSwitcher";
import { NestedSubNavCollapisble } from "@/components/common/NestedSubNavCollapisble";
import { ScrollArea } from "@/components/ui/scroll-area";

export const DashboardSidebar = () => {
	const { navMains } = useSidebarLinks();

	return (
		<aside className=" bg-sidebar-light dark:bg-sidebar-dark hidden md:flex md:min-w-[12rem] lg:min-w-[14rem] flex-col border-r h-screen p-4">
			<LogoSwitcher />

			<div className="mt-10 flex flex-1 flex-col gap-2">
				<ScrollArea className="h-[550px]">
					<NestedSubNavCollapisble navbarData={navMains} />
				</ScrollArea>
				<AvatarCard />
			</div>
		</aside>
	);
};
