import { ContainerEditComponent } from './../container-edit/container-edit.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { Pagination } from 'src/app/Model/Table';
import { ContainerService } from 'src/app/Service/container/container.service';
import { convertHelper } from '../../../../utils/helper/convertHelper';
import { ContainerImagesEditComponent } from '../container-images-edit/container-images-edit.component';
import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
import { lstContainerV2 } from 'src/app/Model/Containerv2';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-container-index',
  templateUrl: './container-index.component.html',
  styleUrls: ['./container-index.component.css'],
})
export class ContainerIndexComponent implements OnInit {

  UrlRoot: string = 'https://cclo.phanmem.one';



  lstCont: any = [];

  loading: boolean = false;
  isCreate: boolean = true;
  containerCode: string = '';
  lstdata: lstContainerV2 = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
    data: [],
  };


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


  selected: number = 0;

  constructor(
    private containerService: ContainerService,
    private containerV2Service: Containerv2Service,
    public dialog: MatDialog,
    private toastr: ToastrcustomService,
    public convertHelper: convertHelper
  ) { }

  ngOnInit(): void {
    this.loadData(this.PageInfo);
  }

  loadData(PageInfo: any) {
    this.loading = true;
    this.containerV2Service.Paging(this.PageInfo.page, this.PageInfo.Keyword,
      this.PageInfo.pageSize, this.PageInfo.startDate, this.PageInfo.endDate).subscribe(data => {
      this.loading = false;
      this.lstdata = data;
      this.Pagination.currentPage = data.currentPage,
        this.Pagination.pageSize = data.pageSize,
        this.Pagination.totalPage = data.totalPage,
        this.Pagination.totalRecord = data.totalRecord
    });
  }

  openEdit(code: string) {
    this.isCreate = false;
    this.containerCode = code;
    const dialogRef = this.dialog.open(ContainerEditComponent, {
      width: '50%',
      height: '800px',
    });
    dialogRef.componentInstance.containerCode = this.containerCode;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.loadData(this.PageInfo);
        } else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.PageInfo.page = 1;
    this.loadData(this.PageInfo);
  }

  onSearchContainer(e: any) {
   // this.ImagesContSeach.ContNo = e;
    this.PageInfo.page = 1;
    this.loadData(this.PageInfo);
  }


  openCreate() {
    const dialogRef = this.dialog.open(ContainerEditComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.loadData(this.PageInfo);
        } else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  myTabSelectedIndexChange(index: number) {
    this.selected = index;
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
