import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexbayplanComponent } from './indexbayplan.component';

describe('IndexbayplanComponent', () => {
  let component: IndexbayplanComponent;
  let fixture: ComponentFixture<IndexbayplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexbayplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexbayplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
