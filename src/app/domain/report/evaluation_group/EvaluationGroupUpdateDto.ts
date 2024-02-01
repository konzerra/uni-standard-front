import {EvaluationSaveDto} from "../evaluation/EvaluationSaveDto";


export interface EvaluationGroupUpdateDto {
  id: number,
  criteriaGroupId: number,
  evaluations: Array<EvaluationSaveDto>
}
