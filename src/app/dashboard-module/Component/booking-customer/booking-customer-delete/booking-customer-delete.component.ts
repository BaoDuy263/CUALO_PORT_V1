import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';
import { BookingCustomerCreateComponent } from '../booking-customer-create/booking-customer-create.component';

@Component({
  selector: 'app-booking-customer-delete',
  templateUrl: './booking-customer-delete.component.html',
  styleUrls: ['./booking-customer-delete.component.css']
})
export class BookingCustomerDeleteComponent implements OnInit {
  bookCutomerId : number = 0;
  constructor(private bookingService : BookingServiceService,public dialogRef: MatDialogRef<BookingCustomerCreateComponent> ) { }

  ngOnInit(): void {
    
  }

  onDelete(){
    this.bookingService.Delete(this.bookCutomerId).subscribe(response => {
      this.dialogRef.close(response);
    })
  }
}
