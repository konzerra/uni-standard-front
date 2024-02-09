
import {FormControl, Validators} from "@angular/forms";
import {TipSaveDto} from "../../../domain/tip/dto/TipSaveDto";


export class TipSaveForm {
  question = new FormControl<string | null>(null, [Validators.required])
  answer = new FormControl<string | null>(null, [Validators.required])

  getDto():TipSaveDto{
    return {
      question: this.question.value || "",
      answer: this.answer.value || "",
    }
  }
  valid(): boolean {
    return this.question.valid && this.answer.valid
  }
}

