import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { BayPlanPaging,BayPlanCreate,BayPlanUpdate, PortToShipPaging, PortToShipCreate, PortToShipUpdate } from '../../Model/BayPlanDetail';

@Injectable({
  providedIn: 'root'
})
export class PerformService {

  constructor(private httpService: CommonserviceService) { }

  PagingShipToPort(data : BayPlanPaging) {
    return this.httpService.postRequest('PerformShiptoPort/Paging', data);
  }


  PagingPorttoShip(data : PortToShipPaging) {
    return this.httpService.postRequest('PerformPorttoShip/Paging', data);
  }
}
