import { AuthFormCard } from "@/components/common/AuthFormCard";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
	InputOTPSeparator,
} from "@/components/ui/input-otp";
import { useEmailVerification } from "@/features/auth/hooks/signup/useEmailVerification";

export const EmailVerification = () => {
	const { EmailVerificationForm, isVerifying, onEmailVerification } =
		useEmailVerification();

	return (
		<AuthFormCard
			cardTitle="Email verification"
			cardDescription="Please enter the one-time OTP sent to your email."
		>
			<Form {...EmailVerificationForm}>
				<form
					onSubmit={EmailVerificationForm.handleSubmit(onEmailVerification)}
				>
					<div className="grid place-content-center gap-6">
						<FormField
							control={EmailVerificationForm.control}
							name="code"
							render={({ field }) => (
								<FormItem>
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
						<Button>{isVerifying ? "Verifying..." : "Verify"}</Button>
					</div>
				</form>
			</Form>
		</AuthFormCard>
	);
};
