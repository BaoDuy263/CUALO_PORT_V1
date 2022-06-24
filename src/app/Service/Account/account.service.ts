import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { UserLogin,UserReponse } from '../../Model/User'
import { map, Observable } from 'rxjs';
import {Item} from '../../Model/multidropdown'

@Injectable({
  providedIn: 'root'
})


export class AccountService {

  constructor(private httpService: CommonserviceService) { }

  Login(User: UserLogin) {
    return this.httpService.postRequest('Account/Login', User)
    .pipe(map((data : UserReponse) => {
        if(data) {
          localStorage.setItem('UserInfo', JSON.stringify(data));
        }
        return data;
    }))
  }

  // refreshToken()

  sendEmailorPhone(emailOrPhone : string){
    return this.httpService.postRequest('Account/ResendCode',{emailOrPhone : emailOrPhone})
  }

  sendCode(data : any) {
    return this.httpService.postRequest('Account/VerifyCode',data);
  }


  getAccountInfo(){
    return this.httpService.getRequest('Account/GetUserProfile');
  }

  updateAvatar(data : any) {
    return this.httpService.postRequest('Account/updateAvatar',data);
  }


  getUserInfo() {
    const UserInfo =  JSON.parse(localStorage.getItem('UserInfo')|| '{}');
    return UserInfo;
  }

  updateUser(data : any) {
    return this.httpService.postRequest('Account/UpdateUserProfile', data)
  }

  changPassword(data : any){
    return this.httpService.postRequest('Account/SetPassword',data);
  }

  getListSelectMulti(){
    return this.httpService.getRequest('admin/ManageAccount')
    .pipe(map((data : any) => {
        return data.map((i : any) => ({
          id: i.id,
          name: i.fullName
        } as Item)) as Item[];
    }))
  }

  refreshToken(data : any){
    return this.httpService.postRequest('Account/RefreshToken',data)
  }
}
