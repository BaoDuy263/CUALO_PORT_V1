import { Container, ContainerActive, ContainerCreate, ContImage, ContImagesDowload } from './../../Model/Container';
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
    return this.httpService.getRequest(`Containerv2?page=${page}&Keyword=${searchText}&pageSize=${numberDis}`)
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
  ContImagesEmptryGetList(code: string, AreaCode: string, dateFrom: string, dateTo: string , status: number) {
    console.log(AreaCode +'----------------');
    let dateFrom_= dateFrom;
    let dateTo_= dateTo;
    // console.log(dateFrom_);
    // console.log('------');
    // console.log(dateTo_);
    return this.httpService.getRequest(`Container/containers-images-empty?Page=1&PageSize=1000&AreaCode=${AreaCode}&Keyword=${code}&StartDate=${dateFrom_}&EndDate=${dateTo_}&Status=${status}`)
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

  ImagesDowload(data: any) {
    return this.httpService.postRequest(`ContImages/CreateZip`, data);
  }


  getContActivity(item: string) {
    // return this.httpService.getRequest("/MapContYard3/GetContSelected/")
    return this.httpService.getRequest(`MapContYard3/GetContSelected/${item}`);
  }

  getHistory(item: any) {
    return this.httpService.getRequest(`ContHistory?page=${item.Page}&Keyword=${item.Keyword}&pageSize=${item.pageSize}`);
  }

  getImages(item: any) {
    return this.httpService.getRequest(`ContImages?page=${item.Page}&Keyword=${item.Keyword}&pageSize=${item.pageSize}`);
  }

  moveCont(item: any) {
    return this.httpService.putRequest("MapContYard3/UpdateMoveCont", item)
  }
}
