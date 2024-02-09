import {CriteriaGroup} from "../CriteriaGroup/CriteriaGroup";
import {ModelPageI} from "../../_generic/ModelPageI";
import {Report} from "../report/Report";


export interface Standard {
  id: number;
  name: string;
  version: string;
  description: string;
  status: string;
  criteriaGroups: CriteriaGroup[];
}
export interface StandardReports{
  id: number;
  name: string;
  version: string;
  description: string;
  status: string;
  criteriaGroups: CriteriaGroup[];
  reports: Report[]
}
export interface StandardPage extends ModelPageI<Standard>{

}

export interface StandardReportsPage extends ModelPageI<StandardReports>{

}
