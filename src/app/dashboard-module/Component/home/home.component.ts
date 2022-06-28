
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
export class HomeComponent implements OnInit   { 
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  opened : boolean;
  show : boolean
  constructor(private router: Router,private cdr: ChangeDetectorRef,private accountService : AccountService, private observer: BreakpointObserver) {
    this.opened = true;
    this.show = false;

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
      if(!localStorage.getItem('UserInfo')){
        this.router.navigate(['/Login']);
      }
  }

  reload(){
    location.reload();
  }

  loadInformation() {
    this.router.navigate(['/Home/taikhoan']);
  }

  LogOut(){
      this.accountService.logOut();
      this.reload()
  }

}
