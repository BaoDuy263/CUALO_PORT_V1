import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BookingCustomerCreate, BookingCustomerEdit } from 'src/app/Model/Booking-customer';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private httpService: CommonserviceService) { }


  Paging(page: number, searchText: string, numberDis: number, date: string) {
    if (date) {
      return this.httpService.getRequest(`PlanPacking?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&Date=${date}`)
    } else {
      return this.httpService.getRequest(`PlanPacking?page=${page}&Keyword=${searchText}&pageSize=${numberDis}`)
    }
  }

  Insert(data: BookingCustomerCreate) {
    return this.httpService.postRequest("PlanPacking", data);
  }

  Detail(id: number) {
    return this.httpService.getRequest("PlanPacking/" + id)
  }

  Update(data: BookingCustomerEdit) {
    return this.httpService.putRequest("PlanPacking/Update", data);
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('PlanPacking/' + id);
  }

  CreateBookings(data: any) {
    return this.httpService.postRequest("PlanPacking/Upload", data);
  }

  CreateActions(data: any) {
    return this.httpService.postRequest("PlanPacking/ContEmpt/Upload", data);
  }

  CreateEIRFromPlan(data: any) {
    return this.httpService.postRequest("PlanPacking/create-eir", data)
  }

  DownloadExport(){
    return this.httpService.downloadRequest("PlanPacking/template/download-export");
  }

  DownloadImport(){
    return this.httpService.downloadRequest("PlanPacking/template/download-import");
  }

  GetAllPerform(page: number, searchText: string, numberDis: number, date: string) {
    if (date) {
      return this.httpService.getRequest(`PlanPacking/perform?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&Date=${date}`)
    } else {
      return this.httpService.getRequest(`PlanPacking/perform?page=${page}&Keyword=${searchText}&pageSize=${numberDis}`)
    }
  }

  GetDetailPerform(id: number) {
    return this.httpService.getRequest("PlanPacking/perform/" + id)
  }

  DeletePerform(id: number) {
    return this.httpService.deleteRequest("PlanPacking/perform/" + id)
  }

  UpdatePerform(data: any) {
    return this.httpService.postRequest("PlanPacking/perform/Update", data);
  }

  GetAllPerformImport(page: number, searchText: string, numberDis: number, date: string) {
    if (date) {
      return this.httpService.getRequest(`PlanPacking/perform-import?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&Date=${date}`)
    } else {
      return this.httpService.getRequest(`PlanPacking/perform-import?page=${page}&Keyword=${searchText}&pageSize=${numberDis}`)
    }
  }

  PrintE(data: any) {
    return this.httpService.postRequest("PlanPacking/print", data);
  }

}
