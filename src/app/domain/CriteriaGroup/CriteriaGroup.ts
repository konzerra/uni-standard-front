import {Criterion} from "../criterion/Criterion";

export interface CriteriaGroup {
  id: number ;
  name: string;
  criteria: Criterion[];
}
