import { PerformIndexComponent } from './Component/booking-customer/perform-index/perform-index.component';
import { ContainerIndexComponent } from './Component/container/container-index/container-index.component';

import { ImpContTempIndexComponent } from './Component/importContEmpt/imp-cont-temp/imp-cont-temp-index/imp-cont-temp-index.component';
import { ImpContListIndexComponent } from './Component/importContEmpt/imp-cont-list/imp-cont-list-index/imp-cont-list-index.component';
import { PlanPackingIndexComponent } from './Component/plan-packing/plan-packing-index/plan-packing-index.component';
import { PackingBoardComponent } from './Component/packing-board/packing-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingContEmptyIndexComponent } from './Component/booking-cont-empty/booking-cont-empty-index/booking-cont-empty-index.component';
import { BookingImportContIndexComponent } from './Component/booking-import-cont/booking-import-cont-index/booking-import-cont-index.component';
import { HomeComponent } from './Component/home/home.component';
import { KhachhangIndexComponent } from './Component/khachhang/khachhang-index/khachhang-index.component';

import { TaikhoanComponent } from './Component/taikhoan/taikhoan.component';
import { ExampleComponent } from './Component/example/example.component'
import { ProductGroupIndexComponent } from './Component/product-group/product-group-index/product-group-index.component';
import { ProductIndexComponent } from './Component/product/product-index/product-index.component';
import { SettingIndexComponent } from './Component/setting/setting-index/setting-index.component';
import { UnitIndexComponent } from './Component/unit/unit-index/unit-index.component';
import { VehicleIndexComponent } from './Component/vehicle/vehicle-index/vehicle-index.component';
import { QLTaiKhoanIndexComponent } from './Component/quan-ly-tai-khoan/tai-khoan-index/tai-khoan-index.component';
import { BookingCustomerIndexComponent } from './Component/booking-customer/booking-customer-index/booking-customer-index.component'


import { RoleGuardService } from '../Interceptor//rolo.guard.service'
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { IndeximportContfromShipComponent } from './Component/importContFromShip/indeximport-contfrom-ship/indeximport-contfrom-ship.component';
import { IndexImportContFromPortComponent } from './Component/importContFromPort/index-import-cont-from-port/index-import-cont-from-port.component';
import { IndexPerformContFormPortComponent } from './Component/performContFromPort/index-perform-cont-form-port/index-perform-cont-form-port.component';
import { IndexPerformFromShipComponent } from './Component/performContFromShip/index-perform-from-ship/index-perform-from-ship.component';
import { IndexbayplanComponent } from './Component/bayPlan/indexbayplan/indexbayplan.component'
import { ImpContBoardComponent } from './Component/importContEmpt/imp-cont-board/imp-cont-board.component';
import { ContainerMapsListComponent } from './Component/container/container-maps-list/container-maps-list.component';
import { ContainerMapsIndexComponent } from './Component/container/container-maps-index/container-maps-index.component';
import { TransactionIndexComponent } from './Component/transaction/transaction-index/transaction-index.component';

import { ContHistoryComponent } from './Component/container/container-detail/cont-history/cont-history.component';
import { ContInfoComponent } from './Component/container/container-detail/cont-info/cont-info.component';
import { ContImgsComponent } from './Component/container/container-detail/cont-imgs/cont-imgs.component';
import { ReportDailyComponent } from './Component/report-daily/report-daily.component';
import { QuanTriHeThongComponent } from './Component/quan-tri-he-thong/quan-tri-he-thong.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'khachhang',
        component: KhachhangIndexComponent,
        canActivate: [RoleGuardService],
        data: {
          roles: ["Admin"]
        }
      },
      { path: 'taikhoan', component: TaikhoanComponent },
      {
        path: 'example',
        component: ExampleComponent,
      },
      {
        path: 'nhapcont',
        component: IndeximportContfromShipComponent,
      },
      {
        path: 'xuatcont',
        component: IndexImportContFromPortComponent,
      },
      {
        path: 'thuchiennhapcont',
        component: IndexPerformFromShipComponent,
      },
      {
        path: 'thuchienxuatcont',
        component: IndexPerformContFormPortComponent,
      },
      {
        path: 'quanlylichtau',
        component: IndexbayplanComponent,
      },
      {
        path: 'don-vi',
        component: UnitIndexComponent,
        canActivate: [RoleGuardService],
        data: {
          roles: ["Admin", "ds"]
        }
      },
      { path: 'dayilyreport', component: ReportDailyComponent },
      { path: 'phuong-tien', component: VehicleIndexComponent },
      { path: 'nhom-san-pham', component: ProductGroupIndexComponent },
      { path: 'san-pham', component: ProductIndexComponent },
      { path: 'setting', component: SettingIndexComponent },
      { path: 'booking-cont-rong', component: BookingContEmptyIndexComponent },
      { path: 'booking-nhap-cont', component: BookingImportContIndexComponent },
      { path: '404-not-found', component: NotfoundComponent },
      // Quản trị hệ thống
      { path: 'quan-ly-tai-khoan', component: QLTaiKhoanIndexComponent },
      { path: 'container-maps', component: ContainerMapsIndexComponent,
        children: [
          { path: 'cont-history', component: ContHistoryComponent},
          { path: 'cont-info', component: ContInfoComponent},
          { path: 'cont-imgs', component: ContImgsComponent},
          // { path: 'list', component: ImpContListIndexComponent },
          // { path: 'template', component: PlanPackingIndexComponent },
        ]
      },
      { path: 'container-maps-list', component: ContainerMapsListComponent },
      { path: 'container', component: ContainerIndexComponent},
      { path: 'transaction', component: TransactionIndexComponent},
      { path: 'quan-ly-he-thong', component: QuanTriHeThongComponent},
      {
        path: 'plan-packing', component: PackingBoardComponent,
        children: [
          { path: '', component: PerformIndexComponent},
          { path: 'list', component: BookingCustomerIndexComponent },
          { path: 'template', component: PlanPackingIndexComponent },
          { path: 'perform', component: PerformIndexComponent}
        ]
      },
      {
        path: 'import-container', component: ImpContBoardComponent,
        children: [
          { path: '', component: ImpContListIndexComponent},
          { path: 'list', component: ImpContListIndexComponent },
          { path: 'template', component: PlanPackingIndexComponent },
        ]
      },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
