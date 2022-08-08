import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImportContFromShipService } from '../../../../Service/importContFromShip/import-cont-from-ship.service';

@Component({
  selector: 'app-deleteimport-contfrom-ship',
  templateUrl: './deleteimport-contfrom-ship.component.html',
  styleUrls: ['./deleteimport-contfrom-ship.component.css']
})
export class DeleteimportContfromShipComponent implements OnInit {


  @Input() Id : number = 0;
  constructor(private service: ImportContFromShipService,public dialogRef: MatDialogRef<DeleteimportContfromShipComponent>) { }

  ngOnInit(): void {
  }

  onDelete()
  {
      this.service.DeletePorttoShip(this.Id).subscribe(response => {
          this.dialogRef.close(response);
      })
  }
}
