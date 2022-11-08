import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerComponent } from './export-container.component';

describe('ExportContainerComponent', () => {
  let component: ExportContainerComponent;
  let fixture: ComponentFixture<ExportContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
