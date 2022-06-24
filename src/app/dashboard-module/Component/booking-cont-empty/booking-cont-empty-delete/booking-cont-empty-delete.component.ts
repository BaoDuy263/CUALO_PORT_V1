import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingContEmptyService } from 'src/app/Service/booking-cont-empty/booking-cont-emtpy.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { CustomerService } from '../../../../Service/Customer/customer.service';

@Component({
  selector: 'app-booking-cont-empty-delete',
  templateUrl: './booking-cont-empty-delete.component.html',
})
export class BookingContEmptyDeleteComponent implements OnInit {
  @Input() customerId : number = 0;

  constructor(private BookingContEmptyService: BookingContEmptyService, public dialogRef: MatDialogRef<BookingContEmptyDeleteComponent>) { }

  ngOnInit(): void {
  }

  onDelete()
  {
      this.BookingContEmptyService.Delete(this.customerId).subscribe(response => {
          this.dialogRef.close(response);
      })
  }

}
