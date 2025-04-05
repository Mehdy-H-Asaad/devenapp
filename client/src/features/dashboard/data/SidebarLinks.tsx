import { IoGrid } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { GrUserManager } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";

export const useSidebarLinks = () => {
	return {
		user: {},
		navMains: [
			{
				title: "Overview",
				url: "/",
				icon: <IoGrid />,
			},
			{
				title: "Reports",
				url: "/reports",
				icon: <GoGraph />,
				children: [
					{
						title: "Client Reports",
						url: "/reports",
						icon: <FaPeopleGroup />,
					},
					{
						title: "Company Reports",
						url: "/client-reports",
					},
				],
			},
			{
				title: "Accounting",
				url: "/accounting",
				icon: <FaCalculator />,
				children: [
					{
						title: "Client Accounts",
						url: "/client-accounts",
						icon: <TbReportAnalytics />,
					},
				],
			},
			{
				title: "HR",
				url: "/hr",
				icon: <GrUserManager />,
				children: [
					{
						title: "Recruitment",
						url: "/recruitment",
					},
				],
			},
		],
	};
};
