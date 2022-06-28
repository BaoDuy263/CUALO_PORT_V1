import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
//Component
import { HomeComponent } from './Component/home/home.component';
import { KhachhangIndexComponent } from './Component/khachhang/khachhang-index/khachhang-index.component';
import { KhachhangCreateComponent } from './Component/khachhang/khachhang-create/khachhang-create.component';
import { KhachhangDeleteComponent } from './Component/khachhang/khachhang-delete/khachhang-delete.component';
import { PaginationComponent } from '../View/pagination/pagination.component';
import { SidebarComponent } from './Component/sidebar/sidebar/sidebar.component';
import { TaikhoanComponent } from './Component/taikhoan/taikhoan.component';
import { MultidropdownComponent } from '../View/multidropdown/multidropdown.component';
import { LoadingComponent } from '../View/loading/loading.component'
//Thư viện

// import {MatMenuModule} from '@angular/material/menu';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatTreeModule} from '@angular/material/tree';
import { MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

//
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { ExampleComponent } from './Component/example/example.component';

import { UnitCreateComponent } from './Component/unit/unit-create/unit-create.component';
import { UnitDeleteComponent } from './Component/unit/unit-delete/unit-delete.component';
import { UnitIndexComponent } from './Component/unit/unit-index/unit-index.component';
import { VehicleCreateComponent } from './Component/vehicle/vehicle-create/vehicle-create.component';
// import { VehicleCreateComponent } from './Component/vehicle-create/vehicle-create.component';
import { VehicleDeleteComponent } from './Component/vehicle/vehicle-delete/vehicle-delete.component';
import { VehicleIndexComponent } from './Component/vehicle/vehicle-index/vehicle-index.component';
import { SettingIndexComponent } from './Component/setting/setting-index/setting-index.component';
import { ProductGroupCreateComponent } from './Component/product-group/product-group-create/product-group-create.component';
import { ProductGroupDeleteComponent } from './Component/product-group/product-group-delete/product-group-delete.component';
import { ProductGroupIndexComponent } from './Component/product-group/product-group-index/product-group-index.component';
import { ProductIndexComponent } from './Component/product/product-index/product-index.component';
import { ProductCreateComponent } from './Component/product/product-create/product-create.component';
import { ProductDeleteComponent } from './Component/product/product-delete/product-delete.component';
import { BookingContEmptyIndexComponent } from './Component/booking-cont-empty/booking-cont-empty-index/booking-cont-empty-index.component';
import { BookingContEmptyCreateComponent } from './Component/booking-cont-empty/booking-cont-empty-create/booking-cont-empty-create.component';
import { BookingContEmptyDeleteComponent } from './Component/booking-cont-empty/booking-cont-empty-delete/booking-cont-empty-delete.component';
import { BookingImportContCreateComponent } from './Component/booking-import-cont/booking-import-cont-create/booking-import-cont-create.component';
import { BookingImportContDeleteComponent } from './Component/booking-import-cont/booking-import-cont-delete/booking-import-cont-delete.component';
import { BookingImportContIndexComponent } from './Component/booking-import-cont/booking-import-cont-index/booking-import-cont-index.component';


@NgModule({
  declarations: [
    HomeComponent,
    //Khách hàng
    KhachhangIndexComponent,
    KhachhangCreateComponent,
    KhachhangDeleteComponent,
    TaikhoanComponent ,
    //view
    PaginationComponent,

    MultidropdownComponent,
    SidebarComponent,
    LoadingComponent,
    ExampleComponent,
    UnitCreateComponent,
    UnitDeleteComponent,
    UnitIndexComponent,
    VehicleCreateComponent,
    VehicleDeleteComponent,
    VehicleIndexComponent,
    SettingIndexComponent,
    ProductGroupCreateComponent,
    ProductGroupDeleteComponent,
    ProductGroupIndexComponent,
    ProductIndexComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    BookingContEmptyIndexComponent,
    BookingContEmptyCreateComponent,
    BookingContEmptyDeleteComponent,
    BookingImportContCreateComponent,
    BookingImportContDeleteComponent,
    BookingImportContIndexComponent,
    MultidropdownComponent,
    SidebarComponent,
    ExampleComponent,
     
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatTreeModule,
    // MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    //
    FormsModule,
    ReactiveFormsModule,
    //
    // ToastrModule.forRoot()
  ],
})
export class DashboardModuleModule { }
