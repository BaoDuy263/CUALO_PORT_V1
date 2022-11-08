import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanTriHeThongComponent } from './quan-tri-he-thong.component';

describe('QuanTriHeThongComponent', () => {
  let component: QuanTriHeThongComponent;
  let fixture: ComponentFixture<QuanTriHeThongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanTriHeThongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuanTriHeThongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
