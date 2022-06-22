import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { lstCutomer } from '../../Model/Customer'
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
  isDisableMinus : boolean = false;
  
  @Input() pageInput: lstCutomer;//Đầu vào

  @Output() pageEvent : EventEmitter<PageData>
  @Output() pageSizeEvent : EventEmitter<PageData>

  ArrayPage : number[] = [];

  ArrayPageNumber : Number[] = [10,20,50];


  constructor() {
    this.pageEvent = new EventEmitter<PageData>();
    this.pageSizeEvent = new EventEmitter<PageData>();
    this.pageInput = {} as lstCutomer;
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

    if(type === 'nextplus')
    {
      if(this.pagedata.page === 4)
      {
        this.ArrayPage = Array(this.pageInput.totalPage - 5).fill(0).map((x,i)=>i);
      }
      this.pagedata.page = this.pagedata.page + 1;
    }

    if(type === 'nextall')
    {
      this.pagedata.page = this.pageInput.totalPage
    }

    if(type === 'minus')
    {
      this.pagedata.page = this.pagedata.page - 1;
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
