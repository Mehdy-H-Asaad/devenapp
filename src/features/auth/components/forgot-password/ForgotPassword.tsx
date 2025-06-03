import { AuthFormCard } from "@/components/common/AuthFormCard";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForgotPassword } from "../../hooks/forgot-password/useForgotPassword";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ForgotPassword = () => {
	const { ForgotPasswordForm, isSendingEmail, onForgotPassword } =
		useForgotPassword();
	return (
		<AuthFormCard
			cardTitle="Forgot password"
			cardDescription="Enter your verified email to get your OTP"
		>
			<Form {...ForgotPasswordForm}>
				<form
					className="grid gap-6"
					onSubmit={ForgotPasswordForm.handleSubmit(onForgotPassword)}
				>
					<FormField
						control={ForgotPasswordForm.control}
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
					<Button>{isSendingEmail ? "Sending..." : "Send OTP"}</Button>
				</form>
			</Form>
		</AuthFormCard>
	);
};
