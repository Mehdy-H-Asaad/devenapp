import { Button } from "@/components/ui/button";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useBasicInfoSignUp } from "../../../hooks/signup/useBasicInfoSignUp";
import { Link } from "react-router-dom";

export const BasicInfoSignup = () => {
	const { BasicInfoForm, onBasicInfoSubmit, isSigningUp } =
		useBasicInfoSignUp();

	return (
		<div className="grid gap-6">
			<Form {...BasicInfoForm}>
				<form
					onSubmit={BasicInfoForm.handleSubmit(onBasicInfoSubmit)}
					className="grid gap-6"
				>
					<div className="grid gap-2">
						<FormField
							control={BasicInfoForm.control}
							name="firstname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="First name" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid gap-2">
						<FormField
							control={BasicInfoForm.control}
							name="lastname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Last name" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid gap-2">
						<FormField
							control={BasicInfoForm.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Email" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="grid gap-2">
						<FormField
							control={BasicInfoForm.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Password" type="password" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<Button type="submit" className="w-full">
						{isSigningUp ? "Signing up..." : "Contiune"}
					</Button>
				</form>
			</Form>
			<div className="text-center text-sm">
				Already have an account?{" "}
				<Link to={"/login"} className="underline underline-offset-4">
					login
				</Link>
			</div>
		</div>
	);
};
