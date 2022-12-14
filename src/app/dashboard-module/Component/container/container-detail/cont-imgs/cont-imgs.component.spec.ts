import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContImgsComponent } from './cont-imgs.component';

describe('ContImgsComponent', () => {
  let component: ContImgsComponent;
  let fixture: ComponentFixture<ContImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContImgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
