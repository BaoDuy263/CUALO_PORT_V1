import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateimportContfromShipComponent } from './createimport-contfrom-ship.component';

describe('CreateimportContfromShipComponent', () => {
  let component: CreateimportContfromShipComponent;
  let fixture: ComponentFixture<CreateimportContfromShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateimportContfromShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateimportContfromShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
