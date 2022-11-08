import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportcontainershipComponent } from './exportcontainership.component';

describe('ExportcontainershipComponent', () => {
  let component: ExportcontainershipComponent;
  let fixture: ComponentFixture<ExportcontainershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportcontainershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportcontainershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
