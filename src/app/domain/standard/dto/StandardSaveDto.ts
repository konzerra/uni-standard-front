import {CriteriaGroupSaveDto} from "../../CriteriaGroup/CriteriaGroupSaveDto";

export interface StandardSaveDto {
  name: string;
  version: string;
  description: string;
  criteriaGroups: CriteriaGroupSaveDto[]; // Using the CriteriaGroupSaveDto interface defined earlier
}
