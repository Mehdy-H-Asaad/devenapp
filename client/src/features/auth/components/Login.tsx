import { LoginForm } from "./LoginForm";
import Logo from "../../../assets/imgs/deven-high-resolution-logo-transparent-light.png";

export const Login = () => {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
			<div className="flex w-full max-w-sm flex-col gap-6">
				<a href="#" className="flex items-center gap-2 self-center font-medium">
					<img src={Logo} className="w-26" alt="DEVEN" />
				</a>

				<LoginForm />
			</div>
		</div>
	);
};
