import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-packing-board',
  templateUrl: './packing-board.component.html',
  styleUrls: ['./packing-board.component.css']
})
export class PackingBoardComponent implements OnInit {
  links = [{link:"/Home/plan-packing/list", label: "Danh sách kế hoạch"}, {link:"/Home/plan-packing/template", label: "Booking"}]
  constructor() { }

  ngOnInit(): void {
  }

}
