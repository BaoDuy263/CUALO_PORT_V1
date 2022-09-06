import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';

@Component({
  selector: 'app-export-container',
  templateUrl: './export-container.component.html',
  styleUrls: ['./export-container.component.css']
})
export class ExportContainerComponent implements OnInit {


  @Input() Id : number = 0;
  constructor(private service : ImportContFromShipService,public dialogRef: MatDialogRef<ExportContainerComponent>) { }

  ngOnInit(): void {
  }


  bulkAction()
  {
    this.service.bulkAction(this.Id).subscribe(data => {
      this.dialogRef.close(data);
    })
  }

}
