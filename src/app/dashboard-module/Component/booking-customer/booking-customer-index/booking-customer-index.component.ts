import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { Pagination } from '../../../../Model/Table';
import { lstBookingCustomer } from '../../../../Model/Booking-customer'
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { BookingCustomerCreateComponent } from '../booking-customer-create/booking-customer-create.component'
import { BookingCustomerDeleteComponent } from '../booking-customer-delete/booking-customer-delete.component'
import { HttpClient } from '@angular/common/http';
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
        pageSize: 10
    }


    constructor(private bookingServiceService: BookingServiceService, public dialog: MatDialog,
        private toastr: ToastrcustomService, private customerService: CustomerService, private productService: ProductService, private http: HttpClient) { }

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
        this.bookingServiceService.Paging(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize).subscribe(data => {
            this.loadding = false;
            this.lstdata = data;
            this.Pagination.currentPage = data.currentPage,
                this.Pagination.pageSize = data.pageSize,
                this.Pagination.totalPage = data.totalPage,
                this.Pagination.totalRecord = data.totalRecord
        })
    }

    GetListSelectCustomer() {
        this.customerService.GetSelectList().subscribe(data => {
            this.lstCustomer = data.data;
        })
    }

    GetListSelectProduct() {
        this.productService.GetSelectList().subscribe(data => {
            this.lstProduct = data.data;
        })
    }


    onSearch(e: any) {
        this.PageInfo.Keyword = e;
        this.PageInfo.page = 1;
        this.Pagingdata(this.PageInfo);
    }

    openCreate() {
        const dialogRef = this.dialog.open(BookingCustomerCreateComponent);
        dialogRef.componentInstance.lstCustomer = this.lstCustomer;
        dialogRef.componentInstance.lsttypeMerchandise = this.lstProduct;
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
        dialogRef.componentInstance.lstCustomer = this.lstCustomer;
        dialogRef.componentInstance.lsttypeMerchandise = this.lstProduct;
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
        // try {
        //   this.bookingServiceService.UploadExcel(selectedFile).subscribe(res => console.log(res,'res'));
        // } catch (error) {
        //   this.loadding = false;
        //   console.log(error)
        // }
        const fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile)
        fileReader.onload = (event) => {
          let binaryData = event.target?.result;
          let workbook = XLSX.read(binaryData, { type: 'binary' });
          workbook.SheetNames.forEach((sheet) => {
            const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]) as any;
            try {
                  this.loadding = true;
                  this.bookingServiceService.CreateBookings(JSON.stringify(data)).subscribe(response => this.Pagingdata(this.PageInfo))
                } catch (error) {
                  this.loadding = false;
                  throw new Error("error 500");
                }
            })
        }
    }
}
