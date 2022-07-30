import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../Service/Account/account.service';
import { Item } from '../../../Model/multidropdown';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {


  //select CheckBox
  items: Item[] = [];
  currentSelectedItem!: Item;
  showSearch = true;
  showError = false;
  showAll = true;
  showStatus = true;

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  }

  constructor(private accountservice : AccountService,private customerService: CustomerService ) { }

  showLoading : boolean = false;

  ngOnInit(): void {
    this.accountservice.getListSelectMulti().subscribe(res => {
       this.items = res;
    })
    this.customerService.Paging(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize)
      .subscribe(
        data => {
          console.log('data',data);
        });
  }

  onItemChange(item: Item): void {
    this.currentSelectedItem = item;
  }

  abc() {
      this.showLoading = !this.showLoading;
      console.log('this.showLoading',this.showLoading);
  }



}
