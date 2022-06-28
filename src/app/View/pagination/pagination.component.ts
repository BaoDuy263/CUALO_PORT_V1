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
export class PaginationComponent implements OnInit {
  

  pagedata : PageData = {
    page : 1,
    pageSize : 10,
  };

  isDisablePlus : boolean = false;
  isDisableMinus : boolean = true;
  
  @Input() pageInput: Pagination;//Đầu vào

  @Output() pageEvent : EventEmitter<PageData>
  @Output() pageSizeEvent : EventEmitter<PageData>

  ArrayPage : number[] = [];

  ArrayPageNumber : Number[] = [10,20,50];


  constructor() {
    this.pageEvent = new EventEmitter<PageData>();
    this.pageSizeEvent = new EventEmitter<PageData>();
    this.pageInput = {} as Pagination;
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) :void {
    if (changes['pageInput']) {
        if(this.pageInput.totalPage > 5){
          this.ArrayPage = Array(5).fill(0).map((x,i)=>i);
        }
        else
        {
          this.ArrayPage = Array(this.pageInput.totalPage).fill(0).map((x,i)=>i);
        }
       
    }
  }



  ChangPage(page: number,type: string) {
    if(type === 'default')
    {
      this.pagedata.page = page;
    }

    if(type === 'nextplus' && this.pagedata.page < this.pageInput.totalPage)
    {
      this.pagedata.page = this.pagedata.page + 1;
      this.isDisableMinus = false;
      if((this.pagedata.page == this.pageInput.totalPage - 1)){
        this.isDisablePlus = true
      } 
      if(this.pagedata.page == (this.ArrayPage[this.ArrayPage.length - 1] + 1) && this.pageInput.totalPage > 5)
      {
        let PageNumber = this.pagedata.page + 6 > this.pageInput.totalPage ? this.pageInput.totalPage : this.pagedata.page + 6
        this.ArrayPage = Array(PageNumber - 1).fill(this.pagedata.page).map((x,i)=>i).slice(this.pagedata.page - 1,PageNumber - 1);
      }
    }

    if(type === 'nextall')
    {
      this.pagedata.page = this.pageInput.totalPage
    }

    if(type === 'minus')
    {
      this.pagedata.page = this.pagedata.page - 1;
      this.isDisablePlus = false;
      if(this.pagedata.page == 1)
      {
        this.isDisableMinus = true
      }
      if(this.pagedata.page == (this.ArrayPage[0]) && this.ArrayPage[0] + 1 >= 5)
      {
        let PageNumber = this.ArrayPage[0] + 1;
        this.ArrayPage = Array(PageNumber).fill(this.pagedata.page).map((x,i)=>i).slice(this.ArrayPage[0] - 4,PageNumber);
      }
    }

    if(type === 'minusall')
    {
      this.pagedata.page = 1;
    }
    this.pageEvent.emit(this.pagedata)
  }

  ChangePageNumber(event:any) {
    this.pagedata.pageSize = event.target.value.substr(0,2)
    this.pageEvent.emit(this.pagedata)
  }

}
