import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CustomerCreate, lstCutomer } from '../../../../Model/Customer';
import { Pagination } from '../../../../Model/Table';
import { CustomerService } from '../../../../Service/Customer/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom';
import { QLTaiKhoanCreateComponent } from '../tai-khoan-create/tai-khoan-create.component';
import { QLTaiKhoanDeleteComponent } from '../tai-khoan-delete/tai-khoan-delete.component';
import { AccountService } from 'src/app/Service/Account/account.service';
import { AccountCreate, lstAccount } from 'src/app/Model/Account';
import { UserAuthorizationComponent } from '../user-authorization/user-authorization.component';

@Component({
  selector: 'app-tai-khoan-index',
  templateUrl: './tai-khoan-index.component.html',
})
export class QLTaiKhoanIndexComponent implements OnInit {
  isCreate: boolean = true;
  customerId: number = 0;
  loadding: boolean = false;

  
  lstdata: any = [];

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  }
  constructor(
    private AccountService: AccountService,
    public dialog: MatDialog,
    private toastr: ToastrcustomService
  ) {}

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }

  Pagingdata(PageInfo: any) {
    this.loadding = true;
    this.AccountService
      .Paging(PageInfo.page, PageInfo.Keyword, PageInfo.pageSize)
      .subscribe((data) => {
        this.loadding = false;
        this.lstdata = data;
      });
  }

  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    this.PageInfo = pageOfItems;
    this.Pagingdata(pageOfItems);
  }

  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.PageInfo.page = 1;
    this.Pagingdata(this.PageInfo);
  }

  //Create
  AccountCreate: AccountCreate = {
    userName: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  };

  openEdit(id: number) {
    this.isCreate = false;
    this.customerId = id;
    const dialogRef = this.dialog.open(QLTaiKhoanCreateComponent, {
      width: '50%',
    });
    dialogRef.componentInstance.customerId = this.customerId;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Pagingdata(this.PageInfo);
        } else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  openPermission(UserId: string){
    const dialogRef = this.dialog.open(UserAuthorizationComponent)
    dialogRef.componentInstance.UserId = UserId;
  }

  openCreate() {
    const dialogRef = this.dialog.open(QLTaiKhoanCreateComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Pagingdata(this.PageInfo);
        } else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  openDelete(id: number) {
    this.customerId = id;
    const dialogRef = this.dialog.open(QLTaiKhoanDeleteComponent);
    dialogRef.componentInstance.customerId = this.customerId;
    dialogRef.afterClosed().subscribe((result) => {
      // if (result) {
        // if (result.statusCode === 200) {
          // console.log("jhiiiiiiiii")
          this.toastr.showSuccess("Xóa tài khoản thành công !!!");
          this.Pagingdata(this.PageInfo);
      //   } else {
      //     this.toastr.showError(result.message);
      //   }
      // }
    });
  }
}
