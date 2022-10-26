import { Component, Input, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/Service/container/container.service';

@Component({
  selector: 'app-cont-imgs',
  templateUrl: './cont-imgs.component.html',
  styleUrls: ['./cont-imgs.component.css']
})
export class ContImgsComponent implements OnInit {

  @Input() ContNum: any;
  loading: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 30;
  listImgs: any = [];
  constructor(
    private ContainerService: ContainerService
  ) {
    
   }

  ngOnInit(): void {
    this.getImgs();
  }

  getImgs(){
      this.loading = true;
      let body = {
        "Page": this.pageNumber,
        "pageSize": this.pageSize,
        "Keyword": this.ContNum
      }
      this.ContainerService.getImages(body).subscribe(response => {
        // this.listImgs = response.data;
        // console.log('response', this.listImgs);

        const groups = response.data.reduce((groups: any, item: any) => {
  
          var convString = JSON.stringify(item.createdOn);
          const date = convString.slice(1, 11);
          if (!groups[date]) {
            groups[date] = [];
          }
          groups[date].push(item);
          return groups;
        }, {});
  
        const groupArrays = Object.keys(groups).map((date) => {
          return {
            date,
            items: groups[date]
          };
        });
        this.listImgs = groupArrays;
        
      })
    }
}
