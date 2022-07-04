import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pagination } from '../../Model/Table'
interface PageData  {
  page: number,
  pageSize: number
}


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  

  pagedata : PageData = {
    page : 1,
    pageSize : 10,
  };

  isDisablePlus : boolean = false;
  isDisableMinus : boolean = true;
  
  @Output() changePage = new EventEmitter();
  @Input() Pagination!: any;

  size: number = 10;
  formItem: any = {};

  constructor() {
    
  }

  ChoosePage(currentPage:number){
    this.Pagination.currentPage = currentPage;
    this.sendDate();
  }
  
  selectSizePage(event: any){
    this.size = event.target.value
    this.sendDate();
  }
  sendDate(){
    this.formItem.pageSize = this.size
    this.formItem.page = this.Pagination.currentPage
    this.changePage.emit(this.formItem);
  }
}
