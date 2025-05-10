import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "../../hooks/login/useLogin";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";

export function LoginForm() {
	const { LoginForm, isLogginIn, onLogin } = useLogin();

	return (
		<div className="grid gap-6">
			<Form {...LoginForm}>
				<form onSubmit={LoginForm.handleSubmit(onLogin)}>
					<div className="grid gap-6">
						<div className="grid gap-2">
							<FormField
								control={LoginForm.control}
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
								control={LoginForm.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												{...field}
												placeholder="Password"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<Button type="submit" className="w-full">
							{isLogginIn ? "Logging..." : "Login"}
						</Button>
					</div>
				</form>
			</Form>
			<div className="text-center text-sm">
				Don't have an account?{" "}
				<Link to={"/signup"} className="underline underline-offset-4">
					Signup
				</Link>
			</div>
			<div className="text-center text-sm">
				<Link to={"/forgot-password"} className="underline underline-offset-4">
					Forgot password?
				</Link>
			</div>
		</div>
	);
}
