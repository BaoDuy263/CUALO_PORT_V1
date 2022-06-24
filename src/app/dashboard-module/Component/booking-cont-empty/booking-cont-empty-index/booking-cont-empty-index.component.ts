import { Component, OnInit  } from '@angular/core';
import { Pagination } from '../../../../Model/Table';
import {MatDialog} from '@angular/material/dialog';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom'
// import { BookingContEmptyService } from 'src/app/Service/Product/product.service';
import { BookingContEmptyService } from 'src/app/Service/booking-cont-empty/booking-cont-emtpy.service';
import { BookingContEmptyDeleteComponent } from '../booking-cont-empty-delete/booking-cont-empty-delete.component';
import { BookingContEmtpyCreate, lstBookingContEmtpy } from 'src/app/Model/Booking-cont-empty';
import { BookingContEmptyCreateComponent } from '../booking-cont-empty-create/booking-cont-empty-create.component';

@Component({
  selector: 'app-booking-cont-empty-index',
  templateUrl: './booking-cont-empty-index.component.html',
})
export class BookingContEmptyIndexComponent implements OnInit {
  isCreate : boolean = true;
  customerId : number = 0;
  
  Pagination: Pagination = {
    currentPage : 0,
    pageSize : 0,
    totalRecord : 0,
    totalPage : 0,
  }

  lstdata : lstBookingContEmtpy = {
    currentPage : 0,
    pageSize : 0,
    totalRecord : 0,
    totalPage : 0,
    data : []
  };

  PageInfo = {
    page : 1,
    Keyword : '',
    pageSize : 10
  }  

  constructor(private BookingContEmptyService : BookingContEmptyService,public dialog: MatDialog,private toastr : ToastrcustomService) { }
  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }

  Pagingdata(PageInfo : any)  {
     this.BookingContEmptyService.Paging(this.PageInfo.page,this.PageInfo.Keyword,this.PageInfo.pageSize).subscribe(data => {
      // console.log(data)  
      this.lstdata = data;
        this.Pagination.currentPage = data.currentPage,
        this.Pagination.pageSize = data.pageSize,
        this.Pagination.totalPage = data.totalPage,
        this.Pagination.totalRecord = data.totalRecord
        // console.log('this.Pagination',this.Pagination);
     })
  }

  handlePage(event:any) {
    this.PageInfo.page = event.page;
    this.PageInfo.pageSize = event.pageSize;
    this.Pagingdata(this.PageInfo);
  }

  onSearch(e:any)
  {
    this.PageInfo.Keyword = e;
    this.Pagingdata(this.PageInfo);
  }


  //Create
  BookingContEmtpyCreate : BookingContEmtpyCreate = {
    commandNo: '',
    title: '',
    customerId: '',
    bookingContent : '',
    sumNumber20Dc: '',
    sumNumber20Ot: '',
    sumNumber40Dc: '',
    sumNumber40Hc: '',
    shipName: '',

    registerDate: new Date(),
    loadingPort: '',
    tripNo: '',
    productName: '',
    unLoadingPort: '',
    expiredDate: '',
    requestDescription: '',
    depot1Confimed: true,
    depot1Note: '',
    step: '',
    depot1ConfirmedDate:new Date(),
    customerConfirmedDate: new Date(),
    customerNote: '',
  }

  openEdit(id: number){
    this.isCreate = false;
    this.customerId = id;
    const dialogRef = this.dialog.open(BookingContEmptyCreateComponent);
    dialogRef.componentInstance.customerId = this.customerId;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe(result => {
      if(result){
          if(result.statusCode === 200){
            this.toastr.showSuccess(result.message);
          }
          else
          {
            this.toastr.showError(result.message);
          }
      } 
      this.Pagingdata(this.PageInfo);
    })
    
  }

  openCreate() {
    const dialogRef = this.dialog.open(BookingContEmptyCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
        if(result){
          if(result.statusCode === 200){
            this.toastr.showSuccess(result.message);
          }
          else
          {
            this.toastr.showError(result.message);
          }
        }
        this.Pagingdata(this.PageInfo);
    });
    
  }


  openDelete(id: number){
    this.customerId = id;
    const dialogRef = this.dialog.open(BookingContEmptyDeleteComponent);
    dialogRef.componentInstance.customerId = this.customerId;
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(result.statusCode === 200){
          this.toastr.showSuccess(result.message);
        }
        else
        {
          this.toastr.showError(result.message);
        }
      }
      this.Pagingdata(this.PageInfo);
  });
  }

}

