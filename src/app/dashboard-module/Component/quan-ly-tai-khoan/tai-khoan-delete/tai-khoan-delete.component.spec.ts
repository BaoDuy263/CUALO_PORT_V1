import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiKhoanDeleteComponent } from './tai-khoan-delete.component';

describe('TaiKhoanDeleteComponent', () => {
  let component: TaiKhoanDeleteComponent;
  let fixture: ComponentFixture<TaiKhoanDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiKhoanDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaiKhoanDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
