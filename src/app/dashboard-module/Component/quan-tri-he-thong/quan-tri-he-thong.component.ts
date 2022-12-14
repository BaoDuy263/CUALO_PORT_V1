import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoleService } from '../../../Service/Roles/role.service';
import { RolePermissionComponent } from './role-permission/role-permission.component';
@Component({
  selector: 'app-quan-tri-he-thong',
  templateUrl: './quan-tri-he-thong.component.html',
  styleUrls: ['./quan-tri-he-thong.component.css']
})
export class QuanTriHeThongComponent implements OnInit {


  lstdata: any = [];

  PageInfo = {
    page: 1,
    searchKey: '',
    pageSize: 10
  }

  constructor(private roleService : RoleService,public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.Paging();
  }


  Paging() {
      this.roleService.Paging(this.PageInfo.page,this.PageInfo.searchKey,this.PageInfo.pageSize).subscribe(data => {
          this.lstdata = data;
      })
  }

  openPermission(RoleId: string){
    const dialogRef = this.dialog.open(RolePermissionComponent)
    dialogRef.componentInstance.RoleId = RoleId;
  }

}
