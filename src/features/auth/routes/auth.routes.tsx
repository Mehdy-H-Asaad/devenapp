import { StepGuard } from "@/shared/utils/StepGuard";
import { RouteObject } from "react-router-dom";
import { EmailVerification } from "../components/signup/steps/EmailVerification";
import { Signup } from "../components/signup/Signup";
import { Login } from "../components/login/Login";
import { ForgotPassword } from "../components/forgot-password/ForgotPassword";
import { ForgotPasswordVerification } from "../components/forgot-password/ForgotPasswordVerification";
import { ResetPassword } from "../components/reset-password/ResetPassword";
import { signupGuards } from "../guards/signup.guards";
import { resetPasswordGuards } from "../guards/reset-password.guards";
import { PersonalInfoSignup } from "../components/signup/steps/PersonalInfoSignup";

export const authRoutes: RouteObject[] = [
	{
		path: "/signup",

		children: [
			{
				index: true,
				element: <Signup />,
			},
			{
				path: "step-2",
				element: (
					<StepGuard guards={signupGuards}>
						<EmailVerification />
					</StepGuard>
				),
			},
			{
				path: "step-3",
				element: <PersonalInfoSignup />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/forgot-password",
		children: [
			{
				index: true,
				element: <ForgotPassword />,
			},
			{
				path: "otp",
				element: <ForgotPasswordVerification />,
			},
		],
	},
	{
		path: "/reset-password",
		element: (
			<StepGuard guards={resetPasswordGuards}>
				<ResetPassword />
			</StepGuard>
		),
	},
];
