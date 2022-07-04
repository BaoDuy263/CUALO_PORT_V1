import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../Service/Account/account.service'
import { Router } from '@angular/router';
import { ToastrcustomService } from '../../../Interceptor/toastrcustom';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  loadding: boolean = false;
  emailorphone : string = "";
  constructor(private accountservice : AccountService,private router : Router,private toastr: ToastrcustomService) { }

  ngOnInit(): void {
  }

  sendCode(){
    this.loadding = true;

    this.accountservice.sendEmailorPhone(this.emailorphone).subscribe(response => {
    this.loadding = false;

        if(response.errorCode === "00"){
          localStorage.setItem("emailInfo", JSON.stringify(this.emailorphone));
            this.router.navigate(['/Login/verify']);
        }else
        {
           this.toastr.showError("Email không tồn tại !!!")
        }
    })
  }
}
