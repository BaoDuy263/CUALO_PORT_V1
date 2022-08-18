import { Container, ContainerCreate } from './../../Model/Container';
import { Injectable } from '@angular/core';
import { CommonserviceService } from '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

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

  GetAllContEmpt(page: number, searchText: string, numberDis: number) {
    return this.httpService.getRequest(`Container/containers-empty?page=${page}&Keyword=${searchText}&pageSize=${numberDis}`)
  }

}
