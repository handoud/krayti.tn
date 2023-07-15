import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSudComponent } from './login-sud.component';

describe('LoginSudComponent', () => {
  let component: LoginSudComponent;
  let fixture: ComponentFixture<LoginSudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSudComponent]
    });
    fixture = TestBed.createComponent(LoginSudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
