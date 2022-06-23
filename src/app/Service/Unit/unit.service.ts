import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import {UnitCreate,Unit,UnitEdit } from '../../Model/Unit'
import { map } from 'rxjs';
// import { lstUnit } from 'src/app/Model/Unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private httpService: CommonserviceService) { }


  Paging() {
    return this.httpService.getRequest('Unit/GetProductUnit')
      .pipe(map((data) => {
          return data;
      }))
  }

  Insert(UnitCreate: UnitCreate) {
    return this.httpService.postRequest('Unit/Create',UnitCreate)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  GetDetail(id: number) {
    return this.httpService.getRequest('Unit/GetDetail?id='+id)
      .pipe(map((data:Unit ) => {
          return data;
      }))
  }

  Update(UnitEdit : UnitEdit)
  {
    return this.httpService.putRequest('Unit/Update',UnitEdit)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('Unit/Delete?id='+id)
      .pipe(map((data:any ) => {
          return data;
      }))
  }

}
