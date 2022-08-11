import { Component, OnInit } from '@angular/core';
import { BayPlanIndex, BayPlanPaging } from 'src/app/Model/BayPlanDetail';
import { Pagination } from 'src/app/Model/Table';
import { PerformService } from '../../../../Service/Perform/perform.service'
@Component({
  selector: 'app-index-perform-from-ship',
  templateUrl: './index-perform-from-ship.component.html',
  styleUrls: ['./index-perform-from-ship.component.css']
})
export class IndexPerformFromShipComponent implements OnInit {

  loadding : boolean = true;
  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }

  lstdata : BayPlanIndex = {
    currentPage : 0,
    pageSize: 0,
    totalPage : 0,
    totalRecord : 0,
    data : []
  }

  PageInfo : BayPlanPaging = {
    Page: 1,
    PageSize: 10,
    Voyace : '',
    ContNo: '',
    BillNo : '',
  }

  constructor(private service : PerformService) { }

  ngOnInit(): void {
    this.Paging();
  }

  Paging() {
    this.service.PagingShipToPort(this.PageInfo).subscribe(
      data => {
        this.loadding = false;
          this.lstdata = data.data;
          this.Pagination.currentPage = data.data.currentPage,
            this.Pagination.pageSize = data.data.pageSize,
            this.Pagination.totalPage = data.data.totalPage,
            this.Pagination.totalRecord = data.data.totalRecord
      });
  }

  onChangePage(pageOfItems: any) {
    this.PageInfo.Page = pageOfItems.page;
    this.PageInfo.PageSize = pageOfItems.pageSize;
    this.Paging()
  }

}
