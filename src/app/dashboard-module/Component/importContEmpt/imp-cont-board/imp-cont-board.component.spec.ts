import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpContBoardComponent } from './imp-cont-board.component';

describe('ImpContBoardComponent', () => {
  let component: ImpContBoardComponent;
  let fixture: ComponentFixture<ImpContBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpContBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpContBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
