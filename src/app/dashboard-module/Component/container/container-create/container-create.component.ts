import { activitiesData, lstStatusData, lstTypeContData, lstTypeDelivery } from './../../booking-customer/helper/constant';
import { ContainerService } from 'src/app/Service/container/container.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(private containerService: ContainerService, public dialogRef: MatDialogRef<ContainerCreateComponent>) {
    this.CreateEditForm = new FormGroup({
      code: new FormControl(''),
      type: new FormControl(''),
      // vessel: new FormControl(''),
      // voyage: new FormControl(''),
      // lastPort: new FormControl(''),
      // iso: new FormControl(''),
      // side: new FormControl(),
      // customer: new FormControl(''),
      // bookingNo: new FormControl(''),
      // commodity: new FormControl(''),
      weight: new FormControl(),
      dateCheckIn: new FormControl(),
      dateCheckOut: new FormControl(),
      note: new FormControl(''),
      returnAddress: new FormControl(''),
      // noBL: new FormControl(''),
      // consignee: new FormControl(''),
      typeDelivery: new FormControl(),
      activity: new FormControl(),
      status: new FormControl(),
      vehicleNo: new FormControl(""),
      // deliveryNo: new FormControl(''),
      // serviceNo: new FormControl(''),
      // sealNo: new FormControl(''),
      // codePT: new FormControl(''),
      location: new FormControl(''),
      region: new FormControl(''),
      // pol: new FormControl(''),
      // pod: new FormControl(''),
      // locationShip: new FormControl(''),
      // planXD: new FormControl(''),
      // cargoType: new FormControl(''),
      // trunkBarge: new FormControl(''),
      // domestic: new FormControl(''),
      // packing: new FormControl(''),
      // nonPacking: new FormControl(''),
      // datePacking: new FormControl(),
      seal: new FormControl(''),
      state: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.containerService.Detail(this.containerCode).subscribe(response => {
      this.CreateEditForm = new FormGroup({
        code: new FormControl(response.code),
        type: new FormControl(response.type),
        vessel: new FormControl(response.vessel),
        voyage: new FormControl(response.voyage),
        lastPort: new FormControl(response.lastPort),
        iso: new FormControl(response.iso),
        side: new FormControl(response.side),
        customer: new FormControl(response.customer),
        bookingNo: new FormControl(response.bookingNo),
        commodity: new FormControl(response.commodity),
        weight: new FormControl(response.weight),
        dateCheckIn: new FormControl(response.dateCheckIn),
        dateCheckOut: new FormControl(response.dateCheckOut),
        note: new FormControl(response.note),
        returnAddress: new FormControl(response.returnAddress),
        noBL: new FormControl(response.noBL),
        consignee: new FormControl(response.consignee),
        typeDelivery: new FormControl(response.typeDelivery),
        activity: new FormControl(response.activity),
        status: new FormControl(response.status),
        vehicleNo: new FormControl(response.vehicleNo),
        deliveryNo: new FormControl(response.deliveryNo),
        serviceNo: new FormControl(response.serviceNo),
        sealNo: new FormControl(response.sealNo),
        codePT: new FormControl(response.codePT),
        location: new FormControl(response.location),
        region: new FormControl(response.region),
        pol: new FormControl(response.pol),
        pod: new FormControl(response.pod),
        locationShip: new FormControl(response.locationShip),
        planXD: new FormControl(response.planXD),
        cargoType: new FormControl(response.cargoType),
        trunkBarge: new FormControl(response.trunkBarge),
        domestic: new FormControl(response.domestic),
        packing: new FormControl(response.packing),
        nonPacking: new FormControl(response.nonPacking),
        datePacking: new FormControl(response.datePacking),
        seal: new FormControl(response.seal),
        state: new FormControl(response.state),
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
      this.containerService.Insert(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
    if (this.CreateEditForm.valid && this.isCreate === false) {
      this.containerService.Update(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      })
    }
  }
}
