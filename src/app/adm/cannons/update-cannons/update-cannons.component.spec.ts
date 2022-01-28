import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCannonsComponent } from './update-cannons.component';

describe('UpdateCannonsComponent', () => {
  let component: UpdateCannonsComponent;
  let fixture: ComponentFixture<UpdateCannonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCannonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCannonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
