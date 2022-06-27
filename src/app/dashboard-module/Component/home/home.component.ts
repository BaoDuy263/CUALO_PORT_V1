import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../Service/Account/account.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opened : boolean;
  show : boolean
  constructor(private router: Router,private accountService : AccountService) {
    this.opened = true;
    this.show = false;
   }

  ngOnInit(): void {
      if(!localStorage.getItem('UserInfo')){
        this.router.navigate(['/Login']);
      }
  }

  reload(){
    location.reload();
  }

  loadInformation() {
    this.router.navigate(['/Home/taikhoan']);
  }

  LogOut(){
      this.accountService.logOut();
      this.reload()
  }

}
