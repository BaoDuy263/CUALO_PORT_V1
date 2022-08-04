import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportContFromPortComponent } from './import-cont-from-port.component';

describe('ImportContFromPortComponent', () => {
  let component: ImportContFromPortComponent;
  let fixture: ComponentFixture<ImportContFromPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportContFromPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportContFromPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
