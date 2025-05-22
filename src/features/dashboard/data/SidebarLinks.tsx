import { IoCreate, IoGrid } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { GrUserManager } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { MdList } from "react-icons/md";
import { JSX } from "react";
import { IoPeople } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaUsersGear } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

export type TSidebarLinkItem = {
	title: string;
	icon?: JSX.Element;
	url?: string;
	children?: TSidebarLinkItem[];
};

type TSidebarLinks = {
	user: any;
	navMains: TSidebarLinkItem[];
};

export const useSidebarLinks = (): TSidebarLinks => {
	return {
		user: {},
		navMains: [
			{
				title: "Overview",
				url: "/",
				icon: <IoGrid />,
			},
			{
				title: "HR",
				url: "/hr",
				icon: <GrUserManager />,
				children: [
					{
						title: "Employees",
						url: "/employees",
						icon: <IoPeople />,
					},
				],
			},
			{
				title: "Reports",
				url: "/reports",
				icon: <GoGraph />,
				children: [
					{
						title: "Client Reports",
						icon: <FaPeopleGroup />,
						children: [
							{
								title: "Create Client Report",
								url: "/create-report",
								icon: <IoCreate />,
							},
							{
								title: "List Client Reports",
								url: "/reports",
								icon: <MdList />,
							},
						],
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
				title: "Settings",
				icon: <IoMdSettings />,
				children: [
					{
						title: "HR Settings",
						icon: <FaUsersGear />,
						children: [
							{
								title: "Work types",
								url: "/hr-settings/work-type",
							},
							{
								title: "Job Positions",
								url: "/hr-settings/job-positions",
							},
							{
								title: "Shifts",
								url: "hr-settings/shifts",
							},
						],
					},

					{
						title: "General Settings",
						icon: <FaRegBuilding />,
						children: [
							{
								title: "Department",
								url: "/general-settings/department",
							},
							{
								title: "Locations",
								url: "general-settings/locations",
							},
						],
					},
				],
			},
		],
	};
};
