import { cn } from "@/lib/utils";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "../ui/card";
import React from "react";
import { LogoSwitcher } from "./LogoSwitcher";
import { Button } from "../ui/button";

type TAuthFormCardProps = {
	cardTitle: string;
	cardDescription?: string;
	children: React.ReactNode;
	terms?: boolean;
	google?: boolean;
};

export const AuthFormCard = ({
	className,
	cardTitle,
	cardDescription,
	children,
	terms = false,
	google = false,
	...props
}: React.ComponentPropsWithoutRef<"div"> & TAuthFormCardProps) => {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<LogoSwitcher className="flex self-center w-30" />

				<div className={cn("flex flex-col gap-6", className)} {...props}>
					<Card>
						<CardHeader className="text-center">
							<CardTitle className="text-xl">{cardTitle}</CardTitle>
							<CardDescription>{cardDescription}</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-6">
							{google && (
								<>
									<Button variant="outline" className="w-full">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
											<path
												d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
												fill="currentColor"
											/>
										</svg>
										Login with Google
									</Button>
									<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
										<span className="relative z-10 bg-background px-2 text-muted-foreground">
											Or continue with
										</span>
									</div>
								</>
							)}
							{children}
						</CardContent>
					</Card>
					{terms && (
						<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
							By clicking continue, you agree to our{" "}
							<a href="#">Terms of Service</a> and{" "}
							<a href="#">Privacy Policy</a>.
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
