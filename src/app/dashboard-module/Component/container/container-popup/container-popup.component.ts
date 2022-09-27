import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-popup',
  templateUrl: './container-popup.component.html',
  styleUrls: ['./container-popup.component.css']
})
export class ContainerPopupComponent implements OnInit {
  button: string = '';
  title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClose() {

  }

}
