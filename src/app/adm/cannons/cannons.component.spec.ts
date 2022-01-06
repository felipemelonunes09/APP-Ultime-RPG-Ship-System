import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannonsComponent } from './cannons.component';

describe('CannonsComponent', () => {
  let component: CannonsComponent;
  let fixture: ComponentFixture<CannonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CannonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
