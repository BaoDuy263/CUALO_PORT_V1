import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingContEmptyService } from 'src/app/Service/booking-cont-empty/booking-cont-emtpy.service';
import { CustomerService } from 'src/app/Service/Customer/customer.service';

@Component({
  selector: 'app-booking-cont-empty-create',
  templateUrl: './booking-cont-empty-create.component.html',
})
export class BookingContEmptyCreateComponent implements OnInit {

  CreateEditForm!: FormGroup
  submited: boolean = false;
  listBookingContEmptyService: any=[];
  listUnit: any=[];
  listCustomer: any=[];
  @Input() customerId: number = 0;
  @Input() isCreate: boolean = true;

  constructor(private BookingContEmptyService: BookingContEmptyService,private CustomerService: CustomerService, public dialogRef: MatDialogRef<BookingContEmptyCreateComponent>) {
    this.CreateEditForm = new FormGroup({
      commandNo: new FormControl(),
      title: new FormControl(),
      customerId: new FormControl('', Validators.required),
      bookingContent: new FormControl(),
      sumNumber20Dc: new FormControl('', Validators.required),
      sumNumber20Ot: new FormControl('', Validators.required),
      sumNumber40Dc: new FormControl('', Validators.required),
      sumNumber40Hc: new FormControl('', Validators.required),
      shipName: new FormControl(),
      registerDate: new FormControl('', Validators.required),
      loadingPort: new FormControl(),
      tripNo: new FormControl(),
      productName: new FormControl(),
      unLoadingPort: new FormControl(),
      expiredDate: new FormControl('', Validators.required),
      requestDescription: new FormControl(),
      depot1Confimed: new FormControl(true),
      depot1Note: new FormControl(),
      step: new FormControl(),
      depot1ConfirmedDate: new FormControl('', Validators.required),
      customerConfirmedDate: new FormControl('', Validators.required),
      customerNote: new FormControl(),
    })
  }

  ngOnInit(): void {
    //Edit
    this.getCustomer();
    if (this.customerId && this.isCreate === false) {
      this.BookingContEmptyService.GetDetail(this.customerId).subscribe(response => {
        console.log(response)
        this.CreateEditForm = new FormGroup({
          id: new FormControl(response.id),
         commandNo: new FormControl(response.commandNo),
          title: new FormControl(response.title),
          customerId: new FormControl(response.customerId),
          bookingContent: new FormControl(response.bookingContent),
          sumNumber20Dc: new FormControl(response.sumNumber20Dc),
          sumNumber20Ot: new FormControl(response.sumNumber20Ot),
          sumNumber40Dc: new FormControl(response.sumNumber40Dc),
          sumNumber40Hc: new FormControl(response.sumNumber40Hc),
          shipName: new FormControl(response.shipName),
          registerDate: new FormControl(response.registerDate),
          loadingPort: new FormControl(response.loadingPort),
          tripNo: new FormControl(response.tripNo),
          productName: new FormControl(response.productName),
          unLoadingPort: new FormControl(response.unLoadingPort),
          expiredDate: new FormControl(response.expiredDate),
          requestDescription: new FormControl(response.requestDescription),
          depot1Confimed: new FormControl(response.depot1Confimed),
          depot1Note: new FormControl(response.depot1Note),
          step: new FormControl(response.step),
          depot1ConfirmedDate: new FormControl(response.depot1ConfirmedDate),
          customerConfirmedDate: new FormControl(response.customerConfirmedDate),
          customerNote: new FormControl(response.customerNote),
        })
      })
    }
  }

  getCustomer(){
    this.CustomerService.Paging(1,'',10).subscribe(data => {
      this.listCustomer = data.data;
    })
  }

  // get customerId() { return this.CreateEditForm.get('customerId') }
  get sumNumber20Dc() { return this.CreateEditForm.get('sumNumber20Dc') }
  get sumNumber20Ot() { return this.CreateEditForm.get('sumNumber20Ot') }
  get sumNumber40Dc() { return this.CreateEditForm.get('sumNumber40Dc') }
  get sumNumber40Hc() { return this.CreateEditForm.get('sumNumber40Hc') }
  get step() { return this.CreateEditForm.get('step') }
  get registerDate() { return this.CreateEditForm.get('registerDate') }
  get expiredDate() { return this.CreateEditForm.get('expiredDate') }
  get depot1ConfirmedDate() { return this.CreateEditForm.get('depot1ConfirmedDate') }
  get customerConfirmedDate() { return this.CreateEditForm.get('customerConfirmedDate') }




  onSubmit() {
    this.submited = true;
    // console.log(this.CreateEditForm.value)
    if (this.CreateEditForm.valid && this.isCreate === true) {
      this.BookingContEmptyService.Insert(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
    if (this.CreateEditForm.valid && this.isCreate === false) {
      this.BookingContEmptyService.Update(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      })
    }

  }




}