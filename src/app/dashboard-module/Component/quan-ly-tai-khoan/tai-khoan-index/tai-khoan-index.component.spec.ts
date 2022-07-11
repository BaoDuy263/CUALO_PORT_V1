import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLTaiKhoanIndexComponent } from './tai-khoan-index.component';

describe('QLTaiKhoanIndexComponent', () => {
  let component: QLTaiKhoanIndexComponent;
  let fixture: ComponentFixture<QLTaiKhoanIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QLTaiKhoanIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QLTaiKhoanIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
