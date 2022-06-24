import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UnitService } from 'src/app/Service/Unit/unit.service';
import { CustomerService } from '../../../../Service/Customer/customer.service'

@Component({
  selector: 'app-unit-create',
  templateUrl: './unit-create.component.html',
})
export class UnitCreateComponent implements OnInit {
  itemForm!: FormGroup
  submited: boolean = false;
  @Input() customerId: number = 0;
  @Input() isCreate: boolean = true;
  constructor(private unitService: UnitService, public dialogRef: MatDialogRef<UnitCreateComponent>) {
    this.itemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      note: new FormControl(),
      status: new FormControl(true),
     
    })
  }


  ngOnInit(): void {
    //Edit
    if (this.customerId && this.isCreate === false) {
      this.unitService.GetDetail(this.customerId).subscribe(response => {
        this.itemForm = new FormGroup({
          id: new FormControl(response.id),
          name: new FormControl(response.name, Validators.required),
          note: new FormControl(response.note, Validators.required),
          status: new FormControl(response.status, Validators.required),

        })
      })
    }
  }

  get name() { return this.itemForm.get('name'); }
  get note() { return this.itemForm.get('note') }
  get status() { return this.itemForm.get('status') }



  onSubmit() {
    this.submited = true;
    if (this.itemForm.valid && this.isCreate === true) {
      this.unitService.Insert(this.itemForm.value).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
    if (this.itemForm.valid && this.isCreate === false) {
      this.unitService.Update(this.itemForm.value).subscribe(response => {
        this.dialogRef.close(response);
      })

    }

  }


}
