import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UnitService } from 'src/app/Service/Unit/unit.service';
import { CustomerService } from '../../../../Service/Customer/customer.service';

@Component({
  selector: 'app-unit-delete',
  templateUrl: './unit-delete.component.html',
})
export class UnitDeleteComponent implements OnInit {
  @Input() customerId : number = 0;

  constructor(private unitService: UnitService, public dialogRef: MatDialogRef<UnitDeleteComponent>) { }

  ngOnInit(): void {
  }
  onDelete()
  {
      this.unitService.Delete(this.customerId).subscribe(response => {
          this.dialogRef.close(response);
      })
  }
}
