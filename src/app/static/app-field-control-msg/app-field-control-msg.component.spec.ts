import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFieldControlMsgComponent } from './app-field-control-msg.component';

describe('AppFieldControlMsgComponent', () => {
  let component: AppFieldControlMsgComponent;
  let fixture: ComponentFixture<AppFieldControlMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFieldControlMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFieldControlMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
