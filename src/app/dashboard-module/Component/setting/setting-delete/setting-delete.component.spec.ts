import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingDeleteComponent } from './setting-delete.component';

describe('SettingDeleteComponent', () => {
  let component: SettingDeleteComponent;
  let fixture: ComponentFixture<SettingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
