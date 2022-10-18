import { Component, Input, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/Service/container/container.service';

@Component({
  selector: 'app-cont-info',
  templateUrl: './cont-info.component.html',
  styleUrls: ['./cont-info.component.css']
})
export class ContInfoComponent implements OnInit {
  @Input() ContNum: any;
  contDet: any = [];
  
  constructor(
    private ContainerService: ContainerService
    ) {
      
     }

  ngOnInit(): void {
    this.contDetail();
  }

  contDetail() {
    this.ContainerService.getContActivity(this.ContNum).subscribe(response => {
      console.log('response',response);
      this.contDet = response;
      
    })
  }

  
  changeActivity(type: number) {
    {
      let activity = '';
      switch (type) {
        case 0:
          activity = "Kế hoạch";
          break;
        case 1:
          activity = "Hạ bãi chờ xuẩt";
          break;
        case 2:
          activity = "Cấp rỗng";
          break;
        case 3:
          activity = "Trả rỗng";
          break;
        case 4:
          activity = "Shipside";
          break;
        case 5:
          activity = "Lấy nguyên";
          break;
        case 6:
          activity = "Rút ruột";
          break;
        case 7:
          activity = "Trả bãi";
          break;
        case 8:
          activity = "Kẹp chì";
          break;
        case 9:
          activity = "Đóng hàng";
          break;

      }
      return activity;
    }
  }

  changeSide(type: number) {
    {
      let Side = '';
      switch (type) {
        case 1:
          Side = "Import";
          break;
        case 2:
          Side = "Export";
          break;
        case 3:
          Side = "StorageEmpty";
          break;


      }
      return Side;
    }
  }

  changeState(type: number) {
    {
      let State = '';
      switch (type) {
        case 1:
          State = "Delivery";
          break;
        case 2:
          State = "Stacking";
          break;
        case 3:
          State = "OutPort";
          break;


      }
      return State;
    }
  }

  changeStatus(type: number) {
    {
      let Status = '';
      switch (type) {
        case 0:
          Status = "E";
          break;
        case 1:
          Status = "F";
          break;
      }
      return Status;
    }
  }

  // changeStep(_step: any, activity: any) {
  //   {
  //     let Step = '';

  //     if (_step == '2' || _step == '4') {
  //       switch (activity) {
  //         case 0:
  //           Step = "";
  //           break;
  //         case 1:
  //           Step = "Hạ bãi chờ xuẩt";
  //           break;
  //         case 2:
  //           Step = "Cấp rỗng";
  //           break;
  //         case 3:
  //           Step = "Trả rỗng";
  //           break;
  //         case 4:
  //           Step = "Shipside";
  //           break;
  //         case 5:
  //           Step = "Lấy nguyên";
  //           break;
  //         case 6:
  //           Step = "Rút ruột";
  //           break;
  //         case 7:
  //           Step = "Trả bãi";
  //           break;
  //         case 8:
  //           Step = "Kẹp chì";
  //           break;
  //         case 9:
  //           Step = "Đóng hàng";
  //           break;
  //       }
  //       return Step;
  //     }
  //     if (_step == '0' || _step == '1' || _step == '3' || _step == '5' || _step == '6') {
  //       switch (_step) {
  //         case 0:
  //           Step = "Kế hoạch";
  //           break;
  //         case 1:
  //           Step = "Nhập cont vào bãi";
  //           break;
  //         case 3:
  //           Step = "Lưu vỏ";
  //           break;
  //         case 5:
  //           Step = "Hạ bãi chờ xuất";
  //           break;
  //         case 6:
  //           Step = "Đã xuất";
  //           break;
  //       }
  //       return Step;
  //     }
  //   }
  // }
}
