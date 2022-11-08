import { Injectable } from '@angular/core';
import { PlanPaging } from 'src/app/Model/BayPlan';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
@Injectable({
  providedIn: 'root'
})
export class BayplanserviceService {

  constructor(private httpService: CommonserviceService) { }

  DowloadTemplate() {
    return this.httpService.DowloadRequest('BayPlan/DowloadTemplate');
  }

  Import(BayPlan: any) {
    return this.httpService.uploadRequest('BayPlan/Import',BayPlan)
  }

  Paging(data : PlanPaging) {
    return this.httpService.postRequest('BayPlan/Paging', data);
  }
} 

