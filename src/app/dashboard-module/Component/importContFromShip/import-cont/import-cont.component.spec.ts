import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportContComponent } from './import-cont.component';

describe('ImportContComponent', () => {
  let component: ImportContComponent;
  let fixture: ComponentFixture<ImportContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportContComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
