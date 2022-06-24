
import { Component, OnDestroy, OnInit  } from '@angular/core';
import { lstCutomer,CustomerCreate } from '../../../../Model/Customer';
import { Pagination } from '../../../../Model/Table';
import { CustomerService } from '../../../../Service/Customer/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {KhachhangCreateComponent} from '../khachhang-create/khachhang-create.component';
import { KhachhangDeleteComponent } from '../khachhang-delete/khachhang-delete.component';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom';



@Component({
  selector: 'app-khachhang-index',
  templateUrl: './khachhang-index.component.html',
  styleUrls: ['./khachhang-index.component.css']
})
export class KhachhangIndexComponent implements OnInit,OnDestroy {


  isCreate : boolean = true;
  customerId : number = 0;
  
  Pagination: Pagination = {
    currentPage : 0,
    pageSize : 0,
    totalRecord : 0,
    totalPage : 0,
  }

  lstdata : lstCutomer = {
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

  constructor(private customerService : CustomerService,public dialog: MatDialog,private toastr : ToastrcustomService) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }


  ngOnDestroy() {
		// this.customerService.Paging(this.PageInfo.page,this.PageInfo.Keyword,this.PageInfo.pageSize).un
  }

  Pagingdata(PageInfo : any)  {
    this.customerService.Paging(this.PageInfo.page,this.PageInfo.Keyword,this.PageInfo.pageSize)
    .subscribe(
      data => {
        this.lstdata = data;
        this.Pagination.currentPage = data.currentPage,
        this.Pagination.pageSize = data.pageSize,
        this.Pagination.totalPage = data.totalPage,
        this.Pagination.totalRecord = data.totalRecord
      });
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
  customerCreate : CustomerCreate = {
    name: '',
    fullName: '',
    phoneNumber: '',
    address: '',
    userId : '',
    description:'',
  }

  openEdit(id: number){
    this.isCreate = false;
    this.customerId = id;
    const dialogRef = this.dialog.open(KhachhangCreateComponent,{width:'50%'});
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
    const dialogRef = this.dialog.open(KhachhangCreateComponent);
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
    const dialogRef = this.dialog.open(KhachhangDeleteComponent);
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
