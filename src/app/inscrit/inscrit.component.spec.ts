import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritComponent } from './inscrit.component';

describe('InscritComponent', () => {
  let component: InscritComponent;
  let fixture: ComponentFixture<InscritComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscritComponent]
    });
    fixture = TestBed.createComponent(InscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
