import { HttpClient } from '@angular/common/http';
import { PlanPackingCreateComponent } from './../plan-packing-create/plan-packing-create.component';
import { lstBookingTemplate } from './../../../../Model/Booking-customer';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { lstBookingCustomer } from 'src/app/Model/Booking-customer';
import { Pagination } from 'src/app/Model/Table';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { BookingTemplateService } from 'src/app/Service/booking-template/booking-template.service';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { BookingCustomerCreateComponent } from '../../booking-customer/booking-customer-create/booking-customer-create.component';
import { BookingCustomerDeleteComponent } from '../../booking-customer/booking-customer-delete/booking-customer-delete.component';
import { PlanPackingDeleteComponent } from '../plan-packing-delete/plan-packing-delete.component';

@Component({
  selector: 'app-plan-packing-index',
  templateUrl: './plan-packing-index.component.html',
  styleUrls: ['./plan-packing-index.component.css']
})
export class PlanPackingIndexComponent implements OnInit {

  isCreate: boolean = true;
  bookCutomerId: number = 0;
  loadding: boolean = false;

  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }

  lstdata: lstBookingTemplate = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
    data: []
  };

  lstCustomer: any = [];
  lstProduct: any = [];

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  }


  constructor(private bookingTemplateService: BookingTemplateService,
    public dialog: MatDialog, private toastr: ToastrcustomService, private http: HttpClient ) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }


  getCustomerName(id: string) {
    if (this.lstCustomer) {
      let customer = this.lstCustomer.find((x: any) => x.id == id);
      return customer ? customer.name : "";
    }
  }

  getProductName(id: string) {
    if (this.lstProduct) {
      let product = this.lstProduct.find((x: any) => x.id == id);
      return product ? product.name : "";
    }
  }

  Pagingdata(PageInfo: any) {
    this.loadding = true;
    this.bookingTemplateService.Paging(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize).subscribe(data => {
      this.loadding = false;
      this.lstdata = data;
      this.Pagination.currentPage = data.currentPage,
        this.Pagination.pageSize = data.pageSize,
        this.Pagination.totalPage = data.totalPage,
        this.Pagination.totalRecord = data.totalRecord
    })
  }


  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.PageInfo.page = 1;
    this.Pagingdata(this.PageInfo);
  }

  openEdit(id: number) {
    this.isCreate = false;
    this.bookCutomerId = id;
    const dialogRef = this.dialog.open(PlanPackingCreateComponent, { width: '50%' });
    dialogRef.componentInstance.bookCutomerId = this.bookCutomerId;
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
    })
  }


  openDelete(id: number) {
    const dialogRef = this.dialog.open(PlanPackingDeleteComponent);
    dialogRef.componentInstance.bookingId = id;
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
    this.PageInfo = pageOfItems
    this.Pagingdata(pageOfItems)
  }

  fileUpload(event: any) {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      this.loadding = true;
      this.bookingTemplateService.UploadFile(formData).subscribe(res => {
        console.log(res,'res')
        if(res.statusCode === 200)
        {
          this.Pagingdata(this.PageInfo)
        }
      })
    } catch (error) {
      this.loadding = false;
      throw new Error("error 500");
    }
  }

  downloadFile(id: number)
  {
    return this.bookingTemplateService.DownloadFile(id)
    .subscribe((result: Blob) => {
      const blob = new Blob([result], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }); // you can change the type
      const url= window.URL.createObjectURL(blob);
      window.open(url);
      console.log("Success");
  });
  }
}
