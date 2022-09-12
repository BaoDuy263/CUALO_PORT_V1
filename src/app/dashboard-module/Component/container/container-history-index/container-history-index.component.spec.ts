import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerHistoryIndexComponent } from './container-history-index.component';

describe('ContainerHistoryIndexComponent', () => {
  let component: ContainerHistoryIndexComponent;
  let fixture: ComponentFixture<ContainerHistoryIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerHistoryIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerHistoryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
