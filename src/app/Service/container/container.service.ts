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

}
