import { Injectable } from '@angular/core';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpService: CommonserviceService) {
  }

  GetAllTransByStep(page: number, searchText: string, numberDis: number, startDate: string, endDate: string) {
    return this.httpService.getRequest(`transactioneir?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&startDate=${startDate}&endDate=${endDate}`)
  }

  GetAllTrans(page: number, searchText: string, numberDis: number, startDate: string, endDate: string) {
    return this.httpService.getRequest(`transactioneir/getall?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&startDate=${startDate}&endDate=${endDate}`)
  }

  GetDetailTrans(id: number) {
    return this.httpService.getRequest(`transactioneir/${id}`);
  }

  CreateTrans(data: any) {
    return this.httpService.postRequest(`transactioneir`, data);
  }

  UpdateTrans(id: number, data: any) {
    return this.httpService.putRequest(`transactioneir/${id}`, data);
  }

  Delete(id: number) {
    return this.httpService.deleteRequest(`transactioneir/${id}`)
  }

  SaveTransaction(data: any) {
    console.log('data',data);
    return this.httpService.postRequest(`transactioneir/saveTransaction`, data)
  }
}
