import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportContFromPortComponent } from "../import-cont-from-port/import-cont-from-port.component" 
import { ImportContFromShipService } from '../../../../Service/importContFromShip/import-cont-from-ship.service'
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom';
import { PortToShipIndex, PortToShipPaging } from 'src/app/Model/BayPlanDetail';
import { BookingPlanPaging,BookingPlanIndex } from '../../../../Model/BookingPlan'
import { Pagination } from 'src/app/Model/Table';
import { CreateImportContFromPortComponent } from '../create-import-cont-from-port/create-import-cont-from-port.component'
import { DeleteImportContFromPortComponent } from '../delete-import-cont-from-port/delete-import-cont-from-port.component'
import { PerformService } from 'src/app/Service/Perform/perform.service';
import { ExportContainerComponent } from '../export-container/export-container.component';
@Component({
  selector: 'app-index-import-cont-from-port',
  templateUrl: './index-import-cont-from-port.component.html',
  styleUrls: ['./index-import-cont-from-port.component.css']
})
export class IndexImportContFromPortComponent implements OnInit {

  loadding: boolean = false;
  isCreate: boolean = true;
  Id: number = 0;

  //Tab Booking
  PageInfoBooking : BookingPlanPaging = {
    Page: 1,
    PageSize: 10,
    FileName : '',
    BookingType : 3,
    FromDate : undefined,
    ToDate : undefined
  } 

  lstdataBooking : BookingPlanIndex = {
    currentPage : 0,
    pageSize: 0,
    totalPage : 0,
    totalRecord : 0,
    data : []
  }

