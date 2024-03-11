
import {FormControl, Validators} from "@angular/forms";
import {UserSaveDto} from "../../../domain/user/_models/UserSaveDto";
import {WordCountValidators} from "../../../utils/WordValidators";
import {User} from "../../../domain/user/User";
import {UserUpdateDto} from "../../../domain/user/_models/UserUpdateDto";


export class UserUpdateForm {
  id: number = 0
  name: FormControl =  new FormControl("", [Validators.required, WordCountValidators.min(2)])
  email: FormControl =  new FormControl("", Validators.email)
  password: FormControl<string | null> =  new FormControl("", [Validators.minLength(6)])
  roles = new FormControl<Array<string>>(['Extra cheese', 'Mushroom']);
  availableRoles: string[] = ['User', 'Admin', 'DataAccess'];

  getDto():UserUpdateDto{
    return {
      id: this.id,
      name: this.name.value || "",
      email: this.email.value || "",
      // Check if password is null, empty, or blank, then send null, otherwise send the value
      password: this.password.value && this.password.value.trim() ? this.password.value : null,
      roles: this.roles.value || ['User']
    }
  }
  setDto(user: User){
    this.id = user.id
    this.name.setValue(user.name)
    this.email.setValue(user.email)
    this.roles.setValue(user.roles.map((role)=>role.name))
  }
  valid(): boolean {
    return this.name.valid &&
      this.email.valid &&
      this.password.valid &&
      this.roles.valid

  }
}

