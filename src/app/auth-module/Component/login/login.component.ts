import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../../Model/User';
import { AccountService} from '../../../Service/Account/account.service';
import { Router } from '@angular/router';
import { ToastrcustomService } from '../../../Interceptor/toastrcustom'
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
  constructor(private AccountService: AccountService,private router: Router, private toatr : ToastrcustomService) { }

  ngOnInit(): void {
  }
  
  onLogin(UserInfo : UserLogin) {
    this.AccountService.Login(UserInfo).subscribe(response => {
        if(response.errorCode == "00"){
          this.toatr.showSuccess("Đăng nhập thành công")
          this.router.navigate(['/Home']);
        }
        else
        {
          this.toatr.showError(response.message)
        }
    })
  }
}
