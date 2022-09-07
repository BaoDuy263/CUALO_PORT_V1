import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { lstContHistory, lstContImages } from 'src/app/Model/Container';
import { Pagination } from 'src/app/Model/Table';
import { ContainerService } from 'src/app/Service/container/container.service';
import { ContainerDialogComponent } from '../container-dialog/container-dialog.component';

@Component({
  selector: 'app-container-img-index',
  templateUrl: './container-img-index.component.html',
  styleUrls: ['./container-img-index.component.css']
})
export class ContainerImgIndexComponent implements OnInit {
  loading: boolean = true;
  lstdata: lstContImages = {
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
    startDate: '',
    endDate: ''
  }
  constructor(public dialog: MatDialog, private toastr: ToastrcustomService, private containerService: ContainerService) { }

  ngOnInit(): void {
    this.loadData(this.PageInfo)
  }


  loadData(PageInfo: any) {
    this.loading = true;
    this.containerService.GetAllContImages(this.PageInfo.page, this.PageInfo.Keyword,
      this.PageInfo.pageSize, this.PageInfo.startDate, this.PageInfo.endDate).subscribe(data => {
        this.lstdata = data;
        this.Pagination.currentPage = data.currentPage,
          this.Pagination.pageSize = data.pageSize,
          this.Pagination.totalPage = data.totalPage,
          this.Pagination.totalRecord = data.totalRecord,
          this.loading = false
      });
  }


  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    pageOfItems.startDate = this.PageInfo.startDate;
    pageOfItems.endDate = this.PageInfo.endDate;
    this.PageInfo = pageOfItems
    this.loadData(pageOfItems)
  }

  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.PageInfo.page = 1;
    this.loadData(this.PageInfo);
  }

  startDate(e: any) {
    this.PageInfo.startDate = e;
    this.PageInfo.page = 1;
    this.loadData(this.PageInfo);
  }

  endDate(e: any) {
    this.PageInfo.endDate = e;
    this.PageInfo.page = 1;
    this.loadData(this.PageInfo);
  }

  openEdit(id: number) {
    const dialogRef = this.dialog.open(ContainerDialogComponent, { width: '25%' });
    dialogRef.componentInstance.contImageId = id;
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

  resetData() {
    this.PageInfo = {
      page: 1,
      Keyword: '',
      pageSize: 10,
      startDate: '',
      endDate: ''
    }
    this.loadData(this.PageInfo);
  }

}
