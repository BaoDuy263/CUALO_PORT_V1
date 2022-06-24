import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Service/Account/account.service';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // myScriptElement: HTMLScriptElement;

  opened : boolean;
  urlAvartar: string = '';

  constructor(private accountservice : AccountService) {
    this.opened = true;
    // this.myScriptElement = document.createElement("script");
    // this.myScriptElement.src = "/assets/js/closeTab.js";
    // document.body.appendChild(this.myScriptElement);
   }

  ngOnInit(): void {
    this.accountservice.getAccountInfo().subscribe(response => {
      this.urlAvartar = response.avatar;
    
     });
  
  }

}
