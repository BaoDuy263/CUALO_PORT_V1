import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  fileUploadForm: FormGroup;
  fileInputLabel : String = '';
  file : any;
  constructor( private formBuilder: FormBuilder,private importContFromShipService: ImportContFromShipService) { 
    this.CreateEditForm = new FormGroup({
      Vessel: new FormControl('', Validators.required),
      Voyace: new FormControl('', Validators.required),
      Etd: new FormControl('',Validators.required),
      FileExcel : new FormControl(),
    })
    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.file,this.file.Name);
    this.importContFromShipService.Upload(formData).subscribe(data => console.log(data));
  }

  onFileSelect(e : any) {
    if (e.target.files.length > 0) {
      this.file = e.target.files[0];
    }
  }
}
