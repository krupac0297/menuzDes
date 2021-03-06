import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAboutStoreComponent } from './register-about-store.component';

describe('RegisterAboutStoreComponent', () => {
  let component: RegisterAboutStoreComponent;
  let fixture: ComponentFixture<RegisterAboutStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAboutStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAboutStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
