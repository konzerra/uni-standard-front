import {EvaluationGroupUpdateDto} from "../evaluation_group/EvaluationGroupUpdateDto";
import {UniversityUpdateDto} from "../../university/dto/UniversityUpdateDto";

export interface ReportUpdateDto {
  id: number,
  status: string,
  evaluationGroups: EvaluationGroupUpdateDto[],
  university: UniversityUpdateDto
}
