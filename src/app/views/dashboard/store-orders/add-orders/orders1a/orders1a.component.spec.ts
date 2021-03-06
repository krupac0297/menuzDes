import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Orders1aComponent } from './orders1a.component';

describe('Orders1aComponent', () => {
  let component: Orders1aComponent;
  let fixture: ComponentFixture<Orders1aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Orders1aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Orders1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
