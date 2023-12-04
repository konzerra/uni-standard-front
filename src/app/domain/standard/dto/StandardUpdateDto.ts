import {CriteriaGroupUpdateDto} from "../../CriteriaGroup/CriteriaGroupUpdateDto";

export interface StandardUpdateDto {
  id: number;
  name: string;
  version: string;
  description: string;
  status: string;
  criteriaGroups: CriteriaGroupUpdateDto[]; // Using the CriteriaGroupUpdateDto interface defined earlier
}
