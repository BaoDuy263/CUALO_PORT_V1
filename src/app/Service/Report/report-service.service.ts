import { Injectable } from '@angular/core';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  constructor(private httpService: CommonserviceService) { }


  GetIndexReport(data: any) {
    return this.httpService.postRequest(`Report/DayliIndex`,data);
  }

  ExportReport(data: any) {
    return this.httpService.DowloadPostRequest(`Report/DayliReport`,data);
  }

  GetIndexBaocaoHangTon(data: any){
    return this.httpService.postRequest(`Report/BaocaoHangTonIndex`,data);
  }


  ExportBaoCaoTon(data: any) {
    return this.httpService.DowloadPostRequest(`Report/BaoCaoHangTon`,data);
  }

}
