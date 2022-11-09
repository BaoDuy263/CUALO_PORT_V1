import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { BayPlanPaging } from 'src/app/Model/BayPlanDetail';
import { ContainerService } from 'src/app/Service/container/container.service';
import { ImportContFromShipService } from 'src/app/Service/importContFromShip/import-cont-from-ship.service';
import { MapcontYard3Service } from 'src/app/Service/map-cont-yard3.service';
import { MapcontYard3Service_ } from 'src/app/Service/MapcontYard3Service/mapcont-yard3-service.service';
import { ContainerMapsInfoComponent } from '../../container-detail/container-maps-info/container-maps-info.component';
import { ContainerMoveComponent } from '../container-move/container-move.component';

@Component({
  selector: 'app-container-maps-index',
  templateUrl: './container-maps-index.component.html',
  styleUrls: ['./container-maps-index.component.css'],
})
export class ContainerMapsIndexComponent implements OnInit {
  contInfo: any = {};
  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';
  value: string = '';
  countClickMove: number = 0;
  checkDel: boolean = false;
  listContYarn3: any = [];
  isModalOpen = false;
  checkCreate: string = '';
  listA: any = [];
  arrA: any = [];
  listE: any = [];
  listPlan: any = [];
  hiddenForm: string = 'false';
  checkEmpty: boolean = true;
  IsChangeLocal: boolean = false;
  textSearch: string = '';
  checkFirst: string = '';
  infoMoveCont: any = {
    currentPagecontNo: "",
    oldLocation: "",
    newLocaiton: "",
    mapType: "",
  }
  zoomProperties = {
    'double-tap': true, // double tap to zoom in and out.
    overflow: 'visible', // Am not sure. But Documentation says, it will not render elements outside the container.
    wheel: false, // Disables mouse - To enable scrolling. Else mouse scrolling will be used to zoom in and out on web.
    disableZoomControl: 'never', // stops showing zoom + and zoom - images.
    backgroundColor: 'rgba(0,0,0,0)', // Makes the pinch zoom container color to transparent. So that ionic themes can be applied without issues.
  };
  listB2: any = [];
  listB1: any = [];
  listA2: any = [];
  listA1: any = [];
  listC2: any = [];
  listC1: any = [];
  listD2: any = [];
  listD1: any = [];
  listE2: any = [];
  listE1: any = [];
  typeContInfo: any = '';
  dataReturned: any;
  listInfo: any = {};
  getData: any = [];
  NumCont: string = '';
  IdSouce: string = '';
  IdTaget: string = '';

  PageInfo: BayPlanPaging = {
    Page: 1,
    PageSize: 100,
    Voyace: '',
    ContNo: '',
    BillNo: '',
    FromDate: undefined,
    ToDate: undefined,
    isThuchien: false
  }

  constructor(
    private MapContYarn3Service_: MapcontYard3Service_,
    private MapContYarn3Service: MapcontYard3Service,
    private mContainerService: ContainerService,
    private ImportContFromShipService: ImportContFromShipService,
    private toastr: ToastrcustomService,

    public dialog: MatDialog
  ) {
    this.getListPlan();
  }

  ngOnInit(): void {
    this.listCont();

  }

