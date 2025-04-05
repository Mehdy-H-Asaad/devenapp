import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Logo from "../../../assets/imgs/deven-high-resolution-logo-transparent-light.png";
import { useSidebarLinks } from "../data/SidebarLinks";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AvatarCard } from "../components/AvatarCard";
export const DashboardSidebar = () => {
	const [openStates, setOpenStates] = useState<Record<number, boolean>>({});

	const handleToggle = (index: number) => {
		setOpenStates(prev => ({ ...prev, [index]: !prev[index] }));
	};

	const { navMains } = useSidebarLinks();

	return (
		<div className="flex max-w-[16rem] bg-sidebar-light dark:bg-sidebar-dark w-[16rem] flex-col border-r h-screen p-4">
			<img src={Logo} alt="Logo" className="w-30 p-2" loading="lazy" />

			<div className="mt-10 flex flex-1 flex-col gap-2">
				{navMains.map((nav, index) => (
					<Collapsible key={index}>
						<CollapsibleTrigger
							onClick={() => handleToggle(index)}
							className="flex items-center justify-between w-full p-2 rounded-sm duration-[var(--hover-duration)] dark:hover:bg-main-dark hover:bg-subnav-item cursor-pointer"
						>
							<div className="flex items-center gap-2">
								{nav.icon}
								<span className="font-semibold text-small">{nav.title}</span>
							</div>
							{nav.children && (
								<MdOutlineKeyboardArrowRight
									className={`transform transition-transform ${
										openStates[index] ? "rotate-90" : "rotate-0"
									}`}
									size={20}
								/>
							)}
						</CollapsibleTrigger>

						<CollapsibleContent>
							{nav.children && (
								<div className="ml-6 flex flex-col gap-1 mt-2">
									{nav.children.map((subNav, subIndex) => (
										<Link
											key={`${subIndex}`}
											to={subNav.url}
											className="flex items-center duration-[var(--hover-duration)] gap-2 p-2 rounded-sm text-small dark:hover:bg-main-dark hover:bg-subnav-item"
										>
											{subNav.icon}
											{subNav.title}
										</Link>
									))}
								</div>
							)}
						</CollapsibleContent>
					</Collapsible>
				))}

				<AvatarCard />
			</div>
		</div>
	);
};
