import {StandardSaveDto} from "../../../domain/standard/dto/StandardSaveDto";
import {FormControl, Validators} from "@angular/forms";
import {CriteriaGroupSaveDto} from "../../../domain/CriteriaGroup/CriteriaGroupSaveDto";
import {CriterionSaveDto} from "../../../domain/criterion/CriterionSaveDto";


export class StandardSaveForm {
  name = new FormControl<string | null>(null, [Validators.required])
  version = new FormControl<string | null>(null, [Validators.required])
  description = new FormControl<string | null>(null)
  criteriaGroups: Array<CriteriaGroupSaveForm> = []
  constructor() {
    this.addCriteriaGroup()
  }
  getDto():StandardSaveDto{

    return {
      name: this.name.value || "",
      version: this.version.value || "",
      description: this.description.value || "",
      criteriaGroups: this.criteriaGroups.map(it=>it.getDto()),
    }
  }

  addCriteriaGroup(){
    this.criteriaGroups.push(new CriteriaGroupSaveForm())
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

class CriteriaGroupSaveForm {
  name = new FormControl<string | null>(null, [Validators.required])

  criteria: Array<CriterionSaveForm> = []

  constructor() {
    //init default
    this.add()
  }

  getDto(): CriteriaGroupSaveDto{
    return {
      name: this.name.value || "",
      criteria: this.criteria.map(
        (it)=>it.getDto()
      )
    }
  }
  add(){
    this.criteria.push(new CriterionSaveForm())
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

class CriterionSaveForm {
  name = new FormControl<string | null>(null, [Validators.required])
  value = new FormControl<number | null>(null, [Validators.required])
  description = new FormControl<string | null>(null)

  getDto(): CriterionSaveDto{
    return {
      description: this.description.value || "",
      name: this.name.value || "",
      value: this.value.value || 1

    }
  }
  valid():boolean{
    return this.name.valid && this.value.valid && this.description.valid
  }
}

