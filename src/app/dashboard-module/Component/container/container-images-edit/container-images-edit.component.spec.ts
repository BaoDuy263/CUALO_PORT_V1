import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerImagesEditComponent } from './container-images-edit.component';

describe('ContainerImagesEditComponent', () => {
  let component: ContainerImagesEditComponent;
  let fixture: ComponentFixture<ContainerImagesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerImagesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerImagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
