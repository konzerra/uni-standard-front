
import {FormControl, Validators} from "@angular/forms";
import {UserSaveDto} from "../../../domain/user/_models/UserSaveDto";
import {WordCountValidators} from "../../../utils/WordValidators";


export class UserSaveForm {
  name: FormControl =  new FormControl("", [Validators.required, WordCountValidators.min(2)])
  email: FormControl =  new FormControl("", Validators.email)
  password: FormControl<string | null> =  new FormControl("", [Validators.required, Validators.minLength(6)])

  getDto():UserSaveDto{
    return {
      name: this.name.value || "",
      email: this.email.value || "",
      password: this.password.value || ""
    }
  }
  valid(): boolean {
    return this.name.valid &&
      this.email.valid &&
      this.password.valid

  }
}

