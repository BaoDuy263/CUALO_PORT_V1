import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { lstVehicle,VehicleCreate,Vehicle,VehicleEdit } from '../../Model/Vehicle'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpService: CommonserviceService) { }


  Paging(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('Vehicle' +'?page='+ page + '&Keyword='+ searchText + '&pageSize='+ numberDis)
      .pipe(map((data : lstVehicle) => {
          return data;
      }))
  }

  Insert(VehicleCreate: VehicleCreate) {
    return this.httpService.postRequest('Vehicle/Create',VehicleCreate)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  GetDetail(id: number) {
    return this.httpService.getRequest('Vehicle/GetDetail?id='+id)
      .pipe(map((data:Vehicle ) => {
          return data;
      }))
  }

  Update(VehicleEdit : VehicleEdit)
  {
    return this.httpService.putRequest('Vehicle/Update',VehicleEdit)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('Vehicle/Delete?id='+id)
      .pipe(map((data:any ) => {
          return data;
      }))
  }

  GetAllEmpty(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('Vehicle/getAllEmpty' +'?page='+ page + '&Keyword='+ searchText + '&pageSize='+ numberDis)
      .pipe(map((data : lstVehicle) => {
          return data;
      }))
  }

}
