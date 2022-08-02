import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BookingCustomerCreate, BookingCustomerEdit } from 'src/app/Model/Booking-customer';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private httpService: CommonserviceService) { }


  Paging(page: number, searchText: string, numberDis: number) {
    return this.httpService.getRequest('BookingDetail' + '?page=' + page + '&Keyword=' + searchText + '&pageSize=' + numberDis)
  }

  Insert(data: BookingCustomerCreate) {
    return this.httpService.postRequest("BookingDetail/Create", data);
  }

  Detail(id: number) {
    return this.httpService.getRequest("BookingDetail/GetDetail?id=" + id)
  }

  Update(data: BookingCustomerEdit) {
    return this.httpService.putRequest("BookingDetail/Update", data);
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('BookingDetail/Delete?id=' + id);
  }

  CreateBookings(data: any) {
    return this.httpService.postRequest("BookingDetail/Upload/packing-withraw", data);
  }

}
