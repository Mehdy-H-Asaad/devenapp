import { SectionMainTitle } from "@/components/SectionMainTitle";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { WorkTypeColumns } from "./WorkTypeColumns";
import { DataTable } from "@/components/data-table/DataTable";
import { WorkTypeCreate } from "../WorkTypeCreate";
import { useGetWorkTypes } from "../../hooks/useGetWorkTypes";
export const WorkTypeList = () => {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	const { isLoadingWorkTypes, workTypes } = useGetWorkTypes();

	return (
		<div>
			<SectionMainTitle title="work types" />

			<DataTable
				setPagination={setPagination}
				pageCount={1}
				isLoading={isLoadingWorkTypes}
				pagination={pagination}
				skeletonRows={2}
				data={workTypes || []}
				columns={WorkTypeColumns}
				searchableField="name"
				searchablePlaceholder="Work type"
			>
				<WorkTypeCreate />
			</DataTable>
		</div>
	);
};
