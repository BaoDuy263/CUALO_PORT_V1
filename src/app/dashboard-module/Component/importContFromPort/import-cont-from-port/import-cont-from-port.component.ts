import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';

@Component({
  selector: 'app-import-cont-from-port',
  templateUrl: './import-cont-from-port.component.html',
  styleUrls: ['./import-cont-from-port.component.css']
})
export class ImportContFromPortComponent implements OnInit {

  file : any;
  constructor(private importContFromShipService: ImportContFromShipService,public dialogRef: MatDialogRef<ImportContFromPortComponent>) { }

  ngOnInit(): void {
  }


  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.file,this.file.Name);
    this.importContFromShipService.ImportPorttoShip(formData).subscribe(data => console.log('data',data));
  }

  onFileSelect(e : any) {
    if (e.target.files.length > 0) {
      this.file = e.target.files[0];
    }
  }

}
