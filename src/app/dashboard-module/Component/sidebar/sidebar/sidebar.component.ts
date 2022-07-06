import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ROUTE_DATA, TypeRoute } from './sidebar'
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccountService } from 'src/app/Service/Account/account.service';


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
  activeNode: any;
  // dataMenu:any;
  constructor(private router: Router, private AccountService: AccountService) { }

  ngOnInit(): void {
    this.categoryParent();
  }

  categoryParent() {
    var userInfo = this.AccountService.getUserInfo();
    var listRole = userInfo.listRole;
    var arr: any = [];
    for (let i = 0; i < listRole.length; i++) {
      for (let j = 0; j < ROUTE_DATA.length; j++) {

        var index = ROUTE_DATA[j]['roles'].indexOf(listRole[i]);
        if (index > -1) {

          var data: any = {};

          data['name'] = ROUTE_DATA[j]['name'];
          if (ROUTE_DATA[j]['children']) {
            data['children'] = this.categoryChild(listRole, ROUTE_DATA[j]['children']);
          } else {
            data['url'] = ROUTE_DATA[j]['url'];
          }
          arr.push(data)
        }

      }
    }
    var test = this.deleteDuplicate(arr);
    this.dataSource.data = test;
  }

  categoryChild(listRole: any, data: any) {
    var arr: any = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < listRole.length; j++) {

        var index = data[i]['roles'].indexOf(listRole[j]);
        if (index > -1) {

          var test: any = {};

          test['name'] = data[i]['name'];
          test['url'] = data[i]['url'];

          arr.push(test)
        }

      }
    }
    return this.deleteDuplicate(arr);
  }

  deleteDuplicate(arr: any) {
    var filtered = arr.reduce((filtered: any[], item: any) => {
      if (!filtered.some(filteredItem => JSON.stringify(filteredItem) == JSON.stringify(item)))
        filtered.push(item)

      return filtered;
    }, [])
    return filtered;

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
function uniq(arr: any, arg1: string) {
  throw new Error('Function not implemented.');
}

