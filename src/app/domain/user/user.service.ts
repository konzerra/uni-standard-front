import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../api/ApiPathUtil";
import {PageRequestDto} from "../api/PageRequestDto";
import {ModelPageI} from "../../_generic/ModelPageI";
import {UserApi} from "./UserApi";
import {UserSaveDto} from "./_models/UserSaveDto";
import {UserUpdateDto} from "./_models/UserUpdateDto";
import {User} from "./User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = UserApi
  constructor(
    protected httpClient:HttpClient
  ) { }
  public save(saveDto:UserSaveDto):Observable<any>{
    return this.httpClient.post(this.api.saveByAdmin,saveDto)
  }

  public update(updateDto:UserUpdateDto):Observable<any>{
    return this.httpClient.put(this.api.updateByAdmin,updateDto)
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(this.api.deleteById, id)
    )
  }


  public getById(id: number):Observable<User>{
    return this.httpClient.get<User>(
      ApiPathUtil.insertId(this.api.getById, id.toString())
    )
  }



  public getPaginated(pageRequestDto: PageRequestDto): Observable<ModelPageI<User>> {
    console.log(encodeURIComponent(JSON.stringify(pageRequestDto)))
    return this.httpClient.get<ModelPageI<User>>(this.api.getPaginated, {
      params: {
        pageRequestDto : encodeURIComponent(JSON.stringify(pageRequestDto))
      }
    });
  }
}
