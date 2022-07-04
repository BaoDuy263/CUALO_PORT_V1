import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingImportContService } from 'src/app/Service/booking-import-cont/booking-import-cont.service';
import { ProductGroupService } from 'src/app/Service/Product-group/product-group.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { UnitService } from 'src/app/Service/Unit/unit.service';
import { CustomerService } from '../../../../Service/Customer/customer.service'

@Component({
  selector: 'app-booking-import-cont-create',
  templateUrl: './booking-import-cont-create.component.html',
})
export class BookingImportContCreateComponent implements OnInit {
  CreateEditForm!: FormGroup
  submited: boolean = false;
  listCustomer: any=[];
  listUnit: any=[];
  @Input() customerId: number = 0;
  @Input() isCreate: boolean = true;
  constructor(private BookingImportContService: BookingImportContService,private CustomerService: CustomerService,private UnitService: UnitService, public dialogRef: MatDialogRef<BookingImportContCreateComponent>) {
    this.CreateEditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      customerId: new FormControl('', Validators.required),
      bookingContent: new FormControl(),
      registerDate: new FormControl('', Validators.required),
      step: new FormControl('', Validators.required),
      sumNumberConts: new FormControl('', Validators.required),
      voyage: new FormControl(),
      vessel: new FormControl(),
    });
  }

  ngOnInit(): void {
    //Edit
    if (this.customerId && this.isCreate === false) {
      // this.BookingImportContService.GetDetail(this.customerId).subscribe(response => {
      //   this.CreateEditForm = new FormGroup({
      //     id: new FormControl(response.id),
      //     title: new FormControl(this.response.title),
      //     customerId: new FormControl(this.response.customerId),
      //     bookingContent: new FormControl(this.response.bookingContent),
      //     registerDate: new FormControl(this.response.registerDate),
      //     step: new FormControl(this.response.step),
      //     sumNumberConts: new FormControl(this.response.sumNumberConts),
      //     voyage: new FormControl(this.response.voyage),
      //     vessel: new FormControl(this.response.vessel),
      //   })
      //})
    }
    this.getCustomer();
    // this.getUnit();
  }

  getCustomer(){
    this.CustomerService.Paging(1,'',10).subscribe(data => {
      this.listCustomer = data.data;
    })
  }

  getCustomerId(event: any) {
    this.CreateEditForm.value.customerId = event.target.value;
  }
  // getUnitId(event: any) {
  //   this.CreateEditForm.value.unitId = event.target.value;
  // }

  // getUnit(){
  //   this.UnitService.Paging().subscribe(data => {
  //     this.listUnit = data;
  //   })

  // }
  get title() { return this.CreateEditForm.get('title'); }
  // get customerId() { return this.CreateEditForm.get('customerId') }
  get registerDate() { return this.CreateEditForm.get('registerDate') }
  get step() { return this.CreateEditForm.get('step') }
  get sumNumberConts() { return this.CreateEditForm.get('sumNumberConts') }
 



  onSubmit() {
    this.submited = true;
    // console.log(this.CreateEditForm.value)
    if (this.CreateEditForm.valid && this.isCreate === true) {
      this.BookingImportContService.Insert(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
    if (this.CreateEditForm.valid && this.isCreate === false) {
      this.BookingImportContService.Update(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      })
    }

  }




}