import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteimportContfromShipComponent } from './deleteimport-contfrom-ship.component';

describe('DeleteimportContfromShipComponent', () => {
  let component: DeleteimportContfromShipComponent;
  let fixture: ComponentFixture<DeleteimportContfromShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteimportContfromShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteimportContfromShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
