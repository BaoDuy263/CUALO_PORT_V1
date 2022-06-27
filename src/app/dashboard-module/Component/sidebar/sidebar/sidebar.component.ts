import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ROUTE_DATA , TypeRoute} from './sidebar'
import { Router} from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  treeControl = new NestedTreeControl<TypeRoute>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TypeRoute>();

  constructor( private router: Router ) {}

  ngOnInit(): void {
    this.dataSource.data = ROUTE_DATA;
  }

  LoadSideBar() // hàm sau để load sibar theo role;
  {
    const UserInfo =  JSON.parse(localStorage.getItem('UserInfo')|| '{}');
    const lstRole = UserInfo.listRole;
  }

  hasChild = (_: number, node: TypeRoute) => !!node.children && node.children.length > 0;

  
  ChangeUrl (url : string) {
    this.router.navigate(['/Home/' + url]);
  }

}
