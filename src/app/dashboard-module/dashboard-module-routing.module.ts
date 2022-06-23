import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { KhachhangIndexComponent } from './Component/khachhang/khachhang-index/khachhang-index.component';
import { ProductGroupIndexComponent } from './Component/product-group/product-group-index/product-group-index.component';
import { ProductIndexComponent } from './Component/product/product-index/product-index.component';
import { SettingIndexComponent } from './Component/setting/setting-index/setting-index.component';
import { UnitIndexComponent } from './Component/unit/unit-index/unit-index.component';
import { VehicleCreateComponent } from './Component/vehicle/vehicle-create/vehicle-create.component';
import { VehicleIndexComponent } from './Component/vehicle/vehicle-index/vehicle-index.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    { path: 'khachhang', component: KhachhangIndexComponent },
    { path: 'don-vi', component: UnitIndexComponent },
    { path: 'phuong-tien', component: VehicleIndexComponent },
    { path: 'nhom-san-pham', component: ProductGroupIndexComponent },
    { path: 'san-pham', component: ProductIndexComponent },
    { path: 'setting', component: SettingIndexComponent },
    // { path: 'don-vi', component: UnitIndexComponent }
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
