import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-container-move',
  templateUrl: './container-move.component.html',
  styleUrls: ['./container-move.component.css']
})
export class ContainerMoveComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContainerMoveComponent>) { }

  ngOnInit(): void {
  }

  onBtn(item: string){
      this.dialogRef.close(item);
  }



}
