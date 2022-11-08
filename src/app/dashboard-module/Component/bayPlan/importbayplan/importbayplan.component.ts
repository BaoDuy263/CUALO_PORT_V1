import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BayplanserviceService } from '../../../../Service/BayPlan/bayplanservice.service'
@Component({
  selector: 'app-importbayplan',
  templateUrl: './importbayplan.component.html',
  styleUrls: ['./importbayplan.component.css']
})
export class ImportbayplanComponent implements OnInit {

  file : any;
  constructor(private service: BayplanserviceService,public dialogRef: MatDialogRef<ImportbayplanComponent>) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.file,this.file.Name);
    this.service.Import(formData).subscribe(data =>  this.dialogRef.close(data));
  }

  onFileSelect(e : any) {
    if (e.target.files.length > 0) {
      this.file = e.target.files[0];
    }
  }
}
