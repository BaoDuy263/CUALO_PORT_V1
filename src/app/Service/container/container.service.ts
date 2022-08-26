import { Container, ContainerCreate } from './../../Model/Container';
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

  GetAllContEmpt(page: number, searchText: string, numberDis: number) {
    return this.httpService.getRequest(`Container/containers-empty?page=${page}&Keyword=${searchText}&pageSize=${numberDis}`)
  }

}
