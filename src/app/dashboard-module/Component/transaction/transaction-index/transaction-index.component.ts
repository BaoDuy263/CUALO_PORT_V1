import { TransactionDeleteComponent } from './../transaction-delete/transaction-delete.component';
import { TransactionCreateComponent } from './../transaction-create/transaction-create.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { Pagination } from 'src/app/Model/Table';
import { lstTransactionEIR, TransactionEIR } from 'src/app/Model/TransactionEIR';
import { TransactionService } from 'src/app/Service/transaction/transaction.service';
import { PerformCreateComponent } from '../../booking-customer/perform-create/perform-create.component';
import { PerformDeleteComponent } from '../../booking-customer/perform-delete/perform-delete.component';
import { convertHelper } from '../../../../utils/helper/convertHelper';
import { lstStep } from '../../../../utils/helper/constant';
@Component({
  selector: 'app-transaction-index',
  templateUrl: './transaction-index.component.html',
  styleUrls: ['./transaction-index.component.css']
})
export class TransactionIndexComponent implements OnInit {
  isCreate: boolean = true;
  transId: number = 0;
  loading: boolean = false;
  itemPrint: TransactionEIR | null = null;
  lstStep = lstStep;

  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }

  lstdata: lstTransactionEIR = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
    data: []
  };
  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10,
    startDate: '',
    endDate: '',
    step : ''
  }
  constructor(private transactionService: TransactionService, public dialog: MatDialog,
    private toastr: ToastrcustomService,
    public convertHelper: convertHelper,) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }

  Pagingdata(PageInfo: any) {
    this.loading = true;
    this.transactionService.GetAllTrans(this.PageInfo.page, this.PageInfo.Keyword,
      this.PageInfo.pageSize, this.PageInfo.startDate, this.PageInfo.endDate,this.PageInfo.step)
      .subscribe(data => {
        this.loading = false;
        this.lstdata = data;
        this.Pagination.currentPage = data.currentPage,
          this.Pagination.pageSize = data.pageSize,
          this.Pagination.totalPage = data.totalPage,
          this.Pagination.totalRecord = data.totalRecord
      })
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

  fillStep(e: any) {
    this.PageInfo.step = e;
    this.PageInfo.page = 1;
    this.Pagingdata(this.PageInfo);
  }

  openEdit(id: number) {
    this.isCreate = false;
    this.transId = id;
    const dialogRef = this.dialog.open(TransactionCreateComponent, { width: '50%' });
    dialogRef.componentInstance.transId = this.transId;
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


  openDelete(id: number) {
    const dialogRef = this.dialog.open(TransactionDeleteComponent);
    dialogRef.componentInstance.transId = id;
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
    pageOfItems.step = this.PageInfo.step;
    this.PageInfo = pageOfItems
    this.Pagingdata(pageOfItems)
  }

  resetData() {
    this.PageInfo = {
      page: 1,
      Keyword: '',
      pageSize: 10,
      startDate: '',
      endDate: '',
      step: ''
    }
    this.Pagingdata(this.PageInfo);
  }

  CheckDate(dateUpdate: Date) {
    let DateString = ""
    if(dateUpdate == null) {
      DateString = "";
    }else
    {
      DateString = new Date(dateUpdate).toLocaleDateString('en-GB')
    }
    return DateString;
  }
}
