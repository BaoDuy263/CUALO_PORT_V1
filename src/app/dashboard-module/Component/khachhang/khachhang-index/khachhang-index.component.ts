
import { Component, OnInit } from '@angular/core';
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

  constructor(private customerService : CustomerService) { }

  lstdata : Customer[] = [];
  ngOnInit(): void {
    this.Pagingdata(this.PageInfo);
  }

  Pagingdata(PageInfo : any)  {
     this.customerService.Paging(this.PageInfo.page,this.PageInfo.Keyword,this.PageInfo.pageSize).subscribe(data => {
        this.lstdata = data.data;
     })
  }
}
