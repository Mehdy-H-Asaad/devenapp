import NotFoundImg from "../assets/imgs/not-found-error-alert-svgrepo-com.svg";

type TNotFound = {
	description?: string;
};
export const NotFound = ({ description }: TNotFound) => {
	return (
		<div className="flex flex-col ">
			<img src={NotFoundImg} className="size-80 mx-auto" alt="NOT FOUND" />
			<div className="font-bold text-base text-center">{description}</div>
		</div>
	);
};
