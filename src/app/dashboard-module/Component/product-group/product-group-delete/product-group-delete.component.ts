import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductGroupService } from 'src/app/Service/Product-group/product-group.service';
import { UnitService } from 'src/app/Service/Unit/unit.service';
import { CustomerService } from '../../../../Service/Customer/customer.service';

@Component({
  selector: 'app-product-group-delete',
  templateUrl: './product-group-delete.component.html',
})
export class ProductGroupDeleteComponent implements OnInit {
  @Input() customerId : number = 0;

  constructor(private productGroupService: ProductGroupService, public dialogRef: MatDialogRef<ProductGroupDeleteComponent>) { }

  ngOnInit(): void {
  }
  onDelete()
  {
      this.productGroupService.Delete(this.customerId).subscribe(response => {
          this.dialogRef.close(response);
      })
  }
}


