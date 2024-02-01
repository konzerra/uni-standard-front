import {CriterionSaveDto} from "../criterion/CriterionSaveDto";


export interface CriteriaGroupSaveDto {
  name: string;
  criteria: CriterionSaveDto[]; // Using the CriterionSaveDto interface defined earlier
}
