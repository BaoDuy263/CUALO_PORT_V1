import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
//Component
import { HomeComponent } from './Component/home/home.component';
import { KhachhangIndexComponent } from './Component/khachhang/khachhang-index/khachhang-index.component';
import { KhachhangCreateComponent } from './Component/khachhang/khachhang-create/khachhang-create.component';
import { KhachhangDeleteComponent } from './Component/khachhang/khachhang-delete/khachhang-delete.component';
import { PaginationComponent } from '../View/pagination/pagination.component';
import { SidebarComponent } from './Component/sidebar/sidebar/sidebar.component';
//Thư viện
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatDialogModule} from '@angular/material/dialog';
// import { ToastrModule } from 'ngx-toastr';
//
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { UnitCreateComponent } from './Component/unit/unit-create/unit-create.component';
import { UnitDeleteComponent } from './Component/unit/unit-delete/unit-delete.component';
import { UnitIndexComponent } from './Component/unit/unit-index/unit-index.component';

@NgModule({
  declarations: [
    HomeComponent,
    //Khách hàng
    KhachhangIndexComponent,
    KhachhangCreateComponent,
    KhachhangDeleteComponent,
    SidebarComponent,
    //view
    PaginationComponent,
    UnitCreateComponent,
    UnitDeleteComponent,
    UnitIndexComponent  
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
    MatDialogModule,
    //
    FormsModule,
    ReactiveFormsModule,
    //
    // ToastrModule.forRoot()
  ]
})
export class DashboardModuleModule { }
