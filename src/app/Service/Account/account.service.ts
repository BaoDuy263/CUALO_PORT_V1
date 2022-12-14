import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { UserLogin,UserReponse } from '../../Model/User'
import { map, Observable } from 'rxjs';
import {Item} from '../../Model/multidropdown'
import { Account, lstAccount, AccountEdit, AccountCreate } from 'src/app/Model/Account';

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
  };
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
    const UserInfo =  JSON.parse(localStorage.getItem('UserInfo')|| 'null');
    return UserInfo;
  }

  updateUser(data : any) {
    return this.httpService.postRequest('Account/UpdateUserProfile', data);
  }

  changPassword(data : any){
    return this.httpService.postRequest('Account/SetPassword',data);
  }

  logOut(){
    localStorage.removeItem('UserInfo');
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
    return this.httpService.postRequest('Account/RefreshToken',data);
  }

  GetUserDeport3(){
    return this.httpService.getRequest('Account/GetUserDeport3');
  }
  
  Paging(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('admin/ManageAccount' +'?page='+ page + '&Keyword='+ searchText + '&pageSize='+ numberDis)
      .pipe(map((data : lstAccount) => {
          return data;
      }))
  }

  Insert(AccountCreate: AccountCreate) {
    return this.httpService.postRequest('admin/ManageAccount',AccountCreate)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  GetDetail(id: any) {
    return this.httpService.getRequest('admin/ManageAccount/'+id)
      .pipe(map((data:Account ) => {
          return data;
      }))
  }

  GetUserByUserName(username: String) {
    return this.httpService.getRequest('Account/GetUserByUserName/'+username);
  }

  Update(AccountEdit : AccountEdit)
  {
    return this.httpService.putRequest('admin/ManageAccount',AccountEdit)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  Delete(id: any) {
    return this.httpService.deleteRequest('admin/ManageAccount/'+id)
      .pipe(map((data:any ) => {
          return data;
      }))
  }

  GetClaimUser(UserId: string){
    return this.httpService.getRequest('admin/ManageAccount/' + UserId + '/Claims');
  }

  GetAllClaim(Id: string){
    return this.httpService.getRequest('Account/GetClaimUserById/' + Id);
  }
}
