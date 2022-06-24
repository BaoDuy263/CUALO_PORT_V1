import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component'
import { VerifycodeComponent } from './Component/verifycode/verifycode.component'

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'forgotPassword', component: ForgotpasswordComponent },
    { path: 'verify', component: VerifycodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
