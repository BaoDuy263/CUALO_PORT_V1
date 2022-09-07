import { Container, ContainerCreate, ContImage } from './../../Model/Container';
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

  GetAllContHistory(page: number, searchText: string, numberDis: number, startDate: string, endDate: string) {
    return this.httpService.getRequest(`contHistory?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&startDate=${startDate}&endDate=${endDate}`)
  }

  GetAllContImages(page: number, searchText: string, numberDis: number, startDate: string, endDate: string) {
    return this.httpService.getRequest(`contImages?page=${page}&Keyword=${searchText}&pageSize=${numberDis}&startDate=${startDate}&endDate=${endDate}`)
  }

  UpdateContImages(data: ContImage) {
    return this.httpService.postRequest(`contImages/Update`, data);
  }

  GetDetailContImage(id: number) {
    return this.httpService.getRequest(`contImages/${id}`);
  }

}
