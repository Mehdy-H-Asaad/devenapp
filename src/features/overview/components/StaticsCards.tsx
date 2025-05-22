import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardHeader,
	CardDescription,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";

export const StaticsCards = () => {
	return (
		<div className="xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 grid gap-4 px-4 d lg:px-6">
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardDescription>Total Revenue</CardDescription>
						<Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
							<TrendingUpIcon className="size-3" />
							+12.5%
						</Badge>
					</div>
					<CardTitle className=" text-2xl font-semibold tabular-nums">
						$1,250.00
					</CardTitle>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						Trending up this month <TrendingUpIcon className="size-4" />
					</div>
					<div className="text-muted-foreground">
						Visitors for the last 6 months
					</div>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardDescription>New Customers</CardDescription>
						<Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
							<TrendingDownIcon className="size-3" />
							-20%
						</Badge>
					</div>
					<CardTitle className="text-2xl font-semibold tabular-nums">
						1,234
					</CardTitle>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						Down 20% this period <TrendingDownIcon className="size-4" />
					</div>
					<div className="text-muted-foreground">
						Acquisition needs attention
					</div>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardDescription>Active Accounts</CardDescription>
						<Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
							<TrendingUpIcon className="size-3" />
							+12.5%
						</Badge>
					</div>
					<CardTitle className="text-2xl font-semibold tabular-nums">
						45,678
					</CardTitle>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						Strong user retention <TrendingUpIcon className="size-4" />
					</div>
					<div className="text-muted-foreground">Engagement exceed targets</div>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardDescription>Growth Rate</CardDescription>
						<Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
							<TrendingUpIcon className="size-3" />
							+4.5%
						</Badge>
					</div>

					<CardTitle className="text-2xl font-semibold tabular-nums">
						4.5%
					</CardTitle>
				</CardHeader>
				<CardFooter className="flex-col items-start gap-1 text-sm">
					<div className="line-clamp-1 flex gap-2 font-medium">
						Steady performance <TrendingUpIcon className="size-4" />
					</div>
					<div className="text-muted-foreground">Meets growth projections</div>
				</CardFooter>
			</Card>
		</div>
	);
};
