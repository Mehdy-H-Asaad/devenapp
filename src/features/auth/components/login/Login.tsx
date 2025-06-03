import { LoginForm } from "./LoginForm";
import { AuthFormCard } from "@/components/common/AuthFormCard";

export const Login = () => {
	return (
		<AuthFormCard
			cardTitle="Welcome Back"
			cardDescription="Login with your Google account"
			terms
			google
		>
			<LoginForm />
		</AuthFormCard>
	);
};
