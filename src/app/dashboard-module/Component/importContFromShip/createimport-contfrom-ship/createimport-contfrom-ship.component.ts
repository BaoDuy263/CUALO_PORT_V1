import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';

@Component({
  selector: 'app-createimport-contfrom-ship',
  templateUrl: './createimport-contfrom-ship.component.html',
  styleUrls: ['./createimport-contfrom-ship.component.css']
})
export class CreateimportContfromShipComponent implements OnInit {


  CreateEditForm!: FormGroup
  submited: boolean = false;
  isCreate : boolean = true;
  @Input() Id : number = 0;

  constructor( private formBuilder: FormBuilder,private importContFromShipService: ImportContFromShipService,public dialogRef: MatDialogRef<CreateimportContfromShipComponent>) { 
    this.CreateEditForm = new FormGroup({
      ChuyenNhapXuat: new FormControl('', Validators.required),
      ChuHang: new FormControl('', Validators.required),
      HangHoa: new FormControl('',Validators.required),
      WG : new FormControl(),
      CangCuoi : new FormControl(),
      ContNo : new FormControl('',Validators.required),
    })
  }

  get ChuyenNhapXuat() { return this.CreateEditForm.get('ChuyenNhapXuat'); }
  get ChuHang() { return this.CreateEditForm.get('ChuHang'); }
  get HangHoa() { return this.CreateEditForm.get('HangHoa'); }
  get ContNo() { return this.CreateEditForm.get('ContNo'); }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
   
    this.importContFromShipService.getDetail(this.Id).
    subscribe(data => 
      {
        this.CreateEditForm = new FormGroup({
          id : new FormControl(data.data.id, Validators.required),
          ChuyenNhapXuat: new FormControl(data.data.chuyenNhapXuat, Validators.required),
          ChuHang: new FormControl(data.data.chuHang, Validators.required),
          HangHoa: new FormControl(data.data.hangHoa,Validators.required),
          WG : new FormControl(data.data.wg),
          CangCuoi : new FormControl(data.data.cangCuoi),
          ContNo : new FormControl(data.data.contNo,Validators.required),
      })
      });
  }

  onSubmit(){
    this.submited = true;
    if(this.CreateEditForm.valid && this.isCreate === true){
      this.importContFromShipService.Insert(this.CreateEditForm.value).subscribe(response => {
          this.dialogRef.close(response);
      });
    }
    if(this.CreateEditForm.valid && this.isCreate === false){
      this.importContFromShipService.Update(this.CreateEditForm.value)
      .subscribe(response => {
          this.dialogRef.close(response);
      });
    }
  }

 
}
