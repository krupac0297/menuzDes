import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBusiness1Component } from './register-business1.component';

describe('RegisterBusiness1Component', () => {
  let component: RegisterBusiness1Component;
  let fixture: ComponentFixture<RegisterBusiness1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBusiness1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBusiness1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
