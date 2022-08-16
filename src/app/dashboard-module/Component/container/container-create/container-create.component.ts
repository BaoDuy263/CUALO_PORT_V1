import { ContainerService } from 'src/app/Service/container/container.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-container-create',
  templateUrl: './container-create.component.html',
  styleUrls: ['./container-create.component.css']
})
export class ContainerCreateComponent implements OnInit {
  CreateEditForm!: FormGroup
  submited: boolean = false;
  containerCode : string = '';
  isCreate : boolean = true;
  constructor(private containerService : ContainerService,public dialogRef: MatDialogRef<ContainerCreateComponent> ) {
    this.CreateEditForm = new FormGroup({
      code: new FormControl(''),
      customer: new FormControl(''),
      type : new FormControl(''),
      vessel : new FormControl(''),
      voyage : new FormControl(''),
      lastPort : new FormControl(''),
      ISO : new FormControl(''),
      side : new FormControl(''),
      bookingNo : new FormControl(''),
      commodity : new FormControl(''),
      weight : new FormControl(''),
      dateCheckIn : new FormControl(''),
      dateCheckOut : new FormControl(''),
      note : new FormControl(''),
      returnAddress : new FormControl(''),
      typeDelivery : new FormControl(''),
      activity : new FormControl(''),
      status : new FormControl(''),
      location : new FormControl(''),
      region : new FormControl(''),
      state : new FormControl(''),
  })}

  ngOnInit(): void {
    this.containerService.Detail(this.containerCode).subscribe(response => {
      console.log(response,'reponse')
      this.CreateEditForm = new FormGroup({
        code: new FormControl(response.code),
        customer: new FormControl(response.customer),
        type : new FormControl(response.type),
        vessel : new FormControl(response.vessel),
        voyage : new FormControl(response.voyage),
        lastPort : new FormControl(response.lastPort),
        ISO : new FormControl(response.ISO),
        side : new FormControl(response.side),
        bookingNo : new FormControl(response.bookingNo),
        commodity : new FormControl(response.commodity),
        weight : new FormControl(response.weight),
        dateCheckIn : new FormControl(response.dateCheckIn),
        dateCheckOut : new FormControl(response.dateCheckOut),
        note : new FormControl(response.note),
        returnAddress : new FormControl(response.returnAddress),
        typeDelivery : new FormControl(response.typeDelivery),
        activity : new FormControl(response.activity),
        status : new FormControl(response.status),
        location : new FormControl(response.location),
        region : new FormControl(response.region),
        state : new FormControl(response.state),
      })
    })
  }

  onSubmit() {
    this.submited = true;
    if(this.CreateEditForm.valid && this.isCreate === true){
      this.containerService.Insert(this.CreateEditForm.value).subscribe(response => {
          this.dialogRef.close(response);
      });
    }
    if(this.CreateEditForm.valid && this.isCreate === false){
      this.containerService.Insert(this.CreateEditForm.value).subscribe(response => {
          this.dialogRef.close(response);
      })
    }
  }
}
