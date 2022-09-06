import { Component, Input, OnInit } from '@angular/core';
import { Permission } from 'src/app/Model/Account';
import { unescapeLeadingUnderscores } from 'typescript';
import {AccountService} from '../../../../Service/Account/account.service'

@Component({
  selector: 'app-user-authorization',
  templateUrl: './user-authorization.component.html',
  styleUrls: ['./user-authorization.component.css']
})
export class UserAuthorizationComponent implements OnInit {

  @Input() UserId : string = "";
  lstAllClaim : Permission[] = []
  constructor(private service: AccountService) { }

  ngOnInit(): void {
    this.GetAllClaim();
  }


  GetAllClaim(){
    this.service.GetAllClaim(this.UserId).subscribe(data => {
      this.lstAllClaim = data;
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
    let Parent = this.lstAllClaim.findIndex(x => x.child.findIndex(y => y.claimValue == value) > 0);
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
    console.log('lstAllClaim',this.lstAllClaim);
  }


}
