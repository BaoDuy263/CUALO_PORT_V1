import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BookingCustomerCreate,BookingCustomerEdit } from 'src/app/Model/Booking-customer';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private httpService: CommonserviceService) { }


  Paging(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('Booking' +'?page='+ page + '&Keyword='+ searchText + '&pageSize='+ numberDis)
  }

  Insert(data : BookingCustomerCreate) {
    return this.httpService.postRequest("Booking/Create",data);
  }

  Detail(id: number)
  {
    return this.httpService.getRequest("Booking/GetDetail?id="+id)
  }

  Update(data : BookingCustomerEdit)
  {
    return this.httpService.putRequest("Booking/Update" , data);
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('Booking/Delete?id='+id);
  }

}
