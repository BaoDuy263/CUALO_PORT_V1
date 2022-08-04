import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { map, of,Observable } from 'rxjs';
import { BayPlanPaging,BayPlanCreate,BayPlanUpdate, PortToShipPaging, PortToShipCreate, PortToShipUpdate } from '../../Model/BayPlanDetail';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';

@Injectable({
  providedIn: 'root'
})
export class ImportContFromShipService {

  constructor(private httpService: CommonserviceService) { }



  // From Ship to port

  DowloadTemplatePort() {
    return this.httpService.DowloadRequest('PlanImportFromShiptoPort/DowloadTemplate');
  }

  ImportFromShoptoPort(BayPlan: any) {
    return this.httpService.uploadRequest('PlanImportFromShiptoPort/ImportFromShoptoPort',BayPlan)
  }


  Paging(data : BayPlanPaging) {
    return this.httpService.postRequest('PlanImportFromShiptoPort/Paging', data);
  }

  Insert(data: BayPlanCreate ){
    return this.httpService.postRequest('PlanImportFromShiptoPort/Create',data);
  }

  Update(data : BayPlanUpdate){
    return this.httpService.putRequest('PlanImportFromShiptoPort/Update',data);
  }

  getDetail(id: number){
    return this.httpService.getRequest('PlanImportFromShiptoPort/GetDetail/' + id );
  }

  Delete(id: number){
    return this.httpService.deleteRequest('PlanImportFromShiptoPort/Delete?Id='+id);
  }

  //From port to ship

  
  ImportPorttoShip(file: any) {
    
    return this.httpService.uploadRequest('PlanExportFromPorttoShip/ImportPorttoShip',file);
  }

  DowloadTemplate() {
    return this.httpService.DowloadRequest('PlanExportFromPorttoShip/DowloadTemplate');
  }

  PagingPorttoShip(data : PortToShipPaging) {
    return this.httpService.postRequest('PlanExportFromPorttoShip/Paging', data);
  }

  InsertPorttoShip(data: PortToShipCreate) {
    return this.httpService.postRequest('PlanExportFromPorttoShip/CreatePortToShip',data);
  }

  GetPorttoShip(id: number){
    return this.httpService.getRequest('PlanExportFromPorttoShip/GetPortToShip/' + id)
  }

  UpdatePorttoShip(data: PortToShipUpdate) {
    return this.httpService.putRequest('PlanExportFromPorttoShip/UpdatePorttoShip', data);
  }

  DeletePorttoShip(id: number){
    return this.httpService.deleteRequest('PlanExportFromPorttoShip/Delete?Id='+id);
  }
}


