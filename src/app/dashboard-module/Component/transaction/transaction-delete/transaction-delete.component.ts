import { TransactionService } from 'src/app/Service/transaction/transaction.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transaction-delete',
  templateUrl: './transaction-delete.component.html',
  styleUrls: ['./transaction-delete.component.css']
})
export class TransactionDeleteComponent implements OnInit {

  @Input() transId : number = 0;
  constructor(private transactionService: TransactionService, public dialogRef: MatDialogRef<TransactionDeleteComponent>) { }

  ngOnInit(): void {
    //  console.log('customerId',this.customerId);
  }

  onDelete()
  {
      this.transactionService.Delete(this.transId).subscribe(response => {
          this.dialogRef.close(response);
      })
  }

}
