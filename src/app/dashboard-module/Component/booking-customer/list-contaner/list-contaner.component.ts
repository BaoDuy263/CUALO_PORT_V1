import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingServiceService } from 'src/app/Service/booking-customer/booking-service.service';

@Component({
  selector: 'app-list-contaner',
  templateUrl: './list-contaner.component.html',
  styleUrls: ['./list-contaner.component.css']
})
export class ListContanerComponent implements OnInit {
  lstData: ContainerEmpty[] = [];
  itemSelected = "";
  planId: number = 0;
  constructor(private bookingService: BookingServiceService,public dialogRef: MatDialogRef<ListContanerComponent>) { }

  ngOnInit(): void {
    this.bookingService.GetAllContainer().subscribe(res => this.lstData = res)
  }

  hanldeClickItem(item: ContainerEmpty) {
    this.itemSelected = item.containerNo;
  }

  closeDialog() {
    this.dialogRef.close(ListContanerComponent)
  }

  handleSubmit() {
    this.bookingService.CreateEIRFromPlan({id: this.planId, containerNo: this.itemSelected}).subscribe(res => this.dialogRef.close(res))
  }
}

export interface ContainerEmpty
{
  containerNo: string
}
