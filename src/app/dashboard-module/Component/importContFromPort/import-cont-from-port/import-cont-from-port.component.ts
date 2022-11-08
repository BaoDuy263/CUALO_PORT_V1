import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';

@Component({
  selector: 'app-import-cont-from-port',
  templateUrl: './import-cont-from-port.component.html',
  styleUrls: ['./import-cont-from-port.component.css']
})
export class ImportContFromPortComponent implements OnInit {

  file : any;
  @Input() isImportKH: boolean = true;
  constructor(private importContFromShipService: ImportContFromShipService,public dialogRef: MatDialogRef<ImportContFromPortComponent>) { }

  ngOnInit(): void {
  }


  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.file,this.file.Name);
    if(this.isImportKH){
      this.importContFromShipService.ImportPorttoShip(formData).subscribe(data =>  this.dialogRef.close(data));
    }
    if(!this.isImportKH)
    {
      this.importContFromShipService.ImportPorttoShipTH(formData).subscribe(data => this.dialogRef.close(data));
    }
  }

  onFileSelect(e : any) {
    if (e.target.files.length > 0) {
      this.file = e.target.files[0];
    }
  }

}
