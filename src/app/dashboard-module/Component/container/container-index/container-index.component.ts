import { Component, OnInit } from '@angular/core';
import { lstContainer } from 'src/app/Model/Container';
import { Pagination } from 'src/app/Model/Table';
import { ContainerService } from 'src/app/Service/container/container.service';

@Component({
  selector: 'app-container-index',
  templateUrl: './container-index.component.html',
  styleUrls: ['./container-index.component.css']
})
export class ContainerIndexComponent implements OnInit {
  loading: boolean = false;
  lstdata: lstContainer = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
    data: []
  };

  Pagination: Pagination = {
    currentPage: 0,
    pageSize: 0,
    totalRecord: 0,
    totalPage: 0,
  }
  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10,
  }
  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
    this.loadData(this.PageInfo)
  }

  loadData(PageInfo: any) {
    this.loading = true;
        this.containerService.Paging(this.PageInfo.page, this.PageInfo.Keyword, this.PageInfo.pageSize).subscribe(data => {
          console.log(data,'data')
            this.loading = false;
            this.lstdata = data;
            this.Pagination.currentPage = data.currentPage,
                this.Pagination.pageSize = data.pageSize,
                this.Pagination.totalPage = data.totalPage,
                this.Pagination.totalRecord = data.totalRecord
        })
  }

  openEdit(id: string) {

  }

  openDelete(id: string) {

  }

  onChangePage(event: any) {

  }

  onSearch(e: any) {
  }

  onSearchDate(e: any) {}
}
