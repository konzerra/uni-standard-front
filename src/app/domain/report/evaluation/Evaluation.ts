import {Criterion} from "../../criterion/Criterion";

export interface Evaluation {
  id: number;
  criterion: Criterion;
  value: number;
  result: number;
  reserve: number;
}
