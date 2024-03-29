import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StandardSaveDto} from "./dto/StandardSaveDto";
import {StandardApi} from "./StandardApi";
import {StandardUpdateDto} from "./dto/StandardUpdateDto";
import {ApiPathUtil} from "../api/ApiPathUtil";
import {Standard, StandardPage, StandardReports, StandardReportsPage} from "./Standard";
import {PageRequestDto} from "../api/PageRequestDto";


@Injectable({
  providedIn:'root'
})
export class StandardService{

  private api = StandardApi
  constructor(
    protected httpClient:HttpClient
  ){

  }

  public save(saveDto:StandardSaveDto):Observable<any>{
    return this.httpClient.post(this.api.save,saveDto)
  }

  public update(updateDto:StandardUpdateDto):Observable<any>{
    return this.httpClient.put(this.api.update,updateDto)
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(this.api.deleteById, id)
    )
  }

  public getAll():Observable<Standard[]>{
    return this.httpClient.get<Standard[]>(
        this.api.getAll
    )
  }
  public getById(id: number):Observable<Standard>{
    return this.httpClient.get<Standard>(
        ApiPathUtil.insertId(this.api.getById, id.toString())
    )
  }

  public getPaginated(pageRequestDto: PageRequestDto): Observable<StandardPage> {
    return this.httpClient.get<StandardPage>(this.api.getPaginated, {
      params: {
        pageRequestDto : encodeURIComponent(JSON.stringify(pageRequestDto))
      }
    });
  }

  public getPaginatedWithReports(pageRequestDto: PageRequestDto): Observable<StandardReportsPage> {
    return this.httpClient.get<StandardReportsPage>(this.api.getPaginatedWithReports, {
      params: {
        pageRequestDto : encodeURIComponent(JSON.stringify(pageRequestDto))
      }
    });
  }

  public getAllPublishedWithReports(): Observable<StandardReports[]>{
    return this.httpClient.get<StandardReports[]>(this.api.getAllPublishedWithReports)
  }
}
