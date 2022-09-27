import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingCustomer } from 'src/app/Model/Booking-customer';
import { ContainerV2, lstContainerV2 } from 'src/app/Model/Containerv2';
import { Pagination } from 'src/app/Model/Table';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
import { convertHelper } from '../helper/convertHelper';

@Component({
  selector: 'app-list-contaner',
  templateUrl: './list-contaner.component.html',
  styleUrls: ['./list-contaner.component.css']
})
export class ListContanerComponent implements OnInit {
  loading: boolean = true;
  lstData: lstContainerV2 = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
    data: []
  };
  itemSelected: string[] = [];
  planDetail: BookingCustomer | any = null;
  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10,
    startDate: '',
    endDate: ''
  }
  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }
  constructor(private bookingService: BookingServiceService,
    private containerService: Containerv2Service,
    public dialogRef: MatDialogRef<ListContanerComponent>, public convertHelper: convertHelper) { }

  ngOnInit(): void {
    this.loadData(this.PageInfo);
    this.itemSelected = this.planDetail?.listContainer.split(",");
    this.itemSelected = this.itemSelected.filter(item => item != '');
    console.log(this.planDetail)
  }

  loadData(PageInfo: any) {
    this.loading = true;
    this.containerService.Paging(this.PageInfo.page, this.PageInfo.Keyword,
      this.PageInfo.pageSize, this.PageInfo.startDate, this.PageInfo.endDate)
    .subscribe(data => {
      this.loading = false;
      this.lstData.data = data.data;
      this.Pagination.currentPage = data.currentPage,
        this.Pagination.pageSize = data.pageSize,
        this.Pagination.totalPage = data.totalPage,
        this.Pagination.totalRecord = data.totalRecord
    });
  }

  hanldeClickItem(item: ContainerV2) {
    if (this.itemSelected.includes(item.contNo)) {
      this.itemSelected = this.itemSelected.filter(i => i != item.contNo);
    }
    else {
      this.itemSelected = [...this.itemSelected, item.contNo]
    }
  }

  removeAssigneContainer(item: string) {
    if (this.itemSelected.includes(item)) {
      this.itemSelected = this.itemSelected.filter(i => i != item)
    }
  };

  closeDialog() {
    this.dialogRef.close()
  }

  handleSubmit() {
    this.loading = true;
    this.bookingService.CreateEIRFromPlan({
      id: this.planDetail.id,
      listContainerNo: this.itemSelected,
      activity: this.planDetail.activity
    }).subscribe(res => this.dialogRef.close(res))
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

}
