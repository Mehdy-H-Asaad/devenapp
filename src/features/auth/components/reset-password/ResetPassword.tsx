import { AuthFormCard } from "@/components/AuthFormCard";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useResetPassword } from "../../hooks/reset-password/useResetPassword";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ResetPassword = () => {
	const { ResetPasswordForm, isVerifying, onResetPassword } =
		useResetPassword();
	return (
		<AuthFormCard
			cardTitle="Password Reset"
			cardDescription="Enter your new password"
		>
			<Form {...ResetPasswordForm}>
				<form
					className="grid gap-6"
					onSubmit={ResetPasswordForm.handleSubmit(onResetPassword)}
				>
					<FormField
						control={ResetPasswordForm.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>New password</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="New password"
										type="password"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={ResetPasswordForm.control}
						name="confirm_password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm new password</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Confirm new password"
										type="password"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button>{isVerifying ? "Verifying..." : "Save"}</Button>
				</form>
			</Form>
		</AuthFormCard>
	);
};
