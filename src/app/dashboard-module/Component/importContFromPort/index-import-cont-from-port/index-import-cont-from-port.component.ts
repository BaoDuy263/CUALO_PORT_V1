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
    BookingType : 3
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
  //

 
  constructor(public dialog: MatDialog,private service : ImportContFromShipService,private toastr: ToastrcustomService) { }

  ngOnInit(): void {
    this.Paging();
    this.PagingBooking();
  }

  Paging() {
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
        console.log('this.PaginationBooking',this.PaginationBooking);
      }
    )
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

  openUpload() {
    const dialogRef =this.dialog.open(ImportContFromPortComponent);
    dialogRef.componentInstance.isImport = false;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
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
}
