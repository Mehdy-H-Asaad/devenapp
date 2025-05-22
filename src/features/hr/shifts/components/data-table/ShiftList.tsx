import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { PaginationState } from "@tanstack/react-table";
import { useState } from "react";
import { DataTable } from "@/components/data-table/DataTable";
import { useGetShifts } from "../../hooks/useGetShifts";
import { ShiftColumns } from "./ShiftColumns";
import { ShiftCreate } from "../ShiftCreate";
import { TimeFormat } from "../TimeFormat";
import { LIMIT } from "@/shared/constant";

export const ShiftsList = () => {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: LIMIT,
	});

	const { isLoadingShifts, shifts, metaData } = useGetShifts({
		current_page: pagination.pageIndex + 1,
		limit: pagination.pageSize,
	});

	return (
		<div>
			<SectionMainTitle title="Shifts" />

			<DataTable
				setPagination={setPagination}
				pagination={pagination}
				pageCount={metaData.total_pages}
				isLoading={isLoadingShifts}
				skeletonRows={4}
				data={shifts || []}
				columns={ShiftColumns}
				searchableField="name"
				searchablePlaceholder="Shift"
			>
				<div className="flex items-center justify-center flex-row-reverse gap-4">
					<ShiftCreate />
					<TimeFormat />
				</div>
			</DataTable>
		</div>
	);
};
