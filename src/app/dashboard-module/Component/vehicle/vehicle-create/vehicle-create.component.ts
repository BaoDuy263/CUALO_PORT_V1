import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductGroupService } from 'src/app/Service/Product-group/product-group.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { UnitService } from 'src/app/Service/Unit/unit.service';
import { VehicleService } from 'src/app/Service/Vehicle/vehicle.service';
import { CustomerService } from '../../../../Service/Customer/customer.service'

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
})
export class VehicleCreateComponent implements OnInit {
  CreateEditForm!: FormGroup
  submited: boolean = false;
  listProductGroup: any=[];
  listUnit: any=[];
  @Input() customerId: number = 0;
  @Input() isCreate: boolean = true;
  constructor(private VehicleService: VehicleService, public dialogRef: MatDialogRef<VehicleCreateComponent>) {
    this.CreateEditForm = new FormGroup({
      licensePlates: new FormControl('', Validators.required),
      rfidcode: new FormControl('', Validators.required),
      nameDriver: new FormControl('', Validators.required),
      tonnageDefault: new FormControl('', Validators.required),
      idCardNumber: new FormControl('', Validators.required),
      mediumUnladenWeight: new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void {
    //Edit
    if (this.customerId && this.isCreate === false) {
      this.VehicleService.GetDetail(this.customerId).subscribe(response => {
        this.CreateEditForm = new FormGroup({
          id: new FormControl(response.id),
          licensePlates: new FormControl(response.licensePlates),
          rfidcode: new FormControl(response.rfidcode),
          nameDriver: new FormControl(response.nameDriver),
          tonnageDefault: new FormControl(response.tonnageDefault),
          idCardNumber: new FormControl(response.idCardNumber),
          mediumUnladenWeight: new FormControl(response.mediumUnladenWeight),
        })
      })
    }
  
  }



  getGroupId(event: any) {
    this.CreateEditForm.value.groupId = event.target.value;
  }
  getUnitId(event: any) {
    this.CreateEditForm.value.unitId = event.target.value;
  }

  get licensePlates() { return this.CreateEditForm.get('licensePlates'); }
  get rfidcode() { return this.CreateEditForm.get('rfidcode') }
  get nameDriver() { return this.CreateEditForm.get('nameDriver') }
  get tonnageDefault() { return this.CreateEditForm.get('tonnageDefault') }
  get idCardNumber() { return this.CreateEditForm.get('idCardNumber') }
  get mediumUnladenWeight() { return this.CreateEditForm.get('mediumUnladenWeight') }

  onSubmit() {
    this.submited = true;
    // console.log(this.CreateEditForm.value)
    if (this.CreateEditForm.valid && this.isCreate === true) {
      this.VehicleService.Insert(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
    if (this.CreateEditForm.valid && this.isCreate === false) {
      this.VehicleService.Update(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      })
    }

  }




}