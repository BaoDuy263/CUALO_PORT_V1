import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInoutImgsComponent } from './container-inout-imgs.component';

describe('ContainerInoutImgsComponent', () => {
  let component: ContainerInoutImgsComponent;
  let fixture: ComponentFixture<ContainerInoutImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerInoutImgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerInoutImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
