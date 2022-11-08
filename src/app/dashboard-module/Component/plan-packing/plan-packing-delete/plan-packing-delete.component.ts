import { PlanPackingCreateComponent } from './../plan-packing-create/plan-packing-create.component';
import { BookingTemplateService } from './../../../../Service/booking-template/booking-template.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-plan-packing-delete',
  templateUrl: './plan-packing-delete.component.html',
  styleUrls: ['./plan-packing-delete.component.css']
})
export class PlanPackingDeleteComponent implements OnInit {
  bookingId : number = 0;
  constructor(private bookingService : BookingTemplateService, public dialogRef: MatDialogRef<PlanPackingCreateComponent> ) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.bookingService.Delete(this.bookingId).subscribe(response => {
      this.dialogRef.close(response);
    })
  }

}
