import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../Service/Account/account.service'
import { ToastrcustomService } from '../../../Interceptor/toastrcustom';

@Component({
  selector: 'app-taikhoan',
  templateUrl: './taikhoan.component.html',
  styleUrls: ['./taikhoan.component.css']
})
export class TaikhoanComponent implements OnInit {

  public InfoAccount!: FormGroup;
  isChangePass : boolean = false;
  avatarInfo: any = {};
  urlAvartar: string = '';
  submited : boolean = false;
  check: number = 1;
  constructor(private accountservice : AccountService,private toastr: ToastrcustomService) {
    this.InfoAccount = new FormGroup({
      fullName : new FormControl('', Validators.required),
      displayName : new FormControl('', Validators.required),
      phoneNumber : new FormControl(),
      address : new FormControl(),
      dob: new FormControl(),
      company: new FormControl(),
      email: new FormControl(),
      newPassword: new FormControl(),
      confirmPassword: new FormControl(),
    });
    this.isChangePass = true;

    this.accountservice.getAccountInfo().subscribe(response => {
       this.urlAvartar = 'https://45.124.94.191:5001'+response.avatar;
       this.InfoAccount = new FormGroup({
        fullName: new FormControl(response.fullName),
        email: new FormControl(response.email),
        displayName: new FormControl(response.displayName),
        phoneNumber: new FormControl(response.phoneNumber),
        address: new FormControl(response.address),
        dob: new FormControl(response.dob),
        company: new FormControl(response.company),
        newPassword: new FormControl('', [Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.minLength(6)]),
      });
    })
   }

  ngOnInit(): void {
    
  }

  checkChangePass() {
    this.isChangePass = !this.isChangePass;
  }
 


  get newPassword() { return this.InfoAccount.get('newPassword'); }
  get confirmPassword() { return this.InfoAccount.get('confirmPassword'); }
  get fullName() { return this.InfoAccount.get('fullName'); }
  get displayName() { return this.InfoAccount.get('displayName'); }

  handleFileSelect(event:any) {
    var files = event.target.files;
    var file = files[0];
    this.avatarInfo.fileName = file.name;
    this.avatarInfo.extensionType = file.type.replace('image/', '.');

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);

    }
  }


  _handleReaderLoaded(readerEvt:any) {

    var binaryString = readerEvt.target.result;
    this.avatarInfo.base64 = btoa(binaryString);

    this.accountservice.updateAvatar(this.avatarInfo).subscribe(data => {
      this.urlAvartar = 'https://45.124.94.191:5001'+data.avatarUrl;
      if(data.errorCode == '00'){
        this.toastr.showSuccess('Cập nhật thành công !!!');
      }
      else
      {
        this.toastr.showError('File không hợp lệ !!!');
      }
    })

  }

  updateUser(data : any) {
    this.accountservice.updateUser(data).subscribe(response => {
        if(response.statusCode == 200)
        {
          this.InfoAccount = new FormGroup({
            fullName: new FormControl(this.InfoAccount.value.fullName),
            email: new FormControl(this.InfoAccount.value.email),
            displayName: new FormControl(this.InfoAccount.value.displayName),
            phoneNumber: new FormControl(this.InfoAccount.value.phoneNumber),
            address: new FormControl(this.InfoAccount.value.address),
            dob: new FormControl(this.InfoAccount.value.dob),
            company: new FormControl(this.InfoAccount.value.company),
            newPassword: new FormControl('', [Validators.minLength(6)]),
            confirmPassword: new FormControl('', [Validators.minLength(6)]),
          });
          this.check = 1;
        }
        else
        {
          this.check = 2;
          this.toastr.showError("Cập nhật thất bại");
        }
    })
  }


  ChangPass(data:any) {
    console.log(data)
      if (this.InfoAccount.value.newPassword === this.InfoAccount.value.confirmPassword) {
        this.accountservice.changPassword(this.InfoAccount.value).subscribe(data => {
            if(data.errorCode == "00"){
              this.check = 1;
            }
            else
            {
              this.check = 2;
              this.toastr.showError('Thay đổi mật khẩu thất bại !!!');
            }
            
        })
      } else {
          this.check = 2;
          this.toastr.showError('Mật khẩu không trùng khớp !!!');
      }
  }




  onSubmit() {
    this.submited = true;
    this.updateUser(this.InfoAccount.value);
    if(this.isChangePass == false ){
      this.ChangPass(this.InfoAccount.value);
    }
    if (this.check == 1) {
      this.toastr.showSuccess('Cập nhật thành công !!!');
    }
  }












}
