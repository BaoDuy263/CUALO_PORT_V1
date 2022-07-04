import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
// import { lstBookingContEmpty,BookingContEmptyCreate,BookingContEmpty,BookingContEmptyEdit } from '../../Model/BookingContEmpty'
import { map } from 'rxjs';
import { BookingContEmtpy, BookingContEmtpyCreate, BookingContEmtpyEdit, lstBookingContEmtpy, } from 'src/app/Model/Booking-cont-empty';

@Injectable({
  providedIn: 'root'
})
export class BookingContEmptyService {

  constructor(private httpService: CommonserviceService) { }


  Paging(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('BookingContEEmpty' +'?page='+ page + '&Keyword='+ searchText + '&pageSize='+ numberDis)
      .pipe(map((data : lstBookingContEmtpy) => {
          return data;
      }))
  }

  Insert(BookingContEmptyCreate: BookingContEmtpyCreate) {
    console.log(BookingContEmptyCreate)
    return this.httpService.postRequest('BookingContEEmpty/Create',BookingContEmptyCreate)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  GetDetail(id: number) {
    return this.httpService.getRequest('BookingContEEmpty/GetDetail?id='+id)
      .pipe(map((data:BookingContEmtpy ) => {
          return data;
      }))
  }

  Update(BookingContEmptyEdit : BookingContEmtpyEdit)
  {
    return this.httpService.putRequest('BookingContEEmpty/Update',BookingContEmptyEdit)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('BookingContEEmpty/Delete?id='+id)
      .pipe(map((data:any ) => {
          return data;
      }))
  }
}
