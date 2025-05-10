export type TSignUp = {
	email: string;
	password: string;
	firstname: string;
	lastname: string;
};

export type TResetPasswordDTO = {
	email: string;
	password: string;
	confirm_password: string;
};

export type TUser = {
	email: string;
	firstname: string;
	lastname: string;
	phone: string;
	address: string;
	role: string;
	status: string;
};

export type TLoginDTO = {
	email: string;
	password: string;
};
