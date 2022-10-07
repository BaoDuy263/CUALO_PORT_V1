import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
import { lstContainerV2 } from 'src/app/Model/Containerv2';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { lstPerform, Perform } from 'src/app/Model/Perform';
import { Pagination } from 'src/app/Model/Table';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { convertHelper } from '../../../../../utils/helper/convertHelper';
import { PerformCreateComponent } from '../../../booking-customer/perform-create/perform-create.component';
import { CreateimportContfromShipComponent } from '../../../importContFromShip/createimport-contfrom-ship/createimport-contfrom-ship.component';
import { DeleteimportContfromShipComponent } from '../../../importContFromShip/deleteimport-contfrom-ship/deleteimport-contfrom-ship.component';
import { ContainerCreateComponent } from '../../../container/container-create/container-create.component';

@Component({
  selector: 'app-imp-cont-list-index',
  templateUrl: './imp-cont-list-index.component.html',
  styleUrls: ['./imp-cont-list-index.component.css']
})
export class ImpContListIndexComponent implements OnInit {
  loadding: boolean = false;
  isCreate: boolean = true;
  Id: number = 0;
  containerCode: string = '';
  itemPrint: Perform | null = null;
  lstdata: lstContainerV2 = {
    currentPage: 0,
    pageSize: 0,
    totalPage: 0,
    totalRecord: 0,
    data: []
  }
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
  constructor(private bookingService: BookingServiceService, private containverService: Containerv2Service, public dialog: MatDialog,
    private toastr: ToastrcustomService, private bookingServiceService: BookingServiceService, public convertHelper: convertHelper) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo)
  }

  Pagingdata(PageInfo: any) {
    this.loadding = true;
    this.containverService.GetAllContImp(this.PageInfo.page, this.PageInfo.Keyword,
      this.PageInfo.pageSize, this.PageInfo.startDate, this.PageInfo.endDate)
      .subscribe(data => {
        console.log(data.data)
        this.loadding = false;
        this.lstdata.data = data.data;
        this.Pagination.currentPage = data.currentPage,
          this.Pagination.pageSize = data.pageSize,
          this.Pagination.totalPage = data.totalPage,
          this.Pagination.totalRecord = data.totalRecord
      })
  }

  fileUpload(event: any) {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      this.loadding = true;
      this.bookingService.CreateActions(formData).subscribe(res => {
        if (res.statusCode === 200) {
          this.Pagingdata(this.PageInfo)
        }
      })
    } catch (error) {
      this.loadding = false;
      throw new Error("error 500");
    }
  }

  downloadTemp() {
    return this.bookingServiceService.DownloadImport()
      .subscribe((result: Blob) => {
        const blob = new Blob([result], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }); // you can change the type
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  }

  openDelete(contNo: string) {
    // const dialogRef = this.dialog.open(DeleteimportContfromShipComponent);
    // dialogRef.componentInstance.Id = id;
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     if (result.statusCode === 200) {
    //       this.toastr.showSuccess(result.message);
    //       this.Pagingdata(this.PageInfo);
    //     }
    //     else {
    //       this.toastr.showError(result.message);
    //     }
    //   }
    // });
  }

  openEdit(code: string) {
    this.isCreate = false;
    this.containerCode = code;
    const dialogRef = this.dialog.open(ContainerCreateComponent, {
      width: '100%',
    });
    dialogRef.componentInstance.containerCode = this.containerCode;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe(result => {
      this.Pagingdata(this.PageInfo);
    })
  }

  openCreate() {
    const dialogRef = this.dialog.open(PerformCreateComponent, { width: '100%' });
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

  saveTransaction(item: any) {
    console.log(item, 'item')
  }
}
