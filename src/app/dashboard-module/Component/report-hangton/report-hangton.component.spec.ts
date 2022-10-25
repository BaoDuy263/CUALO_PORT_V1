import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHangtonComponent } from './report-hangton.component';

describe('ReportHangtonComponent', () => {
  let component: ReportHangtonComponent;
  let fixture: ComponentFixture<ReportHangtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportHangtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportHangtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
