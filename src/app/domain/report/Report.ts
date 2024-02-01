import {Standard} from "../standard/Standard";
import {University} from "../university/University";
import {EvaluationGroup} from "./evaluation_group/EvaluationGroup";


export interface Report {
  id: number;
  status: string;
  standard: Standard;
  evaluationGroups: EvaluationGroup[];
  university: University;
  average: number,
  reserve: number
}
