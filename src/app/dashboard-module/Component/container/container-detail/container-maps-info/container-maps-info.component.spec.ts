import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMapsInfoComponent } from './container-maps-info.component';

describe('ContainerMapsInfoComponent', () => {
  let component: ContainerMapsInfoComponent;
  let fixture: ComponentFixture<ContainerMapsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMapsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerMapsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
