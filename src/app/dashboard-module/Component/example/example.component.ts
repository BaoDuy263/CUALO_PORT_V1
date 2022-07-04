import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../Service/Account/account.service';
import { Item } from '../../../Model/multidropdown';
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

  constructor(private accountservice : AccountService) { }

  showLoading : boolean = false;

  ngOnInit(): void {
    this.accountservice.getListSelectMulti().subscribe(res => {
       this.items = res;
    })
    
  }

  onItemChange(item: Item): void {
    this.currentSelectedItem = item;
  }

  abc() {
      this.showLoading = !this.showLoading;
      console.log('this.showLoading',this.showLoading);
  }



}
