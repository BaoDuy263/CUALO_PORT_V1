import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiKhoanCreateComponent } from './tai-khoan-create.component';

describe('TaiKhoanCreateComponent', () => {
  let component: TaiKhoanCreateComponent;
  let fixture: ComponentFixture<TaiKhoanCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiKhoanCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaiKhoanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
