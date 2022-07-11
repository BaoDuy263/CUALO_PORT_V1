import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-tai-khoan-delete',
  templateUrl: './tai-khoan-delete.component.html',
})
export class QLTaiKhoanDeleteComponent implements OnInit {

  @Input() customerId : number = 0;
  constructor(private AccountService: AccountService, public dialogRef: MatDialogRef<QLTaiKhoanDeleteComponent>) { }

  ngOnInit(): void {
    //  console.log('customerId',this.customerId);
  }

  onDelete()
  {
      this.AccountService.Delete(this.customerId).subscribe(response => {
          this.dialogRef.close(response);
      })
  }
}
