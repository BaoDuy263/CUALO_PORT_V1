import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaikhoanComponent } from './taikhoan.component';

describe('TaikhoanComponent', () => {
  let component: TaikhoanComponent;
  let fixture: ComponentFixture<TaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaikhoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
