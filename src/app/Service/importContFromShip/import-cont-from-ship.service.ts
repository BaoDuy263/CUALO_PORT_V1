import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { map, of,Observable } from 'rxjs';


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
}


