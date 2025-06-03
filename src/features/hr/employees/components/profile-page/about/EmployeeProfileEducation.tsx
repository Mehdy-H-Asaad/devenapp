import { SectionMainTitle } from "@/components/common/SectionMainTitle";
import { TEmployeesDTO } from "../../../types/employee.types";
import { Fragment } from "react/jsx-runtime";

export const EmployeeProfileEducation = (employee: TEmployeesDTO) => {
	return (
		<div className="bg-main-form self-start p-main-spacing rounded-md flex flex-col gap-4 w-full">
			<SectionMainTitle title="Education" />

			<div className="grid grid-cols-4 gap-4">
				{employee.education.map(edc => (
					<Fragment key={edc.id}>
						<div className="border-l-[2px] pl-4">
							<div className="text-main-gray font-[500] ">Degree</div>
							<div>{edc.degree}</div>
						</div>
						<div className="border-l-[2px] pl-4">
							<div className="text-main-gray font-[500]">Field of study</div>
							<div>{edc.field_of_study}</div>
						</div>
						<div className="border-l-[2px] pl-4">
							<div className="text-main-gray font-[500]">Institution</div>
							<div>{edc.institution}</div>
						</div>
						<div className="border-l-[2px] pl-4">
							<div className="text-main-gray font-[500]">Grade</div>
							<div>{edc.grade}</div>
						</div>
						<div className="border-l-[2px] pl-4">
							<div className="text-main-gray font-[500]">Start Date</div>
							<div>{edc.start_date}</div>
						</div>
					</Fragment>
				))}
			</div>
		</div>
	);
};
