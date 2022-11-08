import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMapsComponent } from './container-maps.component';

describe('ContainerMapsComponent', () => {
  let component: ContainerMapsComponent;
  let fixture: ComponentFixture<ContainerMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
