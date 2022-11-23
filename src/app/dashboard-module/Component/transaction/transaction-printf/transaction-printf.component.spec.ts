import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPrintfComponent } from './transaction-printf.component';

describe('TransactionPrintfComponent', () => {
  let component: TransactionPrintfComponent;
  let fixture: ComponentFixture<TransactionPrintfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionPrintfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionPrintfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
