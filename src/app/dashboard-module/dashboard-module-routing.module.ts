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
import { VehicleCreateComponent } from './Component/vehicle/vehicle-create/vehicle-create.component';
import { VehicleIndexComponent } from './Component/vehicle/vehicle-index/vehicle-index.component';

import { RoleGuardService } from '../Interceptor//rolo.guard.service'
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
      path: 'don-vi', 
      component: UnitIndexComponent,
      canActivate: [RoleGuardService],
      data: {
        roles: ["test"]
      }
    },
    { path: 'phuong-tien', component: VehicleIndexComponent },
    { path: 'nhom-san-pham', component: ProductGroupIndexComponent },
    { path: 'san-pham', component: ProductIndexComponent },
    { path: 'setting', component: SettingIndexComponent },
    { path: 'booking-cont-rong', component: BookingContEmptyIndexComponent },
    { path: 'booking-nhap-cont', component: BookingImportContIndexComponent },
    // { path: 'don-vi', component: UnitIndexComponent }

  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
