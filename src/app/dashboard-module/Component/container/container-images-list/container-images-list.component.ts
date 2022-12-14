import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContainerService } from 'src/app/Service/container/container.service';
import { ContainerImagesEditComponent } from '../container-images-edit/container-images-edit.component';

@Component({
  selector: 'app-container-images-list',
  templateUrl: './container-images-list.component.html',
  styleUrls: ['./container-images-list.component.css'],
})
export class ContainerImagesListComponent implements OnInit {
  constructor(
    private containerService: ContainerService,
    public dialog: MatDialog,
  ) {}
  UrlRoot: string = 'https://cclo.phanmem.one';
  listImages: any = [];
  CheckedImagesEmtry: boolean = true;
  AreaCode: string = "-1";
  selectedCont: any;
  selectedArea: any;
  lstCont: any = [];
  ImagesContSeach = {
    Page: 1,
    PageSize: 1000,
    ContNo: '',
    FromDate: '',
    ToDate: '',
    Status: -1,
  };

  ngOnInit(): void {
    // this.containerService.Paging(1, '', 1200).subscribe((data) => {
    //   this.lstCont = data.data;
    //   console.log(this.lstCont);
    // });
    // this.loadDataImages();
  }

  loadDataImages() {
    let code = '',
      dateFrom = '',
      dateTo = '',
      status = 1;
    console.log(this.selectedCont);
    if (this.selectedCont != undefined) code = this.selectedCont;
    this.containerService
      .ContImagesEmptryGetList(
        code,
        this.AreaCode,
        this.ImagesContSeach.FromDate,
        this.ImagesContSeach.ToDate,
        status
      )
      .subscribe((data) => {
        console.log(data.data);
        this.listImages = data.data;
      });
  }

  btnDowLoad_Click() {
    var strImages = '';
    this.listImages.forEach((item: any) => {
      strImages +=
        item.urlImage.replace('/Upload/ImagesContService/', '') + ';';
    });
    var strImagesInput = strImages.slice(0, -1);

    // ContImagesDowload dataInput : ContImagesDowload;
    // dataInput.trListImages = strImagesInput;
    strImagesInput = "caucang1_828540575.jpeg;caucang1_1511236866.jpeg;caucang1_1886125861.jpeg";
    this.containerService.ImagesDowload({ListImages: strImagesInput}).subscribe((data) => {
      //console.log(data);
      if(data.statusCode==200)
        window.open(data.urlPublic, "_blank");
    //  this.listImages = data.data;
     // this.loadDataImages();
    });
  }


  btnSeach_Click() {
    this.loadDataImages();
  }
  onSearchFromDate(e: any) {
    this.ImagesContSeach.FromDate = e;
   // this.loadDataImages();
  }

  onSearchToDate(e: any) {

    this.ImagesContSeach.ToDate = e;
   // this.loadDataImages();
  }

  ddlContChange(e: any) {
    this.loadDataImages();
  }

  ddlAreaChange(e: any) {
    this.AreaCode = e.target.value;
    this.loadDataImages();
  }

  checkSelected(event: any) {
    // console.log('sdfjsdfsdjfsdfsdfsdfs----' + this.CheckedImagesEmtry);
    if (event.target.checked) this.CheckedImagesEmtry = true;
    else this.CheckedImagesEmtry = false;

    this.loadDataImages();
    // this.ImagesContSeach.ToDate = e;
  }

  setOpen(item: any) {
    // this.mContainerService.mContNoPass.subscribe(message => this.message = message);
    // this.containerService.GetConNo(item.code);
    const dialogRef = this.dialog.open(ContainerImagesEditComponent);
    dialogRef.componentInstance.ImagesObj = item;

    dialogRef.afterClosed().subscribe(result => {
      this.loadDataImages()
      // console.log('-----------------------------');
      //  if (result) {
      //  }
    });

   }


}
