import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
//Component
import { LoginComponent } from './Component/login/login.component';

//
import { FormsModule } from '@angular/forms';
//thư viện
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { VerifycodeComponent } from './Component/verifycode/verifycode.component'
@NgModule({
  declarations: [
    LoginComponent,
    ForgotpasswordComponent,
    VerifycodeComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    //material
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    //
    FormsModule
  ]
})
export class AuthModuleModule { }
