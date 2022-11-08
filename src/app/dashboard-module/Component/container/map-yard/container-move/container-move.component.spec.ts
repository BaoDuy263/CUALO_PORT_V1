import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMoveComponent } from './container-move.component';

describe('ContainerMoveComponent', () => {
  let component: ContainerMoveComponent;
  let fixture: ComponentFixture<ContainerMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
