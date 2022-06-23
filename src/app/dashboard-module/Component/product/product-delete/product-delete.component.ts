import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/Service/Product/product.service';
import { CustomerService } from '../../../../Service/Customer/customer.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
})
export class ProductDeleteComponent implements OnInit {

  @Input() customerId : number = 0;
  constructor(private ProductService: ProductService, public dialogRef: MatDialogRef<ProductDeleteComponent>) { }

  ngOnInit(): void {
    //  console.log('customerId',this.customerId);
  }

  onDelete()
  {
      this.ProductService.Delete(this.customerId).subscribe(response => {
          this.dialogRef.close(response);
      })
  }

}
