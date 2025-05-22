import { CustomDialog } from "@/components/common/CustomDialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { MainButton } from "@/components/common/MainButton";
import { useFormState } from "react-hook-form";
import { useCreateLocation } from "../index";

export const LocationCreate = () => {
	const { CreateLocationForm, isCreatingLocation, onCreateLocation } =
		useCreateLocation();

	const { isValid } = useFormState({ control: CreateLocationForm.control });

	return (
		<CustomDialog
			dialogContentClassName="!min-w-[600px]"
			title="locations"
			trigger="create Location"
		>
			<Form {...CreateLocationForm}>
				<form
					className="flex flex-col gap-8"
					onSubmit={CreateLocationForm.handleSubmit(onCreateLocation)}
				>
					<div className="grid grid-cols-3 gap-8">
						<FormField
							control={CreateLocationForm.control}
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
							control={CreateLocationForm.control}
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
							control={CreateLocationForm.control}
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
							control={CreateLocationForm.control}
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
							control={CreateLocationForm.control}
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
							control={CreateLocationForm.control}
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
							control={CreateLocationForm.control}
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
						<MainButton disabled={!isValid || isCreatingLocation}>
							{isCreatingLocation ? "Creating..." : "Create Location"}
						</MainButton>
					</DialogFooter>
				</form>
			</Form>
		</CustomDialog>
	);
};
