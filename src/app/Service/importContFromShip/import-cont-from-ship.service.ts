import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { map, of,Observable } from 'rxjs';
import { BayPlanPaging,BayPlanCreate,BayPlanUpdate } from '../../Model/BayPlanDetail';

@Injectable({
  providedIn: 'root'
})
export class ImportContFromShipService {

  constructor(private httpService: CommonserviceService) { }

  Upload(BayPlan: any) {
    return this.httpService.uploadRequest('BayPlan/Upload',BayPlan)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  Paging(data : BayPlanPaging) {
    return this.httpService.postRequest('Bayplan/Paging', data);
  }

  Insert(data: BayPlanCreate ){
    return this.httpService.postRequest('Bayplan/Create',data);
  }

  Update(data : BayPlanUpdate){
    return this.httpService.putRequest('Bayplan/Update',data);
  }

  getDetail(id: number){
    return this.httpService.getRequest('Bayplan/GetDetail/' + id );
  }

  Delete(id: number){
    return this.httpService.deleteRequest('Bayplan/Delete?Id='+id);
  }
}


