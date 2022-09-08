import { Container, ContainerActive, ContainerCreate, ContImage } from './../../Model/Container';
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
  ContImagesEmptryGetList(code: string) {
    return this.httpService.getRequest("Container/containers-images-empty?Page=1&PageSize=1000")
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
  ContainerImageEdit(data: ContainerActive) {
    console.log(data);
    return this.httpService.postRequest("Container/containers-images-edit", data)
  }


}
