import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import {UnitCreate,Unit,UnitEdit } from '../../Model/Unit'
import { map } from 'rxjs';
// import { lstUnit } from 'src/app/Model/Unit';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupService {

  constructor(private httpService: CommonserviceService) { }


  Paging(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('ProductGroup/GetProductGroup')
      .pipe(map((data) => {
          return data;
      }))
  }

  Insert(UnitCreate: UnitCreate) {
    return this.httpService.postRequest('ProductGroup/Create',UnitCreate)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  GetDetail(id: number) {
    return this.httpService.getRequest('ProductGroup/GetDetail?id='+id)
      .pipe(map((data:Unit ) => {
          return data;
      }))
  }

  Update(UnitEdit : UnitEdit)
  {
    return this.httpService.putRequest('ProductGroup/Update',UnitEdit)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('ProductGroup/Delete?id='+id)
      .pipe(map((data:any ) => {
          return data;
      }))
  }

}
