import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingCustomer } from 'src/app/Model/Booking-customer';
import { Pagination } from 'src/app/Model/Table';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { ContainerService } from 'src/app/Service/container/container.service';
import { convertHelper } from '../helper/convertHelper';

@Component({
  selector: 'app-list-contaner',
  templateUrl: './list-contaner.component.html',
  styleUrls: ['./list-contaner.component.css']
})
export class ListContanerComponent implements OnInit {
  loading: boolean = false;
  lstData: Container[] = [];
  itemSelected = "";
  planDetail: BookingCustomer | any = null;
  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10,
  };
  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }
  constructor(private bookingService: BookingServiceService,
    private containerService: ContainerService,
    public dialogRef: MatDialogRef<ListContanerComponent>, public convertHelper: convertHelper) { }

  ngOnInit(): void {
    this.loadData(this.PageInfo);
    this.itemSelected = this.planDetail?.containerName;
  }

  loadData(PageInfo: any) {
    this.loading = true;
    this.containerService.GetAllContEmpt(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize).subscribe(data => {
      this.loading = false;
      this.lstData = data.data;
      this.Pagination.currentPage = data.currentPage,
        this.Pagination.pageSize = data.pageSize,
        this.Pagination.totalPage = data.totalPage,
        this.Pagination.totalRecord = data.totalRecord
    });
  }

  hanldeClickItem(item: Container) {
    this.itemSelected = item.code;
  }

  closeDialog() {
    this.dialogRef.close(ListContanerComponent)
  }

  handleSubmit() {
    this.bookingService.CreateEIRFromPlan({
      id: this.planDetail.id,
      containerNo: this.itemSelected,
      activity: this.planDetail.activity
    }).subscribe(res => this.dialogRef.close(res))
  }

  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    this.PageInfo = pageOfItems
    this.loadData(pageOfItems)
  }

}

export interface Container {
  code: string,
  status: number
}
