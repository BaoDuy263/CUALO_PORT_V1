import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TransactionService } from 'src/app/Service/transaction/transaction.service';
import { VehicleService } from 'src/app/Service/Vehicle/vehicle.service';
import { activitiesData, lstSide, lstState, lstStatusData, lstStep, lstTypeDelivery } from '../../../../utils/helper/constant';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  CreateEditForm!: FormGroup
  submited: boolean = false;
  isCreate: boolean = true;
  transId: number = 0;
  activities = activitiesData;
  lstStatusData = lstStatusData;
  lstStep = lstStep;
  lstTypeDelivery = lstTypeDelivery;
  lstSide = lstSide;
  lstState = lstState;
  lstVehicle: any = [];
  vehicleSelected: any = null;
  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  }
  constructor(private transactionService: TransactionService,
    private vehicleService: VehicleService,
    public dialogRef: MatDialogRef<TransactionCreateComponent>) {
    this.CreateEditForm = new FormGroup({
      id: new FormControl(),
      contNo: new FormControl(''),
      billNo: new FormControl(''),
      no: new FormControl(''),
      customer: new FormControl(''),
      ref: new FormControl(''),
      status: new FormControl(''),
      typeCont: new FormControl(''),
      size: new FormControl(),
      activity: new FormControl(''),
      weight: new FormControl(),
      ventilation: new FormControl(''),
      commodity: new FormControl(''),
      iso: new FormControl(''),
      cargoType: new FormControl(''),
      height: new FormControl(''),
      temparature: new FormControl(''),
      oog: new FormControl(''),
      operator: new FormControl(''),
      location: new FormControl(''),
      pod: new FormControl(''),
      imdg: new FormControl(''),
      customerSeal: new FormControl(''),
      seal1: new FormControl(''),
      seal2: new FormControl(''),
      returnPlace: new FormControl(''),
      vessel: new FormControl(''),
      voyage: new FormControl(''),
      landingDate: new FormControl(''),
      transType: new FormControl(''),
      transCom: new FormControl(''),
      vehicleNo: new FormControl(''),
      checkIn: new FormControl(''),
      checkOut: new FormControl(''),
      step: new FormControl(''),
      side: new FormControl(''),
      typeDelivery: new FormControl(''),
      state: new FormControl(''),
      outDeliveryDate: new FormControl(''),
      inDeliveryDate: new FormControl(''),
      lastPort: new FormControl(''),
      dateCheckIn: new FormControl(''),
      dateCheckOut: new FormControl(''),
      note: new FormControl(''),
      returnAddress: new FormControl(''),
      noBL: new FormControl(''),
      consignee: new FormControl(''),
      serviceNo: new FormControl(''),
      sealNo: new FormControl(''),
      codePT: new FormControl(''),
      region: new FormControl(''),
      pol: new FormControl(''),
      locationShip: new FormControl(''),
      planXD: new FormControl(''),
      trunkBarge: new FormControl(''),
      domestic: new FormControl(''),
      packing: new FormControl(''),
      nonPacking: new FormControl(''),
      nameDriver: new FormControl(''),
      licensePlates: new FormControl(''),
      phoneNumberDriver: new FormControl(''),
      createdBy: new FormControl(''),
      createdOn: new FormControl(''),
      modifiedBy: new FormControl(''),
      modifiedOn: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.loadVehicles();
    this.transactionService.GetDetailTrans(this.transId).subscribe(res => {
      console.log(res,'res')
      this.CreateEditForm = new FormGroup({
        id: new FormControl(res.id),
        contNo: new FormControl(res.contNo),
        billNo: new FormControl(res.billNo),
        no: new FormControl(res.no),
        customer: new FormControl(res.customer),
        ref: new FormControl(res.ref),
        status: new FormControl(res.status),
        typeCont: new FormControl(res.typeCont),
        size: new FormControl(res.size),
        activity: new FormControl(res.activity),
        weight: new FormControl(res.weight),
        ventilation: new FormControl(res.ventilation),
        commodity: new FormControl(res.commodity),
        iso: new FormControl(res.iso),
        cargoType: new FormControl(res.cargoType),
        height: new FormControl(res.height),
        temparature: new FormControl(res.temparature),
        oog: new FormControl(res.oog),
        operator: new FormControl(res.operator),
        location: new FormControl(res.location),
        pod: new FormControl(res.pod),
        imdg: new FormControl(res.imdg),
        customerSeal: new FormControl(res.customerSeal),
        seal1: new FormControl(res.seal1),
        seal2: new FormControl(res.seal2),
        returnPlace: new FormControl(res.returnPlace),
        vessel: new FormControl(res.vessel),
        voyage: new FormControl(res.voyage),
        landingDate: new FormControl(res.landingDate),
        transType: new FormControl(res.transType),
        transCom: new FormControl(res.transCom),
        vehicleNo: new FormControl(res.vehicleNo),
        checkIn: new FormControl(res.checkIn),
        checkOut: new FormControl(res.checkOut),
        step: new FormControl(res.step),
        side: new FormControl(res.side),
        typeDelivery: new FormControl(res.typeDelivery),
        state: new FormControl(res.state),
        outDeliveryDate: new FormControl(res.outDeliveryDate),
        inDeliveryDate: new FormControl(res.inDeliveryDate),
        lastPort: new FormControl(res.lastPort),
        dateCheckIn: new FormControl(res.dateCheckIn),
        dateCheckOut: new FormControl(res.dateCheckOut),
        note: new FormControl(res.note),
        returnAddress: new FormControl(res.returnAddress),
        noBL: new FormControl(res.noBL),
        consignee: new FormControl(res.consignee),
        serviceNo: new FormControl(res.serviceNo),
        sealNo: new FormControl(res.sealNo),
        codePT: new FormControl(res.codePT),
        region: new FormControl(res.region),
        pol: new FormControl(res.pol),
        locationShip: new FormControl(res.locationShip),
        planXD: new FormControl(res.planXD),
        trunkBarge: new FormControl(res.trunkBarge),
        domestic: new FormControl(res.domestic),
        packing: new FormControl(res.packing),
        nonPacking: new FormControl(res.nonPacking),
        container: new FormControl(res.container),
        nameDriver: new FormControl(res.nameDriver),
        licensePlates: new FormControl(res.licensePlates),
        phoneNumberDriver: new FormControl(res.phoneNumberDriver),
        createdBy: new FormControl(res.createdBy),
        createdOn: new FormControl(res.createdOn),
        modifiedBy: new FormControl(res.modifiedBy),
        modifiedOn: new FormControl(res.modifiedOn),
      })
    })
  }

  loadVehicles() {
    setTimeout(() => {
      this.vehicleService.Paging(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize).subscribe(data => {
        this.lstVehicle = data.data;
      })
    }, 300);
  }

  onSubmit() {
    this.submited = true;
    this.CreateEditForm.value.activity = parseInt(this.CreateEditForm.value.activity);
    this.CreateEditForm.value.nameDriver = this.vehicleSelected?.nameDriver || '';
    this.CreateEditForm.value.licensePlates = this.vehicleSelected?.licensePlates || '';
    if (this.CreateEditForm.valid && this.isCreate === false) {
      this.transactionService.UpdateTrans(this.transId, this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      })
    }
  }

  handleSelect(value: any) {
    const index = this.lstVehicle.findIndex((item:any) => item.licensePlates === value);
    if (index < 0) {
      return;
    }
    this.vehicleSelected = this.lstVehicle[index];
  }


}
