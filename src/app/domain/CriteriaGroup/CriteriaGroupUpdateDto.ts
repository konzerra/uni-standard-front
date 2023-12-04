import {CriterionUpdateDto} from "../criterion/CriterionUpdateDto";


export interface CriteriaGroupUpdateDto {
  id: number | null;
  name: string;
  description: string;
  criteria: CriterionUpdateDto[];
}
