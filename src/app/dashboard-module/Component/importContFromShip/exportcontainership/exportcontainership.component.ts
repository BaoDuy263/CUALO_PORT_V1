import { Component, Input, OnInit } from '@angular/core';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exportcontainership',
  templateUrl: './exportcontainership.component.html',
  styleUrls: ['./exportcontainership.component.css']
})
export class ExportcontainershipComponent implements OnInit {

  @Input() Id : number = 0;
  @Input() ContNo : string = "";
  @Input() Location : string = "";
  constructor(private service : ImportContFromShipService,public dialogRef: MatDialogRef<ExportcontainershipComponent>) { }

  ngOnInit(): void {
    
  }

  bulkAction()
  {
    this.service.bulkActionImport(this.ContNo).subscribe(data => {
      this.dialogRef.close(data);
    })
  }

}
