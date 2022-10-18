import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { Container, ContImage } from 'src/app/Model/Container';
import { Pagination } from 'src/app/Model/Table';
import { ContainerService } from 'src/app/Service/container/container.service';
import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
import { convertHelper } from '../../../../utils/helper/convertHelper';

@Component({
  selector: 'app-container-dialog',
  templateUrl: './container-dialog.component.html',
  styleUrls: ['./container-dialog.component.css']
})
export class ContainerDialogComponent implements OnInit {
  loading: boolean = true;
  lstData: Container[] = [];
  itemSelected: string = '';
  contImageId: number = 0;
  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  };

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10,
    startDate: '',
    endDate: ''
  }


  constructor(private containerService: Containerv2Service,
    public dialogRef: MatDialogRef<ContainerDialogComponent>, public convertHelper: convertHelper) { }

  ngOnInit(): void {
    this.loadData(this.PageInfo);
  }

  loadData(PageInfo: any) {
    this.loading = true;
    this.containerService.Paging(this.PageInfo.page, this.PageInfo.Keyword,
      this.PageInfo.pageSize, this.PageInfo.startDate, this.PageInfo.endDate).subscribe(data => {
      this.loading = false;
      this.lstData = data;
      this.Pagination.currentPage = data.currentPage,
        this.Pagination.pageSize = data.pageSize,
        this.Pagination.totalPage = data.totalPage,
        this.Pagination.totalRecord = data.totalRecord
    });
    // this.containerService.GetDetailContImage(this.contImageId).subscribe(data => console.log(data,'data'))
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

  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    pageOfItems.startDate = this.PageInfo.startDate;
    pageOfItems.endDate = this.PageInfo.endDate;
    this.PageInfo = pageOfItems
    this.loadData(pageOfItems)
  }

  hanldeClickItem(item: string) {
    this.itemSelected = item
  }

  closeDialog() {
    this.dialogRef.close()
  }

  handleSubmit() {

  }
}
