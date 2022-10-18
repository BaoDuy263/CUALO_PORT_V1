import { Component, Input, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/Service/container/container.service';

@Component({
  selector: 'app-cont-history',
  templateUrl: './cont-history.component.html',
  styleUrls: ['./cont-history.component.css']
})
export class ContHistoryComponent implements OnInit {

  @Input() ContNum: any;
  loading: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 30;
  listHistory: any = [];
  constructor(
    private ContainerService: ContainerService
  ) {
    console.log('fffffffffffff');
    
   }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory(){
      this.loading = true;
      let body = {
        "Page": this.pageNumber,
        "pageSize": this.pageSize,
        "Keyword": this.ContNum
      }
      this.ContainerService.getHistory(body).subscribe(response => {
        console.log('response',response);
        this.listHistory = response.data;
        
      })
    }

}
