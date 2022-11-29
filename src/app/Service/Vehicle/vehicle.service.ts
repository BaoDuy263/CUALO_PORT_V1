import { Injectable } from '@angular/core';
import { CommonserviceService } from '../CommonService/commonservice.service';
import {
  lstVehicle,
  VehicleCreate,
  Vehicle,
  VehicleEdit,
} from '../../Model/Vehicle';
import { map } from 'rxjs';
import { stringify } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private httpService: CommonserviceService) {}

  Paging(page: number, searchText: string, numberDis: number) {
    return this.httpService
      .getRequest(
        'Vehicle' +
          '?page=' +
          page +
          '&Keyword=' +
          searchText +
          '&pageSize=' +
          numberDis
      )
      .pipe(
        map((data: lstVehicle) => {
          return data;
        })
      );
  }

  Insert(mVehicleCreate: VehicleCreate) {
    var _Input = {
        "licensePlates": mVehicleCreate.licensePlates,
        "rfidcode": mVehicleCreate.rfidcode == null ? '' : mVehicleCreate.rfidcode,
        "nameDriver": mVehicleCreate.nameDriver == null ? '' : mVehicleCreate.nameDriver,
        "customer": mVehicleCreate.customer == null ? '' : mVehicleCreate.customer,
        "phoneNumber": mVehicleCreate.phoneNumber == null ? '' : mVehicleCreate.phoneNumber,
        "tonnageDefault": mVehicleCreate.tonnageDefault == "" ? 0 : mVehicleCreate.tonnageDefault,
        "idCardNumber": mVehicleCreate.idCardNumber == null ? '' : mVehicleCreate.idCardNumber,
        "mediumUnladenWeight": mVehicleCreate.mediumUnladenWeight == "" ? 0 : mVehicleCreate.mediumUnladenWeight,
        "lastContainer": '',
        "type": mVehicleCreate.Type == null ? '0' : mVehicleCreate.Type,
    };
  //  console.log(JSON.stringify(_Input));
    // alert(JSON.stringify(_Input));
    return this.httpService.postRequest('Vehicle/Create', _Input).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  GetDetail(id: number) {
    return this.httpService.getRequest('Vehicle/GetDetail?id=' + id).pipe(
      map((data: Vehicle) => {
        return data;
      })
    );
  }

  Update(VehicleEdit: VehicleEdit) {
    var _Input = {
      id: VehicleEdit.id,
      licensePlates:
        VehicleEdit.licensePlates == null ? '' : VehicleEdit.licensePlates,
      rfidcode: VehicleEdit.rfidcode == null ? '' : VehicleEdit.rfidcode,
      nameDriver: VehicleEdit.nameDriver == null ? '' : VehicleEdit.nameDriver,
      tonnageDefault:
        VehicleEdit.tonnageDefault == null ? '0' : VehicleEdit.tonnageDefault,
      idCardNumber:
        VehicleEdit.idCardNumber == null ? '' : VehicleEdit.idCardNumber,
      mediumUnladenWeight:
        VehicleEdit.mediumUnladenWeight == null
          ? ''
          : VehicleEdit.mediumUnladenWeight,
      Cusstomer: VehicleEdit.customer == null ? '' : VehicleEdit.customer,
      Phone: VehicleEdit.Phone == null ? '' : VehicleEdit.Phone,
      Type: VehicleEdit.Type == null ? '' : VehicleEdit.Type,
    };
    console.log(JSON.stringify(_Input));
    return this.httpService.putRequest('Vehicle/Update', _Input).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('Vehicle/Delete?id=' + id).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  GetAllEmpty() {
    return this.httpService.getRequest('Vehicle/getAllEmpty').pipe(
      map((data: lstVehicle) => {
        return data;
      })
    );
  }

  GetByLicensePlates(licensePlates: string) {
    return this.httpService.getRequest(
      `Vehicle/getByLicensePlate?licensePlates=${licensePlates}`
    );
  }
}
