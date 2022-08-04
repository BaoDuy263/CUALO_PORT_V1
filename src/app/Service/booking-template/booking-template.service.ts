import { BookingTemplateCreate } from './../../Model/Booking-customer';
import { Injectable } from '@angular/core';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookingTemplateService {

  constructor(private httpService: CommonserviceService) { }

  Paging(page: number, searchText: string, numberDis: number) {
    return this.httpService.getRequest('Booking' + '?page=' + page + '&Keyword=' + searchText + '&pageSize=' + numberDis)
  }

  Insert(data: BookingTemplateCreate) {
    return this.httpService.postRequest("Booking/Create", data);
  }

  Detail(id: number) {
    return this.httpService.getRequest("Booking/GetDetail?id=" + id)
  }

  Update(data: BookingTemplateCreate) {
    return this.httpService.putRequest("Booking/Update", data);
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('Booking/Delete?id=' + id);
  }

  UploadFile(data: any) {
    return this.httpService.postRequest("Booking/template/Upload", data);
  }

  DownloadFile(data: any) {
    return this.httpService.postRequest("Booking/template/download", data);
  }
}
