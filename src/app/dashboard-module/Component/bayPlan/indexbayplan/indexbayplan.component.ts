import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { PlanIndex, PlanPaging } from 'src/app/Model/BayPlan';
import { Pagination } from 'src/app/Model/Table';
import { BayplanserviceService } from '../../../../Service/BayPlan/bayplanservice.service';
import { ImportbayplanComponent } from '../importbayplan/importbayplan.component'
@Component({
  selector: 'app-indexbayplan',
  templateUrl: './indexbayplan.component.html',
  styleUrls: ['./indexbayplan.component.css']
})
export class IndexbayplanComponent implements OnInit {

  loadding : boolean = true
  PageInfo : PlanPaging = {
    Page: 1,
    PageSize: 10,
    Voyace : '',
    Eta: new Date(),
    Etd: new Date(),
  }

  lstdata : PlanIndex = {
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

  constructor(private service: BayplanserviceService,public dialog: MatDialog,private toastr: ToastrcustomService) { }

  ngOnInit(): void {
    this.Paging();
  }

  Paging() {
    this.service.Paging(this.PageInfo).subscribe(
      data => {
        console.log('data',data);
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

  openImport() {
    const dialogRef = this.dialog.open(ImportbayplanComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
          this.Paging();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
    });
  }

  DowloadTemplate() {
    this.service.DowloadTemplate().subscribe(data => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

}
