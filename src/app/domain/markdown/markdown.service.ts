import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {MarkdownApi} from "./MarkdownApi";
import {MarkdownPage} from "./MarkdownPage";
import {Markdown} from "./Markdown";
import {PageRequestDto} from "../api/PageRequestDto";
import {MarkdownSaveDto} from "./dto/MarkdownSaveDto";
import {MarkdownUpdateDto} from "./dto/MarkdownUpdateDto";
import {ApiPathUtil} from "../api/ApiPathUtil";

@Injectable({
  providedIn:"root"
})
export class MarkdownService {
  constructor(
    protected httpClient:HttpClient
  ){

  }

  public save(saveDto:MarkdownSaveDto, imageFile: File | null):Observable<any>{
    let formData = new FormData()
    if(imageFile == null) throw Error
    formData.set('saveDto' , new Blob([JSON.stringify(saveDto)],{
      type: "application/json"
    }))
    let image = new Blob([imageFile],  {type: imageFile.type})
    formData.append(
      "image",
      image,
      imageFile.name
    )
    return this.httpClient.post(MarkdownApi.save,formData)
  }

  public update(updateDto:MarkdownUpdateDto, imageFile: File | null):Observable<any>{
    let formData = new FormData()
    if(imageFile != null) {
      let image = new Blob([imageFile],  {type: imageFile.type})
      formData.append(
        "image",
        image,
        imageFile.name
      )
    }
    formData.set('updateDto' , new Blob([JSON.stringify(updateDto)],{
      type: "application/json"
    }))

    return this.httpClient.put(MarkdownApi.save,formData)
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(MarkdownApi.deleteById, id),
      {headers: new HttpHeaders()}
    )
  }

  public getById(id : string):Observable<Markdown>{
    return this.httpClient.get<Markdown>(
      ApiPathUtil.insertId(MarkdownApi.getById,id),
      { headers: new HttpHeaders()}
    )
  }
  public getAll():Observable<Markdown[]>{
    return this.httpClient.get<Markdown[]>(
      MarkdownApi.getAll,
      { headers: new HttpHeaders()}
    )
  }

  public getPaginated(pageRequestDto: PageRequestDto): Observable<MarkdownPage> {
    return this.httpClient.get<MarkdownPage>(MarkdownApi.getPaginated, {
      params: {
        pageRequestDto : encodeURIComponent(JSON.stringify(pageRequestDto))
      }
    });
  }


}
