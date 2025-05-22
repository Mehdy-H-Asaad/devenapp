import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { WorkTypeColumns } from "./WorkTypeColumns";
import { DataTable } from "@/components/data-table/DataTable";
import { WorkTypeCreate } from "../WorkTypeCreate";
import { useGetWorkTypes } from "../../hooks/useGetWorkTypes";
import { LIMIT } from "@/shared/constant";
export const WorkTypeList = () => {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: LIMIT,
	});

	const { isLoadingWorkTypes, workTypes, metaData } = useGetWorkTypes({
		current_page: pagination.pageIndex + 1,
		limit: pagination.pageSize,
	});

	return (
		<div>
			<SectionMainTitle title="work types" />

			<DataTable
				setPagination={setPagination}
				pagination={pagination}
				pageCount={metaData.total_pages}
				isLoading={isLoadingWorkTypes}
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
