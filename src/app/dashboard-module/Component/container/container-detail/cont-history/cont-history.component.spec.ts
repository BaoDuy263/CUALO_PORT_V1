import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContHistoryComponent } from './cont-history.component';

describe('ContHistoryComponent', () => {
  let component: ContHistoryComponent;
  let fixture: ComponentFixture<ContHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
