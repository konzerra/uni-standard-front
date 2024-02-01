import {EvaluationGroupSaveDto} from "../evaluation_group/EvaluationGroupSaveDto";
import {UniversitySaveDto} from "../../university/dto/UniversitySaveDto";

export interface ReportSaveDto {
  standardId: number;
  evaluationGroups: EvaluationGroupSaveDto[];
  university: UniversitySaveDto;
}

