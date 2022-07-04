import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ROUTE_DATA, TypeRoute } from './sidebar'
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideVertical', [
      state(
        '*',
        style({
          height: 0
        })
      ),
      state(
        'show',
        style({
          height: '*'
        })
      ),
      transition('* => *', [animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  treeControl = new NestedTreeControl<TypeRoute>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TypeRoute>();
  activeNode:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dataSource.data = ROUTE_DATA;
  }

  LoadSideBar() // hàm sau để load sibar theo role;
  {
    const UserInfo = JSON.parse(localStorage.getItem('UserInfo') || '{}');
    const lstRole = UserInfo.listRole;
  }

  hasChild = (_: number, node: TypeRoute) => !!node.children && node.children.length > 0;


  ChangeUrl(url: string) {
    this.router.navigate(['/Home/' + url]);
  }

}
