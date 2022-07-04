
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Service/Account/account.service';
import { lstCutomer,Customer } from '../../../../Model/Customer'
import { CustomerService } from '../../../../Service/Customer/customer.service'

@Component({
  selector: 'app-khachhang-index',
  templateUrl: './khachhang-index.component.html',
  styleUrls: ['./khachhang-index.component.css']
})
export class KhachhangIndexComponent implements OnInit {

  PageInfo = {
    page : 1,
    Keyword : '',
    pageSize : 50
  }

  constructor(private customerService : CustomerService,private accountService : AccountService) { }

  lstdata : Customer[] = [];
  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
    let UserInfo = this.accountService.getUserInfo();
    if(UserInfo.refreshToken && UserInfo.jwt){
        let obj = {
          accessToken: UserInfo.jwt,
          refreshToken : UserInfo.refreshToken
        }
        this.accountService.refreshToken(obj).subscribe(res => {
          console.log('res',res);
        })
    }
  }

  Pagingdata(PageInfo : any)  {
     this.customerService.Paging(this.PageInfo.page,this.PageInfo.Keyword,this.PageInfo.pageSize).subscribe(data => {
        this.lstdata = data.data;
     })
  }
}
