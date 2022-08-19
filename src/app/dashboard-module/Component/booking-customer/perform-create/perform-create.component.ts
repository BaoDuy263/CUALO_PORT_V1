import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { activitiesPacking } from '../helper/constant';

@Component({
  selector: 'app-perform-create',
  templateUrl: './perform-create.component.html',
  styleUrls: ['./perform-create.component.css']
})
export class PerformCreateComponent implements OnInit {
  CreateEditForm!: FormGroup
  submited: boolean = false;
  isCreate : boolean = true;
  performId: number = 0;
  activities = activitiesPacking;
  constructor(private bookingService : BookingServiceService,public dialogRef: MatDialogRef<PerformCreateComponent>) {
    this.CreateEditForm = new FormGroup({
      activity: new FormControl(),
      billNo: new FormControl(''),
      book: new FormControl(''),
      cargoType: new FormControl(''),
      checkIn: new FormControl(),
      checkOut: new FormControl(),
      commodity: new FormControl(''),
      contNo: new FormControl(''),
      contact: new FormControl(''),
      countContainer: new FormControl(),
      createdBy: new FormControl(''),
      createdOn: new FormControl(),
      customer: new FormControl(''),
      customerSeal: new FormControl(''),
      dateUpdate: new FormControl(),
      direction: new FormControl(),
      formality: new FormControl(''),
      height: new FormControl(''),
      id: new FormControl(),
      imdg: new FormControl(''),
      isLeave: new FormControl(),
      iso: new FormControl(''),
      landingDate: new FormControl(),
      location: new FormControl(''),
      modifiedBy: new FormControl(''),
      modifiedOn: new FormControl(),
      no: new FormControl(''),
      note: new FormControl(''),
      oog: new FormControl(''),
      operator: new FormControl(''),
      pod: new FormControl(''),
      ref: new FormControl(''),
      returnAddress: new FormControl(''),
      returnPlace: new FormControl(''),
      returnPlan: new FormControl(''),
      seal1: new FormControl(''),
      seal2: new FormControl(''),
      shipperName: new FormControl(''),
      side: new FormControl(),
      size: new FormControl(),
      state: new FormControl(),
      status: new FormControl(),
      statusContainer: new FormControl(''),
      step: new FormControl(),
      temparature: new FormControl(''),
      time: new FormControl(''),
      transCom: new FormControl(''),
      transType: new FormControl(''),
      typeCont: new FormControl(''),
      vehicleNo: new FormControl(''),
      ventilation: new FormControl(''),
      vessel: new FormControl(''),
      voyage: new FormControl(''),
      weight: new FormControl(),
    })
   }

  ngOnInit(): void {
    this.bookingService.GetDetailPerform(this.performId).subscribe(res => {
      res = res.data;
      this.CreateEditForm = new FormGroup({
        id: new FormControl(res.id),
        activity: new FormControl(res.activity),
        billNo: new FormControl(res.billNo),
        book: new FormControl(res.book),
        cargoType: new FormControl(res.cargoType),
        checkIn: new FormControl(res.checkIn),
        checkOut: new FormControl(res.checkOut),
        commodity: new FormControl(res.commodity),
        contNo: new FormControl(res.contNo),
        contact: new FormControl(res.contact),
        countContainer: new FormControl(res.countContainer),
        createdBy: new FormControl(res.createdBy),
        createdOn: new FormControl(res.createdOn),
        customer: new FormControl(res.customer),
        customerSeal: new FormControl(res.customerSeal),
        dateUpdate: new FormControl(res.dateUpdate),
        direction: new FormControl(res.direction),
        formality: new FormControl(res.formality),
        height: new FormControl(res.height),
        imdg: new FormControl(res.imdg),
        isLeave: new FormControl(res.isLeave),
        iso: new FormControl(res.iso),
        landingDate: new FormControl(res.landingDate),
        location: new FormControl(res.location),
        modifiedBy: new FormControl(res.modifiedBy),
        modifiedOn: new FormControl(res.modifiedOn),
        no: new FormControl(res.no),
        note: new FormControl(res.note),
        oog: new FormControl(res.oog),
        operator: new FormControl(res.operator),
        pod: new FormControl(res.pod),
        ref: new FormControl(res.ref),
        returnAddress: new FormControl(res.returnAddress),
        returnPlace: new FormControl(res.returnPlace),
        returnPlan: new FormControl(res.returnPlan),
        seal1: new FormControl(res.seal1),
        seal2: new FormControl(res.seal2),
        shipperName: new FormControl(res.shipperName),
        side: new FormControl(res.side),
        size: new FormControl(res.size),
        state: new FormControl(res.state),
        status: new FormControl(res.status),
        statusContainer: new FormControl(res.statusContainer),
        step: new FormControl(res.step),
        temparature: new FormControl(res.temparature),
        time: new FormControl(res.time),
        transCom: new FormControl(res.transCom),
        transType: new FormControl(res.transType),
        typeCont: new FormControl(res.typeCont),
        vehicleNo: new FormControl(res.vehicleNo),
        ventilation: new FormControl(res.ventilation),
        vessel: new FormControl(res.vessel),
        voyage: new FormControl(res.voyage),
        weight: new FormControl(res.weight),
      })
    })
  }

  onSubmit() {
    this.submited = true;
    this.CreateEditForm.value.activity = parseInt(this.CreateEditForm.value.activity)
    // if(this.CreateEditForm.valid && this.isCreate === true){
    //   this.bookingService.Insert(this.CreateEditForm.value).subscribe(response => {
    //       this.dialogRef.close(response);
    //   });
    // }
    if(this.CreateEditForm.valid && this.isCreate === false){
      this.bookingService.UpdatePerform(this.CreateEditForm.value).subscribe(response => {
          this.dialogRef.close(response);
      })
    }
  }

}
