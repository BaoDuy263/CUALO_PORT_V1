import { BookingTemplateService } from './../../../../Service/booking-template/booking-template.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-plan-packing-create',
  templateUrl: './plan-packing-create.component.html',
  styleUrls: ['./plan-packing-create.component.css']
})
export class PlanPackingCreateComponent implements OnInit {

  CreateEditForm!: FormGroup
  submited: boolean = false;
  bookCutomerId : number = 0;
  isCreate : boolean = true;

  constructor(private bookingService : BookingTemplateService,public dialogRef: MatDialogRef<PlanPackingCreateComponent> ) {
    this.CreateEditForm = new FormGroup({
      name: new FormControl(''),
      pathFile : new FormControl(''),
      createdBy : new FormControl(''),
      createdOn: new FormControl('')
    })
  }
  ngOnInit(): void {
      this.bookingService.Detail(this.bookCutomerId).subscribe(response => {
        this.CreateEditForm = new FormGroup({
          id: new FormControl(response.id),
          name: new FormControl(response.name),
          pathFile : new FormControl(response.pathFile),
          createdBy : new FormControl(response.createdBy),
          createdOn: new FormControl((response.createdOn).slice(0,19))
        });
      })
  }

  onSubmit() {
    this.submited = true;
    if(this.CreateEditForm.valid && this.isCreate === true){
      this.bookingService.Insert(this.CreateEditForm.value).subscribe(response => {
          this.dialogRef.close(response);
      });
    }
    if(this.CreateEditForm.valid && this.isCreate === false){
      this.bookingService.Update(this.CreateEditForm.value).subscribe(response => {
          this.dialogRef.close(response);
      })
    }
  }

}
