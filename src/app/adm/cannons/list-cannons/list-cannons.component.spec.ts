import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCannonsComponent } from './list-cannons.component';

describe('ListCannonsComponent', () => {
  let component: ListCannonsComponent;
  let fixture: ComponentFixture<ListCannonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCannonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCannonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
