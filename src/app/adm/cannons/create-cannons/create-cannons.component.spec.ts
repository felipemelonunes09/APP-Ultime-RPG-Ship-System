import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCannonsComponent } from './create-cannons.component';

describe('CreateCannonsComponent', () => {
  let component: CreateCannonsComponent;
  let fixture: ComponentFixture<CreateCannonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCannonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCannonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
