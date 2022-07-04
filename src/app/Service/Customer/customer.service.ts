import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { lstCutomer,CustomerCreate,Customer,CustomerEdit } from '../../Model/Customer'
import { map, of,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpService: CommonserviceService) { }


  Paging(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('Customer' +'?page='+ page + '&Keyword='+ searchText + '&pageSize='+ numberDis)
      .pipe(map((data : lstCutomer) => {
          return data;
      }))
  }

  Insert(CustomerCreate: CustomerCreate) {
    return this.httpService.postRequest('Customer/Create',CustomerCreate)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  GetDetail(id: number) {
    return this.httpService.getRequest('Customer/GetDetail?id='+id)
      .pipe(map((data:Customer ) => {
          return data;
      }))
  }

  Update(CustomerEdit : CustomerEdit)
  {
    return this.httpService.putRequest('Customer/Update',CustomerEdit)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('Customer/Delete?customerId='+id)
      .pipe(map((data:any ) => {
          return data;
      }))
  }

}
