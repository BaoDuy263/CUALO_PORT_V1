import { ListContanerComponent } from './../list-contaner/list-contaner.component';
import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../../../Model/Table';
import { lstBookingCustomer } from '../../../../Model/Booking-customer'
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { BookingCustomerCreateComponent } from '../booking-customer-create/booking-customer-create.component'
import { BookingCustomerDeleteComponent } from '../booking-customer-delete/booking-customer-delete.component'
@Component({
    selector: 'app-booking-customer-index',
    templateUrl: './booking-customer-index.component.html',
    styleUrls: ['./booking-customer-index.component.css']
})
export class BookingCustomerIndexComponent implements OnInit {

    isCreate: boolean = true;
    bookCutomerId: number = 0;
    loadding: boolean = false;

    Pagination: Pagination = {
        currentPage: 0,
        pageSize: 0,
        totalRecord: 0,
        totalPage: 0,
    }

    lstdata: lstBookingCustomer = {
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
        pageSize: 10,
        Date: ''
    }


    constructor(private bookingServiceService: BookingServiceService, public dialog: MatDialog, private toastr: ToastrcustomService, private customerService: CustomerService, private productService: ProductService) { }

    ngOnInit(): void {
        this.Pagingdata(this.PageInfo);
        this.GetListSelectCustomer();
        this.GetListSelectProduct();
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
        this.bookingServiceService.Paging(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize, this.PageInfo.Date.slice(0,10)).subscribe(data => {
            this.loadding = false;
            this.lstdata = data;
            this.Pagination.currentPage = data.currentPage,
                this.Pagination.pageSize = data.pageSize,
                this.Pagination.totalPage = data.totalPage,
                this.Pagination.totalRecord = data.totalRecord
        })
    }

    GetListSelectCustomer() {
        // this.customerService.GetSelectList().subscribe(data => {
        //   this.lstCustomer = data.data;
        // })
    }

    GetListSelectProduct() {
        // this.productService.GetSelectList().subscribe(data => {
        //   this.lstProduct = data.data;
        // })
    }


    onSearch(e: any) {
        this.PageInfo.Keyword = e;
        this.PageInfo.page = 1;
        this.Pagingdata(this.PageInfo);
    }

    onSearchDate(e:any) {
      this.PageInfo.Date = e;
      this.PageInfo.page = 1;
      this.Pagingdata(this.PageInfo);
    }

    openCreate() {
        const dialogRef = this.dialog.open(BookingCustomerCreateComponent);
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
        this.bookCutomerId = id;
        const dialogRef = this.dialog.open(BookingCustomerCreateComponent, { width: '50%' });
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
        const dialogRef = this.dialog.open(BookingCustomerDeleteComponent);
        dialogRef.componentInstance.bookCutomerId = id;
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
            this.bookingServiceService.CreateBookings(formData).subscribe(res => {
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

    openListCont(id: number) {
      const dialogRef = this.dialog.open(ListContanerComponent, { width: '25%' });
      dialogRef.componentInstance.planId = id;
    }
}
