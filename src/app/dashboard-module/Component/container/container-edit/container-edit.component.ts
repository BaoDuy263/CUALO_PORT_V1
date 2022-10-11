import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';
import { TransactionService } from 'src/app/Service/transaction/transaction.service';
import { VehicleService } from 'src/app/Service/Vehicle/vehicle.service';
import { validateMajor } from 'src/app/utils/constant';
import { activitiesData, lstSide, lstState, lstStatusData, lstStep, lstTypeContData, lstTypeDelivery } from '../../../../utils/helper/constant';
import { convertHelper } from '../../../../utils/helper/convertHelper';
import { ContainerPopupComponent } from '../container-popup/container-popup.component';

@Component({
  selector: 'app-container-edit',
  templateUrl: './container-edit.component.html',
  styleUrls: ['./container-edit.component.css']
})
export class ContainerEditComponent implements OnInit {
  CreateEditForm!: FormGroup;
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
  transNo: string = '';
  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  };

  lstLocation :Array<{id: string,positionLabel:string}> = []
  constructor(private containerService: Containerv2Service,
    private importContFromShipService: ImportContFromShipService,
    public dialogRef: MatDialogRef<ContainerEditComponent>, private toastr: ToastrcustomService,
    private transactionService: TransactionService, private vehicleService: VehicleService,
    public dialog: MatDialog, public convertHelper: convertHelper) {
    this.CreateEditForm = new FormGroup({
      contNo: new FormControl('', [Validators.required]),
      no: new FormControl(''),
      vessel: new FormControl(''),
      voyage: new FormControl(''),
      customer: new FormControl(''),
      commodity: new FormControl(''),
      weight: new FormControl(0, [Validators.required]),
      nWeight: new FormControl(),
      note: new FormControl(''),
      consignee: new FormControl(''),
      book: new FormControl(''),
      bill: new FormControl(''),
      seal: new FormControl(''),
      type: new FormControl(''),
      size: new FormControl('', [Validators.required]),
      datePlan: new FormControl(''),
      dateCheckIn: new FormControl(''),
      dateCheckOut: new FormControl(''),
      transaction_eir_no: new FormControl(''),
      transaction_eir_id: new FormControl(0),
      location: new FormControl('', [Validators.required]),
      statusContainer: new FormControl(''),
      step: new FormControl(0, [Validators.required]),
      side: new FormControl(0, [Validators.required]),
      typeDelivery: new FormControl(0, [Validators.required]),
      activity: new FormControl(0, [Validators.required]),
      status: new FormControl(0, [Validators.required]),
      state: new FormControl(0, [Validators.required]),
      datePacking: new FormControl(''),
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
      returnPlace: new FormControl('CLP'),
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

  ngOnInit(): void {
    if (!this.isCreate) {
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
          noBL: new FormControl(response.noBL)
        })
        this.loadVehicles();
        this.GetLocatonFree()
      });
    }
  }

  get contNo() { return this.CreateEditForm.get('contNo'); }
  get weight() { return this.CreateEditForm.get('weight'); }
  get nWeight() { return this.CreateEditForm.get('nWeight') }

  onSubmit() {
    const dialogRef = this.dialog.open(ContainerPopupComponent);
    dialogRef.componentInstance.title = 'Bạn có chắc chắn muốn thay đổi trạng thái hiện tại không?'
    dialogRef.componentInstance.button = 'Đóng';
    dialogRef.componentInstance.buttonConfirm = "Xác nhận";
    console.log(this.CreateEditForm.value, 'value')
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'confirm') {
        const check = this.validateForm(this.CreateEditForm.value);
        if (check) {
          this.submited = true;
          this.CreateEditForm.value.nameDriver = this.vehicleSelected?.nameDriver || this.CreateEditForm.value.nameDriver;
          this.CreateEditForm.value.licensePlates = this.vehicleSelected?.licensePlates || this.CreateEditForm.value.licensePlates;
          if (this.CreateEditForm.valid && this.isCreate) {
            this.containerService.CreateCont(this.CreateEditForm.value).subscribe(response => {
              this.dialogRef.close(response);
            });
          }
          if (this.CreateEditForm.valid && !this.isCreate) {
            this.containerService.UpdateCont(this.containerCode, this.CreateEditForm.value).subscribe(response => {
              this.dialogRef.close(response);
            })
          }
        } else {
          const dialogRef2 = this.dialog.open(ContainerPopupComponent);
          dialogRef2.componentInstance.title = 'Bước hiện tại không phù hợp với phương án được chọn. Vui lòng chọn lại phương án!!!';
          dialogRef2.componentInstance.button = 'Xác nhận';
        }
      }
    })
  }

  loadVehicles() {
    setTimeout(() => {
      this.vehicleService.GetAllEmpty().subscribe(data => {
        this.lstVehicle = data;
      })
    }, 300);
  }

  GetLocatonFree()
  {
    this.importContFromShipService.GetLocationFree().subscribe(data=> {
      this.lstLocation = data;
    })
  }

  saveTrans() {
    const dialogRef = this.dialog.open(ContainerPopupComponent);
    dialogRef.componentInstance.title = 'Bạn có chắc chắn muốn thay đổi trạng thái hiện tại không?'
    dialogRef.componentInstance.button = 'Đóng';
    dialogRef.componentInstance.buttonConfirm = "Xác nhận";
    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'confirm') {
        this.transactionService.SaveTransaction(this.CreateEditForm.value).subscribe(res => {
          if (res != null) {
            this.transId = res.data.id;
            this.toastr.showSuccess(res.message);
          } else {
            this.toastr.showError("Có lỗi xảy ra!");
          }
        });
      }
    })
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

  validateForm(form: any) {
    const listCheck = validateMajor;
    let isSuccess = true
    for (let i = 0; i < listCheck.length; i++) {
      if (form.step === listCheck[i].step && !listCheck[i].activity.includes(form.activity)) {
        isSuccess = false;
      }
    }
    return isSuccess;
  }
}
