import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImportContFromShipService } from '../../../../Service/importContFromShip/import-cont-from-ship.service';

@Component({
  selector: 'app-delete-import-cont-from-port',
  templateUrl: './delete-import-cont-from-port.component.html',
  styleUrls: ['./delete-import-cont-from-port.component.css']
})
export class DeleteImportContFromPortComponent implements OnInit {

  @Input() Id : number = 0;
  constructor(private service: ImportContFromShipService,public dialogRef: MatDialogRef<DeleteImportContFromPortComponent>) { }

  ngOnInit(): void {
  }

  onDelete()
  {
      this.service.DeletePorttoShip(this.Id).subscribe(response => {
          this.dialogRef.close(response);
      })
  }

}
