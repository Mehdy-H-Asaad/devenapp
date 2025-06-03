import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { locationSchema } from "../index";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLocationDTO, TUpdateLocationDTO } from "../index";
import { LOCATIONS } from "../../index";

export const useUpdateLocation = (id: number) => {
	const { mutate, isPending: isUpdatingLocation } = useApiMutation<
		TLocationDTO,
		TUpdateLocationDTO
	>({
		axiosRequestMethod: "put",
		queryKey: [LOCATIONS],
		requestURL: `/api/v1/locations/${id}`,
		successMsg: "Location updated successfully",
	});

	const updateLocationSchema = locationSchema;

	type TUpdateLocationSchema = z.infer<typeof locationSchema>;

	const UpdateLocationForm = useForm<TUpdateLocationSchema>({
		resolver: zodResolver(updateLocationSchema),
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

	const onUpdateLocation = (values: TUpdateLocationDTO) => {
		mutate(values);
	};

	return { onUpdateLocation, isUpdatingLocation, UpdateLocationForm };
};