  PaginationBooking : Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }

  //
  //Tab Kế hoạch
  PageInfo : PortToShipPaging = {
    Page: 1,
    PageSize: 10,
    Voyace : '',
    ContNo: '',
    FromDate: undefined,
    ToDate : undefined
  }

  lstdata : PortToShipIndex = {
    currentPage : 0,
    pageSize: 0,
    totalPage : 0,
    totalRecord : 0,
    data : []
  }
  
  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }

  lstCheckAction : Array<number> = [];
  //
  //Tab thực hiện
  PageInfoTH : PortToShipPaging = {
    Page: 1,
    PageSize: 10,
    Voyace : '',
    ContNo: '',
    FromDate: undefined,
    ToDate : undefined
  }

  lstdataTH : PortToShipIndex = {
    currentPage : 0,
    pageSize: 0,
    totalPage : 0,
    totalRecord : 0,
    data : []
  }
  
  PaginationTH: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }
  //
 
  constructor(public dialog: MatDialog,private service : ImportContFromShipService,private toastr: ToastrcustomService,private serviceTH : PerformService) { }

  ngOnInit(): void {
    this.Paging();
    this.PagingBooking();
    this.PagingTH();
  }

  Paging() {
    this.PageInfo.FromDate?.toString() == "" ? this.PageInfo.FromDate = undefined : this.PageInfo.FromDate;
    this.PageInfo.ToDate?.toString() == "" ? this.PageInfo.ToDate = undefined : this.PageInfo.ToDate;
    this.service.PagingPorttoShip(this.PageInfo).subscribe(
      data => {
        this.loadding = false;
          this.lstdata = data.data;
            this.Pagination.currentPage = data.data.currentPage,
            this.Pagination.pageSize = data.data.pageSize,
            this.Pagination.totalPage = data.data.totalPage,
            this.Pagination.totalRecord = data.data.totalRecord
      });
  }

  PagingBooking() {
    this.service.PagingPortShip(this.PageInfoBooking).subscribe(
      data => {
        this.loadding = false;
        this.lstdataBooking = data.data;
        this.PaginationBooking.currentPage = data.data.currentPage,
        this.PaginationBooking.pageSize = data.data.pageSize,
        this.PaginationBooking.totalPage = data.data.totalPage,
        this.PaginationBooking.totalRecord = data.data.totalRecord
      }
    )
  }

  PagingTH() {
    this.serviceTH.PagingPorttoShip(this.PageInfoTH).subscribe(
      data => {
        this.loadding = false;
          this.lstdataTH = data.data;
            this.PaginationTH.currentPage = data.data.currentPage,
            this.PaginationTH.pageSize = data.data.pageSize,
            this.PaginationTH.totalPage = data.data.totalPage,
            this.PaginationTH.totalRecord = data.data.totalRecord
      });
  }

  onChangePageTH(pageOfItems: any){
    this.PageInfoTH.Page = pageOfItems.page;
    this.PageInfoTH.PageSize = pageOfItems.pageSize;
    this.PagingTH();
  }

  onChangePage(pageOfItems: any) {
    this.PageInfo.Page = pageOfItems.page;
    this.PageInfo.PageSize = pageOfItems.pageSize;
    this.Paging()
  }

  onSearchVoyace(e: any) {
    this.PageInfo.Voyace = e;
    this.PageInfo.Page = 1;
    this.Paging();
  }

  onSearchContainer(e: any) {
    this.PageInfo.ContNo = e;
    this.PageInfo.Page = 1;
    this.Paging();
  }

  onSearchFromDate(e: any) {
    this.PageInfo.FromDate = e;
    this.PageInfo.Page = 1;
    this.Paging();
  }

  onSearchToDate(e: any) {
    this.PageInfo.ToDate = e;
    this.PageInfo.Page = 1;
    this.Paging();
  }

  onSearchFileName(e: any) {
    this.PageInfoBooking.FileName = e;
    this.PageInfoBooking.Page = 1;
    this.PagingBooking();
  }

  onSearchBookingFromDate(e: any) {
    this.PageInfoBooking.FromDate = e;
    this.PageInfoBooking.Page = 1;
    this.PagingBooking();
  }

  onSearchBookingToDate(e: any) {
    this.PageInfoBooking.ToDate = e;
    this.PageInfoBooking.Page = 1;
    this.PagingBooking();
  }

  openImportTH() {
    const dialogRef =this.dialog.open(ImportContFromPortComponent);
    dialogRef.componentInstance.isImportKH = false;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Paging();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  ExportCont(Id: number) {
    const dialogRef =this.dialog.open(ExportContainerComponent);
    dialogRef.componentInstance.Id = Id;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Paging();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  openImport() {
    const dialogRef = this.dialog.open(ImportContFromPortComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Paging();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  openCreate(){
    const dialogRef = this.dialog.open(CreateImportContFromPortComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Paging();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  openEdit(id: number){
    this.isCreate = false;
    const dialogRef = this.dialog.open(CreateImportContFromPortComponent);
    dialogRef.componentInstance.Id = id;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Paging();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
     });
  }

  DowloadTemplate() {
    this.service.DowloadTemplate().subscribe(data => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  DowloadFile(path: string){
    this.service.DownLoadFile(path).subscribe(data => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    })
  }

  openDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteImportContFromPortComponent);
    dialogRef.componentInstance.Id = id;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Paging();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  addAction(id: number){
    var index = this.lstCheckAction.indexOf(id);
    if(index > -1){
      this.lstCheckAction.splice(index,1);
    }else
    {
      this.lstCheckAction.push(id);
    }
  }

  

  fileUpload(event: any) {
    const selectedFile = event.target.files[0];
    console.log('selectedFile',selectedFile);
    const formData = new FormData();
    formData.append("file", selectedFile);
    try
    {
      this.loadding = true;
      this.service.UploadPorttoShip(formData).subscribe(data => {
        if(data.statusCode === 200)
          {
            this.PagingBooking();
          }
      })
    }
    catch(error)
    {
      this.loadding = false;
      throw new Error("error 500");
    }
  }

  GetStatus(step : number)
  {
    let status = '';
    switch(step){
      case 1 : 
        status = "Chưa Xuất";
        break;
      case 2 : 
        status = "Đã Xuất";
        break;
    }
    return status;
  }
}
