import { Component, OnInit } from '@angular/core';
import { ContainerService } from 'src/app/Service/container/container.service';
import { MatTabsModule } from '@angular/material/tabs';

// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-container-maps-info',
  templateUrl: './container-maps-info.component.html',
  styleUrls: ['./container-maps-info.component.css'],
})

export class ContainerMapsInfoComponent implements OnInit {

  ContNum: string = '';
  UrlRoot: string = 'https://cclo.phanmem.one';
  contInfo: any = '';
  listHistory: any = [];
  listImages: any = [];
  contDet: any = [];
  listInfo: any = {};
  message !: string;


  constructor(private mContainerService: ContainerService) {
    // lấy thông tin container
  }

  ///message:string;
  ngOnInit(): void {

      this.mContainerService.MapYar3getInfo(this.ContNum).subscribe((data) => {
       // console.log(data.item1);
        this.contDet = data.item1[0];
      });
      this.mContainerService.ContHistoryGetList(this.ContNum).subscribe((data) => {
      //  console.log(data.itXem1);
        this.listHistory = data.item1;
      });
      this.mContainerService.ContImagesGetList(this.ContNum).subscribe((data) => {
        console.log(data.item1);
        this.listImages = data.item1;
      });
  }


  // constructor(public activatedRoute: ActivatedRoute, private SearchService: SearchService) {
  //   this.activatedRoute.queryParams.subscribe((res) => {
  //     this.contInfo = res;
  //     // console.log('contInfo', this.contInfo)
  //   });

  // }

  // ngOnInit() {
  //   this.SearchService.getContDet(this.contInfo.conNo).subscribe(response => {
  //     this.contDet = response.data;
  //   })

  // this.ContDetailsService.getContHistory(body).subscribe(response => {
  //   this.listHistory = response.data['items']
  // }),
  // hình ảnh
  // listInfo: any = {};
  // contInfo: any = [];
  // cont: any = {};
  // url: string = '';

  // constructor(public router: Router, public modalController: ModalController, public activatedRoute: ActivatedRoute, private MapContYarn3Service: MapcontYard3Service, private ToastService: ToastService) {
  //   this.url = environment.CCLOApi;

  //   this.activatedRoute.queryParams.subscribe((res) => {
  //     this.cont = res.conNo;
  //   });
  // }

  // ngOnInit() {
  //   this.getInfo();
  // }

  // async openImage(listImg, idx) {
  //   console.log('lisrt',listImg )
  //   const modal = await this.modalController.create({
  //     component: ModalImagePage,
  //     componentProps: {
  //       "url": this.url,
  //       "listImg": listImg,
  //       "idx": idx,
  //     }
  //   });
  //   return await modal.present();
  // }

  // getInfo() {
  //   this.listInfo.pageNumber = 1;
  //   this.listInfo.pageSize = 1000;
  //   this.listInfo.contNo = this.cont;
  //   this.MapContYarn3Service.getImageCont(this.listInfo).subscribe(response => {

  //     const groups = response.data['items'].reduce((groups, item) => {

  //       var convString = JSON.stringify(item.createdOn);
  //       const date = convString.slice(1, 11);
  //       if (!groups[date]) {
  //         groups[date] = [];
  //       }
  //       groups[date].push(item);
  //       return groups;
  //     }, {});

  //     // Edit: to add it in the array format instead
  //     const groupArrays = Object.keys(groups).map((date) => {
  //       return {
  //         date,
  //         items: groups[date]
  //       };
  //     });
  //     this.contInfo = groupArrays;
  //   })
  // }
}
