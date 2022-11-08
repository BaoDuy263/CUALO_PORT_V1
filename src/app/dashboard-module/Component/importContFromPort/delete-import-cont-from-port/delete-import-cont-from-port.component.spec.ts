import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteImportContFromPortComponent } from './delete-import-cont-from-port.component';

describe('DeleteImportContFromPortComponent', () => {
  let component: DeleteImportContFromPortComponent;
  let fixture: ComponentFixture<DeleteImportContFromPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteImportContFromPortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteImportContFromPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
