import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateimportContfromShipComponent } from '../createimport-contfrom-ship/createimport-contfrom-ship.component';
import { DeleteimportContfromShipComponent } from '../deleteimport-contfrom-ship/deleteimport-contfrom-ship.component'
import { ImportContComponent } from '../import-cont/import-cont.component'
import { BayPlanPaging,BayPlanIndex} from '../../../../Model/BayPlanDetail'
import { ImportContFromShipService } from '../../../../Service/importContFromShip/import-cont-from-ship.service';
import { Pagination } from '../../../../Model/Table';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom';
import { BookingPlanIndex, BookingPlanPaging } from 'src/app/Model/BookingPlan';
import { PerformService } from 'src/app/Service/Perform/perform.service';
import { ExportcontainershipComponent } from '../exportcontainership/exportcontainership.component';
import { lstProduct } from 'src/app/Model/Product';

@Component({
  selector: 'app-indeximport-contfrom-ship',
  templateUrl: './indeximport-contfrom-ship.component.html',
  styleUrls: ['./indeximport-contfrom-ship.component.css']
})
export class IndeximportContfromShipComponent implements OnInit {

  loadding: boolean = false;
  isCreate: boolean = true;
  Id: number = 0;

  //Tab Booking
  PageInfoBooking : BookingPlanPaging = {
    Page: 1,
    PageSize: 10,
    FileName : '',
    BookingType : 4,
    FromDate: undefined,
    ToDate: undefined
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

  //Tab kế hoạch
  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }

  lstdata : BayPlanIndex = {
    currentPage : 0,
    pageSize: 0,
    totalPage : 0,
    totalRecord : 0,
    data : []
  }

  PageInfo : BayPlanPaging = {
    Page: 1,
    PageSize: 10,
    Voyace : '',
    ContNo: '',
    BillNo : '',
    FromDate : undefined,
    ToDate: undefined
  }
  //
  //Tab thực hiện
  Paginationthuchien: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }

  lstdatathuchien : BayPlanIndex = {
    currentPage : 0,
    pageSize: 0,
    totalPage : 0,
    totalRecord : 0,
    data : []
  }

  PageInfothuchien : BayPlanPaging = {
    Page: 1,
    PageSize: 10,
    Voyace : '',
    ContNo: '',
    BillNo : '',
  }
  //
  lstProduct: lstProduct = {
    currentPage : 0,
    pageSize: 0,
    totalPage : 0,
    totalRecord : 0,
    data : []
  }
  
  lstCheckAction : Array<number> = [];
  constructor(public dialog: MatDialog,private service: ImportContFromShipService,private toastr: ToastrcustomService,private servicePerform : PerformService) { }

  ngOnInit(): void {
    this.Paging();
    this.PagingBooking();
    this.PagingThucHien();
    console.log(this.lstProduct);
    
  }

  Paging() {
    this.PageInfo.FromDate?.toString() == "" ? this.PageInfo.FromDate = undefined : this.PageInfo.FromDate;
    this.PageInfo.ToDate?.toString() == "" ? this.PageInfo.ToDate = undefined : this.PageInfo.ToDate;
    this.service.Paging(this.PageInfo).subscribe(
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

  PagingThucHien() {
    this.servicePerform.PagingShipToPort(this.PageInfothuchien).subscribe(
      data => {
        this.loadding = false;
          this.lstdatathuchien = data.data;
          this.Paginationthuchien.currentPage = data.data.currentPage,
            this.Paginationthuchien.pageSize = data.data.pageSize,
            this.Paginationthuchien.totalPage = data.data.totalPage,
            this.Paginationthuchien.totalRecord = data.data.totalRecord
      });
  }

  onChangePageThuchien(pageOfItems: any) {
    this.PageInfo.Page = pageOfItems.page;
    this.PageInfo.PageSize = pageOfItems.pageSize;
    this.PagingThucHien()
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

  
  onChangePage(pageOfItems: any) {
    this.PageInfo.Page = pageOfItems.page;
    this.PageInfo.PageSize = pageOfItems.pageSize;
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

  openImport() {
    const dialogRef = this.dialog.open(ImportContComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.status === 200) {
          this.toastr.showSuccess(result.message);
          this.Paging();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  openUpload() {
    const dialogRef =this.dialog.open(ImportContComponent);
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


  openCreate(){
    const dialogRef = this.dialog.open(CreateimportContfromShipComponent);
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
    const dialogRef = this.dialog.open(CreateimportContfromShipComponent);
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

  openDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteimportContfromShipComponent);
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

  DowloadTemplate() {
    this.service.DowloadTemplatePort().subscribe(data => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  DowloadFile(path: string){
    this.service.DownLoadFileShiptoPort(path).subscribe(data => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    })
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
    const formData = new FormData();
    formData.append("file", selectedFile);
    try
    {
      this.loadding = true;
      this.service.UploadShiptoPort(formData).subscribe(data => {
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

  GetDirecttion(type: number)
  {
    let Direction = '';
    switch(type){
      case 1 : 
        Direction = "Lưu vỏ";
        break;
      case 2 : 
        Direction = "Lưu bãi";
        break;
      case 3 : 
        Direction = "Trả nguyên";
        break;
      case 4 :
        Direction = "Rút ruột";
        break;
      case 5 :
        Direction = "(Ship side)T-X";
        break;
    }
    return Direction;
  }

  ImportCont(Id: number)
  {
    const dialogRef =this.dialog.open(ExportcontainershipComponent);
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
}
