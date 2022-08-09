import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';

@Component({
  selector: 'app-import-cont',
  templateUrl: './import-cont.component.html',
  styleUrls: ['./import-cont.component.css']
})
export class ImportContComponent implements OnInit {

  file : any;
  @Input() isImport: boolean = true;
  constructor(private importContFromShipService: ImportContFromShipService,public dialogRef: MatDialogRef<ImportContComponent>) { }

  ngOnInit(): void {
  }


  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.file,this.file.Name);
    if(this.isImport){
      this.importContFromShipService.ImportFromShiptoPort(formData).subscribe(data => this.dialogRef.close(data));
    }
    else{
      this.importContFromShipService.UploadShiptoPort(formData).subscribe(data => this.dialogRef.close(data));
    }
  }

  onFileSelect(e : any) {
    if (e.target.files.length > 0) {
      this.file = e.target.files[0];
    }
  }
}
