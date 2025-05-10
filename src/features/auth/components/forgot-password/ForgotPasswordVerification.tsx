import { AuthFormCard } from "@/components/AuthFormCard";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForgotPasswordVerification } from "../../hooks/forgot-password/useForgotPasswordVerification";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
	InputOTPSeparator,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

export const ForgotPasswordVerification = () => {
	const {
		ForgotPasswordVerificationForm,
		isVerifying,
		onForgotPasswordVerification,
	} = useForgotPasswordVerification();
	return (
		<AuthFormCard
			cardTitle="OTP Verification"
			cardDescription="Enter the OTP you received on your email"
		>
			<Form {...ForgotPasswordVerificationForm}>
				<form
					onSubmit={ForgotPasswordVerificationForm.handleSubmit(
						onForgotPasswordVerification
					)}
				>
					<div className="grid place-content-center gap-6">
						<FormField
							control={ForgotPasswordVerificationForm.control}
							name="code"
							render={({ field }) => (
								<FormItem>
									<FormLabel>OTP</FormLabel>
									<FormControl>
										<InputOTP {...field} maxLength={6}>
											<InputOTPGroup>
												<InputOTPSlot index={0} />
												<InputOTPSlot index={1} />
												<InputOTPSlot index={2} />
											</InputOTPGroup>
											<InputOTPSeparator />
											<InputOTPGroup>
												<InputOTPSlot index={3} />
												<InputOTPSlot index={4} />
												<InputOTPSlot index={5} />
											</InputOTPGroup>
										</InputOTP>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button>{isVerifying ? "Verifying" : "Verify"}</Button>
					</div>
				</form>
			</Form>
		</AuthFormCard>
	);
};
