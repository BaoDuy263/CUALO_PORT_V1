import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { UserLogin,UserReponse } from '../../Model/User'
import { map } from 'rxjs';


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


  getUserInfo() {
    const UserInfo =  JSON.parse(localStorage.getItem('UserInfo')|| '{}');
    return UserInfo;
  }
}
