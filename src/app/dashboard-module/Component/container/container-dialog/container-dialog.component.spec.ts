import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDialogComponent } from './container-dialog.component';

describe('ContainerDialogComponent', () => {
  let component: ContainerDialogComponent;
  let fixture: ComponentFixture<ContainerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
