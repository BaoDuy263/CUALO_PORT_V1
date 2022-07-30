import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-tai-khoan-create',
  templateUrl: './tai-khoan-create.component.html',
})
export class QLTaiKhoanCreateComponent implements OnInit {
  CreateEditForm!: FormGroup
  submited: boolean = false;
  listProductGroup: any=[];
  listUnit: any=[];
  lockOrOpen: boolean = false;

  @Input() customerId: number = 0;
  @Input() isCreate: boolean = true;
  constructor(private AccountService: AccountService, public dialogRef: MatDialogRef<QLTaiKhoanCreateComponent>) {
    this.CreateEditForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      
    })
  }

  ngOnInit(): void {
    //Edit

    if (this.customerId && this.isCreate === false) {
      this.lockOrOpen = true;

      this.AccountService.GetDetail(this.customerId).subscribe(response => {
        this.CreateEditForm = new FormGroup({
          id: new FormControl(response.id),
          userName: new FormControl(response.userName),
          fullName: new FormControl(response.fullName),
          email: new FormControl(response.email),
          phoneNumber: new FormControl(response.phoneNumber),
          password: new FormControl(response.password),
         
        })
      })
    }
  }

  get fullName() { return this.CreateEditForm.get('fullName'); }
  get userName() { return this.CreateEditForm.get('userName') }
  get email() { return this.CreateEditForm.get('email') }
  get phoneNumber() { return this.CreateEditForm.get('phoneNumber') }
  get password() { return this.CreateEditForm.get('password') }



  onSubmit() {
    this.submited = true;
   
    
    if (this.CreateEditForm.valid && this.isCreate === true) {
      this.AccountService.Insert(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
    if (this.CreateEditForm.valid && this.isCreate === false) {
      this.AccountService.Update(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      })
      console.log('hi')
      if(this.CreateEditForm.value.password){
        console.log('hiii')

      }
    }
  }
}
