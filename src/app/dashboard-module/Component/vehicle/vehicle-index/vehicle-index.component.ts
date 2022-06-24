
import { Component, OnInit  } from '@angular/core';
// import { lstCutomer,productCreate } from '../../../../Model/Customer';
import { Pagination } from '../../../../Model/Table';
// import { VehicleService } from '../../../../Service/Customer/customer.service';
import {MatDialog} from '@angular/material/dialog';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom'
import { lstProduct, ProductCreate } from 'src/app/Model/Product';
import { VehicleService } from 'src/app/Service/Vehicle/vehicle.service';
import { lstVehicle, VehicleCreate } from 'src/app/Model/Vehicle';
import { VehicleCreateComponent } from '../vehicle-create/vehicle-create.component';
import { VehicleDeleteComponent } from '../vehicle-delete/vehicle-delete.component';

@Component({
  selector: 'app-vehicle-index',
  templateUrl: './vehicle-index.component.html',
})
export class VehicleIndexComponent implements OnInit {
  isCreate : boolean = true;
  customerId : number = 0;
  
  Pagination: Pagination = {
    currentPage : 0,
    pageSize : 0,
    totalRecord : 0,
    totalPage : 0,
  }

  lstdata : lstVehicle = {
    currentPage : 0,
    pageSize : 0,
    totalRecord : 0,
    totalPage : 0,
    data : []
  };

  PageInfo = {
    page : 1,
    Keyword : '',
    pageSize : 10
  }  
  constructor(private VehicleService : VehicleService,public dialog: MatDialog,private toastr : ToastrcustomService) { }

  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }

  Pagingdata(PageInfo : any)  {
     this.VehicleService.Paging(this.PageInfo.page,this.PageInfo.Keyword,this.PageInfo.pageSize).subscribe(data => {
      // console.log(data)  
      this.lstdata = data;
        this.Pagination.currentPage = data.currentPage,
        this.Pagination.pageSize = data.pageSize,
        this.Pagination.totalPage = data.totalPage,
        this.Pagination.totalRecord = data.totalRecord
        // console.log('this.Pagination',this.Pagination);
     })
  }

  handlePage(event:any) {
    this.PageInfo.page = event.page;
    this.PageInfo.pageSize = event.pageSize;
    this.Pagingdata(this.PageInfo);
  }

  onSearch(e:any)
  {
    this.PageInfo.Keyword = e;
    this.Pagingdata(this.PageInfo);
  }


  //Create
  VehicleCreate : VehicleCreate = {
    licensePlates: '',
    rfidcode: '',
    nameDriver: '',
    tonnageDefault : '',
    idCardNumber: '',
    mediumUnladenWeight: '',
  }

  openEdit(id: number){
    this.isCreate = false;
    this.customerId = id;
    const dialogRef = this.dialog.open(VehicleCreateComponent);
    dialogRef.componentInstance.customerId = this.customerId;
    dialogRef.componentInstance.isCreate = this.isCreate;
    dialogRef.afterClosed().subscribe(result => {
      if(result){
          if(result.statusCode === 200){
            this.toastr.showSuccess(result.message);
          }
          else
          {
            this.toastr.showError(result.message);
          }
      } 
      this.Pagingdata(this.PageInfo);
    })
    
  }

  openCreate() {
    const dialogRef = this.dialog.open(VehicleCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
        if(result){
          if(result.statusCode === 200){
            this.toastr.showSuccess(result.message);
          }
          else
          {
            this.toastr.showError(result.message);
          }
        }
        this.Pagingdata(this.PageInfo);
    });
    
  }


  openDelete(id: number){
    this.customerId = id;
    const dialogRef = this.dialog.open(VehicleDeleteComponent);
    dialogRef.componentInstance.customerId = this.customerId;
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(result.statusCode === 200){
          this.toastr.showSuccess(result.message);
        }
        else
        {
          this.toastr.showError(result.message);
        }
      }
      this.Pagingdata(this.PageInfo);
  });
  }

}
