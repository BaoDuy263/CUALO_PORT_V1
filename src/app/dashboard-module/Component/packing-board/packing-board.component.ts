import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packing-board',
  templateUrl: './packing-board.component.html',
  styleUrls: ['./packing-board.component.css']
})
export class PackingBoardComponent implements OnInit {
  links = [{link:"/Home/plan-packing/template", label: "Booking"}, {link:"/Home/plan-packing/list", label: "Danh sách kế hoạch"}, ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
