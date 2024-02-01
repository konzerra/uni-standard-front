import {FormControl, Validators} from "@angular/forms";
import {Standard} from "../../../domain/standard/Standard";
import {EvaluationGroupSaveDto} from "../../../domain/report/evaluation_group/EvaluationGroupSaveDto";
import {Criterion} from "../../../domain/criterion/Criterion";
import {CriteriaGroup} from "../../../domain/CriteriaGroup/CriteriaGroup";
import {EvaluationSaveDto} from "../../../domain/report/evaluation/EvaluationSaveDto";
import {ReportSaveDto} from "../../../domain/report/dto/ReportSaveDto";
import {UniversitySaveForm} from "./university.save.form";



export class ReportSaveForm {

  standard: Standard | null = null
  university = new UniversitySaveForm()
  evaluationGroups: Array<EvaluationGroupSaveForm> = []
  constructor() {
  }

  setStandard(standard: Standard){
    this.standard = standard
    this.standard.criteriaGroups.forEach(criteriaGroup=>{
      this.evaluationGroups.push(new EvaluationGroupSaveForm(criteriaGroup))
    })
  }
  getDto():ReportSaveDto{
    return {
      evaluationGroups: this.evaluationGroups.map(it=>it.getDto()),
      university: this.university.getDto(),
      standardId: this.standard?.id || 0
    }
  }

  valid(): boolean {
    //check every criterion
    for( let evaluationGroup of this.evaluationGroups){
      if(!evaluationGroup.valid()){
        return false
      }
    }
    return this.university.valid() && this.standard!=null
  }
}

class EvaluationGroupSaveForm {
  criteria: Array<EvaluationSaveForm> = []

  constructor(
    public criteriaGroup: CriteriaGroup
  ) {
    this.criteriaGroup.criteria.forEach(criterion=>{
      this.criteria.push(new EvaluationSaveForm(criterion))
    })
  }

  getDto():EvaluationGroupSaveDto{
    return {
      criteriaGroupId: this.criteriaGroup.id,
      evaluations: this.criteria.map(
        (it)=>it.getDto()
      )
    }
  }
  valid():boolean{
    //check every criterion
    for( let criterion of this.criteria){
      if(!criterion.valid()){
        return false
      }
    }
    return true
  }
}

class EvaluationSaveForm {
  value = new FormControl<number | null>(null, [Validators.required])
  constructor(
    public  criterion: Criterion
  ) {
  }
  getDto(): EvaluationSaveDto{
    return {
      criterionId: this.criterion.id,
      value: this.value.value || 1
    }
  }
  valid():boolean{
    return this.value.valid
  }
}

