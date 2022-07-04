import { Injectable } from '@angular/core';
import  { CommonserviceService } from  '../CommonService/commonservice.service';
import { lstProduct,ProductCreate,Product,ProductEdit } from '../../Model/Product'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService: CommonserviceService) { }


  Paging(page:number, searchText:string,numberDis:number) {
    return this.httpService.getRequest('Product' +'?page='+ page + '&Keyword='+ searchText + '&pageSize='+ numberDis)
      .pipe(map((data : lstProduct) => {
          return data;
      }))
  }

  Insert(ProductCreate: ProductCreate) {
    console.log(ProductCreate)
    return this.httpService.postRequest('Product/Create',ProductCreate)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  GetDetail(id: number) {
    return this.httpService.getRequest('Product/GetDetail?id='+id)
      .pipe(map((data:Product ) => {
          return data;
      }))
  }

  Update(ProductEdit : ProductEdit)
  {
    return this.httpService.putRequest('Product/Update',ProductEdit)
      .pipe(map((data: any) => {
        return data;
      }))
  }

  Delete(id: number) {
    return this.httpService.deleteRequest('Product/Delete?id='+id)
      .pipe(map((data:any ) => {
          return data;
      }))
  }

}
