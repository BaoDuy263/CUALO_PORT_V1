import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultidropdownComponent } from './multidropdown.component';

describe('MultidropdownComponent', () => {
  let component: MultidropdownComponent;
  let fixture: ComponentFixture<MultidropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultidropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultidropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
