import { Component,NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContainerActive } from 'src/app/Model/Container';
import { ContainerService } from 'src/app/Service/container/container.service';

@Component({
  selector: 'app-container-images-edit',
  templateUrl: './container-images-edit.component.html',
  styleUrls: ['./container-images-edit.component.css'],
})
export class ContainerImagesEditComponent implements OnInit {
  selectedCont: any;
  ContSelect: any;
  EditForm!: FormGroup;
  ImagesObj: any; //{ id: number; createdBy: string; createdOn: string; urlImage: string; } | undefined;
  UrlRoot: string = 'https://cclo.phanmem.one';
  lstCont: any = [];

  constructor(
    private containerService: ContainerService,
    public dialog: MatDialog,
    ) {

    this.EditForm = new FormGroup({
      code: new FormControl(''),
      note: new FormControl(''),
      id: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.containerService.Paging(1, '', 1200).subscribe((data) => {
      console.log(data.data);
      console.log(this.ImagesObj.id);
      this.lstCont = data.data;
    });
  }


  changeCont(event: any) {
    this.EditForm.value.code = event;
  }

  onSubmit() {
    this.EditForm.value.id = this.ImagesObj.id;
    //console.log(this.EditForm.value);
    this.containerService.ContainerImageEdit(this.EditForm.value).subscribe(response => {
     // this.dialogRef.close(response);
     const dialogRef = this.dialog.closeAll();
    });
  }
}
