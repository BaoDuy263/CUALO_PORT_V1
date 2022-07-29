import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BookingCustomer, BookingCustomerCreate,BookingCustomerEdit } from 'src/app/Model/Booking-customer';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private httpService: CommonserviceService) { }


  Paging(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('BookingPacking' +'?page='+ page + '&Keyword='+ searchText + '&pageSize='+ numberDis)
  }

  Insert(data : BookingCustomerCreate) {
    return this.httpService.postRequest("BookingPacking/Create",data);
  }

  Detail(id: number)
  {
    return this.httpService.getRequest("BookingPacking/GetDetail?id="+id)
  }

  Update(data : BookingCustomerEdit)
  {
    return this.httpService.putRequest("BookingPacking/Update" , data);
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('BookingPacking/Delete?id='+id);
  }

  CreateBookings(data: any) {
    return this.httpService.createBookings('BookingPacking/UploadJson', data)
  }

}
