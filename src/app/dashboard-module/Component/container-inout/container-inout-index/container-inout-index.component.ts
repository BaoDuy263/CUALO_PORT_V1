import { Pagination } from 'src/app/Model/Table';
import { lstContHistory } from 'src/app/Model/Container';
import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/Service/container/container.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { ContainerInoutImgsComponent } from '../container-inout-imgs/container-inout-imgs.component';

@Component({
  selector: 'app-container-inout-index',
  templateUrl: './container-inout-index.component.html',
  styleUrls: ['./container-inout-index.component.css']
})
export class ContainerInoutIndexComponent implements OnInit {
  loading: boolean = true;
  AreaCode: string = "-1";
  lstdata: lstContHistory = {
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
  constructor(
    private containerService: ContainerService,
    public dialog: MatDialog,
    private toastr: ToastrcustomService) { }

  ngOnInit(): void {
    this.loadData(this.PageInfo)
  }


  loadData(PageInfo: any) {
    this.loading = true;
    this.containerService.GetAllContHistory(this.PageInfo.page, this.PageInfo.Keyword,
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

  onClick(item: any){
    const dialogRef = this.dialog.open(ContainerInoutImgsComponent, {
      data: { contNo: item.contNo },
    });
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }
}

