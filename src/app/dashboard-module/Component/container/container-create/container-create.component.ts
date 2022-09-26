import { ContainerPopupComponent } from './../container-popup/container-popup.component';
import { TransactionService } from './../../../../Service/transaction/transaction.service';
import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
import { activitiesData, lstSide, lstStatusData, lstTypeContData, lstTypeDelivery, lstState, lstStep } from './../../booking-customer/helper/constant';
import { ContainerService } from 'src/app/Service/container/container.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VehicleService } from 'src/app/Service/Vehicle/vehicle.service';
import { convertHelper } from '../../booking-customer/helper/convertHelper';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';

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
  lstStatusData = lstStatusData;
  lstTypeDelivery = lstTypeDelivery;
  lstTypeCont = lstTypeContData;
  lstSide = lstSide;
  lstState = lstState;
  lstStep = lstStep;
  transId: number = 0;
  itemPrint: any = null;
  lstVehicle: any = [];
  vehicleSelected: any = null;
  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  };
  constructor(private containerService: Containerv2Service,
    public dialogRef: MatDialogRef<ContainerCreateComponent>, private toastr: ToastrcustomService,
    private transactionService: TransactionService, private vehicleService: VehicleService,
    public dialog: MatDialog, public convertHelper: convertHelper) {
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
      transaction_eir_no: new FormControl(0),
      transaction_eir_id: new FormControl(0),
      location: new FormControl(''),
      statusContainer: new FormControl(''),
      step: new FormControl(0),
      side: new FormControl(0),
      typeDelivery: new FormControl(0),
      activity: new FormControl(0),
      status: new FormControl(0),
      state: new FormControl(0),
      datePacking: new FormControl(''),
      inDeliveryDate: new FormControl(''),
      outDeliveryDate: new FormControl(''),
      returnPlan: new FormControl(''),
      returnAddress: new FormControl(''),
      createdOn: new FormControl(''),
      createdBy: new FormControl(''),
      modifiedBy: new FormControl(''),
      modifiedOn: new FormControl(''),
      ref: new FormControl(''),
      typeCont: new FormControl(''),
      ventilation: new FormControl(''),
      iso: new FormControl(''),
      cargoType: new FormControl(''),
      height: new FormControl(''),
      temparature: new FormControl(''),
      oog: new FormControl(''),
      operator: new FormControl(''),
      pod: new FormControl(''),
      imdg: new FormControl(''),
      customerSeal: new FormControl(''),
      seal1: new FormControl(''),
      seal2: new FormControl(''),
      returnPlace: new FormControl(''),
      landingDate: new FormControl(''),
      transType: new FormControl(''),
      transCom: new FormControl(''),
      vehicleNo: new FormControl(''),
      checkIn: new FormControl(''),
      checkOut: new FormControl(''),
      lastPort: new FormControl(''),
      noBL: new FormControl(''),
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
    })
  }

  get contNo() { return this.CreateEditForm.get('contNo') }
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
      this.transId = response.transaction_eir_id;
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
        transaction_eir_id: new FormControl(response.transaction_eir_id),
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
        ref: new FormControl(response.ref),
        typeCont: new FormControl(response.typeCont),
        ventilation: new FormControl(response.ventilation),
        iso: new FormControl(response.iso),
        cargoType: new FormControl(response.cargoType),
        height: new FormControl(response.height),
        temparature: new FormControl(response.temparature),
        oog: new FormControl(response.oog),
        operator: new FormControl(response.operator),
        pod: new FormControl(response.pod),
        imdg: new FormControl(response.imdg),
        customerSeal: new FormControl(response.customerSeal),
        seal1: new FormControl(response.seal1),
        seal2: new FormControl(response.seal2),
        returnPlace: new FormControl(response.returnPlace),
        landingDate: new FormControl(response.landingDate),
        transType: new FormControl(response.transType),
        transCom: new FormControl(response.transCom),
        vehicleNo: new FormControl(response.vehicleNo),
        checkIn: new FormControl(response.checkIn),
        checkOut: new FormControl(response.checkOut),
        serviceNo: new FormControl(response.serviceNo),
        sealNo: new FormControl(response.sealNo),
        codePT: new FormControl(response.codePT),
        region: new FormControl(response.region),
        pol: new FormControl(response.pol),
        locationShip: new FormControl(response.locationShip),
        planXD: new FormControl(response.planXD),
        trunkBarge: new FormControl(response.trunkBarge),
        domestic: new FormControl(response.domestic),
        packing: new FormControl(response.packing),
        nonPacking: new FormControl(response.nonPacking),
        container: new FormControl(response.container),
        nameDriver: new FormControl(response.nameDriver),
        licensePlates: new FormControl(response.licensePlates),
        phoneNumberDriver: new FormControl(response.phoneNumberDriver),
      })
    });
    this.loadVehicles();
  }

  onSubmit() {
    this.submited = true;
    this.CreateEditForm.value.activity = parseInt(this.CreateEditForm.value.activity)
    this.CreateEditForm.value.typeDelivery = parseInt(this.CreateEditForm.value.typeDelivery)
    this.CreateEditForm.value.status = parseInt(this.CreateEditForm.value.status)
    this.CreateEditForm.value.weight = parseInt(this.CreateEditForm.value.weight)
    this.CreateEditForm.value.nameDriver = this.vehicleSelected?.nameDriver || this.CreateEditForm.value.nameDriver;
    this.CreateEditForm.value.licensePlates = this.vehicleSelected?.licensePlates || this.CreateEditForm.value.licensePlates;
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

  loadVehicles() {
    setTimeout(() => {
      this.vehicleService.Paging(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize).subscribe(data => {
        this.lstVehicle = data.data;
      })
    }, 300);
  }

  saveTrans() {
    this.transactionService.SaveTransaction(this.CreateEditForm.value).subscribe(res => {
      if (res != null) {
        this.transId = res.data.id;
        this.toastr.showSuccess(res.message);
      } else {
        this.toastr.showError("Có lỗi xảy ra!");
      }
    });
  }

  getDetailTrans(id: number) {
    this.transactionService.GetDetailTrans(id).subscribe(res => { return res })
  }

  handleSelect(value: any) {
    const index = this.lstVehicle.findIndex((item: any) => item.licensePlates === value);
    if (index < 0) {
      return;
    }
    this.vehicleSelected = this.lstVehicle[index];
  }

  printE() {
    this.transactionService.GetDetailTrans(this.transId).subscribe(res => {
      if (res == null) {
        const dialogRef = this.dialog.open(ContainerPopupComponent);
        dialogRef.componentInstance.title = 'Vui lòng lưu giao dịch trước khi in!'
        dialogRef.componentInstance.button = 'Xác nhận';
      } else {
        this.itemPrint = res;
        console.log(this.itemPrint, 'print')
        setTimeout(() => {
          var divContents = document.getElementById('eir')?.innerHTML || '';
          var printWindow = window.open('', '', 'height=768,width=1366');
          printWindow?.document.write('<html><head><title>Phiếu EIR</title>');
          printWindow?.document.write('</head><body>');
          printWindow?.document.write(divContents);
          printWindow?.document.write('</body></html>');
          printWindow?.document.close();
          printWindow?.print();
        }, 300);
      }
    });
  }
}
