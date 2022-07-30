import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateimportContfromShipComponent } from '../createimport-contfrom-ship/createimport-contfrom-ship.component';
import { DeleteimportContfromShipComponent } from '../deleteimport-contfrom-ship/deleteimport-contfrom-ship.component'
import { ImportContComponent } from '../import-cont/import-cont.component'
import { BayPlanPaging,BayPlanIndex} from '../../../../Model/BayPlanDetail'
import { ImportContFromShipService } from '../../../../Service/importContFromShip/import-cont-from-ship.service';
import { Pagination } from '../../../../Model/Table';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom';
@Component({
  selector: 'app-indeximport-contfrom-ship',
  templateUrl: './indeximport-contfrom-ship.component.html',
  styleUrls: ['./indeximport-contfrom-ship.component.css']
})
export class IndeximportContfromShipComponent implements OnInit {

  loadding: boolean = false;
  isCreate: boolean = true;
  Id: number = 0;

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
    ChuHang : '',
    ChuyenNhapXuat: '',
    CangCuoi : '',
    ContNo: '',
  }
  constructor(public dialog: MatDialog,private service: ImportContFromShipService,private toastr: ToastrcustomService) { }

  ngOnInit(): void {
    this.Paging();
  }

  Paging() {
    this.service.Paging(this.PageInfo).subscribe(
      data => {
        this.loadding = false;
          this.lstdata = data.data;
          this.Pagination.currentPage = data.data.currentPage,
            this.Pagination.pageSize = data.data.pageSize,
            this.Pagination.totalPage = data.data.totalPage,
            this.Pagination.totalRecord = data.data.totalRecord
      });
  }

  onChangePage(pageOfItems: BayPlanPaging) {
    this.PageInfo = pageOfItems
    this.Paging()
  }

  openImport() {
    const dialogRef = this.dialog.open(ImportContComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.status === 200) {
          this.toastr.showSuccess(result.message);
          this.Paging();
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
          this.Paging();

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
          this.Paging();
        }
        else {
          this.toastr.showError(result.message);
        }
      }
     });
  }

  openDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteimportContfromShipComponent);
    dialogRef.componentInstance.Id = id;
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

}
