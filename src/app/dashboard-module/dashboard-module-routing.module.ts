import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { KhachhangIndexComponent } from './Component/khachhang/khachhang-index/khachhang-index.component';
import { TaikhoanComponent } from './Component/taikhoan/taikhoan.component';
import { ExampleComponent } from './Component/example/example.component'

const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
    { path: 'khachhang', component: KhachhangIndexComponent },
    { path: 'taikhoan', component : TaikhoanComponent},
    { path: 'example', component : ExampleComponent}
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
