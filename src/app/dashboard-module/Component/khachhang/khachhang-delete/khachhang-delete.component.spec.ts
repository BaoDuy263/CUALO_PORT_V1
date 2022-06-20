import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachhangDeleteComponent } from './khachhang-delete.component';

describe('KhachhangDeleteComponent', () => {
  let component: KhachhangDeleteComponent;
  let fixture: ComponentFixture<KhachhangDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhachhangDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhachhangDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
