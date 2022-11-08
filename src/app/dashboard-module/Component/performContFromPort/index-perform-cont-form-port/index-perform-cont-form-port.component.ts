import { Component, OnInit } from '@angular/core';
import { PortToShipIndex, PortToShipPaging } from 'src/app/Model/BayPlanDetail';
import { Pagination } from 'src/app/Model/Table';
import { PerformService } from '../../../../Service/Perform/perform.service'

@Component({
  selector: 'app-index-perform-cont-form-port',
  templateUrl: './index-perform-cont-form-port.component.html',
  styleUrls: ['./index-perform-cont-form-port.component.css']
})
export class IndexPerformContFormPortComponent implements OnInit {

  loadding : boolean = true; 
  PageInfo : PortToShipPaging = {
    Page: 1,
    PageSize: 10,
    Voyace : '',
    ContNo: '',
    FromDate: new Date,
    ToDate: new Date
  }

  lstdata : PortToShipIndex = {
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

  constructor(private service : PerformService) { }

  ngOnInit(): void {
    this.Paging();
  }

  Paging() {
    this.service.PagingPorttoShip(this.PageInfo).subscribe(
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
