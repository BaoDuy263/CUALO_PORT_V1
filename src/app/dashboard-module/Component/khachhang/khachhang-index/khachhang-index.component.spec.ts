import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachhangIndexComponent } from './khachhang-index.component';

describe('KhachhangIndexComponent', () => {
  let component: KhachhangIndexComponent;
  let fixture: ComponentFixture<KhachhangIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhachhangIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhachhangIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
