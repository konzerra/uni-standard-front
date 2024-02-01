import {EvaluationSaveDto} from "../evaluation/EvaluationSaveDto";


export interface EvaluationGroupSaveDto {
  criteriaGroupId: number,
  evaluations: Array<EvaluationSaveDto>
}
