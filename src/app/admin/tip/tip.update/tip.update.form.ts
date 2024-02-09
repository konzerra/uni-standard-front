
import {FormControl, Validators} from "@angular/forms";
import {Tip} from "../../../domain/tip/Tip";
import {TipUpdateDto} from "../../../domain/tip/dto/TipUpdateDto";


export class TipUpdateForm {
  id: number = 0
  question = new FormControl<string | null>(null, [Validators.required])
  answer = new FormControl<string | null>(null, [Validators.required])

  getDto():TipUpdateDto{
    return {
      id: this.id,
      question: this.question.value || "",
      answer: this.answer.value || "",
    }
  }
  setDto(tip:Tip){
    this.id = tip.id
    this.question.setValue(tip.question)
    this.answer.setValue(tip.answer)
  }
  valid(): boolean {
    return this.question.valid && this.answer.valid
  }
}

