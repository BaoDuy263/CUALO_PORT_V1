import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
// import { DBkeys } from './dbkeys.service';
// import { UserModel } from 'src/app/models/user.model';
// import { SystemMenuModel, DTSystemMenuModel } from 'src/app/models/systemmenu.model';

@Injectable()
export class AdminService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService
  )
  {
  }

  // getMap(item): Observable<any> {
  //   const headers = this.getHeaders(true);
  //   // const url = environment.apiUrl + this.configService.url.map_cont_yarn3.getMapCont;
  //   const url = environment.apiLocal + this.configService.url.map_cont_yarn3.getDataPagedList;

  //   // return this.http
  //   //   .get(url, { headers: headers })
  //   //   .pipe(catchError(this.handleError('getUserInfo')));
  //   return this.http.post(url, item, { headers: headers });

  // }

  // logout(): Observable<void> {
  //   return
  //   // const headers = this.getHeaders(true);
  //   // const url = environment.CCLOApi + this.configService.url.admin.logout;
  //   // return this.http
  //   //   .post<UserModel>(url, null, { headers: headers })
  //   //   .pipe(catchError(this.handleError('logout', null)));
  // }

  public hasPermission(url: string): boolean {
    let currentUrl = url.toLowerCase();
    let currentUrlIndex = (currentUrl + '/index').replace('//', '/');
    let extenalUrlApi = this.getExtenalUrlApi(currentUrl);
    let extenalUrlIndex = this.getExtenalUrlIndex(currentUrl);
    return currentUrl === '/';
  }

  getExtenalUrlIndex(currentUrl: string): string {
    let extenalUrl =
      currentUrl === '/' || currentUrl === '/home'
        ? this.configService.url.home.index
        : `/api${currentUrl}/index`;
    return extenalUrl.replace('//', '/').replace('-', '').toLowerCase();
  }

  getExtenalUrlApi(currentUrl: string): string {
    let extenalUrl =
      currentUrl === '/' || currentUrl === '/home'
        ? this.configService.url.home.index
        : `/api${currentUrl}`;
    return extenalUrl.replace('//', '/').replace('-', '').toLowerCase();
  }
}
