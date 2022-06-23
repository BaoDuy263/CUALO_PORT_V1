import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCreateComponent } from './setting-create.component';

describe('SettingCreateComponent', () => {
  let component: SettingCreateComponent;
  let fixture: ComponentFixture<SettingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
