import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductGroupService } from 'src/app/Service/Product-group/product-group.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { UnitService } from 'src/app/Service/Unit/unit.service';
import { CustomerService } from '../../../../Service/Customer/customer.service'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent implements OnInit {

  CreateEditForm!: FormGroup
  submited: boolean = false;
  listProductGroup: any=[];
  listUnit: any=[];
  @Input() customerId: number = 0;
  @Input() isCreate: boolean = true;
  constructor(private productService: ProductService,private productGroup: ProductGroupService,private UnitService: UnitService, public dialogRef: MatDialogRef<ProductCreateComponent>) {
    this.CreateEditForm = new FormGroup({
      name: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      typeProduct: new FormControl(),
      groupId: new FormControl(0),
      unitId: new FormControl(0),
      price: new FormControl(),
      status: new FormControl(true),
      quantity: new FormControl(),
      isDeleted: new FormControl(true),
    })
  }

  ngOnInit(): void {
    //Edit
    if (this.customerId && this.isCreate === false) {
      this.productService.GetDetail(this.customerId).subscribe(response => {
        this.CreateEditForm = new FormGroup({
          id: new FormControl(response.id),
          name: new FormControl(response.name),
          code: new FormControl(response.code),
          typeProduct: new FormControl(response.typeProduct),
          groupId: new FormControl(response.groupId),
          unitId: new FormControl(response.unitId),
          price: new FormControl(response.price),
          status: new FormControl(response.status),
          quantity: new FormControl(response.quantity),
          isDeleted: new FormControl(response.isDeleted),
        })
      })
    }
    this.getProductGroup();
    this.getUnit();
  }

  getProductGroup(){
    this.productGroup.Paging().subscribe(data => {
      this.listProductGroup = data;
    })
  }

  getGroupId(event: any) {
    this.CreateEditForm.value.groupId = event.target.value;
  }
  getUnitId(event: any) {
    this.CreateEditForm.value.unitId = event.target.value;
  }

  getUnit(){
    this.UnitService.Paging().subscribe(data => {
      this.listUnit = data;
    })

  }
  get name() { return this.CreateEditForm.get('name'); }
  get code() { return this.CreateEditForm.get('code') }



  onSubmit() {
    this.submited = true;
    // console.log(this.CreateEditForm.value)
    if (this.CreateEditForm.valid && this.isCreate === true) {
      this.productService.Insert(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
    if (this.CreateEditForm.valid && this.isCreate === false) {
      this.productService.Update(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      })
    }

  }




}