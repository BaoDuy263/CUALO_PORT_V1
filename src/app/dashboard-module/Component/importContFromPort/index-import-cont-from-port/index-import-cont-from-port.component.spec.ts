import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexImportContFromPortComponent } from './index-import-cont-from-port.component';

describe('IndexImportContFromPortComponent', () => {
  let component: IndexImportContFromPortComponent;
  let fixture: ComponentFixture<IndexImportContFromPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexImportContFromPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexImportContFromPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
