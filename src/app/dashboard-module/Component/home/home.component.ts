
import { Component, OnInit, ViewChild,  ChangeDetectorRef, AfterViewInit   } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../Service/Account/account.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { delay, filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
// @UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit    { 
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  opened : boolean;
  show : boolean
  urlAvartar: string = '';
  constructor(private router: Router,private cdr: ChangeDetectorRef,private accountService : AccountService, private observer: BreakpointObserver) {
    this.opened = true;
    this.show = false;
    
    const UserInfo = this.accountService.getUserInfo();
    if(UserInfo == null){
      this.router.navigate(['/Login']);    
    }
    this.accountService.getAccountInfo().subscribe(response => {
      this.urlAvartar = "https://45.124.94.191:5001"+response.avatar;
    });

   }

   ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {
      
  }

  reload(){
    location.reload();
  }


  LogOut(){
      this.accountService.logOut();
      this.router.navigate(['/Login']);      // this.reload()
  }

}
