import { ContainerCreateComponent } from './../../container/container-create/container-create.component';
import { lstContainerV2 } from 'src/app/Model/Containerv2';
import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
import { TransactionService } from './../../../../Service/transaction/transaction.service';
import { Vehicle } from './../../../../Model/Vehicle';
import { PerformDeleteComponent } from './../perform-delete/perform-delete.component';
import { PerformCreateComponent } from './../perform-create/perform-create.component';
import { convertHelper } from '../../../../utils/helper/convertHelper';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { lstPerform, Perform } from 'src/app/Model/Perform';
import { Pagination } from 'src/app/Model/Table';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { lstTransactionEIR, TransactionEIR } from 'src/app/Model/TransactionEIR';

@Component({
  selector: 'app-perform-index',
  templateUrl: './perform-index.component.html',
  styleUrls: ['./perform-index.component.css']
})
export class PerformIndexComponent implements OnInit {
  isCreate: boolean = true;
  contNo: string = '';
  loading: boolean = false;
  contSelect: string = '';

  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }

  lstdata: lstContainerV2 = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
    data: []
  };

  lstCustomer: any = [];
  lstProduct: any = [];

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10,
    startDate: '',
    endDate: ''
  }
  constructor(private containerService: Containerv2Service, public dialog: MatDialog,
    private toastr: ToastrcustomService,
    public convertHelper: convertHelper,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo)
  }

  Pagingdata(PageInfo: any) {
    this.loading = true;
    this.containerService.GetContProviding(this.PageInfo.page, this.PageInfo.Keyword,
      this.PageInfo.pageSize, this.PageInfo.startDate, this.PageInfo.endDate)
      .subscribe(data => {
        this.loading = false;
        this.lstdata = data;
        this.Pagination.currentPage = data.currentPage,
          this.Pagination.pageSize = data.pageSize,
          this.Pagination.totalPage = data.totalPage,
          this.Pagination.totalRecord = data.totalRecord
      })
  }

  openEdit(contNo: string) {
    this.isCreate = false;
    this.contNo = contNo;
    const dialogRef = this.dialog.open(ContainerCreateComponent, { width: '100%' });
    dialogRef.componentInstance.containerCode = this.contNo;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe(result => {
      this.Pagingdata(this.PageInfo);
    })
  }


  openDelete(id: number) {
    const dialogRef = this.dialog.open(PerformDeleteComponent);
    dialogRef.componentInstance.performId = id;
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

  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    pageOfItems.startDate = this.PageInfo.startDate;
    pageOfItems.endDate = this.PageInfo.endDate;
    this.PageInfo = pageOfItems
    this.Pagingdata(pageOfItems)
  }

  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.PageInfo.page = 1;
    this.Pagingdata(this.PageInfo);
  }

  startDate(e: any) {
    this.PageInfo.startDate = e;
    this.PageInfo.page = 1;
    this.Pagingdata(this.PageInfo);
  }

  endDate(e: any) {
    this.PageInfo.endDate = e;
    this.PageInfo.page = 1;
    this.Pagingdata(this.PageInfo);
  }

  resetData() {
    this.PageInfo = {
      page: 1,
      Keyword: '',
      pageSize: 10,
      startDate: '',
      endDate: ''
    }
    this.Pagingdata(this.PageInfo);
  }
}
