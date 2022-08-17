import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imp-cont-board',
  templateUrl: './imp-cont-board.component.html',
  styleUrls: ['./imp-cont-board.component.css']
})
export class ImpContBoardComponent implements OnInit {
  links = [{link:"/Home/import-container/template", label: "Booking"}, {link:"/Home/import-container/list", label: "Danh sách KH-TH"}, ]
  constructor() { }

  ngOnInit(): void {
  }

}
