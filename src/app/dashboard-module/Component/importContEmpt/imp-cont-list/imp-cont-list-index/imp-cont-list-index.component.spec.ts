import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpContListIndexComponent } from './imp-cont-list-index.component';

describe('ImpContListIndexComponent', () => {
  let component: ImpContListIndexComponent;
  let fixture: ComponentFixture<ImpContListIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpContListIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpContListIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
