import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerImagesListComponent } from './container-images-list.component';

describe('ContainerImagesListComponent', () => {
  let component: ContainerImagesListComponent;
  let fixture: ComponentFixture<ContainerImagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerImagesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerImagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
