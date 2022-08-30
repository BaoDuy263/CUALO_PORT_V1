import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { lstPerform } from 'src/app/Model/Perform';
import { Pagination } from 'src/app/Model/Table';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { convertHelper } from '../../../booking-customer/helper/convertHelper';
import { CreateimportContfromShipComponent } from '../../../importContFromShip/createimport-contfrom-ship/createimport-contfrom-ship.component';
import { DeleteimportContfromShipComponent } from '../../../importContFromShip/deleteimport-contfrom-ship/deleteimport-contfrom-ship.component';

@Component({
  selector: 'app-imp-cont-list-index',
  templateUrl: './imp-cont-list-index.component.html',
  styleUrls: ['./imp-cont-list-index.component.css']
})
export class ImpContListIndexComponent implements OnInit {
  loadding: boolean = false;
  isCreate: boolean = true;
  Id: number = 0;
  lstdata: lstPerform = {
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
    Date: ''
  }
  constructor(private bookingService: BookingServiceService, public dialog: MatDialog,
    private toastr: ToastrcustomService, private bookingServiceService: BookingServiceService, public convertHelper: convertHelper) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo)
  }

  Pagingdata(PageInfo: any) {
    this.loadding = true;
    this.bookingService.GetAllPerformImport(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize, this.PageInfo.Date?.slice(0, 10))
      .subscribe(data => {
        this.loadding = false;
        this.lstdata = data.data;
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

  openDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteimportContfromShipComponent);
    dialogRef.componentInstance.Id = id;
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

  openEdit(id: number) {
    this.isCreate = false;
    const dialogRef = this.dialog.open(CreateimportContfromShipComponent);
    dialogRef.componentInstance.Id = id;
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
    });
  }

  openCreate() {
    const dialogRef = this.dialog.open(CreateimportContfromShipComponent);
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

  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.PageInfo.page = 1;
    this.Pagingdata(this.PageInfo);
  }

  onSearchDate(e: any) {
    this.PageInfo.Date = e;
    this.PageInfo.page = 1;
    this.Pagingdata(this.PageInfo);
  }
}
