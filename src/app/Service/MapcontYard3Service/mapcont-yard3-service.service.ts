import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { map, of,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapcontYard3Service_ {

  constructor(
    private httpServiceMobile: CommonserviceService,
  ) { }


  getMap(_data: any) {
    return this.httpServiceMobile.postRequestMobile('MapContYard3/GetDataPagedList', _data)
    .pipe(map((data: any) => {
      return data;
    }))
  }
  MoveLocalCont(_data: any) {
    return this.httpServiceMobile.putRequest('MapContYard3/UpdateMoveCont', _data)
    .pipe(map((data: any) => {
      return data;
    }))
  }
}
