import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPopupComponent } from './container-popup.component';

describe('ContainerPopupComponent', () => {
  let component: ContainerPopupComponent;
  let fixture: ComponentFixture<ContainerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