  listCont() {
    this.listInfo.pageNumber = 1;
    this.listInfo.pageSize = 1000;
    this.listInfo.contNo = '';

    this.mContainerService.MapYar3List().subscribe((data) => {
      this.getData = data.item1;

      var listposition = data.item1;
      for (let i = 0; i < listposition.length; i++) {
        console.log(listposition[i]['positionLabel'], listposition[i]['code'], listposition[i]['idPlan']);

        if (this.listPlan.length > 0) {
          for (let j = 0; j < this.listPlan.length; j++) {
            if (listposition[i]['positionLabel'] == this.listPlan[j]['location'] && listposition[i]['code'] == null) {
              console.log('aaaaaaaaaaaaaaaaaaaa', listposition[i]);
              
              //   listposition[i]['code'] = this.listPlan[j]['contNo'];
              //   listposition[i]['idPlan'] = 1;
              // }
              if (listposition[i]['indexNumber'] % 2 == 0) {
                var lastPosition = this.filterAroundCont40(listposition[i]['positionLabel'], 'load');
                console.log('lastPositionlastPositionlastPosition', lastPosition);
                
                if (lastPosition == true) {
                  listposition[i]['code'] = this.listPlan[j]['contNo'];
                  listposition[i]['idPlan'] = 1;
                  listposition[i]['type'] = '40HC';
                }
              } else {
                listposition[i]['code'] = this.listPlan[j]['contNo'];
                listposition[i]['idPlan'] = 1;
                listposition[i]['type'] = '20DC';
              }
            }
          }
        }

      }
      this.listContYarn3 = listposition;
      console.log('this.listContYarn3 ', this.listContYarn3 );
      
      this.displayListCont(this.listContYarn3);
    });
  }
  displayListCont(listCont: string | any[]) {
    var arrA = [];
    var arrB = [];
    var arrC = [];
    var arrD = [];
    var arrE = [];

    //console.log(listCont);

    for (let i = 0; i < listCont.length; i++) {
      var lable = listCont[i]['positionLabel'].charAt(0);

      if (lable == 'B' && listCont[i]['indexNumber'] % 2 == 1) {
        arrB.push(listCont[i]);
      } else if (lable == 'B' && listCont[i]['indexNumber'] % 2 == 0 && listCont[i]['code'] != null) {
        arrB.push(listCont[i]);
        var getPositionB = this.filterCont(listCont[i]['positionLabel']);
        arrB.push(getPositionB);
      }

      if (lable == 'A' && listCont[i]['indexNumber'] % 2 == 1) {
        arrA.push(listCont[i]);
      } else if (lable == 'A' && listCont[i]['indexNumber'] % 2 == 0 && listCont[i]['code'] != null) {
        arrA.push(listCont[i]);
        var getPositionA = this.filterCont(listCont[i]['positionLabel']);
        arrA.push(getPositionA);
      }

      if (lable == 'C' && listCont[i]['indexNumber'] % 2 == 1) {
        arrC.push(listCont[i]);
      } else if (lable == 'C' && listCont[i]['indexNumber'] % 2 == 0 && listCont[i]['code'] != null) {
        arrC.push(listCont[i]);
        var getPositionC = this.filterCont(listCont[i]['positionLabel']);
        arrC.push(getPositionC);
      }

      if (lable == 'E' && listCont[i]['indexNumber'] % 2 == 1) {
        arrE.push(listCont[i]);
      } else if (lable == 'E' && listCont[i]['indexNumber'] % 2 == 0 && listCont[i]['code'] != null) {
        arrE.push(listCont[i]);
        var getPositionE = this.filterCont(listCont[i]['positionLabel']);
        arrE.push(getPositionE);
      }

      if (lable == 'D' && listCont[i]['indexNumber'] % 2 == 1) {
        arrD.push(listCont[i]);
      } else if (lable == 'D' && listCont[i]['indexNumber'] % 2 == 0 && listCont[i]['code'] != null) {
        arrD.push(listCont[i]);
        var getPositionD = this.filterCont(listCont[i]['positionLabel']);
        arrD.push(getPositionD);
      }


    }
    //console.log('------------------------');
    console.log('listD1', arrD);

    var listA1 = this.sortList(arrA, 1);
    var listA2 = this.sortList(arrA, 2);
    var listB1 = this.sortList(arrB, 1);
    var listB2 = this.sortList(arrB, 2);
    var listC1 = this.sortList(arrC, 1);
    var listC2 = this.sortList(arrC, 2);
    var listD1 = this.sortList(arrD, 1);
    var listD2 = this.sortList(arrD, 2);
    var listE1 = this.sortList(arrE, 1);
    var listE2 = this.sortList(arrE, 2);

    this.listA2 = this.removeContInYard(listA2);
    this.listA1 = this.removeContInYard(listA1);
    this.listB2 = this.removeContInYard(listB2);
    this.listB1 = this.removeContInYard(listB1);
    this.listC2 = this.removeContInYard(listC2);
    this.listC1 = this.removeContInYard(listC1);
    this.listD2 = this.removeContInYard(listD2);
    this.listD1 = this.removeContInYard(listD1);
    this.listE2 = this.removeContInYard(listE2);
    this.listE1 = this.removeContInYard(listE1);
    
  }



