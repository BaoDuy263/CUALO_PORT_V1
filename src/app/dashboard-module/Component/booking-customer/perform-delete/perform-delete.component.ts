import { PerformCreateComponent } from './../perform-create/perform-create.component';
import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-perform-delete',
  templateUrl: './perform-delete.component.html',
  styleUrls: ['./perform-delete.component.css']
})
export class PerformDeleteComponent implements OnInit {
  performId: number = 0;
  constructor(private bookingService : BookingServiceService,public dialogRef: MatDialogRef<PerformCreateComponent> ) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.bookingService.DeletePerform(this.performId).subscribe(response => {
      this.dialogRef.close(response);
    })
  }

}
