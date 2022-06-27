import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AsyncPipe } from '@angular/common';
import { HttpClientInterceptor } from './Interceptor/http.client.interceptor';
import { RoleGuardService } from './Interceptor/rolo.guard.service'
import { ToastrModule } from 'ngx-toastr';

import { FormsModule  } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressSpinnerModule,

    BrowserAnimationsModule,
    FormsModule,

    ToastrModule.forRoot()
  ],
  providers: [
    RoleGuardService,
    AsyncPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