  getListPlan() {
    this.listPlan = [];


    this.ImportContFromShipService.Paging(this.PageInfo).subscribe(response => {
      for (let i = 0; i < response.data.data.length; i++) {

        var test = response.data.data[i]['location'].replace('-YARD3', '');
        response.data.data[i]['location'] = test;
        this.listPlan.push(response.data.data[i])

      }
      console.log('this.listPlan', this.listPlan);

    })
  }
  filterCont(position: string) {
    var lable = position.slice(0, 4);
    var lableEnd = position.slice(5, 7);
    var newPosition = ''
    if (lableEnd == '02') {
      newPosition = lable + '-01';
    } else {
      newPosition = lable + '-02';
    }


    var objLastPosition = this.listContYarn3.filter(function (el: any) {
      return el.positionLabel === newPosition;
    });
    return objLastPosition[0];
  }

  removeContInYard(listAll: any) {

    var listCont = [];
    for (let i = 0; i < listAll.length; i++) {

      if (listAll[i]['type'] != null) {
        listAll[i]['convertType'] = listAll[i]['type'].slice(0, 1);
      }
      if (listAll[i].indexNumber % 2 == 0) {
        // if(listAll[i].idPlan){
        //   if(listAll[i-1]['contNo'] != '' || listAll[i+1]['contNo'] != ''){
        //     listCont.push(listAll[i]);

        //   }
        // }else{
        if (i >= 1) {
          listCont.push(listAll[i - 1]);
        }
        listCont.push(listAll[i + 1]);
      }


      // }
    }

    for (var i = 0; i < listAll.length; i++)
      for (let j = 0; j < listCont.length; j++) {
        if (listCont[j].positionLabel == listAll[i].positionLabel) {
          listAll.splice(i, 1);
          // break;
        }
      }
    return listAll;
  }


  btnMoveCont() {
    this.IsChangeLocal = true;
    for (let myChild of this.listContYarn3) {
      myChild.BackgroundColour = "#f4f4f4";
    }
  }

