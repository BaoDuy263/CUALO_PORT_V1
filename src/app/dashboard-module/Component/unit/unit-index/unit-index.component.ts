
import { Component, OnInit } from '@angular/core';
// import { lstUnit,unitCreate } from '../../../../Model/unit'
// import { UnitService } from '../../../../Service/unit/unit.service'
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom'
import { UnitCreateComponent } from '../unit-create/unit-create.component';
import { UnitDeleteComponent } from '../unit-delete/unit-delete.component';
import { UnitCreate } from '../../../../Model/Unit';
import { UnitService } from 'src/app/Service/Unit/unit.service';
@Component({
  selector: 'app-unit-index',
  templateUrl: './unit-index.component.html',
})
export class UnitIndexComponent implements OnInit {
  isCreate: boolean = true;
  unitId: number = 0;
  loadding: boolean = false;


  lstdata: any = [];

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  }
  constructor(private unitService: UnitService, public dialog: MatDialog, private toastr: ToastrcustomService) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }

  Pagingdata(PageInfo: any) {
    this.loadding = true;
    this.unitService.Paging().subscribe(data => {
      this.loadding = false;
      this.lstdata = data;
    })
  }

  handlePage(event: any) {
    this.PageInfo.page = event.page;
    this.PageInfo.pageSize = event.pageSize;
    this.Pagingdata(this.PageInfo);
  }

  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.Pagingdata(this.PageInfo);
  }


  //Create
  unitCreate: UnitCreate = {
    name: '',
    note: '',
    status: true,
  }

  openEdit(id: number) {
    this.isCreate = false;
    this.unitId = id;
    const dialogRef = this.dialog.open(UnitCreateComponent);
    console.log(dialogRef)
    dialogRef.componentInstance.customerId = this.unitId;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
        }
        else {
          this.toastr.showError(result.message);
        }
      }
      this.Pagingdata(this.PageInfo);
    })

  }

  openCreate() {
    const dialogRef = this.dialog.open(UnitCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
        }
        else {
          this.toastr.showError(result.message);
        }
      }
      this.Pagingdata(this.PageInfo);
    });

  }


  openDelete(id: number) {
    this.unitId = id;
    const dialogRef = this.dialog.open(UnitDeleteComponent);
    console.log(dialogRef)
    dialogRef.componentInstance.customerId = this.unitId;
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.statusCode === 200) {
          this.toastr.showSuccess(result.message);
        }
        else {
          this.toastr.showError(result.message);
        }
      }
      this.Pagingdata(this.PageInfo);
    });
  }

}
