import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../../../Service/Account/account.service';
import { RoleService } from '../../../../Service/Roles/role.service';
import { Permission } from 'src/app/Model/Account';
import { ToastrcustomService } from '../../../../Interceptor/toastrcustom';


@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.css']
})


export class RolePermissionComponent implements OnInit {

  constructor(private roleService: RoleService, accountService: AccountService, private toastr: ToastrcustomService) { }


  @Input() RoleId : string = "";
  lstAllClaim : Permission[] = []
  ngOnInit(): void {
    this.GetRoleClaims();
  }

  GetRoleClaims() {
    this.roleService.GetRoleClaims(this.RoleId).subscribe(data => {
        if(data.status == 200)
        {
            this.lstAllClaim = data.data;
        }
    })
  }

  checkParent(value : string){
    let Parent = this.lstAllClaim.findIndex(x => x.parent.claimValue == value); 
    this.lstAllClaim[Parent].parent.isHas = !this.lstAllClaim[Parent].parent.isHas;
    this.lstAllClaim[Parent].child.forEach(element => {
        element.isHas = this.lstAllClaim[Parent].parent.isHas;
    });
  }

  checkChild(value: string){
    let Parent = this.lstAllClaim.findIndex(x => x.child.findIndex(y => y.claimValue == value) >= 0);
    if(Parent != undefined){
      let Child = this.lstAllClaim[Parent].child.findIndex(x => x.claimValue == value);
      this.lstAllClaim[Parent].child[Child].isHas = !this.lstAllClaim[Parent].child[Child].isHas;
      for (const element of this.lstAllClaim[Parent].child) {
        this.lstAllClaim[Parent].parent.isHas = true;
        if (element.isHas == false) {
          this.lstAllClaim[Parent].parent.isHas = false;
          break;
        }
      }
    }
  }

  onSave()
  {
      let newItem = {
        roleId : this.RoleId,
        permission : this.lstAllClaim
      };

      this.roleService.AddClaimsToRole(newItem).subscribe(data => {
        if (data) {
          if (data.status === 200) {
            this.toastr.showSuccess(data.message);
          } else {
            this.toastr.showError(data.message);
          }
        }
      })
  }

}
