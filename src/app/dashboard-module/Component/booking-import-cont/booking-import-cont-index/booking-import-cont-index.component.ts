
import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../../../Model/Table';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom'
import { BookingImportContService } from 'src/app/Service/booking-import-cont/booking-import-cont.service';
import { BookingImportContCreateComponent } from '../booking-import-cont-create/booking-import-cont-create.component';
import { BookingImportContDeleteComponent } from '../booking-import-cont-delete/booking-import-cont-delete.component';
import { BookingImportContServiceCreate, lstBookingImportContService } from 'src/app/Model/Booking-import-cont';

@Component({
  selector: 'app-booking-import-cont-index',
  templateUrl: './booking-import-cont-index.component.html',
})
export class BookingImportContIndexComponent implements OnInit {
  isCreate: boolean = true;
  customerId: number = 0;
  loadding: boolean = false;

  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }

  lstdata: lstBookingImportContService = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
    data: []
  };

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  }

  constructor(private BookingImportContService: BookingImportContService, public dialog: MatDialog, private toastr: ToastrcustomService) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }

  Pagingdata(PageInfo: any) {
    this.loadding = true;

    this.BookingImportContService.Paging(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize).subscribe(data => {
      this.loadding = false;
      this.lstdata = data;
      this.Pagination.currentPage = data.currentPage,
        this.Pagination.pageSize = data.pageSize,
        this.Pagination.totalPage = data.totalPage,
        this.Pagination.totalRecord = data.totalRecord
      // console.log('this.Pagination',this.Pagination);
    })
  }

  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    this.PageInfo = pageOfItems
    this.Pagingdata(pageOfItems)
  }


  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.PageInfo.page = 1;
    
    this.Pagingdata(this.PageInfo);
  }


  //Create
  BookingImportContServiceCreate: BookingImportContServiceCreate = {
    title: '',
    customerId: '',
    bookingContent: '',
    registerDate: new Date,
    step: '',
    sumNumberConts: '',
    stavoyagetus: '',
    vessel: '',
  }

  openEdit(id: number) {
    this.isCreate = false;
    this.customerId = id;
    const dialogRef = this.dialog.open(BookingImportContCreateComponent);
    dialogRef.componentInstance.customerId = this.customerId;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Pagingdata(this.PageInfo);

        }
        else {
          this.toastr.showError(result.message);
        }
      }
    })

  }

  openCreate() {
    const dialogRef = this.dialog.open(BookingImportContCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Pagingdata(this.PageInfo);

        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });

  }


  openDelete(id: number) {
    this.customerId = id;
    const dialogRef = this.dialog.open(BookingImportContDeleteComponent);
    dialogRef.componentInstance.customerId = this.customerId;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Pagingdata(this.PageInfo);

        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

}
