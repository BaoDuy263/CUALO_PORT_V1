import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeximportContfromShipComponent } from './indeximport-contfrom-ship.component';

describe('IndeximportContfromShipComponent', () => {
  let component: IndeximportContfromShipComponent;
  let fixture: ComponentFixture<IndeximportContfromShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndeximportContfromShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndeximportContfromShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
