import { Button } from "@/components/ui/button";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { usePersonalInfoSignUp } from "../../../hooks/signup/usePersonalInfoSignUp";
import { AuthFormCard } from "@/components/AuthFormCard";

export const PersonalInfoSignup = () => {
	const { PersonalInfoForm, onPersonalInfoSubmit } = usePersonalInfoSignUp();

	return (
		<AuthFormCard
			cardTitle="Personal Details"
			cardDescription="Add your personal information"
		>
			<Form {...PersonalInfoForm}>
				<form onSubmit={PersonalInfoForm.handleSubmit(onPersonalInfoSubmit)}>
					<div className="grid gap-6">
						<div className="grid gap-6">
							<div className="grid gap-2">
								<FormField
									control={PersonalInfoForm.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone</FormLabel>
											<FormControl>
												<Input {...field} placeholder="Phone" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="grid gap-2">
								<FormField
									control={PersonalInfoForm.control}
									name="address"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address</FormLabel>
											<FormControl>
												<Input {...field} placeholder="Address" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						<Button type="submit" className="w-full">
							Continue
						</Button>
					</div>
				</form>
			</Form>
		</AuthFormCard>
	);
};
