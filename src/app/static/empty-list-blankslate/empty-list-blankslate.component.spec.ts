import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyListBlankslateComponent } from './empty-list-blankslate.component';

describe('EmptyListBlankslateComponent', () => {
  let component: EmptyListBlankslateComponent;
  let fixture: ComponentFixture<EmptyListBlankslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyListBlankslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyListBlankslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
