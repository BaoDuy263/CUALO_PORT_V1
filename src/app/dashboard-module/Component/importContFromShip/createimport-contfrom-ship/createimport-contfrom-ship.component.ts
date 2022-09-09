import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
// import * as _ from 'lodash';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';

@Component({
  selector: 'app-createimport-contfrom-ship',
  templateUrl: './createimport-contfrom-ship.component.html',
  styleUrls: ['./createimport-contfrom-ship.component.css'],
})
export class CreateimportContfromShipComponent implements OnInit {
  CreateEditForm!: FormGroup;
  submited: boolean = false;
  isCreate: boolean = true;
  @Input() Id: number = 0;

  lstContainer = [
    { id: "20'DC", name: 'Container Khô 20 feet (20DC)' },
    { id: "20'OT", name: 'Container Khô 20 feet hở nóc (20Ot)' },
    { id: "40'DC", name: 'Container Khô 40 feet (40DC)' },
    { id: "40'OT", name: 'Container Khô 40 feet hở nóc(400C)' },
  ];

  lstDirection = [
    { id: 5, name: 'Lấy Nguyên' },
    { id: 6, name: 'Rút Ruột' },
    { id: 3, name: 'Trả rỗng' },
  ];

  lstLocation :Array<{id: string,positionLabel:string}> = []

  constructor(
    private importContFromShipService: ImportContFromShipService,
    public dialogRef: MatDialogRef<CreateimportContfromShipComponent>
  ) {
    this.CreateEditForm = new FormGroup({
      Voyace: new FormControl('', Validators.required),
      Receiver: new FormControl('', Validators.required),
      BillNo: new FormControl(),
      WG: new FormControl(),
      SealNo: new FormControl(),
      Commodity: new FormControl(),
      ReturnPlan: new FormControl(),
      Location: new FormControl(),
      Book: new FormControl(),
      ReturnAddress: new FormControl(),
      StatusContainer: new FormControl(),
      Direction: new FormControl(),
      Shipper: new FormControl(),
      TypeCont: new FormControl(),
      ContNo: new FormControl('', Validators.required),
      CheckIn: new FormControl(),
      Activity: new FormControl(),
    });
  }

  get Voyace() {
    return this.CreateEditForm.get('Voyace');
  }
  get Receiver() {
    return this.CreateEditForm.get('Receiver');
  }
  get ContNo() {
    return this.CreateEditForm.get('ContNo');
  }

  ngOnInit(): void {
    this.GetLocatonFree();
    if (this.Id > 0) {
      this.getDetail();
    }
  }

  getDetail() {
    this.importContFromShipService.getDetail(this.Id).subscribe((data) => {
    
      this.CreateEditForm = new FormGroup({
        id: new FormControl(data.data.id, Validators.required),
        Voyace: new FormControl(data.data.voyace, Validators.required),
        Receiver: new FormControl(data.data.receiver, Validators.required),
        BillNo: new FormControl(data.data.billNo),
        WG: new FormControl(data.data.wg),
        SealNo: new FormControl(data.data.sealNo),
        Commodity: new FormControl(data.data.commodity),
        ReturnPlan: new FormControl(data.data.returnPlan),
        Location: new FormControl(data.data.location),
        Book: new FormControl(data.data.book),
        CheckIn: new FormControl(data.data.checkIn),
        ReturnAddress: new FormControl(data.data.returnAddress),
        StatusContainer: new FormControl(data.data.statusContainer),
        Activity: new FormControl(data.data.activity),
        Shipper: new FormControl(data.data.shipper),
        TypeCont: new FormControl(data.data.typeCont),
        ContNo: new FormControl(data.data.contNo, Validators.required),
      });
    });
  }

  GetLocatonFree()
  {
    this.importContFromShipService.GetLocationFree().subscribe(data=> {
      this.lstLocation = data;
    })
  }

  onSubmit() {
    this.submited = true;
    this.CreateEditForm.value.Activity = parseInt(
      this.CreateEditForm.value.Activity
    );
    if (this.CreateEditForm.valid && this.isCreate === true) {
      this.importContFromShipService
        .Insert(this.CreateEditForm.value)
        .subscribe((response) => {
          this.dialogRef.close(response);
        });
    }
    if (this.CreateEditForm.valid && this.isCreate === false) {
      this.importContFromShipService
        .Update(this.CreateEditForm.value)
        .subscribe((response) => {
          this.dialogRef.close(response);
        });
    }
  }

  onImportAndUpdate(){
    this.CreateEditForm.value.Activity = parseInt(
      this.CreateEditForm.value.Activity
    );
    this.importContFromShipService
    .ImportAndUpdate(this.CreateEditForm.value)
    .subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
