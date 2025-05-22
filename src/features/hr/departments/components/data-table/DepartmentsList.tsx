import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { DataTable } from "@/components/data-table/DataTable";
import { DepartmentCreate } from "../DepartmentCreate";
import { DepartmentsColumns } from "./DepartmentsColumns";
import { useGetDepartments } from "../../hooks/useGetDepartments";
import { LIMIT } from "@/shared/constant";

export const DepartmentsList = () => {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: LIMIT,
	});

	const { isLoadingDepartments, departments, metaData } = useGetDepartments({
		current_page: pagination.pageIndex + 1,
		limit: pagination.pageSize,
	});

	return (
		<div>
			<SectionMainTitle title="Departments" />

			<DataTable
				setPagination={setPagination}
				pageCount={metaData.total_pages}
				isLoading={isLoadingDepartments}
				pagination={pagination}
				skeletonRows={2}
				data={departments || []}
				columns={DepartmentsColumns}
				searchableField="name"
				searchablePlaceholder="Department"
			>
				<DepartmentCreate />
			</DataTable>
		</div>
	);
};
