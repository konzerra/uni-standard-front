import {Evaluation} from "../evaluation/Evaluation";

export interface EvaluationGroup {
  id: number
  criteriaGroup: {
    id: number,
    name: string
  },
  evaluations: Evaluation[]
}
