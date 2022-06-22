import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { KhachhangIndexComponent } from './Component/khachhang/khachhang-index/khachhang-index.component';
import { UnitIndexComponent } from './Component/unit/unit-index/unit-index.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    { path: 'khachhang', component: KhachhangIndexComponent },
    { path: 'don-vi', component: UnitIndexComponent }
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
