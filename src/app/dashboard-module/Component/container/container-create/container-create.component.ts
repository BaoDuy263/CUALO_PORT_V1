import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
import { activitiesData, lstSide, lstStatusData, lstTypeContData, lstTypeDelivery, lstState, lstStep } from './../../booking-customer/helper/constant';
import { ContainerService } from 'src/app/Service/container/container.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-container-create',
  templateUrl: './container-create.component.html',
  styleUrls: ['./container-create.component.css']
})
export class ContainerCreateComponent implements OnInit {
  CreateEditForm!: FormGroup
  submited: boolean = false;
  containerCode: string = '';
  isCreate: boolean = true;
  activities = activitiesData;
  lstStatus = lstStatusData;
  lsttypeDelivery = lstTypeDelivery;
  lstTypeCont = lstTypeContData;
  lstSide = lstSide;
  lstState = lstState;
  lstStep = lstStep;
  constructor(private containerService: Containerv2Service, public dialogRef: MatDialogRef<ContainerCreateComponent>) {
    this.CreateEditForm = new FormGroup({
      contNo: new FormControl(''),
      vessel: new FormControl(''),
      voyage: new FormControl(''),
      customer: new FormControl(''),
      commodity: new FormControl(''),
      weight: new FormControl(),
      nWeight: new FormControl(),
      note: new FormControl(''),
      consignee: new FormControl(''),
      book: new FormControl(''),
      bill: new FormControl(''),
      seal: new FormControl(''),
      type: new FormControl(''),
      size: new FormControl(''),
      datePlan: new FormControl(''),
      dateCheckIn: new FormControl(''),
      dateCheckOut: new FormControl(''),
      transaction_eir_no: new FormControl(''),
      location: new FormControl(''),
      statusContainer: new FormControl(''),
      step: new FormControl(''),
      side: new FormControl(''),
      typeDelivery: new FormControl(''),
      activity: new FormControl(''),
      status: new FormControl(''),
      state: new FormControl(''),
      datePacking: new FormControl(''),
      inDeliveryDate: new FormControl(''),
      outDeliveryDate: new FormControl(''),
      returnPlan: new FormControl(''),
      returnAddress: new FormControl(''),
      createdOn: new FormControl(''),
      createdBy: new FormControl(''),
      modifiedBy: new FormControl(''),
      modifiedOn: new FormControl(''),
    })
  }

  get contNo() { return this.CreateEditForm.get('contNo')}
  get type() { return this.CreateEditForm.get('type') }
  get side() { return this.CreateEditForm.get('side') }
  get status() { return this.CreateEditForm.get('type') }
  get dateCheckIn() { return this.CreateEditForm.get('dateCheckIn') }
  get dateCheckOut() { return this.CreateEditForm.get('dateCheckOut') }
  get activity() { return this.CreateEditForm.get('activity') }
  get typeDelivery() { return this.CreateEditForm.get('typeDelivery') }
  get location() { return this.CreateEditForm.get('location') }
  get state() { return this.CreateEditForm.get('state') }
  get region() { return this.CreateEditForm.get('region') }
  // get vehicleNo() { return this.CreateEditForm.get('vehicleNo') }

  ngOnInit(): void {
    this.containerService.GetDetail(this.containerCode).subscribe(response => {
      response = response.data
      this.CreateEditForm = new FormGroup({
        contNo: new FormControl(response.contNo),
        vessel: new FormControl(response.vessel),
        voyage: new FormControl(response.voyage),
        customer: new FormControl(response.customer),
        commodity: new FormControl(response.commodity),
        weight: new FormControl(response.weight),
        nWeight: new FormControl(response.nWeight),
        note: new FormControl(response.note),
        consignee: new FormControl(response.consignee),
        book: new FormControl(response.book),
        bill: new FormControl(response.bill),
        seal: new FormControl(response.seal),
        type: new FormControl(response.type),
        size: new FormControl(response.size),
        datePlan: new FormControl(response.datePlan),
        dateCheckIn: new FormControl(response.dateCheckIn),
        dateCheckOut: new FormControl(response.dateCheckOut),
        transaction_eir_no: new FormControl(response.transaction_eir_no),
        location: new FormControl(response.location),
        statusContainer: new FormControl(response.statusContainer),
        step: new FormControl(response.step),
        side: new FormControl(response.side),
        typeDelivery: new FormControl(response.typeDelivery),
        activity: new FormControl(response.activity),
        status: new FormControl(response.status),
        state: new FormControl(response.state),
        datePacking: new FormControl(response.datePacking),
        inDeliveryDate: new FormControl(response.inDeliveryDate),
        outDeliveryDate: new FormControl(response.outDeliveryDate),
        returnPlan: new FormControl(response.returnPlan),
        returnAddress: new FormControl(response.returnAddress),
        createdOn: new FormControl(response.createdOn),
        createdBy: new FormControl(response.createdBy),
        modifiedBy: new FormControl(response.modifiedBy),
        modifiedOn: new FormControl(response.modifiedOn),
      })
    })
  }

  onSubmit() {
    this.submited = true;
    this.CreateEditForm.value.activity = parseInt(this.CreateEditForm.value.activity)
    this.CreateEditForm.value.typeDelivery = parseInt(this.CreateEditForm.value.typeDelivery)
    this.CreateEditForm.value.status = parseInt(this.CreateEditForm.value.status)
    this.CreateEditForm.value.weight = parseInt(this.CreateEditForm.value.weight)
    console.log(this.CreateEditForm.value)
    if (this.CreateEditForm.valid && this.isCreate === true) {
      this.containerService.CreateCont(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
    if (this.CreateEditForm.valid && this.isCreate === false) {
      this.containerService.UpdateCont(this.containerCode, this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      })
    }
  }
}
