import { Injectable } from '@angular/core';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class Containerv2Service {

  constructor(private httpService: CommonserviceService) { }

  Paging(page: number, searchText: string, numberDis: number, startDate: string, endDate: string) {
    return this.httpService.getRequest(`containerv2?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&startDate=${startDate}&endDate=${endDate}`)
  }

  GetAllPlan(page: number, searchText: string, numberDis: number, date: string) {
    return this.httpService.getRequest(`containerv2/step/0?page=${page}&Keyword=${searchText}&pageSize=${numberDis}`)
  }

  GetDetail(contNo: string) {
    return this.httpService.getRequest(`containerv2/${contNo}`);
  }

  Delete(contNo: string) {
    return this.httpService.deleteRequest(`containerv2/${contNo}`);
  }

  CreateCont(data: any) {
    return this.httpService.postRequest(`containerv2`, data);
  }

  UpdateCont(contNo: string, data: any) {
    return this.httpService.putRequest(`containerv2/${contNo}`, data);
  }

  GetAllContImp(page: number, searchText: string, numberDis: number, startDate: string, endDate: string) {
    return this.httpService.getRequest(`containerv2/getAllImp?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&startDate=${startDate}&endDate=${endDate}`)
  }

  GetContProviding(page: number, searchText: string, numberDis: number, startDate: string, endDate: string) {
    return this.httpService.getRequest(`containerv2/getAllProviding?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&startDate=${startDate}&endDate=${endDate}`)
  }

  GetAllContEmpt(page: number, searchText: string, numberDis: number, startDate: string, endDate: string) {
    return this.httpService.getRequest(`containerv2/getallempty?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&startDate=${startDate}&endDate=${endDate}`)
  }

  GetLstContInMap(){
    return this.httpService.getRequest('MapContYard3/GetlstEdit');
  }

}
