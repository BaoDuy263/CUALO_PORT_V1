import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { test } from './src/demoApi/cont_yard3.json';
// import exampleData from 'src/demoApi/cont_yard3.json';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
//import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
//import { DOC_ORIENTATION, NgxImageCompressService } from "ngx-image-compress";
import { AdminService } from './admin.service';
// import { BaseService } from "./base.service";
import { ConfigService } from './config.service';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { UserModel } from '../Model/user.model';
import { CommonserviceService } from './CommonService/commonservice.service';
import { authConfig } from './auth-config.service';
// import exampleData from 'src/demoApi/cont_yard3.json';
@Injectable()
export class MapcontYard3Service extends BaseService {
  // json: any = exampleData;
  jwt: string = '';
  private splashHiden = false;

  // json:any = exampleData;
  constructor(
    private httpService: CommonserviceService,
    private http: HttpClient,
    // private imageCompress: NgxImageCompressService,
    // public oauthService: OAuthService,
    // private alertCtrl: AlertController,
    // private toastCtrl: ToastController,
    // private loadingController: LoadingController,
    private configService: ConfigService
  ) {
    super();
    // this.oauthService.configure(authConfig);
    // this.jwt = this.oauthService.getAccessToken();
  }

  // getMap(): Observable<any> {
  //     return of(exampleData).pipe();
  // }
  // this.oauthService.getAccessToken(){

  // },

  // public QueryApiDataV2(apiPath: string, body: any) {
  //   let promise = new Promise<any>((resolve, reject) => {
  //     try {
  //       if (!window.navigator.onLine) {
  //         reject({
  //           code: 99,
  //           message:
  //             'Đã có lỗi kết nối đến máy chủ, đề nghị bạn kiểm tra thêm kết nối Internet/3/4G trên thiết bị.?',
  //         });
  //       } else {
  //         const header = {
  //           Authorization:
  //             'bearer ' +
  //             (this.oauthService.hasValidAccessToken()
  //               ? this.oauthService.getAccessToken()
  //               : 'xxx'),
  //         };
  //         const url = environment.CCLOApi + apiPath;
  //         let apiResponse: Observable<any> = this.http.post(url, body, {
  //           headers: header,
  //         });
  //         let oKay = false;
  //         apiResponse.subscribe(
  //           (result) => {
  //             console.log('rs', result);

  //             oKay = true;
  //             if (result.success) {
  //               resolve(result.data);
  //             } else {
  //               reject(result.error);
  //             }
  //           },
  //           (err) => {
  //             oKay = true;
  //             // if (s.search('401 Unauthorized') > 0) {
  //             //   let splashScreen = new SplashScreen();
  //             //   splashScreen.show();
  //             //   window.location.href = ''; //tab/home
  //             // } else {
  //             //   reject({ code: 99, message: err.message });
  //             // }
  //           }
  //         );
  //         setTimeout(() => {
  //           if (!oKay) {
  //             this.showAlertDialog(
  //               'Đã có lỗi kết nối đến máy chủ, đề nghị bạn kiểm tra thêm kết nối Internet/3/4G trên thiết bị.??'
  //             );
  //           }
  //         }, 10000);
  //       }
  //     } catch (error) {
  //       //reject({ code: 99, message: error.message });
  //     }
  //   });
  //   return promise;
  // }

  public showAlertDialog(msg: string, sheader: string = 'Thông báo!') {
    return new Promise<boolean>(() => {
      this.setSplashHiden(true);

      this.HidenLoading();
      let s = msg;
      if (
        s.length > 'failure response for'.length &&
        s.search('failure response for') > 0
      ) {
        s = 'Không thể kết nối đến máy chủ. Đề nghị kiểm tra Internet/3G';
      }
      // this.alertCtrl
      //   .create({
      //     mode: 'ios',
      //     header: sheader,
      //     message: s.toString(),
      //     buttons: [
      //       {
      //         text: 'Đóng',
      //         role: 'cancel',
      //         handler: () => {
      //           resolve(true);
      //         },
      //       },
      //     ],
      //   })
      //   .then((alertEl: { present: () => void }) => {
      //     alertEl.present();
      //   });
    });
  }

  public setSplashHiden(value: boolean) {
    if (value) {
      // if (this.platForm != 'others') {
      //   let splashScreen = new SplashScreen();
      //   splashScreen.hide();
      // }
    }
    this.splashHiden = value;
  }

  public getSplashHiden() {
    return this.splashHiden;
  }

  public async HidenLoading() {
    // let promise = new Promise<boolean>((resolve) => {
    //   this.loadingController
    //     .dismiss()
    //     .then((res: boolean | PromiseLike<boolean>) => {
    //       resolve(res);
    //     })
    //     .catch(() => {
    //       resolve(false);
    //     });
    // });
    // return await promise;
  }

  // getMap(id: number) {
  //   return this.httpService.getRequest('Customer/GetDetail?id=' + id).pipe(
  //     map((data: Customer) => {
  //       return data;
  //     })
  //   );
  // }

  // Paging(item: any) {
  //   return this.httpService.getRequest('/api/MapContYard3/GetDataPagedList')
  //     .pipe(map((data : item) => {
  //         return data;
  //     }))
  // }
  // getMap1(item: any): any  {
  //   // const headers = this.getHeadersWithAuth(true, this.oauthService);
  //   // console.log(headers);
  //   // return "1234567";
  //   // // const url =
  //   // //   environment.CCLOApi +
  //   // //   this.configService.url.map_cont_yarn3.getDataPagedList;
  //   // // return this.http
  //   // //   .post(url, item, { headers: headers })
  //   // //   .pipe(catchError(this.handleError('getMap')));
  // }

  getMap(item: any): Observable<any> {
    const headers = this.getHeaders(true);
    const url =
      environment.CCLOApi +
      this.configService.url.map_cont_yarn3.getDataPagedList;
    return this.http
      .post(url, item, { headers: headers })
      .pipe(catchError(this.handleError('getMap')));
  }

  createMap(item: any): Observable<any> {
    const headers = this.getHeaders(true);

    const url =
      environment.CCLOApi + this.configService.url.map_cont_yarn3.addMapCont;
    return this.http
      .post(url, item, { headers: headers })
      .pipe(catchError(this.handleError('createMap')));
  }

  updateMap(item: any): Observable<any> {
    const headers = this.getHeaders(true);
    const url =
      environment.CCLOApi + this.configService.url.map_cont_yarn3.editMapCont;
    return this.http
      .put(url, item, { headers: headers })
      .pipe(catchError(this.handleError('updateMap')));
  }

  deleteMap(id: string): Observable<any> {
    const headers = this.getHeaders(true);
    const url =
      environment.CCLOApi + this.configService.url.map_cont_yarn3.deleteMapCont;
    return this.http
      .delete(url + id, { headers: headers })
      .pipe(catchError(this.handleError('deleteMap')));
  }
}
