import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContanerComponent } from './list-contaner.component';

describe('ListContanerComponent', () => {
  let component: ListContanerComponent;
  let fixture: ComponentFixture<ListContanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListContanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
