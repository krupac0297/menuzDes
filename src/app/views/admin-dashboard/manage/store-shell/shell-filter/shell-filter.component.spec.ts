import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellFilterComponent } from './shell-filter.component';

describe('ShellFilterComponent', () => {
  let component: ShellFilterComponent;
  let fixture: ComponentFixture<ShellFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
