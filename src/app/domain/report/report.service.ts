import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiPathUtil} from "../api/ApiPathUtil";
import {ReportSaveDto} from "./dto/ReportSaveDto";
import {ReportApi} from "./ReportApi";
import {ReportUpdateDto} from "./dto/ReportUpdateDto";
import {Report} from "./Report";


@Injectable({
  providedIn:'root'
})
export class ReportService{

  private api = ReportApi
  constructor(
    protected httpClient:HttpClient
  ){

  }

  public save(saveDto:ReportSaveDto):Observable<any>{
    return this.httpClient.post(this.api.save,saveDto)
  }

  public update(updateDto:ReportUpdateDto):Observable<any>{
    return this.httpClient.put(this.api.update,updateDto)
  }

  public deleteById(id:string):Observable<any>{
    return this.httpClient.delete(ApiPathUtil.insertId(this.api.deleteById, id)
    )
  }

  public getUserReports():Observable<Report[]>{
    return this.httpClient.get<Report[]>(
        this.api.getUserReports
    )
  }
  public getById(id: number):Observable<Report>{
    return this.httpClient.get<Report>(
        ApiPathUtil.insertId(this.api.getById, id.toString())
    )
  }

  // public getPaginated(pageRequestDto: PageRequestDto): Observable<StandardPage> {
  //   console.log(encodeURIComponent(JSON.stringify(pageRequestDto)))
  //   return this.httpClient.get<StandardPage>(this.api.getPaginated, {
  //     params: {
  //       pageRequestDto : encodeURIComponent(JSON.stringify(pageRequestDto))
  //     }
  //   });
  // }
}
