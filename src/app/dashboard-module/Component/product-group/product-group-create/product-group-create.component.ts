import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductGroupService } from 'src/app/Service/Product-group/product-group.service';

@Component({
  selector: 'app-product-group-create',
  templateUrl: './product-group-create.component.html',
})
export class ProductGroupCreateComponent implements OnInit {
  itemForm!: FormGroup
  submited: boolean = false;
  @Input() customerId: number = 0;
  @Input() isCreate: boolean = true;
  constructor(private productGroupService: ProductGroupService, public dialogRef: MatDialogRef<ProductGroupCreateComponent>) {
    this.itemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      note: new FormControl(),
      status: new FormControl(true),
     
    })
  }

  ngOnInit(): void {
    //Edit
    if (this.customerId && this.isCreate === false) {
      this.productGroupService.GetDetail(this.customerId).subscribe(response => {
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
      this.productGroupService.Insert(this.itemForm.value).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
    if (this.itemForm.valid && this.isCreate === false) {
      this.productGroupService.Update(this.itemForm.value).subscribe(response => {
        this.dialogRef.close(response);
      })

    }

  }
}
