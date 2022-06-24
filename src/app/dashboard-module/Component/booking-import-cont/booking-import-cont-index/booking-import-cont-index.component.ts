
import { Component, OnInit  } from '@angular/core';
// import { lstCutomer,productCreate } from '../../../../Model/Customer';
import { Pagination } from '../../../../Model/Table';
// import { productService } from '../../../../Service/Customer/customer.service';
import {MatDialog} from '@angular/material/dialog';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom'
import { ProductService } from 'src/app/Service/Product/product.service';
import { lstProduct, ProductCreate } from 'src/app/Model/Product';
import { BookingImportContService } from 'src/app/Service/booking-import-cont/booking-import-cont.service';
import { ProductCreateComponent } from '../../product/product-create/product-create.component';
import { BookingImportContCreateComponent } from '../booking-import-cont-create/booking-import-cont-create.component';
import { BookingImportContDeleteComponent } from '../booking-import-cont-delete/booking-import-cont-delete.component';
import { lstBookingImportContService } from 'src/app/Model/Booking-import-cont';

@Component({
  selector: 'app-booking-import-cont-index',
  templateUrl: './booking-import-cont-index.component.html',
})
export class BookingImportContIndexComponent implements OnInit {
  isCreate : boolean = true;
  customerId : number = 0;
  
  Pagination: Pagination = {
    currentPage : 0,
    pageSize : 0,
    totalRecord : 0,
    totalPage : 0,
  }

  lstdata : lstBookingImportContService = {
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
  
  constructor(private BookingImportContService : BookingImportContService,public dialog: MatDialog,private toastr : ToastrcustomService) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }

  Pagingdata(PageInfo : any)  {
     this.BookingImportContService.Paging(this.PageInfo.page,this.PageInfo.Keyword,this.PageInfo.pageSize).subscribe(data => {
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
  productCreate : ProductCreate = {
    code: '',
    name: '',
    typeProduct: '',
    groupId : '',
    unitId: '',
    quantity:'' ,
    status: true,
    isDeleted: true,
    price: '',
  }

  openEdit(id: number){
    this.isCreate = false;
    this.customerId = id;
    const dialogRef = this.dialog.open(BookingImportContIndexComponent);
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
    const dialogRef = this.dialog.open(BookingImportContCreateComponent);
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
    const dialogRef = this.dialog.open(BookingImportContDeleteComponent);
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
