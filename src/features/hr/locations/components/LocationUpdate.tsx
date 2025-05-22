import { CustomDialog } from "@/components/common/CustomDialog";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateLocation } from "../index";
import { DialogFooter } from "@/components/ui/dialog";
import { MainButton } from "@/components/common/MainButton";
import { useFormState } from "react-hook-form";
import { useEffect } from "react";
import { TLocationDTO } from "../index";

export const LocationUpdate = (location: TLocationDTO) => {
	const { UpdateLocationForm, isUpdatingLocation, onUpdateLocation } =
		useUpdateLocation(location.id);

	const { isValid, isDirty } = useFormState({
		control: UpdateLocationForm.control,
	});

	useEffect(() => {
		if (location) UpdateLocationForm.reset(location);
	}, [UpdateLocationForm, location]);

	return (
		<CustomDialog title="locations" trigger="update Location">
			<Form {...UpdateLocationForm}>
				<form
					className="flex flex-col gap-8"
					onSubmit={UpdateLocationForm.handleSubmit(onUpdateLocation)}
				>
					<div className="grid grid-cols-3 gap-8">
						<FormField
							control={UpdateLocationForm.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Name" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={UpdateLocationForm.control}
							name="country"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Country</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Country" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={UpdateLocationForm.control}
							name="state"
							render={({ field }) => (
								<FormItem>
									<FormLabel>State</FormLabel>
									<FormControl>
										<Input {...field} placeholder="State" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={UpdateLocationForm.control}
							name="city"
							render={({ field }) => (
								<FormItem>
									<FormLabel>City</FormLabel>
									<FormControl>
										<Input {...field} placeholder="City" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={UpdateLocationForm.control}
							name="address_line1"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Adrress One</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Address One" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={UpdateLocationForm.control}
							name="address_line2"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Address Two</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Address Two" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={UpdateLocationForm.control}
							name="postal_code"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Postal Code</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Postal Code" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<DialogFooter>
						<MainButton disabled={!isValid || isUpdatingLocation || !isDirty}>
							{isUpdatingLocation ? "Creating..." : "Create Location"}
						</MainButton>
					</DialogFooter>
				</form>
			</Form>
		</CustomDialog>
	);
};
