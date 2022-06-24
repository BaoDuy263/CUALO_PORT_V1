import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { map } from 'rxjs';
import { Setting, SettingEdit } from 'src/app/Model/Setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private httpService: CommonserviceService) { }


  // Paging() {
  //   return this.httpService.getRequest('Setting')
  //     .pipe(map((data : lstSetting) => {
  //         return data;
  //     }))
  // }



  GetDetail() {
    return this.httpService.getRequest('Setting')
      .pipe(map((data:Setting ) => {
          return data;
      }))
  }

  Update(SettingEdit : SettingEdit)
  {
    return this.httpService.putRequest('Setting/Update',SettingEdit)
      .pipe(map((data: any) => {
        return data;
      }))
  }


}
