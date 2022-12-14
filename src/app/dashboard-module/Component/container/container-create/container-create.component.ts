import { ContainerPopupComponent } from './../container-popup/container-popup.component';
import { TransactionService } from './../../../../Service/transaction/transaction.service';
import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
import { activitiesData, lstSide, lstStatusData, lstTypeContData, lstTypeDelivery, lstState, lstStep, lstCheckTD } from '../../../../utils/helper/constant';
import { ContainerService } from 'src/app/Service/container/container.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VehicleService } from 'src/app/Service/Vehicle/vehicle.service';
import { convertHelper } from '../../../../utils/helper/convertHelper';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { AccountService } from 'src/app/Service/Account/account.service';
import { result } from 'lodash';
import { ContainerEditComponent } from '../container-edit/container-edit.component';


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
  isReceiver: boolean = true;
  transNo: string = '';
  userCreate: string = '';
  isSave : boolean = false;
  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  };
  displayStyle: string = '';
  currentActivity: number = 0;
  lstCheckTD = lstCheckTD;
  typeDelivery: string = "";
  lstUserDeport3: any = [];
  userReciver : any = {};
  constructor(private containerService: Containerv2Service,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<ContainerCreateComponent>, private toastr: ToastrcustomService,
    private transactionService: TransactionService, private vehicleService: VehicleService,
    public dialog: MatDialog, public convertHelper: convertHelper) {
    this.CreateEditForm = new FormGroup({
      contNo: new FormControl(''),
      no: new FormControl(''),
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
      type: new FormControl('Dry'),
      size: new FormControl(''),
      datePlan: new FormControl(''),
      dateCheckIn: new FormControl(),
      dateCheckOut: new FormControl(),
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
      ventilation: new FormControl(''),
      iso: new FormControl(''),
      cargoType: new FormControl('General'),
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
      transType: new FormControl('Truck'),
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
      receiver : new FormControl(''),
      deliver : new FormControl(''),
    })
  }

  get contNo() { return this.CreateEditForm.get('contNo') }
  get type() { return this.CreateEditForm.get('type') }
  get side() { return this.CreateEditForm.get('side') }
  get dateCheckOut() { return this.CreateEditForm.get('dateCheckOut') }
  get activity() { return this.CreateEditForm.get('activity') }
  get location() { return this.CreateEditForm.get('location') }
  get state() { return this.CreateEditForm.get('state') }
  get region() { return this.CreateEditForm.get('region') }

  ngOnInit(): void {
    const userInfo = this.accountService.getUserInfo();
    this.userCreate = userInfo.fullName;
    this.containerService.GetDetail(this.containerCode).subscribe(response => {
      response = response.data
      this.getVehicle(response.licensePlates)
      this.transId = response.transaction_eir_id;
      this.currentActivity = response.activity;
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
        dateCheckIn: new FormControl(new Date()),
        dateCheckOut: new FormControl(new Date()),
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
        transType: new FormControl('Truck'),
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
        receiver : new FormControl(response.receiver),
        deliver : new FormControl(response.deliver),
      })
    });
    this.loadVehicles();
    this.loadUserDeport3();
  }

  // onSubmit() {
  //   const dialogRef = this.dialog.open(ContainerPopupComponent);
  //   dialogRef.componentInstance.title = 'Bạn có chắc chắn muốn thay đổi trạng thái hiện tại không?'
  //   dialogRef.componentInstance.button = 'Đóng';
  //   dialogRef.componentInstance.buttonConfirm = "Xác nhận";
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result.event === 'confirm') {
  //       this.submited = true;
  //       this.CreateEditForm.value.activity = parseInt(this.CreateEditForm.value.activity)
  //       this.CreateEditForm.value.typeDelivery = parseInt(this.CreateEditForm.value.typeDelivery)
  //       this.CreateEditForm.value.status = parseInt(this.CreateEditForm.value.status)
  //       this.CreateEditForm.value.weight = parseInt(this.CreateEditForm.value.weight)
  //       this.CreateEditForm.value.nameDriver = this.vehicleSelected?.nameDriver || this.CreateEditForm.value.nameDriver;
  //       this.CreateEditForm.value.licensePlates = this.vehicleSelected?.licensePlates || this.CreateEditForm.value.licensePlates;
  //       if (this.CreateEditForm.valid && this.isCreate === true) {
  //         this.containerService.CreateCont(this.CreateEditForm.value).subscribe(response => {
  //           this.dialogRef.close(response);
  //         });
  //       }
  //       if (this.CreateEditForm.valid && this.isCreate === false) {
  //         this.containerService.UpdateCont(this.containerCode, this.CreateEditForm.value).subscribe(response => {
  //           this.dialogRef.close(response);
  //         })
  //       }
  //     }
  //   })
  // }

  loadVehicles() {
    setTimeout(() => {
      this.vehicleService.GetAllEmpty().subscribe(data => {
        this.lstVehicle = data;
      })
    }, 300);
  }

  loadUserDeport3(){
    this.accountService.GetUserDeport3().subscribe(data => {
      this.lstUserDeport3 = data;
    })
  }

  getVehicle(licensePlates: string) {
    const endCodeUriLP = encodeURI(licensePlates);

    setTimeout(() => {
      this.vehicleService.GetByLicensePlates(endCodeUriLP).subscribe(res => {
        this.vehicleSelected = res;
      })
    }, 300);
    
  }


  saveTrans() {
    this.isSave = true;
    const dialogRef = this.dialog.open(ContainerPopupComponent);
    dialogRef.componentInstance.title = 'Bạn có chắc chắn muốn thay đổi trạng thái hiện tại không?';
    dialogRef.componentInstance.button = 'Đóng';
    dialogRef.componentInstance.buttonConfirm = "Xác nhận";
    this.CreateEditForm.value.activity = parseInt(this.CreateEditForm.value.activity)
    this.CreateEditForm.value.typeDelivery = parseInt(this.CreateEditForm.value.typeDelivery)
    this.CreateEditForm.value.status = parseInt(this.CreateEditForm.value.status)
    if(this.isReceiver === true){
      this.CreateEditForm.controls['deliver'].setValue(this.userReciver.userName);
      this.CreateEditForm.controls['receiver'].setValue(this.vehicleSelected.nameDriver);
    }else
    {
      this.CreateEditForm.controls['deliver'].setValue(this.vehicleSelected.nameDriver);
      this.CreateEditForm.controls['receiver'].setValue(this.userReciver.userName);
    }
    this.CreateEditForm.value.nameDriver = this.vehicleSelected?.nameDriver || this.CreateEditForm.value.nameDriver;
    this.CreateEditForm.value.licensePlates = this.vehicleSelected?.licensePlates || this.CreateEditForm.value.licensePlates;
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'confirm') {
        this.transactionService.SaveTransaction(this.CreateEditForm.value).subscribe(res => {
          if (res != null) {
            this.transId = res.data.id;
            this.toastr.showSuccess(res.message);
          } else {
            this.toastr.showError('Có lỗi xảy ra');
          }
        });
      }
    })
  }

  getDetailTrans(id: number) {
    this.transactionService.GetDetailTrans(id).subscribe(res => { return res })
  }

  handleSelect(value: any) {
    if(this.CreateEditForm.value.activity === 3 || this.CreateEditForm.value.activity === 1){
      this.isReceiver = false;
    }else
    {
      this.isReceiver = true;
    }

    const index = this.lstVehicle.findIndex((item: any) => item.licensePlates === value);
    if (index < 0) {
      return;
    }
    if(this.isReceiver === true){
      this.userReciver = this.lstVehicle[index].nameDriver;
    }else
    {
      this.userReciver = this.lstVehicle[index].nameDriver;
    }
    this.vehicleSelected = this.lstVehicle[index];
  }

  handleSelectUser(value: any) {
    if(this.CreateEditForm.value.activity === 3 || this.CreateEditForm.value.activity === 1){
      this.isReceiver = false;
    }else
    {
      this.isReceiver = true;
    }
    const index = this.lstUserDeport3.findIndex((item: any) => item.fullName === value);
    if (index < 0) {
      return;
    }
    if(this.isReceiver === true){
      this.userReciver = this.lstUserDeport3[index];
    }else
    {
      this.userReciver = this.lstUserDeport3[index];
    }
    
  }

  printE() {
    this.transactionService.GetDetailTrans(this.transId).subscribe(res => {
      if (res == null) {
        const dialogRef = this.dialog.open(ContainerPopupComponent);
        dialogRef.componentInstance.title = 'Vui lòng lưu giao dịch trước khi in!'
        dialogRef.componentInstance.button = 'Xác nhận';
      } else {
        this.transNo = res.no;
        // this.CreateEditForm.value.dateCheckIn = res.dateCheckIn;
        this.CreateEditForm.controls['dateCheckIn'].setValue(new Date());
        this.CreateEditForm.controls['dateCheckOut'].setValue(new Date());
        this.displayStyle = 'displayStyle';
        setTimeout(() => window.print(), 500);
      }
    });
  }

  getStatus() {
    if ([2, 3].includes(this.CreateEditForm.value.activity)) {
      this.CreateEditForm.value.status = 0;
      return "E";
    } else {
      this.CreateEditForm.value.status = 1;
      return "F"
    }
  }

  changeActivity(e: any) {
    if(this.CreateEditForm.value.activity === 2 || this.CreateEditForm.value.activity === 3){
        this.removeInfomation();
    }
    if(this.CreateEditForm.value.activity === 3 || this.CreateEditForm.value.activity === 1){
      this.isReceiver = false;
    }else
    {
      this.isReceiver = true;
    }
    for (let i = 0; i < lstCheckTD.length; i++) {
      const checkCurrActivity = this.currentActivity === lstCheckTD[i].activityPrev
        && this.CreateEditForm.value.activity === lstCheckTD[i].activityNext
      if (checkCurrActivity) {
        this.CreateEditForm.controls['note'].setValue(lstCheckTD[i].nameType);
        this.typeDelivery = lstCheckTD[i].nameType;
        this.CreateEditForm.value.typeDelivery = lstCheckTD[i].typeDelivery;
        this.openPopup(lstCheckTD[i].alert, lstCheckTD[i].newStep, lstCheckTD[i]?.newStepCancel)
        if (lstCheckTD[i].newStep !== 0) {
          this.CreateEditForm.controls['step'].setValue(lstCheckTD[i].newStep); 
        }
        return lstCheckTD[i].nameType
      }
    }
    return ""
  }


  removeInfomation(){
    this.CreateEditForm.patchValue({commodity: null, seal1: null,customer: null,weight : this.CreateEditForm.value.type.substring(0, 2) == "20" ? 2.3 : 4.0,voyage: null});
  }
  openPopup(alert: string, newStep: number, newStepCancel: number | undefined) {
    if (alert !== "") {
      const dialogRef = this.dialog.open(ContainerPopupComponent)
      dialogRef.componentInstance.title = alert;
      dialogRef.componentInstance.button = "Không";
      dialogRef.componentInstance.buttonConfirm = "Có";
      dialogRef.afterClosed().subscribe(result => {
        if (result.event === 'confirm') {
          this.CreateEditForm.value.step = newStep
        }
        if (result.event === 'cancel') {
          this.CreateEditForm.value.step = newStepCancel;
        }
      })
    }
  }

  closePopup() {
    this.dialogRef.close({ event: 'close' })
  }
}
