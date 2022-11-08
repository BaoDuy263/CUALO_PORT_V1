import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { OAuthService } from 'angular-oauth2-oidc';
// import { BaseService } from 'src/app/Service/base.service';
// import { MapcontYard3Service } from 'src/app/Service/map-cont-yard3.service';
import { MapcontYard3Service_ } from 'src/app/Service/MapcontYard3Service/mapcont-yard3-service.service';

@Component({
  selector: 'app-container-maps-list',
  templateUrl: './container-maps-list.component.html',
  styleUrls: ['./container-maps-list.component.css'],
})
export class ContainerMapsListComponent implements OnInit {
  itemForm!: FormGroup;
  contInfo: any = {};
  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';
  value: string = '';
  checkDel: boolean = false;
  listContYarn3: any = [];
  isModalOpen = false;
  checkCreate: string = '';
  listA: any = [];
  arrA: any = [];
  listE: any = [];
  hiddenForm: string = 'false';
  checkEmpty: boolean = true;
  textSearch: string = '';
  checkFirst: string = '';
  zoomProperties = {
    'double-tap': true, // double tap to zoom in and out.
    overflow: 'visible', // Am not sure. But Documentation says, it will not render elements outside the container.
    wheel: false, // Disables mouse - To enable scrolling. Else mouse scrolling will be used to zoom in and out on web.
    disableZoomControl: 'never', // stops showing zoom + and zoom - images.
    backgroundColor: 'rgba(0,0,0,0)', // Makes the pinch zoom container color to transparent. So that ionic themes can be applied without issues.
  };
  listA8_1: any = [];
  listA10_1: any = [];
  listA12_1: any = [];
  listA21_1: any = [];

  listA8_2: any = [];
  listA10_2: any = [];
  listA12_2: any = [];
  listA14_2: any = [];
  listA21_2: any = [];

  listB3_1: any = [];
  listB8_1: any = [];
  listB10_1: any = [];
  listB12_1: any = [];
  listB14_1: any = [];
  listB21_1: any = [];

  listB3_2: any = [];
  listB8_2: any = [];
  listB10_2: any = [];
  listB12_2: any = [];
  listB14_2: any = [];
  listB21_2: any = [];

  listC3_1: any = [];
  listC8_1: any = [];
  listC10_1: any = [];
  listC12_1: any = [];
  listC14_1: any = [];
  listC21_1: any = [];

  listC3_2: any = [];
  listC8_2: any = [];
  listC10_2: any = [];
  listC12_2: any = [];
  listC14_2: any = [];
  listC21_2: any = [];

  listD3_1: any = [];
  listD8_1: any = [];
  listD10_1: any = [];
  listD12_1: any = [];
  listD14_1: any = [];
  listD21_1: any = [];

  listD3_2: any = [];
  listD8_2: any = [];
  listD10_2: any = [];
  listD12_2: any = [];
  listD14_2: any = [];
  listD21_2: any = [];

  listE8_1: any = [];
  listE10_1: any = [];
  listE12_1: any = [];
  listE14_1: any = [];
  listE21_1: any = [];

  listE8_2: any = [];
  listE10_2: any = [];
  listE12_2: any = [];
  listE14_2: any = [];
  listE21_2: any = [];
  dataReturned: any;
  listInfo: any = {};


  // get hasPermissionAdd(): boolean {
  //   return this.adminService.hasPermission(
  //     this.configService.url.map_cont_yarn3.addMapCont
  //   );
  // }
  // get hasPermissionEdit(): boolean {
  //   return this.adminService.hasPermission(
  //     this.configService.url.map_cont_yarn3.editMapCont
  //   );
  // }
  // get hasPermissionDelete(): boolean {
  //   return this.adminService.hasPermission(
  //     this.configService.url.map_cont_yarn3.deleteMapCont
  //   );
  // }

  constructor(
    private MapContYarn3Service_: MapcontYard3Service_
   // private MapContYarn3Service: MapcontYard3Service
    ) // private MapContYarn3Service: MapcontYard3Service,
  // public oauthService: OAuthService,
  // private baseService: BaseService

  {
    //this.listCont(false);
    // baseService.getHeadersWithAuth(true, this.oauthService);
  }

