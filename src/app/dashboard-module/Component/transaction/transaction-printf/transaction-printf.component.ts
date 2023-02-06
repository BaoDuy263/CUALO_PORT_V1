import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TransactionService } from '../../../../Service/transaction/transaction.service';
import { activitiesData, lstSide, lstStatusData, lstTypeContData, lstTypeDelivery, lstState, lstStep, lstCheckTD } from '../../../../utils/helper/constant';
import { convertHelper } from '../../../../utils/helper/convertHelper'
import { VehicleService } from 'src/app/Service/Vehicle/vehicle.service';
import { AccountService } from 'src/app/Service/Account/account.service'
@Component({
  selector: 'app-transaction-printf',
  templateUrl: './transaction-printf.component.html',
  styleUrls: ['./transaction-printf.component.css']
})
export class TransactionPrintfComponent implements OnInit {
  CreateEditForm!: FormGroup
  @Input() transId : number = 0;
  activities = activitiesData;
  lstStatusData = lstStatusData;
  lstTypeDelivery = lstTypeDelivery;
  lstTypeCont = lstTypeContData;
  lstSide = lstSide;
  lstState = lstState;
  lstStep = lstStep;
  itemPrint: any = null;
  lstVehicle: any = [];
  vehicleSelected: any = null;
  displayStyle: string = '';
  isReceiver : boolean =  false;
  userCreate: string = '';
  constructor(private transactionService: TransactionService,
    public dialogRef: MatDialogRef<TransactionPrintfComponent>,
    public convertHelper: convertHelper,
    private accountService: AccountService,
    private vehicleService: VehicleService) {
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
      typeCont: new FormControl(''),
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

  ngOnInit(): void {
    this.transactionService.GetDetailTrans(this.transId).subscribe(response => {

      this.getVehicle(response.licensePlates);
      this.getUserCreate(response.createdBy);
      if(response.activity === 3 || response.activity === 1){
        this.isReceiver = false;
      }
      else
      {
        this.isReceiver = true;
      }
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
        typeDelivery: new FormControl(this.getTypeDelivery(response.typeDelivery)),
        activity: new FormControl(this.getActivity(response.activity)),
        status: new FormControl(this.getStatus(response.status)),
        state: new FormControl(response.state),
        datePacking: new FormControl(response.datePacking),
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
        arriveDate: new FormControl(response.arriveDate),
        transType: new FormControl(response.transType),
        transCom: new FormControl(response.transCom),
        vehicleNo: new FormControl(response.vehicleNo),
        lastImportDate: new FormControl(response.lastImportDate),
        lastExportDate: new FormControl(response.lastExportDate),
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
        createby : new FormControl(response.createdBy)
      })
    });
  }

  getStatus(status: number) {
    if (status == 0) {
      return "E";
    } else {
      return "F"
    }
  }

  getUserCreate(userName: string){
      this.accountService.GetUserByUserName(userName).subscribe(data => {
          if(data){
             this.userCreate = data.fullName
          }
          else
          {
            this.userCreate = userName;
          }
      })
  }

  printE() {
    this.displayStyle = 'displayStyle';
    setTimeout(() => window.print(), 500);
  }

  closePopup() {
    this.dialogRef.close({ event: 'close' })
  }

  getActivity(acitviti: number){
      let activities = this.activities.find(x => x.value == acitviti);
      return activities!.name
  }

  getTypeDelivery(typeDelivery: number){
    let eDelivery = this.lstTypeDelivery.find(x => x.value == typeDelivery);
    return eDelivery!.name
}


  getVehicle(licensePlates: string) {
    const endCodeUriLP = encodeURI(licensePlates);
    this.vehicleService.GetByLicensePlates(endCodeUriLP).subscribe(res => {
      this.vehicleSelected = res;
    })
  }
}
