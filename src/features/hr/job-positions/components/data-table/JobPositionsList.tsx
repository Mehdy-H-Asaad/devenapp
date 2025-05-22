import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { DataTable } from "@/components/data-table/DataTable";
import { JobPositionsColumns } from "./JobPositionsColumns";
import { JobPositionsCreate } from "../JobPositionCreate";
import { useGetJobPositions } from "../../hooks/useGetJobPositions";
import { LIMIT } from "@/shared/constant";

export const JobPositionsList = () => {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: LIMIT,
	});

	const { isLoadingJobPositions, jobPositions, metaData } = useGetJobPositions({
		current_page: pagination.pageIndex + 1,
		limit: pagination.pageSize,
	});

	return (
		<div>
			<SectionMainTitle title="job positions" />

			<DataTable
				setPagination={setPagination}
				pageCount={metaData.total_pages}
				isLoading={isLoadingJobPositions}
				pagination={pagination}
				skeletonRows={2}
				data={jobPositions || []}
				columns={JobPositionsColumns}
				searchableField="name"
				searchablePlaceholder="Job Position"
			>
				<JobPositionsCreate />
			</DataTable>
		</div>
	);
};
