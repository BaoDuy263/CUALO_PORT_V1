import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import {AccountService } from '../Service/Account/account.service'


@Injectable()


export class HttpClientInterceptor implements HttpInterceptor {

    constructor(private accountService: AccountService,private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
              headers: request.headers.set('Content-Type', 'application/json')
            });
        }
        request = this.addAccessToken(request);
        return next.handle(request).pipe(
          catchError((error) => {
            console.log('request',request);
            const isUnauthorizedError = error.status === 401;
            const isUnknownError = error.statusText === 'Unknown Error' || error.status === 0 || error.status === 500 || error.status === 504;
            if (isUnauthorizedError) {
              
              let UserInfo = this.accountService.getUserInfo();
            
              if(UserInfo.refreshToken && UserInfo.jwt){
                  let obj = {
                    accessToken: UserInfo.jwt,
                    refreshToken : UserInfo.refreshToken
                  }
                  localStorage.removeItem('UserInfo');
                  this.accountService.refreshToken(obj).subscribe(res => {

                    if(res.errorCode == "00") {
                      localStorage.setItem('UserInfo', JSON.stringify(res));
                      location.reload();
                    }
                  })
              }
            }
            return throwError(error);
          })
        );
      }

      private addAccessToken(request: HttpRequest<any>): HttpRequest<any> {
        const userInfo = this.accountService.getUserInfo();
        
        if (!userInfo) {
          return request;
        }

        return request.clone({
          setHeaders: {
            Authorization: "Bearer " + userInfo.jwt
          }
        });
    }
}
