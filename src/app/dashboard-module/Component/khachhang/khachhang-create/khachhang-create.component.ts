import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from '../../../../Service/Customer/customer.service'

@Component({
  selector: 'app-khachhang-create',
  templateUrl: './khachhang-create.component.html',
  styleUrls: ['./khachhang-create.component.css']
})
export class KhachhangCreateComponent implements OnInit {

    CreateEditForm!: FormGroup
    submited: boolean = false;
    @Input() customerId : number = 0;
    @Input() isCreate : boolean = true;
    constructor(private customerService : CustomerService,public dialogRef: MatDialogRef<KhachhangCreateComponent>) {
        this.CreateEditForm = new FormGroup({
            name: new FormControl('', Validators.required),
            fullName: new FormControl('', Validators.required),
            phoneNumber: new FormControl('',Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
            address: new FormControl(),
            description: new FormControl(),
        })
    }

    ngOnInit(): void {
        //Edit
        if(this.customerId && this.isCreate === false)
        {
            this.customerService.GetDetail(this.customerId).subscribe(response => {
                this.CreateEditForm = new FormGroup({
                  id: new FormControl(response.id),
                  name: new FormControl(response.name, Validators.required),
                  fullName: new FormControl(response.fullName, Validators.required),
                  phoneNumber: new FormControl(response.phoneNumber,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
                  address: new FormControl(response.address),
                  description: new FormControl(response.description),
                })
            })
        }
    }

    get name() { return this.CreateEditForm.get('name'); }
    get fullName() { return this.CreateEditForm.get('fullName')}
    get phoneNumber() {return this.CreateEditForm.get('phoneNumber')}

    

    onSubmit() {
      this.submited = true;
      if(this.CreateEditForm.valid && this.isCreate === true){
          this.customerService.Insert(this.CreateEditForm.value).subscribe(response => {
              this.dialogRef.close(response);
          });
      }
      if(this.CreateEditForm.valid && this.isCreate === false){
          this.customerService.Update(this.CreateEditForm.value).subscribe(response => {
              this.dialogRef.close(response);
          })
          
      }

    }
}
