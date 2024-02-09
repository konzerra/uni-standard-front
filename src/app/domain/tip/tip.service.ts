import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiPathUtil} from "../api/ApiPathUtil";
import {HttpClient} from "@angular/common/http";
import {TipApi} from "./TipApi";
import {TipSaveDto} from "./dto/TipSaveDto";
import {TipUpdateDto} from "./dto/TipUpdateDto";
import {Tip} from "./Tip";
import {PageRequestDto} from "../api/PageRequestDto";
import {ModelPageI} from "../../_generic/ModelPageI";

@Injectable({
  providedIn: 'root'
})
export class TipService {

  private api = TipApi
  constructor(
    protected httpClient:HttpClient
  ) { }
  public save(saveDto:TipSaveDto):Observable<any>{
    return this.httpClient.post(this.api.save,saveDto)
  }

  public update(updateDto:TipUpdateDto):Observable<any>{
    return this.httpClient.put(this.api.update,updateDto)
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(this.api.deleteById, id)
    )
  }


  public getById(id: number):Observable<Tip>{
    return this.httpClient.get<Tip>(
      ApiPathUtil.insertId(this.api.getById, id.toString())
    )
  }

  public getAll():Observable<Tip[]>{
    return this.httpClient.get<Tip[]>(
      this.api.getAll
    )
  }

  public getPaginated(pageRequestDto: PageRequestDto): Observable<ModelPageI<Tip>> {
    console.log(encodeURIComponent(JSON.stringify(pageRequestDto)))
    return this.httpClient.get<ModelPageI<Tip>>(this.api.getPaginated, {
      params: {
        pageRequestDto : encodeURIComponent(JSON.stringify(pageRequestDto))
      }
    });
  }
}
