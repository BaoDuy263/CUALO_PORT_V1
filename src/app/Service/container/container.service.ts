import { Container, ContainerActive, ContainerCreate } from './../../Model/Container';
import { Injectable } from '@angular/core';
import { CommonserviceService } from '../CommonService/commonservice.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  private ContNo = new BehaviorSubject('');
  mContNoPass = this.ContNo.asObservable();

  GetConNo(ContNo: string) {
    this.ContNo.next(ContNo);

  }

  constructor(private httpService: CommonserviceService) { }

  Paging(page: number, searchText: string, numberDis: number) {
    return this.httpService.getRequest(`Container?page=${page}&Keyword=${searchText}&pageSize=${numberDis}`)
  }

  Insert(data: ContainerCreate) {
    return this.httpService.postRequest("Container", data);
  }

  Update(data: ContainerCreate) {
    return this.httpService.postRequest("Container/Update", data);
  }

  Detail(code: string) {
    return this.httpService.getRequest("Container", code)
  }

  MapYar3List() {
    return this.httpService.getRequest("Container/map-yard3-list")
  }

  MapYar3getInfo(code: string) {
    return this.httpService.getRequest("Container/map-yard3-get-info?ContNo="+code)
  }
  ContHistoryGetList(code: string) {
    return this.httpService.getRequest("Container/history-get-list?ContNo="+code)
  }
  ContImagesGetList(code: string) {
    return this.httpService.getRequest("Container/images-get-list?ContNo="+code)
  }
  ContImagesEmptryGetList(code: string, dateFrom: string, dateTo: string , status: number) {
    console.log(code);
    let dateFrom_= dateFrom;
    let dateTo_= dateTo;
    console.log(dateFrom_);
    console.log('------');
    console.log(dateTo_);
    return this.httpService.getRequest(`Container/containers-images-empty?Page=1&PageSize=1000&Keyword=${code}&StartDate=${dateFrom_}&EndDate=${dateTo_}&Status=${status}`)
  }

  GetAllContEmpt(page: number, searchText: string, numberDis: number) {
    return this.httpService.getRequest(`Container/containers-empty?page=${page}&Keyword=${searchText}&pageSize=${numberDis}`)
  }

  ContainerImageEdit(data: ContainerActive) {
    console.log(data);
    return this.httpService.postRequest("Container/containers-images-edit", data)
  }


}
