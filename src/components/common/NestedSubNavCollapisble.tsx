import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { TSidebarLinkItem } from "@/features/dashboard/data/SidebarLinks";

type TNestedSubNavCollapisble = {
	navbarData: TSidebarLinkItem[];
	level?: number;
};

export const NestedSubNavCollapisble = ({
	navbarData,
	level = 0,
}: TNestedSubNavCollapisble) => {
	const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

	const handleToggle = (path: string) => {
		setOpenStates(prev => ({ ...prev, [path]: !prev[path] }));
	};

	return (
		<>
			{navbarData.map((nav, index) => {
				const path = `${level}-${index}`;
				const hasChildren = nav.children && nav.children.length > 0;

				return (
					<div key={path} className="flex flex-col">
						{hasChildren ? (
							<Collapsible
								open={openStates[path]}
								onOpenChange={() => handleToggle(path)}
							>
								<CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-sm duration-[var(--hover-duration)] dark:hover:bg-main-dark hover:bg-subnav-item cursor-pointer">
									<div className="flex items-center gap-2">
										{nav.icon}
										<span className="font-semibold text-small">
											{nav.title}
										</span>
									</div>
									<MdOutlineKeyboardArrowRight
										className={`transform transition-transform ${
											openStates[path] ? "rotate-90" : "rotate-0"
										}`}
										size={20}
									/>
								</CollapsibleTrigger>
								<CollapsibleContent className="border-l border-l-gray-300">
									<div className="ml-4 flex flex-col gap-1 mt-1">
										<NestedSubNavCollapisble
											navbarData={nav.children || []}
											level={level + 1}
										/>
									</div>
								</CollapsibleContent>
							</Collapsible>
						) : (
							<NavLink
								to={nav.url || "/"}
								className={({ isActive }) =>
									`flex capitalize items-center gap-2 p-2 rounded-sm text-small ${
										isActive
											? "bg-main-blue text-white"
											: "bg-subnav-item text-black"
									} dark:hover:bg-secondary-blue hover:bg-secondary-blue hover:text-white duration-200`
								}
							>
								{nav.icon}
								<span className="font-semibold">{nav.title}</span>
							</NavLink>
						)}
					</div>
				);
			})}
		</>
	);
};
