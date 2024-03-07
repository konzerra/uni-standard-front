
export interface UserUpdateDto {
  id: number
  name:string
  email:string,
  password:string | null
  roles: Array<string>
}
