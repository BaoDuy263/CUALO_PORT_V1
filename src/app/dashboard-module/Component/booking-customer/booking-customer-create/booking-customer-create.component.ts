import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerSelect } from 'src/app/Model/Customer';
import { ProductSelect } from 'src/app/Model/Product';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { activitiesPacking } from '../../../../utils/helper/constant';


@Component({
  selector: 'app-booking-customer-create',
  templateUrl: './booking-customer-create.component.html',
  styleUrls: ['./booking-customer-create.component.css']
})
export class BookingCustomerCreateComponent implements OnInit {


  CreateEditForm!: FormGroup
  submited: boolean = false;
  bookCutomerId : number = 0;
  isCreate : boolean = true;
  activities = activitiesPacking;

  constructor(private bookingService : BookingServiceService,public dialogRef: MatDialogRef<BookingCustomerCreateComponent> ) {
    this.CreateEditForm = new FormGroup({
      customer: new FormControl(''),
      typeContainer: new FormControl(''),
      typeMerchandise: new FormControl(''),
      shipperName: new FormControl(''),
      shipName: new FormControl(),
      company: new FormControl(),
      activity: new FormControl(),
      positionReturn : new FormControl(),
      status : new FormControl(),
      note : new FormControl(),
      time : new FormControl(),
      dateCheckOut: new FormControl()
    })
  }

  get customerId() { return this.CreateEditForm.get('customerId'); }
  get typeContainer() { return this.CreateEditForm.get('typeContainer')}
  get phoneNumber() {return this.CreateEditForm.get('phoneNumber')}
  get typeMerchandise() {return this.CreateEditForm.get('typeMerchandise')}
  ngOnInit(): void {
      this.bookingService.Detail(this.bookCutomerId).subscribe(response => {
        this.CreateEditForm = new FormGroup({
          id: new FormControl(response.id),
          customer: new FormControl(response.customer),
          typeContainer: new FormControl(response.typeContainer),
          shipperName: new FormControl(response.shipperName),
          shipName: new FormControl(response.shipName),
          company: new FormControl(response.company),
          activity: new FormControl(response.activity),
          positionReturn: new FormControl(response.positionReturn),
          status: new FormControl(response.status),
          note : new FormControl(response.note),
          time : new FormControl(response.time),
          dateCheckOut: new FormControl(response.dateCheckOut)
        })
      })
  }

  onSubmit() {
    this.submited = true;
    this.CreateEditForm.value.activity = parseInt(this.CreateEditForm.value.activity)
    if(this.CreateEditForm.valid && this.isCreate === true){
      this.bookingService.Insert(this.CreateEditForm.value).subscribe(response => {
          this.dialogRef.close(response);
      });
    }
    if(this.CreateEditForm.valid && this.isCreate === false){
      this.bookingService.Update(this.CreateEditForm.value).subscribe(response => {
          this.dialogRef.close(response);
      })
    }
  }
}
