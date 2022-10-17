import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { BayPlanPaging,BayPlanCreate,BayPlanUpdate, PortToShipPaging, PortToShipCreate, PortToShipUpdate } from '../../Model/BayPlanDetail';
import { BookingPlanPaging } from 'src/app/Model/BookingPlan';
import { map } from 'rxjs';
import { Item } from 'src/app/Model/multidropdown';

@Injectable({
  providedIn: 'root'
})
export class ImportContFromShipService {

  constructor(private httpService: CommonserviceService) { }

  bulkAction(data: string){
    return this.httpService.getRequest('PlanExportFromPorttoShip/bulkAction/' + data);
  }

  bulkActionImport(data: string){
    return this.httpService.getRequest('PlanImportFromShiptoPort/bulkActionImport/' + data);
  }

  // From Ship to port

  DowloadTemplatePort() {
    return this.httpService.DowloadRequest('PlanImportFromShiptoPort/DowloadTemplate');
  }

  DownLoadFileShiptoPort(path: string) {
    return this.httpService.DowloadRequest('PlanImportFromShiptoPort/DownLoadFile/' + path);
  }


 

  UploadShiptoPort(file: any)
  {
    return this.httpService.uploadRequest('PlanImportFromShiptoPort/UploadShiptoPort', file);
  }

  ImportFromShiptoPort(BayPlan: any) {
    return this.httpService.uploadRequest('PlanImportFromShiptoPort/ImportFromShoptoPort',BayPlan)
  }


  Paging(data : BayPlanPaging) {
    return this.httpService.postRequest('PlanImportFromShiptoPort/Paging', data);
  }

  PagingPortShip(data : BookingPlanPaging) {
    return this.httpService.postRequest('Booking/Paging', data);
  }

  Insert(data: BayPlanCreate ){
    return this.httpService.postRequest('PlanImportFromShiptoPort/Create',data);
  }

  Update(data : BayPlanUpdate){
    return this.httpService.putRequest('PlanImportFromShiptoPort/Update',data);
  }

  getDetail(contNo: string){
    return this.httpService.getRequest('PlanImportFromShiptoPort/GetDetail/' + contNo);
  }

  Delete(id: number){
    return this.httpService.deleteRequest('PlanImportFromShiptoPort/Delete?Id=' + id);
  }

  //From port to ship

  
  DownLoadFile(path: string) {
    return this.httpService.DowloadRequest('PlanExportFromPorttoShip/DownLoadFile/' + path);
  }
  
  UploadPorttoShip(file: any)
  {
    return this.httpService.uploadRequest('PlanExportFromPorttoShip/UploadPorttoShip', file);
  }

  
  ImportPorttoShip(file: any) {
    return this.httpService.uploadRequest('PlanExportFromPorttoShip/ImportPorttoShip',file);
  }

  
  ImportPorttoShipTH(file: any) {
    return this.httpService.uploadRequest('PlanExportFromPorttoShip/ImportPorttoShipTH',file);
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

  GetLocationFree(){
    return this.httpService.getRequest('MapContYard3/GetLocationFree');
  }

  GetLocationSelect(){
    return this.httpService.getRequest('MapContYard3/GetLocationFree')
    .pipe(map((data : any) => {
      return data.map((i : any) => ({
        id: i.id,
        name: i.positionLabel
      } as Item)) as Item[];
    }))
  }

  ImportAndUpdate(data : BayPlanUpdate){
    return this.httpService.putRequest('PlanImportFromShiptoPort/ImportAndUpdate',data);
  }
}


