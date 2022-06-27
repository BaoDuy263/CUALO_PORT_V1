import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../Service/Account/account.service'
import { Router } from '@angular/router';
import { ToastrcustomService } from '../../../Interceptor/toastrcustom';

@Component({
  selector: 'app-verifycode',
  templateUrl: './verifycode.component.html',
  styleUrls: ['./verifycode.component.css']
})
export class VerifycodeComponent implements OnInit {
  code : string = "";
  loadding: boolean = false;

  constructor(private accountservice : AccountService,private router : Router,private toastr: ToastrcustomService) { }

  ngOnInit(): void {
  }


  sendCode() {
    this.loadding = true;

    var stringToObj = JSON.parse(String(sessionStorage.getItem('emailInfo')));
    var obj = {
      email : stringToObj,
      code : this.code
    }
    this.accountservice.sendCode(obj).subscribe(response => {
    this.loadding = false;

      if(response.jwt != null){
        sessionStorage.setItem("accInfo", JSON.stringify(response));
        this.router.navigate(['/Home/taikhoan']);
      }else{
        this.toastr.showError('Code không chính xác !!!');
      }
    })

  }

}