  ngOnInit(): void {}

  listCont(checkSelect: boolean) {
    this.listInfo.pageNumber = 1;
    this.listInfo.pageSize = 1000;
    this.listInfo.contNo = '';
    console.log(this.listInfo);
    this.MapContYarn3Service_.getMap(this.listInfo).subscribe((data) => {
      this.listContYarn3 = data;
      console.log(data);
      // this.loadding = false;

      // this.lstdata = data;
      // (this.Pagination.currentPage = data.currentPage),
      //   (this.Pagination.pageSize = data.pageSize),
      //   (this.Pagination.totalPage = data.totalPage),
      //   (this.Pagination.totalRecord = data.totalRecord);
    });

   // this.MapContYarn3Service.getMap1(this.listInfo);
    // this.MapContYarn3Service.getMap1(this.listInfo).subscribe(
    // (response: { data: { [x: string]: string | any[] } }) => {
    //   console.log(response);
    //   // this.listContYarn3 = response.data['items'];
    //   // if (checkSelect == true) {
    //   //   //this.listContAfterSearch(this.textSearch);
    //   // } else {
    //   //   this.displayListCont(response.data['items']);
    //   // }
    // }
    //);
  }
  displayListCont(listCont: string | any[]) {
    var arrA1 = [];
    var arrA2 = [];
    var arrB1 = [];
    var arrB2 = [];
    var arrC1 = [];
    var arrC2 = [];
    var arrD1 = [];
    var arrD2 = [];
    var arrE1 = [];
    var arrE2 = [];

    for (let i = 0; i < listCont.length; i++) {
      if (listCont[i]['positionLabel'] == 'A' && listCont[i]['position'] == 1) {
        arrA1.push(listCont[i]);
      }
      if (listCont[i]['positionLabel'] == 'A' && listCont[i]['position'] == 2) {
        arrA2.push(listCont[i]);
      }
      if (listCont[i]['positionLabel'] == 'B' && listCont[i]['position'] == 1) {
        arrB1.push(listCont[i]);
      }
      if (listCont[i]['positionLabel'] == 'B' && listCont[i]['position'] == 2) {
        arrB2.push(listCont[i]);
      }
      if (listCont[i]['positionLabel'] == 'C' && listCont[i]['position'] == 1) {
        arrC1.push(listCont[i]);
      }
      if (listCont[i]['positionLabel'] == 'C' && listCont[i]['position'] == 2) {
        arrC2.push(listCont[i]);
      }
      if (listCont[i]['positionLabel'] == 'D' && listCont[i]['position'] == 1) {
        arrD1.push(listCont[i]);
      }
      if (listCont[i]['positionLabel'] == 'D' && listCont[i]['position'] == 2) {
        arrD2.push(listCont[i]);
      }
      if (listCont[i]['positionLabel'] == 'E' && listCont[i]['position'] == 1) {
        arrE1.push(listCont[i]);
      }
      if (listCont[i]['positionLabel'] == 'E' && listCont[i]['position'] == 2) {
        arrE2.push(listCont[i]);
      }
    }
    var listA1 = this.sortList(arrA1, 21, 1, 'A');
    var listA2 = this.sortList(arrA2, 21, 2, 'A');
    var listB1 = this.sortList(arrB1, 21, 1, 'B');
    var listB2 = this.sortList(arrB2, 21, 2, 'B');
    var listC1 = this.sortList(arrC1, 21, 1, 'C');
    var listC2 = this.sortList(arrC2, 21, 2, 'C');
    var listD1 = this.sortList(arrD1, 21, 1, 'D');
    var listD2 = this.sortList(arrD2, 21, 2, 'D');
    var listE1 = this.sortList(arrE1, 21, 1, 'E');
    var listE2 = this.sortList(arrE2, 21, 2, 'E');
    this.listA8_1 = listA1.slice(0, 8);
    this.listA10_1 = listA1.slice(8, 10);
    this.listA12_1 = listA1.slice(10, 12);
    this.listA21_1 = listA1.slice(12, 21);

    this.listA8_2 = listA2.slice(0, 8);
    this.listA10_2 = listA2.slice(8, 10);
    this.listA12_2 = listA2.slice(10, 12);
    this.listA14_2 = listA2.slice(12, 14);
    this.listA21_2 = listA2.slice(14, 21);

    this.listB3_1 = listB1.slice(0, 3);
    this.listB8_1 = listB1.slice(5, 8);
    this.listB10_1 = listB1.slice(8, 10);
    this.listB12_1 = listB1.slice(10, 12);
    this.listB14_1 = listB1.slice(12, 14);
    this.listB21_1 = listB1.slice(16, 21);

    this.listB3_2 = listB2.slice(0, 3);
    this.listB8_2 = listB2.slice(5, 8);
    this.listB10_2 = listB2.slice(8, 10);
    this.listB12_2 = listB2.slice(10, 12);
    this.listB14_2 = listB2.slice(12, 14);
    this.listB21_2 = listB2.slice(16, 21);

    this.listC3_2 = listC2.slice(0, 3);
    this.listC8_2 = listC2.slice(5, 8);
    this.listC10_2 = listC2.slice(8, 10);
    this.listC12_2 = listC2.slice(10, 12);
    this.listC14_2 = listC2.slice(12, 14);
    this.listC21_2 = listC2.slice(16, 21);

    this.listC3_1 = listC1.slice(0, 3);
    this.listC8_1 = listC1.slice(5, 8);
    this.listC10_1 = listC1.slice(8, 10);
    this.listC12_1 = listC1.slice(10, 12);
    this.listC14_1 = listC1.slice(12, 14);
    this.listC21_1 = listC1.slice(16, 21);

    this.listD3_2 = listD2.slice(0, 3);
    this.listD8_2 = listD2.slice(5, 8);
    this.listD10_2 = listD2.slice(8, 10);
    this.listD12_2 = listD2.slice(10, 12);
    this.listD14_2 = listD2.slice(12, 14);
    this.listD21_2 = listD2.slice(16, 21);

    this.listD3_1 = listD1.slice(0, 3);
    this.listD8_1 = listD1.slice(5, 8);
    this.listD10_1 = listD1.slice(8, 10);
    this.listD12_1 = listD1.slice(10, 12);
    this.listD14_1 = listD1.slice(12, 14);
    this.listD21_1 = listD1.slice(16, 21);

    this.listE8_2 = listE2.slice(0, 8);
    this.listE10_2 = listE2.slice(8, 10);
    this.listE12_2 = listE2.slice(10, 12);
    this.listE14_2 = listE2.slice(12, 14);
    this.listE21_2 = listE2.slice(14, 21);

    this.listE8_1 = listE1.slice(0, 8);
    this.listE10_1 = listE1.slice(8, 10);
    this.listE12_1 = listE1.slice(10, 12);
    this.listE14_1 = listE1.slice(12, 14);
    this.listE21_1 = listE1.slice(14, 21);
  }