  sortList(item: any, number: number) {
    console.log('item', item);
    console.log('number', number);

    const ids = item.map((o: any) => o.positionLabel)
    const filtered = item.filter(({ positionLabel }: any, index: any) => !ids.includes(positionLabel, index + 1))
    console.log('filtered', filtered);

    var arrList = [];
    // lấy danh sách theo vị trí 1 hoặc 2
    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i]['position'] == number) {
        arrList.push(filtered[i])

      }
    }
    console.log('arrList111111', arrList);

    // sắp xếp vị trí theo position
    arrList.sort((a, b) => {
      return a.indexNumber - b.indexNumber;
    });
    console.log('arrListarrListarrList', arrList);
    var arr: any = [];
    arrList.forEach((e) => {
      arr.push(e)
    });
    console.log('arr', arr);

    return arr;
  }

  btnCancelMove() {
    this.IsChangeLocal = false;
    this.countClickMove = 0;

    for (let myChild of this.listContYarn3) {
      myChild.BackgroundColour = "white";
    }
  }
  // SaveChange() {
  //   // this.IsChangeLocal = false;
  //   // alert(this.NumCont +' : ' +this.IdSouce + '######' + this.IdTaget);
  //   // //console.log('-----------------');
  //   var _DataInput: any = {};
  //   _DataInput.ContNo = this.NumCont;
  //   _DataInput.oldLocation = this.IdSouce;
  //   _DataInput.newLocaiton = this.IdTaget;
  //   var _mDataInput = JSON.stringify(_DataInput);
  //   console.log(_mDataInput);
  //   this.MapContYarn3Service_.MoveLocalCont(_DataInput).subscribe((data) => {
  //     // this.listContYarn3 = data;
  //     console.log(data.statusCode);
  //     if (data.statusCode == '200')
  //       this.mContainerService.MapYar3List().subscribe((data) => {
  //         this.listContYarn3 = data.item1;
  //         this.displayListCont(this.listContYarn3);
  //         console.log(this.listContYarn3);
  //         this.Resethange();
  //         this.IsChangeLocal = false;
  //       });
  //   });
  //   // this.listContAfterSearch(event.target.value);
  // }

  // Resethange() {
  //   this.IsChangeLocal = true;
  //   this.IdTaget = '';
  //   this.IdSouce = '';
  //   for (let contInfo_ of this.listContYarn3) {
  //     contInfo_.BackgroundColour = '#fff';
  //   }
  // }

  filterAroundCont40(position: string, func: string) {

    // Kiểm tra các khu vực xung quanh bán kính 2 ô. Nếu tồn tại cont thì cont40 không thể đặt, 
    var lable = position.slice(0, 1);
    var index = parseInt(position.slice(2, 4))
    var lableEnd = position.slice(5, 7)
    var nextIndex = this.formatNumber(index + 1)
    var lastIndex = this.formatNumber(index - 1)
    var next2Index = this.formatNumber(index + 2)
    var last2Index = this.formatNumber(index - 2)
    var lastOppositePosition = ''
    var nextOppositePosition = ''
    var last2OppositePosition = ''
    var next2OppositePosition = ''
    var next2Opposite = [{ 'code': null }];
    var last2Opposite = [{ 'code': null }];
    var next2 = [{ 'code': null }];
    var last2 = [{ 'code': null }];
    var contPositionInfo = ''

    if (func == 'move') {
      var newContPosition = this.contInfo.positionLabel
      var lableCont = newContPosition.slice(0, 1);
      var indexCont = parseInt(newContPosition.slice(2, 4))
      var positionCont = newContPosition.slice(5, 7)
      var lastpositionIndex = this.formatNumber(indexCont - 2)

      if (positionCont == '01') {
        contPositionInfo = lableCont + '-' + lastpositionIndex + '-02';
      } else {
        contPositionInfo = lableCont + '-' + lastpositionIndex + '-01';
      }
    }


    var lastPosition = lable + '-' + lastIndex + '-' + lableEnd;
    var nextPosition = lable + '-' + nextIndex + '-' + lableEnd;
    var last2Position = lable + '-' + last2Index + '-' + lableEnd;
    var next2Position = lable + '-' + next2Index + '-' + lableEnd;
    if (lableEnd == '01') {
      lastOppositePosition = lable + '-' + lastIndex + '-02';
      nextOppositePosition = lable + '-' + nextIndex + '-02';
      if (last2Index >= 0) {
        last2OppositePosition = lable + '-' + last2Index + '-02';
        next2OppositePosition = lable + '-' + next2Index + '-02';
      }

    } else {
      lastOppositePosition = lable + '-' + lastIndex + '-01';
      nextOppositePosition = lable + '-' + nextIndex + '-01';
      if (last2Index >= 0) {
        last2OppositePosition = lable + '-' + last2Index + '-01';
        next2OppositePosition = lable + '-' + next2Index + '-01';
      }

    }
    var next = this.filterInMap(nextPosition);
    var last = this.filterInMap(lastPosition);

    var nextOpposite = this.filterInMap(nextOppositePosition);
    var lastOpposite = this.filterInMap(lastOppositePosition);

    //  && position != contPositionInfo
    console.log('this.contInfo.positionLabel', this.infoMoveCont.oldLocation);
    console.log('lastOppositePosition', lastOppositePosition);
    console.log('position', position);
    console.log('contPositionInfo', contPositionInfo);
    
    // nếu vị trí chọn không ở vị trí đầu tiên, là hàm di chuyển và vị trí di chuyển không ở bên trái trên và dưới thì chạy hàn dưới
    if (last2Index > 0 && this.infoMoveCont.oldLocation != next2Position &&  this.infoMoveCont.oldLocation != next2OppositePosition && position != contPositionInfo) {
      last2 = this.filterInMap(last2Position);
      last2Opposite = this.filterInMap(last2OppositePosition);
    }

    if (next2Index <= 44 && this.infoMoveCont.oldLocation != next2Position &&  this.infoMoveCont.oldLocation != next2OppositePosition && position != contPositionInfo) {
      next2 = this.filterInMap(next2Position);
      next2Opposite = this.filterInMap(next2OppositePosition);

    }

    // if(last2Index > 0 && func == 'move' && this.contInfo.positionLabel == next2Position){

    // }else if(last2Index > 0 && position == contPositionInfo){

    // }else{
    //   next2 = this.filterInMap(next2Position);
    //   last2 = this.filterInMap(last2Position);
    //   next2Opposite = this.filterInMap(next2OppositePosition);
    //   last2Opposite = this.filterInMap(last2OppositePosition);
    // }
    // console.log('nextPosition', nextPosition);
    // console.log('lastPosition', lastPosition);
    // console.log('nextOppositePosition', nextOppositePosition);
    // console.log('lastOppositePosition', lastOppositePosition);
    // console.log('next2Position', next2Position);
    // console.log('last2Position', last2Position);
    
    console.log('/////////////////////////////////////////////////////');
    console.log('next[0][]', next[0]['code']);
    console.log('next[0][]', nextOpposite[0]['code']);
    console.log('next[0][]', last[0]['code']);
    console.log('next[0][]', lastOpposite[0]['code']);
    
    console.log('next[0][]', next2Opposite[0]['code']);
    console.log('next[0][]', last2Opposite[0]['code']);
    console.log('next[0][]', last2[0]['code']);
    console.log('next[0][]', next2[0]['code']);
    
    if (next[0]['code'] != null || last[0]['code'] != null || nextOpposite[0]['code'] != null || lastOpposite[0]['code'] != null || last2Opposite[0]['code'] != null || next2Opposite[0]['code'] != null || last2[0]['code'] != null || next2[0]['code'] != null) {
      return false;
    } else {
      return true;
    }
  }

  filterInMap(position: string) {
    var list = this.getData.filter(function (el: any) {
      return el.positionLabel === position;
    });
    return list;
  }

  formatNumber(number: any) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;

    }
  }


  onKey(event: any) {
    for (let contInfo_ of this.listContYarn3) {
      contInfo_.BackgroundColour = '#fff';
    }
    this.textSearch = event.target.value;
    if (this.textSearch != "") {
      for (let contInfo_ of this.listContYarn3) {
        if (contInfo_.code != null) {
          if (
            contInfo_.code
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) == true
          ) {
            contInfo_.BackgroundColour = '#00afdd';
          }
        }
      }
    }

  }

  setOpen(item: any) {
    // console.log(item);
    this.contInfo = item;
    console.log('ssssssssssssssssssss', this.contInfo);
    if (!this.IsChangeLocal) {
      if (item.code != null) {
        this.mContainerService.GetConNo(item.code);

        const dialogRef = this.dialog.open(ContainerMapsInfoComponent);
        dialogRef.componentInstance.ContNum = item.code;
        dialogRef.afterClosed().subscribe((result) => {

        });
      }
    } else {
      this.countClickMove++;
      this.moveCont();



    }
  }

  moveCont() {
    if (this.countClickMove == 1) {
      if (this.contInfo.code != null) {
        this.infoMoveCont.contNo = this.contInfo.code;
        this.infoMoveCont.oldLocation = this.contInfo.positionLabel;
        this.infoMoveCont.mapType = 'YARD3';
        this.contInfo.BackgroundColour = 'red';
        this.typeContInfo = this.contInfo.convertType;
      } else {
        this.countClickMove = 0;
        this.typeContInfo = '';

      }
    } else {
      if (this.contInfo.code == null) {
        if (this.typeContInfo == 4) {
          var lable = this.contInfo.positionLabel.slice(0, 1);
          var position = this.contInfo.positionLabel.slice(5, 7);
          var index = parseInt(this.contInfo.positionLabel.slice(2, 4))
          
          var nextIndex = this.formatNumber(index + 1);
          var nextPosition = lable + '-' + nextIndex + '-' + position;
          console.log('nextPosition', nextPosition);
          var checkAroundPosition = this.filterAroundCont40(nextPosition, 'move');
          console.log('checkAroundPosition', checkAroundPosition);
          
          if (checkAroundPosition == false) {
            this.toastr.showError("Vị trí không hợp lệ !!!");
            return ;
          } 
          else {
            this.infoMoveCont.newLocaiton = nextPosition;
          }

        } else {
          this.infoMoveCont.newLocaiton = this.contInfo.positionLabel;
        }


        console.log('this.infoMoveCont', this.infoMoveCont);



        const dialogRef = this.dialog.open(ContainerMoveComponent);
        dialogRef.afterClosed().subscribe((result) => {
          if (result == "Success") {

            this.mContainerService.moveCont(this.infoMoveCont).subscribe(response => {
              if (response.message === 'Update Thành công') {
                this.toastr.showSuccess("Cập nhật vị trí thành công !!!");
                // this.saveHistory('Thay đổi vị trí cont, từ ' + this.infoMoveCont.oldLocation + ' tới: ' + this.infoMoveCont.newLocaiton);
                this.countClickMove = 0;
                this.infoMoveCont = {
                  currentPagecontNo: "",
                  oldLocation: "",
                  newLocaiton: "",
                  mapType: "",
                }
                this.IsChangeLocal = false;
                this.listCont();
              } else {
                this.toastr.showError("Cập nhật thất bại, xin thử lại !!!");
              }

            })
          }

        });

      } else {
        this.toastr.showError("Vị trí đã tồn tại cont !!!");
      }
    }

  }

  // saveHistory(message: string){

  // }
}
