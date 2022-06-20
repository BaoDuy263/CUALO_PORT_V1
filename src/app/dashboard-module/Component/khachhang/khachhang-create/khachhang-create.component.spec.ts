import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachhangCreateComponent } from './khachhang-create.component';

describe('KhachhangCreateComponent', () => {
  let component: KhachhangCreateComponent;
  let fixture: ComponentFixture<KhachhangCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhachhangCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhachhangCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
