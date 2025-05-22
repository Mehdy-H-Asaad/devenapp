import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { DataTable } from "@/components/data-table/DataTable";
import { useGetLocations } from "../../hooks/useGetLocations";
import { LocationsColumns } from "./LocationsColumns";
import { LocationCreate } from "../LocationCreate";
import { LIMIT } from "@/shared/constant";

export const LocationsList = () => {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: LIMIT,
	});

	const { isLoadingLocations, locations, metaData } = useGetLocations({
		current_page: pagination.pageIndex + 1,
		limit: pagination.pageSize,
	});

	return (
		<div>
			<SectionMainTitle title="Locations" />

			<DataTable
				setPagination={setPagination}
				pageCount={metaData.total_pages}
				isLoading={isLoadingLocations}
				pagination={pagination}
				skeletonRows={8}
				data={locations || []}
				columns={LocationsColumns}
				searchableField="name"
				searchablePlaceholder="Location Name"
			>
				<LocationCreate />
			</DataTable>
		</div>
	);
};
