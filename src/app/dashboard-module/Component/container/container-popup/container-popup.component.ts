import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-container-popup',
  templateUrl: './container-popup.component.html',
  styleUrls: ['./container-popup.component.css']
})
export class ContainerPopupComponent implements OnInit {
  button: string = '';
  title: string = '';
  buttonConfirm: string = ''
  constructor(public dialogRef: MatDialogRef<ContainerPopupComponent> ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close({ event: 'cancel'})
  }

  onSubmit() {
    this.dialogRef.close({ event: 'confirm'})
  }

}
