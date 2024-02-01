import {StudentNumber} from "../StudentNumber";
import {ProgramNumber} from "../ProgramNumber";
import {AcademicStaffTraining} from "../AcademicStaffTraining";

export interface UniversityUpdateDto {
  id: number;
  version: string;
  name: string;
  address: string;
  yearFounded: number;
  rectorName: string;
  numOfEducationalUnits: number;
  studentNumber: StudentNumber;
  programNumber: ProgramNumber;
  academicStaffTraining: AcademicStaffTraining;
  numOfFirstYearStudents: number;
  numOfGraduates: number;
  totalAreaOfEducationalFund: number;

}
