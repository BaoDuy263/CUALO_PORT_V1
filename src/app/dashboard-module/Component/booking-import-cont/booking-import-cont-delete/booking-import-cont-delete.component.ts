import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingImportContService } from 'src/app/Service/booking-import-cont/booking-import-cont.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { CustomerService } from '../../../../Service/Customer/customer.service';

@Component({
  selector: 'app-booking-import-cont-delete',
  templateUrl: './booking-import-cont-delete.component.html',
})
export class BookingImportContDeleteComponent implements OnInit {

  @Input() customerId : number = 0;
  constructor(private BookingImportContService: BookingImportContService, public dialogRef: MatDialogRef<BookingImportContDeleteComponent>) { }

  ngOnInit(): void {
    //  console.log('customerId',this.customerId);
  }

  onDelete()
  {
      this.BookingImportContService.Delete(this.customerId).subscribe(response => {
          this.dialogRef.close(response);
      })
  }

}