  sortList(arr: any[], count: number, position: number, positionLabel: string) {
    arr.sort(function (a, b) {
      return a.indexNumber - b.indexNumber;
    });

    var arr2 = [];
    for (let j = 0; j < count; j++) {
      // dữ liệu ban đầu để check
      var check = false;
      var indexarr = 0;
      // kiểm tra nếu tồn tại indexnumber trong man thì trả về check = true và lưu index lại
      for (var key = 0; key < arr.length; key++) {
        if (arr[key]['indexNumber'] == j + 1) {
          check = true;
          indexarr = key;
        }
      }
      // nếu check = true thì thêm mảng ngược lại thêm mảng rỗng
      if (check == true) {
        arr2.push(arr[indexarr]);
      } else {
        var test = {};
        // test['indexNumber'] = j + 1;
        // test['position'] = position;
        // test['positionLabel'] = positionLabel;

        arr2.push(test);
      }
    }

    return arr2;
  }
  onKey(event: any) {
    this.textSearch = event.target.value;
    // this.listContAfterSearch(event.target.value);
  }
  setOpen(item: { id: any }) {
    this.checkFirst = 'true';
    if (item.id) {
      this.checkEmpty = false;
    } else {
      this.checkEmpty = true;
    }
    this.contInfo = item;
    this.hiddenForm = 'true';
  }
}
