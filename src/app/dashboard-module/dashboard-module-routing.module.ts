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
import { QLTaiKhoanIndexComponent} from './Component/quan-ly-tai-khoan/tai-khoan-index/tai-khoan-index.component';
import { BookingCustomerIndexComponent } from './Component/booking-customer/booking-customer-index/booking-customer-index.component'


import { RoleGuardService } from '../Interceptor//rolo.guard.service'
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { IndeximportContfromShipComponent } from './Component/importContFromShip/indeximport-contfrom-ship/indeximport-contfrom-ship.component';
const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    {
      path: 'khachhang',
      component: KhachhangIndexComponent,
      canActivate: [RoleGuardService],
      data: {
        roles: ["Admin"]
      }
    },
    { path: 'taikhoan', component : TaikhoanComponent},
    {
      path: 'example',
      component : ExampleComponent,
    },
    {
      path: 'nhapcont',
      component : IndeximportContfromShipComponent,
    },
    {
      path: 'don-vi',
      component: UnitIndexComponent,
      canActivate: [RoleGuardService],
      data: {
        roles: ["Admin", "ds"]
      }
    },
    { path: 'phuong-tien', component: VehicleIndexComponent },
    { path: 'nhom-san-pham', component: ProductGroupIndexComponent },
    { path: 'san-pham', component: ProductIndexComponent },
    { path: 'setting', component: SettingIndexComponent },
    { path: 'booking-cont-rong', component: BookingContEmptyIndexComponent },
    { path: 'booking-nhap-cont', component: BookingImportContIndexComponent },
    { path: '404-not-found', component: NotfoundComponent },

    // Quản trị hệ thống
    { path: 'quan-ly-tai-khoan', component :QLTaiKhoanIndexComponent},
    { path: 'booking-customer', component :BookingCustomerIndexComponent},
    // { path: 'don-vi', component: UnitIndexComponent }

  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
