import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { lstContainer, lstContHistory } from 'src/app/Model/Container';
import { Pagination } from 'src/app/Model/Table';
import { ContainerService } from 'src/app/Service/container/container.service';
import { ContainerCreateComponent } from '../container-create/container-create.component';
import { convertHelper } from '../../booking-customer/helper/convertHelper';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ContainerImagesEditComponent } from '../container-images-edit/container-images-edit.component';
import { ContainerMapsInfoComponent } from '../container-maps-info/container-maps-info.component';
import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
import { lstContainerV2 } from 'src/app/Model/Containerv2';

@Component({
  selector: 'app-container-index',
  templateUrl: './container-index.component.html',
  styleUrls: ['./container-index.component.css']
})
export class ContainerIndexComponent implements OnInit {
  listImages: any = [];
  UrlRoot: string = 'https://cclo.phanmem.one';

  loading: boolean = false;
  isCreate: boolean = true;
  containerCode: string = '';
  lstdata: lstContainerV2 = {
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
    // this.loadDataImages()
  }

  setOpen(item: any) {
    // this.mContainerService.mContNoPass.subscribe(message => this.message = message);
    // this.containerService.GetConNo(item.code);
    console.log();
    const dialogRef = this.dialog.open(ContainerImagesEditComponent);
    dialogRef.componentInstance.ImagesObj = item;

    dialogRef.afterClosed().subscribe(result => {
      this.loadDataImages()
      // console.log('-----------------------------');
      //  if (result) {
      //  }
    });

  }
  loadDataImages() {
    this.containerService.ContImagesEmptryGetList('').subscribe((data) => {
      console.log(data.data);
      this.listImages = data.data;
    });
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
    const dialogRef = this.dialog.open(ContainerCreateComponent, { width: '50%', height: '800px' });
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

  myTabSelectedIndexChange(index: number) {
    this.selected = index;
  }
}
