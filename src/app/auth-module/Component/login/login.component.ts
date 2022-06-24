import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../../Model/User';
import {AccountService} from '../../../Service/Account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   User : UserLogin = {
      userName : '',
      password : '',
   }
  constructor(private AccountService: AccountService,private router: Router) { }

  ngOnInit(): void {
  }
  
  onLogin(UserInfo : UserLogin) {
    this.AccountService.Login(UserInfo).subscribe(response => {
        if(response){
          this.router.navigate(['/Home/nhom-san-pham']);
        }
    })
  }
}
