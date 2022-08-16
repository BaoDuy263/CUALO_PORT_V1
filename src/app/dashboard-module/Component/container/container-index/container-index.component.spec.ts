import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerIndexComponent } from './container-index.component';

describe('ContainerIndexComponent', () => {
  let component: ContainerIndexComponent;
  let fixture: ComponentFixture<ContainerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
