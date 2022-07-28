import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateimportContfromShipComponent } from '../createimport-contfrom-ship/createimport-contfrom-ship.component';

@Component({
  selector: 'app-indeximport-contfrom-ship',
  templateUrl: './indeximport-contfrom-ship.component.html',
  styleUrls: ['./indeximport-contfrom-ship.component.css']
})
export class IndeximportContfromShipComponent implements OnInit {

  loadding: boolean = false;
  isCreate: boolean = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openCreate() {
    const dialogRef = this.dialog.open(CreateimportContfromShipComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     if (result.statusCode === 200) {
          
    //     }
    //     else {
          
    //     }
    //   }
    // });
  }

}
