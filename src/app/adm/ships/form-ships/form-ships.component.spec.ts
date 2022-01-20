import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShipsComponent } from './form-ships.component';

describe('FormShipsComponent', () => {
  let component: FormShipsComponent;
  let fixture: ComponentFixture<FormShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
