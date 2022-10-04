import { AutocompleteComponent } from './../View/autocomplete/autocomplete.component';
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';


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
import { LoadingComponent } from '../View/loading/loading.component';

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

import {MatMenuModule} from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
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
import { QLTaiKhoanCreateComponent } from './Component/quan-ly-tai-khoan/tai-khoan-create/tai-khoan-create.component';
import { QLTaiKhoanDeleteComponent } from './Component/quan-ly-tai-khoan/tai-khoan-delete/tai-khoan-delete.component';
import { QLTaiKhoanIndexComponent } from './Component/quan-ly-tai-khoan/tai-khoan-index/tai-khoan-index.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { BookingCustomerIndexComponent } from './Component/booking-customer/booking-customer-index/booking-customer-index.component';
import { BookingCustomerCreateComponent } from './Component/booking-customer/booking-customer-create/booking-customer-create.component';
import { BookingCustomerDeleteComponent } from './Component/booking-customer/booking-customer-delete/booking-customer-delete.component';
import { IndeximportContfromShipComponent } from './Component/importContFromShip/indeximport-contfrom-ship/indeximport-contfrom-ship.component';
import { CreateimportContfromShipComponent } from './Component/importContFromShip/createimport-contfrom-ship/createimport-contfrom-ship.component';
import { DeleteimportContfromShipComponent } from './Component/importContFromShip/deleteimport-contfrom-ship/deleteimport-contfrom-ship.component';
import { ImportContComponent } from './Component/importContFromShip/import-cont/import-cont.component';
import { PackingBoardComponent } from './Component/packing-board/packing-board.component';
import { PlanPackingIndexComponent } from './Component/plan-packing/plan-packing-index/plan-packing-index.component';
import { PlanPackingDeleteComponent } from './Component/plan-packing/plan-packing-delete/plan-packing-delete.component';
import { PlanPackingCreateComponent } from './Component/plan-packing/plan-packing-create/plan-packing-create.component';
import { IndexImportContFromPortComponent } from './Component/importContFromPort/index-import-cont-from-port/index-import-cont-from-port.component';
import { ImportContFromPortComponent } from './Component/importContFromPort/import-cont-from-port/import-cont-from-port.component';
import { CreateImportContFromPortComponent } from './Component/importContFromPort/create-import-cont-from-port/create-import-cont-from-port.component';
import { DeleteImportContFromPortComponent } from './Component/importContFromPort/delete-import-cont-from-port/delete-import-cont-from-port.component';

import { ListContanerComponent } from './Component/booking-customer/list-contaner/list-contaner.component';

import { IndexPerformContFormPortComponent } from './Component/performContFromPort/index-perform-cont-form-port/index-perform-cont-form-port.component';
import { IndexPerformFromShipComponent } from './Component/performContFromShip/index-perform-from-ship/index-perform-from-ship.component';
import { IndexbayplanComponent } from './Component/bayPlan/indexbayplan/indexbayplan.component';
import { ImportbayplanComponent } from './Component/bayPlan/importbayplan/importbayplan.component';
import { ImpContBoardComponent } from './Component/importContEmpt/imp-cont-board/imp-cont-board.component';
import { ImpContListIndexComponent } from './Component/importContEmpt/imp-cont-list/imp-cont-list-index/imp-cont-list-index.component';
import { ImpContTempIndexComponent } from './Component/importContEmpt/imp-cont-temp/imp-cont-temp-index/imp-cont-temp-index.component';
import { ContainerIndexComponent } from './Component/container/container-index/container-index.component';
import { ContainerCreateComponent } from './Component/container/container-create/container-create.component';
import { ExportContainerComponent } from './Component/importContFromPort/export-container/export-container.component'
import { PerformIndexComponent } from './Component/booking-customer/perform-index/perform-index.component';
import { PerformCreateComponent } from './Component/booking-customer/perform-create/perform-create.component';
import { PerformDeleteComponent } from './Component/booking-customer/perform-delete/perform-delete.component';
import { UserAuthorizationComponent } from './Component/quan-ly-tai-khoan/user-authorization/user-authorization.component';
import { ExportcontainershipComponent } from './Component/importContFromShip/exportcontainership/exportcontainership.component';
import { ContainerHistoryIndexComponent } from './Component/container/container-history-index/container-history-index.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContainerDialogComponent } from './Component/container/container-dialog/container-dialog.component';
import { ContainerMapsIndexComponent } from './Component/container/container-maps-index/container-maps-index.component'
import { ContainerMapsInfoComponent } from './Component/container/container-maps-info/container-maps-info.component';
import { ContainerImagesEditComponent } from './Component/container/container-images-edit/container-images-edit.component';
import { TransactionIndexComponent } from './Component/transaction/transaction-index/transaction-index.component';
import { TransactionCreateComponent } from './Component/transaction/transaction-create/transaction-create.component';
import { TransactionDeleteComponent } from './Component/transaction/transaction-delete/transaction-delete.component';
import { ContainerPopupComponent } from './Component/container/container-popup/container-popup.component';
import { ContainerImagesListComponent } from './Component/container/container-images-list/container-images-list.component';
import { ContainerEditComponent } from './Component/container/container-edit/container-edit.component';
import { ReportDailyComponent } from './Component/report-daily/report-daily.component';



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
    AutocompleteComponent,
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
    SidebarComponent,
    ExampleComponent,
    QLTaiKhoanCreateComponent,
    QLTaiKhoanDeleteComponent,
    QLTaiKhoanIndexComponent,
    NotfoundComponent,
    BookingCustomerIndexComponent,
    BookingCustomerCreateComponent,
    BookingCustomerDeleteComponent,
    IndeximportContfromShipComponent,
    CreateimportContfromShipComponent,
    DeleteimportContfromShipComponent,
    ImportContComponent,
    PackingBoardComponent,
    PlanPackingIndexComponent,
    PlanPackingDeleteComponent,
    PlanPackingCreateComponent,
    IndexImportContFromPortComponent,
    ImportContFromPortComponent,
    CreateImportContFromPortComponent,
    DeleteImportContFromPortComponent,
    ListContanerComponent,
    IndexPerformContFormPortComponent,
    IndexPerformFromShipComponent,
    IndexbayplanComponent,
    ImportbayplanComponent,
    ImpContBoardComponent,
    ImpContListIndexComponent,
    ImpContTempIndexComponent,
    ContainerIndexComponent,
    ContainerCreateComponent,
    ExportContainerComponent,
    PerformIndexComponent,
    PerformCreateComponent,
    PerformDeleteComponent,
    UserAuthorizationComponent,
    ExportcontainershipComponent,
    ContainerHistoryIndexComponent,
    ContainerDialogComponent,
    ContainerMapsIndexComponent,
    ContainerMapsInfoComponent,
    ContainerImagesEditComponent,
    TransactionIndexComponent,
    TransactionCreateComponent,
    TransactionDeleteComponent,
    ContainerPopupComponent,
    ContainerEditComponent,
    ReportDailyComponent,
    ContainerImagesListComponent,

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
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    //
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
    //
    // ToastrModule.forRoot()
  ],
})
export class DashboardModuleModule { }
