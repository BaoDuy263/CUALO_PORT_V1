import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { ContImagesPaging, lstContainer } from 'src/app/Model/Container';
import { lstContainer, lstContHistory } from 'src/app/Model/Container';
import { Pagination } from 'src/app/Model/Table';
import { ContainerService } from 'src/app/Service/container/container.service';
import { ContainerCreateComponent } from '../container-create/container-create.component';
import { convertHelper } from '../../booking-customer/helper/convertHelper';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ContainerImagesEditComponent } from '../container-images-edit/container-images-edit.component';

@Component({
  selector: 'app-container-index',
  templateUrl: './container-index.component.html',
  styleUrls: ['./container-index.component.css'],
})
export class ContainerIndexComponent implements OnInit {
  selectedCont: any;
  CheckedImagesEmtry: boolean = true;
  lstCont: any = [];

  listImages: any = [];
  UrlRoot: string = 'https://cclo.phanmem.one';

  loading: boolean = false;
  isCreate: boolean = true;
  containerCode: string = '';
  lstdata: lstContainer = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
    data: [],
  };

  ImagesContSeach: ContImagesPaging = {
    Page: 1,
    PageSize: 1000,
    ContNo: '',
    FromDate: '',
    ToDate: '',
    Status: -1,
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
  };


  selected: number = 0;

  constructor(
    private containerService: ContainerService,
    public dialog: MatDialog,
    private toastr: ToastrcustomService
    public convertHelper: convertHelper
  ) {}

  ngOnInit(): void {
    this.loadData(this.PageInfo);
    this.containerService.Paging(1, '', 1200).subscribe((data) => {
      this.lstCont = data.data;
    });

    let LastDate = new Date();
    LastDate.setDate(LastDate.getDate() - 10);
    console.log('-------------------');
    this.ImagesContSeach.FromDate = LastDate.toDateString();
    this.ImagesContSeach.ToDate = new Date().toDateString();
    this.loadDataImages();
  }

  checkSelected(event: any) {
    // console.log('sdfjsdfsdjfsdfsdfsdfs----' + this.CheckedImagesEmtry);
    if (event.target.checked) this.CheckedImagesEmtry = true;
    else this.CheckedImagesEmtry = false;

    console.log(this.CheckedImagesEmtry);
    // this.ImagesContSeach.ToDate = e;
  }

  OnSelectedCont(values: any) {
    console.log(values);
    // this.ImagesContSeach.ToDate = e;
  }

  onSearchContainer(e: any) {
    this.ImagesContSeach.ContNo = e;
  }

  onSearchFromDate(e: any) {
    this.ImagesContSeach.FromDate = e;
  }

  onSearchToDate(e: any) {
    this.ImagesContSeach.ToDate = e;
  }

  setOpen(item: any) {
    // this.mContainerService.mContNoPass.subscribe(message => this.message = message);
    // this.containerService.GetConNo(item.code);

    const dialogRef = this.dialog.open(ContainerImagesEditComponent);
    dialogRef.componentInstance.ImagesObj = item;

    dialogRef.afterClosed().subscribe((result) => {
      this.loadDataImages();
      // console.log('-----------------------------');
      //  if (result) {
      //  }
    });
  }
  loadDataImages() {
    let code = '',
      dateFrom = '',
      dateTo = '',
      status = 1;
    console.log(this.selectedCont);
    if (this.selectedCont != undefined) code = this.selectedCont;
    this.containerService
      .ContImagesEmptryGetList(
        code,
        this.ImagesContSeach.FromDate,
        this.ImagesContSeach.ToDate,
        status
      )
      .subscribe((data) => {
        console.log(data.data);
        this.listImages = data.data;
      });
  }

  loadData(PageInfo: any) {
    this.loading = true;
    this.containerService
      .Paging(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize)
      .subscribe((data) => {
        this.loading = false;
        this.lstdata = data;
        (this.Pagination.currentPage = data.currentPage),
          (this.Pagination.pageSize = data.pageSize),
          (this.Pagination.totalPage = data.totalPage),
          (this.Pagination.totalRecord = data.totalRecord);
      });
  }

  openEdit(code: string) {
    this.isCreate = false;
    this.containerCode = code;
    const dialogRef = this.dialog.open(ContainerCreateComponent, {
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

  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    this.PageInfo = pageOfItems;
    this.loadData(pageOfItems);
  }

  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.PageInfo.page = 1;
    this.loadData(this.PageInfo);
  }

  btnSeach_Click() {
    this.loadDataImages();
  }

  openCreate() {
    const dialogRef = this.dialog.open(ContainerCreateComponent);
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
}
