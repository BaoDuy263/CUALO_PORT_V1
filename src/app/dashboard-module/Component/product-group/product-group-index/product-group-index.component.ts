
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom'
import { UnitCreate } from '../../../../Model/Unit';
import { ProductGroupService } from 'src/app/Service/Product-group/product-group.service';
import { ProductGroupCreate } from 'src/app/Model/Product-group';
import { ProductGroupDeleteComponent } from '../product-group-delete/product-group-delete.component';
import { ProductGroupCreateComponent } from '../product-group-create/product-group-create.component';

@Component({
  selector: 'app-product-group-index',
  templateUrl: './product-group-index.component.html',
})
export class ProductGroupIndexComponent implements OnInit {
  isCreate: boolean = true;
  unitId: number = 0;
  loadding: boolean = false;


  lstdata: any = [];

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  }
  constructor(private productGroupService: ProductGroupService, public dialog: MatDialog, private toastr: ToastrcustomService) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }

  Pagingdata(PageInfo: any) {
    this.loadding = true;
    this.productGroupService.Paging().subscribe(data => {
      this.loadding = false;

      this.lstdata = data;
    })
  }

  handlePage(event: any) {
    this.PageInfo.page = event.page;
    this.PageInfo.pageSize = event.pageSize;
    this.Pagingdata(this.PageInfo);
  }

  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.Pagingdata(this.PageInfo);
  }


  //Create
  unitCreate: ProductGroupCreate = {
    name: '',
    note: '',
    status: true,
  }

  openEdit(id: number) {
    this.isCreate = false;
    this.unitId = id;
    const dialogRef = this.dialog.open(ProductGroupCreateComponent);
    dialogRef.componentInstance.customerId = this.unitId;
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
    const dialogRef = this.dialog.open(ProductGroupCreateComponent);
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
    this.unitId = id;
    const dialogRef = this.dialog.open(ProductGroupDeleteComponent);
    dialogRef.componentInstance.customerId = this.unitId;
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