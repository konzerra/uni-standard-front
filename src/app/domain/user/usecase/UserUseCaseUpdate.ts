import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserApi} from "../UserApi";
import {Injectable} from "@angular/core";
import {UserUpdateDto} from "../_models/UserUpdateDto";
import {UserSelfUpdateDto} from "../../../user/profile/_models/UserUpdateDto";



@Injectable({
  providedIn: 'root'
})
export class UserUseCaseUpdate {
  constructor(
    private httpClient:HttpClient
  ) { }

  private requestHeader = new HttpHeaders({  })
  execute(updateDto:UserSelfUpdateDto){
    return this.httpClient.put(UserApi.update,updateDto, {
      headers: this.requestHeader,
    })
  }
}
