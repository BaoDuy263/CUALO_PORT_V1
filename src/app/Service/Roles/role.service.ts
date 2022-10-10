import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PermissionDetail } from 'src/app/Model/Account';
import  { CommonserviceService } from  '../CommonService/commonservice.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpService: CommonserviceService) { }

  Paging(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('admin/ManageRole/' +'?page='+ page + '&Keyword='+ searchText + '&pageSize='+ numberDis)
  }

  GetRoleClaims(id: string) {
    return this.httpService.getRequest('admin/ManageRole/' + id + '/ClaimsPermission');
  }
  
  AddClaimsToRole(data : any){
    return this.httpService.postRequest('admin/ManageRole/AddClaimsToRole',data);
  }
}
