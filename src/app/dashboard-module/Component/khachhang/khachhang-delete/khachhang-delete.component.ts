import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from '../../../../Service/Customer/customer.service';
@Component({
  selector: 'app-khachhang-delete',
  templateUrl: './khachhang-delete.component.html',
  styleUrls: ['./khachhang-delete.component.css']
})
export class KhachhangDeleteComponent implements OnInit {


  @Input() customerId : number = 0;
  constructor(private CustomerService: CustomerService, public dialogRef: MatDialogRef<KhachhangDeleteComponent>) { }

  ngOnInit(): void {
     console.log('customerId',this.customerId);
  }

  onDelete()
  {
      this.CustomerService.Delete(this.customerId).subscribe(response => {
          this.dialogRef.close(response);
      })
  }

}
