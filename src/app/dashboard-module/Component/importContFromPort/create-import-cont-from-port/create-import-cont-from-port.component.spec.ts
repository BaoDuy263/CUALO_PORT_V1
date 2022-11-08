import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImportContFromPortComponent } from './create-import-cont-from-port.component';

describe('CreateImportContFromPortComponent', () => {
  let component: CreateImportContFromPortComponent;
  let fixture: ComponentFixture<CreateImportContFromPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateImportContFromPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateImportContFromPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
