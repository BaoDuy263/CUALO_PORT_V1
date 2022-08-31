import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContainerActive } from 'src/app/Model/Container';
import { ContainerService } from 'src/app/Service/container/container.service';

@Component({
  selector: 'app-container-images-edit',
  templateUrl: './container-images-edit.component.html',
  styleUrls: ['./container-images-edit.component.css'],
})
export class ContainerImagesEditComponent implements OnInit {
  EditForm!: FormGroup;
  ImagesObj: any; //{ id: number; createdBy: string; createdOn: string; urlImage: string; } | undefined;
  UrlRoot: string = 'https://cclo.phanmem.one';
  lstCont: any = [];

  constructor(private containerService: ContainerService) {
    this.EditForm = new FormGroup({
      code: new FormControl(''),
      note: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.containerService.Paging(1, '', 1200).subscribe((data) => {
      console.log(data.data);
      this.lstCont = data.data;
    });
  }

  onSubmit() {
    console.log('---'+this.EditForm.value.code+'######'+this.EditForm.value.note);
    this.containerService.ContainerImageEdit(this.EditForm.value).subscribe(response => {
     // this.dialogRef.close(response);
    });
  }
}
