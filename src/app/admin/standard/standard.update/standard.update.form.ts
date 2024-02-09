
import {FormControl, Validators} from "@angular/forms";
import {StandardUpdateDto} from "../../../domain/standard/dto/StandardUpdateDto";
import {CriterionUpdateDto} from "../../../domain/criterion/CriterionUpdateDto";
import {Criterion} from "../../../domain/criterion/Criterion";
import {CriteriaGroup} from "../../../domain/CriteriaGroup/CriteriaGroup";
import {CriteriaGroupUpdateDto} from "../../../domain/CriteriaGroup/CriteriaGroupUpdateDto";
import {Standard} from "../../../domain/standard/Standard";
import {StandardStatus} from "../../../domain/standard/StandardStatus";


export class StandardUpdateForm {
  id: number = 0
  name = new FormControl<string | null>(null, [Validators.required])
  version = new FormControl<string | null>(null, [Validators.required])
  description = new FormControl<string | null>(null)
  status = new FormControl<string | null>(null, [Validators.required])
  criteriaGroups: Array<CriteriaGroupUpdateForm> = []
  standardStatuses: string[] = Object.values(StandardStatus);
  constructor() {

  }
  setDto(standard: Standard){
    console.log(standard)
    this.id = standard.id
    this.name.setValue(standard.name)
    this.version.setValue(standard.version)
    this.description.setValue(standard.description)
    this.status.setValue(standard.status)
    this.criteriaGroups = standard.criteriaGroups.map(it=>new CriteriaGroupUpdateForm(it))
  }
  getDto():StandardUpdateDto{
    return {
      id: this.id,
      name: this.name.value || "",
      version: this.version.value || "",
      description: this.description.value || "",
      status: this.status.value || "",
      criteriaGroups: this.criteriaGroups.map(it=>it.getDto()),
    }
  }

  addCriteriaGroup(){
    this.criteriaGroups.push(new CriteriaGroupUpdateForm())
  }

  removeCriteriaGroup(index: number){
    this.criteriaGroups.splice(index,1)
  }

  addCriterion(cgIndex: number){
    this.criteriaGroups[cgIndex].add()
  }
  removeCriterion(cgIndex: number, cIndex: number){
    this.criteriaGroups[cgIndex].remove(cIndex)
  }

  valid(): boolean {
    //check every criterion
    for( let criteriaGroup of this.criteriaGroups){
      if(!criteriaGroup.valid()){
        return false
      }
    }
    return this.name.valid && this.version.valid && this.description.valid
  }
}

class CriteriaGroupUpdateForm {
  id: number | null = null
  name = new FormControl<string | null>(null, [Validators.required])

  criteria: Array<CriterionUpdateForm> = []

  constructor( criteriaGroup?: CriteriaGroup) {
    if(criteriaGroup){
      this.setDto(criteriaGroup)
    }

  }

  setDto(criteriaGroup: CriteriaGroup){
    this.id = criteriaGroup.id
    this.name.setValue(criteriaGroup.name)
    this.criteria = criteriaGroup.criteria.map(it=> new CriterionUpdateForm(it))
  }
  getDto(): CriteriaGroupUpdateDto{
    return {
      id: this.id,
      name: this.name.value || "",
      criteria: this.criteria.map(
        (it)=>it.getDto()
      )
    }
  }
  add(){
    this.criteria.push(new CriterionUpdateForm())
  }

  remove(index: number){
    this.criteria.splice(index,1)
  }
  valid():boolean{
    //check every criterion
    for( let criterion of this.criteria){
      if(!criterion.valid()){
        return false
      }
    }
    return this.name.valid
  }
}

class CriterionUpdateForm {
  id: number | null = null
  name = new FormControl<string | null>(null, [Validators.required])
  value = new FormControl<number | null>(null, [Validators.required])
  description = new FormControl<string | null>(null)

  constructor(criterion?: Criterion) {
    if(criterion){
      this.setDto(criterion)
    }
  }

  setDto(criterion: Criterion){
    this.id = criterion.id
    this.name.setValue(criterion.name)
    this.description.setValue(criterion.description)
    this.value.setValue(criterion.value)
  }
  getDto(): CriterionUpdateDto{
    return {
      id: this.id,
      description: this.description.value || "",
      name: this.name.value || "",
      value: this.value.value || 1

    }
  }
  valid():boolean{
    return this.name.valid && this.value.valid && this.description.valid
  }
}

