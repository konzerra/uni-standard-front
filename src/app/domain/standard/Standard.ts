import {CriteriaGroup} from "../CriteriaGroup/CriteriaGroup";
import {ModelPageI} from "../../_generic/ModelPageI";


export interface Standard {
  id: number;
  name: string;
  version: string;
  description: string;
  status: string;
  criteriaGroups: CriteriaGroup[];
}

export interface StandardPage extends ModelPageI<Standard>{

}
