import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/Service/Product/product.service';
import { VehicleService } from 'src/app/Service/Vehicle/vehicle.service';
import { CustomerService } from '../../../../Service/Customer/customer.service';

@Component({
  selector: 'app-vehicle-delete',
  templateUrl: './vehicle-delete.component.html',
})
export class VehicleDeleteComponent implements OnInit {
  @Input() customerId : number = 0;
  constructor(private VehicleService: VehicleService, public dialogRef: MatDialogRef<VehicleDeleteComponent>) { }

  ngOnInit(): void {
  }

  onDelete()
  {
      this.VehicleService.Delete(this.customerId).subscribe(response => {
          this.dialogRef.close(response);
      })
  }

}
