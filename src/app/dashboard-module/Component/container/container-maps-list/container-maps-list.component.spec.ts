import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMapsListComponent } from './container-maps-list.component';

describe('ContainerMapsListComponent', () => {
  let component: ContainerMapsListComponent;
  let fixture: ComponentFixture<ContainerMapsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMapsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerMapsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
