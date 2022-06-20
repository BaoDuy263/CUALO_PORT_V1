import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';

//Component
import { HomeComponent } from './Component/home/home.component';
import { KhachhangIndexComponent } from './Component/khachhang/khachhang-index/khachhang-index.component';
import { KhachhangCreateComponent } from './Component/khachhang/khachhang-create/khachhang-create.component';
import { KhachhangEditComponent } from './Component/khachhang/khachhang-edit/khachhang-edit.component';
import { KhachhangDeleteComponent } from './Component/khachhang/khachhang-delete/khachhang-delete.component';

//Thư viện
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import { SidebarComponent } from './Component/sidebar/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HomeComponent,
    //Khách hàng
    KhachhangIndexComponent,
    KhachhangCreateComponent,
    KhachhangEditComponent,
    KhachhangDeleteComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatTreeModule
  ]
})
export class DashboardModuleModule { }
