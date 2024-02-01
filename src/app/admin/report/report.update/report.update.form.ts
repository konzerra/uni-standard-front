import {FormControl, Validators} from "@angular/forms";
import {Standard} from "../../../domain/standard/Standard";
import {UniversityUpdateForm} from "./university.update.form";
import {EvaluationUpdateDto} from "../../../domain/report/evaluation/EvaluationUpdateDto";
import {Evaluation} from "../../../domain/report/evaluation/Evaluation";
import {EvaluationGroup} from "../../../domain/report/evaluation_group/EvaluationGroup";
import {EvaluationGroupUpdateDto} from "../../../domain/report/evaluation_group/EvaluationGroupUpdateDto";
import {ReportUpdateDto} from "../../../domain/report/dto/ReportUpdateDto";
import {Report} from "../../../domain/report/Report";
import {ReportStatus} from "../../../domain/report/ReportStatus";
import {StandardStatus} from "../../../domain/standard/StandardStatus";



export class ReportUpdateForm {

  id : number | null = null
  status = new FormControl<string | null>(null, [Validators.required])
  standard: Standard | null = null
  university = new UniversityUpdateForm()
  evaluationGroups: Array<EvaluationGroupUpdateForm> = []
  reportStatuses: string[] = Object.values(ReportStatus);
  constructor() {
  }


  setData(data: Report){
    this.id = data.id
    this.status.setValue(data.status)
    this.standard = data.standard
    this.university.setData(data.university)
    data.evaluationGroups.forEach(evaluationGroup=>{
      this.evaluationGroups.push(new EvaluationGroupUpdateForm(evaluationGroup))
    })
  }
  getDto():ReportUpdateDto{
    return {
      id: this.id || 0,
      status: this.status.value || ReportStatus.REGISTERED,
      evaluationGroups: this.evaluationGroups.map(it=>it.getDto()),
      university: this.university.getDto()

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

class EvaluationGroupUpdateForm {
  criteria: Array<EvaluationUpdateForm> = []

  constructor(
    public evaluationGroup: EvaluationGroup
  ) {
    this.evaluationGroup.evaluations.forEach(criterionEvaluation=>{
      this.criteria.push(new EvaluationUpdateForm(criterionEvaluation))
    })
  }

  getDto():EvaluationGroupUpdateDto{
    return {
      id: this.evaluationGroup.id,
      criteriaGroupId: this.evaluationGroup.criteriaGroup.id,
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

class EvaluationUpdateForm {
  value = new FormControl<number | null>(null, [Validators.required])
  constructor(
    public  evaluation: Evaluation
  ) {
    this.value.setValue(evaluation.value)
  }
  getDto(): EvaluationUpdateDto{
    return {
      id: this.evaluation.id,
      criterionId: this.evaluation.criterion.id,
      value: this.value.value || 1
    }
  }
  valid():boolean{
    return this.value.valid
  }
}

