import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  _urlApi: string = 'https://seaportwebapi.phanmem.one/api/';
  _urlApiMobile: string = 'https://cclo.phanmem.one/api/';
  //  _urlApi: string = 'http://localhost:5000/api/';
  //_urlApi: string = 'http://localhost:7611/api/';

  constructor(
    private http: HttpClient
  ) {}

  getRequest(url :string, param? :any) : Observable<any>{
    if(param){
      return this.http.get(this._urlApi + url + "/" + param);
    }
    else
    {
      return this.http.get(this._urlApi + url);
    }
  }

  postRequest(url: string, data: any) : Observable<any>{
    return this.http.post(this._urlApi + url,data);
  }

  putRequest(url: string, data: any) : Observable<any>{
    return this.http.put(this._urlApi + url,data);
  }

  deleteRequest(url: string) : Observable<any> {
    return this.http.delete(this._urlApi + url);
  }

  uploadRequest(url: string,data : any) : Observable<any> {
    return this.http.post(this._urlApi + url,data, {reportProgress: true});
  }

  downloadRequest(url: string, id?: number) : Observable<any> {
    if (id) {
      return this.http.get(`${this._urlApi + url}/${id}`, {responseType: 'blob'})
    }
    return this.http.get(`${this._urlApi + url}`, {responseType: 'blob'})
  }

  DowloadRequest(url: string) : Observable<any> {
    return this.http.get(this._urlApi + url, {reportProgress: true, responseType: 'blob',});
  }


  ///
  postRequestMobile(url: string, data: any) : Observable<any>{
    return this.http.post(this._urlApi + url,data);
  }
}

