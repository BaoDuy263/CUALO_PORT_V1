import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';

@Component({
  selector: 'app-create-import-cont-from-port',
  templateUrl: './create-import-cont-from-port.component.html',
  styleUrls: ['./create-import-cont-from-port.component.css']
})
export class CreateImportContFromPortComponent implements OnInit {

  CreateEditForm!: FormGroup
  submited: boolean = false;
  lstStatus = [
    { "text" : "Để lại" , "value" : true},
    {"text" : "Xuất" , "value" : false}
  ];


  lstContainer = [
    {"id" : "20'DC" , name : "Container Khô 20 feet (20DC)"},
    {"id" : "20'OT" , name : "Container Khô 20 feet hở nóc (20Ot)"},
    {"id" : "40'DC" , name : "Container Khô 40 feet (40DC)"},
    {"id" : "40'OT" , name : "Container Khô 40 feet hở nóc(400C)"}
  ]

  @Input() Id : number = 0;
  @Input() isCreate : boolean = true;
  constructor(private importContFromShipService: ImportContFromShipService,public dialogRef: MatDialogRef<CreateImportContFromPortComponent>)
  { 
    this.CreateEditForm = new FormGroup({
      Voyace: new FormControl('', Validators.required),
      ContNo: new FormControl('', Validators.required),
      Commodity: new FormControl('',Validators.required),
      CheckOut: new FormControl('',Validators.required),
      GW : new FormControl(),
      SealNo : new FormControl(),
      TypeCont : new FormControl(),
      IsLeave : new FormControl('',Validators.required),
    })
  }

  get Voyace() { return this.CreateEditForm.get('Voyace'); }
  get ContNo() { return this.CreateEditForm.get('ContNo'); }
  get Commodity() { return this.CreateEditForm.get('Commodity'); }
  get CheckOut() { return this.CreateEditForm.get('CheckOut'); }
  get IsLeave() { return this.CreateEditForm.get('IsLeave'); }



  ngOnInit(): void {
    if(this.Id > 0){
      this.getDetail();
    }
  }

  getDetail() {
   
    this.importContFromShipService.GetPorttoShip(this.Id).
    subscribe(data => 
      {
        console.log('data',data);
        this.CreateEditForm = new FormGroup({
          id : new FormControl(data.data.id, Validators.required),
          Voyace: new FormControl(data.data.voyace, Validators.required),
          ContNo: new FormControl(data.data.contNo, Validators.required),
          Commodity: new FormControl(data.data.commodity,Validators.required),
          CheckOut: new FormControl(data.data.checkOut,Validators.required),
          GW : new FormControl(data.data.gw),
          SealNo : new FormControl(data.data.sealNo),
          TypeCont : new FormControl(data.data.typeCont),
          IsLeave : new FormControl(data.data.isLeave,Validators.required),
      })
      });
  }

  onSubmit(){
    this.submited = true;
    if(this.CreateEditForm.value.IsLeave === "true"){
      this.CreateEditForm.value.IsLeave = true
    }else
    {
      this.CreateEditForm.value.IsLeave = false
    }
    if(this.CreateEditForm.valid && this.isCreate === true){
      
      this.importContFromShipService.InsertPorttoShip(this.CreateEditForm.value).subscribe(response => {
        this.dialogRef.close(response);
      });
    }
    if(this.CreateEditForm.valid && this.isCreate === false){
      this.importContFromShipService.UpdatePorttoShip(this.CreateEditForm.value)
      .subscribe(response => {
          this.dialogRef.close(response);
      });
    }
  }

}
