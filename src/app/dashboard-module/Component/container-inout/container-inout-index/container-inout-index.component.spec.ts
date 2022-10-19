import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInoutIndexComponent } from './container-inout-index.component';

describe('ContainerInoutIndexComponent', () => {
  let component: ContainerInoutIndexComponent;
  let fixture: ComponentFixture<ContainerInoutIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerInoutIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerInoutIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
