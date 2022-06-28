import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { map } from 'rxjs';
import { BookingImportContServiceCreate, BookingImportContServiceEdit, lstBookingImportContService } from 'src/app/Model/Booking-import-cont';

@Injectable({
  providedIn: 'root'
})
export class BookingImportContService {

  constructor(private httpService: CommonserviceService) { }


  Paging(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('BookingImportContainer' +'?page='+ page + '&Keyword='+ searchText + '&pageSize='+ numberDis)
      .pipe(map((data : lstBookingImportContService) => {
          return data;
      }))
  }

  Insert(BookingContEmptyCreate: BookingImportContServiceCreate) {
    console.log(BookingContEmptyCreate)
    return this.httpService.postRequest('BookingImportContainer/Create',BookingContEmptyCreate)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  GetDetail(id: number) {
    return this.httpService.getRequest('BookingImportContainer/GetDetail?id='+id)
      .pipe(map((data:BookingImportContService ) => {
          return data;
      }))
  }

  Update(BookingContEmptyEdit : BookingImportContServiceEdit)
  {
    return this.httpService.putRequest('BookingImportContainer/Update',BookingContEmptyEdit)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('BookingImportContainer/Delete?id='+id)
      .pipe(map((data:any ) => {
          return data;
      }))
  }
}
