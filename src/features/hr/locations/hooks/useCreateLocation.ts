import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { locationSchema } from "../index";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCreateLocationDTO, TLocationDTO } from "../index";
import { LOCATIONS } from "../../index";

export const useCreateLocation = () => {
	const { mutate, isPending: isCreatingLocation } = useApiMutation<
		TLocationDTO,
		TCreateLocationDTO
	>({
		axiosRequestMethod: "post",
		queryKey: [LOCATIONS],
		requestURL: "/api/v1/locations/",
		successMsg: "Location created successfully",
		onSuccess: () => CreateLocationForm.reset(),
	});

	const createLocationSchema = locationSchema;

	type TCreateLocationSchema = z.infer<typeof locationSchema>;

	const CreateLocationForm = useForm<TCreateLocationSchema>({
		resolver: zodResolver(createLocationSchema),
		defaultValues: {
			address_line1: "",
			address_line2: "",
			city: "",
			country: "",
			name: "",
			postal_code: "",
			state: "",
		},
	});

	const onCreateLocation = (values: TCreateLocationSchema) => {
		mutate(values);
	};

	return { onCreateLocation, CreateLocationForm, isCreatingLocation };
};
