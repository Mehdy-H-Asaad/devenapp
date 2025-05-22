import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuGroup,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
	ChevronsUpDown,
	Sparkles,
	BadgeCheck,
	CreditCard,
	Bell,
	LogOut,
} from "lucide-react";
import DefaultUserImg from "../assets/imgs/mehdyA.jpg";
export const AvatarCard = () => {
	return (
		<div className="mt-auto duration-[var(--hover-duration)]  dark:hover:bg-main-dark hover:bg-subnav-item">
			<DropdownMenu>
				<DropdownMenuTrigger className="p-2 flex items-center gap-2 cursor-pointer">
					<Avatar className="h-8 w-8 rounded-lg">
						<AvatarImage src={DefaultUserImg} alt="User" />
						<AvatarFallback className="rounded-lg">CN</AvatarFallback>
					</Avatar>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold">Mehdy Asaad</span>
						<span className="truncate text-xs">
							mehdyasaad.sy.2003@gmail.com
						</span>
					</div>
					<ChevronsUpDown className="ml-auto size-4" />
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
					// side={isMobile ? "bottom" : "right"}
					align="end"
					sideOffset={4}
				>
					<DropdownMenuLabel className="p-0 font-normal">
						<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
							<Avatar className="h-8 w-8 rounded-lg">
								<AvatarImage src={DefaultUserImg} alt="User" />
								<AvatarFallback className="rounded-lg">CN</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">Mehdy Asaad</span>
								<span className="truncate text-xs">
									mehdyasaad.sy.2003@gmail.com
								</span>
							</div>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<Sparkles />
							Upgrade to Pro
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<BadgeCheck />
							Account
						</DropdownMenuItem>
						<DropdownMenuItem>
							<CreditCard />
							Billing
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Bell />
							Notifications
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<LogOut />
						Log out
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
