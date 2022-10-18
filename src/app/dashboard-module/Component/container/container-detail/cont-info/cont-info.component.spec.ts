import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContInfoComponent } from './cont-info.component';

describe('ContInfoComponent', () => {
  let component: ContInfoComponent;
  let fixture: ComponentFixture<ContInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
