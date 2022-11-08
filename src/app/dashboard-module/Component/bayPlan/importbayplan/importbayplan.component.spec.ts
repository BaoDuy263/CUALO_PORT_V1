import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportbayplanComponent } from './importbayplan.component';

describe('ImportbayplanComponent', () => {
  let component: ImportbayplanComponent;
  let fixture: ComponentFixture<ImportbayplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportbayplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportbayplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
