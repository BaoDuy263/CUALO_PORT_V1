import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingBoardComponent } from './packing-board.component';

describe('PackingBoardComponent', () => {
  let component: PackingBoardComponent;
  let fixture: ComponentFixture<PackingBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackingBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
