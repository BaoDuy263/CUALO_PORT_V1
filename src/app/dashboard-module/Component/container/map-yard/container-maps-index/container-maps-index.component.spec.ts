import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMapsIndexComponent } from './container-maps-index.component';

describe('ContainerMapsIndexComponent', () => {
  let component: ContainerMapsIndexComponent;
  let fixture: ComponentFixture<ContainerMapsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMapsIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerMapsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
