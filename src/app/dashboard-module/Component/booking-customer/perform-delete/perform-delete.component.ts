import { TransactionService } from './../../../../Service/transaction/transaction.service';
import { Containerv2Service } from 'src/app/Service/containerv2/containerv2.service';
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
  constructor(private transactionService : TransactionService,public dialogRef: MatDialogRef<PerformCreateComponent> ) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.transactionService.Delete(this.performId).subscribe(response => {
      this.dialogRef.close(response);
    })
  }

}
