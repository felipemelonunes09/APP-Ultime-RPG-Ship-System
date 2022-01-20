import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCannonsComponent } from './form-cannons.component';

describe('FormCannonsComponent', () => {
  let component: FormCannonsComponent;
  let fixture: ComponentFixture<FormCannonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCannonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCannonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
