import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { EmployeesColumns } from "./EmployeesColumns";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { DataTable } from "@/components/data-table/DataTable";
import { useGetEmployees } from "../../hooks/useGetEmployees";
import { EmployeeFilters } from "../filters/EmployeeFilters";
import { LIMIT } from "@/shared/constant";

export const EmployeesList = () => {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: LIMIT,
	});

	const { employees, isLoadingEmployees, metaData } = useGetEmployees({
		current_page: pagination.pageIndex + 1,
		limit: pagination.pageSize,
	});

	return (
		<div>
			<SectionMainTitle title="Employees" />

			<DataTable
				columns={EmployeesColumns}
				data={employees || []}
				isLoading={isLoadingEmployees}
				pageCount={metaData.current_page}
				pagination={pagination}
				searchableField="firstname"
				searchablePlaceholder="Employee Name"
				setPagination={setPagination}
				skeletonRows={8}
			>
				<EmployeeFilters />
			</DataTable>
		</div>
	);
};
