import {Role} from "../role/Role";

export interface User {
  id:number
  name:string
  email:string
  roles:Array<Role>
}
