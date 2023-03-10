import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SettingService } from 'src/app/Service/Setting/setting.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom';
import { json } from 'express';

// C:\Users\VINH PC\Documents\baitap\CUALO_PORT_V1\src\app\Interceptor\Interceptor.ts
@Component({
  selector: 'app-setting-index',
  templateUrl: './setting-index.component.html',
})
export class SettingIndexComponent implements OnInit {
  CreateEditForm!: FormGroup;
  submited: boolean = false;
  listSettingService: any = [];
  listUnit: any = [];
  lockOrOpen: boolean = false;
  loadding: boolean = false;

  caucang1: boolean = false;
  isChecked : boolean = false;
  isChecked1 : boolean = false;
  isChecked2 : boolean = false;


  constructor(
    private SettingService: SettingService,
    private toastr: ToastrcustomService
  ) {
    this.CreateEditForm = new FormGroup({
      emailSupport: new FormControl(),
      emailOrder: new FormControl(),
      emailSenderSmtp: new FormControl(),
      emailSenderPort: new FormControl(),
      emailSender: new FormControl(),
      emailSenderPassword: new FormControl(),
      telephone: new FormControl(),
      websiteName: new FormControl(),
      domain: new FormControl(),
      emailSenderSsl: new FormControl(),
      adminName: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.loadding = true;

    this.lockOrOpen = true;

    this.SettingService.GetInfo('caucang1').subscribe((response) => {
      if (response.value == '1') this.isChecked = true;
      else this.isChecked = false;
    });
    this.SettingService.GetInfo('caucang2').subscribe((response) => {
      if (response.value == '1') this.isChecked1 = true;
      else this.isChecked1 = false;
    });
    this.SettingService.GetInfo('congvaora').subscribe((response) => {
      if (response.value == '1') this.isChecked2 = true;
      else this.isChecked2 = false;
    });

    this.SettingService.GetDetail().subscribe((response) => {
      this.CreateEditForm = new FormGroup({
        emailSupport: new FormControl(response.emailSupport),
        emailOrder: new FormControl(response.emailOrder),
        emailSenderSmtp: new FormControl(response.emailSenderSmtp),
        emailSenderPort: new FormControl(response.emailSenderPort),
        emailSender: new FormControl(response.emailSender),
        emailSenderPassword: new FormControl(response.emailSenderPassword),
        telephone: new FormControl(response.telephone),
        websiteName: new FormControl(response.websiteName),
        domain: new FormControl(response.domain),
        emailSenderSsl: new FormControl(response.emailSenderSsl),
        adminName: new FormControl(response.adminName),
      });
    });
    this.loadding = false;
  }

  checkEdit() {
    this.lockOrOpen = !this.lockOrOpen;
  }

  ChangeStatusCamera(code: any, event: any) {
    var mValues = '';
    if (event.target.checked) mValues = '1';
    else mValues = '0';
    let dataInput = {
      code: code,
      value: mValues,
    };
    this.SettingService.ChangeStatusCamera(dataInput).subscribe((response) => {
      if (response) {
        if (response.statusCode === 200) {
          this.toastr.showSuccess(response.message);
        } else {
          this.toastr.showError(response.message);
        }
      }
    });
  }
  // get name() { return this.CreateEditForm.get('name'); }
  // get code() { return this.CreateEditForm.get('code') }
  onSubmit() {
    if (this.lockOrOpen == true) {
      return;
    }
    this.submited = true;
    this.SettingService.Update(this.CreateEditForm.value).subscribe(
      (response) => {
        if (response) {
          if (response.statusCode === 200) {
            this.toastr.showSuccess(response.message);
          } else {
            this.toastr.showError(response.message);
          }
        }
      }
    );
  }
}
