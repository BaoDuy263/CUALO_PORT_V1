import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerImgIndexComponent } from './container-img-index.component';

describe('ContainerImgIndexComponent', () => {
  let component: ContainerImgIndexComponent;
  let fixture: ComponentFixture<ContainerImgIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerImgIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerImgIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
