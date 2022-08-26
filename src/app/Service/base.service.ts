import { Injector } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { OAuthService } from 'angular-oauth2-oidc';
import { ConfigService } from './config.service';

export class BaseService {
    private authService!: OAuthService;

    constructor(
    //  public authService: OAuthService,
    ) { }

    public getHeaders(includeJsonContentType?: boolean): HttpHeaders {
      let header: HttpHeaders = new HttpHeaders().set('Content-Type', includeJsonContentType ? 'application/json' : 'application/x-www-form-urlencoded')
          .set('Accept', `application/json, text/plain, */*`)
          .set('App-Version', ConfigService.appVersion);

      return header;
  }

  public getHeadersWithAuth(includeJsonContentType?: boolean, authService?: OAuthService): HttpHeaders {
      let header: HttpHeaders = this.getHeaders(includeJsonContentType).set('Authorization', 'Bearer ' + this.authService.getAccessToken());
      console.log(header);
      return header;
  }

  public handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
          //console.error(error); // log to console instead
          // Let the app keep running by returning an empty result.
          return of(result as T);
      };
  }

  getAuthService(): OAuthService {
      if (typeof this.authService === 'undefined') {
          const injector = Injector.create({ providers: [{ provide: OAuthService, deps: [] }] });
          this.authService = injector.get(OAuthService);
      }
      return this.authService;
  }
}
