import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { BayPlanIndex, BayPlanPaging } from 'src/app/Model/BayPlanDetail';
import { Pagination } from 'src/app/Model/Table';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';
import { PerformService } from 'src/app/Service/Perform/perform.service';
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
  lstdata : BayPlanIndex = {
    currentPage : 0,
    pageSize: 0,
    totalPage : 0,
    totalRecord : 0,
    data : []
  }
  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
}

PageInfothuchien : BayPlanPaging = {
  Page: 1,
  PageSize: 10,
  Voyace : '',
  ContNo: '',
  BillNo : '',
}
PageInfo = {
  page: 1,
  Keyword: '',
  pageSize: 10,
  Date: ''
}
  constructor(private servicePerform : PerformService, public dialog: MatDialog,
    private toastr: ToastrcustomService, private bookingServiceService: BookingServiceService) { }

  ngOnInit(): void {
    this.Pagingdata()
  }

  Pagingdata() {
    this.servicePerform.PagingShipToPort(this.PageInfothuchien).subscribe(
      data => {
        console.log(data,'data')
        this.loadding = false;
          this.lstdata = data.data;
          this.Pagination.currentPage = data.data.currentPage,
            this.Pagination.pageSize = data.data.pageSize,
            this.Pagination.totalPage = data.data.totalPage,
            this.Pagination.totalRecord = data.data.totalRecord
      });
  }


  fileUpload(event: any) {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
        this.loadding = true;
        this.bookingServiceService.CreateBookings(formData).subscribe(res => {
          if(res.statusCode === 200)
          {
            this.Pagingdata()
          }
        })
    } catch (error) {
        this.loadding = false;
        throw new Error("error 500");
    }
  }

  downloadTemp()
  {
    return this.bookingServiceService.DownloadTemplate()
    .subscribe((result: Blob) => {
      const blob = new Blob([result], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }); // you can change the type
      const url= window.URL.createObjectURL(blob);
      console.log(url,'blob')
      window.open(url);
      console.log("Success");
    });
  }

  openDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteimportContfromShipComponent);
    dialogRef.componentInstance.Id = id;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Pagingdata();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  openEdit(id: number){
    this.isCreate = false;
    const dialogRef = this.dialog.open(CreateimportContfromShipComponent);
    dialogRef.componentInstance.Id = id;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Pagingdata();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
     });
  }

  openCreate(){
    const dialogRef = this.dialog.open(CreateimportContfromShipComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Pagingdata();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }
}
