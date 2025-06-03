import { BasicInfoSignup } from "./steps/BasicInfoSignup";
import { AuthFormCard } from "@/components/common/AuthFormCard";
export const Signup = () => {
	return (
		<AuthFormCard
			cardTitle="Welcome to Deven"
			cardDescription="Signup with your Google account"
			terms
			google
		>
			<BasicInfoSignup />
		</AuthFormCard>
	);
};
