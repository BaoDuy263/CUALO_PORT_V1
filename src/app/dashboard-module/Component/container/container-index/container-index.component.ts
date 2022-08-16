import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { lstContainer } from 'src/app/Model/Container';
import { Pagination } from 'src/app/Model/Table';
import { ContainerService } from 'src/app/Service/container/container.service';
import { ContainerCreateComponent } from '../container-create/container-create.component';

@Component({
  selector: 'app-container-index',
  templateUrl: './container-index.component.html',
  styleUrls: ['./container-index.component.css']
})
export class ContainerIndexComponent implements OnInit {
  loading: boolean = false;
  isCreate: boolean = true;
  containerCode: string = '';
  lstdata: lstContainer = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
    data: []
  };

  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }
  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10,
  }
  constructor(private containerService: ContainerService, public dialog: MatDialog, private toastr: ToastrcustomService,) { }

  ngOnInit(): void {
    this.loadData(this.PageInfo)
  }

  loadData(PageInfo: any) {
    this.loading = true;
    this.containerService.Paging(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize).subscribe(data => {
      this.loading = false;
      this.lstdata = data;
      this.Pagination.currentPage = data.currentPage,
        this.Pagination.pageSize = data.pageSize,
        this.Pagination.totalPage = data.totalPage,
        this.Pagination.totalRecord = data.totalRecord
    })
  }

  openEdit(code: string) {
    this.isCreate = false;
    this.containerCode = code;
    const dialogRef = this.dialog.open(ContainerCreateComponent, { width: '50%' });
    dialogRef.componentInstance.containerCode = this.containerCode;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.loadData(this.PageInfo);
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    })
  }

  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    this.PageInfo = pageOfItems
    this.loadData(pageOfItems)
  }

  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.PageInfo.page = 1;
    this.loadData(this.PageInfo);
  }

  openCreate() {
    const dialogRef = this.dialog.open(ContainerCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.loadData(this.PageInfo);
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }
}
