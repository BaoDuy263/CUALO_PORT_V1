
import { Component, OnInit  } from '@angular/core';
// import { lstCutomer,productCreate } from '../../../../Model/Customer';
import { Pagination } from '../../../../Model/Table';
// import { productService } from '../../../../Service/Customer/customer.service';
import {MatDialog} from '@angular/material/dialog';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom'
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ProductService } from 'src/app/Service/Product/product.service';
import { lstProduct, ProductCreate } from 'src/app/Model/Product';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
})
export class ProductIndexComponent implements OnInit {
  isCreate : boolean = true;
  customerId : number = 0;
  
  Pagination: Pagination = {
    currentPage : 0,
    pageSize : 0,
    totalRecord : 0,
    totalPage : 0,
  }

  lstdata : lstProduct = {
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

  constructor(private productService : ProductService,public dialog: MatDialog,private toastr : ToastrcustomService) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }

  Pagingdata(PageInfo : any)  {
     this.productService.Paging(this.PageInfo.page,this.PageInfo.Keyword,this.PageInfo.pageSize).subscribe(data => {
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
    const dialogRef = this.dialog.open(ProductCreateComponent);
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
    const dialogRef = this.dialog.open(ProductCreateComponent);
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
    const dialogRef = this.dialog.open(ProductDeleteComponent);
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
