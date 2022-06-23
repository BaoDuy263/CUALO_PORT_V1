import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingIndexComponent } from './setting-index.component';

describe('SettingIndexComponent', () => {
  let component: SettingIndexComponent;
  let fixture: ComponentFixture<SettingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
