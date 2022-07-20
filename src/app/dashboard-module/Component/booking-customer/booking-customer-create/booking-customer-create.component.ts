import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerSelect } from 'src/app/Model/Customer';
import { ProductSelect } from 'src/app/Model/Product';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';


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
  lstCustomer : CustomerSelect[] = [];
  lsttypeMerchandise : ProductSelect[] = [];


  lstContainer = [
    {"id" : "20Dc" , name : "Container Khô 20 feet (20DC)"},
    {"id" : "20Ot" , name : "Container Khô 20 feet hở nóc (20Ot)"},
    {"id" : "40Dc" , name : "Container Khô 40 feet (20DC)"},
    {"id" : "40Ot" , name : "Container Khô 40 feet hở nóc(20DC)"}
  ]

  constructor(private bookingService : BookingServiceService,public dialogRef: MatDialogRef<BookingCustomerCreateComponent> ) {
    this.CreateEditForm = new FormGroup({
      customerId: new FormControl('', Validators.required),
      typeContainer: new FormControl('', Validators.required),
      phoneNumber: new FormControl('',Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
      typeMerchandise: new FormControl('', Validators.required),
      noVehicle: new FormControl(),
      weight: new FormControl(),
      shipName: new FormControl(),
      dateCheckOut : new FormControl(),
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
          customerId: new FormControl(response.customerId, Validators.required),
          typeContainer: new FormControl(response.typeContainer, Validators.required),
          phoneNumber: new FormControl(response.phoneNumber,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
          typeMerchandise: new FormControl(response.typeMerchandise, Validators.required),
          noVehicle: new FormControl(response.noVehicle),
          weight: new FormControl(response.weight),
          shipName: new FormControl(response.shipName),
          dateCheckOut : new FormControl(response.dateCheckOut),
        })
      })
  }

  onSubmit() {
    this.submited = true;
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
